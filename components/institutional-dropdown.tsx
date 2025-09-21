"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  Info,
  Briefcase,
  UserCircle,
  User2Icon,
} from "lucide-react";
import { useTranslation } from "@/components/translation-context";
import { color } from "framer-motion";

export function InstitutionalDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  const menuItems = [
    {
      key: "nav.institutional.aboutUs.title",
      path: "/institutional/about",
      icon: Info,
      color: "#FFFFFF",
    },
    {
      key: "nav.institutional.opportunities.title",
      path: "/institutional/careers",
      icon: User2Icon,
      color: "#FFFFFF",
    },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium cursor-pointer
    bg-orange-400 text-white hover:bg-black/80 hover:text-orange-400
    dark:bg-black dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-white text-md"
      >
        <span>{t("nav.institutional.title")}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-56 bg-black/80 backdrop-blur-md rounded-md shadow-lg border border-gray-600 z-50">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.path)}
                className="flex items-center gap-3 w-full text-left px-4 py-2 text-sm text-orange-400 hover:bg-yellow-500/20 hover:text-white transition-colors duration-150"
              >
                <IconComponent className="h-4 w-4 stroke-white dark:stroke-gray-400" />
                {t(item.key)}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
