"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/components/translation-context";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, Eye, Info } from "lucide-react";

export default function AboutPageContent() {
  const { t } = useTranslation();
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (videoRef.current && !videoError) {
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
        } catch (error) {
          console.warn(
            "Vídeo não pôde ser reproduzido automaticamente:",
            error
          );
          setVideoError(true);
        }
      };

      // Tentar reproduzir o vídeo após um pequeno delay
      const timer = setTimeout(playVideo, 100);

      return () => clearTimeout(timer);
    }
  }, [videoError]);

  const mvvs = [
    {
      icon: Target,
      title: t("about.mvv.mission.title"),
      description: t("about.mvv.mission.description"),
    },
    {
      icon: Eye,
      title: t("about.mvv.vision.title"),
      description: t("about.mvv.vision.description"),
    },
    {
      icon: Users,
      title: t("about.mvv.values.title"),
      description: t("about.mvv.values.description"),
    },
  ];

  const teamMembers = [
    {
      name: "Dener Viana",
      role: "CEO & Founder",
      image: "/dener-viana.jpg",
      bio: "Visionário em tecnologia com mais de 15 anos de experiência em desenvolvimento de software e liderança de equipas.",
    },
    {
      name: "Ana Costa",
      role: "CTO",
      image: "/ana-costa.jpg",
      bio: "Especialista em arquitetura de sistemas e inovação tecnológica, liderando a estratégia técnica da empresa.",
    },
    {
      name: "Carlos Oliveira",
      role: "Lead Developer",
      image: "/carlos-oliveira.jpg",
      bio: "Desenvolvedor full-stack experiente, especializado em React, Node.js e arquiteturas cloud-native.",
    },
    {
      name: "Maria Silva",
      role: "UX/UI Designer",
      image: "/maria-silva.jpg",
      bio: "Designer criativa focada em experiências de utilizador excepcionais e interfaces intuitivas.",
    },
    {
      name: "João Santos",
      role: "Project Manager",
      image: "/joao-santos.jpg",
      bio: "Gestor de projetos certificado PMP, especializado em metodologias ágeis e entrega de valor.",
    },
    {
      name: "Lúcia Ferreira",
      role: "Quality Assurance",
      image: "/lucia-ferreira.jpg",
      bio: "Especialista em garantia de qualidade e testes automatizados, assegurando a excelência dos nossos produtos.",
    },
  ];

  const technologies = [
    { description: t("about.technology.website.description") },
    { description: t("about.technology.development.description") },
    { description: t("about.technology.outsourcing.description") },
    { description: t("about.technology.consultancy.description") },
  ];

  interface CardProps {
    service: {
      icon: React.ComponentType<any>;
      title: string;
      description: string;
    };
    index: number;
  }

  function MvvsCard({ service, index }: CardProps) {
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
            <Icon className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-gray-900 text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-md text-white mt-auto">{service.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[650px] overflow-hidden"
        style={{
          backgroundImage: "url(/pages/hero-about.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="bg-white/50 dark:bg-black/50 text-orange-400 rounded-lg p-6 max-w-full overflow-hidden">
            <h1 className="text-orange-400 text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-shadow break-words">
              <Info className="inline h-10 w-10 sm:h-12 sm:w-12 stroke-white dark:stroke-gray-400 icon-shadow mr-2 align-middle" />
              {t("about.hero.title")}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-center text-white dark:text-orange-400 text-shadow">
              {t("about.hero.subtitle")}
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* History Section */}
      <section className="py-20 px-4 bg-orange-200 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-black dark:text-yellow-500">
                {t("about.history.title.part1")}
              </span>{" "}
              <span className="text-orange-400">
                {t("about.history.title.part2")}
              </span>
            </h2>

            <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
              {t("about.history.subtitle")}
            </p>
          </div>
          <div className="grid lg:grid-cols-1 gap-4 items-center">
            {/* Texto */}
            <div className="font-kurale text-xl text-justify text-black dark:text-orange-400">
              <p>{t("about.history.p1")}</p>
              <p className="py-2">{t("about.history.p2")}</p>
              <p className="py-2">{t("about.history.p3")}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 items-center">
            <div className="flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 2, y: 0 }}
                transition={{ duration: 3.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <div className="aspect-square relative">
                  <Image
                    src="/pages/about-history-dener.png"
                    alt="Dener Viana"
                    fill
                  />
                </div>
                <div className="border-t border-4 bg-orange-400 border-orange-400 dark:border-white"></div>
              </motion.div>
            </div>
            <div className="flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 2, y: 0 }}
                transition={{ duration: 3.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <div className="aspect-square relative">
                  <Image
                    src="/pages/about-history-tati.png"
                    alt="Tatiana Viana"
                    fill
                  />
                </div>
                <div className="border-t border-4 bg-orange-400 border-orange-400 dark:border-white"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section
        className="relative h-[500px] overflow-hidden"
        style={{
          backgroundImage: "url('/pages/parallax-about.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 bg-white dark:bg-gray-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="!text-orange-400 text-3xl md:text-4xl font-bold mb-4">
              {t("about.mission.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {mvvs.map((service, index) => (
              <MvvsCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-yellow-50 dark:bg-gray-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
                {t("about.technology.title")}
              </h2>
              <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
                {t("about.technology.subtitle")}
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
                <div className="aspect-[16/9] w-full max-w-3xl mx-auto rounded-lg card-shadow">
                  <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg card-shadow"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onError={() => setVideoError(true)}
                  >
                    <source
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-hero-QF1p4zm3ekF8rOyXzcuiTVontRDngQ.mp4"
                      type="video/mp4"
                    />
                  </video>
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
            {t("about.cta.title")}
          </h2>
          <p className="text-lg text-gray-900 dark:text-white max-w-2xl mx-auto">
            {t("about.cta.subtitle")}
          </p>
          <div className="my-8"></div>
          <Button
            size="lg"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 button-shadow"
            onClick={() => router.push("/contact")}
            aria-label={t("about.cta.button") || "Contact Us"}
          >
            {t("about.cta.button")}
          </Button>
        </div>
      </section>
    </div>
  );
}
