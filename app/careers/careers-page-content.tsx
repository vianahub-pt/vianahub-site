"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TranslationProvider } from "@/contexts/translation-context"
import { CareersContent } from "./careers-content"

export function CareersPageContent() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <CareersContent />
        <Footer />
      </div>
    </TranslationProvider>
  )
}
