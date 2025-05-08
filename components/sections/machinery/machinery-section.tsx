"use client"

import { useLanguage } from "@/lib/language-context"
import MachineryCard from "./machinery-card"

type MachineryItem = {
  id: number
  title: string
  description: string
  image: string
}

export default function MachinerySection() {
  const { t } = useLanguage()

  const machineryItems: MachineryItem[] = [
    {
      id: 1,
      title: "Heavy Excavator XL-5000",
      description: "Our flagship excavator with advanced hydraulic systems and precision control.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Bulldozer Pro-8",
      description: "Powerful bulldozer designed for the toughest terrain and construction projects.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Crane System T-120",
      description: "High-capacity crane with extended reach and stability for tall structures.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Loader L-3500",
      description: "Versatile loader with quick attachment changes and superior fuel efficiency.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Concrete Mixer CM-800",
      description: "Industrial-grade mixer with precise measurement and mixing capabilities.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Paver P-2000",
      description: "Advanced paving machine with automated leveling and width adjustment.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="machinery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">{t("machinery_title")}</h2>
          <p className="text-xl max-w-2xl mx-auto">{t("machinery_subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machineryItems.map((item) => (
            <MachineryCard key={item.id} title={item.title} description={item.description} image={item.image} />
          ))}
        </div>
      </div>
    </section>
  )
}
