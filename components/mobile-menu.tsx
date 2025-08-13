"use client"

import { Button } from "@/components/ui/button"
import { WhatWeDoMobileSelector } from "./what-we-do-mobile-selector"
import { IndustryMobileSelector } from "./industry-mobile-selector"
import { SecurityMobileSelector } from "./security-mobile-selector"
import { InstitutionalMobileSelector } from "./institutional-mobile-selector"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/contexts/translation-context"

interface MobileMenuProps {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (url: string) => {
    router.push(url)
    window.scrollTo(0, 0)
    onClose()
  }

  return (
    <div className="md:hidden border-t bg-background">
      <div className="container py-4 space-y-2">
        <WhatWeDoMobileSelector onClose={onClose} />
        <IndustryMobileSelector onClose={onClose} />
        <SecurityMobileSelector onClose={onClose} />
        <InstitutionalMobileSelector onClose={onClose} />
        <Button variant="ghost" className="w-full justify-start" onClick={() => handleNavigation("/contact")}>
          {t("nav.contact")}
        </Button>
      </div>
    </div>
  )
}
