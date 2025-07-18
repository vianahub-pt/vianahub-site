"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { useTranslation } from "@/contexts/translation-context"

const footerSections = {
  "O que Fazemos": [
    { name: "Ágil", href: "/what-we-do/agile" },
    { name: "Chatbot", href: "/what-we-do/chatbot" },
    { name: "Desenvolvimento", href: "/what-we-do/development" },
    { name: "Integração de Sistemas", href: "/what-we-do/system-integration" },
    { name: "Landing Pages", href: "/what-we-do/landing-pages" },
    { name: "Terceirização", href: "/what-we-do/outsourcing" },
  ],
  Engenharia: [
    { name: "Energia Solar", href: "/engineering/solar-energy" },
    { name: "Ferroviário", href: "/engineering/railway" },
    { name: "Rodoviário", href: "/engineering/road" },
  ],
  Indústria: [
    { name: "Educação", href: "/industry/education" },
    { name: "Governo", href: "/industry/government" },
    { name: "Manufatura", href: "/industry/manufacturing" },
    { name: "Financeiros", href: "/industry/financial" },
    { name: "Varejo", href: "/industry/retail" },
    { name: "Saúde", href: "/industry/healthcare" },
  ],
  Segurança: [
    { name: "Acessos", href: "/security/access" },
    { name: "Backups", href: "/security/backups" },
    { name: "Segurança Cibernética", href: "/security/cyber-security" },
  ],
  Empresa: [
    { name: "Sobre", href: "/about" },
    { name: "Contacto", href: "/contact" },
    { name: "Carreiras", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Privacidade", href: "/privacy" },
    { name: "Termos", href: "/terms" },
  ],
}

export function Footer() {
  const { t } = useTranslation()

  return (
    <>
      <footer className="bg-viana-black dark:bg-gray-900 text-viana-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Logo e Descrição */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="VianaHub" className="h-14 w-auto" />
              </Link>
              <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-sm">{t("footer.description")}</p>

              {/* Contato */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-viana-orange dark:text-gray-400" />
                  <span className="text-sm text-white">contato@vianahub.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-viana-orange dark:text-gray-400" />
                  <span className="text-sm text-white">+55 (11) 9999-9999</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-viana-orange dark:text-gray-400" />
                  <span className="text-sm text-white">São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>

            {/* Mapa do Site - Todas as seções no mesmo nível */}
            {Object.entries(footerSections).map(([section, links]) => (
              <div key={section}>
                <h3 className="font-semibold text-viana-orange dark:text-gray-300 mb-4">{section}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-300 dark:text-gray-400 hover:text-viana-orange dark:hover:text-gray-200 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Redes Sociais */}
          <div className="border-t border-gray-700 dark:border-gray-600 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-4 mb-4 md:mb-0">
                <Link
                  href="#"
                  className="text-blue-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-gray-300 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-sky-500 dark:text-gray-400 hover:text-sky-600 dark:hover:text-gray-300 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-pink-500 dark:text-gray-400 hover:text-pink-600 dark:hover:text-gray-300 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-blue-700 dark:text-gray-400 hover:text-blue-800 dark:hover:text-gray-300 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>

              <div className="text-sm text-gray-300 dark:text-gray-400">
                {t("footer.newsletter")}
                <Button
                  size="sm"
                  className="ml-3 bg-viana-orange hover:bg-viana-yellow hover:text-viana-black dark:bg-gray-600 dark:hover:bg-gray-500 text-white"
                >
                  {t("footer.subscribe")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Seção de Direitos Autorais - Centralizada verticalmente */}
      <div className="bg-viana-gray dark:bg-gray-800 text-viana-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm min-h-[40px]">
            <div className="text-white flex items-center h-full">{t("footer.rights")}</div>
            <div className="flex space-x-4 mt-2 md:mt-0 items-center h-full">
              <Link
                href="/privacy-policy"
                className="hover:text-viana-orange dark:hover:text-gray-300 transition-colors text-white flex items-center"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                href="/terms-of-use"
                className="hover:text-viana-orange dark:hover:text-gray-300 transition-colors text-white flex items-center"
              >
                {t("footer.terms")}
              </Link>
              <Link
                href="/cookies"
                className="hover:text-viana-orange dark:hover:text-gray-300 transition-colors text-white flex items-center"
              >
                {t("footer.cookies")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Apenas o botão do WhatsApp agora */}
      <WhatsAppChat>
        <div className="fixed bottom-6 right-6 z-30">
          <Button
            size="lg"
            className="bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 shadow-lg rounded-full w-14 h-14 p-0"
            title="Atendimento WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
      </WhatsAppChat>
    </>
  )
}
