"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/contexts/translation-context"

export function WhatWeDoMobileSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const services = [
    { href: "/what-we-do/development", label: t("navbar.whatWeDo.development") },
    { href: "/what-we-do/agile", label: t("navbar.whatWeDo.agile") },
    { href: "/what-we-do/outsourcing", label: t("navbar.whatWeDo.outsourcing") },
    { href: "/what-we-do/system-integration", label: t("navbar.whatWeDo.systemIntegration") },
    { href: "/what-we-do/chatbot", label: t("navbar.whatWeDo.chatbot") },
    { href: "/what-we-do/landing-pages", label: t("navbar.whatWeDo.landingPages") },
  ]

  return (
    <div className="border-b border-gray-700/50">
      <Button
        variant="ghost"
        className="w-full justify-between text-white hover:text-viana-orange hover:bg-gray-800/50 py-4 px-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-medium">{t("navbar.whatWeDo.title")}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 pl-4 space-y-2">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="block py-2 px-3 text-gray-300 hover:text-viana-orange hover:bg-gray-800/30 rounded-md transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {service.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
