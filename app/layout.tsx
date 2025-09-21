import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";
import Providers from "./providers";
import { TranslationProvider } from "@/components/translation-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VianaHub - Soluções Tecnológicas Inovadoras",
  description:
    "Transformamos ideias em soluções digitais inovadoras. Desenvolvimento de software, consultoria tecnológica e soluções personalizadas para o seu negócio.",
  keywords:
    "desenvolvimento de software, consultoria tecnológica, soluções digitais, inovação, tecnologia",
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
      "pt-PT": "/pt",
      "en-US": "/en",
      "es-ES": "/es",
      "fr-FR": "/fr",
      "de-DE": "/de",
    },
  },
  openGraph: {
    title: "VianaHub - Soluções Tecnológicas Inovadoras",
    description:
      "Transformamos ideias em soluções digitais inovadoras. Desenvolvimento de software, consultoria tecnológica e soluções personalizadas para o seu negócio.",
    url: "https://vianahub.pt",
    siteName: "VianaHub",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "VianaHub Logo",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VianaHub - Soluções Tecnológicas Inovadoras",
    description:
      "Transformamos ideias em soluções digitais inovadoras. Desenvolvimento de software, consultoria tecnológica e soluções personalizadas para o seu negócio.",
    images: ["/logo.png"],
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
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
    (function() {
      try {
        var theme = localStorage.getItem('vianahub-theme');
        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        }
      } catch (e) {}
    })();
  `,
          }}
        />
      </head>
      <body className={inter.className}>
        <TranslationProvider>
          <Providers>
            <ClientLayout>{children}</ClientLayout>
          </Providers>
        </TranslationProvider>
      </body>
    </html>
  );
}
