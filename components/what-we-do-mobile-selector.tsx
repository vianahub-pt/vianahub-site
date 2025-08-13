"use client"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/contexts/translation-context"
import { Button } from "@/components/ui/button"

export function WhatWeDoMobileSelector() {
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  const services = [
    {
      title: t("services.development"),
      href: "/what-we-do/development",
    },
    {
      title: t("services.chatbot"),
      href: "/what-we-do/chatbot",
    },
    {
      title: t("services.outsourcing"),
      href: "/what-we-do/outsourcing",
    },
    {
      title: t("services.agile"),
      href: "/what-we-do/agile",
    },
    {
      title: t("services.landingPages"),
      href: "/what-we-do/landing-pages",
    },
    {
      title: t("services.systemIntegration"),
      href: "/what-we-do/system-integration",
    },
  ]

  return (
    <div className="space-y-2">
      {services.map((service, index) => (
        <Button
          key={index}
          variant="ghost"
          className="w-full justify-start"
          onClick={() => handleNavigation(service.href)}
        >
          {service.title}
        </Button>
      ))}
    </div>
  )
}
