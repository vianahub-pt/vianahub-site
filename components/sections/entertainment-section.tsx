"use client"

import { useTranslation } from "@/contexts/translation-context"
import FoxMazeGame from "@/components/fox-game/fox-maze-game"

export function EntertainmentSection() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-white dark:bg-gray-900">
          <FoxMazeGame />
    </section>
  )
}
