"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/contexts/translation-context"

interface InstitutionalMobileSelectorProps {
  onClose: () => void
}

export function InstitutionalMobileSelector({ onClose }: InstitutionalMobileSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (url: string) => {
    router.push(url)
    window.scrollTo(0, 0)
    onClose()
  }

  return (
    <div className="space-y-1">
      <Button variant="ghost" className="w-full justify-between text-left" onClick={() => setIsOpen(!isOpen)}>
        {t("menu.institutional")}
        {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </Button>

      {isOpen && (
        <div className="pl-4 space-y-1">
          <Button variant="ghost" className="w-full justify-start text-sm" onClick={() => handleNavigation("/about")}>
            {t("nav.about")}
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sm" onClick={() => handleNavigation("/careers")}>
            {t("nav.careers")}
          </Button>
        </div>
      )}
    </div>
  )
}
