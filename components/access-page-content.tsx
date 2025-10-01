"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Key, Fingerprint, Eye, ArrowRight } from "lucide-react";
import { useTranslation } from "@/components/translation-context";

export function AccessPageContent() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Fingerprint,
      title: t("access.features.biometrics.title"),
      description: t("access.features.biometrics.description"),
    },
    {
      icon: Key,
      title: t("access.features.rfid.title"),
      description: t("access.features.rfid.description"),
    },
    {
      icon: Eye,
      title: t("access.features.monitoring.title"),
      description: t("access.features.monitoring.description"),
    },
    {
      icon: Shield,
      title: t("access.features.levels.title"),
      description: t("access.features.levels.description"),
    },
  ];

  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-viana-orange to-viana-yellow">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-viana-white mb-6">
            {t("access.hero.title")}
          </h1>
          <p className="text-xl text-viana-white/90 max-w-3xl mx-auto mb-8">
            {t("access.hero.subtitle")}
          </p>
          <Button
            size="lg"
            className="bg-viana-white text-viana-orange hover:bg-viana-yellow hover:text-viana-black"
            aria-label="Hero Access Page"
          >
            {t("access.hero.button")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-viana-black text-center mb-16">
            {t("access.features.title")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-orange/500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-viana-white" />
                  </div>
                  <CardTitle className="text-viana-black">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-viana-gray">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
