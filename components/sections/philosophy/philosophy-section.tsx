"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Zap, Users, Languages, Scale, ChevronDown } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

export default function PhilosophySection() {
  const { t } = useLanguage()

  const philosophyItems = [
    {
      id: 1,
      title: "Translations",
      description: "Bridging Cultures, Not Just Words. Our translation services go beyond linguistic accuracy—we prioritize cultural relevance and contextual clarity. By aligning language with local business norms, we ensure that your message resonates across borders, empowering confident and effective global communication.",
      icon: <Languages className="h-12 w-12 text-primary" />,
    },
    {
      id: 2,
      title: "Legal Framework",
      description: "Structure That Protects, Strategy That Enables. Our legal foundation is built on more than compliance—it's a strategic layer that safeguards your operations and anticipates challenges. We provide clear, enforceable structures that support your business growth while respecting international and local legal standards.",
      icon: <Scale className="h-12 w-12 text-primary" />,
    },
    {
      id: 3,
      title: "Client Relationship",
      description: "Partnerships Built on Insight and Integrity. We believe lasting relationships stem from genuine alignment with our clients' goals. Through proactive collaboration, radical transparency, and tailored solutions, we become an extension of your team—focused on your long-term success, not just short-term results.",
      icon: <Users className="h-12 w-12 text-primary" />,
    },
    {
      id: 4,
      title: "Compliance",
      description: "Ethics as a Core Operating System. Compliance is not a checkbox—it's our way of working. From supplier audits to delivery, we embed ethical practices and international standards into every layer of our service, giving you peace of mind and operational confidence in even the most complex environments.",
      icon: <Shield className="h-12 w-12 text-primary" />,
    },
  ]

  return (
    <section id="philosophy" className="relative py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("philosophy_title")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("philosophy_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophyItems.map((item) => (
            <Card key={item.id} className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center md:flex-row md:text-left md:items-start">
                <div className="mb-4 md:mb-0 md:mr-6">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Three Chevrons */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center -mb-24">
        <div className="relative w-90 h-90">
          <ChevronDown className="absolute h-90 w-90 text-[var(--secondary-bg-color)] animate-bounce" style={{ animationDelay: '0s' }} />
          <ChevronDown className="absolute h-90 w-90 text-[var(--secondary-bg-color)] animate-bounce" style={{ animationDelay: '0s', transform: 'translateY(-30px)' }} />
          <ChevronDown className="absolute h-90 w-90 text-[var(--secondary-bg-color)] animate-bounce" style={{ animationDelay: '0s', transform: 'translateY(-60px)' }} />
        </div>
      </div>
    </section>
  )
}
