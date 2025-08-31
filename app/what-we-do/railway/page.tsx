"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Train, Shield, Zap, Settings, Users, CheckCircle, Wrench, Network, ArrowRight, Download } from "lucide-react"
import { useTranslation } from "@/components/translation-context"

export default function RailwayPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/pages/railway.jpg" alt="Railway Infrastructure" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">{t("railway.hero.title")}</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">{t("railway.hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
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
      </section>

      {/* Our Railway Solutions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("railway.solutions.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("railway.solutions.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <Train className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t("railway.solutions.signaling.title")}</h3>
                <p className="text-muted-foreground">{t("railway.solutions.signaling.description")}</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <Settings className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t("railway.solutions.control.title")}</h3>
                <p className="text-muted-foreground">{t("railway.solutions.control.description")}</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/20 transition-colors">
                  <Wrench className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t("railway.solutions.maintenance.title")}</h3>
                <p className="text-muted-foreground">{t("railway.solutions.maintenance.description")}</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <Users className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t("railway.solutions.passenger.title")}</h3>
                <p className="text-muted-foreground">{t("railway.solutions.passenger.description")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("railway.projects.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("railway.projects.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=256&width=400&text=Northern+Line+Project"
                  alt="Northern Line Project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 hover:bg-green-600">{t("railway.projects.norte.status")}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{t("railway.projects.norte.year")}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{t("railway.projects.norte.title")}</h3>
                <p className="text-muted-foreground mb-4">{t("railway.projects.norte.description")}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  {t("railway.projects.viewDetails")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=256&width=400&text=Porto+Metro+Expansion"
                  alt="Porto Metro Expansion"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    {t("railway.projects.porto.status")}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{t("railway.projects.porto.year")}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{t("railway.projects.porto.title")}</h3>
                <p className="text-muted-foreground mb-4">{t("railway.projects.porto.description")}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  {t("railway.projects.viewDetails")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              {t("railway.projects.viewAll")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits of Our Solutions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("railway.benefits.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("railway.benefits.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-500/20 transition-colors">
                <Shield className="h-10 w-10 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t("railway.benefits.safety.title")}</h3>
              <p className="text-muted-foreground">{t("railway.benefits.safety.description")}</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Zap className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t("railway.benefits.efficiency.title")}</h3>
              <p className="text-muted-foreground">{t("railway.benefits.efficiency.description")}</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/20 transition-colors">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t("railway.benefits.reliability.title")}</h3>
              <p className="text-muted-foreground">{t("railway.benefits.reliability.description")}</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/20 transition-colors">
                <Network className="h-10 w-10 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t("railway.benefits.integration.title")}</h3>
              <p className="text-muted-foreground">{t("railway.benefits.integration.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cutting-Edge Technology */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("railway.features.title")}</h2>
              <p className="text-xl text-muted-foreground mb-8">{t("railway.features.subtitle")}</p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg">{t("railway.features.automation")}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg">{t("railway.features.monitoring")}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg">{t("railway.features.predictive")}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg">{t("railway.features.integration")}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg">{t("railway.features.compliance")}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Railway+Technology"
                alt="Railway Technology"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("railway.cta.title")}</h2>
          <p className="text-xl mb-8 opacity-90">{t("railway.cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
              {t("railway.cta.button")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              {t("railway.cta.downloadBrochure")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
