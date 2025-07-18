"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/contexts/translation-context"
import { Zap, MessageSquare, Code, Layers, FileText, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const { t } = useTranslation()

  const services = [
    {
      icon: <Zap className="h-8 w-8 text-viana-orange" />,
      title: t("services.agile.title"),
      description: t("services.agile.description"),
      href: "/what-we-do/agile",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-viana-orange" />,
      title: t("services.chatbot.title"),
      description: t("services.chatbot.description"),
      href: "/what-we-do/chatbot",
    },
    {
      icon: <Code className="h-8 w-8 text-viana-orange" />,
      title: t("services.development.title"),
      description: t("services.development.description"),
      href: "/what-we-do/development",
    },
    {
      icon: <Layers className="h-8 w-8 text-viana-orange" />,
      title: t("services.integration.title"),
      description: t("services.integration.description"),
      href: "/what-we-do/system-integration",
    },
    {
      icon: <FileText className="h-8 w-8 text-viana-orange" />,
      title: t("services.landing.title"),
      description: t("services.landing.description"),
      href: "/what-we-do/landing-pages",
    },
    {
      icon: <Users className="h-8 w-8 text-viana-orange" />,
      title: t("services.outsourcing.title"),
      description: t("services.outsourcing.description"),
      href: "/what-we-do/outsourcing",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            {t("services.title")}
          </Badge>
          <h2 className="text-4xl font-bold mb-4">{t("services.title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-kurale">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-yellow-50 dark:bg-yellow-900/20 rounded-tl-none rounded-tr-[3rem] rounded-bl-[3rem] rounded-br-none"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-center group-hover:text-viana-orange transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-6 font-kurale text-viana-orange">{service.description}</CardDescription>
                <Link href={service.href}>
                  <Button
                    variant="outline"
                    className="group-hover:bg-viana-orange group-hover:text-white transition-colors bg-transparent"
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-viana-orange hover:bg-viana-orange/90 text-white">
            {t("services.cta")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
