"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RouteIcon as Road, MapPin, Ruler, Truck, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    icon: MapPin,
    title: "Planeamento Rodoviário",
    description: "Estudos de viabilidade e planeamento estratégico para projetos rodoviários.",
  },
  {
    icon: Ruler,
    title: "Projeto e Desenho",
    description: "Desenvolvimento de projetos técnicos detalhados e especificações de construção.",
  },
  {
    icon: Road,
    title: "Construção e Supervisão",
    description: "Gestão e supervisão de obras rodoviárias do início ao fim.",
  },
  {
    icon: Truck,
    title: "Manutenção Rodoviária",
    description: "Planos de manutenção preventiva e corretiva para infraestruturas existentes.",
  },
]

const projects = [
  {
    title: "Autoestrada A25 - Troço Aveiro",
    description: "Construção de 25km de autoestrada com 3 viadutos e 2 túneis.",
    image: "/pages/road.jpg",
    status: "Concluído",
    year: "2023",
  },
  {
    title: "Via Rápida Urbana do Porto",
    description: "Modernização de 15km de via urbana com ciclovias integradas.",
    image: "/pages/road.jpg",
    status: "Em Andamento",
    year: "2024",
  },
]

export default function RoadPage() {
  const { t, getMetadata } = useTranslation()
  const metadata = getMetadata("road")

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/pages/road.jpg" alt={t("engineering.road.hero.title")} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">
            {t("nav.engineering")}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("engineering.road.hero.title")}</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">{t("engineering.road.hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Ver Projetos
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600">Soluções completas para infraestrutura rodoviária</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-50">
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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Engenharia Rodoviária Sustentável e Inovadora</h2>
              <p className="text-lg text-gray-600 mb-8">
                Desenvolvemos projetos rodoviários que combinam eficiência, segurança e sustentabilidade ambiental,
                utilizando as melhores práticas da engenharia moderna.
              </p>
              <div className="space-y-4">
                {[
                  "Projetos com BIM (Building Information Modeling)",
                  "Análise de impacto ambiental",
                  "Materiais sustentáveis e reciclados",
                  "Sistemas de drenagem inteligente",
                  "Integração com transporte público",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96">
              <Image src="/pages/road.jpg" alt="Engenharia rodoviária" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Precisa de um Projeto Rodoviário?</h2>
          <p className="text-xl opacity-90 mb-8">
            Nossa equipe de especialistas está pronta para desenvolver soluções rodoviárias eficientes e sustentáveis
            para o seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Consulta Gratuita
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              Portfolio Completo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
