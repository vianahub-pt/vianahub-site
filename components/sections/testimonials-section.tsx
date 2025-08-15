"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "Kayth Cristina",
    company: "App NOZ!",
    text: "Nós, da App NOZ!, gostaríamos de aproveitar este momento para registrar os nossos profundos agradecimentos pelo incrível trabalho entregue na criação de nossa Landing Page.",
    rating: 4,
    image: "/testimonials/kayth-cristina.webp",
  },
  {
    name: "Alan Antônio",
    company: "CSU Digital",
    text: "A CSU Digital expressa sincero agradecimento pelo trabalho de campanhas digitais; a equipa demonstrou ser eficiente, entregando um serviço de alta qualidade. Se busca ser visto no mercado a VianaHub é o parceiro certo.",
    rating: 5,
    image: "/testimonials/alan-antonio.webp",
  },
  {
    name: "Claudio Antunes",
    company: "Claudio Eletricista",
    text: "Sou Claudio, da Claudio Eletricista, gerimos projetos de energias e construção civil em Portugal. Quero ressaltar o quão fundamental foi a VianaHub na criação do nosso site e implantação do nosso ERP Odoo.",
    rating: 4,
    image: "/testimonials/claudio-antunes.webp",
  },
  {
    name: "Wellington Silva",
    company: "Diagnóstica S.A.",
    text: "Agradecemos por padronizar eficientemente a gestão da nossa infraestrutura com a poderosa ferramenta Terraform. A Labtest Diagnóstica S.A. teve uma experiência positiva com os serviços prestados e recomenda a VianaHub.",
    rating: 5,
    image: "/testimonials/wellington-silva.webp",
  },
]

export function TestimonialsSection() {
  const [centerIndex, setCenterIndex] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % testimonials.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  // Duplicar os testemunhos para criar loop infinito
  const infiniteTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">Testemunhos</h2>
          <p className="text-xl text-gray-600">O que os nossos clientes dizem sobre nós</p>
        </div>

        <div className="max-w-6xl mx-auto overflow-hidden py-8">
          <div className="relative">
            <div
              className="flex animate-infinite-scroll"
              style={{
                width: `${infiniteTestimonials.length * 400}px`,
                animation: "scroll-left 30s linear infinite",
              }}
            >
              {infiniteTestimonials.map((testimonial, index) => {
                const actualIndex = index % testimonials.length
                const isCenterCard = actualIndex === centerIndex

                return (
                  <div
                    key={`${actualIndex}-${Math.floor(index / testimonials.length)}`}
                    className="flex-shrink-0 px-4"
                    style={{ width: "400px" }}
                  >
                    <div
                      className="rounded-lg p-6 shadow-md transition-all duration-700 ease-in-out mx-auto max-w-sm"
                      style={{
                        backgroundColor: "rgba(255, 255, 0, 0.05)",
                      }}
                    >
                      <div className="flex flex-col items-center mb-4">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>

                      <blockquote className="text-gray-700 mb-4 text-center italic text-sm">
                        "{testimonial.text}"
                      </blockquote>

                      <div className="text-center">
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-gray-600 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${testimonials.length * 400}px);
            }
          }
        `}</style>
      </div>
    </section>
  )
}
