"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/contexts/translation-context"

export interface RankingEntry {
  name: string
  time: number // em segundos
  date: string
}

interface RankingProps {
  ranking: RankingEntry[]
  currentPlayerName?: string
  currentTime?: number
}

export function Ranking({ ranking, currentPlayerName, currentTime }: RankingProps) {
  const { t } = useTranslation()

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  return (
    <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-amber-800 text-center">{t("foxGame.ranking.title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {ranking.length === 0 ? (
            <div className="text-center py-8 text-amber-600">
              <p className="text-lg">{t("foxGame.ranking.empty.title")}</p>
              <p className="text-sm mt-2">{t("foxGame.ranking.empty.subtitle")}</p>
            </div>
          ) : (
            ranking.map((entry, index) => {
              const isCurrentPlayer =
                entry.name === currentPlayerName && currentTime && Math.abs(entry.time - currentTime) < 1

              return (
                <motion.div
                  key={`${entry.name}-${entry.date}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    isCurrentPlayer
                      ? "bg-green-100 border-2 border-green-300 font-semibold"
                      : index === 0
                        ? "bg-yellow-100 border border-yellow-300"
                        : index === 1
                          ? "bg-gray-100 border border-gray-300"
                          : index === 2
                            ? "bg-orange-100 border border-orange-300"
                            : "bg-white border border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold w-8">
                      {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `${index + 1}º`}
                    </span>
                    <div>
                      <div className="font-medium text-amber-800">
                        {entry.name}
                        {isCurrentPlayer && (
                          <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded">
                            {t("foxGame.ranking.you")}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-amber-600">{formatDate(entry.date)}</div>
                    </div>
                  </div>
                  <div className="font-bold text-amber-700 text-lg">{formatTime(entry.time)}</div>
                </motion.div>
              )
            })
          )}
        </div>
        {ranking.length > 0 && (
          <div className="mt-4 pt-3 border-t border-amber-200 text-xs text-amber-600 text-center">
            {t("foxGame.ranking.footer")}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
