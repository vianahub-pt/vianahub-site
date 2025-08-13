"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/contexts/translation-context"

export function MobileMenu() {
  const router = useRouter()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-t shadow-lg">
          <div className="container px-4 py-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start" onClick={() => handleNavigation("/about")}>
              {t("navbar.about")}
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => handleNavigation("/careers")}>
              {t("navbar.careers")}
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => handleNavigation("/contact")}>
              {t("navbar.contact")}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
