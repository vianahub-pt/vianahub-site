"use client"

import { useTranslation } from "@/components/translation-context"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import Image from "next/image"

export function RetailPageContent() {
  const { t } = useTranslation()

  return (
    <>
      <div className="relative h-[400px] bg-gradient-to-r from-purple-600 to-pink-600">
        <Image src="/pages/retail.jpg" alt={t("retail.hero.title")} fill className="object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("retail.hero.title")}</h1>
            <p className="text-xl md:text-2xl">{t("retail.hero.subtitle")}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { label: t("nav.home") || "Início", href: "/" },
            { label: t("nav.industries") || "Indústrias", href: "/" },
            { label: t("retail.hero.title"), href: "/industry/retail" },
          ]}
        />

        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">{t("retail.innovation.title")}</h2>
            <p className="text-lg text-gray-600 mb-6">{t("retail.innovation.description")}</p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-6">{t("retail.solutions.title")}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">{t("retail.solutions.ecommerce.title")}</h4>
                <p className="text-gray-600">{t("retail.solutions.ecommerce.description")}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">{t("retail.solutions.inventory.title")}</h4>
                <p className="text-gray-600">{t("retail.solutions.inventory.description")}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">{t("retail.solutions.crm.title")}</h4>
                <p className="text-gray-600">{t("retail.solutions.crm.description")}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">{t("retail.solutions.analytics.title")}</h4>
                <p className="text-gray-600">{t("retail.solutions.analytics.description")}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
