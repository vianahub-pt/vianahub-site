"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Users, Star, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: <Users className="h-8 w-8 text-viana-orange" />,
    value: "500+",
    label: "Clientes Satisfeitos",
  },
  {
    icon: <Star className="h-8 w-8 text-viana-orange" />,
    value: "1000+",
    label: "Projetos Entregues",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-viana-orange" />,
    value: "15+",
    label: "Anos de Experiência",
  },
  {
    icon: <Play className="h-8 w-8 text-viana-orange" />,
    value: "24/7",
    label: "Suporte Técnico",
  },
]

export function EntertainmentSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-viana-blue/5 to-viana-orange/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-viana-orange border-viana-orange">
            Nossos Números
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Resultados que <span className="text-viana-orange">Impressionam</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de uma década transformando ideias em soluções digitais de sucesso
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-viana-orange transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
