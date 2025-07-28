"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { homeTranslations } from "@/app/translation"
import { navbarTranslations } from "@/app/translations/navbar"
import { agileTranslations } from "@/app/what-we-do/agile/translation"
import { careersTranslations } from "@/app/careers/translation"
import { contactTranslations } from "@/app/contact/translation"
import { aboutTranslations } from "@/app/about/translation"

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
    // Development translations
    "development.hero.title": "Desenvolvimento de Software",
    "development.hero.subtitle": "Criamos soluções digitais inovadoras e escaláveis para impulsionar seu negócio.",
    "development.hero.cta": "Iniciar Projeto",
    "development.services.title": "Nossos Serviços",
    "development.services.subtitle": "Oferecemos desenvolvimento completo para todas as suas necessidades digitais.",
    "development.services.carousel.website": "Desenvolvimento de Websites",
    "development.services.carousel.mobile": "Aplicações Mobile",
    "development.services.carousel.corporate": "Sistemas Corporativos",
    "development.services.carousel.apis": "Arquitetura de APIs",
    "development.web.title": "Desenvolvimento Web",
    "development.web.description": "Sites e aplicações web modernas, responsivas e otimizadas.",
    "development.mobile.title": "Apps Mobile",
    "development.mobile.description": "Aplicativos nativos e híbridos para iOS e Android.",
    "development.corporate.title": "Sistemas Corporativos",
    "development.corporate.description": "Soluções empresariais robustas e integradas.",
    "development.apis.title": "APIs e Integrações",
    "development.apis.description": "Desenvolvimento de APIs RESTful e integrações de sistemas.",
    "development.why.title": "Por que Escolher Nosso Desenvolvimento?",
    "development.why.subtitle":
      "Combinamos tecnologia de ponta com metodologias ágeis para entregar resultados excepcionais.",
    "development.performance.title": "Alta Performance",
    "development.performance.description": "Código otimizado para máxima velocidade e eficiência.",
    "development.security.title": "Segurança Avançada",
    "development.security.description": "Implementamos as melhores práticas de segurança digital.",
    "development.ux.title": "UX/UI Excepcional",
    "development.ux.description": "Interfaces intuitivas e experiências de usuário memoráveis.",
    "development.quality.title": "Qualidade Garantida",
    "development.quality.description": "Testes rigorosos e controle de qualidade em cada etapa.",
    "development.cta.title": "Pronto para Desenvolver?",
    "development.cta.subtitle": "Transforme suas ideias em realidade com nossa expertise em desenvolvimento.",
    "development.cta.button": "Solicitar Orçamento",
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
    // Development translations
    "development.hero.title": "Software Development",
    "development.hero.subtitle": "We create innovative and scalable digital solutions to boost your business.",
    "development.hero.cta": "Start Project",
    "development.services.title": "Our Services",
    "development.services.subtitle": "We offer complete development for all your digital needs.",
    "development.services.carousel.website": "Website Development",
    "development.services.carousel.mobile": "Mobile Applications",
    "development.services.carousel.corporate": "Corporate Systems",
    "development.services.carousel.apis": "API Architecture",
    "development.web.title": "Web Development",
    "development.web.description": "Modern, responsive and optimized websites and web applications.",
    "development.mobile.title": "Mobile Apps",
    "development.mobile.description": "Native and hybrid applications for iOS and Android.",
    "development.corporate.title": "Corporate Systems",
    "development.corporate.description": "Robust and integrated enterprise solutions.",
    "development.apis.title": "APIs and Integrations",
    "development.apis.description": "RESTful API development and system integrations.",
    "development.why.title": "Why Choose Our Development?",
    "development.why.subtitle":
      "We combine cutting-edge technology with agile methodologies to deliver exceptional results.",
    "development.performance.title": "High Performance",
    "development.performance.description": "Optimized code for maximum speed and efficiency.",
    "development.security.title": "Advanced Security",
    "development.security.description": "We implement the best digital security practices.",
    "development.ux.title": "Exceptional UX/UI",
    "development.ux.description": "Intuitive interfaces and memorable user experiences.",
    "development.quality.title": "Guaranteed Quality",
    "development.quality.description": "Rigorous testing and quality control at every stage.",
    "development.cta.title": "Ready to Develop?",
    "development.cta.subtitle": "Transform your ideas into reality with our development expertise.",
    "development.cta.button": "Request Quote",
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
    // Development translations
    "development.hero.title": "Desarrollo de Software",
    "development.hero.subtitle": "Creamos soluciones digitales innovadoras y escalables para impulsar su negocio.",
    "development.hero.cta": "Iniciar Proyecto",
    "development.services.title": "Nuestros Servicios",
    "development.services.subtitle": "Ofrecemos desarrollo completo para todas sus necesidades digitales.",
    "development.services.carousel.website": "Desarrollo de Sitios Web",
    "development.services.carousel.mobile": "Aplicaciones Móviles",
    "development.services.carousel.corporate": "Sistemas Corporativos",
    "development.services.carousel.apis": "Arquitectura de APIs",
    "development.web.title": "Desarrollo Web",
    "development.web.description": "Sitios web y aplicaciones web modernas, responsivas y optimizadas.",
    "development.mobile.title": "Apps Móviles",
    "development.mobile.description": "Aplicaciones nativas e híbridas para iOS y Android.",
    "development.corporate.title": "Sistemas Corporativos",
    "development.corporate.description": "Soluciones empresariales robustas e integradas.",
    "development.apis.title": "APIs e Integraciones",
    "development.apis.description": "Desarrollo de APIs RESTful e integraciones de sistemas.",
    "development.why.title": "¿Por qué Elegir Nuestro Desarrollo?",
    "development.why.subtitle":
      "Combinamos tecnología de vanguardia con metodologías ágiles para entregar resultados excepcionales.",
    "development.performance.title": "Alto Rendimiento",
    "development.performance.description": "Código optimizado para máxima velocidad y eficiencia.",
    "development.security.title": "Seguridad Avanzada",
    "development.security.description": "Implementamos las mejores prácticas de seguridad digital.",
    "development.ux.title": "UX/UI Excepcional",
    "development.ux.description": "Interfaces intuitivas y experiencias de usuario memorables.",
    "development.quality.title": "Calidad Garantizada",
    "development.quality.description": "Pruebas rigurosas y control de calidad en cada etapa.",
    "development.cta.title": "¿Listo para Desarrollar?",
    "development.cta.subtitle": "Transforme sus ideas en realidad con nuestra experiencia en desarrollo.",
    "development.cta.button": "Solicitar Cotización",
  },
  fr: {
    ...homeTranslations.fr,
    ...navbarTranslations.fr,
    ...agileTranslations.fr,
    ...careersTranslations.fr,
    ...contactTranslations.fr,
    ...aboutTranslations.fr,
    // Development translations
    "development.hero.title": "Développement de Logiciels",
    "development.hero.subtitle":
      "Nous créons des solutions numériques innovantes et évolutives pour booster votre entreprise.",
    "development.hero.cta": "Démarrer Projet",
    "development.services.title": "Nos Services",
    "development.services.subtitle": "Nous offrons un développement complet pour tous vos besoins numériques.",
    "development.services.carousel.website": "Développement de Sites Web",
    "development.services.carousel.mobile": "Applications Mobiles",
    "development.services.carousel.corporate": "Systèmes d'Entreprise",
    "development.services.carousel.apis": "Architecture d'APIs",
    "development.web.title": "Développement Web",
    "development.web.description": "Sites web et applications web modernes, responsives et optimisées.",
    "development.mobile.title": "Apps Mobiles",
    "development.mobile.description": "Applications natives et hybrides pour iOS et Android.",
    "development.corporate.title": "Systèmes d'Entreprise",
    "development.corporate.description": "Solutions d'entreprise robustes et intégrées.",
    "development.apis.title": "APIs et Intégrations",
    "development.apis.description": "Développement d'APIs RESTful et intégrations de systèmes.",
    "development.why.title": "Pourquoi Choisir Notre Développement?",
    "development.why.subtitle":
      "Nous combinons une technologie de pointe avec des méthodologies agiles pour livrer des résultats exceptionnels.",
    "development.performance.title": "Haute Performance",
    "development.performance.description": "Code optimisé pour une vitesse et une efficacité maximales.",
    "development.security.title": "Sécurité Avancée",
    "development.security.description": "Nous implémentons les meilleures pratiques de sécurité numérique.",
    "development.ux.title": "UX/UI Exceptionnel",
    "development.ux.description": "Interfaces intuitives et expériences utilisateur mémorables.",
    "development.quality.title": "Qualité Garantie",
    "development.quality.description": "Tests rigoureux et contrôle qualité à chaque étape.",
    "development.cta.title": "Prêt à Développer?",
    "development.cta.subtitle": "Transformez vos idées en réalité avec notre expertise en développement.",
    "development.cta.button": "Demander Devis",
  },
  de: {
    ...homeTranslations.de,
    ...navbarTranslations.de,
    ...agileTranslations.de,
    ...careersTranslations.de,
    ...contactTranslations.de,
    ...aboutTranslations.de,
    // Development translations
    "development.hero.title": "Software-Entwicklung",
    "development.hero.subtitle":
      "Wir erstellen innovative und skalierbare digitale Lösungen, um Ihr Unternehmen voranzubringen.",
    "development.hero.cta": "Projekt Starten",
    "development.services.title": "Unsere Dienstleistungen",
    "development.services.subtitle": "Wir bieten vollständige Entwicklung für alle Ihre digitalen Bedürfnisse.",
    "development.services.carousel.website": "Website-Entwicklung",
    "development.services.carousel.mobile": "Mobile Anwendungen",
    "development.services.carousel.corporate": "Unternehmenssysteme",
    "development.services.carousel.apis": "API-Architektur",
    "development.web.title": "Web-Entwicklung",
    "development.web.description": "Moderne, responsive und optimierte Websites und Webanwendungen.",
    "development.mobile.title": "Mobile Apps",
    "development.mobile.description": "Native und hybride Anwendungen für iOS und Android.",
    "development.corporate.title": "Unternehmenssysteme",
    "development.corporate.description": "Robuste und integrierte Unternehmenslösungen.",
    "development.apis.title": "APIs und Integrationen",
    "development.apis.description": "RESTful API-Entwicklung und Systemintegrationen.",
    "development.why.title": "Warum Unsere Entwicklung Wählen?",
    "development.why.subtitle":
      "Wir kombinieren modernste Technologie mit agilen Methoden, um außergewöhnliche Ergebnisse zu liefern.",
    "development.performance.title": "Hohe Leistung",
    "development.performance.description": "Optimierter Code für maximale Geschwindigkeit und Effizienz.",
    "development.security.title": "Erweiterte Sicherheit",
    "development.security.description": "Wir implementieren die besten digitalen Sicherheitspraktiken.",
    "development.ux.title": "Außergewöhnliche UX/UI",
    "development.ux.description": "Intuitive Benutzeroberflächen und unvergessliche Benutzererfahrungen.",
    "development.quality.title": "Garantierte Qualität",
    "development.quality.description": "Rigorose Tests und Qualitätskontrolle in jeder Phase.",
    "development.cta.title": "Bereit zu Entwickeln?",
    "development.cta.subtitle": "Verwandeln Sie Ihre Ideen mit unserer Entwicklungsexpertise in die Realität.",
    "development.cta.button": "Angebot Anfordern",
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
