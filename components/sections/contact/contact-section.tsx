"use client"

import type React from "react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export default function ContactSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px"
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="relative py-20 bg-[var(--secondary-bg-color)]">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible 
            ? "translate-y-0 opacity-100" 
            : "translate-y-10 opacity-0"
        }`}>
          <h2 className="text-4xl font-black tracking-tight mb-4 md:text-5xl lg:text-7xl uppercase">
            <span className="text-[var(--secondary-bg-color)] [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">READY TO START YOUR</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-transparent to-transparent [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]"> PROJECT</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-transparent to-transparent [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">?</span>
          </h2>
          <Button 
            variant="outline" 
            className="mt-8 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 text-lg px-8 py-6"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  )
}
