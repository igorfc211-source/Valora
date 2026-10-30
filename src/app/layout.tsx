import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://valora.digital"),
  title: "Valora | Landing Pages, CRM & Automação",
  description:
    "Landing pages profissionais, CRM e automação com IA. A Valora conecta presença digital e processo comercial, com atendimento direto de Igor França.",
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
    title: "Valora | Landing Pages, CRM & Automação",
    description:
      "Design com intenção. Landing pages, CRM e automação para conectar sua presença digital ao próximo passo comercial.",
    url: "https://valora.digital",
    siteName: "Valora",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valora | Landing Pages, CRM & Automação",
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
