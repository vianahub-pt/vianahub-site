"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { navbarTranslations } from "@/app/translations/navbar"
import { homeTranslations } from "@/app/translation"

type Language = "pt" | "en" | "es" | "fr" | "de"

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
    // Primeiro tenta buscar nas traduções da navbar
    const navbarTranslation = navbarTranslations[language]?.[key]
    if (navbarTranslation) {
      return navbarTranslation
    }

    // Depois tenta buscar nas traduções da home
    const homeTranslation = homeTranslations[language]?.[key]
    if (homeTranslation) {
      return homeTranslation
    }

    // Se não encontrar, retorna a chave
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
