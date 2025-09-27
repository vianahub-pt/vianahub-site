import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";
import Providers from "./providers";
import { TranslationProvider } from "@/components/translation-context";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "VianaHub - Desenvolvimento de Software, Consultoria e Soluções Tecnológicas",
  description:
    "A VianaHub transforma ideias em soluções digitais inovadoras. Atuamos em desenvolvimento de software com o auxilio da inteligência artificial supervisionada por humanos, metodologias ágeis, outsourcing de IT, chatbots, landing pages, integração de sistemas, soluções para transporte ferroviário e rodoviário, além de projetos em energia solar.  Tecnologia sob medida para o seu negócio. ",
  keywords:
    "VianaHub, desenvolvimento de software, consultoria tecnológica, soluções digitais, inovação em tecnologia, metodologias ágeis, outsourcing IT, chatbot, criação de landing pages, integração de sistemas, transporte ferroviário, transporte rodoviário, energia solar, tecnologia empresarial, inteligência artificial, inteligência artificial supervisionada por humanos, IA",
  authors: [{ name: "VianaHub" }],
  creator: "VianaHub",
  publisher: "VianaHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vianahub.com"),
  alternates: {
    canonical: "/",
    languages: {
      "pt-PT": "/pt",
      "en-US": "/en",
      "es-ES": "/es",
      "fr-FR": "/fr",
      "de-DE": "/de",
      "it-IT": "/it",
    },
  },
  openGraph: {
    title:
      "VianaHub - Inovação em Desenvolvimento de Software e Soluções Digitais",
    description:
      "Oferecemos serviços em desenvolvimento de software, metodologias ágeis, outsourcing, chatbots, landing pages, integração de sistemas, transporte ferroviário e rodoviário, além de energia solar. VianaHub: tecnologia feita para transformar negócios.",
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
    title: "VianaHub - Desenvolvimento de Software e Soluções Tecnológicas",
    description:
      "Transformamos ideias em soluções digitais inovadoras: desenvolvimento de software, agile, outsourcing, chatbots, landing pages, integração de sistemas, transporte ferroviário, transporte rodoviário e energia solar.",
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
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function() {
            var supported = ["pt-BR","pt-PT","en-US","es-ES","fr-FR","de-DE","it-IT"];
            var defaultLang = "en-US";
            var userLang = (navigator.languages && navigator.languages[0]) || navigator.language || defaultLang;
            // normaliza para ex: pt-BR
            userLang = userLang.split('-')[0];
            var match = supported.find(function(l) {
              return l.toLowerCase().startsWith(userLang.toLowerCase());
            });
            document.documentElement.setAttribute("lang", match || defaultLang);
          })();
        `,
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BQV9ZC3W6C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BQV9ZC3W6C');
          `}
        </Script>
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
