"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  // Sempre iniciar com tema default
  useEffect(() => {
    setIsDark(false)
    document.documentElement.classList.remove("dark")
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)

    // Salvar preferência
    const newTheme = newIsDark ? "dark" : "default"
    localStorage.setItem("vianahub-theme", newTheme)

    // Aplicar tema
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
      title={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
    >
      {isDark ? <Moon className="h-5 w-5 drop-shadow-lg" /> : <Sun className="h-5 w-5 drop-shadow-lg" />}
    </Button>
  )
}
