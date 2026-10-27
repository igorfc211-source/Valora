import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://valora.digital"),
  title: "Valora | Automação Inteligente e Sistemas Comerciais",
  description:
    "CRM e automação com IA para responder rápido, qualificar oportunidades e acompanhar clientes do primeiro contato ao pós-venda.",
  keywords: [
    "Valora",
    "aquisição comercial",
    "automação inteligente",
    "agentes de IA",
    "triagem de atendimento",
    "CRM",
    "integração comercial",
    "integração de sistemas",
    "automação comercial B2B",
  ],
  authors: [{ name: "Valora" }],
  creator: "Valora",
  openGraph: {
    title: "Valora | Automação Inteligente e Sistemas Comerciais",
    description:
      "Automação, IA e integrações para atendimento, qualificação e processos comerciais mais consistentes.",
    url: "https://valora.digital",
    siteName: "Valora",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valora | Automação Inteligente e Sistemas Comerciais",
    description:
      "Automação, agentes de IA e integração de sistemas para operações comerciais e atendimento.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full bg-[#0b0d0c] text-white">{children}</body>
    </html>
  );
}



