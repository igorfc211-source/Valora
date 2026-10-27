import { Mail } from "lucide-react";
import Image from "next/image";
import { contactEmail } from "../app/data/siteData";

const quickLinks = [
  { href: "#solucao", label: "Soluções" },
  { href: "#demonstracao", label: "Demonstração" },
  { href: "#processo", label: "Como funciona" },
  { href: "#abordagem", label: "Abordagem" },
  { href: "#diagnostico", label: "Diagnóstico" },
];

export default function Footer() {
  return <footer className="border-t border-white/8 bg-[#0b0d0c]"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-8">
    <div><a href="#" className="inline-flex items-center gap-3" aria-label="Início — Igor França | Valora"><span className="grid size-10 place-items-center overflow-hidden rounded-lg bg-[#0b0d0c]"><Image src="/images/logo/logo1.png" alt="" width={532} height={264} className="logo-dark size-full object-contain" /><Image src="/images/logo/logoLight.png" alt="" width={535} height={264} className="logo-light size-full object-contain" /></span><span className="text-sm font-semibold tracking-[0.04em] text-white/88">Igor França <span className="text-[#10d981]">|</span> Valora</span></a><p className="mt-5 max-w-md text-sm leading-6 text-white/54">Consultoria de automação e sistemas inteligentes para processos comerciais e operacionais.</p><p className="mt-3 text-xs text-white/38">Menos tarefas manuais. Mais processos inteligentes.</p></div>
    <nav aria-label="Links rápidos"><p className="text-sm font-semibold text-white">Links rápidos</p><div className="mt-4 grid gap-3 text-sm text-white/54">{quickLinks.map((link) => <a key={link.href} href={link.href} className="transition hover:text-[#8df5ce]">{link.label}</a>)}<a href="/privacidade" className="transition hover:text-[#8df5ce]">Política de Privacidade</a></div></nav>
    {contactEmail && <div><p className="text-sm font-semibold text-white">Contato comercial</p><a href={`mailto:${contactEmail}`} className="mt-4 inline-flex items-center gap-2 text-sm text-white/54 transition hover:text-[#8df5ce]"><Mail size={15} aria-hidden="true"/>{contactEmail}</a></div>}
  </div><div className="border-t border-white/8 px-5 py-5 text-center text-xs text-white/36">© {new Date().getFullYear()} Valora. Informações empresariais e canais de contato serão exibidos quando configurados.</div></footer>;
}

