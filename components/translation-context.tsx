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
const translations: Record<Language, Record<string, string>> = {
  pt: {
    "nav.contact": "Contacto",
  },
  en: {
    "nav.contact": "Contact",
  },
  es: {
    "nav.contact": "Contacto",
  },
  fr: {
    "nav.contact": "Contact",
  },
  de: {
    "nav.contact": "Kontakt",
  },
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

  // Função de tradução simplificada
  const t = (key: string): string => {
    const translation = translations[language]?.[key]
    if (translation) {
      return translation
    }

    // Fallback para português se não encontrar no idioma atual
    const fallback = translations.pt?.[key]
    if (fallback) {
      return fallback
    }

    // Se não encontrar em lugar nenhum, retorna a chave
    return key
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
