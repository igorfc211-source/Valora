import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail } from "../data/siteData";

export const metadata: Metadata = {
  title: "Privacidade | Valora",
  description: "Como as informações enviadas no formulário de diagnóstico da Valora são utilizadas.",
};

export default function PrivacyPage() {
  return <main className="min-h-screen bg-[#101820] px-5 py-16 text-white sm:px-8 lg:py-24"><article className="mx-auto max-w-3xl"><Link href="/" className="text-sm text-[#8df5ce] hover:text-white">← Voltar à Valora</Link><p className="section-label mt-10">Privacidade</p><h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Privacidade e formulário de diagnóstico</h1><p className="mt-5 text-sm leading-6 text-white/55">Esta página descreve o tratamento previsto para as informações enviadas pelo formulário do site. O responsável pelo tratamento e o destino configurado devem ser confirmados pela Valora antes da publicação definitiva.</p><div className="mt-10 space-y-8 text-sm leading-7 text-white/65">
    <section><h2 className="text-lg font-semibold text-white">Informações solicitadas</h2><p className="mt-2">Nome, empresa, e-mail profissional, WhatsApp, desafio operacional e, opcionalmente, volume aproximado de solicitações, ferramentas utilizadas e contexto adicional. A página pode registrar a origem da visita e parâmetros UTM para entender a origem do contato.</p></section>
    <section><h2 className="text-lg font-semibold text-white">Finalidade e base do contato</h2><p className="mt-2">As informações são usadas para analisar a solicitação de diagnóstico e responder pelo canal informado. O envio depende da autorização expressa no formulário. Não inclua dados pessoais de clientes, pacientes, credenciais ou informações sensíveis.</p></section>
    <section><h2 className="text-lg font-semibold text-white">Destino, compartilhamento e retenção</h2><p className="mt-2">Quando o formulário estiver configurado, os dados serão encaminhados ao webhook privado definido no servidor. O fornecedor, local de armazenamento, controles de acesso, prazo de retenção e procedimento de exclusão dependem do destino efetivamente escolhido e devem ser publicados antes da coleta em produção. O site não carrega ferramentas de analytics de terceiros por padrão.</p></section>
    <section><h2 className="text-lg font-semibold text-white">Seus direitos e contato</h2><p className="mt-2">Para exercer direitos relacionados aos dados pessoais, utilize o canal oficial do controlador, que deverá ser informado pela Valora antes da coleta em produção.{contactEmail ? <> Contato comercial disponível: <a className="text-[#8df5ce] underline" href={`mailto:${contactEmail}`}>{contactEmail}</a>.</> : " Este canal ainda não está configurado."}</p></section>
    <p className="border-t border-white/10 pt-5 text-xs text-white/40">A configuração do destino, identificação do controlador e política real de retenção são requisitos pendentes para operação pública do formulário.</p>
  </div></article></main>;
}

