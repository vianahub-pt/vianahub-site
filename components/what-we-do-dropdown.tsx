"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/components/translation-context"
import { ChevronDown } from "lucide-react"

export function WhatWeDoDropdown() {
  const router = useRouter()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
    setIsOpen(false)
  }

  const whatWeDoItems = [
    { key: "nav.development", href: "/what-we-do/development" },
    { key: "nav.agile", href: "/what-we-do/agile" },
    { key: "nav.outsourcing", href: "/what-we-do/outsourcing" },
    { key: "nav.chatbot", href: "/what-we-do/chatbot" },
    { key: "nav.landingPages", href: "/what-we-do/landing-pages" },
    { key: "nav.systemIntegration", href: "/what-we-do/system-integration" },
  ]

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-white hover:bg-yellow-500/20 hover:text-white text-sm">
        <span>{t("nav.whatWeDo")}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-black/80 backdrop-blur-md border border-white/20 rounded-md shadow-lg z-50">
          <div className="py-1">
            {whatWeDoItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.href)}
                className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-yellow-500/20 hover:text-white transition-colors"
              >
                {t(item.key)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
