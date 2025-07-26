import type React from "react"
import type { Metadata } from "next"
import { Inter, Kurale } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TranslationProvider } from "@/contexts/translation-context"
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { PreferencesDialog } from "@/components/preferences-dialog"

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
  keywords: "desenvolvimento software, consultoria TI, soluções digitais, tecnologia, inovação, VianaHub",
  authors: [{ name: "VianaHub" }],
  creator: "VianaHub",
  publisher: "VianaHub",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://vianahub.pt",
    siteName: "VianaHub",
    title: "VianaHub - Soluções Tecnológicas Inovadoras",
    description:
      "Transformamos ideias em soluções digitais. Desenvolvimento de software, consultoria em TI e soluções personalizadas para o seu negócio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VianaHub - Soluções Tecnológicas Inovadoras",
    description:
      "Transformamos ideias em soluções digitais. Desenvolvimento de software, consultoria em TI e soluções personalizadas para o seu negócio.",
  },
}

// Esta função garante que o layout seja estático
export function generateStaticParams() {
  return []
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://vianahub.pt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF6B35" />
      </head>
      <body className={`${inter.className} ${kurale.variable} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <TranslationProvider>
            <div className="min-h-screen w-full max-w-full">
              {children}
              <Toaster />
              <WhatsAppChat />
              <PreferencesDialog />
            </div>
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
