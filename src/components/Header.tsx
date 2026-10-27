"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const themeAware = (dark: string) => `theme-switch ${dark}`;

const navLinks = [
  { href: "#solucao", label: "Soluções" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Como funciona" },
  { href: "#demonstracao", label: "Demonstração" },
  { href: "#abordagem", label: "Abordagem" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("valora-theme");
    const initialTheme = savedTheme === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = initialTheme;
    if (initialTheme === "light") document.documentElement.classList.add("theme-light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.classList.toggle("theme-light", nextTheme === "light");
    window.localStorage.setItem("valora-theme", nextTheme);
    window.dispatchEvent(new Event("valora-theme-change"));
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[#0b0d0c]/95 shadow-sm backdrop-blur-xl"
            : "border-white/8 bg-[#0b0d0c]/90 backdrop-blur-xl"
        }`}
      >
        <a href="#diagnostico" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-20 focus:z-[60] focus:bg-[#10d981] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#0b0d0c]">Ir para o diagnóstico</a>
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-6 lg:px-8 ${
            scrolled ? "py-3" : "py-4"
          }`}
        >
          <a href="#" className="group flex items-center gap-3" aria-label="Inicio Valora">
              <span className="relative grid size-10 place-items-center overflow-hidden rounded-xl bg-[#0b0d0c] transition-transform duration-300 group-hover:scale-[1.03]">
              <Image src={theme === "dark" ? "/images/logo/logo1.png" : "/images/logo/logoLight.png"} alt="" width={532} height={264} className="size-full object-contain" />
            </span>
            <span className="flex flex-col leading-none">
              <span className={`text-sm font-semibold tracking-[0.06em] ${themeAware("text-white")}`}>
                Igor França <span className="text-[#10d981]">|</span> Valora
              </span>
              <span className="mt-1 flex items-center gap-1.5 text-[10px] font-medium tracking-[0.14em] text-white/55 uppercase">
                <span className="relative flex size-1.5 rounded-full bg-[#10d981]" />
                Sistemas inteligentes
              </span>
            </span>
          </a>

          <div className={`hidden items-center gap-8 text-sm md:flex ${themeAware("text-white/70")}`}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`group relative py-1 transition hover:text-white ${themeAware("text-white/70")}`}>
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-[#10d981] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button type="button" onClick={toggleTheme} aria-label={`Ativar modo ${theme === "dark" ? "claro" : "escuro"}`} title={`Modo ${theme === "dark" ? "claro" : "escuro"}`} className="grid size-10 place-items-center rounded-lg border border-white/12 text-white/75 transition hover:bg-white/8 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#10d981]">
              {theme === "dark" ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
            </button>
            <a
              href="#diagnostico"
              className="hidden rounded-lg bg-[#10d981] px-4 py-2 text-sm font-semibold text-[#07120d] transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#10d981] focus:ring-offset-2 focus:ring-offset-[#0b0d0c] sm:inline-flex"
            >
              Solicitar diagnóstico
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-10 place-items-center rounded-lg border border-white/12 text-white transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-[#10d981] md:hidden"
            >
              {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </nav>

        <div
          className={`overflow-hidden border-t border-white/10 bg-[#0b0d0c] transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 px-5 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/6 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#diagnostico"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-[#10d981] px-4 py-2.5 text-center text-sm font-bold text-[#07120d]"
            >
              Solicitar diagnóstico
            </a>
          </div>
        </div>
      </header>
      <div className="h-[68px]" aria-hidden="true" />
    </>
  );
}

