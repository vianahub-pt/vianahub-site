"use client"

import { DialogTrigger } from "@/components/ui/dialog"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Clock, Users, Briefcase, Heart, Trophy, Zap, FileText, Upload, User, GraduationCap } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { TranslationProvider, useTranslation } from "@/contexts/translation-context"
import { careersTranslations } from "./translation"

interface PositionMeta {
  id: string
  salary?: string
}

interface TranslatedPosition extends PositionMeta {
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
}

const positionsMeta: PositionMeta[] = [
  { id: "1", salary: "€45.000 - €65.000" },
  { id: "2", salary: "€40.000 - €55.000" },
  { id: "3", salary: "€35.000 - €50.000" },
  { id: "4", salary: "€50.000 - €70.000" },
  { id: "5", salary: "€38.000 - €55.000" },
  { id: "6", salary: "€45.000 - €65.000" },
  { id: "7", salary: "€35.000 - €50.000" },
  { id: "8", salary: "€60.000 - €80.000" },
  { id: "9", salary: "€30.000 - €45.000" },
  { id: "10", salary: "€40.000 - €60.000" },
  { id: "11", salary: "€35.000 - €50.000" },
  { id: "12", salary: "€42.000 - €62.000" },
]

function CareersPageContent() {
  const { language } = useTranslation()
  const [selectedPosition, setSelectedPosition] = useState<TranslatedPosition | null>(null)
  const [isApplicationOpen, setIsApplicationOpen] = useState(false)
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    motivation: "",
    cv: null as File | null,
    termsAccepted: false,
  })

  // Local translation function
  const t = (key: string) => {
    return careersTranslations[language]?.[key] || key
  }

  const getWordCloudImage = () => {
    const imageMap = {
      pt: "/word-cloud-pt-pt.jpg",
      en: "/word-cloud-en-us.jpg",
      es: "/word-cloud-es-es.jpg",
      fr: "/word-cloud-fr-fr.jpg",
      de: "/word-cloud-de-de.jpg",
    }
    return imageMap[language] || imageMap.pt
  }

  const getTranslatedPosition = (positionMeta: PositionMeta): TranslatedPosition => {
    const baseKey = `careers.positions.${positionMeta.id}`

    const getTranslatedList = (listType: "requirements" | "responsibilities" | "benefits") => {
      const translatedList = []
      let i = 0
      // Loop until a translation key does not exist, indicating the end of the list
      while (careersTranslations[language]?.[`${baseKey}.${listType}.${i}`] !== undefined) {
        translatedList.push(t(`${baseKey}.${listType}.${i}`))
        i++
      }
      return translatedList
    }

    return {
      ...positionMeta,
      title: t(`${baseKey}.title`),
      department: t(`${baseKey}.department`),
      location: t(`${baseKey}.location`),
      type: t(`${baseKey}.type`),
      description: t(`${baseKey}.description`),
      requirements: getTranslatedList("requirements"),
      responsibilities: getTranslatedList("responsibilities"),
      benefits: getTranslatedList("benefits"),
    }
  }

  const handleInputChange = (field: string, value: string | boolean | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.termsAccepted) {
      alert(t("careers.application.acceptTermsAlert"))
      return
    }

    // Preparar dados para envio
    const applicationData = {
      position: selectedPosition?.title || t("careers.application.general"),
      ...formData,
      submittedAt: new Date().toISOString(),
    }

    console.log("Dados da candidatura:", applicationData)
    alert(t("careers.application.successMessage"))

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      education: "",
      experience: "",
      motivation: "",
      cv: null,
      termsAccepted: false,
    })
    setIsApplicationOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${getWordCloudImage()}')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">{t("careers.title")}</h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t("careers.subtitle")}
            </p>
            <Button
              size="lg"
              className="bg-viana-orange hover:bg-viana-orange/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setIsApplicationOpen(true)}
            >
              <Upload className="mr-2 h-5 w-5" />
              {t("careers.cta")}
            </Button>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center drop-shadow-lg">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/paralax-careers.jpg')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">{t("careers.parallax.title")}</h2>
            <p className="text-xl max-w-2xl mx-auto">{t("careers.parallax.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Positions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("careers.positions.title")}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("careers.positions.subtitle")}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {positionsMeta.map((positionMeta) => {
              const translatedPosition = getTranslatedPosition(positionMeta)
              return (
                <Card
                  key={positionMeta.id}
                  className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-viana-orange h-full"
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg font-bold text-gray-900 leading-tight line-clamp-2">
                        {translatedPosition.title}
                      </CardTitle>
                      <Badge
                        variant="secondary"
                        className={`ml-1 text-xs px-2 py-1 flex-shrink-0 ${
                          translatedPosition.location === t("careers.positions.1.location") // Check against a known translated string for 'Remote'
                            ? "bg-green-100 text-green-800"
                            : translatedPosition.location === t("careers.positions.2.location") // Check against a known translated string for 'Hybrid'
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {translatedPosition.location}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm text-gray-600 line-clamp-3">
                      {translatedPosition.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col justify-between flex-1">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        <span className="truncate">{translatedPosition.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span className="truncate">{translatedPosition.type}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedPosition(translatedPosition)}
                            className="w-full hover:bg-viana-orange hover:text-white transition-colors text-xs"
                          >
                            {t("careers.positions.viewDetails")}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-gray-900">
                              {selectedPosition?.title}
                            </DialogTitle>
                            <DialogDescription className="text-lg text-gray-600">
                              {selectedPosition?.department} • {selectedPosition?.location} • {selectedPosition?.type}
                            </DialogDescription>
                          </DialogHeader>

                          {selectedPosition && (
                            <div className="space-y-6 mt-6">
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                  {t("careers.positionDetails.description")}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">{selectedPosition.description}</p>
                              </div>

                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                  {t("careers.positionDetails.requirements")}
                                </h3>
                                <ul className="space-y-2">
                                  {selectedPosition.requirements.map((req, index) => (
                                    <li key={index} className="flex items-start gap-2 text-gray-700">
                                      <div className="w-2 h-2 bg-viana-orange rounded-full mt-2 flex-shrink-0"></div>
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                  {t("careers.positionDetails.responsibilities")}
                                </h3>
                                <ul className="space-y-2">
                                  {selectedPosition.responsibilities.map((resp, index) => (
                                    <li key={index} className="flex items-start gap-2 text-gray-700">
                                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                  {t("careers.positionDetails.benefits")}
                                </h3>
                                <ul className="space-y-2">
                                  {selectedPosition.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-2 text-gray-700">
                                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                      <span>{benefit}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {selectedPosition.salary && (
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    {t("careers.positionDetails.salary")}
                                  </h3>
                                  <p className="text-gray-700 font-medium">{selectedPosition.salary}</p>
                                </div>
                              )}

                              <div className="pt-4 border-t">
                                <Button
                                  onClick={() => setIsApplicationOpen(true)}
                                  className="w-full bg-viana-orange hover:bg-viana-orange/90 text-white"
                                  size="lg"
                                >
                                  {t("careers.positions.apply")}
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>

                      <p className="text-xs text-gray-500 text-center">{t("careers.positions.talentBankNote")}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{t("careers.positions.talentBank")}</h3>
              <p className="text-blue-700 mb-4">
                As posições listadas representam oportunidades futuras. Candidatos serão contactados quando uma posição
                compatível estiver disponível.
              </p>
              <Button
                variant="outline"
                onClick={() => setIsApplicationOpen(true)}
                className="border-blue-300 text-blue-700 hover:bg-blue-50"
              >
                {t("careers.positions.joinTalentBank")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("careers.why.title")}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("careers.why.subtitle")}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-viana-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-viana-orange" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("careers.why.innovation.title")}</h3>
              <p className="text-gray-600">{t("careers.why.innovation.description")}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("careers.why.team.title")}</h3>
              <p className="text-gray-600">{t("careers.why.team.description")}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("careers.why.growth.title")}</h3>
              <p className="text-gray-600">{t("careers.why.growth.description")}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("careers.why.wellbeing.title")}</h3>
              <p className="text-gray-600">{t("careers.why.wellbeing.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <FileText className="h-6 w-6 text-viana-orange" />
              {t("careers.application.title")}
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              {selectedPosition ? `Candidatura para: ${selectedPosition.title}` : t("careers.application.general")}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-8 mt-6">
            {/* Informações Pessoais */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                <User className="h-5 w-5" />
                {t("careers.application.personalInfo")}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    {t("careers.application.name")} *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="mt-1"
                    placeholder={t("careers.application.name")}
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    {t("careers.application.email")} *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="mt-1"
                    placeholder={t("careers.application.email")}
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    {t("careers.application.phone")}
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-1"
                    placeholder="+351 xxx xxx xxx"
                  />
                </div>
              </div>
            </div>

            {/* Formação e Experiência */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                {t("careers.application.educationExperienceTitle")}
              </h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="education" className="text-sm font-medium text-gray-700">
                    {t("careers.application.education")}
                  </Label>
                  <Textarea
                    id="education"
                    value={formData.education}
                    onChange={(e) => handleInputChange("education", e.target.value)}
                    className="mt-1"
                    rows={3}
                    placeholder={t("careers.application.educationPlaceholder")}
                  />
                </div>
                <div>
                  <Label htmlFor="experience" className="text-sm font-medium text-gray-700">
                    {t("careers.application.experience")}
                  </Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    className="mt-1"
                    rows={4}
                    placeholder={t("careers.application.experiencePlaceholder")}
                  />
                </div>
              </div>
            </div>

            {/* Motivação */}
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-900 mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5" />
                {t("careers.application.motivation")}
              </h3>
              <div>
                <Label htmlFor="motivation" className="text-sm font-medium text-gray-700">
                  {t("careers.application.motivationLabel")}
                </Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => handleInputChange("motivation", e.target.value)}
                  className="mt-1"
                  rows={4}
                  placeholder={t("careers.application.motivationPlaceholder")}
                />
              </div>
            </div>

            {/* Upload CV */}
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900 mb-4 flex items-center gap-2">
                <Upload className="h-5 w-5" />
                {t("careers.application.cv")}
              </h3>
              <div>
                <Label htmlFor="cv" className="text-sm font-medium text-gray-700">
                  {t("careers.application.cvLabel")}
                </Label>
                <Input
                  id="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleInputChange("cv", e.target.files?.[0] || null)}
                  className="mt-1"
                />
                {formData.cv && (
                  <p className="text-sm text-green-600 mt-2">
                    {t("careers.application.fileSelected")} {formData.cv.name}
                  </p>
                )}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label htmlFor="terms" className="text-sm font-medium text-gray-700 cursor-pointer">
                    {t("careers.application.terms")} *
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6 border-t">
              <Button type="button" variant="outline" onClick={() => setIsApplicationOpen(false)} className="flex-1">
                {t("careers.application.cancel")}
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-viana-orange hover:bg-viana-orange/90 text-white"
                disabled={!formData.termsAccepted}
              >
                <Upload className="mr-2 h-4 w-4" />
                {t("careers.application.submit")}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Terms and Conditions Modal */}
      <Dialog open={isTermsOpen} onOpenChange={setIsTermsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-viana-orange">{t("careers.terms.title")}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 mt-6 text-sm leading-relaxed">
            <div>
              <h3 className="text-lg font-bold text-viana-orange mb-3">{t("careers.terms.object.title")}</h3>
              <p className="text-gray-700 mb-4">{t("careers.terms.object.description")}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-viana-orange mb-3">{t("careers.terms.personalData.title")}</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <h4 className="font-bold text-viana-orange">
                    {t("careers.terms.personalData.collectionTreatment.title")}
                  </h4>
                  <p>{t("careers.terms.personalData.collectionTreatment.description")}</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>{t("careers.terms.personalData.collectionTreatment.item1")}</li>
                    <li>{t("careers.terms.personalData.collectionTreatment.item2")}</li>
                    <li>{t("careers.terms.personalData.collectionTreatment.item3")}</li>
                    <li>{t("careers.terms.personalData.collectionTreatment.item4")}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-viana-orange">{t("careers.terms.personalData.purpose.title")}</h4>
                  <p>{t("careers.terms.personalData.purpose.description")}</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>{t("careers.terms.personalData.purpose.item1")}</li>
                    <li>{t("careers.terms.personalData.purpose.item2")}</li>
                    <li>{t("careers.terms.personalData.purpose.item3")}</li>
                    <li>{t("careers.terms.personalData.purpose.item4")}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-viana-orange">{t("careers.terms.personalData.retention.title")}</h4>
                  <p>{t("careers.terms.personalData.retention.description")}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-viana-orange mb-3">{t("careers.terms.candidateRights.title")}</h3>
              <div className="text-gray-700 space-y-2">
                <p>{t("careers.terms.candidateRights.description")}</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>{t("careers.terms.candidateRights.item1")}</li>
                  <li>{t("careers.terms.candidateRights.item2")}</li>
                  <li>{t("careers.terms.candidateRights.item3")}</li>
                  <li>{t("careers.terms.candidateRights.item4")}</li>
                  <li>{t("careers.terms.candidateRights.item5")}</li>
                  <li>{t("careers.terms.candidateRights.item6")}</li>
                  <li>{t("careers.terms.candidateRights.item7")}</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-viana-orange mb-3">{t("careers.terms.selectionProcess.title")}</h3>
              <div className="text-gray-700 space-y-3">
                <div>
                  <h4 className="font-bold text-viana-orange">{t("careers.terms.selectionProcess.phases.title")}</h4>
                  <p>{t("careers.terms.selectionProcess.phases.description")}</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>{t("careers.terms.selectionProcess.phases.item1")}</li>
                    <li>{t("careers.terms.selectionProcess.phases.item2")}</li>
                    <li>{t("careers.terms.selectionProcess.phases.item3")}</li>
                    <li>{t("careers.terms.selectionProcess.phases.item4")}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-viana-orange">{t("careers.terms.selectionProcess.criteria.title")}</h4>
                  <p>{t("careers.terms.selectionProcess.criteria.description")}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-viana-orange mb-3">{t("careers.terms.confidentiality.title")}</h3>
              <p className="text-gray-700">{t("careers.terms.confidentiality.description")}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-viana-orange mb-3">{t("careers.terms.communications.title")}</h3>
              <p className="text-gray-700">{t("careers.terms.communications.description")}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-viana-orange mb-3">{t("careers.terms.changes.title")}</h3>
              <p className="text-gray-700">{t("careers.terms.changes.description")}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-viana-orange mb-3">{t("careers.terms.contacts.title")}</h3>
              <div className="text-gray-700">
                <p>{t("careers.terms.contacts.description")}</p>
                <ul className="list-none ml-4 mt-2 space-y-1">
                  <li>
                    <strong>{t("careers.terms.contacts.email")}</strong> privacy@vianahub.pt
                  </li>
                  <li>
                    <strong>{t("careers.terms.contacts.phone")}</strong> +351 XXX XXX XXX
                  </li>
                  <li>
                    <strong>{t("careers.terms.contacts.address")}</strong> [Morada da VianaHub]
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-viana-orange mb-3">{t("careers.terms.applicableLaw.title")}</h3>
              <p className="text-gray-700">{t("careers.terms.applicableLaw.description")}</p>
            </div>

            <div className="pt-4 border-t">
              <Button
                onClick={() => setIsTermsOpen(false)}
                className="w-full bg-viana-orange hover:bg-viana-orange/90 text-white"
              >
                {t("careers.terms.close")}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default function CareersPage() {
  return (
    <TranslationProvider>
      <CareersPageContent />
    </TranslationProvider>
  )
}
