"use client"

import { LanguageSelector } from "./language-selector"
import { ThemeToggle } from "./theme-toggle"
import { WhatWeDoMobileSelector } from "./what-we-do-mobile-selector"
import { EngineeringMobileSelector } from "./engineering-mobile-selector"
import { IndustryMobileSelector } from "./industry-mobile-selector"
import { SecurityMobileSelector } from "./security-mobile-selector"
import { InstitutionalMobileSelector } from "./institutional-mobile-selector"

export function MobileMenu() {
  return (
    <div className="flex flex-col mt-8 pb-8 overflow-y-auto max-h-[calc(100vh-200px)]">
      {/* Language Selector e Theme Toggle no topo do menu mobile */}

      {/* Navegação accordion para mobile */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-4">
          <LanguageSelector />
          <ThemeToggle />
        </div>
        <WhatWeDoMobileSelector />
        <EngineeringMobileSelector />
        <IndustryMobileSelector />
        <SecurityMobileSelector />
        <InstitutionalMobileSelector />
      </div>
    </div>
  )
}
