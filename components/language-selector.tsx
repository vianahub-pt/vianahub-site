"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useTranslation, type Language } from "@/components/translation-context"

const languages = [
  { code: "pt" as Language, name: "Português", flag: "/flags/pt.svg" },
  { code: "en" as Language, name: "English", flag: "/flags/us.svg" },
  { code: "es" as Language, name: "Español", flag: "/flags/es.svg" },
  { code: "fr" as Language, name: "Français", flag: "/flags/fr.svg" },
  { code: "de" as Language, name: "Deutsch", flag: "/flags/de.svg" },
]

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useTranslation()

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-white hover:bg-yellow-500/20 hover:text-white text-sm">
        <Image
          src={currentLanguage.flag || "/placeholder.svg"}
          alt={currentLanguage.name}
          width={20}
          height={15}
          className="rounded-sm"
        />
        <span>{currentLanguage.name}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 bg-black/80 backdrop-blur-md rounded-md shadow-lg py-2 min-w-[160px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center space-x-2 w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                lang.code === language
                  ? "bg-yellow-500/20 text-white"
                  : "text-white hover:bg-yellow-500/20 hover:text-white"
              }`}
            >
              <Image
                src={lang.flag || "/placeholder.svg"}
                alt={lang.name}
                width={20}
                height={15}
                className="rounded-sm"
              />
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
