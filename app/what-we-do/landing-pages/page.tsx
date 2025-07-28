"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TranslationProvider, useTranslation } from "@/contexts/translation-context"
import { Zap, Target, TrendingUp, Smartphone, Search, BarChart3, Palette, Rocket } from "lucide-react"

function LandingPagesContent() {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-viana-orange" />,
      title: t("landingPages.features.conversion.title"),
      description: t("landingPages.features.conversion.description"),
    },
    {
      icon: <Smartphone className="h-8 w-8 text-viana-orange" />,
      title: t("landingPages.features.responsive.title"),
      description: t("landingPages.features.responsive.description"),
    },
    {
      icon: <Search className="h-8 w-8 text-viana-orange" />,
      title: t("landingPages.features.seo.title"),
      description: t("landingPages.features.seo.description"),
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-viana-orange" />,
      title: t("landingPages.features.analytics.title"),
      description: t("landingPages.features.analytics.description"),
    },
  ]

  const benefits = [
    {
      icon: <Target className="h-6 w-6 text-viana-orange" />,
      name: t("landingPages.benefits.focus.title"),
      description: t("landingPages.benefits.focus.description"),
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-viana-orange" />,
      name: t("landingPages.benefits.sales.title"),
      description: t("landingPages.benefits.sales.description"),
    },
    {
      icon: <Palette className="h-6 w-6 text-viana-orange" />,
      name: t("landingPages.benefits.design.title"),
      description: t("landingPages.benefits.design.description"),
    },
    {
      icon: <Rocket className="h-6 w-6 text-viana-orange" />,
      name: t("landingPages.benefits.speed.title"),
      description: t("landingPages.benefits.speed.description"),
    },
  ]

  return (
    <div className="min-h-screen bg-viana-white">
      <Navbar />

      <main className="pt-28">
        {/* Hero Section */}
        <section
          className="relative pt-24 lg:pt-28 pb-20 bg-gradient-to-br from-viana-orange to-viana-yellow overflow-hidden"
          style={{
            backgroundImage: "url('/pages/landing-page.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white mt-8">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">{t("landingPages.hero.title")}</h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 drop-shadow-lg">{t("landingPages.hero.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">
                {t("landingPages.features.title")}
              </h2>
              <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("landingPages.features.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-none">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-viana-black mb-3">{feature.title}</h3>
                    <p className="text-viana-gray">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">
                {t("landingPages.benefits.title")}
              </h2>
              <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("landingPages.benefits.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{benefit.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-viana-black mb-2">{benefit.name}</h3>
                        <p className="text-viana-gray">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-viana-yellow">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-6">{t("landingPages.cta.title")}</h2>
            <p className="text-xl text-viana-gray mb-8 max-w-2xl mx-auto">{t("landingPages.cta.subtitle")}</p>
            <Button size="lg" className="bg-viana-orange hover:bg-viana-orange/90 text-white font-semibold px-8 py-3">
              {t("landingPages.cta.button")}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function LandingPagesPage() {
  return (
    <TranslationProvider>
      <LandingPagesContent />
    </TranslationProvider>
  )
}
