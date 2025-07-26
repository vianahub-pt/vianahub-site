"use client"

import Link from "next/link"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "@/contexts/translation-context"

export function EngineeringMobileSelector() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border-b border-gray-700">
      <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-white hover:text-viana-orange">
        {t("nav.engineering")}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="pb-4">
        <div className="flex flex-col space-y-2 pl-4">
          <Link href="/engineering/solar-energy" className="text-gray-300 hover:text-viana-orange py-2">
            {t("menu.solar-energy")}
          </Link>
          <Link href="/engineering/railway" className="text-gray-300 hover:text-viana-orange py-2">
            {t("menu.railway")}
          </Link>
          <Link href="/engineering/road" className="text-gray-300 hover:text-viana-orange py-2">
            {t("menu.road")}
          </Link>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
