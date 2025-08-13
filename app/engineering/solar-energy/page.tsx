import type { Metadata } from "next"
import { TranslationProvider } from "@/contexts/translation-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Energia Solar - Soluções Tecnológicas | VianaHub",
  description:
    "Soluções tecnológicas para energia solar. Sistemas de monitoramento, gestão e otimização de instalações fotovoltaicas.",
}

export default function SolarEnergyPage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <main>
          <div className="relative h-[400px] bg-gradient-to-r from-yellow-600 to-orange-600">
            <Image src="/pages/solar-energy.jpg" alt="Energia Solar" fill className="object-cover opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Energia Solar</h1>
                <p className="text-xl md:text-2xl">Soluções tecnológicas para energia renovável</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            <Breadcrumb
              items={[
                { label: "Início", href: "/" },
                { label: "Engenharia", href: "/" },
                { label: "Energia Solar", href: "/engineering/solar-energy" },
              ]}
            />

            <div className="max-w-4xl mx-auto">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Tecnologia para Energia Solar</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Desenvolvemos soluções tecnológicas avançadas para otimizar a geração, monitoramento e gestão de
                  energia solar.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Nossas Soluções</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Monitoramento</h4>
                    <p className="text-gray-600">
                      Sistemas de monitoramento em tempo real da performance de instalações solares.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Otimização</h4>
                    <p className="text-gray-600">
                      Algoritmos inteligentes para maximizar a eficiência da geração solar.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Gestão de Energia</h4>
                    <p className="text-gray-600">
                      Plataformas para gestão inteligente do consumo e armazenamento de energia.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Manutenção Preditiva</h4>
                    <p className="text-gray-600">
                      Sistemas que preveem necessidades de manutenção em instalações solares.
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
