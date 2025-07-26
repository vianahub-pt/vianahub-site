"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"
import { useMenuContext } from "./menu-context"

export function EngineeringSelector() {
  const { t } = useTranslation()
  const { activeMenu, setActiveMenu } = useMenuContext()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setActiveMenu("engineering")
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
          {t("nav.engineering")}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-md border-gray-800">
        <DropdownMenuItem asChild>
          <Link
            href="/engineering/solar-energy"
            className="text-white hover:text-viana-orange cursor-pointer"
            onClick={handleItemClick}
          >
            {t("menu.solar-energy")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/engineering/railway"
            className="text-white hover:text-viana-orange cursor-pointer"
            onClick={handleItemClick}
          >
            {t("menu.railway")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/engineering/road"
            className="text-white hover:text-viana-orange cursor-pointer"
            onClick={handleItemClick}
          >
            {t("menu.road")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
