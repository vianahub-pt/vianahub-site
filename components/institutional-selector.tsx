"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"
import { useMenuContext } from "./menu-context"

export function InstitutionalSelector() {
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
          {t("nav.institutional")}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-md border-gray-800">
        <DropdownMenuItem asChild>
          <Link href="/about" className="text-white hover:text-viana-orange cursor-pointer" onClick={handleItemClick}>
            {t("menu.about-us")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/careers" className="text-white hover:text-viana-orange cursor-pointer" onClick={handleItemClick}>
            {t("menu.our-mission")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/contact" className="text-white hover:text-viana-orange cursor-pointer" onClick={handleItemClick}>
            {t("menu.contact-us")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
