"use client";

import type React from "react";

<<<<<<< HEAD
import { ThemeProvider } from "@/components/theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
=======
import { ThemeProvider } from "@/components/theme-provider"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
>>>>>>> 0ba0a437a9386b2c8649f9370e1f8ea46d4dbcbd
      {children}
    </ThemeProvider>
  );
}
