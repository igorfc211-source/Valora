# Valora — direção comercial e próximos conteúdos

A página foi reorganizada para vender landing pages como primeira entrega, conectadas a CRM e automação conforme a necessidade. Os três projetos existentes mostram execução visual; não foram apresentados como provas de aumento de vendas.

## Antes de receber leads em produção

- Definir o WhatsApp oficial e o e-mail comercial em `.env.local`, usando `.env.example` como referência.
- Configurar `VALORA_LEAD_WEBHOOK_URL` e, quando necessário, `VALORA_LEAD_WEBHOOK_TOKEN`. O formulário só confirma recebimento após o destino aceitar a requisição. Testar a chegada ao CRM e o encaminhamento humano.
- Completar a página de privacidade com o responsável real, contato e práticas do destino utilizado.
- Confirmar domínio oficial: os metadados existentes usam `https://valora.digital`. Conferir também sitemap e robots.

## Conteúdo de maior impacto, em ordem

1. Foto real de Igor, com luz natural ou de estúdio, fundo neutro e enquadramento vertical. Substituir o monograma IF por essa fotografia. Vídeo curto de apresentação pode complementar.
2. Transformar os três trabalhos em estudos de projeto: contexto, público, seu papel, escopo, decisões de design, capturas desktop/mobile e link. Identificar trabalhos conceituais caso não tenham sido contratados. Só acrescentar números quando medidos e autorizados.
3. Criar três projetos voltados aos segmentos prioritários: clínica com agendamento administrativo; consultoria com qualificação e reunião; imobiliária com apresentação de empreendimento e solicitação de visita. Identificar explicitamente como projetos conceituais quando aplicável.
4. Gravar uma demonstração real de 60–90 segundos: formulário → CRM → próxima tarefa → mensagem → transferência humana. Usar dados fictícios na demonstração. Essa prova conecta seu portfólio de páginas à oferta de processos e automações.
5. Obter depoimentos verdadeiros com autorização, nome, função e relato específico. Pedir ao cliente para explicar o problema e a qualidade da entrega antes de pedir elogios genéricos.
6. Definir o produto inicial: o que uma landing page inclui, revisões, conteúdo necessário, hospedagem, domínio, manutenção e o que é contratado à parte. Publicar investimento inicial somente quando houver escopo e margem definidos.

## Identidade e segmentos

Avaliação de design: preto profundo, verde e composição editorial comunicam tecnologia, precisão e sofisticação. A identidade pode atender os três mercados, mas confiança depende também da linguagem, da pessoa responsável e de provas contextualizadas.

- Clínicas: equilibrar a aparência tecnológica com fotografia humana, calma e linguagem de cuidado. Mostrar agendamento e atendimento administrativo.
- Consultorias: destacar raciocínio, método, clareza da oferta e estudos de projeto.
- Imobiliárias: usar fotografia de imóveis, apresentação de empreendimentos e exemplos de acompanhamento comercial.

Manter a página principal ampla e criar páginas específicas por segmento quando houver oferta, conteúdo e prova próprios. Não transformar o posicionamento em uma promessa de atender qualquer necessidade.

## Referências consultadas

- Clay — https://clay.global/ — clareza de posicionamento, integração entre marca, design e tecnologia, destaque para trabalhos.
- Ramotion — https://www.ramotion.com/web-design/ — serviço orientado ao problema, portfólio, processo e explicação da entrega.

As referências orientaram a hierarquia e a narrativa. Textos, marcas e resultados dessas empresas não foram copiados para a Valora.

## Recebimento do formulário

O cadastro do e-mail de contato não ativa o envio automático de formulários.

Fluxo implementado: navegador → POST /api/diagnostico → validação no servidor → webhook configurado em VALORA_LEAD_WEBHOOK_URL.

Enquanto essa variável estiver vazia, o servidor retorna 503 e a tela informa que a solicitação não foi enviada. Não existe banco de leads neste projeto; os dados não ficam salvos automaticamente no site.

Uma configuração possível é usar um webhook de produção do n8n: receber o JSON, registrar o lead em um CRM ou planilha, enviar uma notificação para valora211@gmail.com e responder ao site somente depois de confirmar o registro. O e-mail deve conter nome, empresa, e-mail, WhatsApp, desafio e contexto adicional. O token do webhook fica apenas no servidor em VALORA_LEAD_WEBHOOK_TOKEN.

Após definir o destino, configurar as variáveis também na hospedagem e testar um envio completo até o registro e a notificação. A conexão com Gmail/CRM exige autenticação do proprietário; nenhuma conta foi conectada durante esta alteração.

Contatos publicados: WhatsApp +55 19 98192-3805; valora211@gmail.com; Instagram @valora.to.
