"use client";

import { BarChart3, CheckCircle2, DatabaseZap, LayoutTemplate, Megaphone, type LucideIcon } from "lucide-react";
const servicePillars = [
  { name: "Engenharia", description: "Sistemas construídos para a operação real, com tratamento explícito de falhas e exceções.", items: ["Regras de negócio", "Validação e logs", "Fallback e handoff"] },
  { name: "Inteligência", description: "IA aplicada a tarefas específicas, com limites claros e supervisão humana onde necessário.", items: ["Casos de uso definidos", "Dados mínimos", "Escalonamento humano"] },
  { name: "Resultado mensurável", description: "Indicadores acompanham o fluxo para orientar correções e evolução gradual.", items: ["Tempo de resposta", "Qualidade da triagem", "Volume automatizado"] },
];

const icons: LucideIcon[] = [DatabaseZap, Megaphone, BarChart3];

export default function BenefitsSection() {
  return (
    <section id="diferencial" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="max-w-3xl">
        <p className="section-label">Arquitetura e confiança</p>
        <h2 className="section-title">Conectado com critério. Acompanhado com dados.</h2>
      </div>
      <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 lg:grid-cols-3">
        {servicePillars.map((pillar, index) => {
          const Icon = icons[index] ?? LayoutTemplate;
          return (
            <article key={pillar.name} className="border-l border-white/10 py-3 pl-5 transition-colors duration-300 hover:border-[#10d981]/50">
              <span className="mb-6 grid size-10 place-items-center border border-white/10 text-[#10d981]">
                <Icon size={18} aria-hidden="true" />
              </span>
              <p className="text-xl font-semibold text-[#8df5ce]">{pillar.name}</p>
              <p className="mt-3 min-h-20 text-sm leading-6 text-white/56">{pillar.description}</p>
              <ul className="mt-5 space-y-3 text-sm text-white/58">
                {pillar.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#10d981]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

