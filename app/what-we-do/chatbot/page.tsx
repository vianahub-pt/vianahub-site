"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TranslationProvider, useTranslation } from "@/contexts/translation-context"
import { MessageCircle, Bot, Zap, Clock, Users, BarChart, Headphones, CheckCircle } from "lucide-react"

const chatbotTranslations = {
  pt: {
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
  },
  en: {
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
  },
  es: {
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
  },
  fr: {
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
  },
  de: {
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
  },
}

function ChatbotPageContent() {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: <MessageCircle className="h-8 w-8 text-viana-orange" />,
      title: t("chatbot.features.conversations.title"),
      description: t("chatbot.features.conversations.description"),
    },
    {
      icon: <Clock className="h-8 w-8 text-viana-orange" />,
      title: t("chatbot.features.availability.title"),
      description: t("chatbot.features.availability.description"),
    },
    {
      icon: <Users className="h-8 w-8 text-viana-orange" />,
      title: t("chatbot.features.channels.title"),
      description: t("chatbot.features.channels.description"),
    },
    {
      icon: <BarChart className="h-8 w-8 text-viana-orange" />,
      title: t("chatbot.features.analytics.title"),
      description: t("chatbot.features.analytics.description"),
    },
  ]

  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-viana-orange" />,
      title: t("chatbot.benefits.response.title"),
      description: t("chatbot.benefits.response.description"),
    },
    {
      icon: <Headphones className="h-6 w-6 text-viana-orange" />,
      title: t("chatbot.benefits.costs.title"),
      description: t("chatbot.benefits.costs.description"),
    },
    {
      icon: <Users className="h-6 w-6 text-viana-orange" />,
      title: t("chatbot.benefits.satisfaction.title"),
      description: t("chatbot.benefits.satisfaction.description"),
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-viana-orange" />,
      title: t("chatbot.benefits.scalability.title"),
      description: t("chatbot.benefits.scalability.description"),
    },
  ]

  return (
    <div className="min-h-screen bg-viana-white">
      <Navbar />

      <main className="pt-28">
        {/* Hero Section */}
        <section
          className="relative pt-24 lg:pt-28 pb-20 overflow-hidden"
          style={{
            backgroundImage: "url('/pages/what-we-do-chatbot.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white mt-8">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">{t("chatbot.hero.title")}</h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">{t("chatbot.hero.subtitle")}</p>
              <Button size="lg" className="bg-white text-viana-orange hover:bg-gray-100 font-semibold px-8 py-3">
                {t("chatbot.hero.cta")}
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">{t("chatbot.features.title")}</h2>
              <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("chatbot.features.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-none">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-viana-black mb-3">{feature.title}</h3>
                    <p className="text-viana-gray">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">{t("chatbot.benefits.title")}</h2>
              <p className="text-xl text-viana-gray max-w-3xl mx-auto">{t("chatbot.benefits.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{benefit.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-viana-black mb-2">{benefit.title}</h3>
                        <p className="text-viana-gray text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-4">{t("chatbot.demo.title")}</h2>
                <p className="text-xl text-viana-gray">{t("chatbot.demo.subtitle")}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <Bot className="h-16 w-16 text-viana-orange mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-viana-black mb-4">{t("chatbot.demo.interactive.title")}</h3>
                <p className="text-viana-gray mb-6">{t("chatbot.demo.interactive.description")}</p>
                <Button className="bg-viana-orange hover:bg-viana-orange/90 text-white font-semibold px-8 py-3">
                  {t("chatbot.demo.cta")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-viana-yellow">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-viana-black mb-6">{t("chatbot.cta.title")}</h2>
            <p className="text-xl text-viana-gray mb-8 max-w-2xl mx-auto">{t("chatbot.cta.subtitle")}</p>
            <Button size="lg" className="bg-viana-orange hover:bg-viana-orange/90 text-white font-semibold px-8 py-3">
              {t("chatbot.cta.button")}
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function ChatbotPage() {
  return (
    <TranslationProvider translations={chatbotTranslations}>
      <ChatbotPageContent />
    </TranslationProvider>
  )
}
