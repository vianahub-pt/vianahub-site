"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/components/translation-context"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt={t("footer.companyName")} width={40} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-gray-300 text-sm">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/what-we-do/development"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t("footer.whatWeDo.development")}
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/agile" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t("footer.whatWeDo.agile")}
                </Link>
              </li>
              <li>
                <Link href="/what-we-do/chatbot" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t("footer.whatWeDo.chatbot")}
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/outsourcing"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t("footer.whatWeDo.outsourcing")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.industries")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/industry/healthcare" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t("footer.link.industry.healthcare")}
                </Link>
              </li>
              <li>
                <Link href="/industry/financial" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t("footer.link.industry.financial")}
                </Link>
              </li>
              <li>
                <Link href="/industry/education" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t("footer.link.industry.education")}
                </Link>
              </li>
              <li>
                <Link href="/industry/retail" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t("footer.link.industry.retail")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300 text-sm">
                <Mail className="h-4 w-4 mr-2" />
                {t("footer.email")}
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                {t("footer.phone")}
              </li>
              <li className="flex items-start text-gray-300 text-sm">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span dangerouslySetInnerHTML={{ __html: t("footer.address") }} />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">{t("footer.copyright")}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t("footer.privacy")}
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
