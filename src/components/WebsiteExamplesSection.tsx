"use client";

import { useState } from "react";
import { ArrowRight, Bot, Check, ClipboardList, GitBranch, MessageSquare, UserRound } from "lucide-react";
import { trackValoraEvent } from "../lib/analytics";

const scenarios = {
  "Pedido de orçamento": {
    sector: "Empresa de serviços",
    message: "Preciso de um orçamento para instalar câmeras na minha empresa.",
    intent: "Solicitação comercial de segurança eletrônica",
    questions: ["Cidade e tipo de imóvel", "Quantidade aproximada de pontos", "Prazo desejado"],
    rules: "Validar região atendida e presença dos dados mínimos antes de criar a oportunidade.",
    record: "Origem · segurança eletrônica | Necessidade · instalação | Prazo · a confirmar",
    next: "Criar registro no CRM e encaminhar para o consultor responsável pela região.",
  },
  "Agendamento": {
    sector: "Clínica · exemplo administrativo",
    message: "Olá, gostaria de saber os horários disponíveis para uma consulta.",
    intent: "Solicitação administrativa de agendamento",
    questions: ["Especialidade procurada", "Preferência de dia e período", "Unidade desejada"],
    rules: "Consultar apenas a agenda autorizada; confirmar disponibilidade antes de oferecer horário.",
    record: "Intenção · agendamento | Preferência · a confirmar | Unidade · a confirmar",
    next: "Encaminhar para confirmação conforme o sistema de agenda e o fluxo da clínica.",
  },
  "Suporte B2B": {
    sector: "Equipe B2B de suporte",
    message: "Não consigo acessar o painel desde a atualização de hoje.",
    intent: "Problema de acesso após atualização",
    questions: ["Empresa e usuário afetado", "Mensagem de erro", "Impacto e urgência"],
    rules: "Classificar prioridade por impacto; sem credenciais ou dados sensíveis no chat.",
    record: "Categoria · acesso | Impacto · em validação | Evidências · solicitar com segurança",
    next: "Registrar chamado com contexto e escalar para a fila adequada.",
  },
} as const;

type Scenario = keyof typeof scenarios;

export default function WebsiteExamplesSection() {
  const [selected, setSelected] = useState<Scenario>("Pedido de orçamento");
  const scenario = scenarios[selected];
  const choose = (name: Scenario) => { setSelected(name); trackValoraEvent("demo_interaction", { scenario: name }); };

  return (
    <section id="demonstracao" className="scroll-mt-20 border-y border-white/10 bg-[#121613]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end"><div><p className="section-label">Como funciona na prática</p><h2 className="section-title">CRM + IA: resposta rápida com contexto para vender melhor.</h2></div><p className="max-w-2xl text-sm leading-6 text-white/55">Explore um fluxo ilustrativo de CRM + IA. A triagem organiza o contexto, as regras orientam o encaminhamento e a equipe recebe próximos passos claros.</p></div>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Escolher cenário da demonstração">{(Object.keys(scenarios) as Scenario[]).map((name) => <button key={name} type="button" aria-pressed={selected === name} onClick={() => choose(name)} className={`min-h-11 border px-4 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 ${selected === name ? "border-[#10d981]/30 bg-[#10d981]/[0.06] text-[#8df5ce]" : "border-white/10 text-white/55 hover:border-white/25 hover:text-white"}`}>{name}</button>)}</div>
        <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-white/10 bg-[#0b0d0c] p-5 sm:p-7"><div className="flex items-center justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">Entrada · {scenario.sector}</p><p className="mt-1 text-sm text-white/80">Mensagem simulada</p></div><MessageSquare size={17} className="text-[#10d981]" aria-hidden="true" /></div><div className="mt-5 border-l border-white/15 bg-white/[0.04] p-4 text-sm leading-6 text-white/80">“{scenario.message}”</div><div className="mt-4 flex items-start gap-3 border-l border-[#10d981]/30 bg-[#10d981]/[0.06] p-4"><Bot size={17} className="mt-0.5 shrink-0 text-[#10d981]" aria-hidden="true"/><div><p className="text-xs font-semibold text-[#8df5ce]">Interpretação assistida por IA</p><p className="mt-1 text-sm leading-5 text-white/70">{scenario.intent}</p></div></div><div className="mt-5"><p className="text-xs font-semibold text-white/70">Informações a qualificar</p><ul className="mt-2 space-y-2">{scenario.questions.map((question) => <li key={question} className="flex items-center gap-2 text-xs text-white/55"><span className="size-1.5 rounded-full bg-white/30"/>{question}</li>)}</ul></div></div>
          <div className="border border-white/10 bg-[#0b0d0c] p-5 sm:p-7"><div className="flex items-center gap-2"><GitBranch size={16} className="text-[#10d981]" aria-hidden="true"/><p className="text-sm font-semibold">Regras, registro e handoff</p></div><div className="mt-5 border-t border-white/10 p-4"><p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">Regra determinística</p><p className="mt-2 text-sm leading-6 text-white/70">{scenario.rules}</p></div><div className="mt-3 border-t border-white/10 p-4"><p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-white/45"><ClipboardList size={13}/>Registro estruturado · exemplo</p><p className="mt-2 text-sm leading-6 text-white/70">{scenario.record}</p></div><div className="mt-3 border-l border-[#10d981]/30 bg-[#10d981]/[0.06] p-4"><p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#8df5ce]"><UserRound size={13}/>Próxima etapa</p><p className="mt-2 text-sm leading-6 text-white/70">{scenario.next}</p></div><div className="mt-4 flex items-center gap-2 text-[11px] text-white/45"><Check size={14} className="text-[#10d981]"/>Se a mensagem exigir julgamento ou sair das regras, encaminhar para uma pessoa.</div></div>
        </div>
        <a href="#diagnostico" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#8df5ce] hover:text-white">Analisar um processo da minha empresa <ArrowRight size={15} aria-hidden="true" /></a>
      </div>
    </section>
  );
}

