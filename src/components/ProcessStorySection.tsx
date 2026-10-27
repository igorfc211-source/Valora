import { ArrowRight, Bot, Check, CircleDot, Database, GitBranch, Inbox, Layers3 } from "lucide-react";

const panels = [
  { number: "01", title: "Entrada", statement: "As solicitações chegam por muitos caminhos.", detail: "Mensagens, formulários e contatos chegam em momentos diferentes e com contextos distintos.", labels: ["WhatsApp", "Formulário", "E-mail"], icon: Inbox, result: "Uma única intenção, muitas portas de entrada." },
  { number: "02", title: "Interpretação", statement: "O contexto é entendido antes da resposta.", detail: "A IA identifica intenção e organiza informações; perguntas complementares reduzem lacunas sem improvisar regras.", labels: ["Intenção", "Contexto", "Qualificação"], icon: Bot, result: "IA interpreta. Regras definem o que pode acontecer." },
  { number: "03", title: "Organização", statement: "Dados validados seguem um caminho definido.", detail: "Campos necessários são estruturados e verificações determinísticas decidem prioridade, elegibilidade e destino.", labels: ["Validação", "Regras", "Registro"], icon: GitBranch, result: "Menos cópia manual. Mais rastreabilidade." },
  { number: "04", title: "Ação", statement: "A próxima etapa começa com o contexto certo.", detail: "O sistema atualiza a ferramenta habilitada, inicia a tarefa prevista ou encaminha para uma pessoa.", labels: ["CRM", "Fila", "Handoff"], icon: Database, result: "O trabalho continua no lugar adequado." },
  { number: "05", title: "Visibilidade", statement: "O processo pode ser observado e aprimorado.", detail: "Histórico e indicadores ajudam a localizar falhas, medir etapas e escolher a próxima melhoria.", labels: ["Histórico", "Indicadores", "Evolução"], icon: Layers3, result: "Evolução orientada por evidências." },
];

function PanelVisual({ index, labels, Icon }: { index: number; labels: readonly string[]; Icon: typeof Inbox }) {
  return <div className="story-visual"><div className="flex items-center justify-between border-b border-white/10 pb-3"><span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/55">Etapas relacionadas</span><span className="font-mono text-[10px] text-white/40">0{index + 1}</span></div><div className="mt-3 flex flex-wrap gap-1.5">{labels.map((label) => <span key={label} className="story-node rounded-md border border-white/10 bg-white/[0.025] px-2 py-1.5 text-[10px] text-white/65">{label}</span>)}</div><div className="mt-3 flex items-center gap-3 rounded-lg border border-[#10d981]/20 bg-[#10d981]/[0.05] p-3"><span className="grid size-9 shrink-0 place-items-center rounded-md bg-[#10d981]/10 text-[#10d981]"><Icon size={17} aria-hidden="true"/></span><span><span className="block text-[9px] uppercase tracking-wider text-white/45">Etapa do processo</span><span className="mt-0.5 block text-xs font-semibold text-[#8df5ce]">{panels[index].title}</span></span></div><div className="mt-3 flex items-center gap-2 text-[10px] text-white/48"><CircleDot size={11} className="text-[#10d981]"/>Fluxo demonstrativo</div></div>;
}

export default function ProcessStorySection() {
  return <section aria-labelledby="story-title" className="process-story border-y border-white/10 bg-[#0b0d0c]">
    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24"><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="section-label">A jornada comercial completa</p><h2 id="story-title" className="section-title">Do primeiro contato ao pós-venda, sem perder o fio da conversa.</h2></div><p className="max-w-xl text-sm leading-6 text-white/55">A Valora organiza triagem, negociação, acompanhamento e relacionamento em um processo conectado ao CRM — mesmo quando o cenário econômico exige mais eficiência de cada oportunidade.</p></div>
      <div className="story-track mt-12" aria-label="Cinco etapas de estruturação de um processo empresarial">
        {panels.map(({ number, title, statement, detail, labels, icon: Icon, result }, index) => <article key={number} className="story-panel"><div className="story-panel-inner"><div className="story-copy"><p className="font-mono text-xs tracking-[0.18em] text-[#10d981]">{number} <span className="text-white/30">/ 05</span></p><h3 className="mt-5 max-w-lg text-2xl font-medium leading-[1.12] tracking-[-0.025em] text-white text-balance">{statement}</h3><p className="mt-4 max-w-md text-sm leading-6 text-white/55">{detail}</p><p className="mt-6 flex items-start gap-3 border-t border-white/10 pt-4 text-xs leading-5 text-white/70"><Check size={15} className="mt-0.5 shrink-0 text-[#10d981]" aria-hidden="true"/>{result}</p></div><PanelVisual index={index} labels={labels} Icon={Icon}/></div><span className="story-bottom-label">{title}</span></article>)}
      </div>
      <a href="#demonstracao" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#8df5ce] transition hover:text-white">Explorar uma demonstração interativa <ArrowRight size={14} aria-hidden="true"/></a>
    </div>
  </section>;
}

