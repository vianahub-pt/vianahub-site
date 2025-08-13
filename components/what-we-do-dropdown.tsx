"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"
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
    { key: "nav.development", path: "/what-we-do/development" },
    { key: "nav.agile", path: "/what-we-do/agile" },
    { key: "nav.outsourcing", path: "/what-we-do/outsourcing" },
    { key: "nav.chatbot", path: "/what-we-do/chatbot" },
    { key: "nav.landingPages", path: "/what-we-do/landing-pages" },
    { key: "nav.systemIntegration", path: "/what-we-do/system-integration" },
  ]

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-white hover:bg-yellow-500/20 hover:text-white text-sm">
        <span>{t("nav.whatWeDo")}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 bg-black/80 backdrop-blur-md rounded-md shadow-lg py-2 min-w-[200px] z-50">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavigation(item.path)}
              className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-yellow-500/20 hover:text-white transition-colors duration-150"
            >
              {t(item.key)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
