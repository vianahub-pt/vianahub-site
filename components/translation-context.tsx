"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "pt" | "en" | "es" | "fr" | "de"

interface Translations {
  [key: string]: {
    [lang in Language]: string
  }
}

const translations: Translations = {
  // Navigation
  "nav.whatWeDo": {
    pt: "O que Fazemos",
    en: "What We Do",
    es: "Qué Hacemos",
    fr: "Ce Que Nous Faisons",
    de: "Was Wir Tun",
  },
  "nav.engineering": {
    pt: "Engenharia",
    en: "Engineering",
    es: "Ingeniería",
    fr: "Ingénierie",
    de: "Ingenieurwesen",
  },
  "nav.contact": {
    pt: "Contacto",
    en: "Contact",
    es: "Contacto",
    fr: "Contact",
    de: "Kontakt",
  },
  "nav.development": {
    pt: "Desenvolvimento",
    en: "Development",
    es: "Desarrollo",
    fr: "Développement",
    de: "Entwicklung",
  },
  "nav.agile": {
    pt: "Metodologia Ágil",
    en: "Agile Methodology",
    es: "Metodología Ágil",
    fr: "Méthodologie Agile",
    de: "Agile Methodik",
  },
  "nav.outsourcing": {
    pt: "Outsourcing",
    en: "Outsourcing",
    es: "Externalización",
    fr: "Externalisation",
    de: "Outsourcing",
  },
  "nav.chatbot": {
    pt: "Chatbot",
    en: "Chatbot",
    es: "Chatbot",
    fr: "Chatbot",
    de: "Chatbot",
  },
  "nav.landingPages": {
    pt: "Landing Pages",
    en: "Landing Pages",
    es: "Páginas de Aterrizaje",
    fr: "Pages d'Atterrissage",
    de: "Landing Pages",
  },
  "nav.systemIntegration": {
    pt: "Integração de Sistemas",
    en: "System Integration",
    es: "Integración de Sistemas",
    fr: "Intégration de Systèmes",
    de: "Systemintegration",
  },
  "nav.railway": {
    pt: "Ferroviário",
    en: "Railway",
    es: "Ferroviario",
    fr: "Ferroviaire",
    de: "Eisenbahn",
  },
  "nav.road": {
    pt: "Rodoviário",
    en: "Road",
    es: "Carreteras",
    fr: "Routier",
    de: "Straße",
  },
  "nav.solarEnergy": {
    pt: "Energia Solar",
    en: "Solar Energy",
    es: "Energía Solar",
    fr: "Énergie Solaire",
    de: "Solarenergie",
  },
  "nav.education": {
    pt: "Educação",
    en: "Education",
    es: "Educación",
    fr: "Éducation",
    de: "Bildung",
  },
  "nav.government": {
    pt: "Governo",
    en: "Government",
    es: "Gobierno",
    fr: "Gouvernement",
    de: "Regierung",
  },
  "nav.manufacturing": {
    pt: "Manufactura",
    en: "Manufacturing",
    es: "Manufactura",
    fr: "Fabrication",
    de: "Fertigung",
  },
  "nav.financial": {
    pt: "Financeiro",
    en: "Financial",
    es: "Financiero",
    fr: "Financier",
    de: "Finanzen",
  },
  "nav.retail": {
    pt: "Retalho",
    en: "Retail",
    es: "Comercio",
    fr: "Commerce de Détail",
    de: "Einzelhandel",
  },
  "nav.healthcare": {
    pt: "Saúde",
    en: "Healthcare",
    es: "Salud",
    fr: "Santé",
    de: "Gesundheitswesen",
  },
}

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["pt", "en", "es", "fr", "de"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) {
      console.warn(`Translation key "${key}" not found`)
      return key
    }
    return translation[language] || translation.pt || key
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
