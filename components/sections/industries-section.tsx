"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/contexts/translation-context"

const industries = [
  {
    title: "industries.education.title",
    description: "industries.education.description",
    icon: "🎓",
    href: "/industry/education",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "industries.financial.title",
    description: "industries.financial.description",
    icon: "💰",
    href: "/industry/financial",
    gradient: "from-green-500 to-green-600",
  },
  {
    title: "industries.government.title",
    description: "industries.government.description",
    icon: "🏛️",
    href: "/industry/government",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    title: "industries.healthcare.title",
    description: "industries.healthcare.description",
    icon: "🏥",
    href: "/industry/healthcare",
    gradient: "from-red-500 to-red-600",
  },
  {
    title: "industries.manufacturing.title",
    description: "industries.manufacturing.description",
    icon: "🏭",
    href: "/industry/manufacturing",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    title: "industries.retail.title",
    description: "industries.retail.description",
    icon: "🛍️",
    href: "/industry/retail",
    gradient: "from-pink-500 to-pink-600",
  },
]

export function IndustriesSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-viana-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">{t("industries.title")}</h2>
          <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("industries.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-none overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`h-2 bg-gradient-to-r ${industry.gradient}`} />
                <div className="p-8">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-viana-black mb-3 group-hover:text-viana-orange transition-colors">
                    {t(industry.title)}
                  </h3>
                  <p className="text-viana-gray mb-6 leading-relaxed">{t(industry.description)}</p>
                  <Link href={industry.href}>
                    <Button
                      variant="ghost"
                      className="group-hover:bg-viana-orange group-hover:text-white transition-all duration-300 p-0 h-auto font-semibold"
                    >
                      {t("industries.cta")}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-viana-orange to-viana-yellow rounded-2xl p-8 max-w-4xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">Não encontrou seu setor?</h3>
            <p className="text-lg mb-6 opacity-90">
              Trabalhamos com diversos outros setores e sempre estamos prontos para novos desafios. Entre em contato
              conosco para discutir como podemos ajudar seu negócio.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-viana-orange hover:bg-gray-100">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
