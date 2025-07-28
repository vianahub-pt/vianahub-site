"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { TranslationProvider, useTranslation } from "@/contexts/translation-context"
import { Zap, Users, Target, TrendingUp, Calendar, Timer, Eye, Truck } from "lucide-react"

function AgilePageContent() {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
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
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative pt-0 pb-20 bg-gradient-to-br from-viana-orange to-viana-yellow overflow-hidden"
        style={{
          backgroundImage: "url(/pages/what-we-do-agile.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white mt-8">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">{t("agile.hero.title")}</h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">{t("agile.hero.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">{t("agile.benefits.title")}</h2>
            <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("agile.benefits.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-none">
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

      {/* Methodologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">{t("agile.process.title")}</h2>
            <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("agile.process.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {methodologies.map((methodology, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-none">
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

      <Footer />
    </div>
  )
}

export default function AgilePage() {
  return (
    <TranslationProvider>
      <AgilePageContent />
    </TranslationProvider>
  )
}
