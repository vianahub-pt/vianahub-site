import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";
import Providers from "./providers";
import { TranslationProvider } from "@/components/translation-context";
import Script from "next/script";
import CookieBanner from "@/components/cookie-banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "VianaHub - Desenvolvimento de Software, Consultoria e Soluções Tecnológicas",
  description:
    "A VianaHub transforma ideias em soluções digitais inovadoras. Atuamos em desenvolvimento de software com o auxilio da inteligência artificial supervisionada por humanos, metodologias ágeis, outsourcing de IT, chatbots, landing pages, integração de sistemas, soluções para transporte ferroviário e rodoviário, além de projetos em energia solar.  Tecnologia sob medida para o seu negócio. ",
  keywords:
    "VianaHub, desenvolvimento de software, consultoria tecnológica, soluções digitais, inovação em tecnologia, metodologias ágeis, outsourcing IT, chatbot, landing pages, integração de sistemas, transporte ferroviário, transporte rodoviário, energia solar, inteligência artificial, IA, jogo, games, software development, IT consulting, digital solutions, custom software solutions, technology innovation, agile methodologies, IT outsourcing, AI chatbot, landing page creation, system integration, railway transport, road transport, solar energy, artificial intelligence, videojuegos, desarrollo de software, consultoría tecnológica, soluciones digitales, externalización TI, chatbot IA, integración de sistemas, transporte ferroviario, transporte por carretera, energía solar, intelligence logicielle, développement logiciel, solutions numériques, conseils informatiques, externalisation, chatbot IA, intégration de systèmes, transport ferroviaire, transport routier, énergie solaire, Softwareentwicklung, IT-Beratung, digitale Lösungen, Outsourcing IT, KI-Chatbot, Systemintegration, Bahntransport, Straßentransport, Solarenergie, gioco, sviluppo software, consulenza informatica, soluzioni digitali, esternalizzazione IT, chatbot IA, integrazione sistemi, trasporto ferroviario, trasporto stradale, energia solare",

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
        {/* Favicon padrão */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Favicon PNG para navegadores modernos */}
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="16x16" />

        {/* Favicon para dispositivos Apple */}
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />

        {/* Favicon para Android e PWA */}
        <link rel="icon" href="/android-icon-192x192.png" sizes="192x192" />
        <link rel="icon" href="/android-icon-512x512.png" sizes="512x512" />
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
            <CookieBanner />
          </Providers>
        </TranslationProvider>
      </body>
    </html>
  );
}
