"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Zap, Users } from "lucide-react"

export default function PhilosophySection() {
  const { t } = useLanguage()

  const philosophyItems = [
    {
      id: 1,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from the smallest details to the largest projects.",
      icon: <Award className="h-12 w-12 text-primary" />,
    },
    {
      id: 2,
      title: "Safety",
      description: "Safety is our top priority. We ensure the wellbeing of our team, clients, and the environment.",
      icon: <Shield className="h-12 w-12 text-primary" />,
    },
    {
      id: 3,
      title: "Innovation",
      description: "We embrace innovation and continuously seek new technologies and methods to improve our services.",
      icon: <Zap className="h-12 w-12 text-primary" />,
    },
    {
      id: 4,
      title: "Teamwork",
      description: "We believe in the power of collaboration and foster a culture of teamwork and mutual respect.",
      icon: <Users className="h-12 w-12 text-primary" />,
    },
  ]

  return (
    <section id="philosophy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">{t("philosophy_title")}</h2>
          <p className="text-xl max-w-2xl mx-auto">{t("philosophy_subtitle")}</p>
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
    </section>
  )
}
