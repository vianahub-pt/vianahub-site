"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { useTranslation } from "@/components/translation-context";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import {
  Activity,
  Banknote,
  GraduationCap,
  Rocket,
  ShieldCheck,
  CheckCircle,
  Laptop,
  Building2,
  Puzzle,
  BarChart3,
  DollarSign,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FinancialPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: Laptop,
      title: t("financial.benefits.banking-systems.title"),
      description: t("financial.benefits.banking-systems.description"),
    },
    {
      icon: Building2,
      title: t("financial.benefits.fintech-solutions.title"),
      description: t("financial.benefits.fintech-solutions.description"),
    },
    {
      icon: Puzzle,
      title: t("financial.benefits.risk-management.title"),
      description: t("financial.benefits.risk-management.description"),
    },
    {
      icon: BarChart3,
      title: t("financial.benefits.accordance.title"),
      description: t("financial.benefits.accordance.description"),
    },
  ];

  const innovations = [
    {
      icon: Banknote,
      title: t("financial.innovation.banking.title"),
      description: t("financial.innovation.banking.description"),
    },
    {
      icon: Rocket,
      title: t("financial.innovation.fintech.title"),
      description: t("financial.innovation.fintech.description"),
    },
    {
      icon: Activity,
      title: t("financial.innovation.risk.title"),
      description: t("financial.innovation.risk.description"),
    },
    {
      icon: ShieldCheck,
      title: t("financial.innovation.compliance.title"),
      description: t("financial.innovation.compliance.description"),
    },
  ];

  const technologies = [
    { description: t("financial.technology.interactive") },
    { description: t("financial.technology.remote") },
    { description: t("financial.technology.management") },
    { description: t("financial.technology.online") },
    { description: t("financial.technology.planning") },
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
    const Icon = service.icon;
    return (
      <motion.div
        initial={{ opacity: 0, rotateY: -90 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          delay: index * 0.2,
          type: "spring",
          duration: 20,
          stiffness: 50,
        }}
        className="h-full"
        style={{ perspective: 1000 }}
      >
        <Card className="bg-orange-200 hover:shadow-lg transition-shadow border-none h-full">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center rounded-full">
              <service.icon className="text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">
              {service.title}
            </h3>
            <p className="!text-gray-900">{service.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  function InnovationsCard({ service, index }: CardProps) {
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
        <Card className="bg-viana-white/90 hover:scale-105 transition-all duration-300 relative border-none h-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-viana-orange/10">
              <service.icon className="w-8 h-8 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">
              {service.title}
            </h3>
            <p className="!text-gray-900">{service.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <section className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-0 pb-0 h-[600px]"
        style={{
          backgroundImage: "url(/pages/hero-financial.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center bg-black/50 backdrop-blur-sm rounded-lg p-6">
            <h1 className="text-orange-400 text-4xl lg:text-6xl font-bold mb-6 flex items-center justify-center">
              <DollarSign
                className=" w-12 h-12 lg:w-16 lg:h-16"
                style={{ color: "#22C55E" }}
              />
              &nbsp;{t("financial.hero.title")}
            </h1>

            <p className="text-xl items-center justify-center mx-auto ">
              {t("financial.hero.subtitle")}
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="block text-orange-400 text-3xl md:text-4xl font-bold mb-4">
              {t("financial.benefits.title")}
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              {t("financial.benefits.subtitle")}
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
      <section
        className="relative h-[500px] overflow-hidden"
        style={{
          backgroundImage: "url('/pages/parallax-financial.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </section>

      {/* innovation Section */}
      <section className="py-20 px-4 bg-orange-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="!text-orange-400 text-3xl md:text-4xl font-bold mb-4">
              {t("financial.innovation.title")}
            </h2>
            <p className="text-xl text-gray-900">
              {t("financial.innovation.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {innovations.map((service, index) => (
              <InnovationsCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
                {t("financial.technology.title")}
              </h2>
              <p className="text-lg text-gray-900 max-w-2xl mx-auto">
                {t("financial.technology.subtitle")}
              </p>
              <br />
              <div className="space-y-4">
                {technologies.map((feature, index) => (
                  <div
                    key={index}
                    className="text-orange-400 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 2, y: 0 }}
                transition={{ duration: 3.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <div className="aspect-[16/9] w-full max-w-3xl mx-auto">
                  <Image
                    src="/pages/technology-financial.jpg"
                    alt="financial Technology"
                    fill
                    className="rounded-lg shadow-2xl object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/90">
        <div className="text-center mb-16">
          <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
            {t("financial.cta.title")}
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            {t("financial.cta.subtitle")}
          </p>
          <div className="my-8"></div>
          <Button
            size="lg"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3"
          >
            {t("financial.cta.button")}
          </Button>
        </div>
      </section>
    </section>
  );
}
