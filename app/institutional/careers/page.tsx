"use client";

import type React from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { useTranslation } from "@/components/translation-context";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { GraduationCap } from "lucide-react";
import {
  CheckCircle,
  Laptop,
  Building2,
  Puzzle,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CareersPage() {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: Laptop,
      title: t("careers.benefits.professional.title"),
      description: t("careers.benefits.professional.description"),
    },
    {
      icon: Building2,
      title: t("careers.benefits.innovative.title"),
      description: t("careers.benefits.innovative.description"),
    },
    {
      icon: Puzzle,
      title: t("careers.benefits.flexibility.title"),
      description: t("careers.benefits.flexibility.description"),
    },
    {
      icon: BarChart3,
      title: t("careers.benefits.diversity.title"),
      description: t("careers.benefits.diversity.description"),
    },
  ];

  const testimonials = [
    {
      name: t("careers.testimonials.sandra.name"),
      position: t("careers.testimonials.sandra.position"),
      testimony: t("careers.testimonials.sandra.testimony"),
    },
    {
      name: t("careers.testimonials.nuno.name"),
      position: t("careers.testimonials.nuno.position"),
      testimony: t("careers.testimonials.nuno.description"),
    },
    {
      name: t("careers.testimonials.pedro.name"),
      position: t("careers.testimonials.pedro.position"),
      testimony: t("careers.testimonials.pedro.description"),
    },
    {
      name: t("careers.testimonials.ines.name"),
      position: t("careers.testimonials.ines.position"),
      testimony: t("careers.testimonials.ines.description"),
    },
  ];

  const technologies = [
    { description: t("careers.technology.modernStack") },
    { description: t("careers.technology.collaboration") },
    { description: t("careers.technology.learning") },
    { description: t("careers.technology.innovation") },
    { description: t("careers.technology.flexibility") },
  ];

  interface CardProps {
    service: {
      icon: React.ComponentType<any>;
      title: string;
      description: string;
    };
    index: number;
  }

  interface TestimonialsCardProps {
    service: {
      name: string;
      position: string;
      testimony: string;
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
              <service.icon className="text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">
              {service.title}
            </h3>
            <p className="!text-gray-900">{service.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  function TestimonialsCard({ service, index }: TestimonialsCardProps) {
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
            <div className="text-xl font-bold mb-4 text-gray-900">
              {service.name}
            </div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">
              {service.position}
            </h3>
            <p className="!text-gray-900">{service.testimony}</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <section className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[650px] overflow-hidden"
        style={{
          backgroundImage: "url(/pages/hero-careers.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="bg-white/50 dark:bg-black/50 text-orange-500 rounded-lg p-6 max-w-full overflow-hidden">
            <h1 className="text-orange-500 text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-shadow break-words">
              <GraduationCap className="inline h-10 w-10 sm:h-12 sm:w-12 stroke-white dark:stroke-gray-400 icon-shadow mr-2 align-middle" />
              {t("careers.hero.title")}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-center text-white dark:text-orange-500 text-shadow">
              {t("careers.hero.subtitle")}
            </p>
            <div className="my-8 text-center">
              <Button
                size="lg"
                className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 button-shadow"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/jobs/search/?currentJobId=4197940301&keywords=vianahub&origin=JOBS_HOME_SEARCH_BUTTON",
                    "_blank"
                  )
                }
                aria-label="Explore job openings at VianaHub on LinkedIn"
              >
                {t("careers.cta.button")}
              </Button>
            </div>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-black dark:text-yellow-500">
                {t("careers.benefits.title.part1")}
              </span>{" "}
              <span className="text-orange-500">
                {t("careers.benefits.title.part2")}
              </span>
            </h2>

            <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
              {t("careers.benefits.subtitle")}
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
          backgroundImage: "url('/pages/parallax-careers.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-orange-100 dark:bg-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="!text-orange-500 text-3xl md:text-4xl font-bold mb-4">
              {t("careers.testimonials.title")}
            </h2>
            <p className="text-xl text-black dark:text-white">
              {t("careers.testimonials.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {testimonials.map((service, index) => (
              <TestimonialsCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-orange-100 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-orange-500 text-3xl md:text-4xl font-bold mb-6">
                {t("careers.technology.title")}
              </h2>
              <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
                {t("careers.technology.subtitle")}
              </p>
              <br />
              <div className="space-y-4">
                {technologies.map((feature, index) => (
                  <div
                    key={index}
                    className="text-orange-500 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="">{feature.description}</span>
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
                <div className="w-[400px] flex-shrink-0">
                  <div className="aspect-square relative">
                    <Image
                      src="/pages/technology-careers.png"
                      alt="careers Technology"
                      fill
                      className="rounded-all card-shadow object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-100 dark:bg-gray-600">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-3xl md:text-4xl font-bold mb-6">
            {t("careers.cta.title")}
          </h2>
          <p className="text-lg text-gray-900 dark:text-white max-w-2xl mx-auto">
            {t("careers.cta.subtitle")}
          </p>
          <div className="my-8"></div>
          <Button
            size="lg"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 button-shadow"
            onClick={() => router.push("/contact")}
          >
            {t("careers.cta.button")}
          </Button>
        </div>
      </section>
    </section>
  );
}
