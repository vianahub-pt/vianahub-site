import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ManufacturingPageContent } from "@/components/manufacturing-page-content"

export const metadata: Metadata = {
  title: "Manufatura - Soluções Tecnológicas para Indústria | VianaHub",
  description:
    "Soluções tecnológicas para o setor de manufatura. Automação industrial, IoT e sistemas de gestão de produção.",
}

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-viana-white">
      <Navbar />
      <main>
        <ManufacturingPageContent />
      </main>
      <Footer />
    </div>
  )
}
