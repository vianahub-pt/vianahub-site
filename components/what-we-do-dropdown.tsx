"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  Code2,
  Workflow,
  Users,
  Bot,
  Layout,
  Train,
  Truck,
  Sun,
  Waypoints,
} from "lucide-react";
import { useTranslation } from "@/components/translation-context";
import { Button } from "./ui/button";

const menuItems = [
  {
    key: "nav.whatWeDo.development",
    path: "/what-we-do/development",
    icon: Code2,
    color: "#FFFFFF",
  },
  {
    key: "nav.whatWeDo.agile",
    path: "/what-we-do/agile",
    icon: Workflow,
    color: "#FFFFFF",
  },
  {
    key: "nav.whatWeDo.outsourcing",
    path: "/what-we-do/outsourcing",
    icon: Users,
    color: "#FFFFFF",
  },
  {
    key: "nav.whatWeDo.chatbot",
    path: "/what-we-do/chatbot",
    icon: Bot,
    color: "#FFFFFF",
  },
  {
    key: "nav.whatWeDo.landingPages",
    path: "/what-we-do/landing-pages",
    icon: Layout,
    color: "#FFFFFF",
  },
  {
    key: "nav.whatWeDo.integration",
    path: "/what-we-do/integration",
    icon: Waypoints,
    color: "#FFFFFF",
  },
  {
    key: "nav.whatWeDo.railway",
    path: "/what-we-do/railway",
    icon: Train,
    color: "#FFFFFF",
  },
  {
    key: "nav.whatWeDo.road",
    path: "/what-we-do/road",
    icon: Truck,
    color: "#FFFFFF",
  },
  {
    key: "nav.whatWeDo.solarEnergy",
    path: "/what-we-do/solar-energy",
    icon: Sun,
    color: "#FFFFFF",
  },
];

export function WhatWeDoDropdown() {
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
        title={t("nav.whatWeDo")}
        aria-label="What We Do Dropdown"
      >
        <span>{t("nav.whatWeDo")}</span>
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

export function WhatWeDoDropdownMobile({
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
