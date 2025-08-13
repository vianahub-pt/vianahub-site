import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { ContactPageClient } from "./ContactPageClient"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ContactPageClient />
      <Footer />
      <WhatsAppChat />
    </div>
  )
}
