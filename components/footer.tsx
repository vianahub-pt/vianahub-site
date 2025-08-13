"use client"

import Link from "next/link"
import { useTranslation } from "@/contexts/translation-context"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const { t } = useTranslation()

  const handleLinkClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="VianaHub" className="h-8 w-auto" />
              <span className="font-bold text-xl text-viana-orange">VianaHub</span>
            </div>
            <p className="text-gray-300">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-viana-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-viana-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-viana-orange transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-viana-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.services.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/what-we-do/development"
                  className="text-gray-300 hover:text-viana-orange transition-colors"
                  onClick={handleLinkClick}
                >
                  {t("footer.services.development")}
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/chatbot"
                  className="text-gray-300 hover:text-viana-orange transition-colors"
                  onClick={handleLinkClick}
                >
                  {t("footer.services.chatbot")}
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/agile"
                  className="text-gray-300 hover:text-viana-orange transition-colors"
                  onClick={handleLinkClick}
                >
                  {t("footer.services.agile")}
                </Link>
              </li>
              <li>
                <Link
                  href="/security/cyber-security"
                  className="text-gray-300 hover:text-viana-orange transition-colors"
                  onClick={handleLinkClick}
                >
                  {t("footer.services.security")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.industries.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/industry/healthcare"
                  className="text-gray-300 hover:text-viana-orange transition-colors"
                  onClick={handleLinkClick}
                >
                  {t("footer.industries.healthcare")}
                </Link>
              </li>
              <li>
                <Link
                  href="/industry/financial"
                  className="text-gray-300 hover:text-viana-orange transition-colors"
                  onClick={handleLinkClick}
                >
                  {t("footer.industries.financial")}
                </Link>
              </li>
              <li>
                <Link
                  href="/industry/education"
                  className="text-gray-300 hover:text-viana-orange transition-colors"
                  onClick={handleLinkClick}
                >
                  {t("footer.industries.education")}
                </Link>
              </li>
              <li>
                <Link
                  href="/industry/retail"
                  className="text-gray-300 hover:text-viana-orange transition-colors"
                  onClick={handleLinkClick}
                >
                  {t("footer.industries.retail")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.contact.title")}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-viana-orange" />
                <span className="text-gray-300">contato@vianahub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-viana-orange" />
                <span className="text-gray-300">+55 (11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-viana-orange" />
                <span className="text-gray-300">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 VianaHub. {t("footer.rights")}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/about"
              className="text-gray-400 hover:text-viana-orange text-sm transition-colors"
              onClick={handleLinkClick}
            >
              {t("footer.links.about")}
            </Link>
            <Link
              href="/careers"
              className="text-gray-400 hover:text-viana-orange text-sm transition-colors"
              onClick={handleLinkClick}
            >
              {t("footer.links.careers")}
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-viana-orange text-sm transition-colors"
              onClick={handleLinkClick}
            >
              {t("footer.links.contact")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
