"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Settings, Monitor, Moon, Globe, Shield, Cookie } from "lucide-react"
import Link from "next/link"

interface PreferencesDialogProps {
  children: React.ReactNode
}

export function PreferencesDialog({ children }: PreferencesDialogProps) {
  const [theme, setTheme] = useState("default")
  const [language, setLanguage] = useState("pt-PT")
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "pt-PT", name: "Português (Portugal)", flag: "🇵🇹" },
    { code: "en-US", name: "English (United States)", flag: "🇺🇸" },
    { code: "es-ES", name: "Español (España)", flag: "🇪🇸" },
    { code: "fr-FR", name: "Français (France)", flag: "🇫🇷" },
    { code: "de-DE", name: "Deutsch (Deutschland)", flag: "🇩🇪" },
  ]

  const handleSavePreferences = () => {
    // Aqui você pode implementar a lógica para salvar as preferências
    localStorage.setItem("vianahub-theme", theme)
    localStorage.setItem("vianahub-language", language)

    // Aplicar tema
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md bg-viana-white border-2 border-viana-gray shadow-2xl">
        {/* Barra de título estilo Windows */}
        <div className="flex items-center justify-between bg-viana-orange px-4 py-2 -mt-6 -mx-6 mb-4">
          <div className="flex items-center space-x-2">
            <Settings className="h-4 w-4 text-viana-white" />
            <span className="text-viana-white font-medium text-sm">Preferências do Sistema</span>
          </div>
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-viana-yellow rounded-sm"></div>
            <div className="w-3 h-3 bg-viana-white rounded-sm"></div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Seção Tema */}
          <Card className="border-viana-gray/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-viana-black text-lg">
                <Monitor className="h-5 w-5 mr-2 text-viana-orange" />
                Tema
              </CardTitle>
              <CardDescription className="text-viana-gray">Escolha a aparência da interface</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={theme} onValueChange={setTheme} className="space-y-3">
                <div className="flex items-center space-x-3 p-3 rounded-lg border border-viana-gray/20 hover:bg-viana-yellow/10">
                  <RadioGroupItem value="default" id="theme-default" />
                  <Label htmlFor="theme-default" className="flex items-center cursor-pointer flex-1">
                    <div className="w-6 h-6 bg-viana-orange rounded mr-3"></div>
                    <div>
                      <div className="font-medium text-viana-black">Padrão VianaHub</div>
                      <div className="text-sm text-viana-gray">Tema oficial da empresa</div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg border border-viana-gray/20 hover:bg-viana-yellow/10">
                  <RadioGroupItem value="dark" id="theme-dark" />
                  <Label htmlFor="theme-dark" className="flex items-center cursor-pointer flex-1">
                    <Moon className="w-6 h-6 text-viana-gray mr-3" />
                    <div>
                      <div className="font-medium text-viana-black">Escuro</div>
                      <div className="text-sm text-viana-gray">Tema escuro para baixa luminosidade</div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Seção Idioma */}
          <Card className="border-viana-gray/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-viana-black text-lg">
                <Globe className="h-5 w-5 mr-2 text-viana-orange" />
                Idioma
              </CardTitle>
              <CardDescription className="text-viana-gray">Selecione seu idioma preferido</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-full border-viana-gray/30">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      <div className="flex items-center space-x-2">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Seção Privacidade */}
          <Card className="border-viana-gray/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-viana-black text-lg">
                <Shield className="h-5 w-5 mr-2 text-viana-orange" />
                Privacidade
              </CardTitle>
              <CardDescription className="text-viana-gray">Gerencie suas preferências de privacidade</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link
                href="/politica-privacidade"
                className="flex items-center p-2 rounded-lg hover:bg-viana-yellow/10 transition-colors"
              >
                <Shield className="h-4 w-4 mr-3 text-viana-orange" />
                <span className="text-viana-black hover:text-viana-orange">Política de Privacidade</span>
              </Link>
              <Link
                href="/cookies"
                className="flex items-center p-2 rounded-lg hover:bg-viana-yellow/10 transition-colors"
              >
                <Cookie className="h-4 w-4 mr-3 text-viana-orange" />
                <span className="text-viana-black hover:text-viana-orange">Configurações de Cookies</span>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Botões de ação estilo Windows */}
        <div className="flex justify-end space-x-2 pt-4 border-t border-viana-gray/20">
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            className="border-viana-gray text-viana-gray hover:bg-viana-gray hover:text-viana-white"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSavePreferences}
            className="bg-viana-orange text-viana-white hover:bg-viana-yellow hover:text-viana-black"
          >
            Aplicar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
