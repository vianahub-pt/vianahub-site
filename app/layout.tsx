import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

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
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'