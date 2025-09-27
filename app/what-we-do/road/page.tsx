"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
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
import { motion } from "framer-motion";

export default function RoadPage() {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const technologies = [
    { description: t("road.technology.systems.description") },
    { description: t("road.technology.control.description") },
    { description: t("road.technology.monitoring.description") },
    { description: t("road.technology.maintenance.description") },
    { description: t("road.technology.integration.description") },
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
        initial={{ opacity: 0, x: -100 }} // começa 100px à esquerda
        whileInView={{ opacity: 1, x: 0 }} // desliza para a posição normal
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          delay: index * 0.15, // animação em cascata
          duration: 0.8,
          type: "spring",
          stiffness: 120,
        }}
        className="h-full"
      >
        <Card className="bg-black dark:bg-orange-400 text-center hover:scale-105 transition-all duration-300 relative border-none h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <Icon className="h-12 w-12 text-white dark:text-white mx-auto mb-4" />
            <h3 className="text-orange-500 dark:text-black text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-md text-white dark:text-white mt-auto">
              {service.description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  function SolutionsCard({ service, index }: CardProps) {
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
        <Card className="bg-orange-400 dark:bg-black hover:scale-105 transition-all duration-300 relative border-none card-shadow h-full">
          <CardContent className="p-6 text-center">
            <div className="bg-white dark:bg-white w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full">
              <service.icon className="w-8 h-8 text-orange-400 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white dark:text-orange-400">
              {service.title}
            </h3>
            <p className="text-white dark:text-orange-400">
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
        className="relative h-[650px] overflow-hidden"
        style={{
          backgroundImage: "url(/pages/hero-road.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="bg-white/50 dark:bg-black/50 text-orange-400 rounded-lg p-6 max-w-full overflow-hidden">
            <h1 className="text-orange-400 text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-shadow break-words">
              <Truck className="inline h-10 w-10 sm:h-12 sm:w-12 stroke-white dark:stroke-gray-400 icon-shadow mr-2 align-middle" />
              {t("road.hero.title")}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-center text-white dark:text-orange-400 text-shadow">
              {t("road.hero.subtitle")}
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-black dark:text-yellow-500">
                {t("road.benefits.title.part1")}
              </span>{" "}
              <span className="text-orange-400">
                {t("road.benefits.title.part2")}
              </span>
            </h2>

            <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
              {t("road.benefits.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
          backgroundImage: "url('/pages/parallax-road.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-gray-200 dark:bg-gray-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-black">
                {t("road.solutions.title.part1")}
              </span>{" "}
              <span className="text-orange-400">
                {t("road.solutions.title.part2")}
              </span>
            </h2>

            <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
              {t("road.solutions.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {solutions.map((service, index) => (
              <SolutionsCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-orange-400 dark:text-orange-400 text-3xl md:text-4xl font-bold mb-6">
                {t("road.technology.title")}
              </h2>
              <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
                {t("road.technology.subtitle")}
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
                    src="/pages/technology-road.jpg"
                    alt="Road Technology"
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
      <section className="py-20 bg-yellow-100 dark:bg-gray-600">
        <div className="text-center mb-16">
          <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
            {t("road.cta.title")}
          </h2>
          <p className="text-lg text-gray-900 dark:text-white max-w-2xl mx-auto">
            {t("road.cta.subtitle")}
          </p>
          <div className="my-8"></div>
          <Button
            size="lg"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 button-shadow"
            onClick={() => router.push("/contact")}
          >
            {t("road.cta.button")}
          </Button>
        </div>
      </section>
    </div>
  );
}
