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
import { MobileMenu } from "./mobile-menu"
import { MenuProvider } from "./menu-context"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
          isScrolled ? "bg-black/80 backdrop-blur-md border-b border-gray-800" : "bg-black/60 backdrop-blur-sm",
        )}
      >
        <div className="w-full max-w-none">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center space-x-2 flex-shrink-0"
                onClick={() => {
                  if (window.location.pathname === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                }}
              >
                <img src="/logo.png" alt="VianaHub" className="h-12 w-auto object-contain" />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
                <WhatWeDoSelector />
                <EngineeringSelector />
                <IndustrySelector />
                <SecuritySelector />
                <InstitutionalSelector />
                <LanguageSelector />
                <ThemeToggle />
              </div>

              {/* Mobile Menu */}
              <div className="lg:hidden flex items-center space-x-4 flex-shrink-0">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:text-viana-orange">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-[300px] max-w-[90vw] bg-black/90 backdrop-blur-md border-l border-gray-800 overflow-y-auto p-0"
                  >
                    <div className="p-6">
                      <MobileMenu />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer para compensar a navbar fixa */}
      <div className="h-20 w-full flex-shrink-0" />
    </MenuProvider>
  )
}
