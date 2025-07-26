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
    <div className="flex flex-col space-y-4 mt-8 pb-8 overflow-y-auto max-h-[calc(100vh-200px)]">
      {/* Language Selector e Theme Toggle no topo do menu mobile */}
      <div className="flex items-center justify-between border-b border-gray-700 pb-4 flex-shrink-0">
        <LanguageSelector />
        <ThemeToggle />
      </div>

      {/* Navegação usando os mesmos componentes do desktop */}
      <div className="flex flex-col space-y-2 flex-1">
        <div className="transition-all duration-300 ease-in-out">
          <WhatWeDoSelector />
        </div>
        <div className="transition-all duration-300 ease-in-out">
          <EngineeringSelector />
        </div>
        <div className="transition-all duration-300 ease-in-out">
          <IndustrySelector />
        </div>
        <div className="transition-all duration-300 ease-in-out">
          <SecuritySelector />
        </div>
        <div className="transition-all duration-300 ease-in-out">
          <InstitutionalSelector />
        </div>
      </div>
    </div>
  )
}
