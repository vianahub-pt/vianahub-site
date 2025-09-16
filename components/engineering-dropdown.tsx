"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  GraduationCap,
  Landmark,
  Factory,
  DollarSign,
  ShoppingCart,
  Heart,
  Shield,
} from "lucide-react";
import { useTranslation } from "@/components/translation-context";
import { color } from "framer-motion";

export function EngineeringDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  const menuItems = [
    {
      key: "nav.engineering.education.title",
      path: "/industry/education",
      icon: GraduationCap,
      color: "#3B82F6",
    },
    {
      key: "nav.engineering.government.title",
      path: "/industry/government",
      icon: Landmark,
      color: "#FFFFFF",
    },
    {
      key: "nav.engineering.manufacturing.title",
      path: "/industry/manufacturing",
      icon: Factory,
      color: "#9CA3AF",
    },
    {
      key: "nav.engineering.financial.title",
      path: "/industry/financial",
      icon: DollarSign,
      color: "#22C55E",
    },
    {
      key: "nav.engineering.retail.title",
      path: "/industry/retail",
      icon: ShoppingCart,
      color: "#E11D48",
    },
    {
      key: "nav.engineering.healthcare.title",
      path: "/industry/healthcare",
      icon: Heart,
      color: "#EC4899",
    },
    {
      key: "nav.engineering.cybersecurity.title",
      path: "/industry/cybersecurity",
      icon: Shield,
      color: "#f7f308ff",
    },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-orange-400 hover:bg-yellow-500/20 hover:text-white text-sm">
        <span>{t("nav.engineering.title")}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 bg-black/80 backdrop-blur-md rounded-md shadow-lg py-2 min-w-[200px] z-50">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.path)}
                className="flex items-center gap-3 w-full text-left px-4 py-2 text-sm text-orange-400 hover:bg-yellow-500/20 hover:text-white transition-colors duration-150"
              >
                <IconComponent
                  className="h-4 w-4"
                  style={{ color: item.color }}
                />
                {t(item.key)}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
