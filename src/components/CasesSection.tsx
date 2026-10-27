"use client";

import { Activity, BarChart3, Gauge, ShieldCheck } from "lucide-react";
import { outcomeSignals } from "../app/data/siteData";

const icons = [ShieldCheck, Gauge, Activity, BarChart3];

export default function CasesSection() {
  return (
    <section id="resultado" className="border-y border-white/8 bg-[#0a0c0b]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="section-label">Resultado esperado</p>
            <h2 className="section-title">Impacto na percepcao da marca e na organizacao comercial.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/56">
            Sem prometer numeros antes do diagnostico. A pagina prepara a empresa para melhorar a primeira impressao, capturar melhor e medir com mais clareza.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomeSignals.map((item, index) => {
            const Icon = icons[index] ?? ShieldCheck;
            return (
              <article key={item.title} className="rounded-lg border border-white/10 bg-[#070909] p-5 transition duration-300 hover:border-[#10d981]/28 hover:bg-white/[0.035]">
                <span className="mb-6 grid size-10 place-items-center rounded-lg border border-[#10d981]/18 bg-[#10d981]/8 text-[#10d981]">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <p className="text-3xl font-semibold text-[#8df5ce]">{item.title}</p>
                <p className="mt-4 text-sm leading-6 text-white/56">{item.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

