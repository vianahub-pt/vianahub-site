import { ClientLayout } from "../ClientLayout"
import { AboutPageClient } from "./AboutPageClient"

export const metadata = {
  title: "Sobre Nós - VianaHub",
  description:
    "Conheça a VianaHub, nossa história, missão e a equipe que transforma ideias em soluções digitais inovadoras.",
}

export default function AboutPage() {
  return (
    <ClientLayout>
      <AboutPageClient />
    </ClientLayout>
  )
}
