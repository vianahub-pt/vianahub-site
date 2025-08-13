"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

export function WhatWeDoSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white text-sm"
      >
        <span>{t("menu.whatWeDo")}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-black/90 backdrop-blur-md border border-white/30 rounded-md shadow-lg z-50">
          <div className="py-2">
            <button
              onClick={() => handleNavigation("/what-we-do/development")}
              className="block w-full text-left px-4 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white transition-colors"
            >
              {t("menu.development")}
            </button>
            <button
              onClick={() => handleNavigation("/what-we-do/agile")}
              className="block w-full text-left px-4 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white transition-colors"
            >
              {t("menu.agile")}
            </button>
            <button
              onClick={() => handleNavigation("/what-we-do/chatbot")}
              className="block w-full text-left px-4 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white transition-colors"
            >
              {t("menu.chatbot")}
            </button>
            <button
              onClick={() => handleNavigation("/what-we-do/landing-pages")}
              className="block w-full text-left px-4 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white transition-colors"
            >
              {t("menu.landing-pages")}
            </button>
            <button
              onClick={() => handleNavigation("/what-we-do/outsourcing")}
              className="block w-full text-left px-4 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white transition-colors"
            >
              {t("menu.outsourcing")}
            </button>
            <button
              onClick={() => handleNavigation("/what-we-do/system-integration")}
              className="block w-full text-left px-4 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white transition-colors"
            >
              {t("menu.system-integration")}
            </button>

            {/* Separador horizontal */}
            <div className="border-t border-white/30 my-2"></div>

            {/* Opções de Engenharia */}
            <button
              onClick={() => handleNavigation("/engineering/railway")}
              className="block w-full text-left px-4 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white transition-colors"
            >
              {t("menu.railway")}
            </button>
            <button
              onClick={() => handleNavigation("/engineering/road")}
              className="block w-full text-left px-4 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white transition-colors"
            >
              {t("menu.road")}
            </button>
            <button
              onClick={() => handleNavigation("/engineering/solar-energy")}
              className="block w-full text-left px-4 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white transition-colors"
            >
              {t("menu.solar-energy")}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
