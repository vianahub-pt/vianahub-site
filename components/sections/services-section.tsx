"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Shield, Zap, Layout, Link } from "lucide-react";
import { useTranslation } from "@/components/translation-context";

const services = [
  {
    icon: Code,
    titleKey: "home.section.services.web.title",
    descriptionKey: "home.section.services.web.description",
  },
  {
    icon: Smartphone,
    titleKey: "home.section.services.mobile.title",
    descriptionKey: "home.section.services.mobile.description",
  },
  {
    icon: Layout,
    titleKey: "home.section.services.landing.title",
    descriptionKey: "home.section.services.landing.description",
  },
  {
    icon: Link,
    titleKey: "home.section.services.integration.title",
    descriptionKey: "home.section.services.integration.description",
  },
  {
    icon: Shield,
    titleKey: "home.section.services.security.title",
    descriptionKey: "home.section.services.security.description",
  },
  {
    icon: Zap,
    titleKey: "home.section.services.automation.title",
    descriptionKey: "home.section.services.automation.description",
  },
];

export function ServicesSection() {
  const { t } = useTranslation();
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger staggered animation
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-20 dark:bg-gray-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-black">
              {t("home.section.services.title.part1")}
            </span>{" "}
            <span className="text-orange-400">
              {t("home.section.services.title.part2")}
            </span>
          </h2>
          <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
            {t("home.section.services.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={index}
                className="w-full bg-orange-200 dark:bg-gray-500 shadow-2xl border-none"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4x1 text-orange-400 dark:text-orange-400 mb-4 flex items-center justify-center ">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-semibold text-orange-400 dark:text-orange-400 mb-4">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-md text-black dark:text-white mb-6 leading-relaxed">
                    {t(service.descriptionKey)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
