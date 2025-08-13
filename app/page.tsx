import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { IndustriesSection } from "@/components/sections/industries-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { InsightsSection } from "@/components/sections/insights-section"
import { CareersSection } from "@/components/sections/careers-section"
import { EntertainmentSection } from "@/components/sections/entertainment-section"
import { TechnologiesSection } from "@/components/sections/technologies-section"
import { ClientLayout } from "./ClientLayout"

export const metadata = {
  title: "VianaHub - Soluções Tecnológicas Inovadoras",
  description:
    "Transformamos ideias em soluções digitais de alta qualidade. Desenvolvimento web, mobile, sistemas corporativos e consultoria em tecnologia.",
}

export default function HomePage() {
  return (
    <ClientLayout>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <TechnologiesSection />
      <InsightsSection />
      <CareersSection />
      <EntertainmentSection />
    </ClientLayout>
  )
}
