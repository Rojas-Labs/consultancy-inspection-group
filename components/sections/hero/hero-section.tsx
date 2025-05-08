"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

const backgrounds = [
  "/church-mountain-bg.mp4",
  "/road-truck-aus-bg.mp4",
  "/showcase-fw-bg.mp4"
]

export default function HeroSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [currentBg, setCurrentBg] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentBg((prev) => (prev + 1) % backgrounds.length)
        setIsTransitioning(false)
      }, 1000) // Match this with the transition duration in CSS
    }, 8000) // Change background every 8 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-start bg-primary">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {backgrounds.map((bg, index) => (
          <video
            key={bg}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentBg && !isTransitioning ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={bg} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 max-w-2xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative z-10 max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl uppercase">
              Complete <span className="text-[var(--secondary-bg-color)]">Consultancy</span> and <span className="text-[var(--secondary-bg-color)]">Inspections</span> Services
            </h1>
            <Button
              className="border-2 border-white text-white hover:border-[var(--secondary-bg-color)] hover:text-[var(--secondary-bg-color)] transition-colors duration-300 hover:bg-transparent"
              size="lg"
              onClick={() => {
                document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {t("hero_cta")}
            </Button>
          </div>
        </div>
      </div>

      {/* Three Chevrons */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center -mb-24">
        <div className="relative w-60 h-60">
          <ChevronDown className="absolute h-60 w-60 text-[var(--secondary-bg-color)] animate-bounce" style={{ animationDelay: '0s' }} />
          <ChevronDown className="absolute h-60 w-60 text-[var(--secondary-bg-color)] animate-bounce" style={{ animationDelay: '0s', transform: 'translateY(-20px)' }} />
          <ChevronDown className="absolute h-60 w-60 text-[var(--secondary-bg-color)] animate-bounce" style={{ animationDelay: '0s', transform: 'translateY(-40px)' }} />
        </div>
      </div>
    </section>
  )
}
