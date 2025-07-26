"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useMenu } from "./menu-context"
import { useTranslation } from "@/contexts/translation-context"

export function SecuritySelector() {
  const { activeMenu, setActiveMenu } = useMenu()
  const { t } = useTranslation()

  return (
    <DropdownMenu open={activeMenu === "security"} onOpenChange={(open) => setActiveMenu(open ? "security" : null)}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white hover:text-viana-orange flex items-center gap-1">
          {t("nav.security")}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-md border-gray-800">
        <DropdownMenuItem asChild>
          <Link href="/security/cyber-security" className="text-white hover:text-viana-orange">
            {t("menu.cybersecurity")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/security/backups" className="text-white hover:text-viana-orange">
            {t("menu.backups")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/security/access" className="text-white hover:text-viana-orange">
            {t("menu.access")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
