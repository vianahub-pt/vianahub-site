import ContactPageClient from "./ContactPageClient"

export default function ContactPage() {
  return <ContactPageClient />
}

// Metadados estáticos
export const metadata = {
  title: "Contato - VianaHub",
  description:
    "Entre em contato com a VianaHub. Estamos prontos para ajudar você a transformar suas ideias em realidade.",
  keywords: "contato, vianahub, orçamento, consultoria, desenvolvimento",
  openGraph: {
    title: "Contato - VianaHub",
    description: "Entre em contato com a VianaHub",
    type: "website",
    locale: "pt_PT",
  },
}
