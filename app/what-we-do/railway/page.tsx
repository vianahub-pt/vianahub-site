"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Train,
  Shield,
  Zap,
  Settings,
  Users,
  CheckCircle,
  Wrench,
  Network,
} from "lucide-react";
import { useTranslation } from "@/components/translation-context";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { motion } from "framer-motion";

export default function RailwayPage() {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: Shield,
      title: t("railway.benefits.safety.title"),
      description: t("railway.benefits.safety.description"),
    },
    {
      icon: Zap,
      title: t("railway.benefits.efficiency.title"),
      description: t("railway.benefits.efficiency.description"),
    },
    {
      icon: CheckCircle,
      title: t("railway.benefits.reliability.title"),
      description: t("railway.benefits.reliability.description"),
    },
    {
      icon: Network,
      title: t("railway.benefits.integration.title"),
      description: t("railway.benefits.integration.description"),
    },
  ];

  const solutions = [
    {
      icon: Train,
      title: t("railway.solutions.signaling.title"),
      description: t("railway.solutions.signaling.description"),
    },
    {
      icon: Settings,
      title: t("railway.solutions.control.title"),
      description: t("railway.solutions.control.description"),
    },
    {
      icon: Wrench,
      title: t("railway.solutions.maintenance.title"),
      description: t("railway.solutions.maintenance.description"),
    },
    {
      icon: Users,
      title: t("railway.solutions.passenger.title"),
      description: t("railway.solutions.passenger.description"),
    },
  ];

  const technologies = [
    { description: t("railway.technology.automation") },
    { description: t("railway.technology.monitoring") },
    { description: t("railway.technology.predictive") },
    { description: t("railway.technology.integration") },
    { description: t("railway.technology.compliance") },
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

  function SolutionsCard({ service, index }: CardProps) {
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
        <Card className="bg-gray-100 dark:bg-gray-500 hover:scale-105 transition-all duration-300 relative border-none h-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-black">
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
        className="relative pt-0 pb-0 h-[600px]"
        style={{
          backgroundImage: "url(/pages/hero-railway.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0 bg-black/30" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="bg-white/50 dark:bg-black/50 text-orange-400 dark:text-orange-400 border border-white rounded-lg p-6 ">
            <h1 className="text-orange-400 text-orange-400 text-4xl lg:text-6xl font-bold flex items-center justify-center text-shadow">
              <Train className="h-12 w-12 stroke-white dark:stroke-gray-400 icon-shadow " />
              &nbsp;{t("railway.hero.title")}
            </h1>

            <p className="py-7 block text-2xl text-center text-white dark:text-orange-400 text-shadow">
              {t("railway.hero.subtitle")}
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-200 dark:bg-gray-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-black">
                {t("railway.benefits.title.part1")}
              </span>{" "}
              <span className="text-orange-400">
                {t("railway.benefits.title.part2")}
              </span>
            </h2>

            <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
              {t("railway.benefits.subtitle")}
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
          backgroundImage: "url('/pages/parallax-railway.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-black">
                {t("railway.solutions.title.part1")}
              </span>{" "}
              <span className="text-orange-400">
                {t("railway.solutions.title.part2")}
              </span>
            </h2>

            <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
              {t("railway.solutions.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2  gap-8">
            {solutions.map((service, index) => (
              <SolutionsCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 bg-gray-200 dark:bg-gray-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-black">
                {t("railway.projects.title.part1")}
              </span>{" "}
              <span className="text-orange-400">
                {t("railway.projects.title.part2")}
              </span>
            </h2>

            <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
              {t("railway.projects.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gray-800 overflow-hidden group hover:shadow-xl transition-all duration-300 border border-white">
              <div className="relative h-64">
                <Image
                  src="/pages/railway-norte.jpg?height=256&width=400&text=Northern+Line+Project"
                  alt="Northern Line Project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 hover:bg-green-600">
                    {t("railway.projects.norte.status")}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">
                    {t("railway.projects.norte.year")}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-orange-400 text-2xl font-semibold mb-3">
                  {t("railway.projects.norte.title")}
                </h3>
                <p className="text-white text-muted-foreground mb-4">
                  {t("railway.projects.norte.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 overflow-hidden group hover:shadow-xl transition-all duration-300 border border-white">
              <div className="relative h-64">
                <Image
                  src="/pages/railway-porto.jpg?height=256&width=400&text=Porto+Metro+Expansion"
                  alt="Porto Metro Expansion"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    {t("railway.projects.porto.status")}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">
                    {t("railway.projects.porto.year")}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-orange-400 text-2xl font-semibold mb-3">
                  {t("railway.projects.porto.title")}
                </h3>
                <p className="text-white text-muted-foreground mb-4">
                  {t("railway.projects.porto.description")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
                {t("railway.technology.title")}
              </h2>
              <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
                {t("railway.technology.subtitle")}
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
                    src="/pages/technology-railway.jpg"
                    alt="Railway Technology"
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
      <section className="py-20 bg-yellow-100 dark:bg-gray-500">
        <div className="text-center mb-16">
          <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
            {t("railway.cta.title")}
          </h2>
          <p className="text-lg text-gray-900 dark:text-white max-w-2xl mx-auto">
            {t("railway.cta.subtitle")}
          </p>
          <div className="my-8"></div>
          <Button
            size="lg"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 button-shadow"
            onClick={() => router.push("/contact")}
          >
            {t("railway.cta.button")}
          </Button>
        </div>
      </section>
    </div>
  );
}
