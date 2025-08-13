"use client"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/contexts/translation-context"
import { Button } from "@/components/ui/button"

export function EngineeringMobileSelector() {
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  const engineeringServices = [
    {
      title: t("engineering.railway"),
      href: "/engineering/railway",
    },
    {
      title: t("engineering.road"),
      href: "/engineering/road",
    },
    {
      title: t("engineering.solarEnergy"),
      href: "/engineering/solar-energy",
    },
  ]

  return (
    <div className="space-y-2">
      {engineeringServices.map((service, index) => (
        <Button
          key={index}
          variant="ghost"
          className="w-full justify-start"
          onClick={() => handleNavigation(service.href)}
        >
          {service.title}
        </Button>
      ))}
    </div>
  )
}
