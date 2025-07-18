"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { LanguageSelector } from "./language-selector"
import { ThemeToggle } from "./theme-toggle"
import { WhatWeDoSelector } from "./what-we-do-selector"
import { EngineeringSelector } from "./engineering-selector"
import { IndustrySelector } from "./industry-selector"
import { SecuritySelector } from "./security-selector"
import { InstitutionalSelector } from "./institutional-selector"
import { MenuProvider } from "./menu-context"
import { useTranslation } from "@/contexts/translation-context"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <MenuProvider>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-black/80 backdrop-blur-md border-b border-gray-800" : "bg-black/60 backdrop-blur-sm",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="VianaHub" className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              <WhatWeDoSelector />
              <EngineeringSelector />
              <IndustrySelector />
              <SecuritySelector />
              <InstitutionalSelector />
              <LanguageSelector />
              <ThemeToggle />
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center space-x-4">
              <LanguageSelector />
              <ThemeToggle />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:text-viana-orange">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-white/95 backdrop-blur-md">
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link
                      href="/about"
                      className="text-gray-900 hover:text-viana-orange transition-colors font-medium py-2"
                    >
                      {t("nav.about")}
                    </Link>
                    <Link
                      href="/careers"
                      className="text-gray-900 hover:text-viana-orange transition-colors font-medium py-2"
                    >
                      {t("nav.careers")}
                    </Link>
                    <Link
                      href="/contact"
                      className="text-gray-900 hover:text-viana-orange transition-colors font-medium py-2"
                    >
                      {t("nav.contact")}
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </MenuProvider>
  )
}
