"use client"

import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"
import { useMenu } from "./menu-context"
import Link from "next/link"

const engineeringItems = [
  { href: "/engineering/solar-energy", key: "menu.solar-energy" },
  { href: "/engineering/railway", key: "menu.railway" },
  { href: "/engineering/road", key: "menu.road" },
]

export function EngineeringMobileSelector() {
  const { t } = useTranslation()
  const { activeMenu, setActiveMenu } = useMenu()
  const isOpen = activeMenu === "engineering"

  const handleToggle = () => {
    setActiveMenu(isOpen ? null : "engineering")
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
        <span>{t("nav.engineering")}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-2">
          {engineeringItems.map((item) => (
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
