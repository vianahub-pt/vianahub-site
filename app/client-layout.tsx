"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { TranslationProvider } from "@/components/translation-context"
import { WhatsAppChat } from "@/components/whatsapp-chat"

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <TranslationProvider>
        <div className="min-h-screen bg-background font-sans antialiased">
          {children}
          <WhatsAppChat />
        </div>
      </TranslationProvider>
    </ThemeProvider>
  )
}

export default ClientLayout
