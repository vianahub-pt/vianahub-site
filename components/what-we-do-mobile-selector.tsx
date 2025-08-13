"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"
import { useRouter } from "next/navigation"

const whatWeDoItems = [
  { key: "development", href: "/what-we-do/development" },
  { key: "agile", href: "/what-we-do/agile" },
  { key: "chatbot", href: "/what-we-do/chatbot" },
  { key: "landing-pages", href: "/what-we-do/landing-pages" },
  { key: "outsourcing", href: "/what-we-do/outsourcing" },
  { key: "system-integration", href: "/what-we-do/system-integration" },
]

export function WhatWeDoMobileSelector() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleItemClick = (href: string) => {
    router.push(href)
    setIsOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white px-3 py-2 rounded-md text-base font-medium transition-all duration-100 drop-shadow-lg"
      >
        <span>{t("nav.whatWeDo")}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-100 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="ml-4 mt-2 space-y-1">
          {whatWeDoItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleItemClick(item.href)}
              className="block w-full text-left px-3 py-2 text-sm text-viana-white hover:bg-viana-orange/50 hover:text-viana-white rounded-md transition-all duration-75 font-medium drop-shadow-lg"
            >
              {t(`nav.${item.key}`)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
