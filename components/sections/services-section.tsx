"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Globe, Database, Shield, Zap } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: <Code className="h-8 w-8 text-viana-orange" />,
    titleKey: "services.web.title",
    descriptionKey: "services.web.description",
    href: "/what-we-do/development",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-viana-orange" />,
    titleKey: "services.mobile.title",
    descriptionKey: "services.mobile.description",
    href: "/what-we-do/development",
  },
  {
    icon: <Globe className="h-8 w-8 text-viana-orange" />,
    titleKey: "services.landing.title",
    descriptionKey: "services.landing.description",
    href: "/what-we-do/landing-pages",
  },
  {
    icon: <Database className="h-8 w-8 text-viana-orange" />,
    titleKey: "services.integration.title",
    descriptionKey: "services.integration.description",
    href: "/what-we-do/system-integration",
  },
  {
    icon: <Shield className="h-8 w-8 text-viana-orange" />,
    titleKey: "services.security.title",
    descriptionKey: "services.security.description",
    href: "/security/cyber-security",
  },
  {
    icon: <Zap className="h-8 w-8 text-viana-orange" />,
    titleKey: "services.automation.title",
    descriptionKey: "services.automation.description",
    href: "/what-we-do/development",
  },
]

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

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gray-900">Nossos</span> <span className="text-viana-orange">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-kurale">{t("services.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              data-index={index}
              className={`service-card group hover:shadow-2xl border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-tl-none rounded-tr-[25%] rounded-bl-[25%] rounded-br-none transform transition-all duration-1000 ease-out ${
                visibleCards[index] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{
                transitionDelay: visibleCards[index] ? `${index * 200}ms` : "0ms",
              }}
            >
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-3 text-xl font-bold text-gray-900 mb-4">
                  {service.icon}
                  {t(service.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-viana-orange mb-6 leading-relaxed font-kurale">{t(service.descriptionKey)}</p>
                <Button
                  variant="outline"
                  className="group-hover:bg-viana-orange group-hover:text-white group-hover:border-viana-orange transition-all duration-300 bg-transparent"
                  asChild
                >
                  <a href={service.href}>
                    {t("services.cta")}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
