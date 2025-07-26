"use client"

import Link from "next/link"
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTranslation } from "@/contexts/translation-context"

export function IndustryMobileSelector() {
  const { t } = useTranslation()

  return (
    <AccordionItem value="industry">
      <AccordionTrigger className="text-white hover:text-viana-orange">{t("nav.industry")}</AccordionTrigger>
      <AccordionContent className="pl-4 space-y-2">
        <Link href="/industry/education" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.education")}
        </Link>
        <Link href="/industry/government" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.government")}
        </Link>
        <Link href="/industry/manufacturing" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.manufacturing")}
        </Link>
        <Link href="/industry/financial" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.financial")}
        </Link>
        <Link href="/industry/retail" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.retail")}
        </Link>
        <Link href="/industry/healthcare" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.healthcare")}
        </Link>
      </AccordionContent>
    </AccordionItem>
  )
}
