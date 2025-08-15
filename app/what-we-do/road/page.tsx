"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Signal, Wrench, Users, ArrowRight, CheckCircle, Shield, Zap, Settings } from "lucide-react"
import { useTranslation, TranslationProvider } from "@/components/translation-context"

function RoadContent() {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const solutions = [
    {
      icon: Signal,
      title: t("railway.solutions.signaling.title"),
      description: t("railway.solutions.signaling.description"),
    },
    {
      icon: Settings,
      title: t("railway.solutions.control.title"),
      description: t("railway.solutions.control.description"),
    },
    {
      icon: Wrench,
      title: t("railway.solutions.maintenance.title"),
      description: t("railway.solutions.maintenance.description"),
    },
    {
      icon: Users,
      title: t("railway.solutions.passenger.title"),
      description: t("railway.solutions.passenger.description"),
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: t("railway.benefits.safety.title"),
      description: t("railway.benefits.safety.description"),
    },
    {
      icon: Zap,
      title: t("railway.benefits.efficiency.title"),
      description: t("railway.benefits.efficiency.description"),
    },
    {
      icon: CheckCircle,
      title: t("railway.benefits.reliability.title"),
      description: t("railway.benefits.reliability.description"),
    },
    {
      icon: Settings,
      title: t("railway.benefits.integration.title"),
      description: t("railway.benefits.integration.description"),
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/pages/railway.jpg" alt={t("railway.hero.title")} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">
            {t("nav.whatWeDo")}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("railway.hero.title")}</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">{t("railway.hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                {t("railway.cta.button")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Ver Projetos
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("railway.solutions.title")}</h2>
            <p className="text-xl text-gray-600">{t("railway.solutions.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-600 text-sm">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("railway.benefits.title")}</h2>
            <p className="text-xl text-gray-600">{t("railway.benefits.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tecnologia Ferroviária Avançada</h2>
              <p className="text-lg text-gray-600 mb-8">
                Implementamos as mais modernas tecnologias ferroviárias para garantir segurança, eficiência e
                confiabilidade em todos os nossos projetos de infraestrutura ferroviária.
              </p>
              <div className="space-y-4">
                {[
                  "Sistemas de sinalização digital ETCS",
                  "Controle automático de trens (ATC)",
                  "Monitoramento em tempo real",
                  "Manutenção preditiva com IoT",
                  "Integração com sistemas urbanos",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96">
              <Image src="/pages/railway.jpg" alt="Tecnologia ferroviária" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("railway.cta.title")}</h2>
          <p className="text-xl opacity-90 mb-8">{t("railway.cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                {t("railway.cta.button")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Portfolio Completo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function RoadPage() {
  return (
    <TranslationProvider>
      <RoadContent />
    </TranslationProvider>
  )
}
