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
      title: t("solar-energy.benefits.card1.title"),
      subtitle: t("solar-energy.benefits.card1.subtitle"),
      description: t("solar-energy.benefits.card1.description"),
    },
    {
      title: t("solar-energy.benefits.card2.title"),
      subtitle: t("solar-energy.benefits.card2.subtitle"),
      description: t("solar-energy.benefits.card2.description"),
    },
    {
      title: t("solar-energy.benefits.card3.title"),
      subtitle: t("solar-energy.benefits.card3.subtitle"),
      description: t("solar-energy.benefits.card3.description"),
    },
  ];

  const services = [
    {
      icon: Sun,
      title: t("solar-energy.services.panels.title"),
      description: t("solar-energy.services.panels.description"),
    },
    {
      icon: Battery,
      title: t("solar-energy.services.systems.title"),
      description: t("solar-energy.services.systems.description"),
    },
    {
      icon: Zap,
      title: t("solar-energy.services.microgeneration.title"),
      description: t("solar-energy.services.microgeneration.description"),
    },
    {
      icon: BarChart3,
      title: t("solar-energy.services.monitoring.title"),
      description: t("solar-energy.services.monitoring.title"),
    },
  ];

  const projects = [
    {
      title: t("solar-energy.projects.solar-park.title"),
      description: t("solar-energy.projects.solar-park.description"),
      image: "/pages/solar-energy-project-1.jpg",
      status: t("solar-energy.projects.solar-park.status"),
      year: t("solar-energy.projects.solar-park.year"),
      capacity: t("solar-energy.projects.solar-park.capacity"),
    },
    {
      title: t("solar-energy.projects.community.title"),
      description: t("solar-energy.projects.community.description"),
      image: "/pages/solar-energy-project-2.jpg",
      status: t("solar-energy.projects.community.status"),
      year: t("solar-energy.projects.community.year"),
      capacity: t("solar-energy.projects.community.capacity"),
    },
  ];

  const technologies = [
    { description: t("solar-energy.technology.panels") },
    { description: t("solar-energy.technology.inverters") },
    { description: t("solar-energy.technology.monitoring") },
    { description: t("solar-energy.technology.maintenance") },
    { description: t("solar-energy.technology.certification") },
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
        <Card className="bg-orange-200 hover:scale-105 transition-all duration-300 relative border-none h-full">
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
          backgroundImage: "url(/pages/hero-solarEnergy.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center bg-black/50 backdrop-blur-sm rounded-lg p-6">
            <h1 className="text-orange-400 text-4xl lg:text-6xl font-bold mb-6 flex items-center justify-center">
              <Sun
                className=" w-12 h-12 lg:w-16 lg:h-16"
                style={{ color: "#FACC15" }}
              />
              &nbsp;{t("solar-energy.hero.title")}
            </h1>

            <p className="text-xl items-center justify-center mx-auto ">
              {t("solar-energy.hero.subtitle")}
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
              {t("solar-energy.benefits.title")}
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              {t("solar-energy.benefits.subtitle")}
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
      <section className="py-20 px-4 bg-yellow-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
              {t("solar-energy.services.title")}
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              {t("solar-energy.services.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2  gap-8">
            {services.map((service, index) => (
              <ServicesCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-white/95">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-4">
              {t("solar-energy.projects.title")}
            </h2>
            <p className="text-xl text-gray-900">
              {t("solar-energy.projects.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={
                        project.status === "Concluído" ? "default" : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-orange-400 text-xl font-bold">
                      {project.title}
                    </h3>
                    <span className="text-sm text-white/90">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-white mb-4">{project.description}</p>
                </CardContent>
              </Card>
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
                {t("solar-energy.technology.title")}
              </h2>
              <p className="text-lg text-gray-900 max-w-2xl mx-auto">
                {t("solar-energy.technology.subtitle")}
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
      <section className="py-20 bg-white/90">
        <div className="text-center mb-16">
          <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
            {t("solar-energy.cta.title")}
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            {t("solar-energy.cta.subtitle")}
          </p>
          <div className="my-8"></div>
          <Button
            size="lg"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3"
            onClick={() => router.push("/contact")}
          >
            {t("solar-energy.cta.button")}
          </Button>
        </div>
      </section>
    </div>
  );
}
