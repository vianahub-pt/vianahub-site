import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TranslationProvider, useTranslation } from "@/components/translation-context"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Educação - Soluções Tecnológicas para o Ensino | VianaHub",
  description:
    "Soluções tecnológicas inovadoras para o setor educacional. Plataformas de e-learning, gestão escolar e ferramentas pedagógicas.",
}

function Breadcrumb({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <a
              href={item.href}
              className={`${
                index === items.length - 1 ? "text-gray-500 cursor-default" : "text-blue-600 hover:text-blue-800"
              } ml-1 text-sm font-medium md:ml-2`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

function EducationPageContent() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-viana-white">
      <Navbar />
      <main>
        <div className="relative h-[400px] bg-gradient-to-r from-blue-600 to-purple-600">
          <Image src="/pages/education.jpg" alt="Educação" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("education.hero.title")}</h1>
              <p className="text-xl md:text-2xl">{t("education.hero.subtitle")}</p>
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
              <h2 className="text-3xl font-bold mb-6">{t("education.innovation.title")}</h2>
              <p className="text-lg text-gray-600 mb-6">{t("education.innovation.description")}</p>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-6">{t("education.solutions.title")}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-semibold mb-4">{t("education.solutions.elearning.title")}</h4>
                  <p className="text-gray-600">{t("education.solutions.elearning.description")}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-semibold mb-4">{t("education.solutions.management.title")}</h4>
                  <p className="text-gray-600">{t("education.solutions.management.description")}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-semibold mb-4">{t("education.solutions.pedagogical.title")}</h4>
                  <p className="text-gray-600">{t("education.solutions.pedagogical.description")}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-semibold mb-4">{t("education.solutions.analytics.title")}</h4>
                  <p className="text-gray-600">{t("education.solutions.analytics.description")}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function EducationPage() {
  return (
    <TranslationProvider>
      <EducationPageContent />
    </TranslationProvider>
  )
}
