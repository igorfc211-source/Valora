export const valoraContact = {
  whatsapp: process.env.NEXT_PUBLIC_VALORA_WHATSAPP || "5519981923805",
  phoneLabel: "(19) 98192-3805",
  email: process.env.NEXT_PUBLIC_VALORA_CONTACT_EMAIL || "valora211@gmail.com",
  instagram: "https://www.instagram.com/valora.to/",
  instagramLabel: "@valora.to",
};

export const whatsappHref = `https://wa.me/${valoraContact.whatsapp}?text=${encodeURIComponent("Olá, Igor! Gostaria de conversar sobre um projeto com a Valora.")}`;
