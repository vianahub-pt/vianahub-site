"use client"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/contexts/translation-context"
import { Button } from "@/components/ui/button"

export function InstitutionalMobileSelector() {
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  const institutionalPages = [
    {
      title: t("navbar.about"),
      href: "/about",
    },
    {
      title: t("navbar.careers"),
      href: "/careers",
    },
    {
      title: t("navbar.contact"),
      href: "/contact",
    },
  ]

  return (
    <div className="space-y-2">
      {institutionalPages.map((page, index) => (
        <Button
          key={index}
          variant="ghost"
          className="w-full justify-start"
          onClick={() => handleNavigation(page.href)}
        >
          {page.title}
        </Button>
      ))}
    </div>
  )
}
