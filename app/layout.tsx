import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MenuProvider } from "@/components/menu-context"
import { TranslationProvider } from "@/contexts/translation-context"
import ClientLayout from "./ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VianaHub - Soluções Digitais Inovadoras",
  description:
    "Transformamos ideias em soluções digitais inovadoras. Especialistas em desenvolvimento de software e consultoria em TI.",
  keywords: "desenvolvimento web, aplicações mobile, consultoria TI, transformação digital, VianaHub",
  authors: [{ name: "VianaHub" }],
  creator: "VianaHub",
  publisher: "VianaHub",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://vianahub.com",
    siteName: "VianaHub",
    title: "VianaHub - Soluções Digitais Inovadoras",
    description:
      "Transformamos ideias em soluções digitais inovadoras. Especialistas em desenvolvimento de software e consultoria em TI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VianaHub - Soluções Digitais Inovadoras",
    description:
      "Transformamos ideias em soluções digitais inovadoras. Especialistas em desenvolvimento de software e consultoria em TI.",
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
            </MenuProvider>
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
