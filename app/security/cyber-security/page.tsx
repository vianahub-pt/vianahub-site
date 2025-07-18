"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TranslationProvider } from "@/contexts/translation-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Eye, AlertTriangle, ArrowRight } from "lucide-react"

export default function CyberSecurityPage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />

        <main className="pt-28">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-viana-orange to-viana-yellow">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-viana-white mb-6">Segurança Cibernética</h1>
              <p className="text-xl text-viana-white/90 max-w-3xl mx-auto mb-8">
                Proteja sua empresa contra ameaças digitais. Firewall, antivírus, monitoramento 24/7 e resposta a
                incidentes.
              </p>
              <Button
                size="lg"
                className="bg-viana-white text-viana-orange hover:bg-viana-yellow hover:text-viana-black"
              >
                Avaliar Segurança
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black text-center mb-16">
                Soluções de Cibersegurança
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Firewall",
                    description: "Proteção avançada de rede com firewall de nova geração.",
                  },
                  {
                    icon: Lock,
                    title: "Criptografia",
                    description: "Criptografia de dados em trânsito e em repouso.",
                  },
                  {
                    icon: Eye,
                    title: "Monitoramento",
                    description: "SOC 24/7 com detecção e resposta a ameaças em tempo real.",
                  },
                  {
                    icon: AlertTriangle,
                    title: "Resposta a Incidentes",
                    description: "Planos de resposta rápida a incidentes de segurança.",
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
