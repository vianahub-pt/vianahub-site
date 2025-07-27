"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

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
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center justify-center gap-3 mb-4"
              >
                <img src="/fox-desktop.png" alt="Fox" className="w-12 h-12 object-contain" />
                <h1 className="text-3xl font-bold text-amber-800">Aventura da Raposa</h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-amber-700 mb-6"
              >
                Bem-vindo ao deserto! Ajude a raposa a encontrar os oásis escondidos em cada nível.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6"
              >
                <h3 className="font-semibold text-amber-800 mb-2">Como Jogar:</h3>
                <ul className="text-sm text-amber-700 text-left space-y-1">
                  <li>• Use as setas do teclado ou clique nas células para mover</li>
                  <li>• A raposa pode se mover até 3 células por vez</li>
                  <li>• Encontre o oásis (água) em cada nível</li>
                  <li>• Complete todos os 5 níveis o mais rápido possível</li>
                </ul>
              </motion.div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label htmlFor="playerName" className="block text-sm font-medium text-amber-800 mb-2">
                  Digite seu nome para começar:
                </label>
                <Input
                  id="playerName"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome aqui..."
                  className="w-full border-amber-300 focus:border-amber-500 focus:ring-amber-500"
                  maxLength={20}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={!name.trim()}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 disabled:opacity-50"
              >
                Começar Aventura
              </Button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-6 text-center"
            >
              <p className="text-xs text-amber-600">Seu progresso será salvo localmente no seu navegador</p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
