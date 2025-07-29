"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { homeTranslations } from "@/app/translation"
import { navbarTranslations } from "@/app/translations/navbar"
import { careersTranslations } from "@/app/careers/translation"
import { contactTranslations } from "@/app/contact/translation"
import { aboutTranslations } from "@/app/about/translation"
import { chatbotTranslations } from "@/app/what-we-do/chatbot/translation"

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
    ...careersTranslations.pt,
    ...contactTranslations.pt,
    ...aboutTranslations.pt,
    ...chatbotTranslations.pt,
    // Agile translations
    "agile.hero.title": "Metodologia Ágil",
    "agile.hero.subtitle":
      "Acelere seus projetos com metodologias ágeis comprovadas e entregue resultados excepcionais.",
    "agile.benefits.title": "Benefícios da Metodologia Ágil",
    "agile.benefits.subtitle":
      "Descubra como a metodologia ágil pode transformar seus projetos e acelerar seus resultados.",
    "agile.benefits.delivery.title": "Entrega Rápida",
    "agile.benefits.delivery.description": "Entregas incrementais e frequentes para valor contínuo ao cliente.",
    "agile.benefits.collaboration.title": "Colaboração",
    "agile.benefits.collaboration.description":
      "Comunicação efetiva entre equipes e stakeholders durante todo o projeto.",
    "agile.benefits.flexibility.title": "Flexibilidade",
    "agile.benefits.flexibility.description": "Adaptação rápida a mudanças e novos requisitos do mercado.",
    "agile.benefits.quality.title": "Qualidade",
    "agile.benefits.quality.description": "Foco contínuo na qualidade através de testes e revisões constantes.",
    "agile.process.title": "Nosso Processo Ágil",
    "agile.process.subtitle":
      "Seguimos um processo estruturado que garante entregas de qualidade e satisfação do cliente.",
    "agile.process.planning.title": "Planejamento",
    "agile.process.planning.description": "Definição clara de objetivos, escopo e prioridades do projeto.",
    "agile.process.sprints.title": "Sprints",
    "agile.process.sprints.description": "Desenvolvimento em ciclos curtos com entregas incrementais.",
    "agile.process.review.title": "Revisão",
    "agile.process.review.description": "Avaliação contínua do progresso e ajustes necessários.",
    "agile.process.delivery.title": "Entrega",
    "agile.process.delivery.description": "Implementação e entrega de funcionalidades testadas e aprovadas.",
    // Landing Pages translations
    "landingPages.hero.title": "Landing Pages de Alta Conversão",
    "landingPages.hero.subtitle":
      "Criamos landing pages que convertem visitantes em clientes, com design profissional e estratégias comprovadas de marketing digital.",
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
    "landingPages.cta.title": "Pronto para Desenvolver?",
    "landingPages.cta.subtitle": "Transforme suas ideias em realidade com nossa expertise em desenvolvimento.",
    "landingPages.cta.button": "Solicitar Orçamento",
    // Outsourcing translations
    "outsourcing.hero.title": "Terceirização de TI",
    "outsourcing.hero.subtitle": "Acelere seus projetos com equipes especializadas e dedicadas ao seu sucesso.",
    "outsourcing.services.title": "Nossos Serviços",
    "outsourcing.services.subtitle":
      "Oferecemos soluções completas de terceirização para atender todas as suas necessidades tecnológicas.",
    "outsourcing.services.dedicated.title": "Equipes Dedicadas",
    "outsourcing.services.dedicated.description": "Times especializados trabalhando exclusivamente no seu projeto.",
    "outsourcing.services.offshore.title": "Desenvolvimento Offshore",
    "outsourcing.services.offshore.description": "Acesso a talentos globais com custos otimizados.",
    "outsourcing.services.support.title": "Suporte 24/7",
    "outsourcing.services.support.description": "Cobertura completa com times em diferentes fusos horários.",
    "outsourcing.services.specialists.title": "Especialistas Certificados",
    "outsourcing.services.specialists.description": "Profissionais com certificações nas principais tecnologias.",
    "outsourcing.benefits.title": "Vantagens da Terceirização",
    "outsourcing.benefits.subtitle":
      "Descubra como a terceirização pode transformar sua operação e acelerar seus resultados.",
    "outsourcing.benefits.costs.title": "Redução de Custos",
    "outsourcing.benefits.costs.description": "Economize até 60% em custos operacionais e de desenvolvimento.",
    "outsourcing.benefits.scalability.title": "Escalabilidade Rápida",
    "outsourcing.benefits.scalability.description": "Aumente ou diminua sua equipe conforme a demanda do projeto.",
    "outsourcing.benefits.quality.title": "Qualidade Garantida",
    "outsourcing.benefits.quality.description": "Processos rigorosos de controle de qualidade e testes.",
    "outsourcing.benefits.focus.title": "Foco no Core Business",
    "outsourcing.benefits.focus.description": "Concentre-se no seu negócio principal enquanto cuidamos da tecnologia.",
    "outsourcing.process.title": "Como Funciona",
    "outsourcing.process.subtitle": "Nosso processo estruturado garante a formação da equipe ideal para seu projeto.",
    "outsourcing.process.analysis.title": "Análise de Necessidades",
    "outsourcing.process.analysis.description":
      "Entendemos suas necessidades específicas e definimos o perfil ideal da equipe.",
    "outsourcing.process.selection.title": "Seleção de Talentos",
    "outsourcing.process.selection.description":
      "Recrutamos e selecionamos os melhores profissionais para compor sua equipe.",
    "outsourcing.process.integration.title": "Integração e Gestão",
    "outsourcing.process.integration.description": "Integramos a equipe ao seu projeto e fornecemos gestão contínua.",
    "outsourcing.cta.title": "Acelere seus Projetos",
    "outsourcing.cta.subtitle":
      "Monte sua equipe de desenvolvimento ideal e acelere a entrega dos seus projetos com qualidade garantida.",
    "outsourcing.cta.button": "Solicitar Proposta",
    // System Integration translations
    "systemIntegration.hero.title": "Integração de Sistemas",
    "systemIntegration.hero.subtitle":
      "Conecte todos os seus sistemas e aplicações para criar um ambiente tecnológico unificado e eficiente.",
    "systemIntegration.benefits.title": "Benefícios da Integração",
    "systemIntegration.benefits.subtitle":
      "Transforme sistemas isolados em uma solução unificada que potencializa a eficiência e produtividade da sua empresa.",
    "systemIntegration.benefits.connectivity.title": "Conectividade Total",
    "systemIntegration.benefits.connectivity.description":
      "Integração completa entre todos os seus sistemas e aplicações.",
    "systemIntegration.benefits.automation.title": "Automação",
    "systemIntegration.benefits.automation.description":
      "Automatização de processos para maior eficiência operacional.",
    "systemIntegration.benefits.data.title": "Dados Unificados",
    "systemIntegration.benefits.data.description": "Centralização e sincronização de dados em tempo real.",
    "systemIntegration.benefits.security.title": "Segurança",
    "systemIntegration.benefits.security.description": "Protocolos de segurança avançados em todas as integrações.",
    "systemIntegration.solutions.title": "Soluções de Integração",
    "systemIntegration.solutions.subtitle":
      "Oferecemos soluções personalizadas para conectar qualquer tipo de sistema, desde aplicações modernas até sistemas legados.",
    "systemIntegration.solutions.apis.title": "APIs e Microserviços",
    "systemIntegration.solutions.apis.description": "Desenvolvimento de APIs robustas para comunicação entre sistemas.",
    "systemIntegration.solutions.cloud.title": "Integração em Nuvem",
    "systemIntegration.solutions.cloud.description": "Conexão de sistemas locais com soluções em nuvem.",
    "systemIntegration.solutions.erp.title": "ERP e CRM",
    "systemIntegration.solutions.erp.description": "Integração de sistemas de gestão empresarial e relacionamento.",
    "systemIntegration.solutions.legacy.title": "Sistemas Legados",
    "systemIntegration.solutions.legacy.description": "Modernização e integração de sistemas antigos.",
    "systemIntegration.cta.title": "Unifique seus Sistemas",
    "systemIntegration.cta.subtitle":
      "Elimine silos de informação e crie um ambiente tecnológico integrado que impulsiona a eficiência do seu negócio.",
    "systemIntegration.cta.button": "Avaliar Integração",
  },
  en: {
    ...homeTranslations.en,
    ...navbarTranslations.en,
    ...careersTranslations.en,
    ...contactTranslations.en,
    ...aboutTranslations.en,
    ...chatbotTranslations.en,
    // Agile translations
    "agile.hero.title": "Agile Methodology",
    "agile.hero.subtitle": "Accelerate your projects with proven agile methodologies and deliver exceptional results.",
    "agile.benefits.title": "Benefits of Agile Methodology",
    "agile.benefits.subtitle":
      "Discover how agile methodology can transform your projects and accelerate your results.",
    "agile.benefits.delivery.title": "Fast Delivery",
    "agile.benefits.delivery.description": "Incremental and frequent deliveries for continuous customer value.",
    "agile.benefits.collaboration.title": "Collaboration",
    "agile.benefits.collaboration.description":
      "Effective communication between teams and stakeholders throughout the project.",
    "agile.benefits.flexibility.title": "Flexibility",
    "agile.benefits.flexibility.description": "Quick adaptation to changes and new market requirements.",
    "agile.benefits.quality.title": "Quality",
    "agile.benefits.quality.description": "Continuous focus on quality through constant testing and reviews.",
    "agile.process.title": "Our Agile Process",
    "agile.process.subtitle":
      "We follow a structured process that ensures quality deliveries and customer satisfaction.",
    "agile.process.planning.title": "Planning",
    "agile.process.planning.description": "Clear definition of project objectives, scope and priorities.",
    "agile.process.sprints.title": "Sprints",
    "agile.process.sprints.description": "Development in short cycles with incremental deliveries.",
    "agile.process.review.title": "Review",
    "agile.process.review.description": "Continuous evaluation of progress and necessary adjustments.",
    "agile.process.delivery.title": "Delivery",
    "agile.process.delivery.description": "Implementation and delivery of tested and approved functionalities.",
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
    // Outsourcing translations
    "outsourcing.hero.title": "IT Outsourcing",
    "outsourcing.hero.subtitle": "Accelerate your projects with specialized teams dedicated to your success.",
    "outsourcing.services.title": "Our Services",
    "outsourcing.services.subtitle": "We offer complete outsourcing solutions to meet all your technological needs.",
    "outsourcing.services.dedicated.title": "Dedicated Teams",
    "outsourcing.services.dedicated.description": "Specialized teams working exclusively on your project.",
    "outsourcing.services.offshore.title": "Offshore Development",
    "outsourcing.services.offshore.description": "Access to global talent with optimized costs.",
    "outsourcing.services.support.title": "24/7 Support",
    "outsourcing.services.support.description": "Complete coverage with teams in different time zones.",
    "outsourcing.services.specialists.title": "Certified Specialists",
    "outsourcing.services.specialists.description": "Professionals with certifications in leading technologies.",
    "outsourcing.benefits.title": "Outsourcing Advantages",
    "outsourcing.benefits.subtitle":
      "Discover how outsourcing can transform your operation and accelerate your results.",
    "outsourcing.benefits.costs.title": "Cost Reduction",
    "outsourcing.benefits.costs.description": "Save up to 60% on operational and development costs.",
    "outsourcing.benefits.scalability.title": "Rapid Scalability",
    "outsourcing.benefits.scalability.description": "Increase or decrease your team according to project demand.",
    "outsourcing.benefits.quality.title": "Guaranteed Quality",
    "outsourcing.benefits.quality.description": "Rigorous quality control and testing processes.",
    "outsourcing.benefits.focus.title": "Focus on Core Business",
    "outsourcing.benefits.focus.description": "Focus on your main business while we take care of technology.",
    "outsourcing.process.title": "How It Works",
    "outsourcing.process.subtitle": "Our structured process ensures the formation of the ideal team for your project.",
    "outsourcing.process.analysis.title": "Needs Analysis",
    "outsourcing.process.analysis.description": "We understand your specific needs and define the ideal team profile.",
    "outsourcing.process.selection.title": "Talent Selection",
    "outsourcing.process.selection.description": "We recruit and select the best professionals to compose your team.",
    "outsourcing.process.integration.title": "Integration and Management",
    "outsourcing.process.integration.description":
      "We integrate the team into your project and provide continuous management.",
    "outsourcing.cta.title": "Accelerate Your Projects",
    "outsourcing.cta.subtitle":
      "Build your ideal development team and accelerate the delivery of your projects with guaranteed quality.",
    "outsourcing.cta.button": "Request Proposal",
    // System Integration translations
    "systemIntegration.hero.title": "System Integration",
    "systemIntegration.hero.subtitle":
      "Connect all your systems and applications to create a unified and efficient technological environment.",
    "systemIntegration.benefits.title": "Integration Benefits",
    "systemIntegration.benefits.subtitle":
      "Transform isolated systems into a unified solution that enhances your company's efficiency and productivity.",
    "systemIntegration.benefits.connectivity.title": "Total Connectivity",
    "systemIntegration.benefits.connectivity.description":
      "Complete integration between all your systems and applications.",
    "systemIntegration.benefits.automation.title": "Automation",
    "systemIntegration.benefits.automation.description": "Process automation for greater operational efficiency.",
    "systemIntegration.benefits.data.title": "Unified Data",
    "systemIntegration.benefits.data.description": "Centralization and real-time data synchronization.",
    "systemIntegration.benefits.security.title": "Security",
    "systemIntegration.benefits.security.description": "Advanced security protocols in all integrations.",
    "systemIntegration.solutions.title": "Integration Solutions",
    "systemIntegration.solutions.subtitle":
      "We offer customized solutions to connect any type of system, from modern applications to legacy systems.",
    "systemIntegration.solutions.apis.title": "APIs and Microservices",
    "systemIntegration.solutions.apis.description": "Development of robust APIs for communication between systems.",
    "systemIntegration.solutions.cloud.title": "Cloud Integration",
    "systemIntegration.solutions.cloud.description": "Connection of local systems with cloud solutions.",
    "systemIntegration.solutions.erp.title": "ERP and CRM",
    "systemIntegration.solutions.erp.description": "Integration of business management and relationship systems.",
    "systemIntegration.solutions.legacy.title": "Legacy Systems",
    "systemIntegration.solutions.legacy.description": "Modernization and integration of old systems.",
    "systemIntegration.cta.title": "Unify Your Systems",
    "systemIntegration.cta.subtitle":
      "Eliminate information silos and create an integrated technological environment that drives your business efficiency.",
    "systemIntegration.cta.button": "Evaluate Integration",
  },
  es: {
    ...homeTranslations.es,
    ...navbarTranslations.es,
    ...careersTranslations.es,
    ...contactTranslations.es,
    ...aboutTranslations.es,
    ...chatbotTranslations.es,
    // Agile translations
    "agile.hero.title": "Metodología Ágil",
    "agile.hero.subtitle":
      "Acelere sus proyectos con metodologías ágiles probadas y entregue resultados excepcionales.",
    "agile.benefits.title": "Beneficios de la Metodología Ágil",
    "agile.benefits.subtitle":
      "Descubra cómo la metodología ágil puede transformar sus proyectos y acelerar sus resultados.",
    "agile.benefits.delivery.title": "Entrega Rápida",
    "agile.benefits.delivery.description": "Entregas incrementales y frecuentes para valor continuo al cliente.",
    "agile.benefits.collaboration.title": "Colaboración",
    "agile.benefits.collaboration.description":
      "Comunicación efectiva entre equipos y stakeholders durante todo el proyecto.",
    "agile.benefits.flexibility.title": "Flexibilidad",
    "agile.benefits.flexibility.description": "Adaptación rápida a cambios y nuevos requisitos del mercado.",
    "agile.benefits.quality.title": "Calidad",
    "agile.benefits.quality.description": "Enfoque continuo en la calidad a través de pruebas y revisiones constantes.",
    "agile.process.title": "Nuestro Proceso Ágil",
    "agile.process.subtitle":
      "Seguimos un proceso estructurado que garantiza entregas de calidad y satisfacción del cliente.",
    "agile.process.planning.title": "Planificación",
    "agile.process.planning.description": "Definición clara de objetivos, alcance y prioridades del proyecto.",
    "agile.process.sprints.title": "Sprints",
    "agile.process.sprints.description": "Desarrollo en ciclos cortos con entregas incrementales.",
    "agile.process.review.title": "Revisión",
    "agile.process.review.description": "Evaluación continua del progreso y ajustes necesarios.",
    "agile.process.delivery.title": "Entrega",
    "agile.process.delivery.description": "Implementación y entrega de funcionalidades probadas y aprobadas.",
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
    // Outsourcing translations
    "outsourcing.hero.title": "Tercerización de TI",
    "outsourcing.hero.subtitle": "Acelere sus proyectos con equipos especializados y dedicados a su éxito.",
    "outsourcing.services.title": "Nuestros Servicios",
    "outsourcing.services.subtitle":
      "Ofrecemos soluciones completas de tercerización para satisfacer todas sus necesidades tecnológicas.",
    "outsourcing.services.dedicated.title": "Equipos Dedicados",
    "outsourcing.services.dedicated.description": "Equipos especializados trabajando exclusivamente en su proyecto.",
    "outsourcing.services.offshore.title": "Desarrollo Offshore",
    "outsourcing.services.offshore.description": "Acceso a talento global con costos optimizados.",
    "outsourcing.services.support.title": "Soporte 24/7",
    "outsourcing.services.support.description": "Cobertura completa con equipos en diferentes zonas horarias.",
    "outsourcing.services.specialists.title": "Especialistas Certificados",
    "outsourcing.services.specialists.description": "Profesionales con certificaciones en las principales tecnologías.",
    "outsourcing.benefits.title": "Ventajas de la Tercerización",
    "outsourcing.benefits.subtitle":
      "Descubra cómo la tercerización puede transformar su operación y acelerar sus resultados.",
    "outsourcing.benefits.costs.title": "Reducción de Costos",
    "outsourcing.benefits.costs.description": "Ahorre hasta 60% en costos operacionales y de desarrollo.",
    "outsourcing.benefits.scalability.title": "Escalabilidad Rápida",
    "outsourcing.benefits.scalability.description": "Aumente o disminuya su equipo según la demanda del proyecto.",
    "outsourcing.benefits.quality.title": "Calidad Garantizada",
    "outsourcing.benefits.quality.description": "Procesos rigurosos de control de calidad y pruebas.",
    "outsourcing.benefits.focus.title": "Enfoque en el Core Business",
    "outsourcing.benefits.focus.description":
      "Concéntrese en su negocio principal mientras nosotros cuidamos la tecnología.",
    "outsourcing.process.title": "Cómo Funciona",
    "outsourcing.process.subtitle":
      "Nuestro proceso estructurado garantiza la formación del equipo ideal para su proyecto.",
    "outsourcing.process.analysis.title": "Análisis de Necesidades",
    "outsourcing.process.analysis.description":
      "Entendemos sus necesidades específicas y definimos el perfil ideal del equipo.",
    "outsourcing.process.selection.title": "Selección de Talentos",
    "outsourcing.process.selection.description":
      "Reclutamos y seleccionamos los mejores profesionales para componer su equipo.",
    "outsourcing.process.integration.title": "Integración y Gestión",
    "outsourcing.process.integration.description":
      "Integramos el equipo a su proyecto y proporcionamos gestión continua.",
    "outsourcing.cta.title": "Acelere sus Proyectos",
    "outsourcing.cta.subtitle":
      "Forme su equipo de desarrollo ideal y acelere la entrega de sus proyectos con calidad garantizada.",
    "outsourcing.cta.button": "Solicitar Propuesta",
    // System Integration translations
    "systemIntegration.hero.title": "Integración de Sistemas",
    "systemIntegration.hero.subtitle":
      "Conecte todos sus sistemas y aplicaciones para crear un entorno tecnológico unificado y eficiente.",
    "systemIntegration.benefits.title": "Beneficios de la Integración",
    "systemIntegration.benefits.subtitle":
      "Transforme sistemas aislados en una solución unificada que potencia la eficiencia y productividad de su empresa.",
    "systemIntegration.benefits.connectivity.title": "Conectividad Total",
    "systemIntegration.benefits.connectivity.description":
      "Integración completa entre todos sus sistemas y aplicaciones.",
    "systemIntegration.benefits.automation.title": "Automatización",
    "systemIntegration.benefits.automation.description":
      "Automatización de procesos para mayor eficiencia operacional.",
    "systemIntegration.benefits.data.title": "Datos Unificados",
    "systemIntegration.benefits.data.description": "Centralización y sincronización de datos en tiempo real.",
    "systemIntegration.benefits.security.title": "Seguridad",
    "systemIntegration.benefits.security.description": "Protocolos de seguridad avanzados en todas las integraciones.",
    "systemIntegration.solutions.title": "Soluciones de Integración",
    "systemIntegration.solutions.subtitle":
      "Ofrecemos soluciones personalizadas para conectar cualquier tipo de sistema, desde aplicaciones modernas hasta sistemas legados.",
    "systemIntegration.solutions.apis.title": "APIs y Microservicios",
    "systemIntegration.solutions.apis.description": "Desarrollo de APIs robustas para comunicación entre sistemas.",
    "systemIntegration.solutions.cloud.title": "Integración en la Nube",
    "systemIntegration.solutions.cloud.description": "Conexión de sistemas locales con soluciones en la nube.",
    "systemIntegration.solutions.erp.title": "ERP y CRM",
    "systemIntegration.solutions.erp.description": "Integración de sistemas de gestión empresarial y relaciones.",
    "systemIntegration.solutions.legacy.title": "Sistemas Legados",
    "systemIntegration.solutions.legacy.description": "Modernización e integración de sistemas antiguos.",
    "systemIntegration.cta.title": "Unifique sus Sistemas",
    "systemIntegration.cta.subtitle":
      "Elimine silos de información y cree un entorno tecnológico integrado que impulse la eficiencia de su negocio.",
    "systemIntegration.cta.button": "Evaluar Integración",
  },
  fr: {
    ...homeTranslations.fr,
    ...navbarTranslations.fr,
    ...careersTranslations.fr,
    ...contactTranslations.fr,
    ...aboutTranslations.fr,
    ...chatbotTranslations.fr,
    // Agile translations
    "agile.hero.title": "Méthodologie Agile",
    "agile.hero.subtitle":
      "Accélérez vos projets avec des méthodologies agiles éprouvées et livrez des résultats exceptionnels.",
    "agile.benefits.title": "Avantages de la Méthodologie Agile",
    "agile.benefits.subtitle":
      "Découvrez comment la méthodologie agile peut transformer vos projets et accélérer vos résultats.",
    "agile.benefits.delivery.title": "Livraison Rapide",
    "agile.benefits.delivery.description": "Livraisons incrémentales et fréquentes pour une valeur continue au client.",
    "agile.benefits.collaboration.title": "Collaboration",
    "agile.benefits.collaboration.description":
      "Communication efficace entre les équipes et les parties prenantes tout au long du projet.",
    "agile.benefits.flexibility.title": "Flexibilité",
    "agile.benefits.flexibility.description": "Adaptation rapide aux changements et aux nouvelles exigences du marché.",
    "agile.benefits.quality.title": "Qualité",
    "agile.benefits.quality.description": "Focus continu sur la qualité grâce à des tests et révisions constants.",
    "agile.process.title": "Notre Processus Agile",
    "agile.process.subtitle":
      "Nous suivons un processus structuré qui garantit des livraisons de qualité et la satisfaction client.",
    "agile.process.planning.title": "Planification",
    "agile.process.planning.description": "Définition claire des objectifs, portée et priorités du projet.",
    "agile.process.sprints.title": "Sprints",
    "agile.process.sprints.description": "Développement en cycles courts avec des livraisons incrémentales.",
    "agile.process.review.title": "Révision",
    "agile.process.review.description": "Évaluation continue du progrès et ajustements nécessaires.",
    "agile.process.delivery.title": "Livraison",
    "agile.process.delivery.description": "Implémentation et livraison de fonctionnalités testées et approuvées.",
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
    // Outsourcing translations
    "outsourcing.hero.title": "Externalisation IT",
    "outsourcing.hero.subtitle": "Accélérez vos projets avec des équipes spécialisées et dédiées à votre succès.",
    "outsourcing.services.title": "Nos Services",
    "outsourcing.services.subtitle":
      "Nous offrons des solutions complètes d'externalisation pour répondre à tous vos besoins technologiques.",
    "outsourcing.services.dedicated.title": "Équipes Dédiées",
    "outsourcing.services.dedicated.description": "Équipes spécialisées travaillant exclusivement sur votre projet.",
    "outsourcing.services.offshore.title": "Développement Offshore",
    "outsourcing.services.offshore.description": "Accès aux talents mondiaux avec des coûts optimisés.",
    "outsourcing.services.support.title": "Support 24/7",
    "outsourcing.services.support.description":
      "Couverture complète avec des équipes dans différents fuseaux horaires.",
    "outsourcing.services.specialists.title": "Spécialistes Certifiés",
    "outsourcing.services.specialists.description":
      "Professionnels avec des certifications dans les principales technologies.",
    "outsourcing.benefits.title": "Avantages de l'Externalisation",
    "outsourcing.benefits.subtitle":
      "Découvrez comment l'externalisation peut transformer votre opération et accélérer vos résultats.",
    "outsourcing.benefits.costs.title": "Réduction des Coûts",
    "outsourcing.benefits.costs.description": "Économisez jusqu'à 60% sur les coûts opérationnels et de développement.",
    "outsourcing.benefits.scalability.title": "Évolutivité Rapide",
    "outsourcing.benefits.scalability.description": "Augmentez ou diminuez votre équipe selon la demande du projet.",
    "outsourcing.benefits.quality.title": "Qualité Garantie",
    "outsourcing.benefits.quality.description": "Processus rigoureux de contrôle qualité et de tests.",
    "outsourcing.benefits.focus.title": "Focus sur le Core Business",
    "outsourcing.benefits.focus.description":
      "Concentrez-vous sur votre activité principale pendant que nous nous occupons de la technologie.",
    "outsourcing.process.title": "Comment Ça Marche",
    "outsourcing.process.subtitle":
      "Notre processus structuré garantit la formation de l'équipe idéale pour votre projet.",
    "outsourcing.process.analysis.title": "Analyse des Besoins",
    "outsourcing.process.analysis.description":
      "Nous comprenons vos besoins spécifiques et définissons le profil idéal de l'équipe.",
    "outsourcing.process.selection.title": "Sélection des Talents",
    "outsourcing.process.selection.description":
      "Nous recrutons et sélectionnons les meilleurs professionnels pour composer votre équipe.",
    "outsourcing.process.integration.title": "Intégration et Gestion",
    "outsourcing.process.integration.description":
      "Nous intégrons l'équipe à votre projet et fournissons une gestion continue.",
    "outsourcing.cta.title": "Accélérez vos Projets",
    "outsourcing.cta.subtitle":
      "Formez votre équipe de développement idéale et accélérez la livraison de vos projets avec une qualité garantie.",
    "outsourcing.cta.button": "Demander Proposition",
    // System Integration translations
    "systemIntegration.hero.title": "Intégration de Systèmes",
    "systemIntegration.hero.subtitle":
      "Connectez tous vos systèmes et applications pour créer un environnement technologique unifié et efficace.",
    "systemIntegration.benefits.title": "Avantages de l'Intégration",
    "systemIntegration.benefits.subtitle":
      "Transformez les systèmes isolés en une solution unifiée qui améliore l'efficacité et la productivité de votre entreprise.",
    "systemIntegration.benefits.connectivity.title": "Connectivité Totale",
    "systemIntegration.benefits.connectivity.description":
      "Intégration complète entre tous vos systèmes et applications.",
    "systemIntegration.benefits.automation.title": "Automatisation",
    "systemIntegration.benefits.automation.description":
      "Automatisation des processus pour une plus grande efficacité opérationnelle.",
    "systemIntegration.benefits.data.title": "Données Unifiées",
    "systemIntegration.benefits.data.description": "Centralisation et synchronisation des données en temps réel.",
    "systemIntegration.benefits.security.title": "Sécurité",
    "systemIntegration.benefits.security.description": "Protocoles de sécurité avancés dans toutes les intégrations.",
    "systemIntegration.solutions.title": "Solutions d'Intégration",
    "systemIntegration.solutions.subtitle":
      "Nous offrons des solutions personnalisées pour connecter tout type de système, des applications modernes aux systèmes hérités.",
    "systemIntegration.solutions.apis.title": "APIs et Microservices",
    "systemIntegration.solutions.apis.description":
      "Développement d'APIs robustes pour la communication entre systèmes.",
    "systemIntegration.solutions.cloud.title": "Intégration Cloud",
    "systemIntegration.solutions.cloud.description": "Connexion de systèmes locaux avec des solutions cloud.",
    "systemIntegration.solutions.erp.title": "ERP et CRM",
    "systemIntegration.solutions.erp.description": "Intégration de systèmes de gestion d'entreprise et de relations.",
    "systemIntegration.solutions.legacy.title": "Systèmes Hérités",
    "systemIntegration.solutions.legacy.description": "Modernisation et intégration de systèmes anciens.",
    "systemIntegration.cta.title": "Unifiez vos Systèmes",
    "systemIntegration.cta.subtitle":
      "Éliminez les silos d'information et créez un environnement technologique intégré qui stimule l'efficacité de votre entreprise.",
    "systemIntegration.cta.button": "Évaluer l'Intégration",
  },
  de: {
    ...homeTranslations.de,
    ...navbarTranslations.de,
    ...careersTranslations.de,
    ...contactTranslations.de,
    ...aboutTranslations.de,
    ...chatbotTranslations.de,
    // Agile translations
    "agile.hero.title": "Agile Methodik",
    "agile.hero.subtitle":
      "Beschleunigen Sie Ihre Projekte mit bewährten agilen Methoden und liefern Sie außergewöhnliche Ergebnisse.",
    "agile.benefits.title": "Vorteile der Agilen Methodik",
    "agile.benefits.subtitle":
      "Entdecken Sie, wie agile Methodik Ihre Projekte transformieren und Ihre Ergebnisse beschleunigen kann.",
    "agile.benefits.delivery.title": "Schnelle Lieferung",
    "agile.benefits.delivery.description": "Inkrementelle und häufige Lieferungen für kontinuierlichen Kundenwert.",
    "agile.benefits.collaboration.title": "Zusammenarbeit",
    "agile.benefits.collaboration.description":
      "Effektive Kommunikation zwischen Teams und Stakeholdern während des gesamten Projekts.",
    "agile.benefits.flexibility.title": "Flexibilität",
    "agile.benefits.flexibility.description": "Schnelle Anpassung an Änderungen und neue Marktanforderungen.",
    "agile.benefits.quality.title": "Qualität",
    "agile.benefits.quality.description": "Kontinuierlicher Fokus auf Qualität durch ständige Tests und Überprüfungen.",
    "agile.process.title": "Unser Agiler Prozess",
    "agile.process.subtitle":
      "Wir folgen einem strukturierten Prozess, der Qualitätslieferungen und Kundenzufriedenheit gewährleistet.",
    "agile.process.planning.title": "Planung",
    "agile.process.planning.description": "Klare Definition von Projektzielen, Umfang und Prioritäten.",
    "agile.process.sprints.title": "Sprints",
    "agile.process.sprints.description": "Entwicklung in kurzen Zyklen mit inkrementellen Lieferungen.",
    "agile.process.review.title": "Überprüfung",
    "agile.process.review.description": "Kontinuierliche Bewertung des Fortschritts und notwendige Anpassungen.",
    "agile.process.delivery.title": "Lieferung",
    "agile.process.delivery.description": "Implementierung und Lieferung getesteter und genehmigter Funktionalitäten.",
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
    // Outsourcing translations
    "outsourcing.hero.title": "IT-Outsourcing",
    "outsourcing.hero.subtitle":
      "Beschleunigen Sie Ihre Projekte mit spezialisierten Teams, die sich Ihrem Erfolg widmen.",
    "outsourcing.services.title": "Unsere Dienstleistungen",
    "outsourcing.services.subtitle":
      "Wir bieten komplette Outsourcing-Lösungen für alle Ihre technologischen Bedürfnisse.",
    "outsourcing.services.dedicated.title": "Dedizierte Teams",
    "outsourcing.services.dedicated.description": "Spezialisierte Teams, die ausschließlich an Ihrem Projekt arbeiten.",
    "outsourcing.services.offshore.title": "Offshore-Entwicklung",
    "outsourcing.services.offshore.description": "Zugang zu globalen Talenten mit optimierten Kosten.",
    "outsourcing.services.support.title": "24/7 Support",
    "outsourcing.services.support.description": "Vollständige Abdeckung mit Teams in verschiedenen Zeitzonen.",
    "outsourcing.services.specialists.title": "Zertifizierte Spezialisten",
    "outsourcing.services.specialists.description": "Fachkräfte mit Zertifizierungen in führenden Technologien.",
    "outsourcing.benefits.title": "Outsourcing-Vorteile",
    "outsourcing.benefits.subtitle":
      "Entdecken Sie, wie Outsourcing Ihren Betrieb transformieren und Ihre Ergebnisse beschleunigen kann.",
    "outsourcing.benefits.costs.title": "Kostenreduzierung",
    "outsourcing.benefits.costs.description": "Sparen Sie bis zu 60% bei Betriebs- und Entwicklungskosten.",
    "outsourcing.benefits.scalability.title": "Schnelle Skalierbarkeit",
    "outsourcing.benefits.scalability.description": "Vergrößern oder verkleinern Sie Ihr Team je nach Projektbedarf.",
    "outsourcing.benefits.quality.title": "Garantierte Qualität",
    "outsourcing.benefits.quality.description": "Rigorose Qualitätskontroll- und Testprozesse.",
    "outsourcing.benefits.focus.title": "Fokus auf Core Business",
    "outsourcing.benefits.focus.description":
      "Konzentrieren Sie sich auf Ihr Hauptgeschäft, während wir uns um die Technologie kümmern.",
    "outsourcing.process.title": "Wie Es Funktioniert",
    "outsourcing.process.subtitle":
      "Unser strukturierter Prozess gewährleistet die Bildung des idealen Teams für Ihr Projekt.",
    "outsourcing.process.analysis.title": "Bedarfsanalyse",
    "outsourcing.process.analysis.description":
      "Wir verstehen Ihre spezifischen Bedürfnisse und definieren das ideale Teamprofil.",
    "outsourcing.process.selection.title": "Talentauswahl",
    "outsourcing.process.selection.description": "Wir rekrutieren und wählen die besten Fachkräfte für Ihr Team aus.",
    "outsourcing.process.integration.title": "Integration und Management",
    "outsourcing.process.integration.description":
      "Wir integrieren das Team in Ihr Projekt und bieten kontinuierliches Management.",
    "outsourcing.cta.title": "Beschleunigen Sie Ihre Projekte",
    "outsourcing.cta.subtitle":
      "Bilden Sie Ihr ideales Entwicklungsteam und beschleunigen Sie die Lieferung Ihrer Projekte mit garantierter Qualität.",
    "outsourcing.cta.button": "Angebot Anfordern",
    // System Integration translations
    "systemIntegration.hero.title": "Systemintegration",
    "systemIntegration.hero.subtitle":
      "Verbinden Sie alle Ihre Systeme und Anwendungen, um eine einheitliche und effiziente technologische Umgebung zu schaffen.",
    "systemIntegration.benefits.title": "Integrationsvorteile",
    "systemIntegration.benefits.subtitle":
      "Verwandeln Sie isolierte Systeme in eine einheitliche Lösung, die die Effizienz und Produktivität Ihres Unternehmens steigert.",
    "systemIntegration.benefits.connectivity.title": "Totale Konnektivität",
    "systemIntegration.benefits.connectivity.description":
      "Vollständige Integration zwischen allen Ihren Systemen und Anwendungen.",
    "systemIntegration.benefits.automation.title": "Automatisierung",
    "systemIntegration.benefits.automation.description": "Prozessautomatisierung für größere operative Effizienz.",
    "systemIntegration.benefits.data.title": "Vereinheitlichte Daten",
    "systemIntegration.benefits.data.description": "Zentralisierung und Echtzeit-Datensynchronisation.",
    "systemIntegration.benefits.security.title": "Sicherheit",
    "systemIntegration.benefits.security.description": "Erweiterte Sicherheitsprotokolle in allen Integrationen.",
    "systemIntegration.solutions.title": "Integrationslösungen",
    "systemIntegration.solutions.subtitle":
      "Wir bieten maßgeschneiderte Lösungen zur Verbindung jeder Art von System, von modernen Anwendungen bis zu Legacy-Systemen.",
    "systemIntegration.solutions.apis.title": "APIs und Microservices",
    "systemIntegration.solutions.apis.description":
      "Entwicklung robuster APIs für die Kommunikation zwischen Systemen.",
    "systemIntegration.solutions.cloud.title": "Cloud-Integration",
    "systemIntegration.solutions.cloud.description": "Verbindung lokaler Systeme mit Cloud-Lösungen.",
    "systemIntegration.solutions.erp.title": "ERP und CRM",
    "systemIntegration.solutions.erp.description": "Integration von Unternehmensmanagement- und Beziehungssystemen.",
    "systemIntegration.solutions.legacy.title": "Legacy-Systeme",
    "systemIntegration.solutions.legacy.description": "Modernisierung und Integration alter Systeme.",
    "systemIntegration.cta.title": "Vereinheitlichen Sie Ihre Systeme",
    "systemIntegration.cta.subtitle":
      "Beseitigen Sie Informationssilos und schaffen Sie eine integrierte technologische Umgebung, die die Effizienz Ihres Unternehmens vorantreibt.",
    "systemIntegration.cta.button": "Integration Bewerten",
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
