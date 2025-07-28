"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TranslationProvider } from "@/contexts/translation-context"
import { Users, Globe, DollarSign, Clock, Shield, Award, TrendingUp, CheckCircle } from "lucide-react"

export default function OutsourcingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    {
      icon: <Users className="h-8 w-8 text-viana-orange" />,
      title: "Equipes Dedicadas",
      description: "Times especializados trabalhando exclusivamente no seu projeto.",
    },
    {
      icon: <Globe className="h-8 w-8 text-viana-orange" />,
      title: "Desenvolvimento Offshore",
      description: "Acesso a talentos globais com custos otimizados.",
    },
    {
      icon: <Clock className="h-8 w-8 text-viana-orange" />,
      title: "Suporte 24/7",
      description: "Cobertura completa com times em diferentes fusos horários.",
    },
    {
      icon: <Award className="h-8 w-8 text-viana-orange" />,
      title: "Especialistas Certificados",
      description: "Profissionais com certificações nas principais tecnologias.",
    },
  ]

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-viana-orange" />,
      title: "Redução de Custos",
      description: "Economize até 60% em custos operacionais e de desenvolvimento.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-viana-orange" />,
      title: "Escalabilidade Rápida",
      description: "Aumente ou diminua sua equipe conforme a demanda do projeto.",
    },
    {
      icon: <Shield className="h-6 w-6 text-viana-orange" />,
      title: "Qualidade Garantida",
      description: "Processos rigorosos de controle de qualidade e testes.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-viana-orange" />,
      title: "Foco no Core Business",
      description: "Concentre-se no seu negócio principal enquanto cuidamos da tecnologia.",
    },
  ]

  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />

        <main className="pt-28">

          {/* Hero Section */}
          <section
            className="relative pt-0 pb-10 bg-gradient-to-br from-viana-orange to-viana-yellow overflow-hidden h-full max-h-[250px]"
            style={{
              backgroundImage: "url('/pages/outsourcing.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center text-white mt-8">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">Terceirização de TI</h1>
                <p className="text-xl lg:text-2xl mb-8 opacity-90">
                  Acelere seus projetos com equipes especializadas, reduzindo custos e mantendo a mais alta qualidade.
                </p>
                <Button size="lg" className="bg-white text-viana-orange hover:bg-gray-100 font-semibold px-8 py-3">
                  Montar Equipe
                </Button>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">Nossos Serviços</h2>
                <p className="text-xl text-viana-gray max-w-3xl mx-auto">
                  Oferecemos soluções completas de terceirização para atender todas as suas necessidades tecnológicas.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow border-none">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-viana-black mb-3">{service.title}</h3>
                      <p className="text-viana-gray">{service.description}</p>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">Vantagens da Terceirização</h2>
                <p className="text-xl text-viana-gray max-w-3xl mx-auto">
                  Descubra como a terceirização pode transformar sua operação e acelerar seus resultados.
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

          {/* Process Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">Como Funciona</h2>
                <p className="text-xl text-viana-gray max-w-3xl mx-auto">
                  Nosso processo estruturado garante a formação da equipe ideal para seu projeto.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-viana-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-viana-black mb-3">Análise de Necessidades</h3>
                  <p className="text-viana-gray">
                    Entendemos suas necessidades específicas e definimos o perfil ideal da equipe.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-viana-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-viana-black mb-3">Seleção de Talentos</h3>
                  <p className="text-viana-gray">
                    Recrutamos e selecionamos os melhores profissionais para compor sua equipe.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-viana-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-viana-black mb-3">Integração e Gestão</h3>
                  <p className="text-viana-gray">Integramos a equipe ao seu projeto e fornecemos gestão contínua.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-viana-yellow">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-6">Acelere seus Projetos</h2>
              <p className="text-xl text-viana-gray mb-8 max-w-2xl mx-auto">
                Monte sua equipe de desenvolvimento ideal e acelere a entrega dos seus projetos com qualidade garantida.
              </p>
              <Button size="lg" className="bg-viana-orange hover:bg-viana-orange/90 text-white font-semibold px-8 py-3">
                Solicitar Proposta
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </TranslationProvider>
  )
}
