import type { Metadata } from "next"
import { TranslationProvider } from "@/contexts/translation-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"

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
          <div className="relative h-[400px] bg-gradient-to-r from-purple-600 to-pink-600">
            <Image src="/pages/retail.jpg" alt="Varejo" fill className="object-cover opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Setor de Varejo</h1>
                <p className="text-xl md:text-2xl">Transformando a experiência de compra</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            <Breadcrumb
              items={[
                { label: "Início", href: "/" },
                { label: "Indústrias", href: "/" },
                { label: "Varejo", href: "/industry/retail" },
              ]}
            />

            <div className="max-w-4xl mx-auto">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Inovação no Varejo</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Desenvolvemos soluções tecnológicas que revolucionam a experiência de compra e otimizam operações
                  comerciais.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Nossas Soluções</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">E-commerce</h4>
                    <p className="text-gray-600">Plataformas de comércio eletrônico completas e personalizadas.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Gestão de Estoque</h4>
                    <p className="text-gray-600">Sistemas inteligentes para controle e otimização de inventário.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">CRM</h4>
                    <p className="text-gray-600">
                      Ferramentas para gestão de relacionamento com clientes e fidelização.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Analytics</h4>
                    <p className="text-gray-600">Análise de dados para insights sobre comportamento do consumidor.</p>
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
