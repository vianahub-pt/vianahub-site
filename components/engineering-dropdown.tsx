"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown, GraduationCap, Building, Factory, DollarSign, ShoppingCart, Heart } from "lucide-react"
import { useTranslation } from "@/components/translation-context"

export function EngineeringDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (path: string) => {
    router.push(path)
    setIsOpen(false)
  }

  const menuItems = [
    { key: "nav.education", path: "/industry/education", icon: GraduationCap },
    { key: "nav.government", path: "/industry/government", icon: Building },
    { key: "nav.manufacturing", path: "/industry/manufacturing", icon: Factory },
    { key: "nav.financial", path: "/industry/financial", icon: DollarSign },
    { key: "nav.retail", path: "/industry/retail", icon: ShoppingCart },
    { key: "nav.healthcare", path: "/industry/healthcare", icon: Heart },
  ]

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-white hover:bg-yellow-500/20 hover:text-white text-sm">
        <span>{t("nav.engineering")}</span>
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
        </div>
      )}
    </div>
  )
}
