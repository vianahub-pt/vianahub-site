import type { Metadata } from "next"
import { TranslationProvider } from "@/contexts/translation-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CareersPageContent } from "./careers-page-content"

export const metadata: Metadata = {
  title: "Carreiras - Junte-se à Nossa Equipe | VianaHub",
  description:
    "Descubra oportunidades de carreira na VianaHub. Faça parte de uma equipe inovadora e ajude-nos a transformar o futuro da tecnologia.",
}

export default function CareersPage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <CareersPageContent />
        <Footer />
      </div>
    </TranslationProvider>
  )
}
