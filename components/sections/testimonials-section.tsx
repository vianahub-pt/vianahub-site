"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useTranslation } from "@/components/translation-context"

const testimonials = [
  {
    key: "ana",
    rating: 5,
    image: "/testimonials/kayth-cristina.webp",
  },
  {
    key: "roberto",
    rating: 5,
    image: "/testimonials/alan-antonio.webp",
  },
  {
    key: "maria",
    rating: 5,
    image: "/testimonials/claudio-antunes.webp",
  },
  {
    key: "carlos",
    rating: 5,
    image: "/testimonials/wellington-silva.webp",
  },
  {
    key: "lucia",
    rating: 5,
    image: "/ana-costa.jpg",
  },
  {
    key: "joao",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">
            <span className="text-gray-900">{t("testimonials.title.part1")}</span>{" "}
            <span className="text-viana-orange">{t("testimonials.title.part2")}</span>
          </h2>
          <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("testimonials.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.key}
              className={`border-none shadow-lg hover:shadow-xl transition-shadow duration-300 floating-card-${index + 1}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-viana-yellow text-viana-yellow" />
                  ))}
                </div>
                <p className="text-viana-gray mb-6 italic">"{t(`testimonials.${testimonial.key}.content`)}"</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={testimonial.image || "/placeholder.svg"}
                      alt={t(`testimonials.${testimonial.key}.name`)}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {t(`testimonials.${testimonial.key}.name`)
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-viana-black">{t(`testimonials.${testimonial.key}.name`)}</h4>
                    <p className="text-sm text-viana-gray">{t(`testimonials.${testimonial.key}.role`)}</p>
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
