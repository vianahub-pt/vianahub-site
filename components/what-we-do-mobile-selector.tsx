"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/contexts/translation-context"

interface WhatWeDoMobileSelectorProps {
  onClose: () => void
}

export function WhatWeDoMobileSelector({ onClose }: WhatWeDoMobileSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (url: string) => {
    router.push(url)
    window.scrollTo(0, 0)
    onClose()
  }

  return (
    <div className="space-y-1">
      <Button variant="ghost" className="w-full justify-between text-left" onClick={() => setIsOpen(!isOpen)}>
        {t("menu.whatWeDo")}
        {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </Button>

      {isOpen && (
        <div className="pl-4 space-y-1">
          <Button
            variant="ghost"
            className="w-full justify-start text-sm"
            onClick={() => handleNavigation("/what-we-do/development")}
          >
            {t("menu.development")}
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-sm"
            onClick={() => handleNavigation("/what-we-do/chatbot")}
          >
            {t("menu.chatbot")}
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-sm"
            onClick={() => handleNavigation("/what-we-do/agile")}
          >
            {t("menu.agile")}
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-sm"
            onClick={() => handleNavigation("/what-we-do/system-integration")}
          >
            {t("menu.system-integration")}
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-sm"
            onClick={() => handleNavigation("/what-we-do/landing-pages")}
          >
            {t("menu.landing-pages")}
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-sm"
            onClick={() => handleNavigation("/what-we-do/outsourcing")}
          >
            {t("menu.outsourcing")}
          </Button>

          <div className="border-t border-gray-200 dark:border-gray-700 my-2" />

          <Button
            variant="ghost"
            className="w-full justify-start text-sm"
            onClick={() => handleNavigation("/engineering/railway")}
          >
            {t("menu.railway")}
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-sm"
            onClick={() => handleNavigation("/engineering/road")}
          >
            {t("menu.road")}
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-sm"
            onClick={() => handleNavigation("/engineering/solar-energy")}
          >
            {t("menu.solar-energy")}
          </Button>
        </div>
      )}
    </div>
  )
}
