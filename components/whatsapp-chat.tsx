"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, X, Phone, Video, MoreVertical } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

interface WhatsAppChatProps {
  children: React.ReactNode
}

export function WhatsAppChat({ children }: WhatsAppChatProps) {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: t("whatsapp.welcome"),
      sender: "support",
      time: "14:30",
    },
  ])

  const handleToggleChat = () => {
    if (!isOpen) {
      setIsOpen(true)
      setIsAnimating(true)
    } else {
      handleCloseChat()
    }
  }

  const handleCloseChat = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsOpen(false)
    }, 200)
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "user",
        time: new Date().toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" }),
      }

      setMessages([...messages, newMessage])
      setMessage("")

      // Simular resposta automática
      setTimeout(() => {
        const autoReply = {
          id: messages.length + 2,
          text: "Obrigado pela sua mensagem! Nossa equipe irá responder em breve. Para atendimento imediato, ligue para +55 (11) 9999-9999.",
          sender: "support",
          time: new Date().toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" }),
        }
        setMessages((prev) => [...prev, autoReply])
      }, 1000)
    }
  }

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "5511999999999"
    const defaultMessage = "Olá! Gostaria de saber mais sobre os serviços da VianaHub."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      <div onClick={handleToggleChat}>{children}</div>

      {isOpen && (
        <>
          {/* Overlay invisível para fechar o chat */}
          <div className="fixed inset-0 z-40" onClick={handleCloseChat} />

          {/* Chat com posição fixa - ajustado para mostrar o botão completo */}
          <div
            className={`fixed z-50 w-80 transition-all duration-200 ease-out ${
              isAnimating
                ? "opacity-100 transform translate-y-0 scale-100"
                : "opacity-0 transform translate-y-4 scale-95"
            }`}
            style={{
              right: "24px", // 6 * 4px = 24px (right-6)
              bottom: "120px", // Aumentado para 120px para mostrar o botão completo
              transformOrigin: "bottom right",
            }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-600">
              {/* Header estilo WhatsApp */}
              <div className="bg-green-500 dark:bg-green-600 text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <span className="text-green-500 font-bold text-lg">V</span>
                    </div>
                    <div>
                      <div className="font-semibold">{t("whatsapp.title")}</div>
                      <div className="text-xs text-green-100">{t("whatsapp.status")}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-green-600 dark:hover:bg-green-700 p-1 h-8 w-8"
                      onClick={handleWhatsAppRedirect}
                    >
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-green-600 dark:hover:bg-green-700 p-1 h-8 w-8"
                      onClick={handleWhatsAppRedirect}
                    >
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-green-600 dark:hover:bg-green-700 p-1 h-8 w-8"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-green-600 dark:hover:bg-green-700 p-1 h-8 w-8"
                      onClick={handleCloseChat}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Área de mensagens */}
              <div className="h-80 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-700">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg ${
                          msg.sender === "user"
                            ? "bg-green-500 text-white"
                            : "bg-white dark:bg-gray-600 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-500"
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            msg.sender === "user" ? "text-green-100" : "text-gray-500 dark:text-gray-400"
                          }`}
                        >
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Input de mensagem */}
              <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-600">
                <div className="flex space-x-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("whatsapp.placeholder")}
                    className="flex-1 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white p-2"
                    disabled={!message.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                {/* Botão para abrir WhatsApp real */}
                <div className="mt-3 text-center">
                  <Button
                    onClick={handleWhatsAppRedirect}
                    variant="outline"
                    size="sm"
                    className="text-green-600 border-green-600 hover:bg-green-50 dark:text-green-400 dark:border-green-400 dark:hover:bg-green-900/20"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {t("whatsapp.continue")}
                  </Button>
                </div>
              </div>
            </div>

            {/* Seta indicativa */}
            <div
              className="absolute w-4 h-4 bg-green-500 dark:bg-green-600 transform rotate-45 border-r border-b border-gray-200 dark:border-gray-600"
              style={{
                bottom: "-8px",
                right: "20px",
              }}
            ></div>
          </div>
        </>
      )}
    </>
  )
}
