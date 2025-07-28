"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { homeTranslations } from "@/app/translation"
import { navbarTranslations } from "@/app/translations/navbar"
import { agileTranslations } from "@/app/what-we-do/agile/translation"
import { careersTranslations } from "@/app/careers/translation"
import { contactTranslations } from "@/app/contact/translation"
import { aboutTranslations } from "@/app/about/translation"
import { developmentTranslations } from "@/app/what-we-do/development/translation"

export type Language = "pt" | "en" | "es" | "fr" | "de"

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

// Combine all translations into a single object
const allTranslations = {
  pt: {
    ...homeTranslations.pt,
    ...navbarTranslations.pt,
    ...agileTranslations.pt,
    ...careersTranslations.pt,
    ...contactTranslations.pt,
    ...aboutTranslations.pt,
    ...developmentTranslations.pt,
    // Chatbot translations
    "chatbot.hero.title": "Chatbots Inteligentes",
    "chatbot.hero.subtitle":
      "Automatize o atendimento ao cliente com chatbots inteligentes que oferecem respostas precisas e experiência excepcional.",
    "chatbot.hero.cta": "Criar Chatbot",
    "chatbot.features.title": "Recursos Avançados",
    "chatbot.features.subtitle":
      "Nossos chatbots utilizam inteligência artificial de última geração para proporcionar experiências excepcionais.",
    "chatbot.features.conversations.title": "Conversas Naturais",
    "chatbot.features.conversations.description": "IA avançada para conversas fluidas e naturais com seus clientes.",
    "chatbot.features.availability.title": "Disponibilidade 24/7",
    "chatbot.features.availability.description":
      "Atendimento automatizado disponível 24 horas por dia, 7 dias por semana.",
    "chatbot.features.channels.title": "Múltiplos Canais",
    "chatbot.features.channels.description": "Integração com WhatsApp, Facebook, Telegram e outros canais.",
    "chatbot.features.analytics.title": "Analytics Avançado",
    "chatbot.features.analytics.description": "Relatórios detalhados sobre interações e performance do chatbot.",
    "chatbot.benefits.title": "Benefícios para seu Negócio",
    "chatbot.benefits.subtitle":
      "Transforme o atendimento ao cliente e otimize operações com nossa tecnologia de chatbot.",
    "chatbot.benefits.response.title": "Resposta Instantânea",
    "chatbot.benefits.response.description": "Respostas imediatas para dúvidas frequentes dos clientes.",
    "chatbot.benefits.costs.title": "Redução de Custos",
    "chatbot.benefits.costs.description": "Diminua custos operacionais com atendimento automatizado.",
    "chatbot.benefits.satisfaction.title": "Satisfação do Cliente",
    "chatbot.benefits.satisfaction.description": "Melhore a experiência do cliente com atendimento eficiente.",
    "chatbot.benefits.scalability.title": "Escalabilidade",
    "chatbot.benefits.scalability.description": "Atenda milhares de clientes simultaneamente sem limitações.",
    "chatbot.demo.title": "Veja um Chatbot em Ação",
    "chatbot.demo.subtitle": "Experimente como nossos chatbots podem transformar o atendimento da sua empresa.",
    "chatbot.demo.interactive.title": "Demo Interativo",
    "chatbot.demo.interactive.description":
      "Converse com nosso chatbot de demonstração e veja como ele pode ajudar seus clientes.",
    "chatbot.demo.cta": "Iniciar Demo",
    "chatbot.cta.title": "Automatize seu Atendimento",
    "chatbot.cta.subtitle": "Implemente um chatbot inteligente e revolucione a forma como você atende seus clientes.",
    "chatbot.cta.button": "Solicitar Demonstração",
    "chatbot.chat.bot.greeting": "Olá! Como posso ajudá-lo hoje?",
    "chatbot.chat.user.order": "Oi! Gostaria de pedir um lanche",
    "chatbot.chat.bot.options": "Perfeito! Temos sanduíches, pizzas e saladas. O que prefere?",
    "chatbot.chat.user.choice": "Um sanduíche de frango, por favor",
    "chatbot.chat.bot.confirm": "Ótima escolha! Sanduíche de frango - R$ 15,00. Confirma o pedido?",
    "chatbot.chat.user.confirm": "Sim, confirmo!",
    "chatbot.chat.bot.success": "Pedido confirmado! ✅ Tempo estimado: 20 minutos. Obrigado!",
  },
  en: {
    ...homeTranslations.en,
    ...navbarTranslations.en,
    ...agileTranslations.en,
    ...careersTranslations.en,
    ...contactTranslations.en,
    ...aboutTranslations.en,
    ...developmentTranslations.en,
    // Chatbot translations
    "chatbot.hero.title": "Intelligent Chatbots",
    "chatbot.hero.subtitle":
      "Automate customer service with intelligent chatbots that offer accurate responses and exceptional experience.",
    "chatbot.hero.cta": "Create Chatbot",
    "chatbot.features.title": "Advanced Features",
    "chatbot.features.subtitle":
      "Our chatbots use cutting-edge artificial intelligence to provide exceptional experiences.",
    "chatbot.features.conversations.title": "Natural Conversations",
    "chatbot.features.conversations.description":
      "Advanced AI for fluid and natural conversations with your customers.",
    "chatbot.features.availability.title": "24/7 Availability",
    "chatbot.features.availability.description": "Automated service available 24 hours a day, 7 days a week.",
    "chatbot.features.channels.title": "Multiple Channels",
    "chatbot.features.channels.description": "Integration with WhatsApp, Facebook, Telegram and other channels.",
    "chatbot.features.analytics.title": "Advanced Analytics",
    "chatbot.features.analytics.description": "Detailed reports on interactions and chatbot performance.",
    "chatbot.benefits.title": "Benefits for your Business",
    "chatbot.benefits.subtitle": "Transform customer service and optimize operations with our chatbot technology.",
    "chatbot.benefits.response.title": "Instant Response",
    "chatbot.benefits.response.description": "Immediate responses to frequently asked customer questions.",
    "chatbot.benefits.costs.title": "Cost Reduction",
    "chatbot.benefits.costs.description": "Reduce operational costs with automated service.",
    "chatbot.benefits.satisfaction.title": "Customer Satisfaction",
    "chatbot.benefits.satisfaction.description": "Improve customer experience with efficient service.",
    "chatbot.benefits.scalability.title": "Scalability",
    "chatbot.benefits.scalability.description": "Serve thousands of customers simultaneously without limitations.",
    "chatbot.demo.title": "See a Chatbot in Action",
    "chatbot.demo.subtitle": "Experience how our chatbots can transform your company's service.",
    "chatbot.demo.interactive.title": "Interactive Demo",
    "chatbot.demo.interactive.description":
      "Chat with our demonstration chatbot and see how it can help your customers.",
    "chatbot.demo.cta": "Start Demo",
    "chatbot.cta.title": "Automate your Service",
    "chatbot.cta.subtitle": "Implement an intelligent chatbot and revolutionize the way you serve your customers.",
    "chatbot.cta.button": "Request Demonstration",
    "chatbot.chat.bot.greeting": "Hello! How can I help you today?",
    "chatbot.chat.user.order": "Hi! I would like to order a snack",
    "chatbot.chat.bot.options": "Perfect! We have sandwiches, pizzas and salads. What do you prefer?",
    "chatbot.chat.user.choice": "A chicken sandwich, please",
    "chatbot.chat.bot.confirm": "Great choice! Chicken sandwich - $15.00. Confirm the order?",
    "chatbot.chat.user.confirm": "Yes, I confirm!",
    "chatbot.chat.bot.success": "Order confirmed! ✅ Estimated time: 20 minutes. Thank you!",
  },
  es: {
    ...homeTranslations.es,
    ...navbarTranslations.es,
    ...agileTranslations.es,
    ...careersTranslations.es,
    ...contactTranslations.es,
    ...aboutTranslations.es,
    ...developmentTranslations.es,
    // Chatbot translations
    "chatbot.hero.title": "Chatbots Inteligentes",
    "chatbot.hero.subtitle":
      "Automatice el servicio al cliente con chatbots inteligentes que ofrecen respuestas precisas y experiencia excepcional.",
    "chatbot.hero.cta": "Crear Chatbot",
    "chatbot.features.title": "Características Avanzadas",
    "chatbot.features.subtitle":
      "Nuestros chatbots utilizan inteligencia artificial de última generación para proporcionar experiencias excepcionales.",
    "chatbot.features.conversations.title": "Conversaciones Naturales",
    "chatbot.features.conversations.description":
      "IA avanzada para conversaciones fluidas y naturales con sus clientes.",
    "chatbot.features.availability.title": "Disponibilidad 24/7",
    "chatbot.features.availability.description":
      "Servicio automatizado disponible 24 horas al día, 7 días a la semana.",
    "chatbot.features.channels.title": "Múltiples Canales",
    "chatbot.features.channels.description": "Integración con WhatsApp, Facebook, Telegram y otros canales.",
    "chatbot.features.analytics.title": "Analytics Avanzado",
    "chatbot.features.analytics.description": "Informes detallados sobre interacciones y rendimiento del chatbot.",
    "chatbot.benefits.title": "Beneficios para su Negocio",
    "chatbot.benefits.subtitle":
      "Transforme el servicio al cliente y optimice operaciones con nuestra tecnología de chatbot.",
    "chatbot.benefits.response.title": "Respuesta Instantánea",
    "chatbot.benefits.response.description": "Respuestas inmediatas a preguntas frecuentes de los clientes.",
    "chatbot.benefits.costs.title": "Reducción de Costos",
    "chatbot.benefits.costs.description": "Reduzca costos operacionales con servicio automatizado.",
    "chatbot.benefits.satisfaction.title": "Satisfacción del Cliente",
    "chatbot.benefits.satisfaction.description": "Mejore la experiencia del cliente con servicio eficiente.",
    "chatbot.benefits.scalability.title": "Escalabilidad",
    "chatbot.benefits.scalability.description": "Atienda miles de clientes simultáneamente sin limitaciones.",
    "chatbot.demo.title": "Vea un Chatbot en Acción",
    "chatbot.demo.subtitle": "Experimente cómo nuestros chatbots pueden transformar el servicio de su empresa.",
    "chatbot.demo.interactive.title": "Demo Interactivo",
    "chatbot.demo.interactive.description":
      "Converse con nuestro chatbot de demostración y vea cómo puede ayudar a sus clientes.",
    "chatbot.demo.cta": "Iniciar Demo",
    "chatbot.cta.title": "Automatice su Servicio",
    "chatbot.cta.subtitle": "Implemente un chatbot inteligente y revolucione la forma en que atiende a sus clientes.",
    "chatbot.cta.button": "Solicitar Demostración",
    "chatbot.chat.bot.greeting": "¡Hola! ¿Cómo puedo ayudarte hoy?",
    "chatbot.chat.user.order": "¡Hola! Me gustaría pedir un bocadillo",
    "chatbot.chat.bot.options": "¡Perfecto! Tenemos sándwiches, pizzas y ensaladas. ¿Qué prefieres?",
    "chatbot.chat.user.choice": "Un sándwich de pollo, por favor",
    "chatbot.chat.bot.confirm": "¡Excelente elección! Sándwich de pollo - $15.00. ¿Confirmas el pedido?",
    "chatbot.chat.user.confirm": "¡Sí, confirmo!",
    "chatbot.chat.bot.success": "¡Pedido confirmado! ✅ Tiempo estimado: 20 minutos. ¡Gracias!",
  },
  fr: {
    ...homeTranslations.fr,
    ...navbarTranslations.fr,
    ...agileTranslations.fr,
    ...careersTranslations.fr,
    ...contactTranslations.fr,
    ...aboutTranslations.fr,
    ...developmentTranslations.fr,
    // Chatbot translations
    "chatbot.hero.title": "Chatbots Intelligents",
    "chatbot.hero.subtitle":
      "Automatisez le service client avec des chatbots intelligents qui offrent des réponses précises et une expérience exceptionnelle.",
    "chatbot.hero.cta": "Créer Chatbot",
    "chatbot.features.title": "Fonctionnalités Avancées",
    "chatbot.features.subtitle":
      "Nos chatbots utilisent une intelligence artificielle de pointe pour offrir des expériences exceptionnelles.",
    "chatbot.features.conversations.title": "Conversations Naturelles",
    "chatbot.features.conversations.description":
      "IA avancée pour des conversations fluides et naturelles avec vos clients.",
    "chatbot.features.availability.title": "Disponibilité 24/7",
    "chatbot.features.availability.description": "Service automatisé disponible 24 heures sur 24, 7 jours sur 7.",
    "chatbot.features.channels.title": "Canaux Multiples",
    "chatbot.features.channels.description": "Intégration avec WhatsApp, Facebook, Telegram et autres canaux.",
    "chatbot.features.analytics.title": "Analytics Avancé",
    "chatbot.features.analytics.description": "Rapports détaillés sur les interactions et les performances du chatbot.",
    "chatbot.benefits.title": "Avantages pour votre Entreprise",
    "chatbot.benefits.subtitle":
      "Transformez le service client et optimisez les opérations avec notre technologie de chatbot.",
    "chatbot.benefits.response.title": "Réponse Instantanée",
    "chatbot.benefits.response.description": "Réponses immédiates aux questions fréquentes des clients.",
    "chatbot.benefits.costs.title": "Réduction des Coûts",
    "chatbot.benefits.costs.description": "Réduisez les coûts opérationnels avec un service automatisé.",
    "chatbot.benefits.satisfaction.title": "Satisfaction Client",
    "chatbot.benefits.satisfaction.description": "Améliorez l'expérience client avec un service efficace.",
    "chatbot.benefits.scalability.title": "Évolutivité",
    "chatbot.benefits.scalability.description": "Servez des milliers de clients simultanément sans limitations.",
    "chatbot.demo.title": "Voir un Chatbot en Action",
    "chatbot.demo.subtitle": "Découvrez comment nos chatbots peuvent transformer le service de votre entreprise.",
    "chatbot.demo.interactive.title": "Démo Interactive",
    "chatbot.demo.interactive.description":
      "Conversez avec notre chatbot de démonstration et voyez comment il peut aider vos clients.",
    "chatbot.demo.cta": "Démarrer Démo",
    "chatbot.cta.title": "Automatisez votre Service",
    "chatbot.cta.subtitle":
      "Implémentez un chatbot intelligent et révolutionnez la façon dont vous servez vos clients.",
    "chatbot.cta.button": "Demander Démonstration",
    "chatbot.chat.bot.greeting": "Bonjour! Comment puis-je vous aider aujourd'hui?",
    "chatbot.chat.user.order": "Salut! J'aimerais commander un en-cas",
    "chatbot.chat.bot.options": "Parfait! Nous avons des sandwichs, des pizzas et des salades. Que préférez-vous?",
    "chatbot.chat.user.choice": "Un sandwich au poulet, s'il vous plaît",
    "chatbot.chat.bot.confirm": "Excellent choix! Sandwich au poulet - 15,00€. Confirmez-vous la commande?",
    "chatbot.chat.user.confirm": "Oui, je confirme!",
    "chatbot.chat.bot.success": "Commande confirmée! ✅ Temps estimé: 20 minutes. Merci!",
  },
  de: {
    ...homeTranslations.de,
    ...navbarTranslations.de,
    ...agileTranslations.de,
    ...careersTranslations.de,
    ...contactTranslations.de,
    ...aboutTranslations.de,
    ...developmentTranslations.de,
    // Chatbot translations
    "chatbot.hero.title": "Intelligente Chatbots",
    "chatbot.hero.subtitle":
      "Automatisieren Sie den Kundenservice mit intelligenten Chatbots, die präzise Antworten und außergewöhnliche Erfahrungen bieten.",
    "chatbot.hero.cta": "Chatbot Erstellen",
    "chatbot.features.title": "Erweiterte Funktionen",
    "chatbot.features.subtitle":
      "Unsere Chatbots nutzen modernste künstliche Intelligenz, um außergewöhnliche Erfahrungen zu bieten.",
    "chatbot.features.conversations.title": "Natürliche Gespräche",
    "chatbot.features.conversations.description":
      "Fortgeschrittene KI für fließende und natürliche Gespräche mit Ihren Kunden.",
    "chatbot.features.availability.title": "24/7 Verfügbarkeit",
    "chatbot.features.availability.description": "Automatisierter Service rund um die Uhr verfügbar, 7 Tage die Woche.",
    "chatbot.features.channels.title": "Mehrere Kanäle",
    "chatbot.features.channels.description": "Integration mit WhatsApp, Facebook, Telegram und anderen Kanälen.",
    "chatbot.features.analytics.title": "Erweiterte Analytics",
    "chatbot.features.analytics.description": "Detaillierte Berichte über Interaktionen und Chatbot-Performance.",
    "chatbot.benefits.title": "Vorteile für Ihr Unternehmen",
    "chatbot.benefits.subtitle":
      "Transformieren Sie den Kundenservice und optimieren Sie Abläufe mit unserer Chatbot-Technologie.",
    "chatbot.benefits.response.title": "Sofortige Antwort",
    "chatbot.benefits.response.description": "Sofortige Antworten auf häufig gestellte Kundenfragen.",
    "chatbot.benefits.costs.title": "Kostenreduzierung",
    "chatbot.benefits.costs.description": "Reduzieren Sie Betriebskosten mit automatisiertem Service.",
    "chatbot.benefits.satisfaction.title": "Kundenzufriedenheit",
    "chatbot.benefits.satisfaction.description": "Verbessern Sie die Kundenerfahrung mit effizientem Service.",
    "chatbot.benefits.scalability.title": "Skalierbarkeit",
    "chatbot.benefits.scalability.description": "Bedienen Sie Tausende von Kunden gleichzeitig ohne Einschränkungen.",
    "chatbot.demo.title": "Sehen Sie einen Chatbot in Aktion",
    "chatbot.demo.subtitle": "Erleben Sie, wie unsere Chatbots den Service Ihres Unternehmens transformieren können.",
    "chatbot.demo.interactive.title": "Interaktive Demo",
    "chatbot.demo.interactive.description":
      "Chatten Sie mit unserem Demonstrations-Chatbot und sehen Sie, wie er Ihren Kunden helfen kann.",
    "chatbot.demo.cta": "Demo Starten",
    "chatbot.cta.title": "Automatisieren Sie Ihren Service",
    "chatbot.cta.subtitle":
      "Implementieren Sie einen intelligenten Chatbot und revolutionieren Sie die Art, wie Sie Ihre Kunden bedienen.",
    "chatbot.cta.button": "Demonstration Anfordern",
    "chatbot.chat.bot.greeting": "Hallo! Wie kann ich Ihnen heute helfen?",
    "chatbot.chat.user.order": "Hallo! Ich möchte gerne einen Snack bestellen",
    "chatbot.chat.bot.options": "Perfekt! Wir haben Sandwiches, Pizzas und Salate. Was bevorzugen Sie?",
    "chatbot.chat.user.choice": "Ein Hähnchen-Sandwich, bitte",
    "chatbot.chat.bot.confirm": "Ausgezeichnete Wahl! Hähnchen-Sandwich - 15,00€. Bestätigen Sie die Bestellung?",
    "chatbot.chat.user.confirm": "Ja, ich bestätige!",
    "chatbot.chat.bot.success": "Bestellung bestätigt! ✅ Geschätzte Zeit: 20 Minuten. Danke!",
  },
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    // Load language from localStorage on client side
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["pt", "en", "es", "fr", "de"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    const translation = allTranslations[language]?.[key as keyof (typeof allTranslations)[typeof language]]
    return translation || key
  }

  return (
    <TranslationContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}
