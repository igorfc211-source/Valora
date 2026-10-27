"use client";

import { ChevronDown } from "lucide-react";
import { faqs } from "../app/data/siteData";

export default function FAQSection() {
  return (
    <section id="faq" className="border-y border-white/8 bg-[#101820]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <div>
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Perguntas antes de implantar o sistema.</h2>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-base font-medium transition hover:text-[#8df5ce] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#10d981]">
                {faq.q}
                <ChevronDown size={18} className="shrink-0 text-[#10d981] transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/54">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

