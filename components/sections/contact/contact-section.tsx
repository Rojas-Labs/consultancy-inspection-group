"use client"

import type React from "react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/ui/animated-section"

export default function ContactSection() {
  const { t } = useLanguage()

  return (
    <AnimatedSection id="contact" className="relative py-20 bg-[var(--secondary-bg-color)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tight mb-4 md:text-5xl lg:text-7xl uppercase">
            <span className="text-[var(--secondary-bg-color)] [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">READY TO START YOUR </span>
            <span className="text-black">PROJECT?</span>
          </h2>
          <Button 
            variant="outline" 
            className="mt-8 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 text-lg px-8 py-6"
          >
            {t("contact.send")}
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}
