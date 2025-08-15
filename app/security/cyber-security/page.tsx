"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TranslationProvider } from "@/components/translation-context"
import { CyberSecurityPageContent } from "@/components/cybersecurity-page-content"

export default function CyberSecurityPage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <CyberSecurityPageContent />
        <Footer />
      </div>
    </TranslationProvider>
  )
}
