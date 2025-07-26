"use client"

import Link from "next/link"
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTranslation } from "@/contexts/translation-context"

export function SecurityMobileSelector() {
  const { t } = useTranslation()

  return (
    <AccordionItem value="security">
      <AccordionTrigger className="text-white hover:text-viana-orange">{t("nav.security")}</AccordionTrigger>
      <AccordionContent className="pl-4 space-y-2">
        <Link href="/security/cyber-security" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.cybersecurity")}
        </Link>
        <Link href="/security/backups" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.backups")}
        </Link>
        <Link href="/security/access" className="block text-gray-300 hover:text-viana-orange py-2">
          {t("menu.access")}
        </Link>
      </AccordionContent>
    </AccordionItem>
  )
}
