"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Globe, Database, Shield, Zap } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

const services = [
  {
    icon: <Code className="h-8 w-8 text-viana-orange" />,
    title: "Desenvolvimento Web",
    description: "Criamos sites e aplicações web modernas, responsivas e otimizadas para performance.",
    href: "/what-we-do/development",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-viana-orange" />,
    title: "Aplicações Mobile",
    description: "Desenvolvemos apps nativos e híbridos para iOS e Android com foco na experiência do usuário.",
    href: "/what-we-do/development",
  },
  {
    icon: <Globe className="h-8 w-8 text-viana-orange" />,
    title: "Landing Pages",
    description: "Páginas de conversão otimizadas para maximizar seus resultados de marketing digital.",
    href: "/what-we-do/landing-pages",
  },
  {
    icon: <Database className="h-8 w-8 text-viana-orange" />,
    title: "Integração de Sistemas",
    description: "Conectamos diferentes sistemas e plataformas para otimizar seus processos de negócio.",
    href: "/what-we-do/system-integration",
  },
  {
    icon: <Shield className="h-8 w-8 text-viana-orange" />,
    title: "Segurança Digital",
    description: "Implementamos soluções de segurança robustas para proteger seus dados e sistemas.",
    href: "/security/cyber-security",
  },
  {
    icon: <Zap className="h-8 w-8 text-viana-orange" />,
    title: "Automação",
    description: "Automatizamos processos repetitivos para aumentar a eficiência da sua empresa.",
    href: "/what-we-do/development",
  },
]

export function ServicesSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-viana-orange">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-kurale">
            Oferecemos soluções completas em tecnologia para transformar sua visão em realidade digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-tl-none rounded-tr-[25%] rounded-bl-[25%] rounded-br-none"
            >
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-3 text-xl font-bold text-gray-900 mb-4">
                  {service.icon}
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-viana-orange mb-6 leading-relaxed font-kurale">{service.description}</p>
                <Button
                  variant="outline"
                  className="group-hover:bg-viana-orange group-hover:text-white group-hover:border-viana-orange transition-all duration-300 bg-transparent"
                  asChild
                >
                  <a href={service.href}>
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
