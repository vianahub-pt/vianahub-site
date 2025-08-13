"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { TranslationProvider } from "@/contexts/translation-context"
import { MenuProvider } from "@/components/menu-context"
import { Toaster } from "@/components/ui/toaster"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <TranslationProvider>
        <MenuProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppChat />
            <Toaster />
          </div>
        </MenuProvider>
      </TranslationProvider>
    </ThemeProvider>
  )
}
