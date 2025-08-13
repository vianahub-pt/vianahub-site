"use client"

import type React from "react"

import { TranslationProvider } from "@/components/translation-context"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <TranslationProvider>
        {children}
        <Toaster />
      </TranslationProvider>
    </ThemeProvider>
  )
}
