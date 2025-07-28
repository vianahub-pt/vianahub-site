"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TranslationProvider, useTranslation } from "@/contexts/translation-context"
import { Users, Globe, DollarSign, Clock, Shield, Award, TrendingUp, CheckCircle } from "lucide-react"

function OutsourcingPageContent() {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    {
      icon: <Users className="h-8 w-8 text-viana-orange" />,
      title: t("outsourcing.services.dedicated.title"),
      description: t("outsourcing.services.dedicated.description"),
    },
    {
      icon: <Globe className="h-8 w-8 text-viana-orange" />,
      title: t("outsourcing.services.offshore.title"),
      description: t("outsourcing.services.offshore.description"),
    },
    {
      icon: <Clock className="h-8 w-8 text-viana-orange" />,
      title: t("outsourcing.services.support.title"),
      description: t("outsourcing.services.support.description"),
    },
    {
      icon: <Award className="h-8 w-8 text-viana-orange" />,
      title: t("outsourcing.services.specialists.title"),
      description: t("outsourcing.services.specialists.description"),
    },
  ]

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-viana-orange" />,
      title: t("outsourcing.benefits.costs.title"),
      description: t("outsourcing.benefits.costs.description"),
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-viana-orange" />,
      title: t("outsourcing.benefits.scalability.title"),
      description: t("outsourcing.benefits.scalability.description"),
    },
    {
      icon: <Shield className="h-6 w-6 text-viana-orange" />,
      title: t("outsourcing.benefits.quality.title"),
      description: t("outsourcing.benefits.quality.description"),
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-viana-orange" />,
      title: t("outsourcing.benefits.focus.title"),
      description: t("outsourcing.benefits.focus.description"),
    },
  ]

  return (
    <div className="min-h-screen bg-viana-white">
      <Navbar />
      <main className="pt-28">
        {/* Hero Section */}
        <section
          className="relative pt-0 pb-0 bg-gradient-to-br from-viana-orange to-viana-yellow overflow-hidden h-[300px]"
          style={{
            backgroundImage: "url(/pages/outsourcing.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">{t("outsourcing.hero.title")}</h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 drop-shadow-lg">{t("outsourcing.hero.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">
                {t("outsourcing.services.title")}
              </h2>
              <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("outsourcing.services.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-none">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-viana-black mb-3">{service.title}</h3>
                    <p className="text-viana-gray">{service.description}</p>
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
                {t("outsourcing.benefits.title")}
              </h2>
              <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("outsourcing.benefits.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{benefit.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-viana-black mb-2">{benefit.title}</h3>
                        <p className="text-viana-gray text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">{t("outsourcing.process.title")}</h2>
              <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("outsourcing.process.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-viana-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-viana-black mb-3">{t("outsourcing.process.analysis.title")}</h3>
                <p className="text-viana-gray">{t("outsourcing.process.analysis.description")}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-viana-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-viana-black mb-3">{t("outsourcing.process.selection.title")}</h3>
                <p className="text-viana-gray">{t("outsourcing.process.selection.description")}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-viana-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-viana-black mb-3">
                  {t("outsourcing.process.integration.title")}
                </h3>
                <p className="text-viana-gray">{t("outsourcing.process.integration.description")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-viana-yellow">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-6">{t("outsourcing.cta.title")}</h2>
            <p className="text-xl text-viana-gray mb-8 max-w-2xl mx-auto">{t("outsourcing.cta.subtitle")}</p>
            <Button size="lg" className="bg-viana-orange hover:bg-viana-orange/90 text-white font-semibold px-8 py-3">
              {t("outsourcing.cta.button")}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function OutsourcingPage() {
  return (
    <TranslationProvider>
      <OutsourcingPageContent />
    </TranslationProvider>
  )
}
