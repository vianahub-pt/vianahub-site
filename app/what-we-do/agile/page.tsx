"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
  Workflow,
} from "lucide-react";
import { useTranslation } from "@/components/translation-context";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { motion } from "framer-motion";

export default function AgilePageContent() {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const processes = [
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

  const technologies = [
    { description: t("agile.technology.scrum.description") },
    { description: t("agile.technology.kanban.description") },
    { description: t("agile.technology.xp.description") },
    { description: t("agile.technology.lean.description") },
    { description: t("agile.technology.safe.description") },
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ delay: index * 0.2, duration: 0.6 }}
        className="h-full"
      >
        <Card className="text-center bg-orange-400 hover:scale-105 transition-all duration-300 relative border-none h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <Icon className="h-12 w-12 text-white dark:text-black mx-auto mb-4" />
            <h3 className="text-black dark:text-white text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-md text-white dark:text-black mt-auto">
              {service.description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  function ProcessesCard({ service, index }: CardProps) {
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
        <Card className="bg-viana-white dark:bg-gray-700 hover:scale-105 transition-all duration-300 relative border-none h-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-orange-400">
              <service.icon className="w-8 h-8 text-white dark:text-black" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-black dark:text-orange-400">
              {service.title}
            </h3>
            <p className="text-md text-orange-400 dark:text-white">
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
        className="relative pt-0 pb-0 h-[650px]"
        style={{
          backgroundImage: "url(/pages/hero-agile.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="bg-white/50 dark:bg-black/50 text-orange-400 dark:text-orange-400 border border-white rounded-lg p-6 ">
            <h1 className="text-orange-400 text-orange-400 text-4xl lg:text-6xl font-bold flex items-center justify-center text-shadow">
              <Workflow className="h-12 w-12 stroke-white dark:stroke-gray-400 icon-shadow " />
              &nbsp;{t("agile.hero.title")}
            </h1>

            <p className="py-7 block text-2xl text-center text-white dark:text-orange-400 text-shadow">
              {t("agile.hero.subtitle")}
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
                {t("agile.benefits.title.part1")}
              </span>{" "}
              <span className="text-orange-400">
                {t("agile.benefits.title.part2")}
              </span>
            </h2>

            <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
              {t("agile.benefits.subtitle")}
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
          backgroundImage: "url('/pages/parallax-agile.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-black">
                {t("agile.process.title.part1")}
              </span>{" "}
              <span className="text-orange-400">
                {t("agile.process.title.part2")}
              </span>
            </h2>

            <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
              {t("agile.process.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {processes.map((service, index) => (
              <ProcessesCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-gray-200 dark:bg-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-black">
                  {t("agile.technology.title.part1")}
                </span>{" "}
                <span className="text-orange-400">
                  {t("agile.technology.title.part2")}
                </span>
              </h2>

              <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
                {t("agile.technology.subtitle")}
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
                    src="/pages/technology-agile.jpg"
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
            {t("agile.cta.title")}
          </h2>
          <p className="text-lg text-gray-900 dark:text-white max-w-2xl mx-auto">
            {t("agile.cta.subtitle")}
          </p>
          <div className="my-8"></div>
          <Button
            size="lg"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 button-shadow"
            onClick={() => router.push("/contact")}
          >
            {t("agile.cta.button")}
          </Button>
        </div>
      </section>
    </div>
  );
}
