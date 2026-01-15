export type Lang = "en" | "fr";

export const dict = {
  en: {
    nav: { home: "Home", services: "Services", portfolio: "Portfolio", pricing: "Pricing", about: "About", contact: "Book" },
    cta: { book: "Book a Consultation", portfolio: "View Portfolio" },
    form: {
      title: "Book / Contact",
      name: "Full name",
      email: "Email",
      phone: "Phone (optional)",
      service: "Service",
      date: "Preferred date",
      msg: "Message",
      send: "Send inquiry",
      success: "Thanks! We’ll get back to you shortly.",
    },
  },
  fr: {
    nav: { home: "Accueil", services: "Services", portfolio: "Portfolio", pricing: "Tarifs", about: "À propos", contact: "Réserver" },
    cta: { book: "Réserver une consultation", portfolio: "Voir le portfolio" },
    form: {
      title: "Réserver / Contact",
      name: "Nom complet",
      email: "Email",
      phone: "Téléphone (optionnel)",
      service: "Service",
      date: "Date souhaitée",
      msg: "Message",
      send: "Envoyer",
      success: "Merci ! On revient vers vous rapidement.",
    },
  },
} as const;

export function t(lang: Lang) {
  return dict[lang];
}
