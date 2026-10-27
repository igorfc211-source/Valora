import { ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";

const projects = [
  { name: "Estação Wall", category: "Marca e experiência digital", video: "/videos/landingPages/estacaoWall/estacao.mp4", url: "https://estacao-wall.vercel.app/", note: "Landing page · apresentação de produto" },
  { name: "MDC", category: "Presença digital", video: "/videos/landingPages/mdc/0622.mp4", url: "https://mdc-weld.vercel.app/", note: "Landing page · comunicação comercial" },
  { name: "Vila do Grão", category: "Marca e conversão", video: "/videos/landingPages/vilaDoGrao/landingPage.mp4", url: "https://vila-do-grao.vercel.app/", note: "Landing page · experiência de marca" },
];

export default function PortfolioVideosSection() {
  return <section id="projetos" className="scroll-mt-20 border-y border-white/10 bg-[#0b0d0c] px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div><p className="section-label">Projetos selecionados</p><h2 className="section-title">Landing pages feitas para apresentar marcas com clareza.</h2><div className="mt-5 flex flex-wrap items-center gap-5"><Image src="/images/logo/banner.png" alt="Valora — estratégia, sistema, resultados" width={1066} height={448} className="h-auto w-52 rounded-md"/><p className="text-sm font-medium text-white/65">Igor França <span className="text-[#10d981]">|</span> Valora</p></div></div>
        <p className="max-w-2xl text-sm leading-6 text-white/55">Explore os projetos em vídeo. A Valora une estratégia, experiência digital e tecnologia para transformar uma visita em um próximo passo claro.</p>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => <a key={project.name} href={project.url} target="_blank" rel="noreferrer" aria-label={`Abrir o site do projeto ${project.name} em nova aba`} className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#121613] shadow-[0_14px_44px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10d981]">
          <div className="relative bg-[#080a09]">
            <video className="aspect-[16/10] w-full object-cover" autoPlay muted loop playsInline preload="none" aria-label={`Vídeo do projeto ${project.name}`}>
              <source src={project.video} type="video/mp4" />
              Seu navegador não oferece suporte a vídeo HTML5.
            </video>
            <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0b0d0c]/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80"><Play size={12} fill="currentColor"/>Projeto 0{index + 1}</span>
          </div>
          <div className="p-5 text-white sm:p-6"><div className="flex items-start justify-between gap-3"><div><h3 className="text-xl font-semibold tracking-tight">{project.name}</h3><p className="mt-1 text-xs font-medium text-[#8df5ce]">{project.category}</p></div><ArrowUpRight size={18} className="mt-1 shrink-0 text-white/40 transition group-hover:text-[#10d981]" aria-hidden="true"/></div><p className="mt-5 border-t border-white/10 pt-4 text-xs text-white/50">{project.note} · Abrir projeto</p></div>
        </a>)}
      </div>
      <p className="mt-5 text-xs text-white/45">Projetos apresentados como portfólio visual. Resultados de negócio não são presumidos a partir das peças.</p>
    </div>
  </section>;
}
