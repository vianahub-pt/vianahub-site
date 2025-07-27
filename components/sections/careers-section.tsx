"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Zap, Heart } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

export function CareersSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gradient-to-r from-viana-blue to-viana-orange text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4">
              <Users className="h-12 w-12 text-viana-yellow" />
              <Zap className="h-12 w-12 text-viana-yellow" />
              <Heart className="h-12 w-12 text-viana-yellow" />
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">{t("careers.title")}</h2>

          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">{t("careers.subtitle")}</p>

          <Button
            size="lg"
            className="bg-viana-yellow text-viana-black hover:bg-yellow-400 font-semibold px-8 py-4 text-lg"
            asChild
          >
            <a href="/careers">
              {t("careers.cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-viana-yellow/20 rounded-full animate-ping"></div>
    </section>
  )
}
