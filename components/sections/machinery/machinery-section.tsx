"use client"

import { useLanguage } from "@/lib/language-context"
import MachineryCard from "./machinery-card"
import AnimatedSection from "@/components/ui/animated-section"

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
      title: "Sinotruk SITRAK G7S (Tractor Truck)",
      description: "A high-end long-haul tractor truck equipped with a powerful diesel engine (up to 540 HP) and advanced safety systems. Designed for efficiency and driver comfort, it's ideal for heavy-duty logistics across long distances.",
      image: "/5249189410493297272.jpg",
    },
    {
      id: 2,
      title: "SHACMAN F3000 Dump Truck",
      description: "A robust dump truck built for heavy-duty operations in construction and mining. Features a Weichai WP12.430E201 engine (430 HP), reinforced chassis, and a large cargo box (7500×2300×1500 mm) for maximum load capacity.",
      image: "/5249189410493297273.jpg",
    },
    {
      id: 3,
      title: "HOWO Concrete Mixer Truck",
      description: "A reliable concrete mixer truck mounted on a HOWO chassis, powered by a Weichai WP10.380E22 engine (380 HP). Equipped with a 10 m³ drum and advanced hydraulic systems for consistent and efficient concrete mixing on-site.",
      image: "/5249189410493297274.jpg",
    },
    {
      id: 4,
      title: "HOWO Concrete Mixer Truck",
      description: "A reliable concrete mixer truck mounted on a HOWO chassis, powered by a Weichai WP10.380E22 engine (380 HP). Equipped with a 10 m³ drum and advanced hydraulic systems for consistent and efficient concrete mixing on-site.",
      image: "/5249189410493297276.jpg",
    },
    {
      id: 5,
      title: "XCMG XCA1200 All-Terrain Crane",
      description: "A versatile 1,200-ton all-terrain crane designed for erecting and maintaining wind turbines (2.0–2.5 MW). Features a 7-section telescopic boom (18.5–102 m) and an independent heavy-duty suspension system for superior off-road mobility.",
      image: "/5249189410493297277.jpg",
    },
    {
      id: 6,
      title: "FAW Jiefang J6P (Tractor Truck)",
      description: "A heavy-duty tractor truck with a Weichai WD615.38 engine (380 HP), known for its durability and fuel efficiency. Equipped with a comfortable sleeper cab and advanced braking systems, it's suitable for long-haul transportation.",
      image: "/5249189410493297278.jpg",
    },
  ]

  return (
    <AnimatedSection id="machinery" className="py-20 bg-gray-50">
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
    </AnimatedSection>
  )
}
