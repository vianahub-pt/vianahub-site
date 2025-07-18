"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TranslationProvider } from "@/contexts/translation-context"
import { Zap, Target, TrendingUp, Smartphone, Search, BarChart3, Palette, Rocket } from "lucide-react"

export default function LandingPagesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-viana-orange" />,
      title: "Alta Conversão",
      description: "Landing pages otimizadas para maximizar suas conversões.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-viana-orange" />,
      title: "Responsivo",
      description: "Design adaptável para todos os dispositivos e telas.",
    },
    {
      icon: <Search className="h-8 w-8 text-viana-orange" />,
      title: "SEO Otimizado",
      description: "Otimização completa para mecanismos de busca.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-viana-orange" />,
      title: "Analytics",
      description: "Acompanhamento detalhado de métricas e performance.",
    },
  ]

  const benefits = [
    {
      icon: <Target className="h-6 w-6 text-viana-orange" />,
      name: "Foco no Objetivo",
      description: "Páginas direcionadas para uma ação específica do usuário.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-viana-orange" />,
      name: "Aumento de Vendas",
      description: "Estratégias comprovadas para aumentar suas conversões.",
    },
    {
      icon: <Palette className="h-6 w-6 text-viana-orange" />,
      name: "Design Atrativo",
      description: "Visual moderno e profissional que gera confiança.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-viana-orange" />,
      name: "Carregamento Rápido",
      description: "Otimização de performance para melhor experiência.",
    },
  ]

  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-24 lg:pt-28 pb-20 bg-gradient-to-br from-viana-orange to-viana-yellow overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white mt-8">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Landing Pages de Alta Conversão</h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">
                Criamos landing pages que convertem visitantes em clientes, com design profissional e estratégias
                comprovadas de marketing digital.
              </p>
              <Button size="lg" className="bg-white text-viana-orange hover:bg-gray-100 font-semibold px-8 py-3">
                Criar Minha Landing Page
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">Recursos Essenciais</h2>
              <p className="text-xl text-viana-gray max-w-3xl mx-auto">
                Nossas landing pages são desenvolvidas com todos os elementos necessários para maximizar suas conversões
                e resultados.
              </p>
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
                Por que Escolher Nossas Landing Pages
              </h2>
              <p className="text-xl text-viana-gray max-w-3xl mx-auto">
                Combinamos design atrativo com estratégias de conversão para entregar resultados excepcionais.
              </p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-6">Aumente suas Conversões Hoje</h2>
            <p className="text-xl text-viana-gray mb-8 max-w-2xl mx-auto">
              Tenha uma landing page profissional que converte visitantes em clientes e impulsiona o crescimento do seu
              negócio.
            </p>
            <Button size="lg" className="bg-viana-orange hover:bg-viana-orange/90 text-white font-semibold px-8 py-3">
              Solicitar Orçamento
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </TranslationProvider>
  )
}
