"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/components/translation-context"
import { Train, Settings, Shield, Zap, CheckCircle, ArrowRight, Download } from "lucide-react"
import Image from "next/image"

export default function RailwayPage() {
  const { t } = useTranslation()

  const solutions = [
    {
      icon: Train,
      title: t("railway.solutions.signaling.title"),
      description: t("railway.solutions.signaling.description"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Settings,
      title: t("railway.solutions.control.title"),
      description: t("railway.solutions.control.description"),
      color: "from-green-500 to-green-600",
    },
    {
      icon: Shield,
      title: t("railway.solutions.maintenance.title"),
      description: t("railway.solutions.maintenance.description"),
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Zap,
      title: t("railway.solutions.passenger.title"),
      description: t("railway.solutions.passenger.description"),
      color: "from-orange-500 to-orange-600",
    },
  ]

  const projects = [
    {
      title: t("railway.projects.norte.title"),
      description: t("railway.projects.norte.description"),
      status: t("railway.projects.norte.status"),
      year: t("railway.projects.norte.year"),
      image: "/pages/railway.jpg",
    },
    {
      title: t("railway.projects.porto.title"),
      description: t("railway.projects.porto.description"),
      status: t("railway.projects.porto.status"),
      year: t("railway.projects.porto.year"),
      image: "/pages/railway.jpg",
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: t("railway.benefits.safety.title"),
      description: t("railway.benefits.safety.description"),
      color: "from-red-500 to-red-600",
    },
    {
      icon: Zap,
      title: t("railway.benefits.efficiency.title"),
      description: t("railway.benefits.efficiency.description"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: CheckCircle,
      title: t("railway.benefits.reliability.title"),
      description: t("railway.benefits.reliability.description"),
      color: "from-green-500 to-green-600",
    },
    {
      icon: Settings,
      title: t("railway.benefits.integration.title"),
      description: t("railway.benefits.integration.description"),
      color: "from-purple-500 to-purple-600",
    },
  ]

  const features = [
    t("railway.features.automation"),
    t("railway.features.monitoring"),
    t("railway.features.predictive"),
    t("railway.features.integration"),
    t("railway.features.compliance"),
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/pages/railway.jpg" alt="Railway Infrastructure" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t("railway.hero.title")}</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">{t("railway.hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                {t("railway.cta.button")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                {t("railway.cta.downloadBrochure")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Railway Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("railway.solutions.title")}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("railway.solutions.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("railway.projects.title")}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("railway.projects.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900">
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-gray-900 border-gray-300">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors duration-300 bg-transparent"
                  >
                    {t("railway.projects.viewDetails")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              {t("railway.projects.viewAll")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits of Our Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("railway.benefits.title")}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("railway.benefits.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cutting-Edge Technology */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("railway.features.title")}</h2>
              <p className="text-lg text-gray-600 mb-8">{t("railway.features.subtitle")}</p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src="/pages/railway.jpg"
                alt="Railway Technology"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t("railway.cta.title")}</h2>
            <p className="text-xl text-orange-100 mb-8">{t("railway.cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                {t("railway.cta.button")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                {t("railway.cta.downloadBrochure")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
