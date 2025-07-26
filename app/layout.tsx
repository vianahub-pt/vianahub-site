import type React from "react"
import type { Metadata } from "next"
import { Inter, Kurale } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { PreferencesDialog } from "@/components/preferences-dialog"
import TranslationProviderWrapper from "@/components/translation-provider-wrapper"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })
const kurale = Kurale({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kurale",
})

export const metadata: Metadata = {
  title: "VianaHub - Soluções Tecnológicas Inovadoras",
  description:
    "Transformamos ideias em soluções digitais. Desenvolvimento de software, consultoria em TI e soluções personalizadas para o seu negócio.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`${inter.className} ${kurale.variable} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <TranslationProviderWrapper>
            <div className="min-h-screen w-full max-w-full">
              <Navbar />
              <main className="w-full max-w-full">{children}</main>
              <Toaster />
              <WhatsAppChat />
              <PreferencesDialog />
            </div>
          </TranslationProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
