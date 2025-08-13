"use client"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/contexts/translation-context"
import { Button } from "@/components/ui/button"

export function IndustryMobileSelector() {
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  const industries = [
    {
      title: t("industries.healthcare"),
      href: "/industry/healthcare",
    },
    {
      title: t("industries.education"),
      href: "/industry/education",
    },
    {
      title: t("industries.financial"),
      href: "/industry/financial",
    },
    {
      title: t("industries.retail"),
      href: "/industry/retail",
    },
    {
      title: t("industries.manufacturing"),
      href: "/industry/manufacturing",
    },
    {
      title: t("industries.government"),
      href: "/industry/government",
    },
  ]

  return (
    <div className="space-y-2">
      {industries.map((industry, index) => (
        <Button
          key={index}
          variant="ghost"
          className="w-full justify-start"
          onClick={() => handleNavigation(industry.href)}
        >
          {industry.title}
        </Button>
      ))}
    </div>
  )
}
