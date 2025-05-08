"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-primary chevron-animation">
      <div className="container mx-auto px-4 py-24 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">{t("hero_title")}</h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl md:text-2xl">{t("hero_subtitle")}</p>
          <Button
            size="lg"
            className="bg-secondary text-white hover:bg-secondary/90"
            onClick={() => {
              document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            {t("hero_cta")}
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-10 w-10 text-secondary" />
      </div>
    </section>
  )
}
