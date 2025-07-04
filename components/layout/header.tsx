"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "./language-toggle"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function Header() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t("home"), href: "#hero" },
    { name: t("team.title"), href: "#team" },
    { name: t("machinery.title"), href: "#machinery" },
    { name: t("philosophy.title"), href: "#philosophy" },
    { name: t("contact.title"), href: "#contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-black`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="#hero" className="hidden md:flex items-center space-x-2 text-2xl font-bold text-white">
          <Image
            src="/logo-tr-bg.png"
            alt="Rojas Consultancy Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <span>Rojas Consultancy & Inspections Group</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="link-with-chevron text-white hover:text-primary transition-colors uppercase font-medium tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <LanguageToggle />

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-secondary">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="link-with-chevron text-white hover:text-primary transition-colors uppercase font-medium tracking-wide"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
