"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useTranslation } from "@/contexts/translation-context"
import { Users, ArrowRight, Briefcase, Clock } from "lucide-react"
import Link from "next/link"
import { careersTranslations } from "@/app/careers/translation"

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
  const { t, language } = useTranslation()

  // Local translation function for careers
  const tCareers = (key: string) => {
    return careersTranslations[language]?.[key] || key
  }

  const getTranslatedPosition = (positionMeta: PositionMeta): TranslatedPosition => {
    const baseKey = `careers.positions.${positionMeta.id}`

    return {
      ...positionMeta,
      title: tCareers(`${baseKey}.title`),
      department: tCareers(`${baseKey}.department`),
      location: tCareers(`${baseKey}.location`),
      type: tCareers(`${baseKey}.type`),
      description: tCareers(`${baseKey}.description`),
    }
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-viana-orange mr-4" />
                  <h2 className="text-3xl font-bold">{t("careers.title")}</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-kurale">
                  {t("careers.subtitle")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/careers">
                    <Button size="lg" className="bg-viana-orange hover:bg-viana-orange/90 text-white">
                      <Briefcase className="mr-2 h-5 w-5" />
                      {t("careers.viewPositions")}
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    {t("careers.cta")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-viana-orange to-viana-yellow p-6 flex items-center justify-center">
                <div className="w-full max-w-sm">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {positionsMeta.map((positionMeta) => {
                        const translatedPosition = getTranslatedPosition(positionMeta)
                        return (
                          <CarouselItem key={positionMeta.id}>
                            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                              <CardHeader className="pb-3">
                                <div className="flex justify-between items-start mb-2">
                                  <CardTitle className="text-sm font-bold text-gray-900 leading-tight line-clamp-2">
                                    {translatedPosition.title}
                                  </CardTitle>
                                  <Badge
                                    variant="secondary"
                                    className={`ml-1 text-xs px-2 py-1 flex-shrink-0 ${
                                      translatedPosition.location === tCareers("careers.positions.1.location")
                                        ? "bg-green-100 text-green-800"
                                        : translatedPosition.location === tCareers("careers.positions.2.location")
                                          ? "bg-blue-100 text-blue-800"
                                          : "bg-purple-100 text-purple-800"
                                    }`}
                                  >
                                    {translatedPosition.location}
                                  </Badge>
                                </div>
                                <CardDescription className="text-xs text-gray-600 line-clamp-2">
                                  {translatedPosition.description}
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="pt-0">
                                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                  <div className="flex items-center gap-1">
                                    <Briefcase className="h-3 w-3" />
                                    <span className="truncate text-xs">{translatedPosition.department}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    <span className="truncate text-xs">{translatedPosition.type}</span>
                                  </div>
                                </div>
                                <Link href="/careers">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full hover:bg-viana-orange hover:text-white transition-colors text-xs bg-transparent"
                                  >
                                    {tCareers("careers.positions.viewDetails")}
                                  </Button>
                                </Link>
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
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
