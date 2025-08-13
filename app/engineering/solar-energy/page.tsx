"use client"

import { useTranslation } from "@/contexts/translation-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sun, Battery, Zap, BarChart3, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    icon: Sun,
    title: "Painéis Fotovoltaicos",
    description: "Instalação de sistemas fotovoltaicos residenciais, comerciais e industriais.",
  },
  {
    icon: Battery,
    title: "Sistemas de Armazenamento",
    description: "Baterias e sistemas de armazenamento de energia para máxima eficiência.",
  },
  {
    icon: Zap,
    title: "Microgeração",
    description: "Soluções de microgeração para autoconsumo e venda à rede elétrica.",
  },
  {
    icon: BarChart3,
    title: "Monitoramento",
    description: "Sistemas de monitoramento em tempo real para otimização da produção.",
  },
]

const projects = [
  {
    title: "Parque Solar Industrial - Aveiro",
    description: "Instalação de 500kW em painéis solares para complexo industrial.",
    image: "/pages/solar-energy.jpg",
    status: "Concluído",
    year: "2023",
    capacity: "500kW",
  },
  {
    title: "Comunidade Solar Residencial",
    description: "Projeto de energia solar para 150 habitações em condomínio.",
    image: "/pages/solar-energy.jpg",
    status: "Em Andamento",
    year: "2024",
    capacity: "300kW",
  },
]

export default function SolarEnergyPage() {
  const { t, getMetadata } = useTranslation()
  const metadata = getMetadata("solarEnergy")

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/pages/solar-energy.jpg"
            alt={t("engineering.solarEnergy.hero.title")}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">
            {t("nav.engineering")}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("engineering.solarEnergy.hero.title")}</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">{t("engineering.solarEnergy.hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Simulação Gratuita
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Calcular Poupança
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600">Soluções completas em energia solar</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-yellow-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vantagens da Energia Solar</h2>
            <p className="text-xl text-gray-600">Invista no futuro sustentável</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
                <h3 className="text-xl font-bold mb-3">Redução na Conta de Luz</h3>
                <p className="text-gray-600">Economize até 80% na sua fatura de eletricidade com energia solar.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">25</div>
                <h3 className="text-xl font-bold mb-3">Anos de Garantia</h3>
                <p className="text-gray-600">Painéis solares com garantia de 25 anos de produção de energia.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-purple-600 mb-2">5-7</div>
                <h3 className="text-xl font-bold mb-3">Anos de Retorno</h3>
                <p className="text-gray-600">Recupere o investimento em 5 a 7 anos com a poupança gerada.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos em Destaque</h2>
            <p className="text-xl text-gray-600">Conheça alguns dos nossos trabalhos mais importantes</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                    <Badge variant={project.status === "Concluído" ? "default" : "secondary"}>{project.status}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className="bg-white/90">
                      {project.capacity}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button variant="outline" size="sm">
                    Ver Detalhes
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tecnologia Solar de Última Geração</h2>
              <p className="text-lg text-gray-600 mb-8">
                Utilizamos os painéis solares mais eficientes do mercado e sistemas de monitoramento avançados para
                garantir máximo desempenho e durabilidade.
              </p>
              <div className="space-y-4">
                {[
                  "Painéis monocristalinos de alta eficiência",
                  "Inversores com garantia estendida",
                  "Monitoramento via aplicação móvel",
                  "Manutenção preventiva incluída",
                  "Certificação e licenciamento completo",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96">
              <Image src="/pages/solar-energy.jpg" alt="Tecnologia solar" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Economizar com Energia Solar?</h2>
          <p className="text-xl opacity-90 mb-8">
            Faça uma simulação gratuita e descubra quanto pode poupar com um sistema de energia solar personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Simulação Gratuita
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              Financiamento Disponível
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
