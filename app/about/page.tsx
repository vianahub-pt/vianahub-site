"use client"

import { useTranslation } from "@/contexts/translation-context"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Eye, Lightbulb, Award, Handshake } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Dener Viana",
    role: "CEO & Founder",
    image: "/dener-viana.jpg",
    bio: "Visionário em tecnologia com mais de 15 anos de experiência em desenvolvimento de software e liderança de equipas.",
  },
  {
    name: "Ana Costa",
    role: "CTO",
    image: "/ana-costa.jpg",
    bio: "Especialista em arquitetura de sistemas e inovação tecnológica, liderando a estratégia técnica da empresa.",
  },
  {
    name: "Carlos Oliveira",
    role: "Lead Developer",
    image: "/carlos-oliveira.jpg",
    bio: "Desenvolvedor full-stack experiente, especializado em React, Node.js e arquiteturas cloud-native.",
  },
  {
    name: "Maria Silva",
    role: "UX/UI Designer",
    image: "/maria-silva.jpg",
    bio: "Designer criativa focada em experiências de utilizador excepcionais e interfaces intuitivas.",
  },
  {
    name: "João Santos",
    role: "Project Manager",
    image: "/joao-santos.jpg",
    bio: "Gestor de projetos certificado PMP, especializado em metodologias ágeis e entrega de valor.",
  },
  {
    name: "Lúcia Ferreira",
    role: "Quality Assurance",
    image: "/lucia-ferreira.jpg",
    bio: "Especialista em garantia de qualidade e testes automatizados, assegurando a excelência dos nossos produtos.",
  },
]

export default function AboutPage() {
  const { t, language } = useTranslation()

  const getLocalizedImage = () => {
    const imageMap = {
      pt: "/about-pt-pt.jpg",
      en: "/about-en-us.jpg",
      es: "/about-es-es.jpg",
      fr: "/about-fr-fr.jpg",
      de: "/about-de-de.jpg",
    }
    return imageMap[language] || imageMap.pt
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={getLocalizedImage() || "/placeholder.svg"}
            alt={t("about.hero.title")}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("about.hero.title")}</h1>
          <p className="text-xl md:text-2xl opacity-90">{t("about.hero.subtitle")}</p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t("about.mission.title")}</h3>
                <p className="text-gray-600">{t("about.mission.description")}</p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t("about.vision.title")}</h3>
                <p className="text-gray-600">{t("about.vision.description")}</p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t("about.values.title")}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                    <div className="text-left">
                      <h4 className="font-semibold">{t("about.values.innovation")}</h4>
                      <p className="text-sm text-gray-600">{t("about.values.innovation.description")}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-blue-500" />
                    <div className="text-left">
                      <h4 className="font-semibold">{t("about.values.quality")}</h4>
                      <p className="text-sm text-gray-600">{t("about.values.quality.description")}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Handshake className="w-5 h-5 text-green-500" />
                    <div className="text-left">
                      <h4 className="font-semibold">{t("about.values.collaboration")}</h4>
                      <p className="text-sm text-gray-600">{t("about.values.collaboration.description")}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.team.title")}</h2>
            <p className="text-xl text-gray-600">{t("about.team.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">
                    {member.role}
                  </Badge>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
