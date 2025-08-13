import type { Metadata } from "next"
import { TranslationProvider } from "@/contexts/translation-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Engenharia Rodoviária - Soluções Tecnológicas | VianaHub",
  description:
    "Soluções tecnológicas para infraestrutura rodoviária. Sistemas inteligentes de gestão de tráfego e monitoramento de estradas.",
}

export default function RoadPage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <main>
          <div className="relative h-[400px] bg-gradient-to-r from-gray-600 to-gray-800">
            <Image src="/pages/road.jpg" alt="Engenharia Rodoviária" fill className="object-cover opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Engenharia Rodoviária</h1>
                <p className="text-xl md:text-2xl">Soluções tecnológicas para infraestrutura rodoviária</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            <Breadcrumb
              items={[
                { label: "Início", href: "/" },
                { label: "Engenharia", href: "/" },
                { label: "Rodoviária", href: "/engineering/road" },
              ]}
            />

            <div className="max-w-4xl mx-auto">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Tecnologia para Infraestrutura Rodoviária</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Desenvolvemos soluções tecnológicas inovadoras para modernizar a infraestrutura rodoviária e melhorar
                  a segurança no trânsito.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Nossas Soluções</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Gestão de Tráfego</h4>
                    <p className="text-gray-600">
                      Sistemas inteligentes de gestão de tráfego para otimizar o fluxo de veículos.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Monitoramento</h4>
                    <p className="text-gray-600">Soluções de monitoramento em tempo real das condições das estradas.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Segurança</h4>
                    <p className="text-gray-600">
                      Sistemas de segurança avançados para prevenção de acidentes rodoviários.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Manutenção</h4>
                    <p className="text-gray-600">
                      Plataformas para gestão eficiente da manutenção de infraestrutura rodoviária.
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
