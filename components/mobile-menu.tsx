"use client"
import Image from "next/image"
import { Accordion } from "@/components/ui/accordion"
import { WhatWeDoMobileSelector } from "./what-we-do-mobile-selector"
import { EngineeringMobileSelector } from "./engineering-mobile-selector"
import { IndustryMobileSelector } from "./industry-mobile-selector"
import { SecurityMobileSelector } from "./security-mobile-selector"
import { InstitutionalMobileSelector } from "./institutional-mobile-selector"
import { LanguageSelector } from "./language-selector"

interface MobileMenuProps {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center space-x-2 p-4 border-b border-gray-800">
        <Image src="/logo.png" alt="VianaHub Logo" width={32} height={32} className="w-8 h-8" />
        <span className="text-white font-bold text-lg">VianaHub</span>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        <Accordion type="single" collapsible className="space-y-2">
          <WhatWeDoMobileSelector />
          <EngineeringMobileSelector />
          <IndustryMobileSelector />
          <SecurityMobileSelector />
          <InstitutionalMobileSelector />
        </Accordion>
      </div>

      {/* Language Selector */}
      <div className="p-4 border-t border-gray-800">
        <LanguageSelector />
      </div>
    </div>
  )
}
