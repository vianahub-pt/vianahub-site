"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"
import { useTranslation } from "@/components/translation-context"

const testimonials = [
  {
    nameKey: "testimonials.kayth.name",
    companyKey: "testimonials.kayth.company",
    textKey: "testimonials.kayth.text",
    rating: 4,
    image: "/testimonials/kayth-cristina.webp",
  },
  {
    nameKey: "testimonials.alan.name",
    companyKey: "testimonials.alan.company",
    textKey: "testimonials.alan.text",
    rating: 5,
    image: "/testimonials/alan-antonio.webp",
  },
  {
    nameKey: "testimonials.claudio.name",
    companyKey: "testimonials.claudio.company",
    textKey: "testimonials.claudio.text",
    rating: 4,
    image: "/testimonials/claudio-antunes.webp",
  },
  {
    nameKey: "testimonials.wellington.name",
    companyKey: "testimonials.wellington.company",
    textKey: "testimonials.wellington.text",
    rating: 5,
    image: "/testimonials/wellington-silva.webp",
  },
]

export function TestimonialsSection() {
  const { t } = useTranslation()
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gray-900">{t("testimonials.title.part1")}</span>{" "}
            <span className="text-orange-500">{t("testimonials.title.part2")}</span>
          </h2>
          <p className="text-xl text-gray-900">{t("testimonials.subtitle")}</p>
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
                            alt={t(testimonial.nameKey)}
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
                        "{t(testimonial.textKey)}"
                      </blockquote>

                      <div className="text-center">
                        <p className="font-semibold text-gray-900">{t(testimonial.nameKey)}</p>
                        <p className="text-gray-600 text-sm">{t(testimonial.companyKey)}</p>
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
