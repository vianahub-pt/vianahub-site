"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/contexts/translation-context"

export function WhatWeDoSelector() {
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (url: string) => {
    router.push(url)
    window.scrollTo(0, 0)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-sm font-medium">
          {t("menu.whatWeDo")}
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuItem onClick={() => handleNavigation("/what-we-do/development")}>
          {t("menu.development")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleNavigation("/what-we-do/chatbot")}>{t("menu.chatbot")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleNavigation("/what-we-do/agile")}>{t("menu.agile")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleNavigation("/what-we-do/system-integration")}>
          {t("menu.system-integration")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleNavigation("/what-we-do/landing-pages")}>
          {t("menu.landing-pages")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleNavigation("/what-we-do/outsourcing")}>
          {t("menu.outsourcing")}
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => handleNavigation("/engineering/railway")}>
          {t("menu.railway")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleNavigation("/engineering/road")}>{t("menu.road")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleNavigation("/engineering/solar-energy")}>
          {t("menu.solar-energy")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
