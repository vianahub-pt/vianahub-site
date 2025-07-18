"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TranslationProvider } from "@/contexts/translation-context"
import { Building2, Users, FileText, Shield, Database, Globe, TrendingUp, CheckCircle } from "lucide-react"

export default function GovernmentPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const solutions = [
    {
      icon: <FileText className="h-8 w-8 text-viana-orange" />,
      title: "Gestão de Documentos",
      description: "Sistemas digitais para protocolo, tramitação e arquivo de documentos públicos.",
    },
    {
      icon: <Users className="h-8 w-8 text-viana-orange" />,
      title: "Atendimento ao Cidadão",
      description: "Plataformas integradas para serviços públicos online e presenciais.",
    },
    {
      icon: <Database className="h-8 w-8 text-viana-orange" />,
      title: "Transparência Pública",
      description: "Portais de transparência e dados abertos para prestação de contas.",
    },
    {
      icon: <Shield className="h-8 w-8 text-viana-orange" />,
      title: "Segurança Digital",
      description: "Soluções robustas de segurança para proteção de dados sensíveis.",
    },
  ]

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6 text-viana-orange" />,
      title: "Eficiência Operacional",
      description: "Redução de até 70% no tempo de processamento de serviços públicos.",
    },
    {
      icon: <Globe className="h-6 w-6 text-viana-orange" />,
      title: "Acesso Digital",
      description: "Disponibilização de serviços 24/7 através de plataformas online.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-viana-orange" />,
      title: "Conformidade Legal",
      description: "Atendimento completo às normas de transparência e LGPD.",
    },
  ]

  const testimonial = {
    quote:
      "A implementação das soluções da VianaHub modernizou completamente nossos processos. Conseguimos reduzir filas, acelerar atendimentos e aumentar a satisfação dos cidadãos.",
    author: "Carlos Mendes",
    role: "Secretário de Administração",
    company: "Prefeitura Municipal",
  }

  return (
    <TranslationProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Navbar />
        <div className="pt-20">
          <div className="container mx-auto px-4 py-8"></div>

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-r from-viana-blue to-viana-orange text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <Building2 className="h-16 w-16 text-viana-yellow" />
                </div>
                <h1 className="text-5xl font-bold mb-6">Soluções para Governo</h1>
                <p className="text-xl mb-8 text-gray-100">
                  Modernizamos a gestão pública com tecnologias que aumentam a eficiência, transparência e qualidade dos
                  serviços oferecidos aos cidadãos.
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
                <h2 className="text-4xl font-bold mb-4">Tecnologia para o Setor Público</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Desenvolvemos sistemas que atendem às necessidades específicas da administração pública
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
                <h2 className="text-4xl font-bold mb-4">Resultados Mensuráveis</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Nossas soluções geram impacto real na eficiência da gestão pública
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
                        <Building2 className="h-6 w-6 text-white" />
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
              <h2 className="text-4xl font-bold mb-6">Modernize sua Gestão Pública</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Implemente soluções tecnológicas que transformam a eficiência do setor público e melhoram a experiência
                dos cidadãos.
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
