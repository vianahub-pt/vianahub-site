"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

export function Footer() {
  const router = useRouter()
  const { t } = useTranslation()

  const handleNavigation = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="VianaHub" width={32} height={32} />
              <span className="text-xl font-bold">VianaHub</span>
            </div>
            <p className="text-gray-300 text-sm">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
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
                  {t("footer.webDevelopment")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/what-we-do/system-integration")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.systemIntegration")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/what-we-do/chatbot")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.chatbot")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/what-we-do/outsourcing")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.outsourcing")}
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
                  {t("footer.about")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/careers")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.careers")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t("footer.contact")}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("footer.contactInfo")}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-gray-300">contato@vianahub.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-gray-300">+55 (11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-gray-300">São Paulo, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 VianaHub. {t("footer.allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  )
}
