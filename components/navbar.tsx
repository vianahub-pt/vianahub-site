"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { WhatWeDoSelector } from "./what-we-do-selector"
import { EngineeringSelector } from "./engineering-selector"
import { IndustrySelector } from "./industry-selector"
import { SecuritySelector } from "./security-selector"
import { InstitutionalSelector } from "./institutional-selector"
import { LanguageSelector } from "./language-selector"
import { MobileMenu } from "./mobile-menu"
import { MenuProvider } from "./menu-context"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MenuProvider>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="VianaHub Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-white font-bold text-xl">VianaHub</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <WhatWeDoSelector />
              <EngineeringSelector />
              <IndustrySelector />
              <SecuritySelector />
              <InstitutionalSelector />
              <LanguageSelector />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-black/95 border-gray-800">
                  <MobileMenu onClose={() => setIsOpen(false)} />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </MenuProvider>
  )
}
