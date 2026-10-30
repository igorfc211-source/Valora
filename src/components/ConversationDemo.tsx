import { ArrowRight, Bot, CheckCheck, GitBranch, Headphones, MessageCircle, RefreshCw } from "lucide-react";

const stages = [
  { icon: MessageCircle, title: "Mensagem", detail: "O pedido chega pelo WhatsApp." },
  { icon: Bot, title: "Intenção", detail: "A IA identifica o que a pessoa precisa." },
  { icon: GitBranch, title: "Qualificação", detail: "Perguntas certas completam o contexto." },
  { icon: Headphones, title: "Encaminhamento", detail: "O responsável recebe o histórico no CRM." },
];

export default function ConversationDemo() {
  return <section id="demonstracao" className="v-section conversation-section" aria-labelledby="conversation-title">
    <div className="v-container">
      <div className="conversation-layout">
        <div className="conversation-copy">
          <p className="v-eyebrow">02 / DO CONTATO AO CONTEXTO</p>
          <h2 id="conversation-title">Uma mensagem chega.<br/><em>O processo já sabe<br/>como continuar.</em></h2>
          <p>A triagem inteligente reconhece o pedido, pergunta o que falta e organiza o contexto antes do encaminhamento.</p>
          <p>Sua equipe entra na conversa com as informações certas para avançar. Sem pedir tudo de novo.</p>
          <a className="text-link" href="#contato">Desenhar um fluxo para meu negócio <ArrowRight size={16}/></a>
        </div>
        <div className="conversation-window" aria-label="Exemplo ilustrativo de conversa comercial no WhatsApp">
          <div className="conversation-header"><span className="conversation-avatar"><MessageCircle size={21}/></span><div><strong>Atendimento comercial</strong><span>Exemplo de triagem com IA</span></div><span className="conversation-channel">WHATSAPP</span></div>
          <div className="conversation-messages">
            <span className="conversation-date">EXEMPLO ILUSTRATIVO · DADOS FICTÍCIOS</span>
            <div className="message-bubble message-incoming"><small>PRIMEIRO CONTATO</small><p>Olá! Preciso de um orçamento para climatização da minha empresa.</p><span className="message-time">09:41</span></div>
            <div className="message-bubble message-outgoing"><small><Bot size={13}/> TRIAGEM INTELIGENTE</small><p>Olá! Posso ajudar. Em qual cidade fica a empresa? Você precisa de uma instalação nova ou de manutenção?</p><span className="message-time">09:41 <CheckCheck size={14}/></span></div>
            <div className="conversation-context"><span/><p><strong>Intenção identificada</strong>Orçamento de climatização · contexto em qualificação</p></div>
          </div>
          <div className="conversation-footnote">Perguntas e encaminhamentos seguem as regras da sua operação.</div>
        </div>
      </div>
      <ol className="conversation-flow" aria-label="Etapas da triagem comercial">{stages.map(({icon: Icon, title, detail}, i) => <li key={title}><div><Icon size={19}/><span>0{i + 1}</span></div><h3>{title}</h3><p>{detail}</p>{i < stages.length - 1 && <ArrowRight className="flow-connector" size={16} aria-hidden="true"/>}</li>)}</ol>
      <div className="after-sales"><span className="after-sales-icon"><RefreshCw size={21}/></span><div><h3>A conversa continua depois da venda.</h3><p>Follow-up de propostas, histórico no CRM e lembretes de retorno. Depois do fechamento, acompanhamento da entrega, satisfação e novas oportunidades de relacionamento.</p></div><span className="after-sales-label">ATÉ O PÓS-VENDA <ArrowRight size={15}/></span></div>
    </div>
  </section>;
}
