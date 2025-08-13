"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Users, Briefcase, Clock } from "lucide-react"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

interface PositionMeta {
  id: string
  salary?: string
}

interface TranslatedPosition extends PositionMeta {
  title: string
  department: string
  location: string
  type: string
  description: string
}

const positionsMeta: PositionMeta[] = [
  { id: "1", salary: "€45.000 - €65.000" },
  { id: "2", salary: "€40.000 - €55.000" },
  { id: "3", salary: "€35.000 - €50.000" },
  { id: "4", salary: "€50.000 - €70.000" },
  { id: "5", salary: "€38.000 - €55.000" },
  { id: "6", salary: "€45.000 - €65.000" },
]

export function CareersSection() {
  const { t } = useTranslation()
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

  const getTranslatedPosition = (positionMeta: PositionMeta): TranslatedPosition => {
    const baseKey = `careers.positions.${positionMeta.id}`

    return {
      ...positionMeta,
      title: t(`${baseKey}.title`),
      department: t(`${baseKey}.department`),
      location: t(`${baseKey}.location`),
      type: t(`${baseKey}.type`),
      description: t(`${baseKey}.description`),
    }
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Caixa Branca */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="p-12">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-viana-orange mr-4" />
                  <h2 className="text-3xl font-bold">{t("careers.title")}</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-kurale">
                  {t("careers.subtitle")}
                </p>
                <div className="flex justify-center">
                  <Link href="/careers">
                    <Button size="lg" className="bg-viana-orange hover:bg-viana-orange/90 text-white">
                      <Briefcase className="mr-2 h-5 w-5" />
                      {t("careers.viewPositions")}
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Caixa Laranja */}
            <Card className="border-0 shadow-xl overflow-hidden bg-gradient-to-br from-viana-orange to-viana-yellow">
              <div className="p-4 flex items-center justify-center min-h-full">
                <div className="w-full h-full flex items-center justify-center">
                  <Carousel
                    className="w-full h-full"
                    plugins={[plugin.current]}
                    opts={{
                      loop: true,
                    }}
                  >
                    <CarouselContent className="h-full">
                      {positionsMeta.map((positionMeta) => {
                        const translatedPosition = getTranslatedPosition(positionMeta)
                        return (
                          <CarouselItem key={positionMeta.id} className="h-full">
                            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg h-full flex flex-col">
                              <CardHeader className="pb-4 flex-shrink-0">
                                <div className="flex justify-between items-start mb-3">
                                  <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                                    {translatedPosition.title}
                                  </CardTitle>
                                  <Badge
                                    variant="secondary"
                                    className={`ml-2 text-sm px-3 py-1 flex-shrink-0 ${
                                      translatedPosition.location === t("careers.positions.1.location")
                                        ? "bg-green-100 text-green-800"
                                        : translatedPosition.location === t("careers.positions.2.location")
                                          ? "bg-blue-100 text-blue-800"
                                          : "bg-purple-100 text-purple-800"
                                    }`}
                                  >
                                    {translatedPosition.location}
                                  </Badge>
                                </div>
                                <CardDescription className="text-sm text-gray-600 leading-relaxed">
                                  {translatedPosition.description}
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="pt-0 flex-grow flex flex-col justify-center">
                                <div className="flex flex-col gap-3 text-sm text-gray-500">
                                  <div className="flex items-center gap-2">
                                    <Briefcase className="h-4 w-4" />
                                    <span>{translatedPosition.department}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    <span>{translatedPosition.type}</span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        )
                      })}
                    </CarouselContent>
                    <CarouselPrevious className="text-white border-white/50 hover:bg-white/20" />
                    <CarouselNext className="text-white border-white/50 hover:bg-white/20" />
                  </Carousel>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
