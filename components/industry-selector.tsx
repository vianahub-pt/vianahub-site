"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"
import { useMenuContext } from "./menu-context"

export function IndustrySelector() {
  const { t } = useTranslation()
  const { closeAllMenus } = useMenuContext()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenChange = (open: boolean) => {
    if (open) {
      closeAllMenus()
    }
    setIsOpen(open)
  }

  const handleItemClick = () => {
    setIsOpen(false)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white hover:text-viana-orange flex items-center gap-1">
          {t("nav.industry")}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-md border-gray-800">
        <DropdownMenuItem asChild>
          <Link
            href="/industry/education"
            className="text-white hover:text-viana-orange cursor-pointer"
            onClick={handleItemClick}
          >
            {t("menu.education")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/industry/government"
            className="text-white hover:text-viana-orange cursor-pointer"
            onClick={handleItemClick}
          >
            {t("menu.government")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/industry/manufacturing"
            className="text-white hover:text-viana-orange cursor-pointer"
            onClick={handleItemClick}
          >
            {t("menu.manufacturing")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/industry/financial"
            className="text-white hover:text-viana-orange cursor-pointer"
            onClick={handleItemClick}
          >
            {t("menu.financial")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/industry/retail"
            className="text-white hover:text-viana-orange cursor-pointer"
            onClick={handleItemClick}
          >
            {t("menu.retail")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/industry/healthcare"
            className="text-white hover:text-viana-orange cursor-pointer"
            onClick={handleItemClick}
          >
            {t("menu.healthcare")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
