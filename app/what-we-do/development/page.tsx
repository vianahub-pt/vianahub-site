"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Code,
  Code2,
  CheckCircle,
  BrainCircuit,
  Database,
  Globe,
  Smartphone,
  GitMerge,
  Bot,
  ShieldCheck,
  Cloud,
  BarChart3,
  LayoutDashboard,
  Headphones,
  ServerCog,
  ShoppingCart,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "@/components/translation-context";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { motion } from "framer-motion";

export default function DevelopmentPageContent() {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const carousels = [
    {
      title: t("development.carousel.web.title"),
      image: "/pages/website-template.jpg",
      icon: Globe,
    },
    {
      title: t("development.carousel.mobile.title"),
      image: "/pages/mobile-template.jpg",
      icon: Smartphone,
    },
    {
      title: t("development.carousel.integration.title"),
      image: "/pages/admin-template.jpg",
      icon: Code,
    },
    {
      title: t("development.carousel.automation.title"),
      image: "/pages/integration-template.jpg",
      icon: Database,
    },
  ];

  const services = [
    {
      icon: Globe,
      title: t("development.services.web.title"),
      description: t("development.services.web.description"),
    },
    {
      icon: Smartphone,
      title: t("development.services.mobile.title"),
      description: t("development.services.mobile.description"),
    },
    {
      icon: GitMerge,
      title: t("development.services.integration.title"),
      description: t("development.services.integration.description"),
    },
    {
      icon: Bot,
      title: t("development.services.automation.title"),
      description: t("development.services.automation.description"),
    },
    {
      icon: ShieldCheck,
      title: t("development.services.security.title"),
      description: t("development.services.security.description"),
    },
    {
      icon: Cloud,
      title: t("development.services.cloud.title"),
      description: t("development.services.cloud.description"),
    },
    {
      icon: BarChart3,
      title: t("development.services.business.title"),
      description: t("development.services.business.description"),
    },
    {
      icon: LayoutDashboard,
      title: t("development.services.design.title"),
      description: t("development.services.design.description"),
    },
    {
      icon: Headphones,
      title: t("development.services.support.title"),
      description: t("development.services.support.description"),
    },
    {
      icon: ShoppingCart,
      title: t("development.services.e-commerce.title"),
      description: t("development.services.e-commerce.description"),
    },
    {
      icon: BrainCircuit,
      title: t("development.services.ai.title"),
      description: t("development.services.ai.description"),
    },
    {
      icon: ServerCog,
      title: t("development.services.devops.title"),
      description: t("development.services.devops.description"),
    },
  ];

  const technologies = [
    { description: t("development.technology.website.description") },
    { description: t("development.technology.api.description") },
    { description: t("development.technology.erp.description") },
    { description: t("development.technology.crm.description") },
    { description: t("development.technology.bpm.description") },
  ];

  interface CardProps {
    service: {
      icon: React.ComponentType<any>;
      title: string;
      description: string;
    };
    index: number;
  }

  function ServiceCard({ service, index }: CardProps) {
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[650px] overflow-hidden"
        style={{
          backgroundImage: "url(/pages/hero-development.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="bg-white/50 dark:bg-black/50 text-orange-400 rounded-lg p-6 max-w-full overflow-hidden">
            <h1 className="text-orange-400 text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-shadow break-words">
              <Code2 className="inline h-10 w-10 sm:h-12 sm:w-12 stroke-white dark:stroke-gray-400 icon-shadow mr-2 align-middle" />
              {t("development.hero.title")}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-center text-white dark:text-orange-400 text-shadow">
              {t("development.hero.subtitle")}
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-gray-20 dark:bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-black dark:text-yellow-500">
                {t("development.carousel.title.part1")}
              </span>{" "}
              <span className="text-orange-400">
                {t("development.carousel.title.part2")}
              </span>
            </h2>

            <p className="text-lg text-orange-400 dark:text-white max-w-2xl mx-auto">
              {t("development.carousel.subtitle")}
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: true,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {carousels.map((carousel, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="h-full bg-gray-100">
                      <CardContent className="p-0">
                        <div className="relative h-64 overflow-hidden rounded-t-lg">
                          <Image
                            src={carousel.image || "/placeholder.svg"}
                            alt={carousel.title}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <carousel.icon className="h-6 w-6 text-primary" />
                            <h3 className="text-xl font-semibold">
                              {carousel.title}
                            </h3>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <div
        className="relative h-[500px] overflow-hidden"
        style={{
          backgroundImage: "url('/pages/parallax-development.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </div>

      {/* Service Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-black">
                {t("development.services.title.part1")}
              </span>{" "}
              <span className="text-orange-400">
                {t("development.services.title.part2")}
              </span>
            </h2>
            <p className="text-lg text-orange-400 dark:text-white max-w-2xl mx-auto">
              {t("development.services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-gray-20 dark:bg-gray-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-black">
                  {t("development.technology.title.part1")}
                </span>{" "}
                <span className="text-orange-400">
                  {t("development.technology.title.part2")}
                </span>
              </h2>

              <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
                {t("development.technology.subtitle")}
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
                    src="/pages/technology-development.jpg"
                    alt="Development Technology"
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
          <h2 className="text-black dark:text-orange-400 text-3xl md:text-4xl font-bold mb-6">
            {t("development.cta.title")}
          </h2>
          <p className="text-lg text-orange-400 dark:text-white max-w-2xl mx-auto">
            {t("development.cta.subtitle")}
          </p>
          <div className="my-8"></div>
          <Button
            size="lg"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 button-shadow"
            onClick={() => router.push("/contact")}
          >
            {t("development.cta.button")}
          </Button>
        </div>
      </section>
    </div>
  );
}
