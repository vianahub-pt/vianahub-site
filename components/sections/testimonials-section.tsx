"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

const testimonials = [
  {
    name: "Maria Silva",
    role: "CEO, TechStart",
    image: "/maria-silva.jpg",
    content: "A VianaHub transformou completamente nossa presença digital. O resultado superou todas as expectativas!",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Diretor de TI, InnovaCorp",
    image: "/joao-santos.jpg",
    content:
      "Profissionais extremamente competentes e dedicados. Entregaram o projeto no prazo e com qualidade excepcional.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Fundadora, EduTech",
    image: "/ana-costa.jpg",
    content: "A plataforma educacional que desenvolveram revolucionou nossa forma de ensinar. Recomendo fortemente!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t("testimonials.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("testimonials.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</blockquote>

                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
