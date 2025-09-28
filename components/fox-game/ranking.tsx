"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/components/translation-context";

export interface RankingEntry {
  name: string;
  time: number;
  date: string;
}

interface RankingProps {
  ranking: RankingEntry[];
  currentPlayerName?: string;
  currentPlayerTime?: number;
}

export function Ranking({
  ranking,
  currentPlayerName,
  currentPlayerTime,
}: RankingProps) {
  const { t } = useTranslation();

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4 flex-1 flex flex-col overflow-hidden">
      <h3 className="text-lg font-semibold text-amber-800 mb-3">
        {t("foxGame.ranking.title")}
      </h3>
      <div className="space-y-2 overflow-y-auto flex-1 min-h-0 max-h-48 lg:max-h-80">
        {ranking.length === 0 ? (
          <div className="text-center py-4 text-amber-600">
            <p className="text-sm">{t("foxGame.ranking.empty.title")}</p>
            <p className="text-xs">{t("foxGame.ranking.empty.subtitle")}</p>
          </div>
        ) : (
          ranking.map((entry, index) => {
            const isCurrentPlayer =
              entry.name === currentPlayerName &&
              currentPlayerTime &&
              Math.abs(entry.time - currentPlayerTime) < 1;

            return (
              <motion.div
                key={`${entry.name}-${entry.date}-${index}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center justify-between p-2 rounded text-sm ${
                  isCurrentPlayer
                    ? "bg-green-100 border border-green-300 font-semibold"
                    : index === 0
                    ? "bg-yellow-100"
                    : index === 1
                    ? "bg-gray-100"
                    : index === 2
                    ? "bg-orange-100"
                    : "bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold w-6">{index + 1}º</span>
                  <span className="text-amber-800 flex items-center gap-1">
                    <img
                      src="/fox-right.png"
                      alt="Player"
                      className="w-3 h-3 object-contain"
                    />
                    {entry.name}
                    {isCurrentPlayer && (
                      <span className="ml-1 text-xs bg-green-600 text-white px-1 rounded">
                        {t("foxGame.ranking.you")}
                      </span>
                    )}
                  </span>
                </div>
                <span className="font-bold text-amber-700">
                  {formatTime(entry.time)}
                </span>
              </motion.div>
            );
          })
        )}
      </div>
      {ranking.length > 0 && (
        <div className="mt-3 pt-2 border-t border-amber-200 text-xs text-amber-600 text-center flex-shrink-0">
          {t("foxGame.ranking.footer")}
        </div>
      )}
    </div>
  );
}
