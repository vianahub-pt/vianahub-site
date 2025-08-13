"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useTranslation } from "@/contexts/translation-context"

export function IndustrySelector() {
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  const industries = [
    {
      title: t("industries.healthcare"),
      description: t("industries.healthcareDesc"),
      href: "/industry/healthcare",
      image: "/pages/healthcare.jpg",
    },
    {
      title: t("industries.education"),
      description: t("industries.educationDesc"),
      href: "/industry/education",
      image: "/pages/education.jpg",
    },
    {
      title: t("industries.financial"),
      description: t("industries.financialDesc"),
      href: "/industry/financial",
      image: "/pages/financial.jpg",
    },
    {
      title: t("industries.retail"),
      description: t("industries.retailDesc"),
      href: "/industry/retail",
      image: "/pages/retail.jpg",
    },
    {
      title: t("industries.manufacturing"),
      description: t("industries.manufacturingDesc"),
      href: "/industry/manufacturing",
      image: "/pages/manufacturing.jpg",
    },
    {
      title: t("industries.government"),
      description: t("industries.governmentDesc"),
      href: "/industry/government",
      image: "/pages/government.jpg",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 p-6 w-[600px]">
      {industries.map((industry, index) => (
        <div
          key={index}
          className="group cursor-pointer rounded-lg border p-4 hover:bg-accent transition-colors"
          onClick={() => handleNavigation(industry.href)}
        >
          <div className="flex items-center space-x-3">
            <Image
              src={industry.image || "/placeholder.svg"}
              alt={industry.title}
              width={40}
              height={40}
              className="rounded-md"
            />
            <div>
              <h3 className="font-medium group-hover:text-accent-foreground">{industry.title}</h3>
              <p className="text-sm text-muted-foreground">{industry.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
