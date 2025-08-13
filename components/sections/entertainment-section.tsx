"use client"

import FoxMazeGame from "@/components/fox-game/fox-maze-game"

export function EntertainmentSection() {
  const { t } = useTranslation()

  return (
    <section>
          <FoxMazeGame />
    </section>
  )
}
