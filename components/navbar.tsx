"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { WhatWeDoDropdown } from "@/components/what-we-do-dropdown";
import { EngineeringDropdown } from "@/components/engineering-dropdown";
import { SecurityDropdown } from "@/components/security-dropdown";
import { InstitutionalDropdown } from "@/components/institutional-dropdown";
import { LanguageSelector } from "@/components/language-selector";
import { useTranslation } from "@/components/translation-context";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 dark:bg-black/80 backdrop-blur-md border-b border-white/30 dark:border-gray-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigation("/")}
              className="flex items-center cursor-pointer"
            >
              <Image
                src="/logo.png"
                alt="VianaHub"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
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
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-md rounded-md mt-2">
              <div className="space-y-1">
                <div className="px-3 py-2 text-white font-medium text-sm">
                  {t("nav.whatWeDo")}
                </div>
                <button
                  onClick={() => handleNavigation("/what-we-do/development")}
                  className="block px-6 py-2 text-sm text-white hover:bg-yellow-500/20 w-full text-left"
                >
                  {t("nav.development")}
                </button>
                <button
                  onClick={() => handleNavigation("/what-we-do/agile")}
                  className="block px-6 py-2 text-sm text-white hover:bg-yellow-500/20 w-full text-left"
                >
                  {t("nav.agile")}
                </button>
                <button
                  onClick={() => handleNavigation("/what-we-do/outsourcing")}
                  className="block px-6 py-2 text-sm text-white hover:bg-yellow-500/20 w-full text-left"
                >
                  {t("nav.outsourcing")}
                </button>
                <button
                  onClick={() => handleNavigation("/what-we-do/chatbot")}
                  className="block px-6 py-2 text-sm text-white hover:bg-yellow-500/20 w-full text-left"
                >
                  {t("nav.chatbot")}
                </button>
                <button
                  onClick={() => handleNavigation("/what-we-do/landing-pages")}
                  className="block px-6 py-2 text-sm text-white hover:bg-yellow-500/20 w-full text-left"
                >
                  {t("nav.landingPages")}
                </button>
                <button
                  onClick={() =>
                    handleNavigation("/what-we-do/system-integration")
                  }
                  className="block px-6 py-2 text-sm text-white hover:bg-yellow-500/20 w-full text-left"
                >
                  {t("nav.systemIntegration")}
                </button>
              </div>
              <button
                onClick={() => handleNavigation("/contact")}
                className="block px-3 py-2 text-white hover:bg-yellow-500/20 w-full text-left font-medium"
              >
                {t("nav.contact")}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
