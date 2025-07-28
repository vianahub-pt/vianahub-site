"use client"

import type React from "react"

import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { TranslationProvider } from "@/contexts/translation-context"
import { Toaster } from "@/components/ui/toaster"
import { MenuProvider } from "@/components/menu-context"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TranslationProvider>
            <MenuProvider>
              {children}
              <Toaster />
            </MenuProvider>
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
