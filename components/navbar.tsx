"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/contexts/translation-context"
import { LanguageSelector } from "@/components/language-selector"
import { ThemeToggle } from "@/components/theme-toggle"
import { WhatWeDoSelector } from "@/components/what-we-do-selector"
import { WhatWeDoMobileSelector } from "@/components/what-we-do-mobile-selector"
import { IndustrySelector } from "@/components/industry-selector"
import { IndustryMobileSelector } from "@/components/industry-mobile-selector"
import { SecuritySelector } from "@/components/security-selector"
import { SecurityMobileSelector } from "@/components/security-mobile-selector"
import { EngineeringSelector } from "@/components/engineering-selector"
import { EngineeringMobileSelector } from "@/components/engineering-mobile-selector"
import { InstitutionalSelector } from "@/components/institutional-selector"
import { InstitutionalMobileSelector } from "@/components/institutional-mobile-selector"
import { MobileMenu } from "@/components/mobile-menu"

export function Navbar() {
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 dark:bg-black/80 backdrop-blur-md border-b border-white/30 dark:border-gray-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="VianaHub" width={40} height={40} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <WhatWeDoSelector title={t("whatWeDo")} />
              <EngineeringSelector title={t("engineering")} />
              <IndustrySelector title={t("industry")} />
              <SecuritySelector title={t("security")} />
              <InstitutionalSelector title={t("institutional")} />
            </div>
          </div>

          {/* Right side - Language selector and theme toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelector />
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 dark:bg-black/90 backdrop-blur-md border-t border-white/30 dark:border-gray-400/30">
          <WhatWeDoMobileSelector title={t("whatWeDo")} />
          <EngineeringMobileSelector title={t("engineering")} />
          <IndustryMobileSelector title={t("industry")} />
          <SecurityMobileSelector title={t("security")} />
          <InstitutionalMobileSelector title={t("institutional")} />
          <div className="flex items-center space-x-4 px-3 py-2">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
