"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Train, Zap, Shield, Settings, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/components/translation-context"

export default function RailwayPage() {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    {
      icon: Train,
      title: t("railway.solutions.signaling.title"),
      description: t("railway.solutions.signaling.description"),
    },
    {
      icon: Zap,
      title: t("railway.solutions.control.title"),
      description: t("railway.solutions.control.description"),
    },
    {
      icon: Shield,
      title: t("railway.solutions.maintenance.title"),
      description: t("railway.solutions.maintenance.description"),
    },
    {
      icon: Settings,
      title: t("railway.solutions.passenger.title"),
      description: t("railway.solutions.passenger.description"),
    },
  ]


  const benefits = [
    {
      title: t("railway.benefits.safety.title"),
      description: t("railway.benefits.safety.description"),
    },
    {
      title: t("railway.benefits.efficiency.title"),
      description: t("railway.benefits.efficiency.description"),
    },
    {
      title: t("railway.benefits.reliability.title"),
      description: t("railway.benefits.reliability.description"),
    },
    {
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

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("railway.solutions.title")}</h2>
            <p className="text-xl text-gray-600">{t("railway.solutions.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos em Destaque</h2>
            <p className="text-xl text-gray-600">Conheça alguns dos nossos trabalhos mais importantes</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                    <Badge variant={project.status === "Concluído" ? "default" : "secondary"}>{project.status}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button variant="outline" size="sm">
                    Ver Detalhes
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
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
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tecnologia de Ponta para o Futuro dos Transportes</h2>
              <p className="text-lg text-gray-600 mb-8">
                Utilizamos as mais avançadas tecnologias para criar soluções ferroviárias seguras, eficientes e
                sustentáveis que atendem às necessidades do transporte moderno.
              </p>
              <div className="space-y-4">
                {[
                  "Sistemas de controle automatizado",
                  "Monitoramento em tempo real",
                  "Manutenção preditiva com IA",
                  "Integração com sistemas existentes",
                  "Conformidade com normas internacionais",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
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
              Download Brochura
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
