"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/contexts/translation-context"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="VianaHub" width={40} height={40} className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold">VianaHub</span>
            </Link>
            <p className="text-gray-300 text-sm">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("footer.services")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNavigation("/what-we-do/development")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("menu.development")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/what-we-do/chatbot")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("menu.chatbot")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/what-we-do/agile")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("menu.agile")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/what-we-do/outsourcing")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("menu.outsourcing")}
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("footer.company")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNavigation("/about")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("nav.about")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/careers")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("nav.careers")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("nav.contact")}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("footer.contact")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-gray-300">info@vianahub.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-gray-300">+351 123 456 789</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-gray-300">Lisboa, Portugal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 VianaHub. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
