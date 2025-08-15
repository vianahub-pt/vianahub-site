import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { IndustriesSection } from "@/components/sections/industries-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { InsightsSection } from "@/components/sections/insights-section"
import { EntertainmentSection } from "@/components/sections/entertainment-section"
import { ParallaxSection } from "@/components/sections/parallax-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ParallaxSection />
      <EntertainmentSection />
      <ServicesSection />
      <ProjectsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <InsightsSection />
    </div>
  )
}
