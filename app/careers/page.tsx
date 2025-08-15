"use client"
import { TranslationProvider } from "@/components/translation-context"
import CareersPageContent from "@/components/careers-page-content"

const positions = [
  {
    id: "fullstack-developer",
    title: "careers.positions.developer",
    description: "careers.positions.developer.description",
    location: "Remote / Porto",
    type: "Full-time",
    department: "Engineering",
    requirements: [
      "3+ anos de experiência em React e Node.js",
      "Conhecimento em TypeScript",
      "Experiência com bases de dados SQL e NoSQL",
      "Familiaridade com metodologias ágeis",
    ],
  },
  {
    id: "ux-ui-designer",
    title: "careers.positions.designer",
    description: "careers.positions.designer.description",
    location: "Híbrido / Lisboa",
    type: "Full-time",
    department: "Design",
    requirements: [
      "Portfolio sólido em design digital",
      "Proficiência em Figma e Adobe Creative Suite",
      "Experiência em design de sistemas",
      "Conhecimento em prototipagem e testes de usabilidade",
    ],
  },
  {
    id: "project-manager",
    title: "careers.positions.manager",
    description: "careers.positions.manager.description",
    location: "Porto",
    type: "Full-time",
    department: "Management",
    requirements: [
      "Certificação PMP ou equivalente",
      "5+ anos de experiência em gestão de projetos",
      "Conhecimento em metodologias ágeis (Scrum, Kanban)",
      "Excelentes competências de comunicação",
    ],
  },
]

export default function CareersPage() {
  return (
    <TranslationProvider>
      <CareersPageContent />
    </TranslationProvider>
  )
}
