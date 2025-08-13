"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"
import { useRouter } from "next/navigation"

export function InstitutionalMobileSelector() {
  const { t } = useTranslation()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  const menuItems = [
    { key: "about-us", href: "/about", label: t("nav.about") },
    { key: "careers", href: "/careers", label: t("nav.careers") },
    { key: "contact-us", href: "/contact", label: t("nav.contact") },
  ]

  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white px-3 py-2 rounded-md text-base font-medium transition-all duration-100 drop-shadow-lg"
      >
        <span>{t("nav.institutional")}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-100 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="pl-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavigation(item.href)}
              className="block w-full text-left text-viana-white hover:bg-viana-orange/50 hover:text-viana-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-75 drop-shadow-lg"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
