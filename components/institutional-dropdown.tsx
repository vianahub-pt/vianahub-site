"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Info, User2Icon } from "lucide-react";
import { useTranslation } from "@/components/translation-context";
import { Button } from "./ui/button";

const menuItems = [
  {
    key: "nav.institutional.aboutUs",
    path: "/institutional/about",
    icon: Info,
    color: "#FFFFFF",
  },
  {
    key: "nav.institutional.careers",
    path: "/institutional/careers",
    icon: User2Icon,
    color: "#FFFFFF",
  },
];

export function InstitutionalDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Button
        className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 cursor-pointer text-md
                   bg-white text-black hover:bg-white hover:text-orange-600 dark:bg-black dark:text-orange-500 
                   dark:hover:bg-black dark:hover:text-white"
        title={t("nav.institutional")}
        aria-label="Institutional Dropdown"
      >
        <span>{t("nav.institutional")}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 w-56 bg-black/80 backdrop-blur-md rounded-md shadow-lg border border-gray-600 z-50">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.path)}
                className="flex items-center gap-3 w-full text-left px-4 py-2 text-sm text-orange-500 hover:bg-yellow-500/20 hover:text-white transition-colors duration-150"
                title={t(item.key)}
                aria-label="Language Selector"
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

export function InstitutionalDropdownMobile({
  onNavigate,
}: {
  onNavigate: (path: string) => void;
}) {
  const { t } = useTranslation();

  return (
    <div className="absolute top-0 left-full ml-2 w-56 bg-black/80 backdrop-blur-md rounded-md shadow-lg border border-gray-600 z-50">
      {menuItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <Button
            key={item.key}
            onClick={() => onNavigate(item.path)} // ✅ fecha e navega
            className="flex items-center gap-3 w-full text-left px-4 py-2 text-sm text-orange-500 hover:bg-yellow-500/20 hover:text-white transition-colors duration-150"
            title={t(item.key)}
            aria-label="Language Selector Mobile"
          >
            <IconComponent className="h-4 w-4 stroke-white dark:stroke-gray-400" />
            {t(item.key)}
          </Button>
        );
      })}
    </div>
  );
}
