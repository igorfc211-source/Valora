"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappHref } from "../lib/contact";
import { trackValoraEvent } from "../lib/analytics";

const challenges = ["Criar ou melhorar minha landing page", "Atendimento lento", "Qualificação de leads", "Agendamento", "Integração de ferramentas", "Automação de tarefas", "Organização do CRM", "Outro"];
const inputClass = "min-h-11 w-full rounded-lg border border-white/15 bg-white/[0.035] px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#10d981]/70 focus:ring-2 focus:ring-[#10d981]/20";

export default function CTASection() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [started, setStarted] = useState(false);
  function startForm() { if (started) return; setStarted(true); trackValoraEvent("form_start"); }
  function trackPrimary(location: string) { trackValoraEvent("primary_cta_click", { location }); }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setSending(true);
    setError("");
    const data = new FormData(form);
    const params = new URLSearchParams(window.location.search);
    const attribution = Object.fromEntries([...params].filter(([key]) => key.startsWith("utm_")).slice(0, 10));
    try {
      const response = await fetch("/api/diagnostico", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: data.get("name"), company: data.get("company"), email: data.get("email"), phone: data.get("phone"), challenge: data.get("challenge"), volume: data.get("volume"), tools: data.get("tools"), notes: data.get("notes"), privacyAcknowledged: data.get("privacy") === "on", website: data.get("website"), source: document.referrer || window.location.origin, attribution }) });
      if (!response.ok) throw new Error(response.status === 503 ? "unconfigured" : "failed");
      setSuccess(true);
      trackValoraEvent("form_submit");
    } catch (cause) {
      setError(cause instanceof Error && cause.message === "unconfigured" ? "O recebimento do formulário ainda não está configurado. Seus dados não foram enviados. Fale diretamente pelo WhatsApp para continuar." : "Não foi possível enviar sua solicitação agora. Tente novamente ou fale diretamente pelo WhatsApp.");
    } finally { setSending(false); }
  }

  return <>
    <section id="diagnostico" className="scroll-mt-24 border-y border-white/[0.07] bg-[#121613] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="pt-2"><p className="section-label">Diagnóstico inicial</p><h2 className="section-title">Vamos construir seu próximo passo.</h2><p className="mt-5 max-w-lg text-sm leading-6 text-white/60">Sua empresa precisa de uma página melhor, de um comercial mais organizado ou dos dois? Conte seu momento. Vou entender o cenário e indicar por onde começar.</p><p className="mt-4 text-xs leading-5 text-white/40">Não envie dados de pacientes, clientes ou outras informações sensíveis.</p></div>
        <div className="rounded-xl border border-white/10 bg-[#0b0d0c] p-4 sm:p-6">
          {success ? <div className="py-7 text-center" role="status"><span className="mx-auto grid size-12 place-items-center rounded-full bg-[#10d981]/12 text-[#10d981]"><Check size={22} aria-hidden="true" /></span><h3 className="mt-4 text-xl font-semibold">Solicitação enviada.</h3><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/60">Recebemos suas informações para avaliar o processo. A continuidade será feita pelo contato que você informou.</p>{whatsappHref && <a onClick={() => trackValoraEvent("whatsapp_click", { location: "form_success" })} href={whatsappHref} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 px-5 text-sm font-semibold hover:border-[#10d981]/50"><WhatsAppIcon width={15} height={15}/>Falar pelo WhatsApp</a>}</div> : <>
            <div className="mb-5"><p className="text-sm font-semibold">Vamos entender seu cenário.</p><p className="mt-1 text-xs text-white/40">Campos marcados com * são obrigatórios.</p></div>
            <form onSubmit={handleSubmit} onFocusCapture={startForm} className="grid gap-3 sm:grid-cols-2">
              <label className="grid gap-1.5 text-xs font-medium text-white/75">Nome *<input required name="name" autoComplete="name" minLength={2} maxLength={100} className={inputClass} placeholder="Seu nome"/></label>
              <label className="grid gap-1.5 text-xs font-medium text-white/75">Empresa *<input required name="company" autoComplete="organization" minLength={2} maxLength={120} className={inputClass} placeholder="Nome da empresa"/></label>
              <label className="grid gap-1.5 text-xs font-medium text-white/75">E-mail profissional *<input required name="email" type="email" autoComplete="email" maxLength={254} className={inputClass} placeholder="voce@empresa.com.br"/></label>
              <label className="grid gap-1.5 text-xs font-medium text-white/75">WhatsApp *<input required name="phone" type="tel" inputMode="tel" autoComplete="tel" minLength={10} maxLength={20} title="Informe um número com DDD." className={inputClass} placeholder="(11) 99999-9999"/></label>
              <label className="grid gap-1.5 text-xs font-medium text-white/75 sm:col-span-2">Principal desafio *<select required name="challenge" defaultValue="" className={inputClass}><option value="" disabled className="bg-[#121613]">Selecione o desafio mais importante</option>{challenges.map((item) => <option key={item} value={item} className="bg-[#121613]">{item}</option>)}</select></label>
              <label className="grid gap-1.5 text-xs font-medium text-white/75">Volume mensal <span className="text-[10px] font-normal text-white/40">Opcional</span><select name="volume" defaultValue="" className={inputClass}><option value="" className="bg-[#121613]">Prefiro não informar</option><option className="bg-[#121613]">Até 100 solicitações</option><option className="bg-[#121613]">101 a 500 solicitações</option><option className="bg-[#121613]">Mais de 500 solicitações</option></select></label>
              <label className="grid gap-1.5 text-xs font-medium text-white/75">Ferramentas atuais <span className="text-[10px] font-normal text-white/40">Opcional</span><input name="tools" maxLength={240} className={inputClass} placeholder="CRM, atendimento, agenda..."/></label>
              <label className="grid gap-1.5 text-xs font-medium text-white/75 sm:col-span-2">Contexto adicional <span className="text-[10px] font-normal text-white/40">Opcional</span><textarea name="notes" rows={3} maxLength={1000} className={`${inputClass} resize-y`} placeholder="Como o processo funciona hoje? Não inclua dados pessoais de clientes."/></label>
              <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true"><label>Deixe este campo vazio<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
              <p className="text-xs leading-5 text-white/48 sm:col-span-2"><strong className="text-white/70">Próximos passos:</strong> revisamos as informações e, havendo aderência, entramos em contato para uma conversa inicial.</p>
              <label className="flex items-start gap-2 text-[11px] leading-4 text-white/52 sm:col-span-2"><input required name="privacy" type="checkbox" className="mt-0.5 size-4 shrink-0 accent-[#10d981]"/><span>Autorizo o uso destes dados para responder à solicitação. Consulte a <a className="text-[#8df5ce] underline underline-offset-2" href="/privacidade" target="_blank" rel="noreferrer">Política de Privacidade</a>.</span></label>
              <div className="flex flex-col gap-3 pt-1 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between"><span className="text-[10px] leading-4 text-white/45">Conversa inicial sem compromisso.</span><button type="submit" disabled={sending} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#10d981] px-5 text-sm font-bold text-[#07120d] transition hover:bg-white disabled:cursor-wait disabled:opacity-70">{sending ? <><LoaderCircle className="animate-spin" size={15}/>Enviando</> : <>Solicitar diagnóstico <ArrowRight size={15}/></>}</button></div>
              {error && <p role="alert" className="rounded-md border border-red-300/25 bg-red-300/[0.06] p-3 text-xs leading-5 text-red-100 sm:col-span-2">{error} {whatsappHref && <a onClick={() => trackValoraEvent("whatsapp_click", { location: "form_error" })} href={whatsappHref} target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-2">Falar no WhatsApp.</a>}</p>}
            </form>
          </>}
        </div>
      </div>
    </section>
    <section className="relative border-t border-white/10 px-5 py-20 sm:px-6 lg:px-8 lg:py-24"><div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="section-label">Próximo passo</p><h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-6xl">Uma experiência melhor. Do primeiro clique à próxima conversa.</h2><p className="mt-5 text-base text-white/60">Design, atendimento e processo trabalhando na mesma direção.</p></div><a onClick={() => trackPrimary("cta_final")} href="#diagnostico" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-[#10d981]/40 bg-[#10d981] px-6 py-3 text-sm font-bold text-[#07120d] transition hover:-translate-y-0.5 hover:bg-white">Conversar sobre meu projeto <ArrowRight size={16} aria-hidden="true"/></a></div></section>
  </>;
}
