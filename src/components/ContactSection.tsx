"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { valoraContact, whatsappHref } from "../lib/contact";
import { trackValoraEvent } from "../lib/analytics";

export default function ContactSection() {
  return <section id="contato" className="v-section contact-section" aria-labelledby="contact-title">
    <div className="v-container contact-layout">
      <div className="contact-copy"><p className="v-eyebrow">08 / UMA CONVERSA MUDA O PRÓXIMO PASSO</p><h2 id="contact-title">Boas ideias merecem<br/><span>uma boa conversa.</span></h2><p>Conte o que você está construindo.<br/>Eu ajudo a desenhar o que vem depois.</p><div className="contact-signature"><span className="contact-signature-line"/><div><strong>Igor França <span>|</span> Valora</strong><small>Você fala diretamente com quem faz.</small></div></div></div>
      <div className="contact-channels">
        <a className="contact-channel contact-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer" onClick={() => trackValoraEvent("whatsapp_click", { location: "contact_section" })}><span className="channel-icon"><WhatsAppIcon width={27} height={27}/></span><div><span className="channel-label">VAMOS TIRAR A IDEIA DO PAPEL</span><h3>Me chama no WhatsApp</h3><span className="channel-address">{valoraContact.phoneLabel}</span></div><ArrowUpRight className="channel-arrow" size={24}/></a>
        <div className="contact-secondary"><a className="contact-channel" href={`mailto:${valoraContact.email}`}><span className="channel-icon"><Mail size={23}/></span><div><span className="channel-label">PREFERE ESCREVER?</span><h3>E-mail</h3><span className="channel-address">{valoraContact.email}</span></div><ArrowUpRight className="channel-arrow" size={19}/></a><a className="contact-channel" href={valoraContact.instagram} target="_blank" rel="noreferrer"><span className="channel-icon"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></span><div><span className="channel-label">ACOMPANHE A VALORA</span><h3>Instagram</h3><span className="channel-address">{valoraContact.instagramLabel}</span></div><ArrowUpRight className="channel-arrow" size={19}/></a></div>
        <p className="contact-alternative">Prefere organizar as ideias primeiro? <a href="#diagnostico">Conte seu cenário no formulário <ArrowUpRight size={12}/></a></p>
      </div>
    </div>
  </section>;
}
