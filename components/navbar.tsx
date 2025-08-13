"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { WhatWeDoSelector } from "./what-we-do-selector"
import { IndustrySelector } from "./industry-selector"
import { SecuritySelector } from "./security-selector"
import { EngineeringSelector } from "./engineering-selector"
import { InstitutionalSelector } from "./institutional-selector"
import { LanguageSelector } from "./language-selector"
import { ThemeToggle } from "./theme-toggle"
import { MobileMenu } from "./mobile-menu"
import { useTranslation } from "@/contexts/translation-context"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation()

  const handleLinkClick = () => {
    setIsOpen(false)
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-900/95 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <img src="/logo.png" alt="VianaHub" className="h-8 w-auto" />
            <span className="font-bold text-xl text-viana-orange">VianaHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <WhatWeDoSelector onLinkClick={handleLinkClick} />
            <IndustrySelector onLinkClick={handleLinkClick} />
            <SecuritySelector onLinkClick={handleLinkClick} />
            <EngineeringSelector onLinkClick={handleLinkClick} />
            <InstitutionalSelector onLinkClick={handleLinkClick} />
          </div>

          {/* Right side items */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelector />
            <ThemeToggle />
            <Link href="/contact" onClick={handleLinkClick}>
              <Button className="bg-viana-orange hover:bg-viana-orange/90">{t("navbar.contact")}</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <MobileMenu onLinkClick={handleLinkClick} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
