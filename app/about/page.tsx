import AboutPageClient from "./AboutPageClient"

export const metadata = {
  title: "Sobre Nós - VianaHub",
  description:
    "Conheça a história, missão e valores da VianaHub. Uma empresa dedicada à inovação tecnológica desde 2008.",
  keywords: "sobre vianahub, história, missão, valores, equipe, tecnologia",
  openGraph: {
    title: "Sobre Nós - VianaHub",
    description: "Conheça a história, missão e valores da VianaHub",
    type: "website",
    locale: "pt_PT",
  },
}

// Força renderização estática
export const dynamic = "force-static"
export const revalidate = false

export default function AboutPage() {
  return <AboutPageClient />
}
