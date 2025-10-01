"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import {
  useTranslation,
  type Language,
} from "@/components/translation-context";

const languages = [
  { code: "pt-BR" as Language, name: "Português", flag: "/flags/br.svg" },
  { code: "pt-PT" as Language, name: "Português", flag: "/flags/pt.svg" },
  { code: "en-US" as Language, name: "English", flag: "/flags/us.svg" },
  { code: "es-ES" as Language, name: "Español", flag: "/flags/es.svg" },
  { code: "fr-FR" as Language, name: "Français", flag: "/flags/fr.svg" },
  { code: "de-DE" as Language, name: "Deutsch", flag: "/flags/de.svg" },
  { code: "it-IT" as Language, name: "Italian", flag: "/flags/it.svg" },
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useTranslation();

  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium cursor-pointer 
                   bg-white/0 text-orange-500 hover:bg-black hover:text-orange-400 dark:bg-black dark:text-orange-400 
                   dark:hover:bg-white dark:hover:text-orange-500 text-md"
        title="Select Language"
        aria-label="Select Language"
      >
        <Image
          src={currentLanguage.flag || "/placeholder.svg"}
          alt={currentLanguage.name}
          width={20}
          height={15}
          className="w-5 h-4 object-cover rounded-sm"
        />
        <span>{currentLanguage.name}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-56 bg-black/80 backdrop-blur-md rounded-md shadow-lg border border-gray-600 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center gap-3 w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                language === lang.code
                  ? "bg-yellow-500/30 text-yellow-300"
                  : "text-orange-400 hover:bg-yellow-500/20 hover:text-white"
              }`}
              title={lang.name}
              aria-label={lang.name}
            >
              <Image
                src={lang.flag || "/placeholder.svg"}
                alt={lang.name}
                width={20}
                height={15}
                className="w-5 h-4 object-cover rounded-sm"
              />
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function LanguageSelectorMobile({
  onNavigate,
}: {
  onNavigate: (path?: string) => void;
}) {
  const { language, setLanguage } = useTranslation();

  const handleChange = (lang: Language) => {
    setLanguage(lang);
    onNavigate(); // ✅ só fecha os menus, sem redirecionar
  };

  return (
    <div className="absolute top-0 left-full ml-2 w-56 bg-black/80 backdrop-blur-md rounded-md shadow-lg border border-gray-600 z-50">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleChange(lang.code)}
          className={`flex items-center gap-3 w-full text-left px-4 py-2 text-sm transition-colors duration-150
            ${
              language === lang.code
                ? "text-white bg-yellow-500/20"
                : "text-orange-400 hover:bg-yellow-500/20 hover:text-white"
            }
          `}
          title={lang.name}
          aria-label={lang.name}
        >
          <Image
            src={lang.flag || "/placeholder.svg"}
            alt={lang.name}
            width={20}
            height={15}
            className="w-5 h-4 object-cover rounded-sm"
          />
          {lang.name}
        </button>
      ))}
    </div>
  );
}
