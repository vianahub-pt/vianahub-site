"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TranslationProvider } from "@/contexts/translation-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, ArrowRight } from "lucide-react"

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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Navbar />
        <div className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-r from-viana-blue to-viana-orange text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <MessageSquare className="h-16 w-16 text-viana-yellow" />
                </div>
                <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
                <p className="text-xl mb-8 text-gray-100">
                  Estamos prontos para ajudar você a transformar suas ideias em realidade. Entre em contato conosco e
                  vamos conversar sobre seu próximo projeto.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-viana-yellow text-viana-black hover:bg-yellow-400">
                    Falar Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-viana-blue bg-transparent"
                  >
                    Agendar Reunião
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Info Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">
                  Informações de Contato
                </Badge>
                <h2 className="text-4xl font-bold mb-4">Como Nos Encontrar</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Múltiplas formas de entrar em contato conosco
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-0">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-4">{info.icon}</div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-viana-orange transition-colors">
                        {info.title}
                      </h3>
                      <div className="font-medium mb-2">{info.content}</div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{info.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <Badge variant="outline" className="mb-4">
                    Formulário de Contato
                  </Badge>
                  <h2 className="text-4xl font-bold mb-6">Vamos Conversar</h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    Preencha o formulário ao lado e nossa equipe entrará em contato em até 24 horas.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold mb-4 flex items-center">
                        <Users className="h-5 w-5 text-viana-orange mr-2" />
                        Nossos Serviços
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((service, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-viana-orange rounded-full mr-2"></div>
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Nome *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company">Empresa</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Telefone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">Assunto *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Mensagem *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="mt-1"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-viana-orange hover:bg-viana-orange/90">
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensagem
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-viana-blue to-viana-orange text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">Prefere Falar Diretamente?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Nossa equipe está disponível para uma conversa rápida sobre seu projeto. Ligue agora ou agende uma
                reunião.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-viana-blue hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Ligar Agora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-viana-blue bg-transparent"
                >
                  Agendar Reunião
                </Button>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </TranslationProvider>
  )
}
