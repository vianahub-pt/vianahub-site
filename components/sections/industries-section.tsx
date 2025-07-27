"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/contexts/translation-context"
import { GraduationCap, Banknote, Building2, Heart, Factory, ShoppingCart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

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

  const industries = [
    {
      icon: <GraduationCap className="h-8 w-8 text-viana-orange" />,
      title: t("industries.education.title"),
      description: t("industries.education.description"),
      href: "/industry/education",
    },
    {
      icon: <Banknote className="h-8 w-8 text-viana-orange" />,
      title: t("industries.financial.title"),
      description: t("industries.financial.description"),
      href: "/industry/financial",
    },
    {
      icon: <Building2 className="h-8 w-8 text-viana-orange" />,
      title: t("industries.government.title"),
      description: t("industries.government.description"),
      href: "/industry/government",
    },
    {
      icon: <Heart className="h-8 w-8 text-viana-orange" />,
      title: t("industries.healthcare.title"),
      description: t("industries.healthcare.description"),
      href: "/industry/healthcare",
    },
    {
      icon: <Factory className="h-8 w-8 text-viana-orange" />,
      title: t("industries.manufacturing.title"),
      description: t("industries.manufacturing.description"),
      href: "/industry/manufacturing",
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-viana-orange" />,
      title: t("industries.retail.title"),
      description: t("industries.retail.description"),
      href: "/industry/retail",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("industries.title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-kurale">
            {t("industries.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              data-index={index}
              className={`industry-card group hover:shadow-xl border-0 bg-gray-50 dark:bg-gray-800 transform transition-all duration-1000 ease-out ${
                visibleCards[index] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{
                transitionDelay: visibleCards[index] ? `${index * 200}ms` : "0ms",
              }}
            >
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4 group-hover:text-viana-orange transition-colors">
                 {industry.icon} {industry.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-kurale">{industry.description}</p>
                <Link href={industry.href}>
                  <Button
                    variant="outline"
                    className="group-hover:bg-viana-orange group-hover:text-white transition-colors bg-transparent"
                  >
                    Explorar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
