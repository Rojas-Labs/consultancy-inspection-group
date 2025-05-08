"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Languages, Scale, CreditCard, Clock } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

export default function TeamSection() {
  const { t } = useLanguage()

  const features = [
    {
      id: 1,
      title: "Translations",
      description: "Professional translation services to bridge language barriers",
      icon: <Languages className="h-12 w-12 text-primary" />,
    },
    {
      id: 2,
      title: "Legal Framework",
      description: "Comprehensive legal support and compliance guidance",
      icon: <Scale className="h-12 w-12 text-primary" />,
    },
    {
      id: 3,
      title: "Payment Solutions",
      description: "Secure and efficient payment processing options",
      icon: <CreditCard className="h-12 w-12 text-primary" />,
    },
    {
      id: 4,
      title: "On Schedule",
      description: "Timely delivery and project management",
      icon: <Clock className="h-12 w-12 text-primary" />,
    },
  ]

  return (
    <AnimatedSection id="team" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and Description */}
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">Rojas Consultancy & Inspections Group</h2>
            <div className="w-full max-w-[600px] h-1 bg-[var(--secondary-bg-color)] mb-6"></div>
            <p className="text-xl text-gray-600">
              For over 10 years, Rojas Consultancy & Inspections Group has been a trusted partner in the Chinese market, 
              with a strong and growing presence across South America. We specialize in guiding clients throughout the 
              entire sourcing and supply chain process in China—from supplier compliance and factory audits to quality 
              inspections and final delivery. Our team combines in-depth regional knowledge with international standards 
              to ensure every step meets your expectations and business goals.
            </p>
          </div>

          {/* Right side - Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card key={feature.id} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
