"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

const insights = [
  {
    title: "O Futuro da Inteligência Artificial no Desenvolvimento Web",
    excerpt: "Como a IA está revolucionando a forma como desenvolvemos aplicações web e o que esperar para o futuro.",
    category: "Tecnologia",
    date: "2024-01-15",
    readTime: "5 min",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Tendências de UX/UI para 2024",
    excerpt: "As principais tendências de design que estão moldando a experiência do usuário em aplicações modernas.",
    category: "Design",
    date: "2024-01-10",
    readTime: "7 min",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Segurança em Aplicações Web: Melhores Práticas",
    excerpt: "Guia completo sobre como implementar segurança robusta em suas aplicações web.",
    category: "Segurança",
    date: "2024-01-05",
    readTime: "10 min",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export function InsightsSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t("insights.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("insights.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={insight.image || "/placeholder.svg"}
                  alt={insight.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-viana-orange hover:bg-viana-orange">
                  {insight.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-viana-orange transition-colors line-clamp-2">
                  {insight.title}
                </CardTitle>

                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(insight.date).toLocaleDateString("pt-BR")}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {insight.readTime}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {insight.excerpt}
                </CardDescription>

                <Button
                  variant="ghost"
                  className="p-0 h-auto font-semibold text-viana-orange hover:text-viana-orange/80"
                >
                  {t("insights.readMore")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
