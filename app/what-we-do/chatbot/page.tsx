"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TranslationProvider, useTranslation } from "@/contexts/translation-context"
import { MessageCircle, Bot, Zap, Clock, Users, BarChart, Headphones, CheckCircle } from "lucide-react"
import { chatbotTranslations } from "./translation"

function ChatbotPageContent() {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: <MessageCircle className="h-8 w-8 text-viana-orange" />,
      title: t("chatbot.features.conversations.title"),
      description: t("chatbot.features.conversations.description"),
    },
    {
      icon: <Clock className="h-8 w-8 text-viana-orange" />,
      title: t("chatbot.features.availability.title"),
      description: t("chatbot.features.availability.description"),
    },
    {
      icon: <Users className="h-8 w-8 text-viana-orange" />,
      title: t("chatbot.features.channels.title"),
      description: t("chatbot.features.channels.description"),
    },
    {
      icon: <BarChart className="h-8 w-8 text-viana-orange" />,
      title: t("chatbot.features.analytics.title"),
      description: t("chatbot.features.analytics.description"),
    },
  ]

  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-viana-orange" />,
      title: t("chatbot.benefits.response.title"),
      description: t("chatbot.benefits.response.description"),
    },
    {
      icon: <Headphones className="h-6 w-6 text-viana-orange" />,
      title: t("chatbot.benefits.costs.title"),
      description: t("chatbot.benefits.costs.description"),
    },
    {
      icon: <Users className="h-6 w-6 text-viana-orange" />,
      title: t("chatbot.benefits.satisfaction.title"),
      description: t("chatbot.benefits.satisfaction.description"),
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-viana-orange" />,
      title: t("chatbot.benefits.scalability.title"),
      description: t("chatbot.benefits.scalability.description"),
    },
  ]

  return (
    <div className="min-h-screen bg-viana-white">
      <Navbar />

      <main className="pt-28">
        {/* Hero Section */}
        <section
          className="relative pt-24 lg:pt-28 pb-20 overflow-hidden"
          style={{
            backgroundImage: "url('/pages/what-we-do-chatbot.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white mt-8">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">{t("chatbot.hero.title")}</h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">{t("chatbot.hero.subtitle")}</p>
              <Button size="lg" className="bg-white text-viana-orange hover:bg-gray-100 font-semibold px-8 py-3">
                {t("chatbot.hero.cta")}
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">{t("chatbot.features.title")}</h2>
              <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("chatbot.features.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-none">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-viana-black mb-3">{feature.title}</h3>
                    <p className="text-viana-gray">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">{t("chatbot.benefits.title")}</h2>
              <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("chatbot.benefits.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{benefit.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-viana-black mb-2">{benefit.title}</h3>
                        <p className="text-viana-gray text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">{t("chatbot.demo.title")}</h2>
                <p className="text-xl text-viana-gray">{t("chatbot.demo.subtitle")}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <Bot className="h-16 w-16 text-viana-orange mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-viana-black mb-4">{t("chatbot.demo.interactive.title")}</h3>
                <p className="text-viana-gray mb-6">{t("chatbot.demo.interactive.description")}</p>
                <Button className="bg-viana-orange hover:bg-viana-orange/90 text-white font-semibold px-8 py-3">
                  {t("chatbot.demo.cta")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-viana-yellow">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-6">{t("chatbot.cta.title")}</h2>
            <p className="text-xl text-viana-gray mb-8 max-w-2xl mx-auto">{t("chatbot.cta.subtitle")}</p>
            <Button size="lg" className="bg-viana-orange hover:bg-viana-orange/90 text-white font-semibold px-8 py-3">
              {t("chatbot.cta.button")}
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function ChatbotPage() {
  return (
    <TranslationProvider translations={chatbotTranslations}>
      <ChatbotPageContent />
    </TranslationProvider>
  )
}
