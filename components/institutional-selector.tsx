"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useMenu } from "./menu-context"
import { useTranslation } from "@/contexts/translation-context"

export function InstitutionalSelector() {
  const { activeMenu, setActiveMenu } = useMenu()
  const { t } = useTranslation()

  return (
    <DropdownMenu
      open={activeMenu === "institutional"}
      onOpenChange={(open) => setActiveMenu(open ? "institutional" : null)}
    >
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white hover:text-viana-orange flex items-center gap-1">
          {t("nav.institutional")}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-md border-gray-800">
        <DropdownMenuItem asChild>
          <Link href="/about" className="text-white hover:text-viana-orange">
            {t("menu.about-us")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/careers" className="text-white hover:text-viana-orange">
            {t("menu.careers")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/contact" className="text-white hover:text-viana-orange">
            {t("menu.contact-us")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
