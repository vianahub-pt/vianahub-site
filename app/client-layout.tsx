"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { TranslationProvider } from "@/components/translation-context"
import { Toaster } from "@/components/ui/toaster"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <TranslationProvider>
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <Toaster />
        </div>
      </TranslationProvider>
    </ThemeProvider>
  )
}
