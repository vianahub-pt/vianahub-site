"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { WhatWeDoDropdown } from "@/components/what-we-do-dropdown"
import { EngineeringDropdown } from "@/components/engineering-dropdown"
import { LanguageSelector } from "@/components/language-selector"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <WhatWeDoDropdown />
            <EngineeringDropdown />
            <Link
              href="/contact"
              className="px-3 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-white hover:bg-yellow-500/20 hover:text-white text-sm"
            >
              Contacto
            </Link>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-yellow-500 transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md rounded-lg mt-2">
              <Link
                href="/what-we-do/development"
                className="block px-3 py-2 text-white hover:bg-yellow-500/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Desenvolvimento
              </Link>
              <Link
                href="/what-we-do/agile"
                className="block px-3 py-2 text-white hover:bg-yellow-500/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Metodologia Ágil
              </Link>
              <Link
                href="/what-we-do/outsourcing"
                className="block px-3 py-2 text-white hover:bg-yellow-500/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Outsourcing
              </Link>
              <Link
                href="/what-we-do/chatbot"
                className="block px-3 py-2 text-white hover:bg-yellow-500/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Chatbot
              </Link>
              <Link
                href="/what-we-do/landing-pages"
                className="block px-3 py-2 text-white hover:bg-yellow-500/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Landing Pages
              </Link>
              <Link
                href="/what-we-do/system-integration"
                className="block px-3 py-2 text-white hover:bg-yellow-500/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Integração de Sistemas
              </Link>
              <Link
                href="/engineering/railway"
                className="block px-3 py-2 text-white hover:bg-yellow-500/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Ferroviário
              </Link>
              <Link
                href="/engineering/road"
                className="block px-3 py-2 text-white hover:bg-yellow-500/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Rodoviário
              </Link>
              <Link
                href="/engineering/solar-energy"
                className="block px-3 py-2 text-white hover:bg-yellow-500/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Energia Solar
              </Link>
              <Link
                href="/industry/education"
                className="block px-3 py-2 text-white hover:bg-yellow-500/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Educação
              </Link>
              <Link
                href="/industry/government"
                className="block px-3 py-2 text-white hover:bg-yellow-500/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Governo
              </Link>
              <Link
                href="/industry/manufacturing"
                className="block px-3 py-2 text-white hover:bg-yellow-500/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Manufactura
              </Link>
              <Link
                href="/industry/financial"
                className="block px-3 py-2 text-white hover:bg-yellow-500/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Financeiro
              </Link>
              <Link
                href="/industry/retail"
                className="block px-3 py-2 text-white hover:bg-yellow-500/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Retalho
              </Link>
              <Link
                href="/industry/healthcare"
                className="block px-3 py-2 text-white hover:bg-yellow-500/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Saúde
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white hover:bg-yellow-500/20 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <div className="flex items-center justify-between px-3 py-2">
                <LanguageSelector />
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
