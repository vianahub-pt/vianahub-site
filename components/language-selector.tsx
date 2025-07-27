"use client"

import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/contexts/translation-context"
import { useMenu } from "./menu-context"
import Image from "next/image"

const languages = [
  { code: "pt", name: "Português", flag: "/flags/pt.svg" },
  { code: "en", name: "English", flag: "/flags/us.svg" },
  { code: "es", name: "Español", flag: "/flags/es.svg" },
  { code: "fr", name: "Français", flag: "/flags/fr.svg" },
  { code: "de", name: "Deutsch", flag: "/flags/de.svg" },
]

export function LanguageSelector() {
  const { language, setLanguage } = useTranslation()
  const { activeMenu, setActiveMenu } = useMenu()
  const isOpen = activeMenu === "language"

  const handleMouseEnter = () => {
    setActiveMenu("language")
  }

  const handleMouseLeave = () => {
    setActiveMenu(null)
  }

  const handleLanguageSelect = (langCode: "pt" | "en" | "es" | "fr" | "de") => {
    setLanguage(langCode)
    localStorage.setItem("language", langCode)
  }

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white dark:hover:bg-gray-500/20">
        <span className="text-sm flex items-center space-x-2">
          {currentLanguage && (
            <Image
              src={currentLanguage.flag || "/placeholder.svg"}
              alt={`${currentLanguage.name} flag`}
              width={20}
              height={15}
              className="inline-block"
            />
          )}
          <span>{currentLanguage?.name}</span>
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-100 ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <div
          className="absolute z-[9999] w-48 top-full animate-in fade-in-0 slide-in-from-top-1 duration-100"
          style={{
            left: 0,
            transformOrigin: "top left",
          }}
        >
          <div className="h-1 w-full" />

          <Card className="bg-black/80 dark:bg-black/80 backdrop-blur-md border border-white/30 dark:border-gray-400/30">
            <CardContent className="p-1">
              <div className="space-y-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code as "pt" | "en" | "es" | "fr" | "de")}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-viana-orange/50 hover:text-viana-white transition-all duration-75 text-left text-sm font-medium drop-shadow-lg ${
                      language === lang.code ? "bg-viana-orange/30 text-viana-white" : "text-viana-white"
                    }`}
                  >
                    <Image
                      src={lang.flag || "/placeholder.svg"}
                      alt={`${lang.name} flag`}
                      width={20}
                      height={15}
                      className="inline-block"
                    />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
