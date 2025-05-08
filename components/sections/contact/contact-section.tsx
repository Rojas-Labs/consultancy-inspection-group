"use client"

import type React from "react"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

export default function ContactSection() {
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <section id="contact" className="relative py-20 bg-primary chevron-animation">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">{t("contact_title")}</h2>
          <p className="text-xl max-w-2xl mx-auto">{t("contact_subtitle")}</p>
        </div>

        <Card className="max-w-2xl mx-auto border-none shadow-xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input placeholder={t("your_name")} className="border-primary/30 focus-visible:ring-primary" required />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t("your_email")}
                  className="border-primary/30 focus-visible:ring-primary"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder={t("your_message")}
                  className="min-h-32 border-primary/30 focus-visible:ring-primary"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-secondary text-white hover:bg-secondary/90">
                {t("send_message")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-10 w-10 text-secondary" />
      </div>
    </section>
  )
}
