"use client";

import type React from "react";
import { createContext, useContext, useState } from "react";

import ptBRTranslations from "@/public/locales/pt-BR/common.json";
import ptPTTranslations from "@/public/locales/pt-PT/common.json";
import enUSTranslations from "@/public/locales/en-US/common.json";
import esESTranslations from "@/public/locales/es-ES/common.json";
import frFRTranslations from "@/public/locales/fr-FR/common.json";
import deDETranslations from "@/public/locales/de-DE/common.json";
import itITTranslations from "@/public/locales/it-IT/common.json";

export type Language =
  | "pt-BR"
  | "pt-PT"
  | "en-US"
  | "es-ES"
  | "fr-FR"
  | "de-DE"
  | "it-IT";

interface TranslationContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  "pt-BR": ptBRTranslations,
  "pt-PT": ptPTTranslations,
  "en-US": enUSTranslations,
  "es-ES": esESTranslations,
  "fr-FR": frFRTranslations,
  "de-DE": deDETranslations,
  "it-IT": itITTranslations,
};

const TranslationContext = createContext<TranslationContextProps>({
  language: "pt-PT",
  setLanguage: () => {},
  t: (key: string) => key,
});

export const TranslationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("pt-PT");

  const t = (key: string) => {
    return translations[language]?.[key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
