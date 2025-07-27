"use client"

import { useTranslation } from "@/contexts/translation-context"

export function EntertainmentSection() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center py-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t("entertainment.title")} <span className="text-viana-orange">Fox</span>
          </h2>
        </div>
      </div>
    </section>
  )
}
