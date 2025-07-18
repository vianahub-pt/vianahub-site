"use client"

import { Navbar } from "@/components/navbar"
import { Breadcrumb } from "@/components/breadcrumb"
import { Footer } from "@/components/footer"
import { TranslationProvider } from "@/contexts/translation-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sun, Battery, Zap, TrendingUp, ArrowRight } from "lucide-react"

export default function SolarEnergyPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Engenharia", href: "/engineering" },
    { label: "Energia Solar" },
  ]

  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <Breadcrumb items={breadcrumbItems} />

        <main className="pt-28">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-viana-orange to-viana-yellow">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-viana-white mb-6">Energia Solar</h1>
              <p className="text-xl text-viana-white/90 max-w-3xl mx-auto mb-8">
                Soluções completas em energia solar fotovoltaica. Projetos residenciais, comerciais e industriais com
                máxima eficiência energética.
              </p>
              <Button
                size="lg"
                className="bg-viana-white text-viana-orange hover:bg-viana-yellow hover:text-viana-black"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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
    </TranslationProvider>
  )
}
