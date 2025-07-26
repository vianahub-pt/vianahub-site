"use client"

import Link from "next/link"
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTranslation } from "@/contexts/translation-context"

export function WhatWeDoMobileSelector() {
  const { t } = useTranslation()

  return (
    <AccordionItem value="what-we-do">
      <AccordionTrigger className="text-white hover:text-viana-orange">{t("nav.whatWeDo")}</AccordionTrigger>
      <AccordionContent className="pl-4 space-y-2">
        <Link href="/what-we-do/agile" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.agile")}
        </Link>
        <Link href="/what-we-do/development" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.development")}
        </Link>
        <Link href="/what-we-do/chatbot" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.chatbot")}
        </Link>
        <Link href="/what-we-do/landing-pages" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.landing-pages")}
        </Link>
        <Link href="/what-we-do/outsourcing" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.outsourcing")}
        </Link>
        <Link href="/what-we-do/system-integration" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.system-integration")}
        </Link>
      </AccordionContent>
    </AccordionItem>
  )
}
