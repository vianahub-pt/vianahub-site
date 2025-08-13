"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Supported languages
export type Language = "pt" | "en" | "es" | "fr" | "de"

// Translation interface
interface Translations {
  [key: string]: any
}

// Translation context interface
interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

// Create context
const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

// Translation data - empty for now, will be filled gradually
const translations: Record<Language, Translations> = {
  pt: {},
  en: {},
  es: {},
  fr: {},
  de: {},
}

// Translation provider component
export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["pt", "en", "es", "fr", "de"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        // Fallback: return the key if translation not found
        return key
      }
    }

    return typeof value === "string" ? value : key
  }

  const value: TranslationContextType = {
    language,
    setLanguage,
    t,
  }

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
}

// Custom hook to use translation context
export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}
