"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">HERO</h3>
            <p className="mb-4">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">{t("navigation")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="link-with-chevron hover:text-primary">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="#team" className="link-with-chevron hover:text-primary">
                  {t("team")}
                </Link>
              </li>
              <li>
                <Link href="#machinery" className="link-with-chevron hover:text-primary">
                  {t("machinery")}
                </Link>
              </li>
              <li>
                <Link href="#philosophy" className="link-with-chevron hover:text-primary">
                  {t("philosophy")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="link-with-chevron hover:text-primary">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">{t("contact")}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-primary" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-primary" />
                <span>info@herocompany.com</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-primary" />
                <span>123 Hero Street, City, Country</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">{t("legal")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="link-with-chevron hover:text-primary">
                  {t("privacy_policy")}
                </Link>
              </li>
              <li>
                <Link href="#" className="link-with-chevron hover:text-primary">
                  {t("terms_of_service")}
                </Link>
              </li>
              <li>
                <Link href="#" className="link-with-chevron hover:text-primary">
                  {t("cookie_policy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} HERO. {t("all_rights_reserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}
