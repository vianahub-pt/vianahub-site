"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { WhatsAppChat } from "@/components/whatsapp-chat";
import { useTranslation } from "@/contexts/translation-context";

export function Footer() {
  const { t } = useTranslation();

  const footerSections = {
    [t("footer.sections.whatWeDo")]: [
      { name: t("footer.links.agile"), href: "/what-we-do/agile" },
      { name: t("footer.links.chatbot"), href: "/what-we-do/chatbot" },
      { name: t("footer.links.development"), href: "/what-we-do/development" },
      {
        name: t("footer.links.integration"),
        href: "/what-we-do/system-integration",
      },
      { name: t("footer.links.landing"), href: "/what-we-do/landing-pages" },
      { name: t("footer.links.outsourcing"), href: "/what-we-do/outsourcing" },
    ],
    [t("footer.sections.engineering")]: [
      { name: t("footer.links.solar"), href: "/engineering/solar-energy" },
      { name: t("footer.links.railway"), href: "/engineering/railway" },
      { name: t("footer.links.road"), href: "/engineering/road" },
    ],
    [t("footer.sections.industry")]: [
      { name: t("footer.links.education"), href: "/industry/education" },
      { name: t("footer.links.government"), href: "/industry/government" },
      {
        name: t("footer.links.manufacturing"),
        href: "/industry/manufacturing",
      },
      { name: t("footer.links.financial"), href: "/industry/financial" },
      { name: t("footer.links.retail"), href: "/industry/retail" },
      { name: t("footer.links.healthcare"), href: "/industry/healthcare" },
    ],
    [t("footer.sections.security")]: [
      { name: t("footer.links.access"), href: "/security/access" },
      { name: t("footer.links.backups"), href: "/security/backups" },
      {
        name: t("footer.links.cybersecurity"),
        href: "/security/cyber-security",
      },
    ],
    [t("footer.sections.company")]: [
      { name: t("footer.links.about"), href: "/about" },
      { name: t("footer.links.contact"), href: "/contact" },
      { name: t("footer.links.careers"), href: "/careers" },
      { name: t("footer.links.blog"), href: "/blog" },
      { name: t("footer.links.privacy"), href: "/privacy" },
      { name: t("footer.links.terms"), href: "/terms" },
    ],
  };

  return (
    <>
      <footer className="bg-viana-black dark:bg-gray-900 text-viana-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Logo e Descrição */}
            <div className="lg:col-span-1">
              <div className="flex items-center justify-center mb-4">
                <Link href="/" className="flex items-center">
                  <img
                    src="/face.png"
                    alt="VianaHub"
                    className="h-14"
                    style={{ width: "150%" }}
                  />
                </Link>
              </div>
              <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-sm">
                {t("footer.description")}
              </p>

              {/* Contato */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-viana-orange dark:text-gray-400" />
                  <span className="text-sm text-white">
                    contato@vianahub.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-viana-orange dark:text-gray-400" />
                  <span className="text-sm text-white">+55 (11) 9999-9999</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-viana-orange dark:text-gray-400" />
                  <span className="text-sm text-white">
                    {t("footer.location")}
                  </span>
                </div>
              </div>
            </div>

            {/* Mapa do Site - Todas as seções no mesmo nível */}
            {Object.entries(footerSections).map(([section, links]) => (
              <div key={section}>
                <h3 className="font-semibold text-viana-orange dark:text-gray-300 mb-4">
                  {section}
                </h3>
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
            <div className="text-white flex items-center h-full">
              {t("footer.rights")}
            </div>
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
            title={t("footer.whatsapp")}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
      </WhatsAppChat>
    </>
  );
}
