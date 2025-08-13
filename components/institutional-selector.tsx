"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

export function InstitutionalSelector() {
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
        <span>{t("menu.institutional")}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-black/90 backdrop-blur-md border border-white/30 rounded-md shadow-lg z-50">
          <div className="py-2">
            <button
              onClick={() => handleNavigation("/about")}
              className="block w-full text-left px-4 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white transition-colors"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => handleNavigation("/careers")}
              className="block w-full text-left px-4 py-2 text-sm text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white transition-colors"
            >
              {t("nav.careers")}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
