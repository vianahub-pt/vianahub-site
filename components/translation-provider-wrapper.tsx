"use client"

import type { ReactNode } from "react"
import { TranslationProvider } from "@/contexts/translation-context"

export default function TranslationProviderWrapper({
  children,
}: {
  children: ReactNode
}) {
  return <TranslationProvider>{children}</TranslationProvider>
}
