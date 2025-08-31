"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Zap, Award, CheckCircle, ArrowRight, Target, Repeat, Eye } from "lucide-react"
import { useTranslation } from "@/components/translation-context"

function AgilePageContent() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      window.scrollTo(0, 0)
    }
  }, [mounted])

  if (!mounted) {
    return null
  }

  const benefits = [
    {
      icon: Clock,
      title: t("agile.benefits.delivery.title"),
      description: t("agile.benefits.delivery.description"),
    },
    {
      icon: Users,
      title: t("agile.benefits.collaboration.title"),
      description: t("agile.benefits.collaboration.description"),
    },
    {
      icon: Zap,
      title: t("agile.benefits.flexibility.title"),
      description: t("agile.benefits.flexibility.description"),
    },
    {
      icon: Award,
      title: t("agile.benefits.quality.title"),
      description: t("agile.benefits.quality.description"),
    },
  ]

  const process = [
    {
      icon: Target,
      title: t("agile.process.planning.title"),
      description: t("agile.process.planning.description"),
    },
    {
      icon: Repeat,
      title: t("agile.process.sprints.title"),
      description: t("agile.process.sprints.description"),
    },
    {
      icon: Eye,
      title: t("agile.process.review.title"),
      description: t("agile.process.review.description"),
    },
    {
      icon: CheckCircle,
      title: t("agile.process.delivery.title"),
      description: t("agile.process.delivery.description"),
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/pages/agile.jpg" alt={t("agile.hero.title")} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("agile.hero.title")}</h1>
          <p className="text-xl md:text-2xl opacity-90">{t("agile.hero.subtitle")}</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="!text-orange-500 text-3xl md:text-4xl font-bold mb-4">{t("agile.benefits.title")}</h2>
            <p className="text-xl">{t("agile.benefits.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="!bg-black/40 hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-white/20">
                    <benefit.icon className="w-8 h-8 !text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-orange-500">{benefit.title}</h3>
                  <p className="!text-viana-white">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="!text-orange-500 text-3xl md:text-4xl font-bold mb-4">{t("agile.process.title")}</h2>
            <p className="text-xl">{t("agile.process.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="bg-viana-white/90 hover:scale-105 transition-all duration-300 relative">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-viana-orange/10">
                    <step.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-orange-500">{step.title}</h3>
                  <p className="!text-gray-900">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default function AgilePage() {
  return <AgilePageContent />
}
