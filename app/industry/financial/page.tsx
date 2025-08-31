import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FinancialPageContent } from "@/components/financial-page-content"

export const metadata: Metadata = {
  title: "Setor Financeiro - Soluções Tecnológicas | VianaHub",
  description:
    "Soluções tecnológicas seguras e inovadoras para o setor financeiro. Sistemas bancários, fintech e gestão de riscos.",
}

export default function FinancialPage() {
  return (
    <div className="min-h-screen bg-viana-white">
      <Navbar />
      <main>
        <FinancialPageContent />
      </main>
      <Footer />
    </div>
  )
}
