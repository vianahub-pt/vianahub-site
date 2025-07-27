"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { homeTranslations } from "@/app/translation"
import { navbarTranslations } from "@/app/translations/navbar"
import { agileTranslations } from "@/app/what-we-do/agile/translation"
import { careersTranslations } from "@/app/careers/translation"
import { contactTranslations } from "@/app/contact/translation"
import { aboutTranslations } from "@/app/about/translation"

export type Language = "pt" | "en" | "es" | "fr" | "de"

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

// Combine all translations into a single object
const allTranslations = {
  pt: {
    ...homeTranslations.pt,
    ...navbarTranslations.pt,
    ...agileTranslations.pt,
    ...careersTranslations.pt,
    ...contactTranslations.pt,
    ...aboutTranslations.pt,
  },
  en: {
    ...homeTranslations.en,
    ...navbarTranslations.en,
    ...agileTranslations.en,
    ...careersTranslations.en,
    ...contactTranslations.en,
    ...aboutTranslations.en,
  },
  es: {
    ...homeTranslations.es,
    ...navbarTranslations.es,
    ...agileTranslations.es,
    ...careersTranslations.es,
    ...contactTranslations.es,
    ...aboutTranslations.es,
  },
  fr: {
    ...homeTranslations.fr,
    ...navbarTranslations.fr,
    ...agileTranslations.fr,
    ...careersTranslations.fr,
    ...contactTranslations.fr,
    ...aboutTranslations.fr,
  },
  de: {
    ...homeTranslations.de,
    ...navbarTranslations.de,
    ...agileTranslations.de,
    ...careersTranslations.de,
    ...contactTranslations.de,
    ...aboutTranslations.de,
  },
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    // Load language from localStorage on client side
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
    const translation = allTranslations[language]?.[key as keyof (typeof allTranslations)[typeof language]]
    return translation || key
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
