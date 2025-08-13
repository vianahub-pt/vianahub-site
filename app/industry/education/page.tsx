import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Educação - Soluções Tecnológicas para o Ensino | VianaHub",
  description:
    "Soluções tecnológicas inovadoras para o setor educacional. Plataformas de e-learning, gestão escolar e ferramentas pedagógicas.",
}

export default function EducationPage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <main>
          <div className="relative h-[400px] bg-gradient-to-r from-blue-600 to-purple-600">
            <Image src="/pages/education.jpg" alt="Educação" fill className="object-cover opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Setor Educacional</h1>
                <p className="text-xl md:text-2xl">Transformando a educação através da tecnologia</p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            <Breadcrumb
              items={[
                { label: "Início", href: "/" },
                { label: "Indústrias", href: "/" },
                { label: "Educação", href: "/industry/education" },
              ]}
            />

            <div className="max-w-4xl mx-auto">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Inovação na Educação</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Desenvolvemos soluções tecnológicas que revolucionam o processo de ensino-aprendizagem, tornando a
                  educação mais acessível e eficaz.
                </p>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Nossas Soluções</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Plataformas E-Learning</h4>
                    <p className="text-gray-600">
                      Sistemas completos de ensino à distância com recursos interativos e gamificação.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Gestão Escolar</h4>
                    <p className="text-gray-600">Ferramentas para administração eficiente de instituições de ensino.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Ferramentas Pedagógicas</h4>
                    <p className="text-gray-600">Recursos digitais que apoiam professores no processo de ensino.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-4">Análise de Desempenho</h4>
                    <p className="text-gray-600">
                      Sistemas de análise que ajudam a melhorar o desempenho dos estudantes.
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
