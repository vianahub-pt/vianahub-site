"use client"

import Link from "next/link"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "@/contexts/translation-context"

export function IndustryMobileSelector() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border-b border-gray-700">
      <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-white hover:text-viana-orange">
        {t("nav.industry")}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="pb-4">
        <div className="flex flex-col space-y-2 pl-4">
          <Link href="/industry/education" className="text-gray-300 hover:text-viana-orange py-2">
            {t("menu.education")}
          </Link>
          <Link href="/industry/government" className="text-gray-300 hover:text-viana-orange py-2">
            {t("menu.government")}
          </Link>
          <Link href="/industry/manufacturing" className="text-gray-300 hover:text-viana-orange py-2">
            {t("menu.manufacturing")}
          </Link>
          <Link href="/industry/financial" className="text-gray-300 hover:text-viana-orange py-2">
            {t("menu.financial")}
          </Link>
          <Link href="/industry/retail" className="text-gray-300 hover:text-viana-orange py-2">
            {t("menu.retail")}
          </Link>
          <Link href="/industry/healthcare" className="text-gray-300 hover:text-viana-orange py-2">
            {t("menu.healthcare")}
          </Link>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
