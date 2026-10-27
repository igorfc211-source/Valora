import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WebsiteExamplesSection from "../components/WebsiteExamplesSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import ImplementationSection from "../components/ImplementationSection";
import BenefitsSection from "../components/BenefitsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import ProcessStorySection from "../components/ProcessStorySection";
import PortfolioVideosSection from "../components/PortfolioVideosSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0d0c] text-white">
      <Header />
      <HeroSection />
      <ProblemSection />
      <PortfolioVideosSection />
      <ProcessStorySection />
      <SolutionSection />
      <section id="abordagem" className="scroll-mt-20 relative border-y border-white/[0.07] bg-[#121613] px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="section-label">Como pensamos</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="section-title mt-0">Engenharia para resolver o que trava a operação.</h2>
            <div>
              <p className="text-xl text-white/75 sm:text-2xl">Menos tarefas manuais. Mais processos inteligentes.</p>
              <div className="mt-8 divide-y divide-white/10 border-y border-white/10 sm:flex sm:divide-y-0 sm:divide-x">
                {["Engenharia", "Inteligência", "Integração", "Regras", "Medição"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 py-3 text-xs font-semibold uppercase tracking-wider text-white/75 sm:flex-1 sm:flex-col sm:items-start sm:px-4 sm:py-4 sm:text-sm first:sm:pl-0">
                    <span className="font-mono text-[10px] text-[#10d981]">0{index + 1}</span>{item}
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">Cada projeto combina automação, IA supervisionada e sistemas existentes conforme as necessidades e limites da operação.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="para-quem" className="scroll-mt-20 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="section-label">Para quem</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <h2 className="section-title mt-0">Começamos por serviços B2B com atendimento e vendas consultivas.</h2>
            <div>
              <div className="flex flex-wrap gap-2">
                {["Serviços B2B", "Climatização e PMOC", "Segurança eletrônica", "Saúde · fluxos administrativos", "Suporte B2B"].map((item) => (
                  <span key={item} className="rounded-full border border-white/12 px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-white/70">{item}</span>
                ))}
              </div>
              <p className="mt-8 max-w-xl text-base leading-7 text-white/55">O foco inicial são empresas que recebem solicitações recorrentes, precisam qualificar oportunidades ou organizar o acompanhamento. Outros segmentos podem ser avaliados pelo processo e pela viabilidade técnica.</p>
            </div>
          </div>
        </div>
      </section>
      <WebsiteExamplesSection />
      <section className="border-y border-white/10 bg-[#121613] px-5 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8df5ce]">Continuidade em cenários desafiadores</p><h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">Mesmo em uma crise, sua empresa pode continuar encontrando e acompanhando clientes.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">Nenhuma automação garante vendas. Um processo bem conectado ajuda a responder no tempo certo, priorizar oportunidades reais e manter o relacionamento ativo quando cada conversa importa.</p></div><a href="#diagnostico" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#10d981]/25 bg-[#10d981]/[0.08] px-5 text-sm font-semibold text-[#8df5ce] transition hover:bg-[#10d981]/[0.14]">Avaliar meu processo <span aria-hidden="true">→</span></a></div>
      </section>
      <ImplementationSection />
      <BenefitsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}

