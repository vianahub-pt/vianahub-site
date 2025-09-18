"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { useTranslation } from "@/components/translation-context";
import { Search, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function opportunitiesPage() {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const opportunities = [
    {
      id: t("opportunities.softwareEngineer.id"),
      type: t("opportunities.softwareEngineer.type"),
      title: t("opportunities.softwareEngineer.title"),
      summary: t("opportunities.softwareEngineer.summary"),
      description: t("opportunities.softwareEngineer.description"),
      employmentType: t("opportunities.softwareEngineer.employmentType"),
      seniorityLevel: t("opportunities.softwareEngineer.seniorityLevel"),
      workplaceType: t("opportunities.softwareEngineer.workplaceType"),
      location: {
        city: t("opportunities.location.softwareEngineer.city"),
        state: t("opportunities.location.softwareEngineer.state"),
        country: t("opportunities.location.softwareEngineer.country"),
        remote: t("opportunities.location.softwareEngineer.remote"),
      },
      requirements: [
        t("opportunities.softwareEngineer.requirements.0"),
        t("opportunities.softwareEngineer.requirements.1"),
      ],
      responsibilities: [
        t("opportunities.softwareEngineer.responsibilities.0"),
        t("opportunities.softwareEngineer.responsibilities.1"),
      ],
      skills: [
        t("opportunities.softwareEngineer.skills.0"),
        t("opportunities.softwareEngineer.skills.1"),
      ],
      languages: [
        t("opportunities.softwareEngineer.languages.0"),
        t("opportunities.softwareEngineer.languages.1"),
      ],
      benefits: [
        t("opportunities.softwareEngineer.benefits.0"),
        t("opportunities.softwareEngineer.benefits.1"),
      ],
      cultureFit: [
        t("opportunities.softwareEngineer.cultureFit.0"),
        t("opportunities.softwareEngineer.cultureFit.1"),
      ],
      postedAt: t("opportunities.softwareEngineer.postedAt"),
      validUntil: t("opportunities.softwareEngineer.validUntil"),
    },
  ];

  const technologies = [
    { description: t("opportunities.technology.modernStack") },
    { description: t("opportunities.technology.collaboration") },
    { description: t("opportunities.technology.learning") },
    { description: t("opportunities.technology.innovation") },
    { description: t("opportunities.technology.flexibility") },
  ];

  interface CardProps {
    service: {
      icon: React.ComponentType<any>;
      title: string;
      description: string;
    };
    index: number;
  }

  interface Opportunity {
    id: string;
    type: string;
    title: string;
    summary: string;
    description: string;
    employmentType: string;
    seniorityLevel: string;
    workplaceType: string;
    companyLogo: string;
    location: {
      city: string;
      state: string;
      country: string;
      remote: string;
    };
    requirements: string[];
    responsibilities: string[];
    skills: string[];
    languages: string[];
    benefits: string[];
    cultureFit: string[];
    postedAt: string;
    validUntil: string;
  }
  interface OpportunityCardProps {
    opportunity: Opportunity;
    index: number;
  }

  return (
    <section className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-0 pb-0 h-[600px]"
        style={{
          backgroundImage: "url(/pages/hero-opportunities.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-5xl mx-auto text-center bg-black/50 backdrop-blur-sm rounded-lg p-6">
            <h1 className="text-orange-400 text-orange-400 text-4xl lg:text-6xl font-bold mb-6 flex items-center justify-center">
              <Search
                className=" w-12 h-12 lg:w-16 lg:h-16"
                style={{ color: "#FFFFFF" }}
              />
              &nbsp;{t("opportunities.hero.title")}
            </h1>

            <p className="text-xl items-center justify-center mx-auto ">
              {t("opportunities.hero.subtitle")}
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Parallax Section */}
      <section
        className="relative h-[500px] overflow-hidden"
        style={{
          backgroundImage: "url('/pages/parallax-opportunities.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </section>

    </section>
  );
}
