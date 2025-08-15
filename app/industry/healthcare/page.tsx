"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TranslationProvider, useTranslation } from "@/components/translation-context"
import { HealthcarePageContent } from "@/components/healthcare-page-content"
import Image from "next/image"

function HealthcareHero() {
  const { t } = useTranslation()

  return (
    <div className="relative h-[400px] bg-gradient-to-r from-red-600 to-pink-600">
      <Image src="/pages/healthcare.jpg" alt={t("healthcare.hero.title")} fill className="object-cover opacity-30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("healthcare.hero.title")}</h1>
          <p className="text-xl md:text-2xl">{t("healthcare.hero.subtitle")}</p>
        </div>
      </div>
    </div>
  )
}

export default function HealthcarePage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <main>
          <HealthcareHero />
          <HealthcarePageContent />
        </main>
        <Footer />
      </div>
    </TranslationProvider>
  )
}
