export const contactEmail = process.env.NEXT_PUBLIC_VALORA_CONTACT_EMAIL || "valora211@gmail.com";

export const faqs = [
  { q: "A solução funciona com as ferramentas que já utilizo?", a: "Depende das APIs, permissões, custos e limitações de cada ferramenta. No diagnóstico, avaliamos o que pode ser conectado e quais alternativas fazem sentido." },
  { q: "Preciso substituir meu CRM?", a: "Não necessariamente. O primeiro caminho é avaliar se o CRM atual pode participar do fluxo com segurança e confiabilidade." },
  { q: "A IA pode encaminhar o atendimento para uma pessoa?", a: "Sim. O encaminhamento humano pode ser previsto por regras, falta de confiança, exceções ou solicitação da própria pessoa." },
  { q: "Como funciona a implantação?", a: "Começamos pelo diagnóstico, definimos a arquitetura e os critérios de sucesso, implementamos em escopo acordado e validamos cenários antes de evoluir." },
  { q: "Como é calculado o investimento?", a: "Consideramos quantidade de etapas, integrações, volume, requisitos de segurança, testes e acompanhamento. O escopo e o investimento são definidos após entender o processo." },
  { q: "Existem custos adicionais com ferramentas?", a: "Podem existir custos de licenças, provedores de IA, mensageria, hospedagem e serviços de terceiros. Eles são avaliados e apresentados conforme o escopo." },
  { q: "Como meus dados são tratados?", a: "A arquitetura deve definir finalidade, coleta mínima, acesso, fornecedores, retenção e exclusão. Não envie dados sensíveis pelo formulário de diagnóstico." },
  { q: "O que acontece quando a IA não sabe responder?", a: "O fluxo pode pedir esclarecimento ou encaminhar a solicitação com o contexto disponível para uma pessoa, de acordo com as regras definidas." },
  { q: "Como medir se a automação está funcionando?", a: "Definimos indicadores adequados ao processo, como tempo de resposta, completude da triagem, volume encaminhado e falhas. Cliques isolados não demonstram resultado comercial." },
  { q: "É possível começar com um único processo?", a: "Sim. Um processo delimitado ajuda a validar viabilidade, operação e indicadores antes de ampliar o sistema." },
];

export const symptoms = [
  { surface: "Leads sem resposta", reality: "A oportunidade perde contexto e continuidade." },
  { surface: "Perguntas repetidas", reality: "A equipe repete informações em vez de avançar o atendimento." },
  { surface: "Dados copiados à mão", reality: "O histórico fica fragmentado entre canais e ferramentas." },
  { surface: "Encaminhamento incorreto", reality: "A solicitação chega sem prioridade ou para a equipe errada." },
  { surface: "Follow-up esquecido", reality: "A próxima ação depende da memória de alguém." },
  { surface: "Ferramentas isoladas", reality: "A operação precisa redigitar e conciliar informações." },
];

// Dados legados mantidos para componentes não usados na landing atual.
export const offers = [] as { name: string; audience: string; features: string[]; featured?: boolean }[];
export const outcomeSignals = [] as { title: string; detail: string }[];
export const brandShift = { before: [] as string[], after: [] as string[] };

