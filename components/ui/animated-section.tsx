"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  id?: string
}

export default function AnimatedSection({ 
  children, 
  className = "", 
  threshold = 0.1,
  rootMargin = "0px",
  id
}: AnimatedSectionProps) {
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
        threshold,
        rootMargin
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
  }, [threshold, rootMargin])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`transition-all duration-1000 transform ${
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </section>
  )
} 