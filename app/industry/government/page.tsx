"use client"
import Image from "next/image"
import { TranslationProvider, useTranslation } from "@/components/translation-context"

function GovernmentPageContent() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-viana-white">
      <main>
        <div className="relative h-[400px] bg-gradient-to-r from-blue-600 to-blue-800">
          <Image src="/pages/government.jpg" alt="Governo" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("government.hero.title")}</h1>
              <p className="text-xl md:text-2xl">{t("government.hero.subtitle")}</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{t("government.transformation.title")}</h2>
              <p className="text-lg text-gray-600 mb-6">{t("government.transformation.description")}</p>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-6">{t("government.solutions.title")}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-semibold mb-4">{t("government.solutions.portals.title")}</h4>
                  <p className="text-gray-600">{t("government.solutions.portals.description")}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-semibold mb-4">{t("government.solutions.management.title")}</h4>
                  <p className="text-gray-600">{t("government.solutions.management.description")}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-semibold mb-4">{t("government.solutions.transparency.title")}</h4>
                  <p className="text-gray-600">{t("government.solutions.transparency.description")}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-semibold mb-4">{t("government.solutions.security.title")}</h4>
                  <p className="text-gray-600">{t("government.solutions.security.description")}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function GovernmentPage() {
  return (
    <TranslationProvider>
      <GovernmentPageContent />
    </TranslationProvider>
  )
}
