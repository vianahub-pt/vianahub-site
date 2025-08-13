"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/contexts/translation-context"

export function InstitutionalSelector() {
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (url: string) => {
    router.push(url)
    window.scrollTo(0, 0)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-sm font-medium">
          {t("menu.institutional")}
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuItem onClick={() => handleNavigation("/about")}>{t("nav.about")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleNavigation("/careers")}>{t("nav.careers")}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
