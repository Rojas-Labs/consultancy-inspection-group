"use client"

import { useLanguage } from "@/lib/language-context"
import MachineryCard from "./machinery-card"
import AnimatedSection from "@/components/ui/animated-section"

type MachineryItem = {
  id: number
  titleKey: string
  descriptionKey: string
  image: string
}

export default function MachinerySection() {
  const { t } = useLanguage()

  const machineryItems: MachineryItem[] = [
    {
      id: 1,
      titleKey: "machinery.items.sinotruk.title",
      descriptionKey: "machinery.items.sinotruk.description",
      image: "/5249189410493297272.jpg",
    },
    {
      id: 2,
      titleKey: "machinery.items.shacman.title",
      descriptionKey: "machinery.items.shacman.description",
      image: "/5249189410493297273.jpg",
    },
    {
      id: 3,
      titleKey: "machinery.items.howo_mixer.title",
      descriptionKey: "machinery.items.howo_mixer.description",
      image: "/5249189410493297274.jpg",
    },
    {
      id: 4,
      titleKey: "machinery.items.howo_mixer.title",
      descriptionKey: "machinery.items.howo_mixer.description",
      image: "/5249189410493297276.jpg",
    },
    {
      id: 5,
      titleKey: "machinery.items.xcmg.title",
      descriptionKey: "machinery.items.xcmg.description",
      image: "/5249189410493297277.jpg",
    },
    {
      id: 6,
      titleKey: "machinery.items.faw.title",
      descriptionKey: "machinery.items.faw.description",
      image: "/5249189410493297278.jpg",
    },
  ]

  return (
    <AnimatedSection id="machinery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">{t("machinery.title")}</h2>
          <p className="text-xl max-w-2xl mx-auto">{t("machinery.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machineryItems.map((item) => {
            const translatedTitle = t(item.titleKey)
            const translatedDescription = t(item.descriptionKey)
            
            return (
              <MachineryCard 
                key={item.id} 
                title={translatedTitle}
                description={translatedDescription}
                image={item.image} 
              />
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
