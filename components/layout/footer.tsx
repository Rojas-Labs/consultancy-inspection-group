"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">{t("footer.company_name")}</h3>
            <p className="text-gray-600 mb-6">{t("footer.tagline")}</p>
            <div className="w-full max-w-[280px] h-1 bg-[var(--secondary-bg-color)]"></div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">{t("footer.navigation")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="hover:text-primary">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-primary">
                  {t("team.title")}
                </Link>
              </li>
              <li>
                <Link href="#machinery" className="hover:text-primary">
                  {t("machinery.title")}
                </Link>
              </li>
              <li>
                <Link href="#philosophy" className="hover:text-primary">
                  {t("philosophy.title")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary">
                  {t("contact.title")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">{t("contact.title")}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-primary" />
                <span>+7 (930) 3388 124</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-primary" />
                <span>sales@rggca.cn</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-primary" />
                <span>Sherbinka District, Moscow Russia</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">{t("footer.legal")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-primary">
                  {t("footer.privacy_policy")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  {t("footer.terms_of_service")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  {t("footer.cookie_policy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} {t("footer.company_name")}. {t("footer.all_rights_reserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}
