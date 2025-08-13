import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { CareersPageContent } from "./careers-page-content"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CareersPageContent />
      <Footer />
      <WhatsAppChat />
    </div>
  )
}
