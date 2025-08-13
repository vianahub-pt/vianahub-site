"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/components/translation-context"

export function EngineeringDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (path: string) => {
    router.push(path)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-white hover:bg-yellow-500/20 hover:text-white text-sm"
      >
        <span>{t("nav.engineering")}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute top-full left-0 mt-1 w-48 bg-black/80 backdrop-blur-md rounded-md shadow-lg border border-white/10 z-50"
        >
          <div className="py-2">
            <button
              onClick={() => handleNavigation("/industry/education")}
              className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              {t("nav.education")}
            </button>
            <button
              onClick={() => handleNavigation("/industry/government")}
              className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              {t("nav.government")}
            </button>
            <button
              onClick={() => handleNavigation("/industry/manufacturing")}
              className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              {t("nav.manufacturing")}
            </button>
            <button
              onClick={() => handleNavigation("/industry/financial")}
              className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              {t("nav.financial")}
            </button>
            <button
              onClick={() => handleNavigation("/industry/retail")}
              className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              {t("nav.retail")}
            </button>
            <button
              onClick={() => handleNavigation("/industry/healthcare")}
              className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              {t("nav.healthcare")}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
