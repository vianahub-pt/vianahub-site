"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TranslationProvider } from "@/components/translation-context"
import { AccessPageContent } from "@/components/access-page-content"

export default function AccessPage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <AccessPageContent />
        <Footer />
      </div>
    </TranslationProvider>
  )
}
