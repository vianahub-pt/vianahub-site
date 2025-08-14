"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/components/translation-context"

const projects = [
  {
    id: 1,
    title: "projects.ecommerce.title",
    category: "projects.ecommerce.category",
    description: "projects.ecommerce.description",
    image: "/ecommerce-platform-concept.png",
    url: "https://example-ecommerce.com",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "projects.hospital.title",
    category: "projects.hospital.category",
    description: "projects.hospital.description",
    image: "/hospital-management-system-interface.png",
    url: "https://example-hospital.com",
    tech: ["Vue.js", "Python", "PostgreSQL"],
  },
  {
    id: 3,
    title: "projects.delivery.title",
    category: "projects.delivery.category",
    description: "projects.delivery.description",
    image: "/food-delivery-app-screen.png",
    url: "https://example-delivery.com",
    tech: ["React Native", "Firebase", "Node.js"],
  },
  {
    id: 4,
    title: "projects.banking.title",
    category: "projects.banking.category",
    description: "projects.banking.description",
    image: "/banking-system.png",
    url: "https://example-banking.com",
    tech: ["Angular", "Java", "Oracle"],
  },
  {
    id: 5,
    title: "projects.education.title",
    category: "projects.education.category",
    description: "projects.education.description",
    image: "/educational-platform.png",
    url: "https://example-education.com",
    tech: ["Next.js", "WebRTC", "MySQL"],
  },
  {
    id: 6,
    title: "projects.logistics.title",
    category: "projects.logistics.category",
    description: "projects.logistics.description",
    image: "/logistics-system.png",
    url: "https://example-logistics.com",
    tech: ["React", "Express", "Redis"],
  },
  {
    id: 7,
    title: "projects.streaming.title",
    category: "projects.streaming.category",
    description: "projects.streaming.description",
    image: "/streaming-platform.png",
    url: "https://example-streaming.com",
    tech: ["Vue.js", "AWS", "Elasticsearch"],
  },
  {
    id: 8,
    title: "projects.crm.title",
    category: "projects.crm.category",
    description: "projects.crm.description",
    image: "/crm-system.png",
    url: "https://example-crm.com",
    tech: ["React", "Django", "PostgreSQL"],
  },
]

export function ProjectsSection() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const goToProject = (index: number) => {
    setCurrentIndex(index)
  }

  const handleProjectClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">
            <span className="text-gray-900">{t("projects.title.part1")}</span>{" "}
            <span className="text-orange-500">{t("projects.title.part2")}</span>
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">{t("projects.subtitle")}</p>
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
                            <div className="bg-viana-orange text-white px-3 py-1 text-sm font-medium">
                              {t(project.category)}
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 flex flex-col justify-center bg-white">
                          <h3 className="text-2xl font-bold text-viana-black mb-4">{t(project.title)}</h3>
                          <p className="text-viana-gray mb-6 leading-relaxed">{t(project.description)}</p>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech, index) => (
                              <span
                                key={index}
                                className="!bg-viana-orange/10 text-viana-orange px-3 py-1 text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <Button
                            className="!bg-viana-orange hover:bg-viana-yellow text-white hover:text-viana-black transition-colors w-fit"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleProjectClick(project.url)
                            }}
                          >
                            {t("projects.viewProject")}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-viana-orange text-viana-orange hover:text-viana-orange z-10"
            onClick={prevProject}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-viana-orange text-viana-orange hover:text-viana-orange z-10"
            onClick={nextProject}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" className="!bg-viana-orange hover:!bg-viana-yellow text-white hover:text-viana-black">
            {t("projects.cta")}
          </Button>
        </div>
      </div>
    </section>
  )
}
