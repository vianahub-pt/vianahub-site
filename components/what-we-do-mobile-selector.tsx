"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

export function WhatWeDoMobileSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
    setIsOpen(false)
  }

  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white px-3 py-2 rounded-md text-base font-medium transition-all duration-100 drop-shadow-lg"
      >
        <span>{t("menu.whatWeDo")}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="pl-4 space-y-1">
          <button
            onClick={() => handleNavigation("/what-we-do/development")}
            className="block w-full text-left px-3 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white rounded-md transition-colors"
          >
            {t("menu.development")}
          </button>
          <button
            onClick={() => handleNavigation("/what-we-do/agile")}
            className="block w-full text-left px-3 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white rounded-md transition-colors"
          >
            {t("menu.agile")}
          </button>
          <button
            onClick={() => handleNavigation("/what-we-do/chatbot")}
            className="block w-full text-left px-3 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white rounded-md transition-colors"
          >
            {t("menu.chatbot")}
          </button>
          <button
            onClick={() => handleNavigation("/what-we-do/landing-pages")}
            className="block w-full text-left px-3 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white rounded-md transition-colors"
          >
            {t("menu.landing-pages")}
          </button>
          <button
            onClick={() => handleNavigation("/what-we-do/outsourcing")}
            className="block w-full text-left px-3 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white rounded-md transition-colors"
          >
            {t("menu.outsourcing")}
          </button>
          <button
            onClick={() => handleNavigation("/what-we-do/system-integration")}
            className="block w-full text-left px-3 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white rounded-md transition-colors"
          >
            {t("menu.system-integration")}
          </button>

          {/* Separador horizontal */}
          <div className="border-t border-white/30 my-2 mx-3"></div>

          {/* Opções de Engenharia */}
          <button
            onClick={() => handleNavigation("/engineering/railway")}
            className="block w-full text-left px-3 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white rounded-md transition-colors"
          >
            {t("menu.railway")}
          </button>
          <button
            onClick={() => handleNavigation("/engineering/road")}
            className="block w-full text-left px-3 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white rounded-md transition-colors"
          >
            {t("menu.road")}
          </button>
          <button
            onClick={() => handleNavigation("/engineering/solar-energy")}
            className="block w-full text-left px-3 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white rounded-md transition-colors"
          >
            {t("menu.solar-energy")}
          </button>
        </div>
      )}
    </div>
  )
}
