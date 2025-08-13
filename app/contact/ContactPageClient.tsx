"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TranslationProvider } from "@/contexts/translation-context"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactTranslation } from "./translation"

export default function ContactPageClient() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-viana-orange" />,
      title: "Email",
      content: "contato@vianahub.com",
      description: "Resposta em até 24 horas",
    },
    {
      icon: <Phone className="h-6 w-6 text-viana-orange" />,
      title: "Telefone",
      content: "+55 (11) 9999-9999",
      description: "Seg-Sex: 9h às 18h",
    },
    {
      icon: <MapPin className="h-6 w-6 text-viana-orange" />,
      title: "Endereço",
      content: "São Paulo, SP - Brasil",
      description: "Atendimento presencial com agendamento",
    },
    {
      icon: <Clock className="h-6 w-6 text-viana-orange" />,
      title: "Horário",
      content: "Segunda a Sexta",
      description: "9h às 18h (GMT-3)",
    },
  ]

  const services = [
    "Desenvolvimento de Software",
    "Consultoria em TI",
    "Transformação Digital",
    "Sistemas Integrados",
    "Suporte Técnico",
    "Treinamento",
  ]

  return (
    <TranslationProvider>
      <div className="min-h-screen bg-viana-white">
        <Navbar />
        <ContactTranslation />
        <Footer />
      </div>
    </TranslationProvider>
  )
}
