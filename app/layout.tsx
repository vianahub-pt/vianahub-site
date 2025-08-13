import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TranslationProvider } from "@/contexts/translation-context"
import { MenuProvider } from "@/components/menu-context"
import { Toaster } from "@/components/ui/toaster"
import { ClientLayout } from "./ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VianaHub - Soluções Tecnológicas Inovadoras",
  description:
    "Transformamos ideias em soluções digitais de alta qualidade. Desenvolvimento web, aplicações móveis, sistemas empresariais e consultoria tecnológica.",
  keywords: "desenvolvimento web, aplicações móveis, sistemas empresariais, consultoria tecnológica, soluções digitais",
  authors: [{ name: "VianaHub" }],
  creator: "VianaHub",
  publisher: "VianaHub",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://vianahub.com",
    title: "VianaHub - Soluções Tecnológicas Inovadoras",
    description:
      "Transformamos ideias em soluções digitais de alta qualidade. Desenvolvimento web, aplicações móveis, sistemas empresariais e consultoria tecnológica.",
    siteName: "VianaHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "VianaHub - Soluções Tecnológicas Inovadoras",
    description:
      "Transformamos ideias em soluções digitais de alta qualidade. Desenvolvimento web, aplicações móveis, sistemas empresariais e consultoria tecnológica.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TranslationProvider>
            <MenuProvider>
              <ClientLayout>{children}</ClientLayout>
              <Toaster />
            </MenuProvider>
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
