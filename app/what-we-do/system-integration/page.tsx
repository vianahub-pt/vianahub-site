"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Network, Database, Zap, Shield, Cloud, Settings, ArrowRightLeft, CheckCircle } from "lucide-react"

function SystemIntegrationContent() {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const benefits = [
    {
      icon: <ArrowRightLeft className="h-8 w-8 text-viana-orange" />,
      title: t("systemIntegration.benefits.connectivity.title"),
      description: t("systemIntegration.benefits.connectivity.description"),
    },
    {
      icon: <Zap className="h-8 w-8 text-viana-orange" />,
      title: t("systemIntegration.benefits.automation.title"),
      description: t("systemIntegration.benefits.automation.description"),
    },
    {
      icon: <Database className="h-8 w-8 text-viana-orange" />,
      title: t("systemIntegration.benefits.data.title"),
      description: t("systemIntegration.benefits.data.description"),
    },
    {
      icon: <Shield className="h-8 w-8 text-viana-orange" />,
      title: t("systemIntegration.benefits.security.title"),
      description: t("systemIntegration.benefits.security.description"),
    },
  ]

  const solutions = [
    {
      icon: <Network className="h-6 w-6 text-viana-orange" />,
      name: t("systemIntegration.solutions.apis.title"),
      description: t("systemIntegration.solutions.apis.description"),
    },
    {
      icon: <Cloud className="h-6 w-6 text-viana-orange" />,
      name: t("systemIntegration.solutions.cloud.title"),
      description: t("systemIntegration.solutions.cloud.description"),
    },
    {
      icon: <Settings className="h-6 w-6 text-viana-orange" />,
      name: t("systemIntegration.solutions.erp.title"),
      description: t("systemIntegration.solutions.erp.description"),
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-viana-orange" />,
      name: t("systemIntegration.solutions.legacy.title"),
      description: t("systemIntegration.solutions.legacy.description"),
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
            backgroundImage: "url(/pages/system-integration.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                {t("systemIntegration.hero.title")}
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 drop-shadow-lg">
                {t("systemIntegration.hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">
                {t("systemIntegration.benefits.title")}
              </h2>
              <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("systemIntegration.benefits.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-none">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-viana-black mb-3">{benefit.title}</h3>
                    <p className="text-viana-gray">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">
                {t("systemIntegration.solutions.title")}
              </h2>
              <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("systemIntegration.solutions.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {solutions.map((solution, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{solution.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-viana-black mb-2">{solution.name}</h3>
                        <p className="text-viana-gray">{solution.description}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-6">{t("systemIntegration.cta.title")}</h2>
            <p className="text-xl text-viana-gray mb-8 max-w-2xl mx-auto">{t("systemIntegration.cta.subtitle")}</p>
            <Button size="lg" className="bg-viana-orange hover:bg-viana-orange/90 text-white font-semibold px-8 py-3">
              {t("systemIntegration.cta.button")}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function SystemIntegrationPage() {
  return (
    <TranslationProvider>
      <SystemIntegrationContent />
    </TranslationProvider>
  )
}
