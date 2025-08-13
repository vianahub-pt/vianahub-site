"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Key, Fingerprint, Eye, ArrowRight } from "lucide-react"

export default function AccessPage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />

        <main className="pt-28">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-viana-orange to-viana-yellow">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-viana-white mb-6">Controle de Acessos</h1>
              <p className="text-xl text-viana-white/90 max-w-3xl mx-auto mb-8">
                Sistemas avançados de controle de acesso. Biometria, cartões, senhas e monitoramento em tempo real.
              </p>
              <Button
                size="lg"
                className="bg-viana-white text-viana-orange hover:bg-viana-yellow hover:text-viana-black"
              >
                Solicitar Demonstração
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black text-center mb-16">
                Recursos de Segurança
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Fingerprint,
                    title: "Biometria",
                    description: "Reconhecimento de impressão digital e facial para máxima segurança.",
                  },
                  {
                    icon: Key,
                    title: "Cartões RFID",
                    description: "Sistema de cartões inteligentes com criptografia avançada.",
                  },
                  {
                    icon: Eye,
                    title: "Monitoramento",
                    description: "Acompanhamento em tempo real de todos os acessos.",
                  },
                  {
                    icon: Shield,
                    title: "Níveis de Acesso",
                    description: "Controle granular de permissões por usuário e área.",
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
