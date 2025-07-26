import { CareersPageContent } from "./careers-page-content"

export default function CareersPage() {
  return <CareersPageContent />
}

// Metadados estáticos
export const metadata = {
  title: "Carreiras - VianaHub",
  description:
    "Junte-se à nossa equipe! Descubra oportunidades de carreira na VianaHub e faça parte da inovação tecnológica.",
  keywords: "carreiras, empregos, vagas, tecnologia, desenvolvimento, oportunidades",
  openGraph: {
    title: "Carreiras - VianaHub",
    description: "Junte-se à nossa equipe! Descubra oportunidades de carreira na VianaHub",
    type: "website",
    locale: "pt_PT",
  },
}
