"use client"

import { useTranslation } from "@/contexts/translation-context"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Users, Target, Eye, Heart, Calendar, MapPin } from "lucide-react"

export default function AboutPageClient() {
  const { t, language } = useTranslation()

  const getAboutImage = () => {
    switch (language) {
      case "en":
        return "/about-en-us.jpg"
      case "es":
        return "/about-es-es.jpg"
      case "fr":
        return "/about-fr-fr.jpg"
      case "de":
        return "/about-de-de.jpg"
      default:
        return "/about-pt-pt.jpg"
    }
  }

  const teamMembers = [
    {
      name: "Dener Viana",
      role: t("about.team.dener.role"),
      image: "/dener-viana.jpg",
      description: t("about.team.dener.description"),
    },
    {
      name: "Tatiana Viana",
      role: t("about.team.tatiana.role"),
      image: "/tatiana-viana.jpg",
      description: t("about.team.tatiana.description"),
    },
    {
      name: "Maria Silva",
      role: t("about.team.maria.role"),
      image: "/maria-silva.jpg",
      description: t("about.team.maria.description"),
    },
    {
      name: "João Santos",
      role: t("about.team.joao.role"),
      image: "/joao-santos.jpg",
      description: t("about.team.joao.description"),
    },
    {
      name: "Ana Costa",
      role: t("about.team.ana.role"),
      image: "/ana-costa.jpg",
      description: t("about.team.ana.description"),
    },
    {
      name: "Carlos Oliveira",
      role: t("about.team.carlos.role"),
      image: "/carlos-oliveira.jpg",
      description: t("about.team.carlos.description"),
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={getAboutImage() || "/placeholder.svg"}
            alt={t("about.hero.title")}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("about.hero.title")}</h1>
          <p className="text-xl md:text-2xl">{t("about.hero.subtitle")}</p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Target className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-2xl font-bold mb-4">{t("about.mission.title")}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t("about.mission.description")}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Eye className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-2xl font-bold mb-4">{t("about.vision.title")}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t("about.vision.description")}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 mx-auto mb-4 text-red-600" />
                <h3 className="text-2xl font-bold mb-4">{t("about.values.title")}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t("about.values.description")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.history.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("about.history.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full">
                    <Calendar className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2020</h3>
                  <p className="text-gray-600 dark:text-gray-300">{t("about.history.2020")}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2022</h3>
                  <p className="text-gray-600 dark:text-gray-300">{t("about.history.2022")}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2024</h3>
                  <p className="text-gray-600 dark:text-gray-300">{t("about.history.2024")}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/dashborad.jpg"
                alt={t("about.history.title")}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.team.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("about.team.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">
                    {member.role}
                  </Badge>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
