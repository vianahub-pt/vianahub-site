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

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-white hover:bg-yellow-500/20 hover:text-white text-sm">
        <span>{t("nav.engineering")}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-56 bg-black/80 backdrop-blur-md rounded-md shadow-lg border border-gray-600 z-50">
          <div className="py-2">
            <button
              onClick={() => handleNavigation("/industry/education")}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              <GraduationCap className="h-4 w-4 text-orange-500" />
              {t("nav.education")}
            </button>
            <button
              onClick={() => handleNavigation("/industry/government")}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              <Building className="h-4 w-4 text-orange-500" />
              {t("nav.government")}
            </button>
            <button
              onClick={() => handleNavigation("/industry/manufacturing")}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              <Factory className="h-4 w-4 text-orange-500" />
              {t("nav.manufacturing")}
            </button>
            <button
              onClick={() => handleNavigation("/industry/financial")}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              <DollarSign className="h-4 w-4 text-orange-500" />
              {t("nav.financial")}
            </button>
            <button
              onClick={() => handleNavigation("/industry/retail")}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              <ShoppingCart className="h-4 w-4 text-orange-500" />
              {t("nav.retail")}
            </button>
            <button
              onClick={() => handleNavigation("/industry/healthcare")}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              <Heart className="h-4 w-4 text-orange-500" />
              {t("nav.healthcare")}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
