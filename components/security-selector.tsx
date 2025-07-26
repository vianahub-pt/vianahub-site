"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"
import { useMenuContext } from "./menu-context"

export function SecuritySelector() {
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
          {t("nav.security")}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-md border-gray-800">
        <DropdownMenuItem asChild>
          <Link
            href="/security/cyber-security"
            className="text-white hover:text-viana-orange cursor-pointer"
            onClick={handleItemClick}
          >
            {t("menu.cybersecurity")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/security/backups"
            className="text-white hover:text-viana-orange cursor-pointer"
            onClick={handleItemClick}
          >
            {t("menu.backups")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/security/access"
            className="text-white hover:text-viana-orange cursor-pointer"
            onClick={handleItemClick}
          >
            {t("menu.access")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
