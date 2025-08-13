import type { Metadata } from "next"
import AboutPageClient from "./about-page-client"

export const metadata: Metadata = {
  title: "Sobre Nós - VianaHub",
  description:
    "Conheça a história, missão e valores da VianaHub. Descubra como transformamos ideias em soluções digitais inovadoras.",
  keywords: "sobre nós, história, missão, valores, equipa, VianaHub",
  openGraph: {
    title: "Sobre Nós - VianaHub",
    description:
      "Conheça a história, missão e valores da VianaHub. Descubra como transformamos ideias em soluções digitais inovadoras.",
    images: ["/about-pt-pt.jpg"],
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
