"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/components/translation-context"

interface NameFormProps {
  onNameSubmit: (name: string) => void
}

export function NameForm({ onNameSubmit }: NameFormProps) {
  const { t } = useTranslation()
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onNameSubmit(name.trim())
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-yellow-200 to-orange-200 p-4">
      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-2xl border-none">
        <CardContent className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-6">
              <img src="/fox-desktop.png" alt="Fox" className="w-16 h-16 mx-auto mb-4 object-contain" />
              <h1 className="text-2xl font-bold text-amber-800 mb-2">{t("foxGame.title")}</h1>
              <p className="text-amber-600 text-sm mb-4">{t("foxGame.subtitle")}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-left">
                <label htmlFor="playerName" className="block text-sm font-medium text-amber-700 mb-2">
                  {t("foxGame.nameLabel")}
                </label>
                <Input
                  id="playerName"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("foxGame.namePlaceholder")}

                  maxLength={20}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                disabled={!name.trim()}
              >
                {t("foxGame.startButton")}
              </Button>
            </form>

            <div className="mt-6 text-left">
              <h3 className="text-sm font-semibold text-amber-800 mb-2">{t("foxGame.howToPlay")}</h3>
              <div className="text-xs text-amber-600 space-y-1">
                <div>• {t("foxGame.instructions").split(" • ")[0].replace("• ", "")}</div>
                <div>• {t("foxGame.instructions").split(" • ")[1]}</div>
                <div>• {t("foxGame.instructions").split(" • ")[2]}</div>
                <div>• {t("foxGame.instructions").split(" • ")[3]}</div>
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  )
}
