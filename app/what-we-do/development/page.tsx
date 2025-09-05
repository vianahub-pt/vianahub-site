"use client";

import { useState, useEffect } from "react";
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

function DevelopmentPageContent() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!mounted) {
    return null;
  }

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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-0 pb-0 h-[500px]"
        style={{
          backgroundImage: "url(/pages/development.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center ">
            <h1 className="text-orange-400 text-4xl lg:text-6xl font-bold mb-6 flex items-center justify-center">
              <Code className=" w-12 h-12 lg:w-16 lg:h-16" />
              &nbsp;{t("development.hero.title")}
            </h1>

            <p className="text-xl items-center justify-center mx-auto bg-black/20 backdrop-blur-sm rounded-lg p-6">
              {t("development.hero.subtitle")}
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
              {t("development.carousel.title")}
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              {t("development.carousel.subtitle")}
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
          backgroundImage: "url('/pages/development-parallax.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </div>

      {/* Service Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="block text-orange-400 text-3xl md:text-4xl font-bold mb-4">
              {t("development.services.title")}
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              {t("development.services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/90">
        <div className="text-center mb-16">
          <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
            {t("development.cta.title")}
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            {t("development.cta.subtitle")}
          </p>
          <div className="my-8"></div>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-viana-orange/90 text-white font-semibold px-8 py-3"
          >
            {t("development.cta.button")}
          </Button>
        </div>
      </section>
    </div>
  );
}

export default function DevelopmentPage() {
  return <DevelopmentPageContent />;
}
