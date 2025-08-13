import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { AboutPageClient } from "./AboutPageClient"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AboutPageClient />
      <Footer />
      <WhatsAppChat />
    </div>
  )
}
