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
