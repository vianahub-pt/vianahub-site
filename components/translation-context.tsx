"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface TranslationContextType {
  language: string
  setLanguage: (language: string) => void
  translations: { [key: string]: string }
}

const TranslationContext = createContext<TranslationContextType>({
  language: "en",
  setLanguage: () => {},
  translations: {},
})

export const TranslationProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState("en")

  const translations: { [key: string]: string } = {
    // Portuguese translations
    pt: {
      "footer.link.whatWeDo.development": "Desenvolvimento",
      "footer.link.whatWeDo.agile": "Metodologia Ágil",
      "footer.link.whatWeDo.chatbot": "Chatbot",
      "footer.link.whatWeDo.outsourcing": "Outsourcing",
      "footer.link.industry.healthcare": "Saúde",
      "footer.link.industry.financial": "Financeiro",
      "footer.link.industry.education": "Educação",
      "footer.link.industry.retail": "Varejo",
    },
    // English translations
    en: {
      "footer.link.whatWeDo.development": "Development",
      "footer.link.whatWeDo.agile": "Agile Methodology",
      "footer.link.whatWeDo.chatbot": "Chatbot",
      "footer.link.whatWeDo.outsourcing": "Outsourcing",
      "footer.link.industry.healthcare": "Healthcare",
      "footer.link.industry.financial": "Financial",
      "footer.link.industry.education": "Education",
      "footer.link.industry.retail": "Retail",
    },
    // Spanish translations
    es: {
      "footer.link.whatWeDo.development": "Desarrollo",
      "footer.link.whatWeDo.agile": "Metodología Ágil",
      "footer.link.whatWeDo.chatbot": "Chatbot",
      "footer.link.whatWeDo.outsourcing": "Outsourcing",
      "footer.link.industry.healthcare": "Salud",
      "footer.link.industry.financial": "Financiero",
      "footer.link.industry.education": "Educación",
      "footer.link.industry.retail": "Comercio",
    },
    // French translations
    fr: {
      "footer.link.whatWeDo.development": "Développement",
      "footer.link.whatWeDo.agile": "Méthodologie Agile",
      "footer.link.whatWeDo.chatbot": "Chatbot",
      "footer.link.whatWeDo.outsourcing": "Externalisation",
      "footer.link.industry.healthcare": "Santé",
      "footer.link.industry.financial": "Financier",
      "footer.link.industry.education": "Éducation",
      "footer.link.industry.retail": "Commerce",
    },
    // German translations
    de: {
      "footer.link.whatWeDo.development": "Entwicklung",
      "footer.link.whatWeDo.agile": "Agile Methodik",
      "footer.link.whatWeDo.chatbot": "Chatbot",
      "footer.link.whatWeDo.outsourcing": "Outsourcing",
      "footer.link.industry.healthcare": "Gesundheitswesen",
      "footer.link.industry.financial": "Finanzwesen",
      "footer.link.industry.education": "Bildung",
      "footer.link.industry.retail": "Einzelhandel",
    },
  }

  const currentTranslations = translations[language] || {}

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translations: currentTranslations }}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => useContext(TranslationContext)
