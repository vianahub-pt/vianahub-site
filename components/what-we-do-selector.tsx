"use client"

import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/contexts/translation-context"
import { useMenu } from "./menu-context"
import Link from "next/link"

const whatWeDoItems = [
  { href: "/what-we-do/agile", key: "menu.agile" },
  { href: "/what-we-do/development", key: "menu.development" },
  { href: "/what-we-do/chatbot", key: "menu.chatbot" },
  { href: "/what-we-do/landing-pages", key: "menu.landing-pages" },
  { href: "/what-we-do/outsourcing", key: "menu.outsourcing" },
  { href: "/what-we-do/system-integration", key: "menu.system-integration" },
]

export function WhatWeDoSelector() {
  const { t } = useTranslation()
  const { activeMenu, setActiveMenu } = useMenu()
  const isOpen = activeMenu === "what-we-do"

  const handleMouseEnter = () => {
    setActiveMenu("what-we-do")
  }

  const handleMouseLeave = () => {
    setActiveMenu(null)
  }

  const handleItemSelect = () => {
    setActiveMenu(null)
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex items-center space-x-1 px-4 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white dark:hover:bg-gray-500/20">
        <span>{t("nav.whatWeDo")}</span> {/* Usando a chave de tradução */}
        <ChevronDown className={`h-4 w-4 transition-transform duration-100 ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <div
          className="absolute z-[9999] w-80 top-full animate-in fade-in-0 slide-in-from-top-1 duration-100"
          style={{
            left: 0,
            transformOrigin: "top left",
          }}
        >
          <div className="h-1 w-full" />

          <Card className="bg-black/80 dark:bg-black/80 backdrop-blur-md border border-white/30 dark:border-gray-400/30">
            <CardContent className="p-1">
              <div className="space-y-1">
                {whatWeDoItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleItemSelect}
                    className="w-full flex items-center px-3 py-2 rounded-md hover:bg-viana-orange/50 hover:text-viana-white transition-all duration-75 text-left text-sm font-medium drop-shadow-lg text-viana-white block"
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
