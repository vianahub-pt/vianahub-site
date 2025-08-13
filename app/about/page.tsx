import type { Metadata } from "next"
import { TranslationProvider } from "@/contexts/translation-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutPageClient } from "./AboutPageClient"

export const metadata: Metadata = {
  title: "Sobre Nós - VianaHub | Soluções Tecnológicas Inovadoras",
  description:
    "Conheça a VianaHub, nossa história, missão e a equipe que transforma ideias em soluções digitais de alta qualidade.",
}

export default function AboutPage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <AboutPageClient />
        <Footer />
      </div>
    </TranslationProvider>
  )
}
