import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TranslationProvider } from "@/components/translation-context"
import { RetailPageContent } from "@/components/retail-page-content"

export const metadata: Metadata = {
  title: "Varejo - Soluções Tecnológicas para o Comércio | VianaHub",
  description: "Soluções tecnológicas para o setor de varejo. E-commerce, gestão de estoque e experiência do cliente.",
}

export default function RetailPage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <main>
          <RetailPageContent />
        </main>
        <Footer />
      </div>
    </TranslationProvider>
  )
}
