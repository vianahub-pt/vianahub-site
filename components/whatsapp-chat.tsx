"use client"

import type React from "react"
import { useTranslation } from "@/contexts/translation-context"

interface WhatsAppChatProps {
  children: React.ReactNode
}

export function WhatsAppChat({ children }: WhatsAppChatProps) {
  const { t } = useTranslation()

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "5511999999999"
    const defaultMessage = t("whatsapp.defaultMessage")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div onClick={handleWhatsAppRedirect} className="cursor-pointer">
      {children}
    </div>
  )
}
