const MAX_BODY_BYTES = 12_000;
const allowedChallenges = new Set(["Atendimento lento", "Qualificação de leads", "Agendamento", "Integração de ferramentas", "Automação de tarefas", "Organização do CRM", "Outro"]);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) return Response.json({ error: "Formato inválido." }, { status: 415 });
  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_BODY_BYTES) return Response.json({ error: "Solicitação muito grande." }, { status: 413 });

  let body: Record<string, unknown>;
  try { body = await request.json() as Record<string, unknown>; }
  catch { return Response.json({ error: "JSON inválido." }, { status: 400 }); }

  // Honeypot: silently accept bots without forwarding their payload.
  if (clean(body.website, 200)) return Response.json({ ok: true });
  if (body.privacyAcknowledged !== true) return Response.json({ error: "Confirme o aviso de privacidade." }, { status: 400 });

  const lead = {
    name: clean(body.name, 100), company: clean(body.company, 120), email: clean(body.email, 254).toLowerCase(),
    phone: clean(body.phone, 30), challenge: clean(body.challenge, 80), volume: clean(body.volume, 80),
    tools: clean(body.tools, 240), notes: clean(body.notes, 1000), source: clean(body.source, 500),
    attribution: typeof body.attribution === "object" && body.attribution !== null ? body.attribution : {},
    submittedAt: new Date().toISOString(),
  };
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email);
  const phoneValid = /^[0-9()+.\s-]{10,20}$/.test(lead.phone);
  if (lead.name.length < 2 || lead.company.length < 2 || !emailValid || !phoneValid || !allowedChallenges.has(lead.challenge)) {
    return Response.json({ error: "Revise os campos obrigatórios." }, { status: 400 });
  }

  const webhook = process.env.VALORA_LEAD_WEBHOOK_URL;
  if (!webhook) return Response.json({ error: "O destino do formulário ainda não foi configurado." }, { status: 503 });
  let destination: URL;
  try { destination = new URL(webhook); }
  catch { return Response.json({ error: "Configuração inválida." }, { status: 503 }); }
  if (destination.protocol !== "https:" && process.env.NODE_ENV === "production") return Response.json({ error: "Configuração inválida." }, { status: 503 });

  try {
    const response = await fetch(destination, { method: "POST", headers: { "Content-Type": "application/json", ...(process.env.VALORA_LEAD_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.VALORA_LEAD_WEBHOOK_TOKEN}` } : {}) }, body: JSON.stringify({ ...lead, source: "Valora site · diagnóstico" }), signal: AbortSignal.timeout(8000), cache: "no-store" });
    if (!response.ok) return Response.json({ error: "Não foi possível encaminhar a solicitação." }, { status: 502 });
  } catch { return Response.json({ error: "Não foi possível encaminhar a solicitação." }, { status: 502 }); }
  return Response.json({ ok: true }, { status: 201 });
}

