import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // Carrega arquivos JSON
  .use(LanguageDetector) // Detecta idioma do navegador
  .use(initReactI18next) // Conecta com React
  .init({
    fallbackLng: "pt-PT", // Idioma padrão
    debug: false,
    interpolation: {
      escapeValue: false, // React já faz escape
    },
    backend: {
      loadPath: "/locales/{{lng}}/common.json", // Caminho dos arquivos JSON
    },
    react: {
      useSuspense: true, // Suspense para carregamento
    },
  });

export default i18n;
