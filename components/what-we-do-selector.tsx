"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useMenu } from "./menu-context"
import { useTranslation } from "@/contexts/translation-context"

export function WhatWeDoSelector() {
  const { activeMenu, setActiveMenu } = useMenu()
  const { t } = useTranslation()

  return (
    <DropdownMenu open={activeMenu === "what-we-do"} onOpenChange={(open) => setActiveMenu(open ? "what-we-do" : null)}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white hover:text-viana-orange flex items-center gap-1">
          {t("nav.whatWeDo")}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-md border-gray-800">
        <DropdownMenuItem asChild>
          <Link href="/what-we-do/agile" className="text-white hover:text-viana-orange">
            {t("menu.agile")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/what-we-do/development" className="text-white hover:text-viana-orange">
            {t("menu.development")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/what-we-do/chatbot" className="text-white hover:text-viana-orange">
            {t("menu.chatbot")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/what-we-do/landing-pages" className="text-white hover:text-viana-orange">
            {t("menu.landing-pages")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/what-we-do/outsourcing" className="text-white hover:text-viana-orange">
            {t("menu.outsourcing")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/what-we-do/system-integration" className="text-white hover:text-viana-orange">
            {t("menu.system-integration")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
