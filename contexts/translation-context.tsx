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
    // Landing Pages translations
    "landingPages.hero.title": "Landing Pages de Alta Conversão",
    "landingPages.hero.subtitle":
      "Páginas otimizadas para maximizar suas conversões e impulsionar o crescimento do seu negócio.",
    "landingPages.features.title": "Recursos Essenciais",
    "landingPages.features.subtitle":
      "Nossas landing pages são desenvolvidas com todos os elementos necessários para maximizar suas conversões e resultados.",
    "landingPages.features.conversion.title": "Alta Conversão",
    "landingPages.features.conversion.description": "Landing pages otimizadas para maximizar suas conversões.",
    "landingPages.features.responsive.title": "Responsivo",
    "landingPages.features.responsive.description": "Design adaptável para todos os dispositivos e telas.",
    "landingPages.features.seo.title": "SEO Otimizado",
    "landingPages.features.seo.description": "Otimização completa para mecanismos de busca.",
    "landingPages.features.analytics.title": "Analytics",
    "landingPages.features.analytics.description": "Acompanhamento detalhado de métricas e performance.",
    "landingPages.benefits.title": "Por que Escolher Nossas Landing Pages",
    "landingPages.benefits.subtitle":
      "Combinamos design atrativo com estratégias de conversão para entregar resultados excepcionais.",
    "landingPages.benefits.focus.title": "Foco no Objetivo",
    "landingPages.benefits.focus.description": "Páginas direcionadas para uma ação específica do usuário.",
    "landingPages.benefits.sales.title": "Aumento de Vendas",
    "landingPages.benefits.sales.description": "Estratégias comprovadas para aumentar suas conversões.",
    "landingPages.benefits.design.title": "Design Atrativo",
    "landingPages.benefits.design.description": "Visual moderno e profissional que gera confiança.",
    "landingPages.benefits.speed.title": "Carregamento Rápido",
    "landingPages.benefits.speed.description": "Otimização de performance para melhor experiência.",
    "landingPages.cta.title": "Aumente suas Conversões Hoje",
    "landingPages.cta.subtitle":
      "Tenha uma landing page profissional que converte visitantes em clientes e impulsiona o crescimento do seu negócio.",
    "landingPages.cta.button": "Solicitar Orçamento",
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
    // Landing Pages translations
    "landingPages.hero.title": "High-Converting Landing Pages",
    "landingPages.hero.subtitle": "Pages optimized to maximize your conversions and boost your business growth.",
    "landingPages.features.title": "Essential Features",
    "landingPages.features.subtitle":
      "Our landing pages are developed with all the necessary elements to maximize your conversions and results.",
    "landingPages.features.conversion.title": "High Conversion",
    "landingPages.features.conversion.description": "Landing pages optimized to maximize your conversions.",
    "landingPages.features.responsive.title": "Responsive",
    "landingPages.features.responsive.description": "Adaptive design for all devices and screens.",
    "landingPages.features.seo.title": "SEO Optimized",
    "landingPages.features.seo.description": "Complete optimization for search engines.",
    "landingPages.features.analytics.title": "Analytics",
    "landingPages.features.analytics.description": "Detailed tracking of metrics and performance.",
    "landingPages.benefits.title": "Why Choose Our Landing Pages",
    "landingPages.benefits.subtitle":
      "We combine attractive design with conversion strategies to deliver exceptional results.",
    "landingPages.benefits.focus.title": "Goal Focused",
    "landingPages.benefits.focus.description": "Pages directed towards a specific user action.",
    "landingPages.benefits.sales.title": "Increased Sales",
    "landingPages.benefits.sales.description": "Proven strategies to increase your conversions.",
    "landingPages.benefits.design.title": "Attractive Design",
    "landingPages.benefits.design.description": "Modern and professional visual that generates trust.",
    "landingPages.benefits.speed.title": "Fast Loading",
    "landingPages.benefits.speed.description": "Performance optimization for better experience.",
    "landingPages.cta.title": "Increase Your Conversions Today",
    "landingPages.cta.subtitle":
      "Have a professional landing page that converts visitors into customers and boosts your business growth.",
    "landingPages.cta.button": "Request Quote",
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
    // Landing Pages translations
    "landingPages.hero.title": "Landing Pages de Alta Conversión",
    "landingPages.hero.subtitle":
      "Páginas optimizadas para maximizar sus conversiones e impulsar el crecimiento de su negocio.",
    "landingPages.features.title": "Características Esenciales",
    "landingPages.features.subtitle":
      "Nuestras landing pages están desarrolladas con todos los elementos necesarios para maximizar sus conversiones y resultados.",
    "landingPages.features.conversion.title": "Alta Conversión",
    "landingPages.features.conversion.description": "Landing pages optimizadas para maximizar sus conversiones.",
    "landingPages.features.responsive.title": "Responsivo",
    "landingPages.features.responsive.description": "Diseño adaptable para todos los dispositivos y pantallas.",
    "landingPages.features.seo.title": "SEO Optimizado",
    "landingPages.features.seo.description": "Optimización completa para motores de búsqueda.",
    "landingPages.features.analytics.title": "Analytics",
    "landingPages.features.analytics.description": "Seguimiento detallado de métricas y rendimiento.",
    "landingPages.benefits.title": "Por qué Elegir Nuestras Landing Pages",
    "landingPages.benefits.subtitle":
      "Combinamos diseño atractivo con estrategias de conversión para entregar resultados excepcionales.",
    "landingPages.benefits.focus.title": "Enfoque en el Objetivo",
    "landingPages.benefits.focus.description": "Páginas dirigidas hacia una acción específica del usuario.",
    "landingPages.benefits.sales.title": "Aumento de Ventas",
    "landingPages.benefits.sales.description": "Estrategias probadas para aumentar sus conversiones.",
    "landingPages.benefits.design.title": "Diseño Atractivo",
    "landingPages.benefits.design.description": "Visual moderno y profesional que genera confianza.",
    "landingPages.benefits.speed.title": "Carga Rápida",
    "landingPages.benefits.speed.description": "Optimización de rendimiento para mejor experiencia.",
    "landingPages.cta.title": "Aumente sus Conversiones Hoy",
    "landingPages.cta.subtitle":
      "Tenga una landing page profesional que convierte visitantes en clientes e impulsa el crecimiento de su negocio.",
    "landingPages.cta.button": "Solicitar Cotización",
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
    // Landing Pages translations
    "landingPages.hero.title": "Landing Pages à Haute Conversion",
    "landingPages.hero.subtitle":
      "Pages optimisées pour maximiser vos conversions et stimuler la croissance de votre entreprise.",
    "landingPages.features.title": "Fonctionnalités Essentielles",
    "landingPages.features.subtitle":
      "Nos landing pages sont développées avec tous les éléments nécessaires pour maximiser vos conversions et résultats.",
    "landingPages.features.conversion.title": "Haute Conversion",
    "landingPages.features.conversion.description": "Landing pages optimisées pour maximiser vos conversions.",
    "landingPages.features.responsive.title": "Responsive",
    "landingPages.features.responsive.description": "Design adaptatif pour tous les appareils et écrans.",
    "landingPages.features.seo.title": "SEO Optimisé",
    "landingPages.features.seo.description": "Optimisation complète pour les moteurs de recherche.",
    "landingPages.features.analytics.title": "Analytics",
    "landingPages.features.analytics.description": "Suivi détaillé des métriques et performances.",
    "landingPages.benefits.title": "Pourquoi Choisir Nos Landing Pages",
    "landingPages.benefits.subtitle":
      "Nous combinons un design attractif avec des stratégies de conversion pour livrer des résultats exceptionnels.",
    "landingPages.benefits.focus.title": "Focus sur l'Objectif",
    "landingPages.benefits.focus.description": "Pages dirigées vers une action spécifique de l'utilisateur.",
    "landingPages.benefits.sales.title": "Augmentation des Ventes",
    "landingPages.benefits.sales.description": "Stratégies prouvées pour augmenter vos conversions.",
    "landingPages.benefits.design.title": "Design Attractif",
    "landingPages.benefits.design.description": "Visuel moderne et professionnel qui génère la confiance.",
    "landingPages.benefits.speed.title": "Chargement Rapide",
    "landingPages.benefits.speed.description": "Optimisation des performances pour une meilleure expérience.",
    "landingPages.cta.title": "Augmentez vos Conversions Aujourd'hui",
    "landingPages.cta.subtitle":
      "Ayez une landing page professionnelle qui convertit les visiteurs en clients et stimule la croissance de votre entreprise.",
    "landingPages.cta.button": "Demander Devis",
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
    // Landing Pages translations
    "landingPages.hero.title": "Hochkonvertierende Landing Pages",
    "landingPages.hero.subtitle":
      "Seiten optimiert, um Ihre Konversionen zu maximieren und Ihr Geschäftswachstum zu fördern.",
    "landingPages.features.title": "Wesentliche Funktionen",
    "landingPages.features.subtitle":
      "Unsere Landing Pages werden mit allen notwendigen Elementen entwickelt, um Ihre Konversionen und Ergebnisse zu maximieren.",
    "landingPages.features.conversion.title": "Hohe Konversion",
    "landingPages.features.conversion.description": "Landing Pages optimiert, um Ihre Konversionen zu maximieren.",
    "landingPages.features.responsive.title": "Responsive",
    "landingPages.features.responsive.description": "Anpassbares Design für alle Geräte und Bildschirme.",
    "landingPages.features.seo.title": "SEO Optimiert",
    "landingPages.features.seo.description": "Vollständige Optimierung für Suchmaschinen.",
    "landingPages.features.analytics.title": "Analytics",
    "landingPages.features.analytics.description": "Detaillierte Verfolgung von Metriken und Leistung.",
    "landingPages.benefits.title": "Warum Unsere Landing Pages Wählen",
    "landingPages.benefits.subtitle":
      "Wir kombinieren attraktives Design mit Konversionsstrategien, um außergewöhnliche Ergebnisse zu liefern.",
    "landingPages.benefits.focus.title": "Zielfokus",
    "landingPages.benefits.focus.description": "Seiten auf eine spezifische Benutzeraktion ausgerichtet.",
    "landingPages.benefits.sales.title": "Verkaufssteigerung",
    "landingPages.benefits.sales.description": "Bewährte Strategien zur Steigerung Ihrer Konversionen.",
    "landingPages.benefits.design.title": "Attraktives Design",
    "landingPages.benefits.design.description": "Modernes und professionelles Erscheinungsbild, das Vertrauen schafft.",
    "landingPages.benefits.speed.title": "Schnelles Laden",
    "landingPages.benefits.speed.description": "Leistungsoptimierung für bessere Erfahrung.",
    "landingPages.cta.title": "Steigern Sie Ihre Konversionen Heute",
    "landingPages.cta.subtitle":
      "Haben Sie eine professionelle Landing Page, die Besucher in Kunden verwandelt und Ihr Geschäftswachstum fördert.",
    "landingPages.cta.button": "Angebot Anfordern",
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
