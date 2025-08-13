import type { Metadata } from "next"
import { TranslationProvider } from "@/contexts/translation-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Engenharia Ferroviária - Soluções Tecnológicas | VianaHub",
  description:
    "Soluções tecnológicas especializadas para o setor ferroviário. Sistemas de controle, monitoramento e gestão de infraestrutura ferroviária.",
}

export default function RailwayPage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <main>
          <div className="relative h-[400px] bg-gradient-to-r from-green-600 to-green-800">
            <Image src="/pages/railway.jpg" alt="Engenharia Ferroviária" fill className="object-cover opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Engenharia Ferroviária</h1>
                <p className="text-xl md:text-2xl">Soluções tecnológicas para infraestrutura ferroviária</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            <Breadcrumb
              items={[
                { label: "Início", href: "/" },
                { label: "Engenharia", href: "/" },
                { label: "Ferroviária", href: "/engineering/railway" },
              ]}
            />

            <div className="max-w-4xl mx-auto">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Tecnologia para o Setor Ferroviário</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Desenvolvemos soluções tecnológicas avançadas para modernizar e otimizar a infraestrutura ferroviária,
                  garantindo segurança e eficiência.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Nossas Soluções</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Sistemas de Controle</h4>
                    <p className="text-gray-600">
                      Sistemas avançados de controle de tráfego ferroviário para máxima segurança e eficiência.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Monitoramento</h4>
                    <p className="text-gray-600">
                      Soluções de monitoramento em tempo real da infraestrutura e equipamentos ferroviários.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Manutenção Preditiva</h4>
                    <p className="text-gray-600">
                      Sistemas inteligentes que preveem necessidades de manutenção, reduzindo custos e tempo de
                      inatividade.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Gestão de Ativos</h4>
                    <p className="text-gray-600">
                      Plataformas para gestão eficiente de ativos ferroviários e otimização de recursos.
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
