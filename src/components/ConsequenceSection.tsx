"use client";

import { ArrowDown, BadgeCheck, Sparkles, TriangleAlert } from "lucide-react";
import { brandShift } from "../app/data/siteData";

export default function ConsequenceSection() {
  return (
    <section className="border-y border-white/8 bg-[#0a0c0b]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="section-label">Percepcao de marca</p>
          <h2 className="section-title">Seu site e uma das primeiras provas de que sua empresa merece confianca.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/56">
            Antes de uma reuniao, uma proposta ou uma indicacao avancar, a presenca digital ja esta influenciando o valor percebido.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <article className="rounded-lg border border-white/10 bg-[#070909] p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/42">Antes</p>
              <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/48">
                <TriangleAlert size={18} aria-hidden="true" />
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/54">
              {brandShift.before.map((item) => (
                <li key={item} className="rounded-md border border-white/8 bg-white/[0.025] px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <div className="grid place-items-center text-[#10d981]">
            <span className="grid size-10 place-items-center rounded-full border border-[#10d981]/24 bg-[#10d981]/10 lg:rotate-[-90deg]">
              <ArrowDown size={18} aria-hidden="true" />
            </span>
          </div>

          <article className="rounded-lg border border-[#10d981]/26 bg-[#10d981]/10 p-5 shadow-[0_0_70px_rgba(16,217,129,0.08)]">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8df5ce]">Depois</p>
              <span className="grid size-10 place-items-center rounded-lg border border-[#10d981]/18 bg-[#10d981]/8 text-[#10d981]">
                <Sparkles size={18} aria-hidden="true" />
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/72">
              {brandShift.after.map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-md bg-black/20 px-3 py-2">
                  <BadgeCheck size={14} className="shrink-0 text-[#10d981]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

