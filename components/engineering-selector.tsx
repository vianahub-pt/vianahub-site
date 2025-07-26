"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useMenu } from "./menu-context"
import { useTranslation } from "@/contexts/translation-context"

export function EngineeringSelector() {
  const { activeMenu, setActiveMenu } = useMenu()
  const { t } = useTranslation()

  return (
    <DropdownMenu
      open={activeMenu === "engineering"}
      onOpenChange={(open) => setActiveMenu(open ? "engineering" : null)}
    >
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white hover:text-viana-orange flex items-center gap-1">
          {t("nav.engineering")}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-md border-gray-800">
        <DropdownMenuItem asChild>
          <Link href="/engineering/solar-energy" className="text-white hover:text-viana-orange">
            {t("menu.solar-energy")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/engineering/railway" className="text-white hover:text-viana-orange">
            {t("menu.railway")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/engineering/road" className="text-white hover:text-viana-orange">
            {t("menu.road")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
