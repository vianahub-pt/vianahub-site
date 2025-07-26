"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { WhatWeDoSelector } from "./what-we-do-selector"
import { EngineeringSelector } from "./engineering-selector"
import { IndustrySelector } from "./industry-selector"
import { SecuritySelector } from "./security-selector"
import { InstitutionalSelector } from "./institutional-selector"
import { LanguageSelector } from "./language-selector"
import { ThemeToggle } from "./theme-toggle"
import { MobileMenu } from "./mobile-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={handleLogoClick}>
              <Image src="/logo.png" alt="VianaHub Logo" width={120} height={40} className="h-10 w-auto" />
            </Link>
          </div>

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

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-black/90 backdrop-blur-md border-gray-700"
              >
                <MobileMenu />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
