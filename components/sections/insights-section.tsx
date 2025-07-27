"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/contexts/translation-context"
import { TrendingUp, Users, Lightbulb, Target } from "lucide-react"
import { Counter } from "@/components/counter"

export function InsightsSection() {
  const { t } = useTranslation()

  const insights = [
    {
      icon: <TrendingUp className="h-8 w-8 text-viana-orange" />,
      title: t("insights.growth.title"),
      value: 150,
      suffix: "%",
      description: t("insights.growth.description"),
    },
    {
      icon: <Users className="h-8 w-8 text-viana-orange" />,
      title: t("insights.experience.title"),
      value: 98,
      suffix: "%",
      description: t("insights.experience.description"),
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-viana-orange" />,
      title: t("insights.innovation.title"),
      value: 100,
      suffix: "%",
      description: t("insights.innovation.description"),
    },
    {
      icon: <Target className="h-8 w-8 text-viana-orange" />,
      title: t("insights.results.title"),
      value: 95,
      suffix: "%",
      description: t("insights.results.description"),
    },
  ]

  return (
    <section
      className="py-20 bg-gradient-to-r from-viana-blue to-viana-orange text-white relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 123, 191, 0.9), rgba(255, 165, 0, 0.9)), url('/insights.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-white text-white">
            Insights
          </Badge>
          <h2 className="text-4xl font-bold mb-4">{t("insights.title")}</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto font-kurale">{t("insights.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((insight, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">{insight.icon}</div>
                <Counter
                  end={insight.value}
                  suffix={insight.suffix}
                  className="text-4xl font-bold text-viana-yellow mb-2"
                />
                <h3 className="text-xl font-bold mb-3">{insight.title}</h3>
                <p className="text-gray-100 font-kurale">{insight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
