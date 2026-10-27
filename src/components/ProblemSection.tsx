"use client";

import { CircleAlert, DatabaseZap, MessageSquareWarning, MousePointerClick, Waypoints } from "lucide-react";
import { symptoms } from "../app/data/siteData";

const icons = [MousePointerClick, MessageSquareWarning, DatabaseZap, Waypoints];

export default function ProblemSection() {
  return (
    <section id="problema" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-label">O problema</p>
          <h2 className="section-title">Os gargalos aparecem no caminho da solicitação.</h2>
          <div className="mt-8 rounded-lg border border-[#10d981]/18 bg-[#10d981]/8 p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-[#8df5ce]">
              <CircleAlert size={17} aria-hidden="true" />
              O que acontece depois?
            </p>
            <p className="mt-3 text-sm leading-6 text-white/58">
              Muitas operações dependem de mensagens manuais, tarefas repetitivas e ferramentas que não compartilham o mesmo contexto.
            </p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="border-y border-white/10 bg-transparent py-5 sm:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Quando o processo depende de etapas manuais</p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/55 sm:justify-between">
              {["Mensagem recebida", "Triagem", "Registro", "Follow-up", "Comercial"].map((step, index) => <span key={step} className="flex items-center gap-2"><span className={`rounded border px-3 py-2 ${step === "???" || step === "Próxima ação" ? "border-white/10 text-white/65" : "border-white/10"}`}>{step}</span>{index < 4 && <span className="text-white/25">→</span>}</span>)}
            </div>
          </div>
          {symptoms.map((item, index) => {
            const Icon = icons[index] ?? CircleAlert;
            return (
            <article key={item.surface} className="border-t border-white/10 bg-transparent py-5 transition-colors duration-300 hover:border-[#10d981]/45">
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-white/38">0{index + 1} · sintoma</p>
                <span className="grid size-9 place-items-center border border-white/10 text-[#10d981]">
                  <Icon size={17} aria-hidden="true" />
                </span>
              </div>
              <p className="mt-2 text-xl font-semibold">{item.surface}</p>
              <div className="my-5 h-px bg-[#121613]/10" />
              <p className="text-sm text-white/50">Efeito na operação:</p>
              <p className="mt-1 text-lg font-semibold text-[#8df5ce]">{item.reality}</p>
            </article>
            );
          })}
          <div className="border-l border-[#10d981]/60 bg-transparent py-3 pl-5 sm:col-span-2">
            <p className="max-w-2xl text-xl font-semibold text-[#8df5ce]">
              A Valora conecta captura, qualificação e encaminhamento para que o interesse chegue ao comercial com contexto.
            </p>
          </div>
          <div className="border-t border-white/10 py-5 sm:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8df5ce]">Quando o fluxo está conectado</p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/65 sm:justify-between">
              {["Tráfego", "Captura", "Qualificação", "CRM / WhatsApp", "Comercial"].map((step, index) => <span key={step} className="flex items-center gap-2"><span className="rounded border border-[#10d981]/20 bg-[#10d981]/[0.04] px-3 py-2">{step}</span>{index < 4 && <span className="text-[#10d981]/60">→</span>}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


