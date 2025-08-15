"use client"

import { useTranslation } from "@/components/translation-context"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export function HealthcarePageContent() {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Início", href: "/" },
          { label: "Indústrias", href: "/" },
          { label: t("healthcare.hero.title"), href: "/industry/healthcare" },
        ]}
      />

      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{t("healthcare.innovation.title")}</h2>
          <p className="text-lg text-gray-600 mb-6">{t("healthcare.innovation.description")}</p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">{t("healthcare.solutions.title")}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">{t("healthcare.solutions.hospital.title")}</h4>
              <p className="text-gray-600">{t("healthcare.solutions.hospital.description")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">{t("healthcare.solutions.telemedicine.title")}</h4>
              <p className="text-gray-600">{t("healthcare.solutions.telemedicine.description")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">{t("healthcare.solutions.patient.title")}</h4>
              <p className="text-gray-600">{t("healthcare.solutions.patient.description")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">{t("healthcare.solutions.analytics.title")}</h4>
              <p className="text-gray-600">{t("healthcare.solutions.analytics.description")}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
