"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AccessPageContent } from "@/components/access-page-content"

export default function AccessPage() {
  return (
    <div className="min-h-screen bg-viana-white">
      <Navbar />
      <AccessPageContent />
      <Footer />
    </div>
  )
}
