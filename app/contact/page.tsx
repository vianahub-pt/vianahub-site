import { ClientLayout } from "../ClientLayout"
import { ContactPageClient } from "./ContactPageClient"

export const metadata = {
  title: "Contato - VianaHub",
  description:
    "Entre em contato conosco. Vamos conversar sobre como podemos ajudar seu negócio a crescer com tecnologia.",
}

export default function ContactPage() {
  return (
    <ClientLayout>
      <ContactPageClient />
    </ClientLayout>
  )
}
