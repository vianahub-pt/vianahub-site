"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Heart, Banknote, Building2, Factory, ShoppingCart } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"
import { useEffect, useRef, useState } from "react"

const industries = [
  {
    icon: <GraduationCap className="h-12 w-12 text-viana-orange" />,
    titleKey: "industries.education.title",
    descriptionKey: "industries.education.description",
    href: "/industry/education",
  },
  {
    icon: <Heart className="h-12 w-12 text-viana-orange" />,
    titleKey: "industries.healthcare.title",
    descriptionKey: "industries.healthcare.description",
    href: "/industry/healthcare",
  },
  {
    icon: <Banknote className="h-12 w-12 text-viana-orange" />,
    titleKey: "industries.financial.title",
    descriptionKey: "industries.financial.description",
    href: "/industry/financial",
  },
  {
    icon: <Building2 className="h-12 w-12 text-viana-orange" />,
    titleKey: "industries.government.title",
    descriptionKey: "industries.government.description",
    href: "/industry/government",
  },
  {
    icon: <Factory className="h-12 w-12 text-viana-orange" />,
    titleKey: "industries.manufacturing.title",
    descriptionKey: "industries.manufacturing.description",
    href: "/industry/manufacturing",
  },
  {
    icon: <ShoppingCart className="h-12 w-12 text-viana-orange" />,
    titleKey: "industries.retail.title",
    descriptionKey: "industries.retail.description",
    href: "/industry/retail",
  },
]

export function IndustriesSection() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])

  useEffect(() => {
    const cardElements = sectionRef.current?.querySelectorAll(".industry-card")

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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t("industries.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("industries.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              data-index={index}
              className={`industry-card group hover:shadow-2xl border-0 shadow-lg bg-white cursor-pointer transform transition-all duration-1000 ease-out ${
                visibleCards[index] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{
                transitionDelay: visibleCards[index] ? `${index * 150}ms` : "0ms",
              }}
              onClick={() => (window.location.href = industry.href)}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-viana-orange transition-colors">
                  {t(industry.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {t(industry.descriptionKey)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
