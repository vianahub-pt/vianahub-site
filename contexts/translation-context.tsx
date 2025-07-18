"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { homeTranslations } from "@/app/translation"
import { navbarTranslations } from "@/app/translations/navbar" // Importar as novas traduções da Navbar

type Language = "pt" | "en" | "es" | "fr" | "de"

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
    // Tentar encontrar a tradução na navbarTranslations primeiro, depois em homeTranslations
    const navTranslation = navbarTranslations[language]?.[key as keyof (typeof navbarTranslations)[typeof language]]
    if (navTranslation) {
      return navTranslation
    }

    const homeTranslation = homeTranslations[language]?.[key as keyof (typeof homeTranslations)[typeof language]]
    return homeTranslation || key
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
