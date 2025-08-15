"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "pt" | "en" | "es" | "fr" | "de"

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pt: {
    // Navigation
    "nav.whatWeDo": "O que Fazemos",
    "nav.engineering": "Engenharia",
    "nav.security": "Segurança",
    "nav.institutional": "Institucional",
    "nav.contact": "Contacto",
    "nav.development": "Desenvolvimento",
    "nav.agile": "Metodologia Ágil",
    "nav.outsourcing": "Outsourcing",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.systemIntegration": "Integração de Sistemas",
    "nav.railway": "Ferroviário",
    "nav.road": "Rodoviário",
    "nav.solarEnergy": "Energia Solar",
    "nav.education": "Educação",
    "nav.government": "Governo",
    "nav.manufacturing": "Manufactura",
    "nav.financial": "Financeiro",
    "nav.retail": "Retalho",
    "nav.healthcare": "Saúde",
    "nav.cybersecurity": "Cibersegurança",
    "nav.backupSolutions": "Soluções de Backup",
    "nav.accessControl": "Controlo de Acesso",
    "nav.aboutUs": "Sobre Nós",
    "nav.opportunities": "Oportunidades",
    // Footer
    "footer.description": "Desenvolvemos tecnologias inovadoras que impulsionam o crescimento do seu negócio.",
    "footer.services": "Serviços",
    "footer.industries": "Setores",
    "footer.contact": "Contacto",
    "footer.email": "info@vianahub.com",
    "footer.phone": "+351 123 456 789",
    "footer.address": "Rua da Inovação, 123<br />4000-000 Porto, Portugal",
    "footer.copyright": "© 2024 VianaHub. Todos os direitos reservados.",
    "footer.privacy": "Privacidade",
    "footer.terms": "Termos",
    "footer.development": "Desenvolvimento",
    "footer.agile": "Metodologia Ágil",
    "footer.chatbot": "Chatbot",
    "footer.outsourcing": "Outsourcing",
    "footer.healthcare": "Saúde",
    "footer.financial": "Financeiro",
    "footer.education": "Educação",
    "footer.retail": "Retalho",
    // Footer Links
    "footer.link.whatWeDo.development": "Desenvolvimento",
    "footer.link.whatWeDo.agile": "Metodologia Ágil",
    "footer.link.whatWeDo.chatbot": "Chatbot",
    "footer.link.whatWeDo.outsourcing": "Outsourcing",
    "footer.link.industry.healthcare": "Saúde",
    "footer.link.industry.financial": "Financeiro",
    "footer.link.industry.education": "Educação",
    "footer.link.industry.retail": "Retalho",
  },
  en: {
    // Navigation
    "nav.whatWeDo": "What We Do",
    "nav.engineering": "Engineering",
    "nav.security": "Security",
    "nav.institutional": "Institutional",
    "nav.contact": "Contact",
    "nav.development": "Development",
    "nav.agile": "Agile Methodology",
    "nav.outsourcing": "Outsourcing",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.systemIntegration": "System Integration",
    "nav.railway": "Railway",
    "nav.road": "Road",
    "nav.solarEnergy": "Solar Energy",
    "nav.education": "Education",
    "nav.government": "Government",
    "nav.manufacturing": "Manufacturing",
    "nav.financial": "Financial",
    "nav.retail": "Retail",
    "nav.healthcare": "Healthcare",
    "nav.cybersecurity": "Cybersecurity",
    "nav.backupSolutions": "Backup Solutions",
    "nav.accessControl": "Access Control",
    "nav.aboutUs": "About Us",
    "nav.opportunities": "Opportunities",
    // Footer
    "footer.description": "We develop innovative technologies that drive your business growth.",
    "footer.services": "Services",
    "footer.industries": "Industries",
    "footer.contact": "Contact",
    "footer.email": "info@vianahub.com",
    "footer.phone": "+351 123 456 789",
    "footer.address": "Innovation Street, 123<br />4000-000 Porto, Portugal",
    "footer.copyright": "© 2024 VianaHub. All rights reserved.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.development": "Development",
    "footer.agile": "Agile Methodology",
    "footer.chatbot": "Chatbot",
    "footer.outsourcing": "Outsourcing",
    "footer.healthcare": "Healthcare",
    "footer.financial": "Financial",
    "footer.education": "Education",
    "footer.retail": "Retail",
    // Footer Links
    "footer.link.whatWeDo.development": "Development",
    "footer.link.whatWeDo.agile": "Agile Methodology",
    "footer.link.whatWeDo.chatbot": "Chatbot",
    "footer.link.whatWeDo.outsourcing": "Outsourcing",
    "footer.link.industry.healthcare": "Healthcare",
    "footer.link.industry.financial": "Financial",
    "footer.link.industry.education": "Education",
    "footer.link.industry.retail": "Retail",
  },
  es: {
    // Navigation
    "nav.whatWeDo": "Lo que Hacemos",
    "nav.engineering": "Ingeniería",
    "nav.security": "Seguridad",
    "nav.institutional": "Institucional",
    "nav.contact": "Contacto",
    "nav.development": "Desarrollo",
    "nav.agile": "Metodología Ágil",
    "nav.outsourcing": "Outsourcing",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.systemIntegration": "Integración de Sistemas",
    "nav.railway": "Ferroviario",
    "nav.road": "Carreteras",
    "nav.solarEnergy": "Energía Solar",
    "nav.education": "Educación",
    "nav.government": "Gobierno",
    "nav.manufacturing": "Manufactura",
    "nav.financial": "Financiero",
    "nav.retail": "Comercio",
    "nav.healthcare": "Salud",
    "nav.cybersecurity": "Ciberseguridad",
    "nav.backupSolutions": "Soluciones de Respaldo",
    "nav.accessControl": "Control de Acceso",
    "nav.aboutUs": "Sobre Nosotros",
    "nav.opportunities": "Oportunidades",
    // Footer
    "footer.description": "Desarrollamos tecnologías innovadoras que impulsan el crecimiento de su negocio.",
    "footer.services": "Servicios",
    "footer.industries": "Sectores",
    "footer.contact": "Contacto",
    "footer.email": "info@vianahub.com",
    "footer.phone": "+351 123 456 789",
    "footer.address": "Calle de la Innovación, 123<br />4000-000 Oporto, Portugal",
    "footer.copyright": "© 2024 VianaHub. Todos los derechos reservados.",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",
    "footer.development": "Desarrollo",
    "footer.agile": "Metodología Ágil",
    "footer.chatbot": "Chatbot",
    "footer.outsourcing": "Outsourcing",
    "footer.healthcare": "Salud",
    "footer.financial": "Financiero",
    "footer.education": "Educación",
    "footer.retail": "Comercio",
    // Footer Links
    "footer.link.whatWeDo.development": "Desarrollo",
    "footer.link.whatWeDo.agile": "Metodología Ágil",
    "footer.link.whatWeDo.chatbot": "Chatbot",
    "footer.link.whatWeDo.outsourcing": "Outsourcing",
    "footer.link.industry.healthcare": "Salud",
    "footer.link.industry.financial": "Financiero",
    "footer.link.industry.education": "Educación",
    "footer.link.industry.retail": "Comercio",
  },
  fr: {
    // Navigation
    "nav.whatWeDo": "Ce que Nous Faisons",
    "nav.engineering": "Ingénierie",
    "nav.security": "Sécurité",
    "nav.institutional": "Institutionnel",
    "nav.contact": "Contact",
    "nav.development": "Développement",
    "nav.agile": "Méthodologie Agile",
    "nav.outsourcing": "Externalisation",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Pages de Destination",
    "nav.systemIntegration": "Intégration de Systèmes",
    "nav.railway": "Ferroviaire",
    "nav.road": "Routier",
    "nav.solarEnergy": "Énergie Solaire",
    "nav.education": "Éducation",
    "nav.government": "Gouvernement",
    "nav.manufacturing": "Fabrication",
    "nav.financial": "Financier",
    "nav.retail": "Commerce de Détail",
    "nav.healthcare": "Santé",
    "nav.cybersecurity": "Cybersécurité",
    "nav.backupSolutions": "Solutions de Sauvegarde",
    "nav.accessControl": "Contrôle d'Accès",
    "nav.aboutUs": "À Propos de Nous",
    "nav.opportunities": "Opportunités",
    // Footer
    "footer.description":
      "Nous développons des technologies innovantes qui stimulent la croissance de votre entreprise.",
    "footer.services": "Services",
    "footer.industries": "Secteurs",
    "footer.contact": "Contact",
    "footer.email": "info@vianahub.com",
    "footer.phone": "+351 123 456 789",
    "footer.address": "Rue de l'Innovation, 123<br />4000-000 Porto, Portugal",
    "footer.copyright": "© 2024 VianaHub. Tous droits réservés.",
    "footer.privacy": "Confidentialité",
    "footer.terms": "Conditions",
    "footer.development": "Développement",
    "footer.agile": "Méthodologie Agile",
    "footer.chatbot": "Chatbot",
    "footer.outsourcing": "Externalisation",
    "footer.healthcare": "Santé",
    "footer.financial": "Financier",
    "footer.education": "Éducation",
    "footer.retail": "Commerce",
    // Footer Links
    "footer.link.whatWeDo.development": "Développement",
    "footer.link.whatWeDo.agile": "Méthodologie Agile",
    "footer.link.whatWeDo.chatbot": "Chatbot",
    "footer.link.whatWeDo.outsourcing": "Externalisation",
    "footer.link.industry.healthcare": "Santé",
    "footer.link.industry.financial": "Financier",
    "footer.link.industry.education": "Éducation",
    "footer.link.industry.retail": "Commerce",
  },
  de: {
    // Navigation
    "nav.whatWeDo": "Was Wir Tun",
    "nav.engineering": "Ingenieurwesen",
    "nav.security": "Sicherheit",
    "nav.institutional": "Institutionell",
    "nav.contact": "Kontakt",
    "nav.development": "Entwicklung",
    "nav.agile": "Agile Methodik",
    "nav.outsourcing": "Outsourcing",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.systemIntegration": "Systemintegration",
    "nav.railway": "Eisenbahn",
    "nav.road": "Straße",
    "nav.solarEnergy": "Solarenergie",
    "nav.education": "Bildung",
    "nav.government": "Regierung",
    "nav.manufacturing": "Fertigung",
    "nav.financial": "Finanzen",
    "nav.retail": "Einzelhandel",
    "nav.healthcare": "Gesundheitswesen",
    "nav.cybersecurity": "Cybersicherheit",
    "nav.backupSolutions": "Backup-Lösungen",
    "nav.accessControl": "Zugriffskontrolle",
    "nav.aboutUs": "Über Uns",
    "nav.opportunities": "Möglichkeiten",
    // Footer
    "footer.description": "Wir entwickeln innovative Technologien, die das Wachstum Ihres Unternehmens vorantreiben.",
    "footer.services": "Dienstleistungen",
    "footer.industries": "Branchen",
    "footer.contact": "Kontakt",
    "footer.email": "info@vianahub.com",
    "footer.phone": "+351 123 456 789",
    "footer.address": "Innovationsstraße, 123<br />4000-000 Porto, Portugal",
    "footer.copyright": "© 2024 VianaHub. Alle Rechte vorbehalten.",
    "footer.privacy": "Datenschutz",
    "footer.terms": "Bedingungen",
    "footer.development": "Entwicklung",
    "footer.agile": "Agile Methodik",
    "footer.chatbot": "Chatbot",
    "footer.outsourcing": "Outsourcing",
    "footer.healthcare": "Gesundheitswesen",
    "footer.financial": "Finanzwesen",
    "footer.education": "Bildung",
    "footer.retail": "Einzelhandel",
    // Footer Links
    "footer.link.whatWeDo.development": "Entwicklung",
    "footer.link.whatWeDo.agile": "Agile Methodik",
    "footer.link.whatWeDo.chatbot": "Chatbot",
    "footer.link.whatWeDo.outsourcing": "Outsourcing",
    "footer.link.industry.healthcare": "Gesundheitswesen",
    "footer.link.industry.financial": "Finanzwesen",
    "footer.link.industry.education": "Bildung",
    "footer.link.industry.retail": "Einzelhandel",
  },
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || translations.pt[key] || key
  }

  return (
    <TranslationContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}
