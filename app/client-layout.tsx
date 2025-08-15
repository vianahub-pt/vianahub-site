"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { TranslationProvider } from "@/components/translation-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TranslationProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <Toaster />
      </ThemeProvider>
    </TranslationProvider>
  )
}
