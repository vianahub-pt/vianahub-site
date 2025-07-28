"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TranslationProvider } from "@/contexts/translation-context"
import { Network, Database, Zap, Shield, Cloud, Settings, ArrowRightLeft, CheckCircle } from "lucide-react"

export default function SystemIntegrationPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const benefits = [
    {
      icon: <ArrowRightLeft className="h-8 w-8 text-viana-orange" />,
      title: "Conectividade Total",
      description: "Integração completa entre todos os seus sistemas e aplicações.",
    },
    {
      icon: <Zap className="h-8 w-8 text-viana-orange" />,
      title: "Automação",
      description: "Automatização de processos para maior eficiência operacional.",
    },
    {
      icon: <Database className="h-8 w-8 text-viana-orange" />,
      title: "Dados Unificados",
      description: "Centralização e sincronização de dados em tempo real.",
    },
    {
      icon: <Shield className="h-8 w-8 text-viana-orange" />,
      title: "Segurança",
      description: "Protocolos de segurança avançados em todas as integrações.",
    },
  ]

  const solutions = [
    {
      icon: <Network className="h-6 w-6 text-viana-orange" />,
      name: "APIs e Microserviços",
      description: "Desenvolvimento de APIs robustas para comunicação entre sistemas.",
    },
    {
      icon: <Cloud className="h-6 w-6 text-viana-orange" />,
      name: "Integração em Nuvem",
      description: "Conexão de sistemas locais com soluções em nuvem.",
    },
    {
      icon: <Settings className="h-6 w-6 text-viana-orange" />,
      name: "ERP e CRM",
      description: "Integração de sistemas de gestão empresarial e relacionamento.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-viana-orange" />,
      name: "Sistemas Legados",
      description: "Modernização e integração de sistemas antigos.",
    },
  ]

  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />

        <main className="pt-28">

          {/* Hero Section */}
          <section
            className="relative pt-24 lg:pt-28 pb-20 bg-gradient-to-br from-viana-orange to-viana-yellow overflow-hidden"
            style={{
              backgroundImage: "url('/pages/system-integration.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center text-white mt-8">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">Integração de Sistemas</h1>
                <p className="text-xl lg:text-2xl mb-8 opacity-90">
                  Conectamos seus sistemas e aplicações para criar um ecossistema tecnológico integrado, eficiente e
                  seguro.
                </p>
                <Button size="lg" className="bg-white text-viana-orange hover:bg-gray-100 font-semibold px-8 py-3">
                  Integrar Sistemas
                </Button>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">Benefícios da Integração</h2>
                <p className="text-xl text-viana-gray max-w-3xl mx-auto">
                  Transforme sistemas isolados em uma solução unificada que potencializa a eficiência e produtividade da
                  sua empresa.
                </p>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">Soluções de Integração</h2>
                <p className="text-xl text-viana-gray max-w-3xl mx-auto">
                  Oferecemos soluções personalizadas para conectar qualquer tipo de sistema, desde aplicações modernas até
                  sistemas legados.
                </p>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-6">Unifique seus Sistemas</h2>
              <p className="text-xl text-viana-gray mb-8 max-w-2xl mx-auto">
                Elimine silos de informação e crie um ambiente tecnológico integrado que impulsiona a eficiência do seu
                negócio.
              </p>
              <Button size="lg" className="bg-viana-orange hover:bg-viana-orange/90 text-white font-semibold px-8 py-3">
                Avaliar Integração
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </TranslationProvider>
  )
}
