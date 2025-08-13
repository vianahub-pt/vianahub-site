import type { Metadata } from "next"
import { TranslationProvider } from "@/contexts/translation-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Governo - Soluções Tecnológicas para o Setor Público | VianaHub",
  description:
    "Soluções tecnológicas especializadas para o setor público e governamental. Sistemas seguros, eficientes e transparentes.",
}

export default function GovernmentPage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <main>
          <div className="relative h-[400px] bg-gradient-to-r from-blue-600 to-blue-800">
            <Image src="/pages/government.jpg" alt="Governo" fill className="object-cover opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Setor Governamental</h1>
                <p className="text-xl md:text-2xl">Soluções tecnológicas para o setor público</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            <Breadcrumb
              items={[
                { label: "Início", href: "/" },
                { label: "Indústrias", href: "/" },
                { label: "Governo", href: "/industry/government" },
              ]}
            />

            <div className="max-w-4xl mx-auto">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Transformação Digital no Setor Público</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Desenvolvemos soluções tecnológicas que modernizam os serviços públicos, aumentam a transparência e
                  melhoram a experiência dos cidadãos.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Nossas Soluções</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Portais de Serviços</h4>
                    <p className="text-gray-600">
                      Plataformas digitais que centralizam serviços públicos, facilitando o acesso dos cidadãos.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Sistemas de Gestão</h4>
                    <p className="text-gray-600">
                      Ferramentas para otimizar processos internos e melhorar a eficiência administrativa.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Transparência</h4>
                    <p className="text-gray-600">
                      Soluções que promovem a transparência e accountability no setor público.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Segurança</h4>
                    <p className="text-gray-600">
                      Implementação de medidas de segurança robustas para proteger dados sensíveis.
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
