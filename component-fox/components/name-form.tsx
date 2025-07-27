"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface NameFormProps {
  onNameSubmit: (name: string) => void
}

export function NameForm({ onNameSubmit }: NameFormProps) {
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onNameSubmit(name.trim())
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-yellow-200 to-orange-200 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-2xl">
          <CardHeader className="text-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex justify-center mb-4"
            >
              <img src="/fox-desktop.png" alt="Fox" className="w-16 h-16 object-contain" />
            </motion.div>
            <CardTitle className="text-2xl font-bold text-amber-800">Aventura da Raposa no Deserto</CardTitle>
            <p className="text-amber-600 mt-2">Ajude a raposa a encontrar o oásis através do labirinto!</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="playerName" className="block text-sm font-medium text-amber-700 mb-2">
                  Digite seu nome para começar:
                </label>
                <Input
                  id="playerName"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome aqui..."
                  className="w-full"
                  maxLength={20}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                disabled={!name.trim()}
              >
                Começar Aventura!
              </Button>
            </form>
            <div className="mt-6 text-center text-sm text-amber-600">
              <p className="mb-2">Como jogar:</p>
              <ul className="text-xs space-y-1">
                <li>• Use as setas do teclado para mover a raposa</li>
                <li>• Ou clique nas células para mover</li>
                <li>• Encontre o oásis em cada nível</li>
                <li>• Complete todos os 5 níveis o mais rápido possível!</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
