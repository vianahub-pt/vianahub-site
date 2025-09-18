"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  ShieldAlert,
  Radar,
  AlarmCheck,
  Lock,
  SlidersHorizontal,
  ServerCog,
  GraduationCap,
  FileSearch,
  RefreshCcw,
  Shield,
} from "lucide-react";
import { useTranslation } from "@/components/translation-context";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { motion } from "framer-motion";

export default function CyberSecurityPageContent() {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: ShieldAlert,
      title: t("cyberSecurity.benefits.firewall.title"),
      description: t("cyberSecurity.benefits.firewall.description"),
    },
    {
      icon: Lock,
      title: t("cyberSecurity.benefits.cryptography.title"),
      description: t("cyberSecurity.benefits.cryptography.description"),
    },
    {
      icon: Radar,
      title: t("cyberSecurity.benefits.monitoring.title"),
      description: t("cyberSecurity.benefits.monitoring.description"),
    },
    {
      icon: AlarmCheck,
      title: t("cyberSecurity.benefits.incidents.title"),
      description: t("cyberSecurity.benefits.incidents.description"),
    },
  ];

  const processes = [
    {
      icon: ShieldAlert,
      title: t("cyberSecurity.process.assessment.title"),
      description: t("cyberSecurity.process.assessment.description"),
    },
    {
      icon: SlidersHorizontal,
      title: t("cyberSecurity.process.strategy.title"),
      description: t("cyberSecurity.process.strategy.description"),
    },
    {
      icon: ServerCog,
      title: t("cyberSecurity.process.implementation.title"),
      description: t("cyberSecurity.process.implementation.description"),
    },
    {
      icon: GraduationCap,
      title: t("cyberSecurity.process.training.title"),
      description: t("cyberSecurity.process.training.description"),
    },
    {
      icon: FileSearch,
      title: t("cyberSecurity.process.audit.title"),
      description: t("cyberSecurity.process.audit.description"),
    },
    {
      icon: RefreshCcw,
      title: t("cyberSecurity.process.evolution.title"),
      description: t("cyberSecurity.process.evolution.description"),
    },
  ];

  const technologies = [
    { description: t("cyberSecurity.technology.firewall.description") },
    { description: t("cyberSecurity.technology.cryptography.description") },
    { description: t("cyberSecurity.technology.siem.description") },
    { description: t("cyberSecurity.technology.edr.description") },
    { description: t("cyberSecurity.technology.iam.description") },
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
        <Card className="text-center bg-gray-200 hover:scale-105 transition-all duration-300 relative border-none h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <Icon className="h-12 w-12 text-orange-400 mx-auto mb-4" />
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-0 pb-0 h-[600px]"
        style={{
          backgroundImage: "url(/pages/hero-cyberSecurity.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-5xl mx-auto text-center bg-black/50 backdrop-blur-sm rounded-lg p-6">
            <h1 className="text-orange-400 text-orange-400 text-4xl lg:text-6xl font-bold mb-6 flex items-center justify-center">
              <Shield
                className=" w-12 h-12 lg:w-16 lg:h-16"
                style={{ color: "#FFFFFF" }}
              />
              &nbsp;{t("cyberSecurity.hero.title")}
            </h1>

            <p className="text-xl items-center justify-center mx-auto ">
              {t("cyberSecurity.hero.subtitle")}
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="!text-orange-400 text-3xl md:text-4xl font-bold mb-4">
              {t("cyberSecurity.benefits.title")}
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              {t("cyberSecurity.benefits.subtitle")}
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
          backgroundImage: "url('/pages/parallax-cyberSecurity.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-orange-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="!text-orange-400 text-3xl md:text-4xl font-bold mb-4">
              {t("cyberSecurity.process.title")}
            </h2>
            <p className="text-xl text-gray-900">
              {t("cyberSecurity.process.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {processes.map((service, index) => (
              <ProcessesCard key={index} service={service} index={index} />
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
                {t("cyberSecurity.technology.title")}
              </h2>
              <p className="text-lg text-gray-900 max-w-2xl mx-auto">
                {t("cyberSecurity.technology.subtitle")}
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
                    src="/pages/technology-cyberSecurity.jpg"
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
      <section className="py-20 bg-white/90">
        <div className="text-center mb-16">
          <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
            {t("cyberSecurity.cta.title")}
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            {t("cyberSecurity.cta.subtitle")}
          </p>
          <div className="my-8"></div>
          <Button
            size="lg"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3"
            onClick={() => router.push("/contact")}
          >
            {t("cyberSecurity.cta.button")}
          </Button>
        </div>
      </section>
    </div>
  );
}
