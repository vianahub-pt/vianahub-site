"use client"

import Image from "next/image"
import Link from "next/link"
import { WhatWeDoDropdown } from "./what-we-do-dropdown"
import { EngineeringDropdown } from "./engineering-dropdown"
import { LanguageSelector } from "./language-selector"
import { ThemeToggle } from "./theme-toggle"
import { useTranslation } from "./translation-context"

export function Navbar() {
  const { t } = useTranslation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Logo" width={40} height={40} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <WhatWeDoDropdown />
              <EngineeringDropdown />
              <Link
                href="/contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-yellow-500/20 hover:text-white transition-all duration-100 drop-shadow-lg"
              >
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          {/* Right side - Language Selector and Theme Toggle */}
          <div className="flex items-center space-x-2">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
