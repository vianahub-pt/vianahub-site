import DevelopmentPageClient from "./DevelopmentPageClient"

export const metadata = {
  title: "Desenvolvimento - VianaHub",
  description:
    "Desenvolvimento de software personalizado. Aplicações web, mobile e sistemas corporativos com tecnologia de ponta.",
  keywords: "desenvolvimento, software, web, mobile, aplicações, sistemas",
  openGraph: {
    title: "Desenvolvimento - VianaHub",
    description: "Desenvolvimento de software personalizado",
    type: "website",
    locale: "pt_PT",
  },
}

export default function DevelopmentPage() {
  return <DevelopmentPageClient />
}
