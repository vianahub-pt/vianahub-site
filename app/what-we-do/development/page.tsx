"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/contexts/translation-context"
import { Zap, Users, CheckCircle, Globe, Smartphone, Database, Code, Shield } from "lucide-react"

function DevelopmentPageContent() {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    {
      icon: <Globe className="h-8 w-8 text-viana-orange" />,
      titleKey: "development.web.title",
      descriptionKey: "development.web.description",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-viana-orange" />,
      titleKey: "development.mobile.title",
      descriptionKey: "development.mobile.description",
    },
    {
      icon: <Database className="h-8 w-8 text-viana-orange" />,
      titleKey: "development.corporate.title",
      descriptionKey: "development.corporate.description",
    },
    {
      icon: <Code className="h-8 w-8 text-viana-orange" />,
      titleKey: "development.apis.title",
      descriptionKey: "development.apis.description",
    },
  ]

  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-viana-orange" />,
      titleKey: "development.performance.title",
      descriptionKey: "development.performance.description",
    },
    {
      icon: <Shield className="h-6 w-6 text-viana-orange" />,
      titleKey: "development.security.title",
      descriptionKey: "development.security.description",
    },
    {
      icon: <Users className="h-6 w-6 text-viana-orange" />,
      titleKey: "development.ux.title",
      descriptionKey: "development.ux.description",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-viana-orange" />,
      titleKey: "development.quality.title",
      descriptionKey: "development.quality.description",
    },
  ]

  return (
    <div className="min-h-screen bg-viana-white">
      <Navbar />

        <main className="pt-28">
          {/* Hero Section */}
          <section
            className="relative pt-24 lg:pt-28 pb-20 overflow-hidden"
            style={{
              backgroundImage: "url('/pages/what-we-do-development.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center text-white mt-8">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">{t("development.title")}</h1>
                <p className="text-xl lg:text-2xl mb-8 opacity-90">{t("development.subtitle")}</p>
                <Button size="lg" className="bg-viana-orange hover:bg-viana-orange/90 text-white font-semibold px-8 py-3">
                  {t("development.cta")}
                </Button>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">{t("development.services.title")}</h2>
                <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("development.services.subtitle")}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow border-none">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-viana-black mb-3">{t(service.titleKey)}</h3>
                      <p className="text-viana-gray">{t(service.descriptionKey)}</p>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">{t("development.why.title")}</h2>
                <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("development.why.subtitle")}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-bold text-viana-black mb-3">{t(benefit.titleKey)}</h3>
                    <p className="text-viana-gray">{t(benefit.descriptionKey)}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-viana-orange">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">{t("development.cta.title")}</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">{t("development.cta.subtitle")}</p>
              <Button size="lg" className="bg-white text-viana-orange hover:bg-gray-100 font-semibold px-8 py-3">
                {t("development.cta.button")}
              </Button>
            </div>
          </section>
        </main>

      <Footer />
    </div>
  )
}

export default function DevelopmentPage() {
  return <DevelopmentPageContent />
}
