"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/components/translation-context"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const savedTheme = localStorage.getItem("vianahub-theme")
    if (savedTheme === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)

    const newTheme = newIsDark ? "dark" : "default"
    localStorage.setItem("vianahub-theme", newTheme)

    if (newIsDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-10 h-10 p-0 rounded-full bg-transparent text-viana-white hover:bg-viana-yellow/20 hover:text-viana-white dark:hover:bg-gray-500/20 transition-colors"
      title={isDark ? t("theme.switchToLight") : t("theme.switchToDark")}
    >
      <span className="text-lg font-bold drop-shadow-lg">{isDark ? "🌙" : "☀️"}</span>
    </Button>
  )
}
