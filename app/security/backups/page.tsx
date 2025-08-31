"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackupsPageContent } from "@/components/backups-page-content"

export default function BackupsPage() {
  return (
    <div className="min-h-screen bg-viana-white">
      <Navbar />
      <BackupsPageContent />
      <Footer />
    </div>
  )
}
