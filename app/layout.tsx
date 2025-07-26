import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TranslationProvider } from "@/contexts/translation-context"
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppChat } from "@/components/whatsapp-chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "VianaHub - Soluções Tecnológicas Inovadoras",
    template: "%s | VianaHub",
  },
  description:
    "Transformamos ideias em soluções digitais inovadoras. Desenvolvimento web, aplicações móveis, consultoria tecnológica e muito mais.",
  keywords: [
    "desenvolvimento web",
    "aplicações móveis",
    "consultoria tecnológica",
    "soluções digitais",
    "inovação",
    "tecnologia",
  ],
  authors: [{ name: "VianaHub" }],
  creator: "VianaHub",
  publisher: "VianaHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vianahub.pt"),
  alternates: {
    canonical: "/",
    languages: {
      "pt-PT": "/",
      "en-US": "/en",
      "es-ES": "/es",
      "fr-FR": "/fr",
      "de-DE": "/de",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://vianahub.pt",
    siteName: "VianaHub",
    title: "VianaHub - Soluções Tecnológicas Inovadoras",
    description:
      "Transformamos ideias em soluções digitais inovadoras. Desenvolvimento web, aplicações móveis, consultoria tecnológica e muito mais.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "VianaHub Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VianaHub - Soluções Tecnológicas Inovadoras",
    description:
      "Transformamos ideias em soluções digitais inovadoras. Desenvolvimento web, aplicações móveis, consultoria tecnológica e muito mais.",
    images: ["/logo.png"],
    creator: "@vianahub",
  },
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
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TranslationProvider>
            {children}
            <Toaster />
            <WhatsAppChat />
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
