"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { useTranslation } from "@/contexts/translation-context"
import { Code, Smartphone, Globe, Database, Zap, Shield, Palette, CheckCircle } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"

export default function DevelopmentPage() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const services = [
    {
      title: t("development.services.carousel.website"),
      image: "/pages/website-template.jpg",
      icon: Globe,
    },
    {
      title: t("development.services.carousel.mobile"),
      image: "/pages/mobile-template.jpg",
      icon: Smartphone,
    },
    {
      title: t("development.services.carousel.corporate"),
      image: "/pages/admin-template.jpg",
      icon: Code,
    },
    {
      title: t("development.services.carousel.apis"),
      image: "/pages/integration-template.jpg",
      icon: Database,
    },
  ]

  const features = [
    {
      icon: Zap,
      title: t("development.performance.title"),
      description: t("development.performance.description"),
    },
    {
      icon: Shield,
      title: t("development.security.title"),
      description: t("development.security.description"),
    },
    {
      icon: Palette,
      title: t("development.ux.title"),
      description: t("development.ux.description"),
    },
    {
      icon: CheckCircle,
      title: t("development.quality.title"),
      description: t("development.quality.description"),
    },
  ]

  const serviceDetails = [
    {
      icon: Globe,
      title: t("development.web.title"),
      description: t("development.web.description"),
    },
    {
      icon: Smartphone,
      title: t("development.mobile.title"),
      description: t("development.mobile.description"),
    },
    {
      icon: Code,
      title: t("development.corporate.title"),
      description: t("development.corporate.description"),
    },
    {
      icon: Database,
      title: t("development.apis.title"),
      description: t("development.apis.description"),
    },
  ]

return (
    
    <div className="min-h-screen bg-viana-white">
    <Navbar />
    <main className="pt-28">
      {/* Hero Section */}
      <section
        className="relative pt-0 pb-10 bg-gradient-to-br from-viana-orange to-viana-yellow overflow-hidden h-full max-h-[300px]"
        style={{
          backgroundImage: "url(/pages/agile.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="container mx-auto px-4 relative z-10 h-full min-h-[50vh] flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">{t("development.hero.title")}</h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">{t("development.hero.subtitle")}</p>
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
                    <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("development.why.title")}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("development.why.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("development.cta.title")}</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">{t("development.cta.subtitle")}</p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">{t("development.cta.button")}</Link>
            </Button>
          </div>
        </section>	  

	</main>
	
      <Footer />
    </div>
  )
}
