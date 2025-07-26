"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/contexts/translation-context"

export function IndustryMobileSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const industries = [
    { href: "/industry/healthcare", label: t("navbar.industry.healthcare") },
    { href: "/industry/financial", label: t("navbar.industry.financial") },
    { href: "/industry/education", label: t("navbar.industry.education") },
    { href: "/industry/retail", label: t("navbar.industry.retail") },
    { href: "/industry/manufacturing", label: t("navbar.industry.manufacturing") },
    { href: "/industry/government", label: t("navbar.industry.government") },
  ]

  return (
    <div className="border-b border-gray-700/50">
      <Button
        variant="ghost"
        className="w-full justify-between text-white hover:text-viana-orange hover:bg-gray-800/50 py-4 px-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-medium">{t("navbar.industry.title")}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 pl-4 space-y-2">
          {industries.map((industry) => (
            <Link
              key={industry.href}
              href={industry.href}
              className="block py-2 px-3 text-gray-300 hover:text-viana-orange hover:bg-gray-800/30 rounded-md transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {industry.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
