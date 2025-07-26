"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/contexts/translation-context"
import { Zap, MessageSquare, Code, Layers, FileText, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function ServicesSection() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])

  useEffect(() => {
    const cardElements = sectionRef.current?.querySelectorAll(".service-card")

    if (!cardElements) return

    // Initialize all cards as not visible
    setVisibleCards(new Array(cardElements.length).fill(false))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")

          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          } else {
            // Reset animation when card leaves viewport
            setVisibleCards((prev) => {
              const newState = [...prev]
              newState[index] = false
              return newState
            })
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    cardElements.forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <Zap className="h-8 w-8 text-viana-orange" />,
      title: t("services.agile.title"),
      description: t("services.agile.description"),
      href: "/what-we-do/agile",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-viana-orange" />,
      title: t("services.chatbot.title"),
      description: t("services.chatbot.description"),
      href: "/what-we-do/chatbot",
    },
    {
      icon: <Code className="h-8 w-8 text-viana-orange" />,
      title: t("services.development.title"),
      description: t("services.development.description"),
      href: "/what-we-do/development",
    },
    {
      icon: <Layers className="h-8 w-8 text-viana-orange" />,
      title: t("services.integration.title"),
      description: t("services.integration.description"),
      href: "/what-we-do/system-integration",
    },
    {
      icon: <FileText className="h-8 w-8 text-viana-orange" />,
      title: t("services.landing.title"),
      description: t("services.landing.description"),
      href: "/what-we-do/landing-pages",
    },
    {
      icon: <Users className="h-8 w-8 text-viana-orange" />,
      title: t("services.outsourcing.title"),
      description: t("services.outsourcing.description"),
      href: "/what-we-do/outsourcing",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("services.title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-kurale">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                data-index={index}
                className={`service-card group hover:shadow-xl border-0 bg-white dark:bg-gray-900 rounded-tl-none rounded-tr-[5rem] rounded-bl-[5rem] rounded-br-none transform transition-all duration-1000 ease-out ${
                  visibleCards[index] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
                }`}
                style={{
                  transitionDelay: visibleCards[index] ? `${index * 200}ms` : "0ms",
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 group-hover:text-viana-orange transition-colors">
                    {service.icon}
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6 font-kurale text-viana-orange">
                    {service.description}
                  </CardDescription>
                  <Link href={service.href}>
                    <Button
                      variant="outline"
                      className="group-hover:bg-viana-orange group-hover:text-white transition-colors bg-transparent"
                    >
                      Saiba Mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
