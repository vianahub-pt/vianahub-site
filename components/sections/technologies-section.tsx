"use client"

import { Card, CardContent } from "@/components/ui/card"

const technologies = [
  { name: "React", logo: "/placeholder.svg?height=60&width=60" },
  { name: "Node.js", logo: "/placeholder.svg?height=60&width=60" },
  { name: "Python", logo: "/placeholder.svg?height=60&width=60" },
  { name: "AWS", logo: "/placeholder.svg?height=60&width=60" },
  { name: "Docker", logo: "/placeholder.svg?height=60&width=60" },
  { name: "MongoDB", logo: "/placeholder.svg?height=60&width=60" },
  { name: "PostgreSQL", logo: "/placeholder.svg?height=60&width=60" },
  { name: "TypeScript", logo: "/placeholder.svg?height=60&width=60" },
  { name: "Next.js", logo: "/placeholder.svg?height=60&width=60" },
  { name: "GraphQL", logo: "/placeholder.svg?height=60&width=60" },
  { name: "Kubernetes", logo: "/placeholder.svg?height=60&width=60" },
  { name: "Redis", logo: "/placeholder.svg?height=60&width=60" },
]

export function TechnologiesSection() {
  return (
    <section className="py-20 bg-viana-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">Tecnologias que Dominamos</h2>
          <p className="text-xl text-viana-gray max-w-3xl mx-auto">
            Utilizamos as mais modernas tecnologias para criar soluções robustas e escaláveis.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-none bg-gray-50 hover:bg-viana-orange"
            >
              <CardContent className="p-6 text-center">
                <img
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  className="w-12 h-12 mx-auto mb-3 group-hover:filter group-hover:brightness-0 group-hover:invert transition-all"
                />
                <div className="text-sm font-medium text-viana-black group-hover:text-viana-white transition-colors">
                  {tech.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-viana-yellow rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-viana-black mb-4">Sempre Atualizados</h3>
            <p className="text-viana-gray mb-6">
              Nossa equipe está constantemente aprendendo e implementando as mais recentes tecnologias do mercado para
              garantir que seus projetos estejam sempre na vanguarda da inovação.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-viana-orange">100+</div>
                <div className="text-viana-black">Tecnologias</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-viana-orange">24/7</div>
                <div className="text-viana-black">Aprendizado</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-viana-orange">5★</div>
                <div className="text-viana-black">Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
