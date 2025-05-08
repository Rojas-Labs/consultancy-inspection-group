import HeroSection from "@/components/sections/hero/hero-section"
import TeamSection from "@/components/sections/team/team-section"
import MachinerySection from "@/components/sections/machinery/machinery-section"
import PhilosophySection from "@/components/sections/philosophy/philosophy-section"
import ContactSection from "@/components/sections/contact/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TeamSection />
      <MachinerySection />
      <PhilosophySection />
      <ContactSection />
    </main>
  )
}
