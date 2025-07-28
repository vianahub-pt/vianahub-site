"use client"

import { useTranslation } from "@/contexts/translation-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Code, Smartphone, Building, Globe, Zap, Shield, Palette, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DevelopmentPage() {
  const { t } = useTranslation()

  const carouselItems = [
    {
      image: "/development-website.png",
      title: t("development.services.carousel.website"),
      alt: "Website Development",
    },
    {
      image: "/development-mobile.png",
      title: t("development.services.carousel.mobile"),
      alt: "Mobile Applications",
    },
    {
      image: "/development-corporate.png",
      title: t("development.services.carousel.corporate"),
      alt: "Corporate Systems",
    },
    {
      image: "/development-apis.png",
      title: t("development.services.carousel.apis"),
      alt: "API Architecture",
    },
  ]

  return (
	<div className="min-h-screen bg-viana-white">
		<Navbar />
        <main className="pt-28">
          {/* Hero Section */}
          <section
            className="relative py-20 px-4 text-white overflow-hidden"
            style={{
              backgroundImage: "url('/pages/what-we-do-development.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative max-w-6xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("development.title")}</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{t("development.subtitle")}</p>
            </div>
          </section>

          {/* Services Section with Carousel */}
          <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("development.services.title")}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("development.services.subtitle")}</p>
              </div>

              {/* Carousel */}
              <div className="mb-16">
                <Carousel className="w-full max-w-4xl mx-auto">
                  <CarouselContent>
                    {carouselItems.map((item, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex flex-col items-center justify-center p-6">
                              <div className="relative w-full h-64 md:h-80 mb-4 rounded-lg overflow-hidden">
                                <Image
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.alt}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <h3 className="text-xl font-semibold text-center">{item.title}</h3>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{t("development.web.title")}</h3>
                  <p className="text-gray-600">{t("development.web.description")}</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Smartphone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{t("development.mobile.title")}</h3>
                  <p className="text-gray-600">{t("development.mobile.description")}</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Building className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{t("development.corporate.title")}</h3>
                  <p className="text-gray-600">{t("development.corporate.description")}</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Globe className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{t("development.apis.title")}</h3>
                  <p className="text-gray-600">{t("development.apis.description")}</p>
                </Card>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("development.why.title")}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("development.why.subtitle")}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t("development.performance.title")}</h3>
                  <p className="text-gray-600">{t("development.performance.description")}</p>
                </div>

                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t("development.security.title")}</h3>
                  <p className="text-gray-600">{t("development.security.description")}</p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Palette className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t("development.ux.title")}</h3>
                  <p className="text-gray-600">{t("development.ux.description")}</p>
                </div>

                <div className="text-center">
                  <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t("development.quality.title")}</h3>
                  <p className="text-gray-600">{t("development.quality.description")}</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-blue-600 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("development.cta.title")}</h2>
              <p className="text-xl mb-8">{t("development.cta.subtitle")}</p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact" className="inline-flex items-center">
                  {t("development.cta.button")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
        </main>
		
      <Footer />
    </div>	
  )
}
