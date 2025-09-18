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
  Code2,
  CheckCircle,
  BrainCircuit,
  Smartphone,
  GitMerge,
  ShieldCheck,
  BarChart3,
  Headphones,
  HeartPulse,
  Brain,
  Microscope,
  SmilePlus,
  Bone,
  Users,
  Hospital,
  FileText,
  ClipboardList,
  FlaskConical,
  Heart,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "@/components/translation-context";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { motion } from "framer-motion";

export default function HealthcarePageContent() {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const carousels = [
    {
      icon: HeartPulse,
      title: t("healthcare.carousel.cardiology.title"),
      image: "/pages/carousels-cardiology.jpg",
    },
    {
      icon: Brain,
      title: t("healthcare.carousel.neurology.title"),
      image: "/pages/carousels-neurology.jpg",
    },
    {
      icon: Microscope,
      title: t("healthcare.carousel.oncology.title"),
      image: "/pages/carousels-oncology.jpg",
    },
    {
      icon: SmilePlus,
      title: t("healthcare.carousel.psychiatry.title"),
      image: "/pages/carousels-psychiatry.jpg",
    },
    {
      icon: Bone,
      title: t("healthcare.carousel.orthopedics.title"),
      image: "/pages/carousels-orthopedics.jpg",
    },
  ];

  const services = [
    {
      icon: Users,
      title: t("healthcare.services.outsourcing.title"),
      description: t("healthcare.services.outsourcing.description"),
    },
    {
      icon: Hospital,
      title: t("healthcare.services.his.title"),
      description: t("healthcare.services.his.description"),
    },
    {
      icon: FileText,
      title: t("healthcare.services.pep.title"),
      description: t("healthcare.services.pep.description"),
    },
    {
      icon: BarChart3,
      title: t("healthcare.services.ads.title"),
      description: t("healthcare.services.ads.description"),
    },
    {
      icon: ClipboardList,
      title: t("healthcare.services.gcr.title"),
      description: t("healthcare.services.gcr.description"),
    },
    {
      icon: FlaskConical,
      title: t("healthcare.services.sgl.title"),
      description: t("healthcare.services.sgl.description"),
    },
    {
      icon: BrainCircuit,
      title: t("healthcare.services.iada.title"),
      description: t("healthcare.services.iada.description"),
    },
    {
      icon: Smartphone,
      title: t("healthcare.services.amp.title"),
      description: t("healthcare.services.amp.description"),
    },
    {
      icon: ShieldCheck,
      title: t("healthcare.services.sipd.title"),
      description: t("healthcare.services.sipd.description"),
    },
    {
      icon: Code2,
      title: t("healthcare.services.odsm.title"),
      description: t("healthcare.services.odsm.description"),
    },
    {
      icon: Headphones,
      title: t("healthcare.services.osti.title"),
      description: t("healthcare.services.osti.description"),
    },
    {
      icon: GitMerge,
      title: t("healthcare.services.isi.title"),
      description: t("healthcare.services.isi.description"),
    },
  ];

  const technologies = [
    { description: t("healthcare.technology.website.description") },
    { description: t("healthcare.technology.api.description") },
    { description: t("healthcare.technology.erp.description") },
    { description: t("healthcare.technology.crm.description") },
    { description: t("healthcare.technology.bpm.description") },
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
            <Icon className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-gray-900 text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-md mt-auto">{service.description}</p>
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
          backgroundImage: "url(/pages/hero-healthcare.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center bg-black/50 backdrop-blur-sm rounded-lg p-6">
            <h1 className="text-orange-400 text-4xl lg:text-6xl font-bold mb-6 flex items-center justify-center">
              <Heart
                className=" w-12 h-12 lg:w-16 lg:h-16"
                style={{ color: "#EC4899" }}
              />
              &nbsp;{t("healthcare.hero.title")}
            </h1>

            <p className="text-xl items-center justify-center mx-auto ">
              {t("healthcare.hero.subtitle")}
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
              {t("healthcare.carousel.title")}
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              {t("healthcare.carousel.subtitle")}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
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
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="h-full">
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
          backgroundImage: "url('/pages/parallax-healthcare.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </div>

      {/* Service Section */}
      <section className="py-20 bg-white/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="block text-orange-400 text-3xl md:text-4xl font-bold mb-4">
              {t("healthcare.services.title")}
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              {t("healthcare.services.subtitle")}
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
                {t("healthcare.technology.title")}
              </h2>
              <p className="text-lg text-gray-900 max-w-2xl mx-auto">
                {t("healthcare.technology.subtitle")}
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
                    src="/pages/technology-healthcare.jpg"
                    alt="healthcare Technology"
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
            {t("healthcare.cta.title")}
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            {t("healthcare.cta.subtitle")}
          </p>
          <div className="my-8"></div>
          <Button
            size="lg"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3"
            onClick={() => router.push("/contact")}
          >
            {t("healthcare.cta.button")}
          </Button>
        </div>
      </section>
    </div>
  );
}
