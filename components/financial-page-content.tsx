"use client"

import { useTranslation } from "@/components/translation-context"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export function FinancialPageContent() {
  const { t } = useTranslation()

  return (
    <>
      <div className="relative h-[400px] bg-gradient-to-r from-green-600 to-blue-600">
        <img
          src="/pages/financial.jpg"
          alt={t("financial.hero.title")}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("financial.hero.title")}</h1>
            <p className="text-xl md:text-2xl">{t("financial.hero.subtitle")}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { label: t("nav.home"), href: "/" },
            { label: t("nav.industries"), href: "/" },
            { label: t("financial.hero.title"), href: "/industry/financial" },
          ]}
        />

        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">{t("financial.innovation.title")}</h2>
            <p className="text-lg text-gray-600 mb-6">{t("financial.innovation.description")}</p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-6">{t("financial.solutions.title")}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">{t("financial.solutions.banking.title")}</h4>
                <p className="text-gray-600">{t("financial.solutions.banking.description")}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">{t("financial.solutions.fintech.title")}</h4>
                <p className="text-gray-600">{t("financial.solutions.fintech.description")}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">{t("financial.solutions.risk.title")}</h4>
                <p className="text-gray-600">{t("financial.solutions.risk.description")}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">{t("financial.solutions.compliance.title")}</h4>
                <p className="text-gray-600">{t("financial.solutions.compliance.description")}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
