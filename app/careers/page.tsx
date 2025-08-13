import { ClientLayout } from "../ClientLayout"
import { CareersPageContent } from "./careers-page-content"

export const metadata = {
  title: "Carreiras - VianaHub",
  description:
    "Junte-se à nossa equipe! Descubra oportunidades de carreira na VianaHub e faça parte da transformação digital.",
}

export default function CareersPage() {
  return (
    <ClientLayout>
      <CareersPageContent />
    </ClientLayout>
  )
}
