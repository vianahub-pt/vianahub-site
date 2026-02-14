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
  ReceiptText,
} from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");

  useEffect(() => setMounted(true), []);

  return (
    <footer className="bg-orange-950 text-white dark:bg-black dark:text-orange-500 text-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              {mounted && (
                <Image
                  src={
                    isDark
                      ? "/logo/default-white-logo.png"
                      : "/logo/default-white-logo.png"
                  }
                  alt="VianaHub"
                  className="h-[80%] w-auto"
                  width={200}
                  height={100}
                  priority
                />
              )}
            </Link>
            <p className="text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500 text-sm text-center">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href={t("footer.facebook.url")}
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                title="Face Book"
              >
                <Facebook className="h-4 w-4 stroke-white dark:stroke-orange-400" />
              </a>
              <a
                href={t("footer.instagram.url")}
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                title="Instagram"
              >
                <Instagram className="h-4 w-4 stroke-white dark:stroke-orange-400" />
              </a>
              <a
                href={t("footer.linkedin.url")}
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4 stroke-white dark:stroke-orange-400" />
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
                  className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500 "
                  title={t("footer.whatWeDo.development")}
                >
                  <Code2 className="h-4 w-4 stroke-white dark:stroke-orange-400 mr-2" />
                  {t("footer.whatWeDo.development")}
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/agile"
                  className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                  title={t("footer.whatWeDo.agile")}
                >
                  <Workflow className="h-4 w-4 stroke-white dark:stroke-orange-400 mr-2" />
                  <span>{t("footer.whatWeDo.agile")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/outsourcing"
                  className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                  title={t("footer.whatWeDo.outsourcing")}
                >
                  <Bot className="h-4 w-4 stroke-white dark:stroke-orange-400 mr-2" />
                  <span>{t("footer.whatWeDo.outsourcing")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/chatbot"
                  className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                  title={t("footer.whatWeDo.chatbot")}
                >
                  <Users className="h-4 w-4 stroke-white dark:stroke-orange-400 mr-2" />
                  <span>{t("footer.whatWeDo.chatbot")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/landing-pages/"
                  className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                  title={t("footer.whatWeDo.landingPages")}
                >
                  <Layout className="h-4 w-4 stroke-white dark:stroke-orange-400 mr-2" />
                  <span>{t("footer.whatWeDo.landingPages")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/system-integration"
                  className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                  title={t("footer.whatWeDo.systemIntegration")}
                >
                  <Waypoints className="h-4 w-4 stroke-white dark:stroke-orange-400 mr-2" />
                  <span>{t("footer.whatWeDo.integration")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/railway"
                  className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                  title={t("footer.whatWeDo.railway")}
                >
                  <Train className="h-4 w-4 stroke-white dark:stroke-orange-400 mr-2" />
                  <span>{t("footer.whatWeDo.railway")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/road"
                  className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                  title={t("footer.whatWeDo.road")}
                >
                  <Truck className="h-4 w-4 stroke-white dark:stroke-orange-400 mr-2" />
                  <span>{t("footer.whatWeDo.road")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/solar-energy"
                  className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                  title={t("footer.whatWeDo.solarEnergy")}
                >
                  <Sun className="h-4 w-4 stroke-white dark:stroke-orange-400 mr-2" />
                  <span>{t("footer.whatWeDo.solarEnergy")}</span>
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
                  className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                  title={t("footer.engineering.education")}
                >
                  <GraduationCap className="h-4 w-4 stroke-white dark:stroke-orange-400 mr-2" />
                  <span>{t("footer.engineering.education")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/engineering/government"
                  className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                  title={t("footer.engineering.government")}
                >
                  <Landmark className="h-4 w-4 stroke-white dark:stroke-orange-400 mr-2" />
                  <span>{t("footer.engineering.government")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/engineering/industry"
                  className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                  title={t("footer.engineering.industry")}
                >
                  <Factory className="h-4 w-4 stroke-white dark:stroke-orange-400 mr-2" />
                  <span>{t("footer.engineering.industry")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/engineering/financial"
                  className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                  title={t("footer.engineering.financial")}
                >
                  <DollarSign className="h-4 w-4 stroke-white dark:stroke-orange-400 mr-2" />
                  <span>{t("footer.engineering.financial")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/engineering/retail"
                  className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                  title={t("footer.engineering.retail")}
                >
                  <Sun className="h-4 w-4 stroke-white dark:stroke-orange-400 mr-2" />
                  <span>{t("footer.engineering.retail")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/engineering/healthcare"
                  className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                  title={t("footer.engineering.healthcare")}
                >
                  <Heart className="h-4 w-4 stroke-white dark:stroke-orange-400 mr-2" />
                  <span>{t("footer.engineering.healthcare")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/engineering/cybersecurity"
                  className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                  title={t("footer.engineering.cybersecurity")}
                >
                  <Shield className="h-4 w-4 stroke-white dark:stroke-orange-400 mr-2" />
                  <span>{t("footer.engineering.cybersecurity")}</span>
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
                  className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                  title={t("footer.institutional.about")}
                >
                  <Info className="h-4 w-4 stroke-white dark:stroke-orange-400 mr-2" />
                  <span>{t("footer.institutional.about")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/institutional/careers/"
                  className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                  title={t("footer.institutional.careers")}
                >
                  <User2Icon className="h-4 w-4 stroke-white dark:stroke-orange-400 mr-2" />
                  <span>{t("footer.institutional.careers")}</span>
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
              <li className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500">
                <Mail className="h-4 w-4 stroke-white dark:stroke-orange-400" />
                <span className="ml-2">{t("footer.email.pt")}</span>
              </li>
              <li className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500">
                <Phone className="h-4 w-4 stroke-white dark:stroke-orange-400" />
                <span className="ml-2">{t("footer.phone.pt")}</span>
              </li>
              <li className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500">
                <MapPin className="h-4 w-4 stroke-white dark:stroke-orange-400" />
                <span className="ml-2">{t("footer.address.pt")}</span>
              </li>
              <li className="border-t border-orange-400 dark:border-white"></li>
              <li className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500">
                <Mail className="h-4 w-4 stroke-white dark:stroke-orange-400" />
                <span className="ml-2">{t("footer.email.br")}</span>
              </li>
              <li className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500">
                <Phone className="h-4 w-4 stroke-white dark:stroke-orange-400" />
                <span className="ml-2">{t("footer.phone.br")}</span>
              </li>
              <li className="flex items-center text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500">
                <MapPin className="h-4 w-4 stroke-white dark:stroke-orange-400" />
                <span className="ml-2">{t("footer.address.br")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-400 dark:border-white mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-orange-500 dark:text-white hover:text-white transition-colors text-sm">
              {t("footer.copyright")}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 gap-2">
              <Link
                href="/"
                className="text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                title={t("footer.by")}
              >
                {t("footer.by")}
              </Link>
              <Link
                href="/terms"
                className="text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500"
                title={t("footer.terms")}
              >
                <div className="flex items-center text-orange-500 dark:text-white gap-2">
                  <ReceiptText className="h-4 w-4 stroke-white dark:stroke-orange-400" />
                  <span className="text-sm text-orange-500 hover:text-white dark:text-white hover:dark:text-orange-500">
                    {t("footer.terms")}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
