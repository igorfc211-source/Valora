"use client";

import { ArrowDown, CheckCircle2 } from "lucide-react";
export default function ImplementationSection() {
  const steps = [
    { title: "Diagnóstico", items: ["Processos, ferramentas e gargalos", "Objetivos e linha de base"] },
    { title: "Arquitetura", items: ["Casos de uso e regras de negócio", "Integrações, limites e escalonamento"] },
    { title: "Implementação", items: ["Fluxos, agentes e integrações", "Testes com cenários autorizados"] },
    { title: "Monitoramento e evolução", items: ["Indicadores e correção de falhas", "Ajustes graduais do sistema"] },
  ];
  return (
    <section id="processo" className="border-y border-white/8 bg-[#111b23]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="section-label">Como funciona</p>
            <h2 className="section-title">Da primeira análise à operação acompanhada.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/50">
            Escopo, prazo e investimento dependem da complexidade do processo, do volume e das integrações necessárias.
          </p>
        </div>
        <div className="grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="relative border-l border-white/10 bg-transparent p-5 transition-colors duration-300 hover:border-[#10d981]/45">
              <span className="text-sm font-medium tracking-widest text-[#10d981]">
                0{index + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-white/52">
                {step.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="shrink-0 text-[#10d981]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              {index < steps.length - 1 && (
                <span className="absolute -bottom-2 left-1/2 grid size-6 -translate-x-1/2 place-items-center rounded-full border border-[#10d981]/24 bg-[#070909] text-[#10d981] lg:-right-4 lg:bottom-auto lg:left-auto lg:top-8 lg:translate-x-0 lg:-rotate-90">
                  <ArrowDown size={13} aria-hidden="true" />
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

