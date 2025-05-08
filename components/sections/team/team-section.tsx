"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

type TeamMember = {
  id: number
  name: string
  role: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export default function TeamSection() {
  const { t } = useLanguage()

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@example.com",
      },
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "CTO",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@example.com",
      },
    },
    {
      id: 3,
      name: "Mikhail Petrov",
      role: "Operations Director",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        email: "mikhail@example.com",
      },
    },
    {
      id: 4,
      name: "Emma Williams",
      role: "Lead Engineer",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emma@example.com",
      },
    },
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">{t("team_title")}</h2>
          <p className="text-xl max-w-2xl mx-auto">{t("team_subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <div className="flex space-x-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-600 hover:text-primary">
                        <Linkedin size={18} />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-gray-600 hover:text-primary">
                        <Twitter size={18} />
                        <span className="sr-only">Twitter</span>
                      </a>
                    )}
                    {member.social.email && (
                      <a href={`mailto:${member.social.email}`} className="text-gray-600 hover:text-primary">
                        <Mail size={18} />
                        <span className="sr-only">Email</span>
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
