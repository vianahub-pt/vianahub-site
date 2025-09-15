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
  Link,
  Train,
  Truck,
  Sun,
} from "lucide-react";
import { useTranslation } from "@/components/translation-context";

export function WhatWeDoDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  const menuItems = [
    {
      key: "nav.whatWeDo.development.title",
      path: "/what-we-do/development",
      icon: Code2,
      color: "#9333EA",
    },
    {
      key: "nav.whatWeDo.agile.title",
      path: "/what-we-do/agile",
      icon: Workflow,
      color: "#F59E0B",
    },
    {
      key: "nav.whatWeDo.outsourcing.title",
      path: "/what-we-do/outsourcing",
      icon: Users,
      color: "#0891B2",
    },
    {
      key: "nav.whatWeDo.chatbot.title",
      path: "/what-we-do/chatbot",
      icon: Bot,
      color: "#DB2777",
    },
    {
      key: "nav.whatWeDo.landingPages.title",
      path: "/what-we-do/landing-pages",
      icon: Layout,
      color: "#0EA5E9",
    },
    {
      key: "nav.whatWeDo.systemIntegration.title",
      path: "/what-we-do/system-integration",
      icon: Link,
      color: "#10B981",
    },
    {
      key: "nav.whatWeDo.railway.title",
      path: "/what-we-do/railway",
      icon: Train,
      color: "#bbbbbb",
    },
    {
      key: "nav.whatWeDo.road.title",
      path: "/what-we-do/road",
      icon: Truck,
      color: "#CA8A04",
    },
    {
      key: "nav.whatWeDo.solarEnergy.title",
      path: "/what-we-do/solar-energy",
      icon: Sun,
      color: "#FACC15",
    },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-orange-400 hover:bg-yellow-500/20 hover:text-white text-sm">
        <span>{t("nav.whatWeDo.title")}</span>
        <ChevronDown className="h-4 w-4" />
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
