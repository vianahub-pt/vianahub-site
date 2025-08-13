"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useTranslation } from "@/contexts/translation-context"

export function WhatWeDoSelector() {
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  const services = [
    {
      title: t("services.development"),
      description: t("services.developmentDesc"),
      href: "/what-we-do/development",
      image: "/pages/development.jpg",
    },
    {
      title: t("services.chatbot"),
      description: t("services.chatbotDesc"),
      href: "/what-we-do/chatbot",
      image: "/pages/chatbot.jpg",
    },
    {
      title: t("services.outsourcing"),
      description: t("services.outsourcingDesc"),
      href: "/what-we-do/outsourcing",
      image: "/pages/outsourcing.jpg",
    },
    {
      title: t("services.agile"),
      description: t("services.agileDesc"),
      href: "/what-we-do/agile",
      image: "/pages/agile.jpg",
    },
    {
      title: t("services.landingPages"),
      description: t("services.landingPagesDesc"),
      href: "/what-we-do/landing-pages",
      image: "/pages/landing-page.jpg",
    },
    {
      title: t("services.systemIntegration"),
      description: t("services.systemIntegrationDesc"),
      href: "/what-we-do/system-integration",
      image: "/pages/system-integration.jpg",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 p-6 w-[600px]">
      {services.map((service, index) => (
        <div
          key={index}
          className="group cursor-pointer rounded-lg border p-4 hover:bg-accent transition-colors"
          onClick={() => handleNavigation(service.href)}
        >
          <div className="flex items-center space-x-3">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              width={40}
              height={40}
              className="rounded-md"
            />
            <div>
              <h3 className="font-medium group-hover:text-accent-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
