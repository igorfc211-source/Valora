"use client";

import { ArrowRight, CheckCircle2, Layers3 } from "lucide-react";
import { contactEmail, offers } from "../app/data/siteData";

function buildOfferMailto(name: string) {
  const article = name === "Sistema Comercial" ? "no" : "em";
  const subject = `Tenho interesse ${article} ${name}`;
  const body = `Olá Igor,

Tenho interesse em "${name}".

Gostaria de agendar um diagnóstico para entender como ela pode ser aplicada ao meu negócio.

Aguardo seu retorno.

Obrigado.`;

  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function OffersSection() {
  return (
    <section id="oferta" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="section-label">Solucoes</p>
        <h2 className="section-title">Escolha o ponto de partida certo para a maturidade digital da sua empresa.</h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/56">
          A Valora pode atuar na presenca, na aquisicao, na organizacao comercial ou na inteligencia que conecta tudo.
        </p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {offers.map((offer) => (
          <article
            key={offer.name}
            className={`flex rounded-lg border p-5 transition duration-300 hover:-translate-y-1 ${
              offer.featured
                ? "border-[#10d981]/36 bg-[#10d981]/10 shadow-[0_0_70px_rgba(16,217,129,0.1)]"
                : "border-white/10 bg-white/[0.035]"
            }`}
          >
            <div className="flex min-h-full w-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-10 place-items-center rounded-lg border border-[#10d981]/18 bg-[#10d981]/8 text-[#10d981]">
                  <Layers3 size={18} aria-hidden="true" />
                </span>
                {offer.featured && (
                  <p className="w-fit rounded-full bg-[#10d981] px-3 py-1 text-xs font-bold text-[#04120d]">
                    Mais completo
                  </p>
                )}
              </div>
              <h3 className="mt-5 text-2xl font-semibold">{offer.name}</h3>
              <p className="mt-4 min-h-24 text-sm leading-6 text-white/52">{offer.audience}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/58">
                {offer.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#10d981]" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={buildOfferMailto(offer.name)}
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-[#10d981] focus:ring-offset-2 focus:ring-offset-[#0b131a] ${
                  offer.featured
                    ? "bg-[#10d981] text-[#04120d] hover:bg-white"
                    : "border border-white/12 text-white hover:border-[#10d981]/36 hover:bg-white/8"
                }`}
              >
                Quero esta solução
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

