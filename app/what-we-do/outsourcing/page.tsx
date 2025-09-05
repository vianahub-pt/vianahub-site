"use client";

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Globe,
  DollarSign,
  Clock,
  Shield,
  Award,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { useTranslation } from "@/components/translation-context";
import { ScrollIndicator } from "@/components/scroll-indicator";

export default function OutsourcingPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Users className="h-8 w-8 text-viana-orange" />,
      title: t("outsourcing.services.dedicated.title"),
      description: t("outsourcing.services.dedicated.description"),
    },
    {
      icon: <Globe className="h-8 w-8 text-viana-orange" />,
      title: t("outsourcing.services.offshore.title"),
      description: t("outsourcing.services.offshore.description"),
    },
    {
      icon: <Clock className="h-8 w-8 text-viana-orange" />,
      title: t("outsourcing.services.support.title"),
      description: t("outsourcing.services.support.description"),
    },
    {
      icon: <Award className="h-8 w-8 text-viana-orange" />,
      title: t("outsourcing.services.specialists.title"),
      description: t("outsourcing.services.specialists.description"),
    },
  ];

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-viana-orange" />,
      title: t("outsourcing.benefits.costs.title"),
      description: t("outsourcing.benefits.costs.description"),
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-viana-orange" />,
      title: t("outsourcing.benefits.scalability.title"),
      description: t("outsourcing.benefits.scalability.description"),
    },
    {
      icon: <Shield className="h-6 w-6 text-viana-orange" />,
      title: t("outsourcing.benefits.quality.title"),
      description: t("outsourcing.benefits.quality.description"),
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-viana-orange" />,
      title: t("outsourcing.benefits.focus.title"),
      description: t("outsourcing.benefits.focus.description"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-0 pb-0 h-[500px]"
        style={{
          backgroundImage: "url(/pages/outsourcing.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center ">
            <h1 className="text-orange-400 text-4xl lg:text-6xl font-bold mb-6 flex items-center justify-center">
              <Users className=" w-12 h-12 lg:w-16 lg:h-16" />
              &nbsp;{t("outsourcing.hero.title")}
            </h1>

            <p className="text-xl items-center justify-center mx-auto bg-black/20 backdrop-blur-sm rounded-lg p-6">
              {t("outsourcing.hero.subtitle")}
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>
      {/* Benefits Section */}
      <section className="py-20 bg-white/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
              {t("outsourcing.benefits.title")}
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              {t("outsourcing.benefits.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-none"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-orange-400 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-viana-gray text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
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
          backgroundImage: "url('/pages/outsourcing-parallax.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </div>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
              {t("outsourcing.services.title")}
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              {t("outsourcing.services.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow border-none"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-orange-400 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-viana-gray">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
              {t("outsourcing.process.title")}
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              {t("outsourcing.process.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-viana-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-orange-400 mb-3">
                {t("outsourcing.process.analysis.title")}
              </h3>
              <p className="text-viana-gray">
                {t("outsourcing.process.analysis.description")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-viana-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-orange-400 mb-3">
                {t("outsourcing.process.selection.title")}
              </h3>
              <p className="text-viana-gray">
                {t("outsourcing.process.selection.description")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-viana-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-orange-400 mb-3">
                {t("outsourcing.process.integration.title")}
              </h3>
              <p className="text-viana-gray">
                {t("outsourcing.process.integration.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/90">
        <div className="text-center mb-16">
          <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
            {t("outsourcing.cta.title")}
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            {t("outsourcing.cta.subtitle")}
          </p>
          <div className="my-8"></div>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-viana-orange/90 text-white font-semibold px-8 py-3"
          >
            {t("outsourcing.cta.button")}
          </Button>
        </div>
      </section>
    </div>
  );
}
