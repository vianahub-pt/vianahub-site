"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Banknote,
  Building2,
  Heart,
  Factory,
  ShoppingCart,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/components/translation-context";

export function IndustriesSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  useEffect(() => {
    const cardElements = sectionRef.current?.querySelectorAll(".industry-card");

    if (!cardElements) return;

    // Initialize all cards as not visible
    setVisibleCards(new Array(cardElements.length).fill(false));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(
            entry.target.getAttribute("data-index") || "0"
          );

          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          } else {
            // Reset animation when card leaves viewport
            setVisibleCards((prev) => {
              const newState = [...prev];
              newState[index] = false;
              return newState;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cardElements.forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: t("home.section.industries.education.title"),
      description: t("home.section.industries.education.description"),
      href: "/industry/education",
      backgroundImage: "/industries/digital-education.jpg",
    },
    {
      icon: <Banknote className="h-8 w-8" />,
      title: t("home.section.industries.financial.title"),
      description: t("home.section.industries.financial.description"),
      href: "/industry/financial",
      backgroundImage: "/industries/payment.jpg",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: t("home.section.industries.government.title"),
      description: t("home.section.industries.government.description"),
      href: "/industry/government",
      backgroundImage: "/industries/gov-pt.jpg",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t("home.section.industries.healthcare.title"),
      description: t("home.section.industries.healthcare.description"),
      href: "/industry/healthcare",
      backgroundImage: "/industries/digital-health.jpg",
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: t("home.section.industries.manufacturing.title"),
      description: t("home.section.industries.manufacturing.description"),
      href: "/industry/manufacturing",
      backgroundImage: "/industries/robot.jpg",
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: t("home.section.industries.retail.title"),
      description: t("home.section.industries.retail.description"),
      href: "/industry/retail",
      backgroundImage: "/industries/ecommerce.jpg",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-20 dark:bg-gray-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">
            <span className="text-black">
              {t("home.section.industries.title.part1")}
            </span>{" "}
            <span className="text-orange-700">
              {t("home.section.industries.title.part2")}
            </span>
          </h2>
          <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
            {t("home.section.industries.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <Card
                key={index}
                className="w-full bg-orange-200 dark:bg-gray-500 shadow-2xl border-none"
              >
                <CardContent
                  className="p-8 text-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)), url(${industry.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="text-4x1 text-white dark:text-white mb-4 flex items-center justify-center ">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white dark:text-white mb-4">
                    {t(industry.title)}
                  </h3>
                  <p className="text-md text-white dark:text-white mb-6 leading-relaxed">
                    {t(industry.description)}
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
