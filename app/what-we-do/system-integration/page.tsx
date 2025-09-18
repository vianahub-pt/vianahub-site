"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/scroll-indicator";
import {
  Network,
  Database,
  Zap,
  Shield,
  Cloud,
  Settings,
  ArrowRightLeft,
  CheckCircle,
  Link,
} from "lucide-react";
import { useTranslation } from "@/components/translation-context";
import { motion } from "framer-motion";

export default function SystemIntegrationContent() {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: ArrowRightLeft,
      title: t("systemIntegration.benefits.connectivity.title"),
      description: t("systemIntegration.benefits.connectivity.description"),
    },
    {
      icon: Zap,
      title: t("systemIntegration.benefits.automation.title"),
      description: t("systemIntegration.benefits.automation.description"),
    },
    {
      icon: Database,
      title: t("systemIntegration.benefits.data.title"),
      description: t("systemIntegration.benefits.data.description"),
    },
    {
      icon: Shield,
      title: t("systemIntegration.benefits.security.title"),
      description: t("systemIntegration.benefits.security.description"),
    },
  ];

  const solutions = [
    {
      icon: Network,
      title: t("systemIntegration.solutions.apis.title"),
      description: t("systemIntegration.solutions.apis.description"),
    },
    {
      icon: Cloud,
      title: t("systemIntegration.solutions.cloud.title"),
      description: t("systemIntegration.solutions.cloud.description"),
    },
    {
      icon: Settings,
      title: t("systemIntegration.solutions.erp.title"),
      description: t("systemIntegration.solutions.erp.description"),
    },
    {
      icon: CheckCircle,
      title: t("systemIntegration.solutions.legacy.title"),
      description: t("systemIntegration.solutions.legacy.description"),
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
        <Card className="text-center bg-yellow-50 hover:scale-105 transition-all duration-300 relative border-none h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <Icon className="h-12 w-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-gray-900 text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-orange-400 text-md mt-auto">
              {service.description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  function SolutionsCard({ service, index }: CardProps) {
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
        <Card className="bg-gray-200 text-center hover:scale-105 transition-all duration-300 relative border-none h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-viana-orange/10">
              <Icon className="w-8 h-8 text-orange-400" /> {/* ← aqui */}
            </div>
            <h3 className="text-orange-400 text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-gray-900 text-md mt-auto">
              {service.description}
            </p>
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
          backgroundImage: "url(/pages/hero-systemIntegration.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-5xl mx-auto text-center bg-black/50 backdrop-blur-sm rounded-lg p-6">
            <h1 className="text-orange-400 text-orange-400 text-4xl lg:text-6xl font-bold mb-6 flex items-center justify-center">
              <Link
                className=" w-12 h-12 lg:w-16 lg:h-16"
                style={{ color: "#FFFFFF" }}
              />
              &nbsp;{t("systemIntegration.hero.title")}
            </h1>

            <p className="text-xl items-center justify-center mx-auto ">
              {t("systemIntegration.hero.subtitle")}
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-orange-400 text-3xl lg:text-4xl font-bold mb-4">
              {t("systemIntegration.benefits.title")}
            </h2>
            <p className="text-gray-900 text-xl max-w-3xl mx-auto">
              {t("systemIntegration.benefits.subtitle")}
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
          backgroundImage: "url('/pages/parallax-systemIntegration.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-orange-400 text-3xl lg:text-4xl font-bold mb-4">
              {t("systemIntegration.solutions.title")}
            </h2>
            <p className="text-gray-900 text-xl max-w-3xl mx-auto">
              {t("systemIntegration.solutions.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2  gap-8">
            {solutions.map((service, index) => (
              <SolutionsCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/90">
        <div className="text-center mb-16">
          <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
            {t("systemIntegration.cta.title")}
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            {t("systemIntegration.cta.subtitle")}
          </p>
          <div className="my-8"></div>
          <Button
            size="lg"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3"
            onClick={() => router.push("/contact")}
          >
            {t("systemIntegration.cta.button")}
          </Button>
        </div>
      </section>
    </div>
  );
}
