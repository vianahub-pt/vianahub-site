"use client"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/contexts/translation-context"
import { Button } from "@/components/ui/button"

export function SecurityMobileSelector() {
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  const securityServices = [
    {
      title: t("security.cyberSecurity"),
      href: "/security/cyber-security",
    },
    {
      title: t("security.access"),
      href: "/security/access",
    },
    {
      title: t("security.backups"),
      href: "/security/backups",
    },
  ]

  return (
    <div className="space-y-2">
      {securityServices.map((service, index) => (
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
