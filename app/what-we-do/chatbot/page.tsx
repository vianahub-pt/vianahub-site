"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TranslationProvider } from "@/contexts/translation-context"
import { MessageCircle, Bot, Zap, Clock, Users, BarChart, Headphones, CheckCircle } from "lucide-react"

export default function ChatbotPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: <MessageCircle className="h-8 w-8 text-viana-orange" />,
      title: "Conversas Naturais",
      description: "IA avançada para conversas fluidas e naturais com seus clientes.",
    },
    {
      icon: <Clock className="h-8 w-8 text-viana-orange" />,
      title: "Disponibilidade 24/7",
      description: "Atendimento automatizado disponível 24 horas por dia, 7 dias por semana.",
    },
    {
      icon: <Users className="h-8 w-8 text-viana-orange" />,
      title: "Múltiplos Canais",
      description: "Integração com WhatsApp, Facebook, Telegram e outros canais.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-viana-orange" />,
      title: "Analytics Avançado",
      description: "Relatórios detalhados sobre interações e performance do chatbot.",
    },
  ]

  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-viana-orange" />,
      title: "Resposta Instantânea",
      description: "Respostas imediatas para dúvidas frequentes dos clientes.",
    },
    {
      icon: <Headphones className="h-6 w-6 text-viana-orange" />,
      title: "Redução de Custos",
      description: "Diminua custos operacionais com atendimento automatizado.",
    },
    {
      icon: <Users className="h-6 w-6 text-viana-orange" />,
      title: "Satisfação do Cliente",
      description: "Melhore a experiência do cliente com atendimento eficiente.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-viana-orange" />,
      title: "Escalabilidade",
      description: "Atenda milhares de clientes simultaneamente sem limitações.",
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
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Chatbots Inteligentes</h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">
                Automatize o atendimento ao cliente com chatbots inteligentes que oferecem respostas precisas e
                experiência excepcional.
              </p>
              <Button size="lg" className="bg-white text-viana-orange hover:bg-gray-100 font-semibold px-8 py-3">
                Criar Chatbot
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">Recursos Avançados</h2>
              <p className="text-xl text-viana-gray max-w-3xl mx-auto">
                Nossos chatbots utilizam inteligência artificial de última geração para proporcionar experiências
                excepcionais.
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
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">Benefícios para seu Negócio</h2>
              <p className="text-xl text-viana-gray max-w-3xl mx-auto">
                Transforme o atendimento ao cliente e otimize operações com nossa tecnologia de chatbot.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{benefit.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-viana-black mb-2">{benefit.title}</h3>
                        <p className="text-viana-gray text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">Veja um Chatbot em Ação</h2>
                <p className="text-xl text-viana-gray">
                  Experimente como nossos chatbots podem transformar o atendimento da sua empresa.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <Bot className="h-16 w-16 text-viana-orange mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-viana-black mb-4">Demo Interativo</h3>
                <p className="text-viana-gray mb-6">
                  Converse com nosso chatbot de demonstração e veja como ele pode ajudar seus clientes.
                </p>
                <Button className="bg-viana-orange hover:bg-viana-orange/90 text-white font-semibold px-8 py-3">
                  Iniciar Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-viana-yellow">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-6">Automatize seu Atendimento</h2>
            <p className="text-xl text-viana-gray mb-8 max-w-2xl mx-auto">
              Implemente um chatbot inteligente e revolucione a forma como você atende seus clientes.
            </p>
            <Button size="lg" className="bg-viana-orange hover:bg-viana-orange/90 text-white font-semibold px-8 py-3">
              Solicitar Demonstração
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </TranslationProvider>
  )
}
