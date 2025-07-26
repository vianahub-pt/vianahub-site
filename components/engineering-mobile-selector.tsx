"use client"

import Link from "next/link"
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTranslation } from "@/contexts/translation-context"

export function EngineeringMobileSelector() {
  const { t } = useTranslation()

  return (
    <AccordionItem value="engineering">
      <AccordionTrigger className="text-white hover:text-viana-orange">{t("nav.engineering")}</AccordionTrigger>
      <AccordionContent className="pl-4 space-y-2">
        <Link href="/engineering/solar-energy" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.solar-energy")}
        </Link>
        <Link href="/engineering/railway" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.railway")}
        </Link>
        <Link href="/engineering/road" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.road")}
        </Link>
      </AccordionContent>
    </AccordionItem>
  )
}
