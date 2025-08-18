"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { WhatWeDoDropdown } from "@/components/what-we-do-dropdown"
import { EngineeringDropdown } from "@/components/engineering-dropdown"
import { SecurityDropdown } from "@/components/security-dropdown"
import { InstitutionalDropdown } from "@/components/institutional-dropdown"
import { LanguageSelector } from "@/components/language-selector"
import { useTranslation } from "@/components/translation-context"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (path: string) => {
    router.push(path)
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 dark:bg-black/80 backdrop-blur-md border-b border-white/30 dark:border-gray-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button onClick={() => handleNavigation("/")} className="flex items-center cursor-pointer">
                <Image src="/logo.png" alt="VianaHub" width={40} height={40} className="h-10 w-auto" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <WhatWeDoDropdown />
                <EngineeringDropdown />
                <SecurityDropdown />
                <InstitutionalDropdown />
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-white hover:bg-yellow-500/20 hover:text-white text-sm"
                >
                  {t("nav.contact")}
                </button>
              </div>
            </div>

            {/* Right side - Language selector and theme toggle */}
            <div className="hidden lg:flex items-center space-x-4">
              <LanguageSelector />
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-yellow-500/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <Menu className="block h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Background overlay */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />

          {/* Side menu */}
          <div className="fixed top-0 left-0 h-full w-80 max-w-[80vw] bg-black/95 backdrop-blur-md border-r border-white/30 transform transition-transform duration-300 ease-in-out">
            {/* Menu header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <Image src="/logo.png" alt="VianaHub" width={32} height={32} className="h-8 w-auto" />
              <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-md text-white hover:bg-white/10">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu items */}
            <div className="py-4">
              {/* Home */}
              <button
                onClick={() => handleNavigation("/")}
                className="block w-full px-6 py-3 text-left text-white hover:bg-white/10 transition-colors"
              >
                {t("nav.home") || "Home"}
              </button>

              {/* What We Do Section */}
              <div className="border-t border-white/10 mt-2 pt-2">
                <div className="px-6 py-2 text-white/70 text-sm font-medium uppercase tracking-wide">
                  {t("nav.whatWeDo")}
                </div>
                <button
                  onClick={() => handleNavigation("/what-we-do/development")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.development")}
                </button>
                <button
                  onClick={() => handleNavigation("/what-we-do/agile")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.agile")}
                </button>
                <button
                  onClick={() => handleNavigation("/what-we-do/outsourcing")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.outsourcing")}
                </button>
                <button
                  onClick={() => handleNavigation("/what-we-do/chatbot")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.chatbot")}
                </button>
                <button
                  onClick={() => handleNavigation("/what-we-do/landing-pages")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.landingPages")}
                </button>
                <button
                  onClick={() => handleNavigation("/what-we-do/system-integration")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.systemIntegration")}
                </button>
              </div>

              {/* Engineering Section */}
              <div className="border-t border-white/10 mt-2 pt-2">
                <div className="px-6 py-2 text-white/70 text-sm font-medium uppercase tracking-wide">
                  {t("nav.engineering") || "Engineering"}
                </div>
                <button
                  onClick={() => handleNavigation("/what-we-do/railway")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.railway") || "Railway"}
                </button>
                <button
                  onClick={() => handleNavigation("/what-we-do/road")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.road") || "Road"}
                </button>
                <button
                  onClick={() => handleNavigation("/what-we-do/solar-energy")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.solarEnergy") || "Solar Energy"}
                </button>
              </div>

              {/* Security Section */}
              <div className="border-t border-white/10 mt-2 pt-2">
                <div className="px-6 py-2 text-white/70 text-sm font-medium uppercase tracking-wide">
                  {t("nav.security") || "Security"}
                </div>
                <button
                  onClick={() => handleNavigation("/security/cyber-security")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.cyberSecurity") || "Cyber Security"}
                </button>
                <button
                  onClick={() => handleNavigation("/security/access")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.access") || "Access"}
                </button>
                <button
                  onClick={() => handleNavigation("/security/backups")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.backups") || "Backups"}
                </button>
              </div>

              {/* Industries Section */}
              <div className="border-t border-white/10 mt-2 pt-2">
                <div className="px-6 py-2 text-white/70 text-sm font-medium uppercase tracking-wide">
                  {t("nav.industries") || "Industries"}
                </div>
                <button
                  onClick={() => handleNavigation("/industry/healthcare")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.healthcare") || "Healthcare"}
                </button>
                <button
                  onClick={() => handleNavigation("/industry/financial")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.financial") || "Financial"}
                </button>
                <button
                  onClick={() => handleNavigation("/industry/retail")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.retail") || "Retail"}
                </button>
                <button
                  onClick={() => handleNavigation("/industry/education")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.education") || "Education"}
                </button>
                <button
                  onClick={() => handleNavigation("/industry/government")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.government") || "Government"}
                </button>
                <button
                  onClick={() => handleNavigation("/industry/manufacturing")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.manufacturing") || "Manufacturing"}
                </button>
              </div>

              {/* Other Pages */}
              <div className="border-t border-white/10 mt-2 pt-2">
                <button
                  onClick={() => handleNavigation("/about")}
                  className="block w-full px-6 py-3 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.about") || "About"}
                </button>
                <button
                  onClick={() => handleNavigation("/careers")}
                  className="block w-full px-6 py-3 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.careers") || "Careers"}
                </button>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="block w-full px-6 py-3 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {t("nav.contact")}
                </button>
              </div>

              {/* Language Selector */}
              <div className="border-t border-white/10 mt-4 pt-4 px-6">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
