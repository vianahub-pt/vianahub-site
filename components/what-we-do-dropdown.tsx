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

  const menuItems = [
    { key: "nav.development", path: "/what-we-do/development", icon: Code },
    { key: "nav.agile", path: "/what-we-do/agile", icon: Zap },
    { key: "nav.outsourcing", path: "/what-we-do/outsourcing", icon: Users },
    { key: "nav.chatbot", path: "/what-we-do/chatbot", icon: MessageCircle },
    { key: "nav.landingPages", path: "/what-we-do/landing-pages", icon: Layout },
    { key: "nav.systemIntegration", path: "/what-we-do/system-integration", icon: Settings },
  ]

  const engineeringItems = [
    { key: "nav.railway", path: "/engineering/railway", icon: Train },
    { key: "nav.road", path: "/engineering/road", icon: Car },
    { key: "nav.solarEnergy", path: "/engineering/solar-energy", icon: Sun },
  ]

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-white hover:bg-yellow-500/20 hover:text-white text-sm">
        <span>{t("nav.whatWeDo")}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 bg-black/80 backdrop-blur-md rounded-md shadow-lg py-2 min-w-[200px] z-50">
          {menuItems.map((item) => {
            const IconComponent = item.icon
            return (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.path)}
                className="flex items-center gap-3 w-full text-left px-4 py-2 text-sm text-white hover:bg-yellow-500/20 hover:text-white transition-colors duration-150"
              >
                <IconComponent className="h-4 w-4 text-orange-500" />
                {t(item.key)}
              </button>
            )
          })}

          <div className="border-t border-gray-600 my-2"></div>

          {engineeringItems.map((item) => {
            const IconComponent = item.icon
            return (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.path)}
                className="flex items-center gap-3 w-full text-left px-4 py-2 text-sm text-white hover:bg-yellow-500/20 hover:text-white transition-colors duration-150"
              >
                <IconComponent className="h-4 w-4 text-orange-500" />
                {t(item.key)}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
