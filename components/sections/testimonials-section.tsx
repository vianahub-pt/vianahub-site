"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/contexts/translation-context"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const { t } = useTranslation()

  const testimonials = [
    {
      name: "Ana Costa",
      role: "CEO, TechStart",
      image: "/ana-costa.jpg",
      content:
        "A VianaHub transformou completamente nossa operação digital. O sistema que desenvolveram aumentou nossa eficiência em 300% e nos permitiu escalar rapidamente.",
      rating: 5,
    },
    {
      name: "Carlos Oliveira",
      role: "Diretor de TI, MegaCorp",
      image: "/carlos-oliveira.jpg",
      content:
        "Profissionais excepcionais! Entregaram um projeto complexo no prazo e superaram todas as expectativas. Recomendo sem hesitação.",
      rating: 5,
    },
    {
      name: "Maria Silva",
      role: "Fundadora, InnovateHub",
      image: "/maria-silva.jpg",
      content:
        "A expertise técnica e o atendimento personalizado da VianaHub fizeram toda a diferença. Nosso ROI aumentou 250% após a implementação.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Depoimentos
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{t("testimonials.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-kurale">{t("testimonials.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-white shadow-lg hover:shadow-xl transition-all duration-300 floating-card-${index + 1}`}
              style={{
                animation: `float${index + 1} 6s ease-in-out infinite`,
                animationDelay: `${index * 0.5}s`,
              }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-viana-orange mb-4" />
                </div>

                <p className="text-gray-700 mb-6 font-kurale leading-relaxed">{testimonial.content}</p>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(0deg); }
          75% { transform: translateY(-15px) rotate(-1deg); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(-1deg); }
          50% { transform: translateY(-8px) rotate(0deg); }
          75% { transform: translateY(-12px) rotate(1deg); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(1deg); }
          50% { transform: translateY(-18px) rotate(0deg); }
          75% { transform: translateY(-6px) rotate(-1deg); }
        }
      `}</style>
    </section>
  )
}
