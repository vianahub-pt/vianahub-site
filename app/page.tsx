import { TranslationProvider } from "@/contexts/translation-context"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { IndustriesSection } from "@/components/sections/industries-section"
import { TechnologiesSection } from "@/components/sections/technologies-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { InsightsSection } from "@/components/sections/insights-section"
import { CareersSection } from "@/components/sections/careers-section"
import { ParallaxSection } from "@/components/sections/parallax-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ParallaxSection />
        <IndustriesSection />
        <TechnologiesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <InsightsSection />
        <CareersSection />
        <Footer />
      </div>
    </TranslationProvider>
  )
}
