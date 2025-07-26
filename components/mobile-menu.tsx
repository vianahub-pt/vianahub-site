"use client"

import { LanguageSelector } from "./language-selector"
import { ThemeToggle } from "./theme-toggle"
import { WhatWeDoSelector } from "./what-we-do-selector"
import { EngineeringSelector } from "./engineering-selector"
import { IndustrySelector } from "./industry-selector"
import { SecuritySelector } from "./security-selector"
import { InstitutionalSelector } from "./institutional-selector"

export function MobileMenu() {
  return (
    <div className="flex flex-col space-y-4 mt-8 pb-8">
      {/* Language Selector e Theme Toggle no topo do menu mobile */}
      <div className="flex items-center justify-between border-b border-gray-700 pb-4">
        <LanguageSelector />
        <ThemeToggle />
      </div>

      {/* Navegação usando os mesmos componentes do desktop */}
      <div className="flex flex-col space-y-2">
        <WhatWeDoSelector />
        <EngineeringSelector />
        <IndustrySelector />
        <SecuritySelector />
        <InstitutionalSelector />
      </div>
    </div>
  )
}
