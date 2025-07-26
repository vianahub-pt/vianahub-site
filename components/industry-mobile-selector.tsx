"use client"

import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"
import { useMenu } from "./menu-context"
import Link from "next/link"

const industryItems = [
  { href: "/industry/education", key: "menu.education" },
  { href: "/industry/government", key: "menu.government" },
  { href: "/industry/manufacturing", key: "menu.manufacturing" },
  { href: "/industry/financial", key: "menu.financial" },
  { href: "/industry/retail", key: "menu.retail" },
  { href: "/industry/healthcare", key: "menu.healthcare" },
]

export function IndustryMobileSelector() {
  const { t } = useTranslation()
  const { activeMenu, setActiveMenu } = useMenu()
  const isOpen = activeMenu === "industry"

  const handleToggle = () => {
    setActiveMenu(isOpen ? null : "industry")
  }

  const handleItemSelect = () => {
    setActiveMenu(null)
  }

  return (
    <div className="border-b border-gray-700/30">
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between px-4 py-4 text-left font-medium text-viana-white hover:bg-viana-yellow/10 transition-colors duration-200"
      >
        <span>{t("nav.industry")}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-2">
          {industryItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleItemSelect}
              className="block px-8 py-3 text-sm text-viana-white/80 hover:text-viana-white hover:bg-viana-orange/20 transition-all duration-150"
            >
              {t(item.key)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
