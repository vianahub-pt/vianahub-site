"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useTranslation } from "@/contexts/translation-context"

export function EngineeringSelector() {
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  const engineeringServices = [
    {
      title: t("engineering.railway"),
      description: t("engineering.railwayDesc"),
      href: "/engineering/railway",
      image: "/pages/railway.jpg",
    },
    {
      title: t("engineering.road"),
      description: t("engineering.roadDesc"),
      href: "/engineering/road",
      image: "/pages/road.jpg",
    },
    {
      title: t("engineering.solarEnergy"),
      description: t("engineering.solarEnergyDesc"),
      href: "/engineering/solar-energy",
      image: "/pages/solar-energy.jpg",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 p-6 w-[400px]">
      {engineeringServices.map((service, index) => (
        <div
          key={index}
          className="group cursor-pointer rounded-lg border p-4 hover:bg-accent transition-colors"
          onClick={() => handleNavigation(service.href)}
        >
          <div className="flex items-center space-x-3">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              width={40}
              height={40}
              className="rounded-md"
            />
            <div>
              <h3 className="font-medium group-hover:text-accent-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
