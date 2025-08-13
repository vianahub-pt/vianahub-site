import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Setor Financeiro - Soluções Tecnológicas | VianaHub",
  description:
    "Soluções tecnológicas seguras e inovadoras para o setor financeiro. Sistemas bancários, fintech e gestão de riscos.",
}

export default function FinancialPage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <main>
          <div className="relative h-[400px] bg-gradient-to-r from-green-600 to-blue-600">
            <Image src="/pages/financial.jpg" alt="Setor Financeiro" fill className="object-cover opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Setor Financeiro</h1>
                <p className="text-xl md:text-2xl">Soluções tecnológicas para instituições financeiras</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            <Breadcrumb
              items={[
                { label: "Início", href: "/" },
                { label: "Indústrias", href: "/" },
                { label: "Financeiro", href: "/industry/financial" },
              ]}
            />

            <div className="max-w-4xl mx-auto">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Tecnologia Financeira Avançada</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Desenvolvemos soluções tecnológicas seguras e inovadoras que transformam a experiência bancária e
                  financeira.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Nossas Soluções</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Sistemas Bancários</h4>
                    <p className="text-gray-600">Plataformas bancárias completas com alta segurança e performance.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Fintech Solutions</h4>
                    <p className="text-gray-600">Soluções inovadoras para startups e empresas do setor financeiro.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Gestão de Riscos</h4>
                    <p className="text-gray-600">Sistemas avançados de análise e gestão de riscos financeiros.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Compliance</h4>
                    <p className="text-gray-600">
                      Ferramentas para garantir conformidade com regulamentações financeiras.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </TranslationProvider>
  )
}
