import type { Metadata } from "next"
import ContactPageClient from "./contact-page-client"

export const metadata: Metadata = {
  title: "Contacto - VianaHub",
  description:
    "Entre em contacto connosco. Estamos aqui para ajudar a transformar as suas ideias em soluções digitais inovadoras.",
  keywords: "contacto, contato, suporte, ajuda, VianaHub",
  openGraph: {
    title: "Contacto - VianaHub",
    description:
      "Entre em contacto connosco. Estamos aqui para ajudar a transformar as suas ideias em soluções digitais inovadoras.",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
