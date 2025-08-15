"use client"

import type React from "react"
import { useTranslation } from "@/components/translation-context"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const { t, language } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const getLocalizedImage = () => {
    const imageMap = {
      pt: "/paralax-about-contact.jpg",
      en: "/paralax-about-contact.jpg",
      es: "/paralax-about-contact.jpg",
      fr: "/paralax-about-contact.jpg",
      de: "/paralax-about-contact.jpg",
    }
    return imageMap[language] || imageMap.pt
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    // Here you would typically send the form data to an external API
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={getLocalizedImage() || "/placeholder.svg"}
            alt={t("contact.hero.title")}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("contact.hero.title")}</h1>
          <p className="text-xl md:text-2xl opacity-90">{t("contact.hero.subtitle")}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t("contact.form.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">{t("contact.form.name")}</Label>
                      <Input id="name" required />
                    </div>
                    <div>
                      <Label htmlFor="email">{t("contact.form.email")}</Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                      <Input id="phone" type="tel" />
                    </div>
                    <div>
                      <Label htmlFor="company">{t("contact.form.company")}</Label>
                      <Input id="company" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">{t("contact.form.subject")}</Label>
                    <Input id="subject" required />
                  </div>
                  <div>
                    <Label htmlFor="message">{t("contact.form.message")}</Label>
                    <Textarea id="message" rows={6} required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t("contact.info.title")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t("contact.info.address")}</h3>
                      <p className="text-gray-600">
                        Rua da Inovação, 123
                        <br />
                        4000-000 Porto, Portugal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t("contact.info.phone")}</h3>
                      <p className="text-gray-600">+351 220 000 000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t("contact.info.email")}</h3>
                      <p className="text-gray-600">info@vianahub.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t("contact.info.hours")}</h3>
                      <p className="text-gray-600">
                        {t("contact.info.hours.weekdays")}
                        <br />
                        {t("contact.info.hours.weekend")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Mapa interativo em breve</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
