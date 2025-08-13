"use client"

import { useEffect } from "react"
import { useTranslation } from "@/contexts/translation-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Globe, Heart, Lightbulb, Shield, Zap, ArrowRight, Mouse, Award, Rocket } from "lucide-react"
import Link from "next/link"

export function AboutContent() {
  const { language } = useTranslation()

  const t = useTranslation().t

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getBackgroundImage = () => {
    const imageMap = {
      pt: "/about-pt-pt.jpg",
      en: "/about-en-us.jpg",
      es: "/about-es-es.jpg",
      fr: "/about-fr-fr.jpg",
      de: "/about-de-de.jpg",
    }
    return imageMap[language] || "/about-pt-pt.jpg"
  }

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-viana-orange" />,
      title: t("about.values.innovation.title"),
      description: t("about.values.innovation.description"),
    },
    {
      icon: <Heart className="h-8 w-8 text-viana-orange" />,
      title: t("about.values.commitment.title"),
      description: t("about.values.commitment.description"),
    },
    {
      icon: <Shield className="h-8 w-8 text-viana-orange" />,
      title: t("about.values.reliability.title"),
      description: t("about.values.reliability.description"),
    },
    {
      icon: <Zap className="h-8 w-8 text-viana-orange" />,
      title: t("about.values.agility.title"),
      description: t("about.values.agility.description"),
    },
  ]

  const historyMilestones = [
    {
      year: "2008",
      icon: <Rocket className="h-8 w-8 text-viana-orange" />,
      title: t("about.history.foundation.title"),
      description: t("about.history.foundation.description"),
    },
    {
      year: "2012",
      icon: <Award className="h-8 w-8 text-viana-orange" />,
      title: t("about.history.projects.title"),
      description: t("about.history.projects.description"),
    },
    {
      year: "2016",
      icon: <Globe className="h-8 w-8 text-viana-orange" />,
      title: t("about.history.expansion.title"),
      description: t("about.history.expansion.description"),
    },
    {
      year: "2020",
      icon: <Users className="h-8 w-8 text-viana-orange" />,
      title: t("about.history.growth.title"),
      description: t("about.history.growth.description"),
    },
  ]

  const team = [
    {
      name: "Tatiana Viana",
      role: t("about.team.tatiana.role"),
      description: t("about.team.tatiana.description"),
      image: "/tatiana-viana.jpg",
    },
    {
      name: "Dener Viana",
      role: t("about.team.dener.role"),
      description: t("about.team.dener.description"),
      image: "/dener-viana.jpg",
    },
    {
      name: "Carlos Santos",
      role: t("about.team.carlos.role"),
      description: t("about.team.carlos.description"),
    },
  ]

  return (
    <>
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat text-white flex items-center"
        style={{ backgroundImage: `url(${getBackgroundImage()})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Users className="h-16 w-16 text-viana-yellow" />
            </div>
            <h1 className="text-5xl font-bold mb-6">{t("about.hero.title")}</h1>
            <p className="text-xl mb-8 text-gray-100">{t("about.hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-viana-white text-viana-orange hover:bg-viana-yellow hover:text-viana-black text-lg px-8 py-4 shadow-xl"
                onClick={() => {
                  const element = document.getElementById("nossa-historia")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                {t("about.hero.cta.history")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-viana-white text-viana-white hover:bg-viana-white hover:text-viana-orange text-lg px-8 py-4 bg-black/20 backdrop-blur-sm shadow-xl"
                onClick={() => {
                  const element = document.getElementById("nossa-equipe")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                {t("about.hero.cta.team")}
              </Button>
            </div>
          </div>
        </div>

        {/* Mouse Icon */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Mouse className="h-8 w-8 text-white opacity-70" />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-viana-orange mr-4" />
                  <h3 className="text-2xl font-bold">{t("about.mission.title")}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {t("about.mission.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="h-8 w-8 text-viana-orange mr-4" />
                  <h3 className="text-2xl font-bold">{t("about.vision.title")}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {t("about.vision.description")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {t("about.values.badge")}
            </Badge>
            <h2 className="text-4xl font-bold mb-4">{t("about.values.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("about.values.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-viana-orange transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="nossa-historia" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {t("about.history.badge")}
            </Badge>
            <h2 className="text-4xl font-bold mb-4">{t("about.history.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("about.history.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {historyMilestones.map((milestone, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-viana-orange/10 rounded-full mr-4">
                      {milestone.icon}
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-viana-orange mb-1">{milestone.year}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-viana-orange transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="nossa-equipe" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {t("about.team.badge")}
            </Badge>
            <h2 className="text-4xl font-bold mb-4">{t("about.team.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("about.team.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-8">
                  {member.image ? (
                    <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 bg-gradient-to-r from-viana-orange to-viana-yellow rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-viana-orange transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-viana-orange font-medium mb-4">{member.role}</div>
                  <p className="text-gray-600 dark:text-gray-300">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url(/paralax-about-contact.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">{t("about.cta.title")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t("about.cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-viana-blue hover:bg-gray-100">
              <Link href="/contact" className="flex items-center">
                {t("about.cta.contact")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-viana-blue bg-transparent"
            >
              {t("about.cta.projects")}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
