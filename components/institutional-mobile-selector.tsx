"use client"

import Link from "next/link"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "@/contexts/translation-context"

export function InstitutionalMobileSelector() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border-b border-gray-700">
      <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-white hover:text-viana-orange">
        {t("nav.institutional")}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="pb-4">
        <div className="flex flex-col space-y-2 pl-4">
          <Link href="/about" className="text-gray-300 hover:text-viana-orange py-2">
            {t("menu.about-us")}
          </Link>
          <Link href="/careers" className="text-gray-300 hover:text-viana-orange py-2">
            {t("menu.our-mission")}
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-viana-orange py-2">
            {t("menu.contact-us")}
          </Link>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
