"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/contexts/translation-context"
import { Users, ArrowRight, Briefcase } from "lucide-react"
import Link from "next/link"

export function CareersSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-viana-orange mr-4" />
                  <h2 className="text-3xl font-bold">{t("careers.title")}</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-kurale">
                  {t("careers.subtitle")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/careers">
                    <Button size="lg" className="bg-viana-orange hover:bg-viana-orange/90 text-white">
                      <Briefcase className="mr-2 h-5 w-5" />
                      {t("careers.viewPositions")}
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    {t("careers.cta")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-viana-orange to-viana-yellow p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <Users className="h-24 w-24 mx-auto mb-6 opacity-80" />
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-lg font-kurale">Profissionais Talentosos</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
