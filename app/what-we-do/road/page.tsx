"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollIndicator } from "@/components/scroll-indicator";
import {
  Signal,
  Wrench,
  Users,
  CheckCircle,
  Shield,
  Zap,
  Settings,
  Truck,
} from "lucide-react";
import { useTranslation } from "@/components/translation-context";

export default function RoadPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      icon: Signal,
      title: t("road.solutions.signaling.title"),
      description: t("road.solutions.signaling.description"),
    },
    {
      icon: Settings,
      title: t("road.solutions.control.title"),
      description: t("road.solutions.control.description"),
    },
    {
      icon: Wrench,
      title: t("road.solutions.maintenance.title"),
      description: t("road.solutions.maintenance.description"),
    },
    {
      icon: Users,
      title: t("road.solutions.passenger.title"),
      description: t("road.solutions.passenger.description"),
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: t("road.benefits.safety.title"),
      description: t("road.benefits.safety.description"),
    },
    {
      icon: Zap,
      title: t("road.benefits.efficiency.title"),
      description: t("road.benefits.efficiency.description"),
    },
    {
      icon: CheckCircle,
      title: t("road.benefits.reliability.title"),
      description: t("road.benefits.reliability.description"),
    },
    {
      icon: Settings,
      title: t("road.benefits.integration.title"),
      description: t("road.benefits.integration.description"),
    },
  ];

  const technology = [
    {
      description: t("road.technology.systems.description"),
    },
    {
      description: t("road.technology.control.description"),
    },
    {
      description: t("road.technology.monitoring.description"),
    },
    {
      description: t("road.technology.maintenance.description"),
    },
    {
      description: t("road.technology.integration.description"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-0 pb-0 h-[500px]"
        style={{
          backgroundImage: "url(/pages/road.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center ">
            <h1 className="text-orange-400 text-4xl lg:text-6xl font-bold mb-6 flex items-center justify-center">
              <Truck className=" w-12 h-12 lg:w-16 lg:h-16" />
              &nbsp;{t("road.hero.title")}
            </h1>

            <p className="text-xl items-center justify-center mx-auto bg-black/20 backdrop-blur-sm rounded-lg p-6">
              {t("road.hero.subtitle")}
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("road.solutions.title")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("road.solutions.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("road.benefits.title")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("road.benefits.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("road.technology.title")}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t("road.technology.description")}
              </p>
              <div className="space-y-4">
                {technology.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>{feature.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/pages/road.jpg"
                alt="Tecnologia ferroviária"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
