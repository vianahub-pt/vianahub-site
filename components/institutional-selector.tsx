"use client"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/contexts/translation-context"
import { Button } from "@/components/ui/button"

export function InstitutionalSelector() {
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
    <div className="grid grid-cols-1 gap-2 p-4 w-[200px]">
      {institutionalPages.map((page, index) => (
        <Button key={index} variant="ghost" className="justify-start" onClick={() => handleNavigation(page.href)}>
          {page.title}
        </Button>
      ))}
    </div>
  )
}
