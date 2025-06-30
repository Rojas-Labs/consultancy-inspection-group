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
      titleKey: "philosophy.items.translations.title",
      descriptionKey: "philosophy.items.translations.description",
      icon: <Languages className="h-12 w-12 text-primary" />,
    },
    {
      id: 2,
      titleKey: "philosophy.items.legal.title",
      descriptionKey: "philosophy.items.legal.description",
      icon: <Scale className="h-12 w-12 text-primary" />,
    },
    {
      id: 3,
      titleKey: "philosophy.items.client.title",
      descriptionKey: "philosophy.items.client.description",
      icon: <Users className="h-12 w-12 text-primary" />,
    },
    {
      id: 4,
      titleKey: "philosophy.items.compliance.title",
      descriptionKey: "philosophy.items.compliance.description",
      icon: <Shield className="h-12 w-12 text-primary" />,
    },
  ]

  return (
    <section id="philosophy" className="relative py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("philosophy.title")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("philosophy.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophyItems.map((item) => (
            <Card key={item.id} className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center md:flex-row md:text-left md:items-start">
                <div className="mb-4 md:mb-0 md:mr-6">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t(item.titleKey)}</h3>
                  <p className="text-gray-600">{t(item.descriptionKey)}</p>
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
