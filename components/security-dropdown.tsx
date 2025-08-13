"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown, Shield, HardDrive, Lock } from "lucide-react"
import { useTranslation } from "@/components/translation-context"

export function SecurityDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (path: string) => {
    router.push(path)
    setIsOpen(false)
  }

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-white hover:bg-yellow-500/20 hover:text-white text-sm">
        <span>{t("nav.security")}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-56 bg-black/80 backdrop-blur-md rounded-md shadow-lg border border-gray-600 z-50">
          <div className="py-2">
            <button
              onClick={() => handleNavigation("/security/cyber-security")}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              <Shield className="h-4 w-4 text-orange-500" />
              {t("nav.cybersecurity")}
            </button>
            <button
              onClick={() => handleNavigation("/security/backups")}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              <HardDrive className="h-4 w-4 text-orange-500" />
              {t("nav.backupSolutions")}
            </button>
            <button
              onClick={() => handleNavigation("/security/access")}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-white hover:bg-yellow-500/20 transition-colors"
            >
              <Lock className="h-4 w-4 text-orange-500" />
              {t("nav.accessControl")}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
