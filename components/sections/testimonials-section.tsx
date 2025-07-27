"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

const testimonials = [
  {
    name: "Ana Costa",
    role: "CEO, TechStart",
    content:
      "A VianaHub transformou completamente nossa operação. O sistema que desenvolveram aumentou nossa produtividade em 300%",
    rating: 5,
    image: "/ana-costa.jpg",
  },
  {
    name: "Roberto Lima",
    role: "Diretor de TI, InnovaCorp",
    content:
      "Profissionais excepcionais! Entregaram o projeto no prazo e superaram todas as expectativas. Recomendo sem hesitar.",
    rating: 5,
    image: "/roberto-lima.jpg",
  },
  {
    name: "Maria Silva",
    role: "Fundadora, EcoSolutions",
    content: "O suporte técnico é incomparável. Sempre disponíveis e com soluções eficientes para qualquer desafio.",
    rating: 5,
    image: "/maria-silva.jpg",
  },
  {
    name: "Carlos Oliveira",
    role: "CTO, DataFlow",
    content:
      "A expertise técnica da equipe é impressionante. Conseguiram resolver problemas complexos de forma elegante.",
    rating: 5,
    image: "/carlos-oliveira.jpg",
  },
  {
    name: "Lúcia Ferreira",
    role: "Gerente de Projetos, SmartSys",
    content: "Parceria de longo prazo que só cresce. A VianaHub é sinônimo de qualidade e confiabilidade.",
    rating: 5,
    image: "/lucia-ferreira.jpg",
  },
  {
    name: "João Santos",
    role: "Diretor Comercial, NextGen",
    content: "ROI excepcional! O investimento se pagou em menos de 6 meses. Equipe altamente recomendada.",
    rating: 5,
    image: "/joao-santos.jpg",
  },
]

export function TestimonialsSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gray-50">
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(0.5deg); }
          50% { transform: translateY(-4px) rotate(0deg); }
          75% { transform: translateY(-12px) rotate(-0.5deg); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(-5px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(-0.5deg); }
          50% { transform: translateY(0px) rotate(0deg); }
          75% { transform: translateY(-8px) rotate(0.5deg); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translateY(-3px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(0.5deg); }
          50% { transform: translateY(-8px) rotate(0deg); }
          75% { transform: translateY(2px) rotate(-0.5deg); }
        }
        
        .floating-card-1 {
          animation: float1 6s ease-in-out infinite;
        }
        
        .floating-card-2 {
          animation: float2 7s ease-in-out infinite;
        }
        
        .floating-card-3 {
          animation: float3 5.5s ease-in-out infinite;
        }
        
        .floating-card-4 {
          animation: float1 6.5s ease-in-out infinite;
          animation-delay: -1s;
        }
        
        .floating-card-5 {
          animation: float2 6s ease-in-out infinite;
          animation-delay: -2s;
        }
        
        .floating-card-6 {
          animation: float3 7s ease-in-out infinite;
          animation-delay: -1.5s;
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">{t("testimonials.title")}</h2>
          <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("testimonials.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`border-none shadow-lg hover:shadow-xl transition-shadow duration-300 floating-card-${index + 1}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-viana-yellow text-viana-yellow" />
                  ))}
                </div>
                <p className="text-viana-gray mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-viana-black">{testimonial.name}</h4>
                    <p className="text-sm text-viana-gray">{testimonial.role}</p>
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
