"use client"

import type React from "react"

import { TranslationProvider } from "@/contexts/translation-context"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TranslationProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
        <Toaster />
        <WhatsAppChat />
      </ThemeProvider>
    </TranslationProvider>
  )
}
