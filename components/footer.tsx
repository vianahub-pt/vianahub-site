"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/components/translation-context";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Sun,
  Info,
  User2Icon,
  Heart,
  DollarSign,
  GraduationCap,
  Landmark,
  Factory,
  Shield,
  LucideTwitter,
  Code2,
  Workflow,
  Users,
  Bot,
  Layout,
  Waypoints,
  Train,
  Truck,
} from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");

  useEffect(() => setMounted(true), []);

  return (
    <footer className="bg-orange-900 text-white dark:bg-black dark:text-orange-400 text-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              {mounted && (
                <Image
                  src={
                    isDark
                      ? "/logo-default-orange.png"
                      : "/logo-default-white.png"
                  }
                  alt="VianaHub"
                  className="h-[80%] w-auto"
                  width={200}
                  height={100}
                  priority
                />
              )}
            </Link>
            <p className="text-orange-400 dark:text-white text-sm">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href={t("footer.facebook.url")}
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                title="Face Book"
              >
                <Facebook className="h-4 w-4 stroke-white dark:stroke-gray-400" />
              </a>
              <a
                href={t("footer.instagram.url")}
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                title="Instagram"
              >
                <Instagram className="h-4 w-4 stroke-white dark:stroke-gray-400" />
              </a>
              <a
                href={t("footer.linkedin.url")}
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4 stroke-white dark:stroke-gray-400" />
              </a>
            </div>
          </div>

          {/* What We Do */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.whatWeDo")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/what-we-do/development"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  title={t("footer.whatWeDo.development")}
                >
                  <div className="flex items-center text-orange-400 dark:text-white">
                    <Code2 className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                    <span className="ml-2">
                      {t("footer.whatWeDo.development")}
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/agile"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  title={t("footer.whatWeDo.agile")}
                >
                  <div className="flex items-center text-orange-400 dark:text-white">
                    <Workflow className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                    <span className="ml-2">{t("footer.whatWeDo.agile")}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/outsourcing"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  title={t("footer.whatWeDo.outsourcing")}
                >
                  <div className="flex items-center text-orange-400 dark:text-white">
                    <Bot className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                    <span className="ml-2">
                      {t("footer.whatWeDo.outsourcing")}
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/chatbot"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  title={t("footer.whatWeDo.chatbot")}
                >
                  <div className="flex items-center text-orange-400 dark:text-white">
                    <Users className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                    <span className="ml-2">{t("footer.whatWeDo.chatbot")}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/landing-pages/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  title={t("footer.whatWeDo.landingPages")}
                >
                  <div className="flex items-center text-orange-400 dark:text-white">
                    <Layout className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                    <span className="ml-2">
                      {t("footer.whatWeDo.landingPages")}
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/system-integration"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  title={t("footer.whatWeDo.systemIntegration")}
                >
                  <div className="flex items-center text-orange-400 dark:text-white">
                    <Waypoints className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                    <span className="ml-2">
                      {t("footer.whatWeDo.systemIntegration")}
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/railway"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  title={t("footer.whatWeDo.railway")}
                >
                  <div className="flex items-center text-orange-400 dark:text-white">
                    <Train className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                    <span className="ml-2">{t("footer.whatWeDo.railway")}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/road"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  title={t("footer.whatWeDo.road")}
                >
                  <div className="flex items-center text-orange-400 dark:text-white">
                    <Truck className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                    <span className="ml-2">{t("footer.whatWeDo.road")}</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/solar-energy"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  title={t("footer.whatWeDo.solarEnergy")}
                >
                  <div className="flex items-center text-orange-400 dark:text-white">
                    <Sun className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                    <span className="ml-2">
                      {t("footer.whatWeDo.solarEnergy")}
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Engineering */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.engineering")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/engineering/education"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  title={t("footer.engineering.education")}
                >
                  <div className="flex items-center text-orange-400 dark:text-white">
                    <GraduationCap className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                    <span className="ml-2">
                      {t("footer.engineering.education")}
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/engineering/government"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  title={t("footer.engineering.government")}
                >
                  <div className="flex items-center text-orange-400 dark:text-white">
                    <Landmark className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                    <span className="ml-2">
                      {t("footer.engineering.government")}
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/engineering/industry"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  title={t("footer.engineering.industry")}
                >
                  <div className="flex items-center text-orange-400 dark:text-white">
                    <Factory className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                    <span className="ml-2">
                      {t("footer.engineering.industry")}
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/engineering/financial"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  title={t("footer.engineering.financial")}
                >
                  <div className="flex items-center text-orange-400 dark:text-white">
                    <DollarSign className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                    <span className="ml-2">
                      {t("footer.engineering.financial")}
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/engineering/retail"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  title={t("footer.engineering.retail")}
                >
                  <div className="flex items-center text-orange-400 dark:text-white">
                    <Sun className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                    <span className="ml-2">
                      {t("footer.engineering.retail")}
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/engineering/healthcare"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  title={t("footer.engineering.healthcare")}
                >
                  <div className="flex items-center text-orange-400 dark:text-white">
                    <Heart className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                    <span className="ml-2">
                      {t("footer.engineering.healthcare")}
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/engineering/cybersecurity"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  title={t("footer.engineering.cybersecurity")}
                >
                  <div className="flex items-center text-orange-400 dark:text-white">
                    <Shield className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                    <span className="ml-2">
                      {t("footer.engineering.cybersecurity")}
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.institutional")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/institutional/about/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  title={t("footer.institutional.about")}
                >
                  <div className="flex items-center text-orange-400 dark:text-white">
                    <Info className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                    <span className="ml-2">
                      {t("footer.institutional.about")}
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/institutional/careers/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  title={t("footer.institutional.careers")}
                >
                  <div className="flex items-center text-orange-400 dark:text-white">
                    <User2Icon className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                    <span className="ml-2">
                      {t("footer.institutional.careers")}
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-2">
              <li className="lex items-center text-gray-300 text-sm">
                <div className="flex items-center text-orange-400 dark:text-white">
                  <Mail className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                  <span className="ml-2">{t("footer.email.pt")}</span>
                </div>
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <div className="flex items-center text-orange-400 dark:text-white">
                  <Phone className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                  <span className="ml-2">{t("footer.phone.pt")}</span>
                </div>
              </li>
              <li className="flex items-start text-gray-300 text-sm">
                <div className="flex items-center text-orange-400 dark:text-white">
                  <MapPin className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                  <span className="ml-2">{t("footer.address.pt")}</span>
                </div>
              </li>
              <hr />
              <li className="lex items-center text-gray-300 text-sm">
                <div className="flex items-center text-orange-400 dark:text-white">
                  <Mail className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                  <span className="ml-2">{t("footer.email.br")}</span>
                </div>
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <div className="flex items-center text-orange-400 dark:text-white">
                  <Phone className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                  <span className="ml-2">{t("footer.phone.br")}</span>
                </div>
              </li>
              <li className="flex items-start text-gray-300 text-sm">
                <div className="flex items-center text-orange-400 dark:text-white">
                  <MapPin className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                  <span className="ml-2">{t("footer.address.br")}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-400 dark:border-white mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-orange-400 dark:text-white hover:text-white transition-colors text-sm">
              {t("footer.copyright")}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-orange-400 dark:text-white hover:text-white transition-colors text-sm"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                href="/terms"
                className="text-orange-400 dark:text-white hover:text-white transition-colors text-sm"
              >
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
