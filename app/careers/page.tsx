"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { TrendingUp, Lightbulb, Clock, MapPin, Briefcase } from "lucide-react"
import Image from "next/image"

const positions = [
  {
    id: "fullstack-developer",
    title: "careers.positions.developer",
    description: "careers.positions.developer.description",
    location: "Remote / Porto",
    type: "Full-time",
    department: "Engineering",
    requirements: [
      "3+ anos de experiência em React e Node.js",
      "Conhecimento em TypeScript",
      "Experiência com bases de dados SQL e NoSQL",
      "Familiaridade com metodologias ágeis",
    ],
  },
  {
    id: "ux-ui-designer",
    title: "careers.positions.designer",
    description: "careers.positions.designer.description",
    location: "Híbrido / Lisboa",
    type: "Full-time",
    department: "Design",
    requirements: [
      "Portfolio sólido em design digital",
      "Proficiência em Figma e Adobe Creative Suite",
      "Experiência em design de sistemas",
      "Conhecimento em prototipagem e testes de usabilidade",
    ],
  },
  {
    id: "project-manager",
    title: "careers.positions.manager",
    description: "careers.positions.manager.description",
    location: "Porto",
    type: "Full-time",
    department: "Management",
    requirements: [
      "Certificação PMP ou equivalente",
      "5+ anos de experiência em gestão de projetos",
      "Conhecimento em metodologias ágeis (Scrum, Kanban)",
      "Excelentes competências de comunicação",
    ],
  },
]

export default function CareersPage() {
  const { t, language } = useTranslation()
  const [selectedPosition, setSelectedPosition] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const getLocalizedImage = (imageName: string) => {
    const imageMap = {
      pt: `/pages/${imageName}.jpg`,
      en: `/pages/${imageName}.jpg`,
      es: `/pages/${imageName}.jpg`,
      fr: `/pages/${imageName}.jpg`,
      de: `/pages/${imageName}.jpg`,
    }
    return imageMap[language] || imageMap.pt
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    // Here you would typically send the form data to an external API
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/paralax-careers.jpg" alt={t("careers.hero.title")} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("careers.hero.title")}</h1>
          <p className="text-xl md:text-2xl opacity-90">{t("careers.hero.subtitle")}</p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("careers.why.title")}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t("careers.why.growth")}</h3>
                <p className="text-gray-600">{t("careers.why.growth.description")}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t("careers.why.innovation")}</h3>
                <p className="text-gray-600">{t("careers.why.innovation.description")}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t("careers.why.balance")}</h3>
                <p className="text-gray-600">{t("careers.why.balance.description")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("careers.positions.title")}</h2>
          </div>

          <div className="grid gap-6">
            {positions.map((position) => (
              <Card key={position.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{t(position.title)}</h3>
                        <Badge variant="secondary">{position.type}</Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{t(position.description)}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </div>
                      </div>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button onClick={() => setSelectedPosition(position.id)}>{t("careers.apply")}</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{t("careers.form.title")}</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="position">{t("careers.form.position")}</Label>
                              <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione uma posição" />
                                </SelectTrigger>
                                <SelectContent>
                                  {positions.map((pos) => (
                                    <SelectItem key={pos.id} value={pos.id}>
                                      {t(pos.title)}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="name">{t("careers.form.name")}</Label>
                              <Input id="name" required />
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="email">{t("careers.form.email")}</Label>
                              <Input id="email" type="email" required />
                            </div>
                            <div>
                              <Label htmlFor="phone">{t("careers.form.phone")}</Label>
                              <Input id="phone" type="tel" />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="experience">{t("careers.form.experience")}</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione os anos de experiência" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="0-1">0-1 anos</SelectItem>
                                <SelectItem value="2-3">2-3 anos</SelectItem>
                                <SelectItem value="4-5">4-5 anos</SelectItem>
                                <SelectItem value="6-10">6-10 anos</SelectItem>
                                <SelectItem value="10+">10+ anos</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="cv">{t("careers.form.cv")}</Label>
                            <Input id="cv" type="file" accept=".pdf,.doc,.docx" />
                          </div>
                          <div>
                            <Label htmlFor="cover">{t("careers.form.cover")}</Label>
                            <Textarea id="cover" rows={4} />
                          </div>
                          <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? t("careers.form.submitting") : t("careers.form.submit")}
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Nossa Cultura</h2>
            <p className="text-xl text-gray-600">Veja como é trabalhar na VianaHub</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={getLocalizedImage(`we-are-hiring-${index || "/placeholder.svg"}`)}
                  alt={`Cultura da empresa ${index}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
