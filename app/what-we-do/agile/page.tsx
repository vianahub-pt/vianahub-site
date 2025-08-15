"use client"

import { useEffect, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, Target, TrendingUp, Calendar, Timer, Eye, Truck } from "lucide-react"
import { useTranslation } from "@/components/translation-context"

export default function AgilePage() {
  const { t } = useTranslation()
  const processRef = useRef<HTMLElement>(null)
  const benefitsRef = useRef<HTMLElement>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const [visibleBenefits, setVisibleBenefits] = useState<boolean[]>([])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const cardElements = processRef.current?.querySelectorAll(".process-card")

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

  useEffect(() => {
    const benefitElements = benefitsRef.current?.querySelectorAll(".benefit-card")

    if (!benefitElements) return

    // Initialize all benefits as not visible
    setVisibleBenefits(new Array(benefitElements.length).fill(false))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")

          if (entry.isIntersecting) {
            setVisibleBenefits((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          } else {
            // Reset animation when card leaves viewport
            setVisibleBenefits((prev) => {
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

    benefitElements.forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-viana-orange" />,
      titleKey: "agile.benefits.delivery.title",
      descriptionKey: "agile.benefits.delivery.description",
    },
    {
      icon: <Users className="h-8 w-8 text-viana-orange" />,
      titleKey: "agile.benefits.collaboration.title",
      descriptionKey: "agile.benefits.collaboration.description",
    },
    {
      icon: <Target className="h-8 w-8 text-viana-orange" />,
      titleKey: "agile.benefits.flexibility.title",
      descriptionKey: "agile.benefits.flexibility.description",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-viana-orange" />,
      titleKey: "agile.benefits.quality.title",
      descriptionKey: "agile.benefits.quality.description",
    },
  ]

  const methodologies = [
    {
      icon: <Calendar className="h-6 w-6 text-viana-orange" />,
      nameKey: "agile.process.planning.title",
      descriptionKey: "agile.process.planning.description",
    },
    {
      icon: <Timer className="h-6 w-6 text-viana-orange" />,
      nameKey: "agile.process.sprints.title",
      descriptionKey: "agile.process.sprints.description",
    },
    {
      icon: <Eye className="h-6 w-6 text-viana-orange" />,
      nameKey: "agile.process.review.title",
      descriptionKey: "agile.process.review.description",
    },
    {
      icon: <Truck className="h-6 w-6 text-viana-orange" />,
      nameKey: "agile.process.delivery.title",
      descriptionKey: "agile.process.delivery.description",
    },
  ]

  return (
    <div className="min-h-screen bg-viana-white">
        {/* Hero Section */}
        <section className="relative pt-0 pb-0 bg-gradient-to-br from-viana-orange to-viana-yellow overflow-hidden h-[500px]">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/pages/agile.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 flex items-center justify-center gap-4">
              <Zap className="text-orange-500 w-12 h-12 lg:w-16 lg:h-16" />
              {t("agile.hero.title")}
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">{t("agile.hero.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">{t("agile.benefits.title")}</h2>
              <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("agile.benefits.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  data-index={index}
                  className={`benefit-card text-center hover:shadow-lg transition-all duration-1000 ease-out border-none transform ${
                    visibleBenefits[index]
                      ? "opacity-100 translate-x-0"
                      : `opacity-0 ${index < 2 ? "-translate-x-full" : "translate-x-full"}`
                  }`}
                  style={{
                    transitionDelay: visibleBenefits[index] ? `${index * 200}ms` : "0ms",
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-viana-black mb-3">{t(benefit.titleKey)}</h3>
                    <p className="text-viana-gray">{t(benefit.descriptionKey)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Parallax Section */}
        <div
          className="relative h-[500px] overflow-hidden"
          style={{
            backgroundImage: "url('/pages/agile-parallax.jpg')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
        </div>

        {/* Methodologies Section */}
        <section ref={processRef} className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">{t("agile.process.title")}</h2>
              <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("agile.process.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {methodologies.map((methodology, index) => (
                <Card
                  key={index}
                  data-index={index}
                  className={`process-card hover:shadow-lg border-none transform transition-all duration-1000 ease-out ${
                    visibleCards[index] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
                  }`}
                  style={{
                    transitionDelay: visibleCards[index] ? `${index * 200}ms` : "0ms",
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{methodology.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-viana-black mb-2">{t(methodology.nameKey)}</h3>
                        <p className="text-viana-gray">{t(methodology.descriptionKey)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}
