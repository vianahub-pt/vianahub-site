import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { InsightsSection } from "@/components/sections/insights-section";
import { EntertainmentSection } from "@/components/sections/entertainment-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      {/* Parallax Section */}
      <section
        className="relative h-[500px] overflow-hidden"
        style={{
          backgroundImage: "url('/parallax-hero.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </section>
      <EntertainmentSection />
      <ServicesSection />
      <ProjectsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <InsightsSection />
    </div>
  );
}
