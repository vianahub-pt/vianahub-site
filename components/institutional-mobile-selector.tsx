"use client"

import Link from "next/link"
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTranslation } from "@/contexts/translation-context"

export function InstitutionalMobileSelector() {
  const { t } = useTranslation()

  return (
    <AccordionItem value="institutional">
      <AccordionTrigger className="text-white hover:text-viana-orange">{t("nav.institutional")}</AccordionTrigger>
      <AccordionContent className="pl-4 space-y-2">
        <Link href="/about" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.about-us")}
        </Link>
        <Link href="/careers" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.our-mission")}
        </Link>
        <Link href="/contact" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.contact-us")}
        </Link>
      </AccordionContent>
    </AccordionItem>
  )
}
