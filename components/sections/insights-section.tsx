"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Lightbulb, Target } from "lucide-react";
import { Counter } from "@/components/counter";
import { useTranslation } from "@/components/translation-context";

export function InsightsSection() {
  const { t } = useTranslation();

  const insights = [
    {
      icon: <TrendingUp className="h-8 w-8 text-viana-orange" />,
      title: t("home.section.insights.growth.title"),
      value: 150,
      suffix: "%",
      description: t("home.section.insights.growth.description"),
    },
    {
      icon: <Users className="h-8 w-8 text-viana-orange" />,
      title: t("home.section.insights.experience.title"),
      value: 98,
      suffix: "%",
      description: t("home.section.insights.experience.description"),
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-viana-orange" />,
      title: t("home.section.insights.innovation.title"),
      value: 100,
      suffix: "%",
      description: t("home.section.insights.innovation.description"),
    },
    {
      icon: <Target className="h-8 w-8 text-viana-orange" />,
      title: t("home.section.insights.results.title"),
      value: 95,
      suffix: "%",
      description: t("home.section.insights.results.description"),
    },
  ];

  return (
    <section
      className="py-20 bg-gray-20 dark:bg-gray-700"
      style={{
        backgroundImage: `url('/insights.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-lg p-6 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">
            <span className="text-black">
              {t("home.section.insights.title.part1")}
            </span>{" "}
            <span className="text-orange-500 dark:text-white">
              {t("home.section.insights.title.part2")}
            </span>
          </h2>
          <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
            {t("home.section.insights.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((insight, index) => (
            <Card
              key={index}
              className="text-center bg-white/50 dark:bg-black/40 border-none backdrop-blur-sm rounded-lg p-6"
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">{insight.icon}</div>
                <Counter
                  end={insight.value}
                  suffix={insight.suffix}
                  className="text-4xl font-bold text-orange-500 dark:text-white mb-2"
                />
                <h3 className="text-xl text-black dark:text-white font-bold mb-3">
                  {insight.title}
                </h3>
                <p className="text-orange-500 dark:text-white">
                  {insight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
