"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useMenu } from "./menu-context"
import { useTranslation } from "@/contexts/translation-context"

export function IndustrySelector() {
  const { activeMenu, setActiveMenu } = useMenu()
  const { t } = useTranslation()

  return (
    <DropdownMenu open={activeMenu === "industry"} onOpenChange={(open) => setActiveMenu(open ? "industry" : null)}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white hover:text-viana-orange flex items-center gap-1">
          {t("nav.industry")}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-md border-gray-800">
        <DropdownMenuItem asChild>
          <Link href="/industry/education" className="text-white hover:text-viana-orange">
            {t("menu.education")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/industry/government" className="text-white hover:text-viana-orange">
            {t("menu.government")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/industry/manufacturing" className="text-white hover:text-viana-orange">
            {t("menu.manufacturing")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/industry/financial" className="text-white hover:text-viana-orange">
            {t("menu.financial")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/industry/retail" className="text-white hover:text-viana-orange">
            {t("menu.retail")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/industry/healthcare" className="text-white hover:text-viana-orange">
            {t("menu.healthcare")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
