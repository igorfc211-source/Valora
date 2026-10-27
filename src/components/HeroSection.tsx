import { ArrowDown, ArrowRight, Bot, Check, CircleDot, Database, GitBranch, MessageSquare, ShieldCheck } from "lucide-react";

const flow = [
  { icon: MessageSquare, label: "Mensagem", detail: "Pedido de orçamento" },
  { icon: Bot, label: "Intenção", detail: "Novo projeto" },
  { icon: GitBranch, label: "Qualificação", detail: "Prazo e contexto" },
  { icon: Database, label: "Encaminhamento", detail: "CRM + equipe" },
];

export default function HeroSection() {
  return (
    <section className="relative border-b border-white/8">
      <div className="enterprise-grid absolute inset-0 opacity-15" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:min-h-[calc(100svh-68px)] lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-24">
        <div className="z-10 flex flex-col justify-center">
          <p className="mb-6 w-fit rounded-full border border-[#10d981]/25 bg-[#10d981]/[0.06] px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-[#8df5ce] uppercase">CRM + IA para operações B2B</p>
          <h1 className="hero-reveal max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-balance text-white sm:text-6xl lg:text-[4.2rem]">Do primeiro contato ao pós-venda, <span className="text-[#10d981]">cada oportunidade avança.</span></h1>
          <p className="hero-reveal-delay mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">CRM e automação com IA para responder rápido, qualificar conversas e apoiar sua equipe durante a negociação e o relacionamento após a venda.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#diagnostico" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#10d981] px-6 text-sm font-bold text-[#07120d] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10d981]">Solicitar diagnóstico <ArrowRight size={16} aria-hidden="true" /></a>
            <a href="#projetos" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-[#10d981]/50 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10d981]">Ver projetos <ArrowDown size={15} aria-hidden="true" /></a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs leading-5 text-white/50"><ShieldCheck size={15} className="shrink-0 text-[#10d981]" aria-hidden="true" />Mais continuidade comercial, com supervisão humana nas decisões importantes.</p>
        </div>

        <div className="relative z-10 flex items-center lg:justify-end">
          <div className="hero-visual w-full rounded-2xl border border-white/10 bg-[#121613] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.3)] sm:p-4">
            <div className="rounded-xl border border-white/8 bg-[#0b0d0c] p-4 sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div><p className="text-sm font-semibold">Jornada comercial conectada</p><p className="mt-1 text-xs text-white/50">Fluxo ilustrativo · dados fictícios</p></div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#10d981]/20 bg-[#10d981]/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#8df5ce]"><CircleDot size={11} aria-hidden="true" />CRM + IA</span>
              </div>
              <div className="mt-5 space-y-3">
                <div className="ml-auto max-w-[88%] rounded-xl rounded-tr-sm border border-white/10 bg-white/[0.045] p-3.5"><p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">Primeiro contato · exemplo</p><p className="mt-2 text-sm leading-6 text-white/85">Olá! Preciso de um orçamento para climatização da minha empresa.</p></div>
                <div className="max-w-[92%] rounded-xl rounded-tl-sm border border-[#10d981]/20 bg-[#10d981]/[0.06] p-3.5"><p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#8df5ce]"><Bot size={13} aria-hidden="true" />Triagem inteligente</p><p className="mt-2 text-sm leading-6 text-white/75">Reconhece o pedido, pergunta o que falta e organiza o contexto antes do encaminhamento.</p></div>
              </div>
              <div className="mt-5 grid gap-2 sm:grid-cols-4">
                {flow.map(({ icon: Icon, label, detail }, index) => <div key={label} className="relative rounded-lg border border-white/8 bg-white/[0.025] p-3"><div className="flex items-center justify-between"><Icon size={15} className="text-[#10d981]" aria-hidden="true" /><span className="text-[10px] text-white/40">0{index + 1}</span></div><p className="mt-3 text-xs font-semibold">{label}</p><p className="mt-1 text-[10px] leading-4 text-white/50">{detail}</p></div>)}
              </div>
              <div className="mt-3 flex items-start gap-3 rounded-md border border-white/8 bg-white/[0.025] p-3.5"><span className="mt-0.5 text-[#10d981]"><Check size={15} aria-hidden="true" /></span><p className="text-xs leading-5 text-white/55"><strong className="font-semibold text-white/75">Acompanhamento até o pós-venda:</strong> lembretes, histórico e próximos passos ajudam a equipe a manter a conversa ativa em cada etapa.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

