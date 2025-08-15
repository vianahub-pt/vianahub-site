"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown, Code, Zap, Users, MessageCircle, Layout, Settings, Train, Car, Sun } from "lucide-react"
import { useTranslation } from "@/components/translation-context"

export function WhatWeDoDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (path: string) => {
    router.push(path)
    setIsOpen(false)
  }

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-white hover:bg-yellow-500/20 hover:text-white text-sm">
        <span>{t("nav.whatWeDo")}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-56 bg-black/80 backdrop-blur-md rounded-md shadow-lg border border-gray-600 z-50">
          <div className="py-2">
            <button
              onClick={() => handleNavigation("/what-we-do/development")}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              <Code className="h-4 w-4 text-orange-500" />
              {t("nav.development")}
            </button>
            <button
              onClick={() => handleNavigation("/what-we-do/agile")}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              <Zap className="h-4 w-4 text-orange-500" />
              {t("nav.agile")}
            </button>
            <button
              onClick={() => handleNavigation("/what-we-do/outsourcing")}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              <Users className="h-4 w-4 text-orange-500" />
              {t("nav.outsourcing")}
            </button>
            <button
              onClick={() => handleNavigation("/what-we-do/chatbot")}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-orange-500" />
              {t("nav.chatbot")}
            </button>
            <button
              onClick={() => handleNavigation("/what-we-do/landing-pages")}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              <Layout className="h-4 w-4 text-orange-500" />
              {t("nav.landingPages")}
            </button>
            <button
              onClick={() => handleNavigation("/what-we-do/system-integration")}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              <Settings className="h-4 w-4 text-orange-500" />
              {t("nav.systemIntegration")}
            </button>
            <div className="border-t border-gray-600 my-2"></div>
            <button
              onClick={() => handleNavigation("/what-we-do/railway")}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              <Train className="h-4 w-4 text-orange-500" />
              {t("nav.railway")}
            </button>
            <button
              onClick={() => handleNavigation("/what-we-do/road")}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              <Car className="h-4 w-4 text-orange-500" />
              {t("nav.road")}
            </button>
            <button
              onClick={() => handleNavigation("/engineering/solar-energy")}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              <Sun className="h-4 w-4 text-orange-500" />
              {t("nav.solarEnergy")}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
