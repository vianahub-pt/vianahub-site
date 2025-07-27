"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useTranslation } from "@/contexts/translation-context"

interface NameFormProps {
  onStart: (name: string) => void
}

export const NameForm: React.FC<NameFormProps> = ({ onStart }) => {
  const { t } = useTranslation()
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onStart(name.trim())
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[500px] p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-orange-600">{t("foxGame.nameFormTitle")}</CardTitle>
          <p className="text-gray-600 mt-2">{t("foxGame.nameFormSubtitle")}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="playerName">{t("foxGame.nameFormLabel")}</Label>
              <Input
                id="playerName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("foxGame.nameFormPlaceholder")}
                className="text-center"
                maxLength={20}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={!name.trim()}>
              {t("foxGame.nameFormButton")}
            </Button>
          </form>

          <div className="border-t pt-4 space-y-3">
            <div className="text-sm font-semibold text-gray-700">{t("foxGame.howToPlay")}</div>
            <div className="text-xs text-gray-600 space-y-1 whitespace-pre-line">
              {t("foxGame.howToPlayInstructions")}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
