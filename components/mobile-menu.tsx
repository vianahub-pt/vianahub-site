"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { LanguageSelector } from "./language-selector"
import { ThemeToggle } from "./theme-toggle"
import { useTranslation } from "@/contexts/translation-context"
import { cn } from "@/lib/utils"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function MobileMenu() {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({})
  const { t } = useTranslation()

  const toggleMenu = (menuName: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }))
  }

  return (
    <div className="flex flex-col space-y-4 mt-8 pb-8">
      {/* Language Selector e Theme Toggle no topo do menu mobile */}
      <div className="flex items-center justify-between border-b border-gray-700 pb-4">
        <LanguageSelector />
        <ThemeToggle />
      </div>

      {/* O que Fazemos */}
      <Collapsible open={openMenus.whatWeDo} onOpenChange={() => toggleMenu("whatWeDo")}>
        <CollapsibleTrigger className="flex items-center justify-between w-full text-white hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 font-medium py-2 px-2 rounded-md">
          {t("nav.whatWeDo")}
          <ChevronDown className={cn("h-4 w-4 transition-transform", openMenus.whatWeDo && "rotate-180")} />
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4 space-y-2">
          <Link
            href="/what-we-do/development"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("menu.development")}
          </Link>
          <Link
            href="/what-we-do/system-integration"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("menu.system-integration")}
          </Link>
          <Link
            href="/what-we-do/outsourcing"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("menu.outsourcing")}
          </Link>
          <Link
            href="/what-we-do/agile"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("menu.agile")}
          </Link>
          <Link
            href="/what-we-do/chatbot"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("menu.chatbot")}
          </Link>
          <Link
            href="/what-we-do/landing-pages"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("menu.landing-pages")}
          </Link>
        </CollapsibleContent>
      </Collapsible>

      {/* Engenharia */}
      <Collapsible open={openMenus.engineering} onOpenChange={() => toggleMenu("engineering")}>
        <CollapsibleTrigger className="flex items-center justify-between w-full text-white hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 font-medium py-2 px-2 rounded-md">
          {t("nav.engineering")}
          <ChevronDown className={cn("h-4 w-4 transition-transform", openMenus.engineering && "rotate-180")} />
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4 space-y-2">
          <Link
            href="/engineering/road"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("menu.road")}
          </Link>
          <Link
            href="/engineering/railway"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("menu.railway")}
          </Link>
          <Link
            href="/engineering/solar-energy"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("menu.solar-energy")}
          </Link>
        </CollapsibleContent>
      </Collapsible>

      {/* Indústrias */}
      <Collapsible open={openMenus.industries} onOpenChange={() => toggleMenu("industries")}>
        <CollapsibleTrigger className="flex items-center justify-between w-full text-white hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 font-medium py-2 px-2 rounded-md">
          {t("nav.industry")}
          <ChevronDown className={cn("h-4 w-4 transition-transform", openMenus.industries && "rotate-180")} />
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4 space-y-2">
          <Link
            href="/industry/healthcare"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("menu.healthcare")}
          </Link>
          <Link
            href="/industry/financial"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("menu.financial")}
          </Link>
          <Link
            href="/industry/education"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("menu.education")}
          </Link>
          <Link
            href="/industry/retail"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("menu.retail")}
          </Link>
          <Link
            href="/industry/manufacturing"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("menu.manufacturing")}
          </Link>
          <Link
            href="/industry/government"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("menu.government")}
          </Link>
        </CollapsibleContent>
      </Collapsible>

      {/* Segurança */}
      <Collapsible open={openMenus.security} onOpenChange={() => toggleMenu("security")}>
        <CollapsibleTrigger className="flex items-center justify-between w-full text-white hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 font-medium py-2 px-2 rounded-md">
          {t("nav.security")}
          <ChevronDown className={cn("h-4 w-4 transition-transform", openMenus.security && "rotate-180")} />
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4 space-y-2">
          <Link
            href="/security/cyber-security"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("menu.cybersecurity")}
          </Link>
          <Link
            href="/security/access"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("menu.access")}
          </Link>
          <Link
            href="/security/backups"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("menu.backups")}
          </Link>
        </CollapsibleContent>
      </Collapsible>

      {/* Institucional */}
      <Collapsible open={openMenus.institutional} onOpenChange={() => toggleMenu("institutional")}>
        <CollapsibleTrigger className="flex items-center justify-between w-full text-white hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 font-medium py-2 px-2 rounded-md">
          {t("nav.institutional")}
          <ChevronDown className={cn("h-4 w-4 transition-transform", openMenus.institutional && "rotate-180")} />
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4 space-y-2">
          <Link
            href="/about"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("nav.about")}
          </Link>
          <Link
            href="/careers"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("nav.careers")}
          </Link>
          <Link
            href="/contact"
            className="block text-gray-300 hover:bg-viana-orange/20 hover:text-viana-orange transition-all duration-200 py-2 px-2 rounded-md"
          >
            {t("nav.contact")}
          </Link>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
