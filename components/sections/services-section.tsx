"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Globe, Settings, Shield, Zap } from "lucide-react"
import { useTranslation } from "@/components/translation-context"

const services = [
  {
    icon: Code,
    titleKey: "services.web.title",
    descriptionKey: "services.web.description",
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: Smartphone,
    titleKey: "services.mobile.title",
    descriptionKey: "services.mobile.description",
    color: "from-green-500 to-teal-600",
  },
  {
    icon: Globe,
    titleKey: "services.landing.title",
    descriptionKey: "services.landing.description",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Settings,
    titleKey: "services.integration.title",
    descriptionKey: "services.integration.description",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Shield,
    titleKey: "services.security.title",
    descriptionKey: "services.security.description",
    color: "from-red-500 to-orange-600",
  },
  {
    icon: Zap,
    titleKey: "services.automation.title",
    descriptionKey: "services.automation.description",
    color: "from-yellow-500 to-orange-600",
  },
]

export function ServicesSection() {
  const { t } = useTranslation()
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger staggered animation
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 150)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-gray-900">{t("services.title.part1")}</span>{" "}
            <span className="text-orange-500">{t("services.title.part2")}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.includes(index)

            return (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? "0ms" : `${index * 150}ms`,
                }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t(service.titleKey)}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{t(service.descriptionKey)}</p>
                  <Button
                    variant="outline"
                    className="!bg-viana-orange/10 text-gray-900 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors duration-300 bg-transparent"
                  >
                    {t("services.cta")}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
