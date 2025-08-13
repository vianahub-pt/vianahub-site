"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Tipos para as traduções
export type Language = "pt" | "en" | "es" | "fr" | "de"

interface Translations {
  [key: string]: string
}

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

// Traduções vazias por enquanto - vamos preenchendo aos poucos
const translations: Record<Language, Translations> = {
  pt: {},
  en: {},
  es: {},
  fr: {},
  de: {},
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  // Carregar idioma do localStorage na inicialização
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["pt", "en", "es", "fr", "de"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Salvar idioma no localStorage quando mudar
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Função de tradução
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <TranslationContext.Provider value={{ language, setLanguage, t }}>{children}</TranslationContext.Provider>
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}
