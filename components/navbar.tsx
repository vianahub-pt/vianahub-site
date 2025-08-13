"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/contexts/translation-context"
import { LanguageSelector } from "@/components/language-selector"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { WhatWeDoSelector } from "@/components/what-we-do-selector"
import { IndustrySelector } from "@/components/industry-selector"
import { SecuritySelector } from "@/components/security-selector"
import { EngineeringSelector } from "@/components/engineering-selector"
import { InstitutionalSelector } from "@/components/institutional-selector"

export function Navbar() {
  const router = useRouter()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="VianaHub" width={40} height={40} className="h-8 w-8" />
            <span className="font-bold text-xl">VianaHub</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t("navbar.whatWeDo")}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <WhatWeDoSelector />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>{t("navbar.industries")}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <IndustrySelector />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>{t("navbar.security")}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <SecuritySelector />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>{t("navbar.engineering")}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <EngineeringSelector />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>{t("navbar.institutional")}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <InstitutionalSelector />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="ghost" onClick={() => handleNavigation("/about")}>
            {t("navbar.about")}
          </Button>

          <Button variant="ghost" onClick={() => handleNavigation("/careers")}>
            {t("navbar.careers")}
          </Button>

          <Button variant="ghost" onClick={() => handleNavigation("/contact")}>
            {t("navbar.contact")}
          </Button>
        </div>

        {/* Right side controls */}
        <div className="flex items-center space-x-2">
          <LanguageSelector />
          <ThemeToggle />

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container px-4 py-4 space-y-4">
            <Button variant="ghost" className="w-full justify-start" onClick={() => handleNavigation("/about")}>
              {t("navbar.about")}
            </Button>

            <Button variant="ghost" className="w-full justify-start" onClick={() => handleNavigation("/careers")}>
              {t("navbar.careers")}
            </Button>

            <Button variant="ghost" className="w-full justify-start" onClick={() => handleNavigation("/contact")}>
              {t("navbar.contact")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
