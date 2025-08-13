"use client"

import type React from "react"

import { useState } from "react"
import { useTranslation } from "@/contexts/translation-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPageClient() {
  const { t } = useTranslation()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: t("contact.form.success.title"),
      description: t("contact.form.success.description"),
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/paralax-about-contact.jpg"
            alt={t("contact.hero.title")}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("contact.hero.title")}</h1>
          <p className="text-xl md:text-2xl">{t("contact.hero.subtitle")}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t("contact.info.title")}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">{t("contact.info.description")}</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t("contact.info.email.title")}</h3>
                    <p className="text-gray-600 dark:text-gray-300">info@vianahub.com</p>
                    <p className="text-gray-600 dark:text-gray-300">support@vianahub.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t("contact.info.phone.title")}</h3>
                    <p className="text-gray-600 dark:text-gray-300">+351 123 456 789</p>
                    <p className="text-gray-600 dark:text-gray-300">+351 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t("contact.info.address.title")}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Rua das Tecnologias, 123
                      <br />
                      1000-001 Lisboa, Portugal
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-600 text-white rounded-full">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t("contact.info.hours.title")}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t("contact.info.hours.weekdays")}
                      <br />
                      {t("contact.info.hours.weekend")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t("contact.form.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{t("contact.form.firstName")}</Label>
                      <Input id="firstName" name="firstName" required placeholder={t("contact.form.firstName")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{t("contact.form.lastName")}</Label>
                      <Input id="lastName" name="lastName" required placeholder={t("contact.form.lastName")} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.form.email")}</Label>
                    <Input id="email" name="email" type="email" required placeholder={t("contact.form.email")} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                    <Input id="phone" name="phone" type="tel" placeholder={t("contact.form.phone")} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">{t("contact.form.company")}</Label>
                    <Input id="company" name="company" placeholder={t("contact.form.company")} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t("contact.form.subject")}</Label>
                    <Input id="subject" name="subject" required placeholder={t("contact.form.subject")} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.form.message")}</Label>
                    <Textarea id="message" name="message" required rows={5} placeholder={t("contact.form.message")} />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
