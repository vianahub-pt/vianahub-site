"use client"

import { useTranslation } from "@/contexts/translation-context"
import { AboutContent } from "./about-content"

export default function AboutPageClient() {
  const { t } = useTranslation()

  return <AboutContent />
}
