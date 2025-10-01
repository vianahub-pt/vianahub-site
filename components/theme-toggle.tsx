"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "@/components/translation-context";

export function ThemeToggle() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // só marca como montado no client
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // evita piscar no carregamento SSR
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="ThemeToggle Component"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
