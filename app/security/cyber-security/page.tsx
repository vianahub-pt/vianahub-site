"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CyberSecurityPageContent } from "@/components/cybersecurity-page-content"

export default function CyberSecurityPage() {
  return (
    <div className="min-h-screen bg-viana-white">
      <Navbar />
      <CyberSecurityPageContent />
      <Footer />
    </div>
  )
}
