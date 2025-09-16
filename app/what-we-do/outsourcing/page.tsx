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
import { motion } from "framer-motion";

export default function OutsourcingPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Users,
      title: t("outsourcing.services.dedicated.title"),
      description: t("outsourcing.services.dedicated.description"),
    },
    {
      icon: Globe,
      title: t("outsourcing.services.offshore.title"),
      description: t("outsourcing.services.offshore.description"),
    },
    {
      icon: Clock,
      title: t("outsourcing.services.support.title"),
      description: t("outsourcing.services.support.description"),
    },
    {
      icon: Award,
      title: t("outsourcing.services.specialists.title"),
      description: t("outsourcing.services.specialists.description"),
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: t("outsourcing.benefits.costs.title"),
      description: t("outsourcing.benefits.costs.description"),
    },
    {
      icon: TrendingUp,
      title: t("outsourcing.benefits.scalability.title"),
      description: t("outsourcing.benefits.scalability.description"),
    },
    {
      icon: Shield,
      title: t("outsourcing.benefits.quality.title"),
      description: t("outsourcing.benefits.quality.description"),
    },
    {
      icon: CheckCircle,
      title: t("outsourcing.benefits.focus.title"),
      description: t("outsourcing.benefits.focus.description"),
    },
  ];

  interface CardProps {
    service: {
      icon: React.ComponentType<any>;
      title: string;
      description: string;
    };
    index: number;
  }

  function BenefitsCard({ service, index }: CardProps) {
    const Icon = service.icon; // ← correto
    return (
      <motion.div
        initial={{ opacity: 0, rotateY: -90 }} // começa "virado para a esquerda"
        whileInView={{ opacity: 1, rotateY: 0 }} // termina na posição normal
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          delay: index * 0.2,
          type: "spring",
          duration: 20,
          stiffness: 50,
        }}
        className="h-full"
        style={{ perspective: 1000 }} // necessário para o efeito 3D
      >
        <Card className="text-center hover:scale-105 transition-all duration-300 relative border-none h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-viana-orange/10">
              <Icon className="w-8 h-8 text-orange-400" /> {/* ← aqui */}
            </div>
            <h3 className="text-orange-400 text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-md mt-auto">{service.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  function ServiceCard({ service, index }: CardProps) {
    const Icon = service.icon;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          delay: index * 0.15,
          duration: 0.8,
          type: "spring",
          stiffness: 120,
        }}
        className="h-full"
      >
        <Card className="text-center bg-orange-400 hover:scale-105 transition-all duration-300 relative border-none h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <Icon className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-gray-900 text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-md mt-auto">{service.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-0 pb-0 h-[600px]"
        style={{
          backgroundImage: "url(/pages/hero-outsourcing.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center bg-black/50 backdrop-blur-sm rounded-lg p-6">
            <h1 className="text-orange-400 text-4xl lg:text-6xl font-bold mb-6 flex items-center justify-center">
              <Users
                className=" w-12 h-12 lg:w-16 lg:h-16"
                style={{ color: "#0891B2" }}
              />
              &nbsp;{t("outsourcing.hero.title")}
            </h1>

            <p className="text-xl items-center justify-center mx-auto ">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2  gap-8">
            {benefits.map((service, index) => (
              <BenefitsCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <div
        className="relative h-[500px] overflow-hidden"
        style={{
          backgroundImage: "url('/pages/parallax-outsourcing.jpg')",
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
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
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3"
          >
            {t("outsourcing.cta.button")}
          </Button>
        </div>
      </section>
    </div>
  );
}
