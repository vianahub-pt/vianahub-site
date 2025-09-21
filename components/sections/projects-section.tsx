"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/components/translation-context";

const projects = [
  {
    id: 1,
    title: "home.section.projects.e-commerce.title",
    category: "home.section.projects.e-commerce.category",
    description: "home.section.projects.e-commerce.description",
    image: "/ecommerce-platform-concept.png",
    url: "https://example-ecommerce.com",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "home.section.projects.hospital.title",
    category: "home.section.projects.hospital.category",
    description: "home.section.projects.hospital.description",
    image: "/hospital-management-system-interface.png",
    url: "https://example-hospital.com",
    tech: ["Vue.js", "Python", "PostgreSQL"],
  },
  {
    id: 3,
    title: "home.section.projects.delivery.title",
    category: "home.section.projects.delivery.category",
    description: "home.section.projects.delivery.description",
    image: "/food-delivery-app-screen.png",
    url: "https://example-delivery.com",
    tech: ["React Native", "Firebase", "Node.js"],
  },
  {
    id: 4,
    title: "home.section.projects.banking.title",
    category: "home.section.projects.banking.category",
    description: "home.section.projects.banking.description",
    image: "/banking-system.png",
    url: "https://example-banking.com",
    tech: ["Angular", "Java", "Oracle"],
  },
  {
    id: 5,
    title: "home.section.projects.education.title",
    category: "home.section.projects.education.category",
    description: "home.section.projects.education.description",
    image: "/educational-platform.png",
    url: "https://example-education.com",
    tech: ["Next.js", "WebRTC", "MySQL"],
  },
  {
    id: 6,
    title: "home.section.projects.logistics.title",
    category: "home.section.projects.logistics.category",
    description: "home.section.projects.logistics.description",
    image: "/logistics-system.png",
    url: "https://example-logistics.com",
    tech: ["React", "Express", "Redis"],
  },
  {
    id: 7,
    title: "home.section.projects.streaming.title",
    category: "home.section.projects.streaming.category",
    description: "home.section.projects.streaming.description",
    image: "/streaming-platform.png",
    url: "https://example-streaming.com",
    tech: ["Vue.js", "AWS", "Elasticsearch"],
  },
  {
    id: 8,
    title: "home.section.projects.crm.title",
    category: "home.section.projects.crm.category",
    description: "home.section.projects.crm.description",
    image: "/crm-system.png",
    url: "https://example-crm.com",
    tech: ["React", "Django", "PostgreSQL"],
  },
];

export function ProjectsSection() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  const handleProjectClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-600">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">
            <span className="text-black">
              {t("home.section.projects.title.part1")}
            </span>{" "}
            <span className="text-orange-400">
              {t("home.section.projects.title.part2")}
            </span>
          </h2>
          <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
            {t("home.section.projects.subtitle")}
          </p>
        </div>

        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <Card
                    className="mx-4 cursor-pointer bg-transparent border-none rounded-none"
                    onClick={() => handleProjectClick(project.url)}
                  >
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0 h-full">
                        {/* Image Section */}
                        <div className="relative h-64 md:h-80 overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={t(project.title)}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute top-4 right-4">
                            <div className="!bg-viana-orange text-white px-3 py-1 text-sm font-medium">
                              {t(project.category)}
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 flex flex-col justify-center bg-white">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            {t(project.title)}
                          </h3>
                          <p className="text-gray-900 mb-6 leading-relaxed">
                            {t(project.description)}
                          </p>
                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech, index) => (
                              <span
                                key={index}
                                className="!bg-viana-orange/50 text-gray-900 px-3 py-1 text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "!bg-viana-orange" : "bg-gray-300"
                }`}
                onClick={() => goToProject(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
