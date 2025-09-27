"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, Battery, Zap, BarChart3, CheckCircle } from "lucide-react";
import { useTranslation } from "@/components/translation-context";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { motion } from "framer-motion";

export default function SolarEnergyPage() {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: t("solarEnergy.benefits.card1.title"),
      subtitle: t("solarEnergy.benefits.card1.subtitle"),
      description: t("solarEnergy.benefits.card1.description"),
    },
    {
      title: t("solarEnergy.benefits.card2.title"),
      subtitle: t("solarEnergy.benefits.card2.subtitle"),
      description: t("solarEnergy.benefits.card2.description"),
    },
    {
      title: t("solarEnergy.benefits.card3.title"),
      subtitle: t("solarEnergy.benefits.card3.subtitle"),
      description: t("solarEnergy.benefits.card3.description"),
    },
  ];

  const services = [
    {
      icon: Sun,
      title: t("solarEnergy.services.panels.title"),
      description: t("solarEnergy.services.panels.description"),
    },
    {
      icon: Battery,
      title: t("solarEnergy.services.systems.title"),
      description: t("solarEnergy.services.systems.description"),
    },
    {
      icon: Zap,
      title: t("solarEnergy.services.microgeneration.title"),
      description: t("solarEnergy.services.microgeneration.description"),
    },
    {
      icon: BarChart3,
      title: t("solarEnergy.services.monitoring.title"),
      description: t("solarEnergy.services.monitoring.description"),
    },
  ];

  const technologies = [
    { description: t("solarEnergy.technology.panels") },
    { description: t("solarEnergy.technology.inverters") },
    { description: t("solarEnergy.technology.monitoring") },
    { description: t("solarEnergy.technology.maintenance") },
    { description: t("solarEnergy.technology.certification") },
  ];

  interface BenefitsCardProps {
    service: {
      title: string;
      subtitle: string;
      description: string;
    };
    index: number;
  }
  interface CardProps {
    service: {
      icon: React.ComponentType<any>;
      title: string;
      description: string;
    };
    index: number;
  }

  function BenefitsCard({ service, index }: BenefitsCardProps) {
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
        <Card className="bg-orange-200 hover:shadow-lg transition-shadow border-none h-full">
          <CardContent className="p-6 text-center">
            <div className="text-4xl lg:text-5xl font-bold text-orange-400 mb-2 drop-shadow-lg">
              {service.title}
            </div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">
              {service.subtitle}
            </h3>
            <p className="!text-gray-900">{service.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  function ServicesCard({ service, index }: CardProps) {
    const Icon = service.icon; // ← correto
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
        <Card className="bg-orange-200 dark:bg-gray-200 hover:scale-105 transition-all duration-300 relative border-none h-full">
          <CardContent className="p-8 text-center">
            <div className="bg-yellow-50 dark:bg-black w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full ">
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[650px] overflow-hidden"
        style={{
          backgroundImage: "url(/pages/hero-solarEnergy.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="bg-white/50 dark:bg-black/50 text-orange-400 rounded-lg p-6 max-w-full overflow-hidden">
            <h1 className="text-orange-400 text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-shadow break-words">
              <Sun className="inline h-10 w-10 sm:h-12 sm:w-12 stroke-white dark:stroke-gray-400 icon-shadow mr-2 align-middle" />
              {t("solarEnergy.hero.title")}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-center text-white dark:text-orange-400 text-shadow">
              {t("solarEnergy.hero.subtitle")}
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-200 dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-black dark:text-yellow-500">
                {t("solarEnergy.benefits.title.part1")}
              </span>{" "}
              <span className="text-orange-400">
                {t("solarEnergy.benefits.title.part2")}
              </span>
            </h2>

            <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
              {t("solarEnergy.benefits.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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
          backgroundImage: "url('/pages/parallax-solarEnergy.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-yellow-50 dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-center text-black dark:text-white">
                {t("solarEnergy.services.title.part1")}
              </span>{" "}
              <span className="text-center text-orange-400">
                {t("solarEnergy.services.title.part2")}
              </span>
            </h2>

            <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
              {t("solarEnergy.services.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2  gap-8">
            {services.map((service, index) => (
              <ServicesCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
                {t("solarEnergy.technology.title")}
              </h2>
              <p className="text-lg dark:text-white text-gray-900 max-w-2xl mx-auto">
                {t("solarEnergy.technology.subtitle")}
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
                    src="/pages/technology-solarEnergy.jpg"
                    alt="Solar Energy Technology"
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
            {t("solarEnergy.cta.title")}
          </h2>
          <p className="text-lg text-gray-900 dark:text-white max-w-2xl mx-auto">
            {t("solarEnergy.cta.subtitle")}
          </p>
          <div className="my-8"></div>
          <Button
            size="lg"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 button-shadow"
            onClick={() => router.push("/contact")}
          >
            {t("solarEnergy.cta.button")}
          </Button>
        </div>
      </section>
    </div>
  );
}
