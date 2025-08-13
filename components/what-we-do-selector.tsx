"use client"

import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/contexts/translation-context"
import { useMenu } from "./menu-context"
import { useRouter } from "next/navigation"

export function WhatWeDoSelector() {
  const { t } = useTranslation()
  const { activeMenu, setActiveMenu } = useMenu()
  const router = useRouter()
  const isOpen = activeMenu === "what-we-do"

  const handleMouseEnter = () => {
    setActiveMenu("what-we-do")
  }

  const handleMouseLeave = () => {
    setActiveMenu(null)
  }

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
    setActiveMenu(null)
  }

  const serviceItems = [
    { key: "development", href: "/what-we-do/development" },
    { key: "agile", href: "/what-we-do/agile" },
    { key: "outsourcing", href: "/what-we-do/outsourcing" },
    { key: "chatbot", href: "/what-we-do/chatbot" },
    { key: "landing-pages", href: "/what-we-do/landing-pages" },
    { key: "system-integration", href: "/what-we-do/system-integration" },
  ]

  const engineeringItems = [
    { key: "railway", href: "/engineering/railway" },
    { key: "road", href: "/engineering/road" },
    { key: "solar-energy", href: "/engineering/solar-energy" },
  ]

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white">
        <span className="text-sm">{t("nav.whatWeDo")}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-100 ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <div
          className="absolute z-[9999] w-64 top-full animate-in fade-in-0 slide-in-from-top-1 duration-100"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            transformOrigin: "top center",
          }}
        >
          <div className="h-1 w-full" />

          <Card className="bg-black/80 dark:bg-black/80 backdrop-blur-md border border-white/30 dark:border-gray-400/30">
            <CardContent className="p-1">
              <div className="grid gap-1">
                {serviceItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavigation(item.href)}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-viana-orange/50 hover:text-viana-white transition-all duration-75 text-sm font-medium drop-shadow-lg text-viana-white"
                  >
                    {t(`nav.${item.key}`)}
                  </button>
                ))}

                {/* Separador horizontal */}
                <div className="border-t border-white/30 my-1" />

                {engineeringItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavigation(item.href)}
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
