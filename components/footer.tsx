"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
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
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="VianaHub" width={40} height={40} className="h-8 w-8" />
              <span className="font-bold text-xl">VianaHub</span>
            </Link>
            <p className="text-gray-300 text-sm">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.quickLinks")}</h3>
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white p-0 h-auto justify-start"
                onClick={() => handleNavigation("/")}
              >
                {t("navbar.home")}
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white p-0 h-auto justify-start"
                onClick={() => handleNavigation("/about")}
              >
                {t("navbar.about")}
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white p-0 h-auto justify-start"
                onClick={() => handleNavigation("/careers")}
              >
                {t("navbar.careers")}
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white p-0 h-auto justify-start"
                onClick={() => handleNavigation("/contact")}
              >
                {t("navbar.contact")}
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.services")}</h3>
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white p-0 h-auto justify-start"
                onClick={() => handleNavigation("/what-we-do/development")}
              >
                {t("services.development")}
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white p-0 h-auto justify-start"
                onClick={() => handleNavigation("/what-we-do/chatbot")}
              >
                {t("services.chatbot")}
              </Button>
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white p-0 h-auto justify-start"
                onClick={() => handleNavigation("/what-we-do/outsourcing")}
              >
                {t("services.outsourcing")}
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.contact")}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300 text-sm">info@vianahub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300 text-sm">+351 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300 text-sm">Porto, Portugal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">© 2024 VianaHub. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
