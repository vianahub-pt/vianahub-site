"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { WhatWeDoDropdown } from "@/components/what-we-do-dropdown";
import { EngineeringDropdown } from "@/components/engineering-dropdown";
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-orange-400 dark:bg-black backdrop-blur-md border-b border-white/30 dark:border-gray-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 h-full flex items-center">
            <button
              onClick={() => handleNavigation("/")}
              className="flex items-center cursor-pointer h-full relative"
            >
              {/* Logo Light */}
              <Image
                src="/logo-default-white.png"
                alt="VianaHub Light"
                className="h-[80%] w-auto dark:hidden"
                width={200}
                height={100}
                priority
              />
              {/* Logo Dark */}
              <Image
                src="/logo-default-orange.png"
                alt="VianaHub Dark"
                className="h-[80%] w-auto hidden dark:block"
                width={200}
                height={100}
                priority
              />
            </button>
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center space-x-4">
            <WhatWeDoDropdown />
            <EngineeringDropdown />
            <InstitutionalDropdown />
            <button
              onClick={() => handleNavigation("/contact")}
              className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium cursor-pointer
    bg-orange-400 text-white hover:bg-black/80 hover:text-orange-400
    dark:bg-black dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-white text-md"
            >
              {t("nav.contact.title")}
            </button>
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
              <WhatWeDoDropdown />
              <EngineeringDropdown />
              <InstitutionalDropdown />
              <button
                onClick={() => handleNavigation("/contact")}
                className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-200 font-medium drop-shadow-lg cursor-pointer
                  bg-orange-400 text-white hover:bg-white hover:text-orange-400
                  dark:bg-black dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-white
                  text-sm"
              >
                {t("nav.contact.title")}
              </button>
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
