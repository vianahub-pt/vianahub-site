"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  WhatWeDoDropdown,
  WhatWeDoDropdownMobile,
} from "@/components/what-we-do-dropdown";
import {
  EngineeringDropdown,
  EngineeringDropdownMobile,
} from "@/components/engineering-dropdown";
import {
  InstitutionalDropdown,
  InstitutionalDropdownMobile,
} from "@/components/institutional-dropdown";
import {
  LanguageSelector,
  LanguageSelectorMobile,
} from "@/components/language-selector";
import {
  useTranslation,
  type Language,
} from "@/components/translation-context";
import { Button } from "./ui/button";

const languages = [
  { code: "pt-BR" as Language, name: "Português", flag: "/flags/br.svg" },
  { code: "pt-PT" as Language, name: "Português", flag: "/flags/pt.svg" },
  { code: "en-US" as Language, name: "English", flag: "/flags/us.svg" },
  { code: "es-ES" as Language, name: "Español", flag: "/flags/es.svg" },
  { code: "fr-FR" as Language, name: "Français", flag: "/flags/fr.svg" },
  { code: "de-DE" as Language, name: "Deutsch", flag: "/flags/de.svg" },
  { code: "it-IT" as Language, name: "Italian", flag: "/flags/it.svg" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // <-- controla QUAL dropdown está aberto
  const { language } = useTranslation();
  const router = useRouter();
  const { t } = useTranslation();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (path?: string) => {
    if (path) {
      router.push(path);
    }
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  // Fecha todos os dropdowns ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black backdrop-blur-md border-b border-white/30 dark:border-gray-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 h-full flex items-center">
            <button
              onClick={() => handleNavigation("/")}
              className="flex items-center cursor-pointer h-full relative"
              title="VianaHub"
              aria-label="VianaHub Home"
            >
              <Image
                src="/logo/default-black-logo.png"
                alt="VianaHub Light"
                className="w-[150px] h-auto dark:hidden object-contain"
                width={200}
                height={100}
                priority
              />
              <Image
                src="/logo/default-white-logo.png"
                alt="VianaHub Dark"
                className="w-[150px] h-auto hidden dark:block object-contain"
                width={200}
                height={100}
                priority
              />
            </button>
          </div>

          {/* Right side (desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <WhatWeDoDropdown />
            <EngineeringDropdown />
            <InstitutionalDropdown />
            <Button
              onClick={() => handleNavigation("/contact")}
              className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 cursor-pointer text-md
                   bg-white text-black hover:bg-white hover:text-orange-600 dark:bg-black dark:text-orange-500 
                   dark:hover:bg-black dark:hover:text-white"
              title={t("nav.contact")}
              aria-label="Contact Us"
            >
              {t("nav.contact")}
            </Button>
            <LanguageSelector />
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md 
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
              bg-white/0 text-orange-500 hover:bg-black/80 hover:text-orange-500 dark:bg-black dark:text-orange-500 dark:hover:bg-white dark:hover:text-orange-500"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden" ref={menuRef}>
            <div className="w-[180px] px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-md rounded-md mt-2">
              {/* WhatWeDo */}
              <div className="relative">
                <Button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "whatWeDo" ? null : "whatWeDo"
                    )
                  }
                  className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium cursor-pointer
                   bg-white/0 text-orange-500 hover:bg-black/80 hover:text-orange-500 dark:bg-black dark:text-orange-500 
                   dark:hover:bg-white dark:hover:text-orange-500 text-md"
                  title={t("nav.whatWeDo")}
                  aria-label="What We Do"
                >
                  <span>{t("nav.whatWeDo")}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openDropdown === "whatWeDo" ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </Button>
                {openDropdown === "whatWeDo" && (
                  <WhatWeDoDropdownMobile onNavigate={handleNavigation} />
                )}
              </div>

              {/* Engineering */}
              <div className="relative">
                <Button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "engineering" ? null : "engineering"
                    )
                  }
                  className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium cursor-pointer
                   bg-white/0 text-orange-500 hover:bg-black/80 hover:text-orange-500 dark:bg-black dark:text-orange-500 
                   dark:hover:bg-white dark:hover:text-orange-500 text-md"
                  title={t("nav.engineering")}
                  aria-label="Engineering"
                >
                  <span>{t("nav.engineering")}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openDropdown === "engineering" ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </Button>
                {openDropdown === "engineering" && (
                  <EngineeringDropdownMobile onNavigate={handleNavigation} />
                )}
              </div>

              {/* Institutional */}
              <div className="relative">
                <Button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "institutional" ? null : "institutional"
                    )
                  }
                  className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium cursor-pointer
                   bg-white/0 text-orange-500 hover:bg-black/80 hover:text-orange-500 dark:bg-black dark:text-orange-500 
                   dark:hover:bg-white dark:hover:text-orange-500 text-md"
                  title={t("nav.institutional")}
                  aria-label="Institutional"
                >
                  <span>{t("nav.institutional")}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openDropdown === "institutional"
                        ? "rotate-180"
                        : "rotate-0"
                    }`}
                  />
                </Button>
                {openDropdown === "institutional" && (
                  <InstitutionalDropdownMobile onNavigate={handleNavigation} />
                )}
              </div>

              {/* Contact */}
              <Button
                onClick={() => handleNavigation("/contact")}
                className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium cursor-pointer 
                           bg-white/0 text-orange-500 hover:bg-black hover:text-orange-500 dark:bg-black dark:text-orange-500 
                           dark:hover:bg-white dark:hover:text-orange-500 text-md"
                title={t("nav.contact")}
                aria-label="Contact Us"
              >
                {t("nav.contact")}
              </Button>

              {/* Language */}
              <div className="relative">
                <Button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "language" ? null : "language"
                    )
                  }
                  className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium cursor-pointer 
                             bg-white/0 text-orange-500 hover:bg-black hover:text-orange-500 dark:bg-black dark:text-orange-500 
                             dark:hover:bg-white dark:hover:text-orange-500 text-md"
                  title="Select Language"
                  aria-label="Select Language"
                >
                  <Image
                    src={currentLanguage.flag || "/placeholder.svg"}
                    alt={currentLanguage.name}
                    width={20}
                    height={15}
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  <span>{currentLanguage.name}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openDropdown === "language" ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </Button>
                {openDropdown === "language" && (
                  <LanguageSelectorMobile onNavigate={handleNavigation} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
