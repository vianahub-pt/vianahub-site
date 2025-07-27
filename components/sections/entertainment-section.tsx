"use client"

import { useTranslation } from "@/contexts/translation-context"
import FoxMazeGame from "@/components/fox-game/fox-maze-game"

export default function EntertainmentSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("entertainment.title")}</h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <FoxMazeGame />
        </div>
      </div>
    </section>
  )
}
