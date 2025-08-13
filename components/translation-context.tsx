"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Tipos
export type Language = "pt" | "en" | "es" | "fr" | "de"

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

// Traduções vazias - serão preenchidas gradualmente
const translations: Record<Language, Record<string, any>> = {
  pt: {},
  en: {},
  es: {},
  fr: {},
  de: {},
}

// Context
const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

// Provider
export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  // Carregar idioma do localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["pt", "en", "es", "fr", "de"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Salvar idioma no localStorage
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Função de tradução
  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        // Fallback: retorna a chave se não encontrar tradução
        return key
      }
    }

    return typeof value === "string" ? value : key
  }

  return <TranslationContext.Provider value={{ language, setLanguage, t }}>{children}</TranslationContext.Provider>
}

// Hook
export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}
