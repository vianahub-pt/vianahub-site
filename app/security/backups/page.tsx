"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TranslationProvider } from "@/components/translation-context"
import { BackupsPageContent } from "@/components/backups-page-content"

export default function BackupsPage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <BackupsPageContent />
        <Footer />
      </div>
    </TranslationProvider>
  )
}
