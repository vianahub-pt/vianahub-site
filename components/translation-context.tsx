"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "pt" | "en" | "es" | "fr" | "de"

const translations: Record<Language, Record<string, string>> = {
  pt: {
    "nav.contact": "Contacto",
    "nav.whatWeDo": "O que Fazemos",
    "nav.development": "Desenvolvimento",
    "nav.agile": "Metodologia Ágil",
    "nav.outsourcing": "Outsourcing",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.systemIntegration": "Integração de Sistemas",
  },
  en: {
    "nav.contact": "Contact",
    "nav.whatWeDo": "What We Do",
    "nav.development": "Development",
    "nav.agile": "Agile",
    "nav.outsourcing": "Outsourcing",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.systemIntegration": "System Integration",
  },
  es: {
    "nav.contact": "Contacto",
    "nav.whatWeDo": "Qué Hacemos",
    "nav.development": "Desarrollo",
    "nav.agile": "Metodología Ágil",
    "nav.outsourcing": "Outsourcing",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.systemIntegration": "Integración de Sistemas",
  },
  fr: {
    "nav.contact": "Contact",
    "nav.whatWeDo": "Ce Que Nous Faisons",
    "nav.development": "Développement",
    "nav.agile": "Méthodologie Agile",
    "nav.outsourcing": "Externalisation",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Pages d'Atterrissage",
    "nav.systemIntegration": "Intégration de Systèmes",
  },
  de: {
    "nav.contact": "Kontakt",
    "nav.whatWeDo": "Was Wir Tun",
    "nav.development": "Entwicklung",
    "nav.agile": "Agile Methodik",
    "nav.outsourcing": "Outsourcing",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.systemIntegration": "Systemintegration",
  },
}

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: ReactNode }) {
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
    const currentTranslations = translations[language]
    if (currentTranslations && currentTranslations[key]) {
      return currentTranslations[key]
    }

    // Fallback to Portuguese
    const fallbackTranslations = translations.pt
    if (fallbackTranslations && fallbackTranslations[key]) {
      return fallbackTranslations[key]
    }

    // Return key if no translation found
    return key
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
