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

      {/* Opportunities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Título e Subtítulo */}
          <div className="text-center mb-12">
            <h2 className="block text-orange-400 text-3xl md:text-4xl font-bold mb-4">
              {t("opportunities.title")}
            </h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              {t("opportunities.subtitle")}
            </p>
          </div>

          {/* Grid de Oportunidades */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"></div>
        </div>
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

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-orange-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="!text-orange-400 text-3xl md:text-4xl font-bold mb-4">
              {t("opportunities.testimonials.title")}
            </h2>
            <p className="text-xl text-gray-900">
              {t("opportunities.testimonials.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"></div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
                {t("opportunities.technology.title")}
              </h2>
              <p className="text-lg text-gray-900 max-w-2xl mx-auto">
                {t("opportunities.technology.subtitle")}
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
                <div className="w-[400px] flex-shrink-0">
                  <div className="aspect-square relative">
                    <Image
                      src="/pages/technology-opportunities.png"
                      alt="opportunities Technology"
                      fill
                      className="rounded-lg shadow-2xl object-cover"
                    />
                  </div>
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
            {t("opportunities.cta.title")}
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            {t("opportunities.cta.subtitle")}
          </p>
          <div className="my-8"></div>
          <Button
            size="lg"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3"
            onClick={() => router.push("/contact")}
          >
            {t("opportunities.cta.button")}
          </Button>
        </div>
      </section>
    </section>
  );
}
