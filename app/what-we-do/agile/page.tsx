"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Users,
  Zap,
  Award,
  CheckCircle,
  Target,
  Repeat,
  Eye,
} from "lucide-react";
import { useTranslation } from "@/components/translation-context";
import { ParallaxSection } from "@/components/parallax-section";
import { ScrollIndicator } from "@/components/scroll-indicator";

function AgilePageContent() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      window.scrollTo(0, 0);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  const benefits = [
    {
      icon: Clock,
      title: t("agile.benefits.delivery.title"),
      description: t("agile.benefits.delivery.description"),
    },
    {
      icon: Users,
      title: t("agile.benefits.collaboration.title"),
      description: t("agile.benefits.collaboration.description"),
    },
    {
      icon: Zap,
      title: t("agile.benefits.flexibility.title"),
      description: t("agile.benefits.flexibility.description"),
    },
    {
      icon: Award,
      title: t("agile.benefits.quality.title"),
      description: t("agile.benefits.quality.description"),
    },
  ];

  const process = [
    {
      icon: Target,
      title: t("agile.process.planning.title"),
      description: t("agile.process.planning.description"),
    },
    {
      icon: Repeat,
      title: t("agile.process.sprints.title"),
      description: t("agile.process.sprints.description"),
    },
    {
      icon: Eye,
      title: t("agile.process.review.title"),
      description: t("agile.process.review.description"),
    },
    {
      icon: CheckCircle,
      title: t("agile.process.delivery.title"),
      description: t("agile.process.delivery.description"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-0 pb-0 h-[500px]"
        style={{
          backgroundImage: "url(/pages/agile.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center ">
            <h1 className="text-orange-400 text-4xl lg:text-6xl font-bold mb-6 flex items-center justify-center">
              <Zap className=" w-12 h-12 lg:w-16 lg:h-16" />
              &nbsp;{t("agile.hero.title")}
            </h1>

            <p className="text-xl items-center justify-center mx-auto bg-black/20 backdrop-blur-sm rounded-lg p-6">
              {t("agile.hero.subtitle")}
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="!text-orange-400 text-3xl md:text-4xl font-bold mb-4">
              {t("agile.benefits.title")}
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              {t("agile.benefits.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="!bg-black hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-white/20">
                    <benefit.icon className="w-8 h-8 !text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-orange-400">
                    {benefit.title}
                  </h3>
                  <p className="!text-viana-white">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <div
        className="relative h-[500px] overflow-hidden"
        style={{
          backgroundImage: "url('/pages/agile-parallax.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </div>

      {/* Process Section */}
      <section className="py-20 px-4 bg-orange-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="!text-orange-400 text-3xl md:text-4xl font-bold mb-4">
              {t("agile.process.title")}
            </h2>
            <p className="text-xl text-gray-900">
              {t("agile.process.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card
                key={index}
                className="bg-viana-white/90 hover:scale-105 transition-all duration-300 relative"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-viana-orange/10">
                    <step.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-orange-400">
                    {step.title}
                  </h3>
                  <p className="!text-gray-900">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/90">
        <div className="text-center mb-16">
          <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
            {t("agile.cta.title")}
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            {t("agile.cta.subtitle")}
          </p>
          <div className="my-8"></div>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-viana-orange/90 text-white font-semibold px-8 py-3"
          >
            {t("agile.cta.button")}
          </Button>
        </div>
      </section>
    </div>
  );
}

export default function AgilePage() {
  return <AgilePageContent />;
}
