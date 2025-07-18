"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TranslationProvider } from "@/contexts/translation-context"
import { Factory, Cog, BarChart3, Shield, Zap, TrendingUp, CheckCircle, Clock } from "lucide-react"

export default function ManufacturingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const solutions = [
    {
      icon: <Cog className="h-8 w-8 text-viana-orange" />,
      title: "Automação Industrial",
      description: "Sistemas de controle e automação para otimização de processos produtivos.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-viana-orange" />,
      title: "Analytics de Produção",
      description: "Dashboards e relatórios em tempo real para monitoramento da produção.",
    },
    {
      icon: <Shield className="h-8 w-8 text-viana-orange" />,
      title: "Controle de Qualidade",
      description: "Sistemas integrados para garantia e controle de qualidade dos produtos.",
    },
    {
      icon: <Zap className="h-8 w-8 text-viana-orange" />,
      title: "IoT Industrial",
      description: "Conectividade e monitoramento inteligente de equipamentos e processos.",
    },
  ]

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6 text-viana-orange" />,
      title: "Aumento de Produtividade",
      description: "Incremento de até 40% na eficiência dos processos produtivos.",
    },
    {
      icon: <Clock className="h-6 w-6 text-viana-orange" />,
      title: "Redução de Downtime",
      description: "Manutenção preditiva que reduz paradas não programadas em 60%.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-viana-orange" />,
      title: "Qualidade Consistente",
      description: "Controle automatizado que garante padrões de qualidade uniformes.",
    },
  ]

  const testimonial = {
    quote:
      "Com as soluções da VianaHub, conseguimos digitalizar nossa linha de produção e aumentar nossa eficiência em 35%. O ROI foi alcançado em menos de 8 meses.",
    author: "Roberto Santos",
    role: "Diretor de Operações",
    company: "Indústria Metalúrgica ABC",
  }

  return (
    <TranslationProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Navbar />
        <div className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-r from-viana-blue to-viana-orange text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <Factory className="h-16 w-16 text-viana-yellow" />
                </div>
                <h1 className="text-5xl font-bold mb-6">Soluções para Manufatura</h1>
                <p className="text-xl mb-8 text-gray-100">
                  Revolucionamos processos industriais com tecnologias de automação, IoT e analytics que maximizam
                  eficiência e qualidade na produção.
                </p>
                <Button size="lg" className="bg-viana-yellow text-viana-black hover:bg-yellow-400">
                  Conhecer Soluções
                </Button>
              </div>
            </div>
          </section>

          {/* Solutions Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">
                  Nossas Soluções
                </Badge>
                <h2 className="text-4xl font-bold mb-4">Indústria 4.0 na Prática</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Implementamos tecnologias avançadas que transformam processos tradicionais em operações inteligentes
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {solutions.map((solution, index) => (
                  <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-0">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-6">{solution.icon}</div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-viana-orange transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{solution.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">
                  Benefícios
                </Badge>
                <h2 className="text-4xl font-bold mb-4">Resultados Comprovados</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Nossas soluções geram impacto direto na produtividade e rentabilidade industrial
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-12 text-center">
                    <div className="text-4xl text-viana-orange mb-6">"</div>
                    <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-8 italic">
                      {testimonial.quote}
                    </blockquote>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-viana-orange to-viana-yellow rounded-full flex items-center justify-center">
                        <Factory className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="font-bold">{testimonial.author}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                        <div className="text-sm text-viana-orange">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-viana-blue to-viana-orange text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">Transforme sua Indústria</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Implemente soluções de Indústria 4.0 que revolucionam seus processos produtivos e aumentam sua
                competitividade no mercado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-viana-blue hover:bg-gray-100">
                  Solicitar Demonstração
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-viana-blue bg-transparent"
                >
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </TranslationProvider>
  )
}
