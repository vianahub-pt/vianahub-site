"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"
import { useMenuContext } from "./menu-context"

export function WhatWeDoSelector() {
  const { t } = useTranslation()
  const { activeMenu, setActiveMenu } = useMenuContext()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setActiveMenu("what-we-do")
    } else {
      setActiveMenu(null)
    }
    setIsOpen(open)
  }

  const handleItemClick = () => {
    setIsOpen(false)
    setActiveMenu(null)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white hover:text-viana-orange flex items-center gap-1">
          {t("nav.whatWeDo")}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-md border-gray-800">
        <DropdownMenuItem asChild>
          <Link
            href="/what-we-do/agile"
            className="text-white hover:text-viana-orange cursor-pointer"
            onClick={handleItemClick}
          >
            {t("menu.agile")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/what-we-do/development"
            className="text-white hover:text-viana-orange cursor-pointer"
            onClick={handleItemClick}
          >
            {t("menu.development")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/what-we-do/chatbot"
            className="text-white hover:text-viana-orange cursor-pointer"
            onClick={handleItemClick}
          >
            {t("menu.chatbot")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/what-we-do/landing-pages"
            className="text-white hover:text-viana-orange cursor-pointer"
            onClick={handleItemClick}
          >
            {t("menu.landing-pages")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/what-we-do/outsourcing"
            className="text-white hover:text-viana-orange cursor-pointer"
            onClick={handleItemClick}
          >
            {t("menu.outsourcing")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/what-we-do/system-integration"
            className="text-white hover:text-viana-orange cursor-pointer"
            onClick={handleItemClick}
          >
            {t("menu.system-integration")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
