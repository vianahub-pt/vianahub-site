"use client"

import Link from "next/link"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "@/contexts/translation-context"

export function WhatWeDoMobileSelector() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border-b border-gray-700">
      <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-white hover:text-viana-orange">
        {t("nav.whatWeDo")}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="pb-4">
        <div className="flex flex-col space-y-2 pl-4">
          <Link href="/what-we-do/agile" className="text-gray-300 hover:text-viana-orange py-2">
            {t("menu.agile")}
          </Link>
          <Link href="/what-we-do/development" className="text-gray-300 hover:text-viana-orange py-2">
            {t("menu.development")}
          </Link>
          <Link href="/what-we-do/chatbot" className="text-gray-300 hover:text-viana-orange py-2">
            {t("menu.chatbot")}
          </Link>
          <Link href="/what-we-do/landing-pages" className="text-gray-300 hover:text-viana-orange py-2">
            {t("menu.landing-pages")}
          </Link>
          <Link href="/what-we-do/outsourcing" className="text-gray-300 hover:text-viana-orange py-2">
            {t("menu.outsourcing")}
          </Link>
          <Link href="/what-we-do/system-integration" className="text-gray-300 hover:text-viana-orange py-2">
            {t("menu.system-integration")}
          </Link>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
