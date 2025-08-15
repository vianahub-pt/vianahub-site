"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Navbar } from "@/components/navbar"
import { Code, Smartphone, Globe, Database, Zap, Shield, Palette, CheckCircle } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import { useTranslation } from "@/components/translation-context"

function DevelopmentPageContent() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!mounted) {
    return null
  }

  const services = [
    {
      title: t("services.web.title"),
      image: "/pages/website-template.jpg",
      icon: Globe,
    },
    {
      title: t("services.mobile.title"),
      image: "/pages/mobile-template.jpg",
      icon: Smartphone,
    },
    {
      title: t("services.integration.title"),
      image: "/pages/admin-template.jpg",
      icon: Code,
    },
    {
      title: t("services.automation.title"),
      image: "/pages/integration-template.jpg",
      icon: Database,
    },
  ]

  const features = [
    {
      icon: Zap,
      title: t("insights.results.title"),
      description: t("insights.results.description"),
    },
    {
      icon: Shield,
      title: t("services.security.title"),
      description: t("services.security.description"),
    },
    {
      icon: Palette,
      title: t("insights.innovation.title"),
      description: t("insights.innovation.description"),
    },
    {
      icon: CheckCircle,
      title: t("insights.experience.title"),
      description: t("insights.experience.description"),
    },
  ]

  const serviceDetails = [
    {
      icon: Globe,
      title: t("services.web.title"),
      description: t("services.web.description"),
    },
    {
      icon: Smartphone,
      title: t("services.mobile.title"),
      description: t("services.mobile.description"),
    },
    {
      icon: Code,
      title: t("services.integration.title"),
      description: t("services.integration.description"),
    },
    {
      icon: Database,
      title: t("services.automation.title"),
      description: t("services.automation.description"),
    },
  ]

  return (
    <div className="min-h-screen bg-viana-white">
        {/* Hero Section */}
        <section
          className="relative pt-0 pb-0 bg-gradient-to-br from-viana-orange to-viana-yellow overflow-hidden h-[500px]"
          style={{
            backgroundImage: "url(/pages/development.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Code className="text-orange-500" />
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t("nav.development")}
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">{t("services.web.description")}</p>
            </div>
          </div>
        </section>

        {/* Services Carousel Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 4000,
                    stopOnInteraction: true,
                  }),
                ]}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {services.map((service, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="h-full">
                        <CardContent className="p-0">
                          <div className="relative h-64 overflow-hidden rounded-t-lg">
                            <Image
                              src={service.image || "/placeholder.svg"}
                              alt={service.title}
                              fill
                              className="object-cover transition-transform hover:scale-105"
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <service.icon className="h-6 w-6 text-primary" />
                              <h3 className="text-xl font-semibold">{service.title}</h3>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceDetails.map((service, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <service.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Parallax Section */}
        <div
          className="relative h-[500px] overflow-hidden"
          style={{
            backgroundImage: "url('/pages/development-parallax.jpg')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
        </div>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="block text-orange-500 text-3xl md:text-4xl font-bold mb-4">
                {t("services.title.part1") + " " + t("services.title.part2")}
              </h2>
              <p className="text-xl text-gray-900 text-muted-foreground max-w-3xl mx-auto">{t("services.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default function DevelopmentPage() {
  return <DevelopmentPageContent />
}
