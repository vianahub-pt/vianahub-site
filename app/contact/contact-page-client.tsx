"use client"

import type React from "react"

import { useState } from "react"
import { useTranslation } from "@/contexts/translation-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function ContactPageClient() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo seu contacto. Responderemos em breve.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("contact.hero.title")}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">{t("contact.hero.subtitle")}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t("contact.form.title")}</CardTitle>
                <CardDescription>Preencha o formulário abaixo e entraremos em contacto consigo.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {t("contact.form.name")} *
                      </label>
                      <Input id="name" name="name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {t("contact.form.email")} *
                      </label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        {t("contact.form.phone")}
                      </label>
                      <Input id="phone" name="phone" type="tel" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        {t("contact.form.company")}
                      </label>
                      <Input id="company" name="company" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      {t("contact.form.subject")} *
                    </label>
                    <Input id="subject" name="subject" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t("contact.form.message")} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Descreva o seu projeto ou necessidade..."
                    />
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
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-viana-yellow mt-1" />
                    <div>
                      <h3 className="font-semibold">{t("contact.info.address")}</h3>
                      <p className="text-gray-600">
                        Rua da Inovação, 123
                        <br />
                        4000-000 Porto, Portugal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-viana-yellow" />
                    <div>
                      <h3 className="font-semibold">{t("contact.info.phone")}</h3>
                      <p className="text-gray-600">+351 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-viana-yellow" />
                    <div>
                      <h3 className="font-semibold">{t("contact.info.email")}</h3>
                      <p className="text-gray-600">info@vianahub.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-viana-yellow mt-1" />
                    <div>
                      <h3 className="font-semibold">{t("contact.info.hours")}</h3>
                      <p className="text-gray-600">
                        {t("contact.info.hours.weekdays")}
                        <br />
                        {t("contact.info.hours.weekend")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Mapa do Google Maps</p>
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
