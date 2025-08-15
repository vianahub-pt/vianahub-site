import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Manufatura - Soluções Tecnológicas para Indústria | VianaHub",
  description:
    "Soluções tecnológicas para o setor de manufatura. Automação industrial, IoT e sistemas de gestão de produção.",
}

export default function ManufacturingPage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <main>
          <div className="relative h-[400px] bg-gradient-to-r from-orange-600 to-red-600">
            <Image src="/pages/manufacturing.jpg" alt="Manufatura" fill className="object-cover opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Setor de Manufatura</h1>
                <p className="text-xl md:text-2xl">Tecnologia para a indústria 4.0</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            <Breadcrumb
              items={[
                { label: "Início", href: "/" },
                { label: "Indústrias", href: "/" },
                { label: "Manufatura", href: "/industry/manufacturing" },
              ]}
            />

            <div className="max-w-4xl mx-auto">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Transformação Digital na Manufatura</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Desenvolvemos soluções tecnológicas que modernizam processos industriais e impulsionam a eficiência
                  produtiva.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Nossas Soluções</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Automação Industrial</h4>
                    <p className="text-gray-600">Sistemas de automação para otimizar processos de produção.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">IoT Industrial</h4>
                    <p className="text-gray-600">
                      Soluções IoT para monitoramento e controle de equipamentos industriais.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Gestão de Produção</h4>
                    <p className="text-gray-600">Sistemas para planejamento e controle eficiente da produção.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Qualidade</h4>
                    <p className="text-gray-600">
                      Ferramentas para controle de qualidade e rastreabilidade de produtos.
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
