"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"
import { useRouter } from "next/navigation"

export function WhatWeDoMobileSelector() {
  const { t } = useTranslation()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  const serviceItems = [
    { key: "development", href: "/what-we-do/development" },
    { key: "agile", href: "/what-we-do/agile" },
    { key: "outsourcing", href: "/what-we-do/outsourcing" },
    { key: "chatbot", href: "/what-we-do/chatbot" },
    { key: "landing-pages", href: "/what-we-do/landing-pages" },
    { key: "system-integration", href: "/what-we-do/system-integration" },
  ]

  const engineeringItems = [
    { key: "railway", href: "/engineering/railway" },
    { key: "road", href: "/engineering/road" },
    { key: "solar-energy", href: "/engineering/solar-energy" },
  ]

  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white px-3 py-2 rounded-md text-base font-medium transition-all duration-100 drop-shadow-lg"
      >
        <span>{t("menu.whatWeDo")}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-100 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="pl-4 space-y-1">
          {serviceItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavigation(item.href)}
              className="block w-full text-left text-viana-white hover:bg-viana-orange/50 hover:text-viana-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-75 drop-shadow-lg"
            >
              {t(`menu.${item.key}`)}
            </button>
          ))}

          {/* Separador horizontal */}
          <div className="border-t border-white/30 my-2 mx-3" />

          {engineeringItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavigation(item.href)}
              className="block w-full text-left text-viana-white hover:bg-viana-orange/50 hover:text-viana-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-75 drop-shadow-lg"
            >
              {t(`menu.${item.key}`)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
