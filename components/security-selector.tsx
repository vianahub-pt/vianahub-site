"use client"

import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/contexts/translation-context"
import { useMenu } from "./menu-context"
import { useRouter } from "next/navigation"

const securityItems = [
  { key: "cybersecurity", href: "/security/cyber-security" },
  { key: "access", href: "/security/access" },
  { key: "backups", href: "/security/backups" },
]

export function SecuritySelector() {
  const { t } = useTranslation()
  const { activeMenu, setActiveMenu } = useMenu()
  const router = useRouter()
  const isOpen = activeMenu === "security"

  const handleMouseEnter = () => {
    setActiveMenu("security")
  }

  const handleMouseLeave = () => {
    setActiveMenu(null)
  }

  const handleItemClick = (href: string) => {
    router.push(href)
    setActiveMenu(null)
    window.scrollTo(0, 0)
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white dark:hover:bg-gray-500/20">
        <span className="text-sm">{t("nav.security")}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-100 ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <div
          className="absolute z-[9999] w-64 top-full animate-in fade-in-0 slide-in-from-top-1 duration-100"
          style={{
            left: 0,
            transformOrigin: "top left",
          }}
        >
          <div className="h-1 w-full" />

          <Card className="bg-black/80 dark:bg-black/80 backdrop-blur-md border border-white/30 dark:border-gray-400/30">
            <CardContent className="p-1">
              <div className="space-y-1">
                {securityItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleItemClick(item.href)}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-viana-orange/50 hover:text-viana-white transition-all duration-75 text-sm font-medium drop-shadow-lg text-viana-white"
                  >
                    {t(`nav.${item.key}`)}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
