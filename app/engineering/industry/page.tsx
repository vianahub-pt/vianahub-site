"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { useTranslation } from "@/components/translation-context";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bot,
  Cloud,
  Cpu,
  Network,
  Shield,
  CheckCircle,
  Laptop,
  BarChart3,
  Hammer,
  Factory,
} from "lucide-react";
import { motion } from "framer-motion";

export default function IndustryPage() {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Benefícios
  const benefits = [
    {
      icon: Laptop,
      title: t("Industry.benefits.operational.title"),
      description: t("industry.benefits.operational.description"),
    },
    {
      icon: BarChart3,
      title: t("industry.benefits.cost.title"),
      description: t("industry.benefits.cost.description"),
    },
    {
      icon: Shield,
      title: t("industry.benefits.security.title"),
      description: t("industry.benefits.security.description"),
    },
    {
      icon: Network,
      title: t("industry.benefits.system.title"),
      description: t("industry.benefits.system.description"),
    },
  ];

  // Inovações
  const innovations = [
    {
      icon: Cpu,
      title: t("industry.innovations.industry-4-0.title"),
      description: t("industry.innovations.industry-4-0.description"),
    },
    {
      icon: Hammer,
      title: t("industry.innovations.predictive-maintenance.title"),
      description: t("industry.innovations.predictive-maintenance.description"),
    },
    {
      icon: Cloud,
      title: t("industry.innovations.cloud-computing.title"),
      description: t("industry.innovations.cloud-computing.description"),
    },
    {
      icon: Bot,
      title: t("industry.innovations.automation-robotics.title"),
      description: t("industry.innovations.automation-robotics.description"),
    },
  ];

  // Tecnologias
  const technologies = [
    { description: t("industry.technologies.iot") },
    { description: t("industry.technologies.ai-ml") },
    { description: t("industry.technologies.big-data") },
    { description: t("industry.technologies.robotics") },
    { description: t("industry.technologies.cloud") },
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
        <Card className="bg-orange-300 hover:shadow-lg transition-shadow border-none h-full">
          <CardContent className="p-6 text-center">
            <div className="mx-auto mb-2 flex items-center justify-center">
              <service.icon className="w-12 h-12 text-white dark:text-black" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white dark:text-black">
              {service.title}
            </h3>
            <p className="text-white dark:text-black">{service.description}</p>
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
        <Card className="bg-white dark:bg-gray-200 hover:scale-105 transition-all duration-300 relative border-none h-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gray-300">
              <service.icon className="w-10 h-10 text-orange-400" />
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
          backgroundImage: "url(/pages/hero-industry.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0 bg-black/30" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="bg-white/50 dark:bg-black/50 text-orange-400 dark:text-orange-400 border border-white rounded-lg p-6 ">
            <h1 className="text-orange-400 text-orange-400 text-4xl lg:text-6xl font-bold flex items-center justify-center text-shadow">
              <Factory className="h-12 w-12 stroke-white dark:stroke-gray-400 icon-shadow " />
              &nbsp;{t("industry.hero.title")}
            </h1>

            <p className="py-7 block text-2xl text-center text-white dark:text-orange-400 text-shadow">
              {t("industry.hero.subtitle")}
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-black">
                {t("industry.benefits.title.part1")}
              </span>{" "}
              <span className="text-orange-400">
                {t("industry.benefits.title.part2")}
              </span>
            </h2>
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
          backgroundImage: "url('/pages/parallax-industry.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </section>

      {/* innovation Section */}
      <section className="py-20 px-4 bg-yellow-50 dark:bg-gray-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-black">
                {t("industry.innovation.title.part1")}
              </span>{" "}
              <span className="text-orange-400">
                {t("industry.innovation.title.part2")}
              </span>
            </h2>

            <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
              {t("industry.innovation.subtitle")}
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
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
                {t("industry.technology.title")}
              </h2>
              <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
                {t("industry.technology.subtitle")}
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

            <div className="relative ">
              <motion.div
                initial={{ opacity: 0, y: 50 }} // começa invisível e deslocada
                whileInView={{ opacity: 2, y: 0 }} // aparece e sobe
                transition={{ duration: 3.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }} // repete sempre que aparecer
              >
                <div className="aspect-[16/9] w-full max-w-3xl mx-auto rounded-lg card-shadow">
                  <Image
                    src="/pages/technology-industry.jpg"
                    alt="Government Technology"
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
            {t("industry.cta.title")}
          </h2>
          <p className="text-lg text-gray-900 dark:text-white max-w-2xl mx-auto">
            {t("industry.cta.subtitle")}
          </p>
          <div className="my-8"></div>
          <Button
            size="lg"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 button-shadow"
            onClick={() => router.push("/contact")}
          >
            {t("industry.cta.button")}
          </Button>
        </div>
      </section>
    </section>
  );
}
