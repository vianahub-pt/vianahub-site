"use client"

import FoxMazeGame from "@/components/fox-game/fox-maze-game"
import { useTranslation } from "@/components/translation-context"

export function EntertainmentSection() {
  const { t } = useTranslation()

  return (
    <section>
          <FoxMazeGame />
    </section>
  )
}
