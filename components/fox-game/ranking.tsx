"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

interface RankingEntry {
  name: string
  time: number
  date: string
}

interface RankingProps {
  onPlayAgain: () => void
}

export const Ranking: React.FC<RankingProps> = ({ onPlayAgain }) => {
  const { t } = useTranslation()
  const [rankings, setRankings] = useState<RankingEntry[]>([])

  useEffect(() => {
    const savedRankings = JSON.parse(localStorage.getItem("foxGameRankings") || "[]")
    setRankings(savedRankings.slice(0, 10)) // Top 10
  }, [])

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const getRankIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-500" />
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />
      case 3:
        return <Award className="w-5 h-5 text-amber-600" />
      default:
        return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold">{position}</span>
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[500px] p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-orange-600 flex items-center justify-center gap-2">
            <Trophy className="w-6 h-6" />
            {t("foxGame.rankingTitle")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {rankings.length === 0 ? (
            <div className="text-center space-y-4 py-8">
              <div className="text-lg font-semibold text-gray-600">{t("foxGame.rankingEmpty")}</div>
              <div className="text-sm text-gray-500">{t("foxGame.rankingEmptySubtitle")}</div>
            </div>
          ) : (
            <div className="space-y-2">
              {rankings.map((entry, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg border ${
                    index === 0
                      ? "bg-yellow-50 border-yellow-200"
                      : index === 1
                        ? "bg-gray-50 border-gray-200"
                        : index === 2
                          ? "bg-amber-50 border-amber-200"
                          : "bg-white border-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {getRankIcon(index + 1)}
                    <div>
                      <div className="font-semibold">{entry.name}</div>
                      <div className="text-xs text-gray-500">{new Date(entry.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="font-mono">
                    {formatTime(entry.time)}
                  </Badge>
                </div>
              ))}
            </div>
          )}

          <div className="border-t pt-4 space-y-4">
            <div className="text-center text-sm text-gray-600">{t("foxGame.rankingFooter")}</div>
            <Button onClick={onPlayAgain} className="w-full bg-orange-500 hover:bg-orange-600">
              {t("foxGame.playAgain")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
