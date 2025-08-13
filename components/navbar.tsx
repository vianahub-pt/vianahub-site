"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useTranslation } from "@/components/translation-context"
import { ThemeToggle } from "@/components/theme-toggle"
import { ChevronDown } from "lucide-react"

export function Navbar() {
  const router = useRouter()
  const { t } = useTranslation()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
    setIsDropdownOpen(false)
  }

  const whatWeDoItems = [
    { key: "nav.development", href: "/what-we-do/development" },
    { key: "nav.agile", href: "/what-we-do/agile" },
    { key: "nav.outsourcing", href: "/what-we-do/outsourcing" },
    { key: "nav.chatbot", href: "/what-we-do/chatbot" },
    { key: "nav.landingPages", href: "/what-we-do/landing-pages" },
    { key: "nav.systemIntegration", href: "/what-we-do/system-integration" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 dark:bg-black/80 backdrop-blur-md border-b border-white/30 dark:border-gray-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="VianaHub" width={40} height={40} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* What We Do Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-white hover:bg-yellow-500/20 hover:text-white text-sm"
                >
                  <span>{t("nav.whatWeDo")}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-black/90 backdrop-blur-md border border-white/20 rounded-md shadow-lg z-50">
                    <div className="py-1">
                      {whatWeDoItems.map((item) => (
                        <button
                          key={item.key}
                          onClick={() => handleNavigation(item.href)}
                          className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-yellow-500/20 hover:text-white transition-colors"
                        >
                          {t(item.key)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Button */}
              <button
                onClick={() => handleNavigation("/contact")}
                className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-white hover:bg-yellow-500/20 hover:text-white text-sm"
              >
                {t("nav.contact")}
              </button>
            </div>
          </div>

          {/* Right side - Theme toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {isDropdownOpen && <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />}
    </nav>
  )
}
