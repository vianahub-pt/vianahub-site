"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com gestão de produtos, pagamentos e analytics",
    image: "/ecommerce-platform-concept.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Healthcare Management",
    description: "Sistema de gestão hospitalar com prontuário eletrônico e agendamento",
    image: "/hospital-management-system-interface.png",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Educational Platform",
    description: "Plataforma de ensino online com videoaulas, exercícios e gamificação",
    image: "/educational-platform.png",
    tags: ["Vue.js", "Python", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t("projects.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("projects.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-viana-orange transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">{project.description}</CardDescription>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-viana-orange hover:text-white hover:border-viana-orange bg-transparent"
          >
            {t("projects.viewAll")}
          </Button>
        </div>
      </div>
    </section>
  )
}
