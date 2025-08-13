"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TranslationProvider, useTranslation } from "@/contexts/translation-context"
import { Sun, Battery, Zap, TrendingUp, Users, Target } from "lucide-react"

function SolarEnergyPageContent() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setMounted(true)
  }, [])

  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-viana-orange" />,
      titleKey: "solarEnergy.benefits.panels.title",
      descriptionKey: "solarEnergy.benefits.panels.description",
    },
    {
      icon: <Users className="h-8 w-8 text-viana-orange" />,
      titleKey: "solarEnergy.benefits.systems.title",
      descriptionKey: "solarEnergy.benefits.systems.description",
    },
    {
      icon: <Target className="h-8 w-8 text-viana-orange" />,
      titleKey: "solarEnergy.benefits.inverters.title",
      descriptionKey: "solarEnergy.benefits.inverters.description",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-viana-orange" />,
      titleKey: "solarEnergy.benefits.monitoring.title",
      descriptionKey: "solarEnergy.benefits.monitoring.description",
    },
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-viana-white">
      <Navbar />
      <main className="pt-28">
        {/* Hero Section */}
        <section
          className="relative pt-0 pb-0 bg-gradient-to-br from-viana-orange to-viana-yellow overflow-hidden h-[350px]"
          style={{
            backgroundImage: "url(/pages/solar-energy.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">{t("solarEnergy.hero.title")}</h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">{t("solarEnergy.hero.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-viana-black text-center mb-16">
              Soluções em Energia Solar
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Sun,
                  title: "Painéis Fotovoltaicos",
                  description: "Painéis solares de alta eficiência com garantia estendida.",
                },
                {
                  icon: Battery,
                  title: "Sistemas de Armazenamento",
                  description: "Baterias para armazenamento de energia solar.",
                },
                {
                  icon: Zap,
                  title: "Inversores",
                  description: "Inversores de última geração para máxima conversão.",
                },
                {
                  icon: TrendingUp,
                  title: "Monitoramento",
                  description: "Sistema de monitoramento em tempo real da produção.",
                },
              ].map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-viana-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-viana-white" />
                    </div>
                    <CardTitle className="text-viana-black">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-viana-gray">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function WrappedSolarEnergyPageContent() {
  return (
    <TranslationProvider>
      <SolarEnergyPageContent />
    </TranslationProvider>
  )
}
