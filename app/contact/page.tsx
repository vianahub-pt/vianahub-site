import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contacto - Entre em Contacto Connosco | VianaHub",
  description:
    "Entre em contacto com a VianaHub. Estamos prontos para discutir o seu próximo projeto e como podemos ajudar a transformar as suas ideias em realidade.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
