import { ArrowRight, Bot, CalendarClock, GitBranch, Headset, Puzzle, ScanSearch, type LucideIcon } from "lucide-react";

const modules: { title: string; problem: string; method: string; systems: string; indicator: string; icon: LucideIcon }[] = [
  { title: "Atendimento inteligente", problem: "Perguntas repetitivas e demora na primeira resposta.", method: "Agentes e fluxos respondem dentro de uma base e escalam o que exige uma pessoa.", systems: "Canais de atendimento e base de conhecimento, conforme viabilidade.", indicator: "Tempo de primeira resposta", icon: Headset },
  { title: "Triagem e qualificação", problem: "Solicitações chegam sem contexto ou para a equipe errada.", method: "Intenção e campos relevantes são identificados; regras definem prioridade e destino.", systems: "Formulários, CRM e filas de atendimento.", indicator: "Solicitações completas e corretamente encaminhadas", icon: ScanSearch },
  { title: "Integração de sistemas", problem: "Informações precisam ser copiadas entre ferramentas isoladas.", method: "APIs e webhooks conectam eventos, validam dados e registram o histórico.", systems: "Ferramentas atuais do negócio, após checagem de API e permissões.", indicator: "Etapas manuais por processo", icon: Puzzle },
  { title: "Automação comercial", problem: "Leads ficam sem próximo passo e o CRM perde atualização.", method: "Regras criam tarefas, atualizam registros e organizam follow-ups.", systems: "CRM, formulários, calendário e canais habilitados.", indicator: "Follow-ups realizados no prazo", icon: GitBranch },
  { title: "Agendamento e encaminhamento", problem: "Disponibilidade e contexto se perdem na troca de mensagens.", method: "Coleta de preferências, consulta à agenda habilitada e confirmação conforme regras.", systems: "Calendário e sistema de atendimento autorizado.", indicator: "Tempo até o agendamento", icon: CalendarClock },
  { title: "Monitoramento e evolução", problem: "Falhas e baixa qualidade passam despercebidas.", method: "Logs, alertas e revisão dos indicadores orientam ajustes graduais.", systems: "Painéis e registros definidos no escopo do projeto.", indicator: "Falhas, escalonamentos e volume automatizado", icon: Bot },
];

export default function SolutionSection() {
  return (
    <section id="solucao" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="section-label">Soluções</p><h2 className="section-title">Automação desenhada para a operação real.</h2></div><p className="max-w-2xl text-base leading-7 text-white/55">Mapeamos o processo, definimos onde regras e IA ajudam e conectamos as etapas que hoje dependem de trabalho manual. Cada integração depende de APIs, permissões, custos e limites técnicos validados.</p></div>
      <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
        {modules.map(({ title, problem, method, systems, indicator }, index) => <article key={title} className="solution-row grid gap-4 py-6 sm:grid-cols-[4rem_0.8fr_1.2fr] sm:items-start lg:grid-cols-[5rem_0.8fr_1.2fr_1fr]"><span className="font-mono text-xs text-[#10d981]">0{index + 1}</span><div><h3 className="text-lg font-medium">{title}</h3><p className="mt-2 text-xs leading-5 text-white/45">{problem}</p></div><p className="text-sm leading-6 text-white/55">{method}</p><div className="grid gap-2 text-[11px] leading-5 text-white/45 sm:grid-cols-2 lg:grid-cols-1"><p><span className="text-white/70">Sistemas:</span> {systems}</p><p><span className="text-white/70">Indicador possível:</span> {indicator}</p></div></article>)}
      </div>
      <a href="#diagnostico" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#10d981] hover:text-white">Mapear um processo <ArrowRight size={15} aria-hidden="true" /></a>
    </section>
  );
}

