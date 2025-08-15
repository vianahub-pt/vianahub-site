import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Saúde - Soluções Tecnológicas para o Setor de Saúde | VianaHub",
  description:
    "Soluções tecnológicas inovadoras para o setor de saúde. Sistemas hospitalares, telemedicina e gestão de pacientes.",
}

export default function HealthcarePage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <main>
          <div className="relative h-[400px] bg-gradient-to-r from-red-600 to-pink-600">
            <Image src="/pages/healthcare.jpg" alt="Setor de Saúde" fill className="object-cover opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Setor de Saúde</h1>
                <p className="text-xl md:text-2xl">Tecnologia a serviço da saúde e bem-estar</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            <Breadcrumb
              items={[
                { label: "Início", href: "/" },
                { label: "Indústrias", href: "/" },
                { label: "Saúde", href: "/industry/healthcare" },
              ]}
            />

            <div className="max-w-4xl mx-auto">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Inovação na Área da Saúde</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Desenvolvemos soluções tecnológicas que melhoram o atendimento médico, otimizam processos hospitalares
                  e promovem o bem-estar.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Nossas Soluções</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Sistemas Hospitalares</h4>
                    <p className="text-gray-600">
                      Plataformas completas para gestão hospitalar e prontuários eletrônicos.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Telemedicina</h4>
                    <p className="text-gray-600">
                      Soluções para consultas remotas e monitoramento de pacientes à distância.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Gestão de Pacientes</h4>
                    <p className="text-gray-600">Sistemas para otimizar o atendimento e acompanhamento de pacientes.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Análise de Dados</h4>
                    <p className="text-gray-600">
                      Ferramentas de análise para apoiar decisões médicas baseadas em dados.
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
