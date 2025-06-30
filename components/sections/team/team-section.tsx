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
      title: t("team.features.translations.title"),
      description: t("team.features.translations.description"),
      icon: <Languages className="h-12 w-12 text-primary" />,
    },
    {
      id: 2,
      title: t("team.features.legal.title"),
      description: t("team.features.legal.description"),
      icon: <Scale className="h-12 w-12 text-primary" />,
    },
    {
      id: 3,
      title: t("team.features.payment.title"),
      description: t("team.features.payment.description"),
      icon: <CreditCard className="h-12 w-12 text-primary" />,
    },
    {
      id: 4,
      title: t("team.features.schedule.title"),
      description: t("team.features.schedule.description"),
      icon: <Clock className="h-12 w-12 text-primary" />,
    },
  ]

  return (
    <AnimatedSection id="team" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and Description */}
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">{t("team.title")}</h2>
            <div className="w-full max-w-[600px] h-1 bg-[var(--secondary-bg-color)] mb-6"></div>
            <p className="text-xl text-gray-600">
              {t("team.description")}
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
