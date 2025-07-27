"use client"

import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/contexts/translation-context"

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Language" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "GraphQL", category: "API" },
  { name: "REST API", category: "API" },
  { name: "Flutter", category: "Mobile" },
  { name: "React Native", category: "Mobile" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
]

export function TechnologiesSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t("technologies.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("technologies.subtitle")}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-6 py-3 text-lg font-medium hover:bg-viana-orange hover:text-white hover:border-viana-orange transition-all duration-300 cursor-pointer"
            >
              {tech.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
