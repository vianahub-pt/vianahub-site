"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

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
  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    import(`/public/locales/${language}/common.json`)
      .then((module) => setTranslations(module.default))
      .catch(() => setTranslations({}));
  }, [language]);

  const t = (key: string) => translations[key] || key;

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
