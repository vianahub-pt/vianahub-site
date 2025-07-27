import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VianaHub - Fox Maze Game - Aventura da Raposa no Deserto",
  description: "Um jogo de labirinto interativo onde você guia uma raposa através do deserto em busca de oásis",
  icons: {
    icon: "/fox-desktop.png",
    shortcut: "/fox-desktop.png",
    apple: "/fox-desktop.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/fox-desktop.png" type="image/png" />
        <link rel="shortcut icon" href="/fox-desktop.png" type="image/png" />
        <link rel="apple-touch-icon" href="/fox-desktop.png" />
        <meta name="theme-color" content="#f59e0b" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
