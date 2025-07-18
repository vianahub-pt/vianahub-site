import type React from "react"
import type { Metadata } from "next"
import { Inter, Kurale } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { PreferencesDialog } from "@/components/preferences-dialog"
import TranslationProviderWrapper from "@/components/translation-provider-wrapper"

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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`${inter.className} ${kurale.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TranslationProviderWrapper>
            {children}
            <Toaster />
            <WhatsAppChat />
            <PreferencesDialog />
          </TranslationProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
