"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

export function InstitutionalMobileSelector() {
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
        className="flex items-center justify-between w-full text-white hover:text-gray-300 transition-colors px-3 py-2 rounded-md text-base font-medium"
      >
        <span>{t("menu.institutional")}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="pl-4 space-y-1">
          <button
            onClick={() => handleNavigation("/about")}
            className="block w-full text-left text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm"
          >
            {t("nav.about")}
          </button>
          <button
            onClick={() => handleNavigation("/careers")}
            className="block w-full text-left text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm"
          >
            {t("nav.careers")}
          </button>
          <button
            onClick={() => handleNavigation("/contact")}
            className="block w-full text-left text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm"
          >
            {t("nav.contact")}
          </button>
        </div>
      )}
    </div>
  )
}
