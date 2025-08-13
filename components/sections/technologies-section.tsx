"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Smartphone, Globe, Database, Cloud, Shield, Zap, Palette } from "lucide-react"

export function TechnologiesSection() {
  const { t } = useTranslation()

  const technologies = [
    {
      icon: <Code2 className="h-8 w-8 text-viana-orange" />,
      title: "Desenvolvimento Full-Stack",
      description: "React, Next.js, Node.js, TypeScript",
      color: "bg-blue-50",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-viana-orange" />,
      title: "Aplicativos Mobile",
      description: "React Native, Flutter, Swift, Kotlin",
      color: "bg-green-50",
    },
    {
      icon: <Database className="h-8 w-8 text-viana-orange" />,
      title: "Banco de Dados",
      description: "PostgreSQL, MongoDB, Redis, MySQL",
      color: "bg-purple-50",
    },
    {
      icon: <Cloud className="h-8 w-8 text-viana-orange" />,
      title: "Cloud Computing",
      description: "AWS, Azure, Google Cloud, Docker",
      color: "bg-orange-50",
    },
    {
      icon: <Shield className="h-8 w-8 text-viana-orange" />,
      title: "Segurança",
      description: "OAuth, JWT, Criptografia, HTTPS",
      color: "bg-red-50",
    },
    {
      icon: <Zap className="h-8 w-8 text-viana-orange" />,
      title: "Performance",
      description: "Otimização, CDN, Caching, SEO",
      color: "bg-yellow-50",
    },
    {
      icon: <Palette className="h-8 w-8 text-viana-orange" />,
      title: "Design",
      description: "UI/UX, Figma, Adobe, Responsive",
      color: "bg-pink-50",
    },
    {
      icon: <Globe className="h-8 w-8 text-viana-orange" />,
      title: "Integração",
      description: "APIs, Webhooks, Microserviços",
      color: "bg-indigo-50",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Nossas Tecnologias
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Stack Tecnológico</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Utilizamos as mais modernas tecnologias do mercado para criar soluções robustas e escaláveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className={`${tech.color} border-0 hover:shadow-lg transition-shadow`}>
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{tech.icon}</div>
                <h3 className="text-lg font-bold mb-2">{tech.title}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
