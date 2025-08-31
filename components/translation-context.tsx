"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "pt" | "en" | "es" | "fr" | "de"

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

const translations = {
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.whatWeDo": "O que fazemos",
    "nav.industries": "Indústrias",
    "nav.security": "Segurança",
    "nav.careers": "Carreiras",
    "nav.contact": "Contato",

    // What We Do Dropdown
    "nav.whatWeDo.development": "Desenvolvimento",
    "nav.whatWeDo.agile": "Metodologia Ágil",
    "nav.whatWeDo.outsourcing": "Outsourcing",
    "nav.whatWeDo.systemIntegration": "Integração de Sistemas",
    "nav.whatWeDo.landingPages": "Landing Pages",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.whatWeDo.solarEnergy": "Energia Solar",
    "nav.whatWeDo.railway": "Ferroviário",
    "nav.whatWeDo.road": "Rodoviário",

    // Industries Dropdown
    "nav.industries.healthcare": "Saúde",
    "nav.industries.education": "Educação",
    "nav.industries.financial": "Financeiro",
    "nav.industries.government": "Governo",
    "nav.industries.manufacturing": "Manufatura",
    "nav.industries.retail": "Varejo",

    // Security Dropdown
    "nav.security.cyberSecurity": "Cibersegurança",
    "nav.security.access": "Controle de Acesso",
    "nav.security.backups": "Backups",

    // Engineering Dropdown
    "nav.engineering.title": "Engenharia",
    "nav.engineering.software": "Software",
    "nav.engineering.systems": "Sistemas",
    "nav.engineering.infrastructure": "Infraestrutura",

    // Hero Section
    "hero.title": "Transformando Ideias em Soluções Digitais",
    "hero.subtitle":
      "Desenvolvemos software personalizado e soluções tecnológicas inovadoras para impulsionar o seu negócio",
    "hero.cta": "Começar Projeto",
    "hero.learnMore": "Saiba Mais",

    // Services Section
    "services.title": "Nossos Serviços",
    "services.subtitle": "Oferecemos soluções completas em tecnologia",
    "services.development.title": "Desenvolvimento",
    "services.development.description": "Criamos aplicações web e mobile personalizadas",
    "services.consulting.title": "Consultoria",
    "services.consulting.description": "Orientação estratégica em tecnologia",
    "services.integration.title": "Integração",
    "services.integration.description": "Conectamos seus sistemas e processos",
    "services.support.title": "Suporte",
    "services.support.description": "Manutenção e suporte técnico contínuo",

    // Industries Section
    "industries.title": "Indústrias que Atendemos",
    "industries.subtitle": "Experiência especializada em diversos setores",
    "industries.healthcare.title": "Saúde",
    "industries.healthcare.description": "Soluções digitais para hospitais e clínicas",
    "industries.education.title": "Educação",
    "industries.education.description": "Plataformas educacionais e sistemas de gestão",
    "industries.finance.title": "Financeiro",
    "industries.finance.description": "Sistemas bancários e de pagamento seguros",
    "industries.government.title": "Governo",
    "industries.government.description": "Soluções para administração pública",
    "industries.manufacturing.title": "Manufatura",
    "industries.manufacturing.description": "Automação e controle de processos industriais",
    "industries.retail.title": "Varejo",
    "industries.retail.description": "E-commerce e sistemas de gestão comercial",

    // Testimonials Section
    "testimonials.title": "O que Nossos Clientes Dizem",
    "testimonials.subtitle": "Depoimentos de quem confia em nosso trabalho",

    // Insights Section
    "insights.title": "Insights e Inovação",
    "insights.subtitle": "Descubra as últimas tendências em tecnologia",
    "insights.ai.title": "Inteligência Artificial",
    "insights.ai.description": "Como a IA está transformando os negócios modernos",
    "insights.cloud.title": "Computação em Nuvem",
    "insights.cloud.description": "Benefícios da migração para a nuvem",
    "insights.security.title": "Cibersegurança",
    "insights.security.description": "Protegendo dados em um mundo digital",
    "insights.mobile.title": "Desenvolvimento Mobile",
    "insights.mobile.description": "Tendências em aplicativos móveis",

    // Projects Section
    "projects.title": "Nossos Projetos",
    "projects.subtitle": "Conheça alguns dos nossos trabalhos mais recentes",
    "projects.viewAll": "Ver Todos os Projetos",

    // Careers Section
    "careers.title": "Junte-se à Nossa Equipe",
    "careers.subtitle": "Faça parte de uma empresa inovadora",
    "careers.cta": "Ver Vagas",

    // Footer
    "footer.company": "Empresa",
    "footer.services": "Serviços",
    "footer.industries": "Indústrias",
    "footer.contact": "Contato",
    "footer.followUs": "Siga-nos",
    "footer.rights": "Todos os direitos reservados.",

    // Contact Page
    "contact.title": "Entre em Contato",
    "contact.subtitle": "Vamos conversar sobre seu próximo projeto",
    "contact.form.name": "Nome",
    "contact.form.email": "Email",
    "contact.form.company": "Empresa",
    "contact.form.message": "Mensagem",
    "contact.form.send": "Enviar Mensagem",
    "contact.info.address": "Endereço",
    "contact.info.phone": "Telefone",
    "contact.info.email": "Email",

    // About Page
    "about.title": "Sobre a VianaHub",
    "about.subtitle": "Conheça nossa história e valores",
    "about.mission.title": "Nossa Missão",
    "about.mission.description": "Transformar ideias em soluções digitais inovadoras",
    "about.vision.title": "Nossa Visão",
    "about.vision.description": "Ser referência em desenvolvimento de software",
    "about.values.title": "Nossos Valores",
    "about.values.description": "Inovação, qualidade e compromisso com o cliente",

    // Agile Page
    "agile.hero.title": "Metodologia Ágil",
    "agile.hero.subtitle": "Desenvolvimento eficiente e colaborativo",
    "agile.benefits.title": "Benefícios da Metodologia Ágil",
    "agile.benefits.subtitle": "Por que escolher o desenvolvimento ágil",
    "agile.benefits.delivery.title": "Entrega Rápida",
    "agile.benefits.delivery.description": "Entregas frequentes e incrementais de valor",
    "agile.benefits.collaboration.title": "Colaboração",
    "agile.benefits.collaboration.description": "Trabalho em equipe e comunicação constante",
    "agile.benefits.flexibility.title": "Flexibilidade",
    "agile.benefits.flexibility.description": "Adaptação rápida a mudanças e feedback",
    "agile.benefits.quality.title": "Qualidade",
    "agile.benefits.quality.description": "Foco na qualidade através de testes contínuos",
    "agile.parallax.title": "Transforme Sua Visão em Realidade",
    "agile.parallax.subtitle": "Com metodologia ágil, seu projeto ganha vida de forma rápida e eficiente",
    "agile.process.title": "Nosso Processo Ágil",
    "agile.process.subtitle": "Como trabalhamos com metodologia ágil",
    "agile.process.planning.title": "Planejamento",
    "agile.process.planning.description": "Definição de objetivos e prioridades do projeto",
    "agile.process.sprints.title": "Sprints",
    "agile.process.sprints.description": "Desenvolvimento em ciclos curtos e focados",
    "agile.process.review.title": "Revisão",
    "agile.process.review.description": "Avaliação contínua e ajustes necessários",
    "agile.process.delivery.title": "Entrega",
    "agile.process.delivery.description": "Entrega de valor incremental ao cliente",

    // Common
    "common.readMore": "Leia Mais",
    "common.learnMore": "Saiba Mais",
    "common.getStarted": "Começar",
    "common.contactUs": "Fale Conosco",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.whatWeDo": "What We Do",
    "nav.industries": "Industries",
    "nav.security": "Security",
    "nav.careers": "Careers",
    "nav.contact": "Contact",

    // What We Do Dropdown
    "nav.whatWeDo.development": "Development",
    "nav.whatWeDo.agile": "Agile Methodology",
    "nav.whatWeDo.outsourcing": "Outsourcing",
    "nav.whatWeDo.systemIntegration": "System Integration",
    "nav.whatWeDo.landingPages": "Landing Pages",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.whatWeDo.solarEnergy": "Solar Energy",
    "nav.whatWeDo.railway": "Railway",
    "nav.whatWeDo.road": "Road",

    // Industries Dropdown
    "nav.industries.healthcare": "Healthcare",
    "nav.industries.education": "Education",
    "nav.industries.financial": "Financial",
    "nav.industries.government": "Government",
    "nav.industries.manufacturing": "Manufacturing",
    "nav.industries.retail": "Retail",

    // Security Dropdown
    "nav.security.cyberSecurity": "Cybersecurity",
    "nav.security.access": "Access Control",
    "nav.security.backups": "Backups",

    // Engineering Dropdown
    "nav.engineering.title": "Engineering",
    "nav.engineering.software": "Software",
    "nav.engineering.systems": "Systems",
    "nav.engineering.infrastructure": "Infrastructure",

    // Hero Section
    "hero.title": "Transforming Ideas into Digital Solutions",
    "hero.subtitle": "We develop custom software and innovative technology solutions to boost your business",
    "hero.cta": "Start Project",
    "hero.learnMore": "Learn More",

    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "We offer complete technology solutions",
    "services.development.title": "Development",
    "services.development.description": "We create custom web and mobile applications",
    "services.consulting.title": "Consulting",
    "services.consulting.description": "Strategic guidance in technology",
    "services.integration.title": "Integration",
    "services.integration.description": "We connect your systems and processes",
    "services.support.title": "Support",
    "services.support.description": "Continuous maintenance and technical support",

    // Industries Section
    "industries.title": "Industries We Serve",
    "industries.subtitle": "Specialized experience across various sectors",
    "industries.healthcare.title": "Healthcare",
    "industries.healthcare.description": "Digital solutions for hospitals and clinics",
    "industries.education.title": "Education",
    "industries.education.description": "Educational platforms and management systems",
    "industries.finance.title": "Finance",
    "industries.finance.description": "Secure banking and payment systems",
    "industries.government.title": "Government",
    "industries.government.description": "Solutions for public administration",
    "industries.manufacturing.title": "Manufacturing",
    "industries.manufacturing.description": "Industrial process automation and control",
    "industries.retail.title": "Retail",
    "industries.retail.description": "E-commerce and commercial management systems",

    // Testimonials Section
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Testimonials from those who trust our work",

    // Insights Section
    "insights.title": "Insights and Innovation",
    "insights.subtitle": "Discover the latest trends in technology",
    "insights.ai.title": "Artificial Intelligence",
    "insights.ai.description": "How AI is transforming modern business",
    "insights.cloud.title": "Cloud Computing",
    "insights.cloud.description": "Benefits of migrating to the cloud",
    "insights.security.title": "Cybersecurity",
    "insights.security.description": "Protecting data in a digital world",
    "insights.mobile.title": "Mobile Development",
    "insights.mobile.description": "Trends in mobile applications",

    // Projects Section
    "projects.title": "Our Projects",
    "projects.subtitle": "Learn about some of our most recent work",
    "projects.viewAll": "View All Projects",

    // Careers Section
    "careers.title": "Join Our Team",
    "careers.subtitle": "Be part of an innovative company",
    "careers.cta": "View Jobs",

    // Footer
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.industries": "Industries",
    "footer.contact": "Contact",
    "footer.followUs": "Follow Us",
    "footer.rights": "All rights reserved.",

    // Contact Page
    "contact.title": "Get in Touch",
    "contact.subtitle": "Let's talk about your next project",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.company": "Company",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.info.address": "Address",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",

    // About Page
    "about.title": "About VianaHub",
    "about.subtitle": "Learn about our history and values",
    "about.mission.title": "Our Mission",
    "about.mission.description": "Transform ideas into innovative digital solutions",
    "about.vision.title": "Our Vision",
    "about.vision.description": "Be a reference in software development",
    "about.values.title": "Our Values",
    "about.values.description": "Innovation, quality and commitment to the client",

    // Agile Page
    "agile.hero.title": "Agile Methodology",
    "agile.hero.subtitle": "Efficient and collaborative development",
    "agile.benefits.title": "Benefits of Agile Methodology",
    "agile.benefits.subtitle": "Why choose agile development",
    "agile.benefits.delivery.title": "Fast Delivery",
    "agile.benefits.delivery.description": "Frequent and incremental value deliveries",
    "agile.benefits.collaboration.title": "Collaboration",
    "agile.benefits.collaboration.description": "Teamwork and constant communication",
    "agile.benefits.flexibility.title": "Flexibility",
    "agile.benefits.flexibility.description": "Quick adaptation to changes and feedback",
    "agile.benefits.quality.title": "Quality",
    "agile.benefits.quality.description": "Focus on quality through continuous testing",
    "agile.parallax.title": "Transform Your Vision into Reality",
    "agile.parallax.subtitle": "With agile methodology, your project comes to life quickly and efficiently",
    "agile.process.title": "Our Agile Process",
    "agile.process.subtitle": "How we work with agile methodology",
    "agile.process.planning.title": "Planning",
    "agile.process.planning.description": "Definition of project objectives and priorities",
    "agile.process.sprints.title": "Sprints",
    "agile.process.sprints.description": "Development in short and focused cycles",
    "agile.process.review.title": "Review",
    "agile.process.review.description": "Continuous evaluation and necessary adjustments",
    "agile.process.delivery.title": "Delivery",
    "agile.process.delivery.description": "Incremental value delivery to the client",

    // Common
    "common.readMore": "Read More",
    "common.learnMore": "Learn More",
    "common.getStarted": "Get Started",
    "common.contactUs": "Contact Us",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.whatWeDo": "Qué Hacemos",
    "nav.industries": "Industrias",
    "nav.security": "Seguridad",
    "nav.careers": "Carreras",
    "nav.contact": "Contacto",

    // What We Do Dropdown
    "nav.whatWeDo.development": "Desarrollo",
    "nav.whatWeDo.agile": "Metodología Ágil",
    "nav.whatWeDo.outsourcing": "Outsourcing",
    "nav.whatWeDo.systemIntegration": "Integración de Sistemas",
    "nav.whatWeDo.landingPages": "Landing Pages",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.whatWeDo.solarEnergy": "Energía Solar",
    "nav.whatWeDo.railway": "Ferroviario",
    "nav.whatWeDo.road": "Carreteras",

    // Industries Dropdown
    "nav.industries.healthcare": "Salud",
    "nav.industries.education": "Educación",
    "nav.industries.financial": "Financiero",
    "nav.industries.government": "Gobierno",
    "nav.industries.manufacturing": "Manufactura",
    "nav.industries.retail": "Retail",

    // Security Dropdown
    "nav.security.cyberSecurity": "Ciberseguridad",
    "nav.security.access": "Control de Acceso",
    "nav.security.backups": "Respaldos",

    // Engineering Dropdown
    "nav.engineering.title": "Ingeniería",
    "nav.engineering.software": "Software",
    "nav.engineering.systems": "Sistemas",
    "nav.engineering.infrastructure": "Infraestructura",

    // Hero Section
    "hero.title": "Transformando Ideas en Soluciones Digitales",
    "hero.subtitle":
      "Desarrollamos software personalizado y soluciones tecnológicas innovadoras para impulsar tu negocio",
    "hero.cta": "Iniciar Proyecto",
    "hero.learnMore": "Saber Más",

    // Services Section
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Ofrecemos soluciones tecnológicas completas",
    "services.development.title": "Desarrollo",
    "services.development.description": "Creamos aplicaciones web y móviles personalizadas",
    "services.consulting.title": "Consultoría",
    "services.consulting.description": "Orientación estratégica en tecnología",
    "services.integration.title": "Integración",
    "services.integration.description": "Conectamos tus sistemas y procesos",
    "services.support.title": "Soporte",
    "services.support.description": "Mantenimiento y soporte técnico continuo",

    // Industries Section
    "industries.title": "Industrias que Atendemos",
    "industries.subtitle": "Experiencia especializada en diversos sectores",
    "industries.healthcare.title": "Salud",
    "industries.healthcare.description": "Soluciones digitales para hospitales y clínicas",
    "industries.education.title": "Educación",
    "industries.education.description": "Plataformas educativas y sistemas de gestión",
    "industries.finance.title": "Financiero",
    "industries.finance.description": "Sistemas bancarios y de pago seguros",
    "industries.government.title": "Gobierno",
    "industries.government.description": "Soluciones para administración pública",
    "industries.manufacturing.title": "Manufactura",
    "industries.manufacturing.description": "Automatización y control de procesos industriales",
    "industries.retail.title": "Retail",
    "industries.retail.description": "E-commerce y sistemas de gestión comercial",

    // Testimonials Section
    "testimonials.title": "Lo que Dicen Nuestros Clientes",
    "testimonials.subtitle": "Testimonios de quienes confían en nuestro trabajo",

    // Insights Section
    "insights.title": "Insights e Innovación",
    "insights.subtitle": "Descubre las últimas tendencias en tecnología",
    "insights.ai.title": "Inteligencia Artificial",
    "insights.ai.description": "Cómo la IA está transformando los negocios modernos",
    "insights.cloud.title": "Computación en la Nube",
    "insights.cloud.description": "Beneficios de migrar a la nube",
    "insights.security.title": "Ciberseguridad",
    "insights.security.description": "Protegiendo datos en un mundo digital",
    "insights.mobile.title": "Desarrollo Móvil",
    "insights.mobile.description": "Tendencias en aplicaciones móviles",

    // Projects Section
    "projects.title": "Nuestros Proyectos",
    "projects.subtitle": "Conoce algunos de nuestros trabajos más recientes",
    "projects.viewAll": "Ver Todos los Proyectos",

    // Careers Section
    "careers.title": "Únete a Nuestro Equipo",
    "careers.subtitle": "Sé parte de una empresa innovadora",
    "careers.cta": "Ver Empleos",

    // Footer
    "footer.company": "Empresa",
    "footer.services": "Servicios",
    "footer.industries": "Industrias",
    "footer.contact": "Contacto",
    "footer.followUs": "Síguenos",
    "footer.rights": "Todos los derechos reservados.",

    // Contact Page
    "contact.title": "Ponte en Contacto",
    "contact.subtitle": "Hablemos sobre tu próximo proyecto",
    "contact.form.name": "Nombre",
    "contact.form.email": "Email",
    "contact.form.company": "Empresa",
    "contact.form.message": "Mensaje",
    "contact.form.send": "Enviar Mensaje",
    "contact.info.address": "Dirección",
    "contact.info.phone": "Teléfono",
    "contact.info.email": "Email",

    // About Page
    "about.title": "Acerca de VianaHub",
    "about.subtitle": "Conoce nuestra historia y valores",
    "about.mission.title": "Nuestra Misión",
    "about.mission.description": "Transformar ideas en soluciones digitales innovadoras",
    "about.vision.title": "Nuestra Visión",
    "about.vision.description": "Ser referencia en desarrollo de software",
    "about.values.title": "Nuestros Valores",
    "about.values.description": "Innovación, calidad y compromiso con el cliente",

    // Agile Page
    "agile.hero.title": "Metodología Ágil",
    "agile.hero.subtitle": "Desarrollo eficiente y colaborativo",
    "agile.benefits.title": "Beneficios de la Metodología Ágil",
    "agile.benefits.subtitle": "Por qué elegir el desarrollo ágil",
    "agile.benefits.delivery.title": "Entrega Rápida",
    "agile.benefits.delivery.description": "Entregas frecuentes e incrementales de valor",
    "agile.benefits.collaboration.title": "Colaboración",
    "agile.benefits.collaboration.description": "Trabajo en equipo y comunicación constante",
    "agile.benefits.flexibility.title": "Flexibilidad",
    "agile.benefits.flexibility.description": "Adaptación rápida a cambios y feedback",
    "agile.benefits.quality.title": "Calidad",
    "agile.benefits.quality.description": "Enfoque en la calidad a través de pruebas continuas",
    "agile.parallax.title": "Transforma Tu Visión en Realidad",
    "agile.parallax.subtitle": "Con metodología ágil, tu proyecto cobra vida de forma rápida y eficiente",
    "agile.process.title": "Nuestro Proceso Ágil",
    "agile.process.subtitle": "Cómo trabajamos con metodología ágil",
    "agile.process.planning.title": "Planificación",
    "agile.process.planning.description": "Definición de objetivos y prioridades del proyecto",
    "agile.process.sprints.title": "Sprints",
    "agile.process.sprints.description": "Desarrollo en ciclos cortos y enfocados",
    "agile.process.review.title": "Revisión",
    "agile.process.review.description": "Evaluación continua y ajustes necesarios",
    "agile.process.delivery.title": "Entrega",
    "agile.process.delivery.description": "Entrega de valor incremental al cliente",

    // Common
    "common.readMore": "Leer Más",
    "common.learnMore": "Saber Más",
    "common.getStarted": "Comenzar",
    "common.contactUs": "Contáctanos",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.whatWeDo": "Ce Que Nous Faisons",
    "nav.industries": "Industries",
    "nav.security": "Sécurité",
    "nav.careers": "Carrières",
    "nav.contact": "Contact",

    // What We Do Dropdown
    "nav.whatWeDo.development": "Développement",
    "nav.whatWeDo.agile": "Méthodologie Agile",
    "nav.whatWeDo.outsourcing": "Externalisation",
    "nav.whatWeDo.systemIntegration": "Intégration de Systèmes",
    "nav.whatWeDo.landingPages": "Pages d'Atterrissage",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.whatWeDo.solarEnergy": "Énergie Solaire",
    "nav.whatWeDo.railway": "Ferroviaire",
    "nav.whatWeDo.road": "Routier",

    // Industries Dropdown
    "nav.industries.healthcare": "Santé",
    "nav.industries.education": "Éducation",
    "nav.industries.financial": "Financier",
    "nav.industries.government": "Gouvernement",
    "nav.industries.manufacturing": "Fabrication",
    "nav.industries.retail": "Commerce de Détail",

    // Security Dropdown
    "nav.security.cyberSecurity": "Cybersécurité",
    "nav.security.access": "Contrôle d'Accès",
    "nav.security.backups": "Sauvegardes",

    // Engineering Dropdown
    "nav.engineering.title": "Ingénierie",
    "nav.engineering.software": "Logiciel",
    "nav.engineering.systems": "Systèmes",
    "nav.engineering.infrastructure": "Infrastructure",

    // Hero Section
    "hero.title": "Transformer les Idées en Solutions Numériques",
    "hero.subtitle":
      "Nous développons des logiciels personnalisés et des solutions technologiques innovantes pour booster votre entreprise",
    "hero.cta": "Démarrer le Projet",
    "hero.learnMore": "En Savoir Plus",

    // Services Section
    "services.title": "Nos Services",
    "services.subtitle": "Nous offrons des solutions technologiques complètes",
    "services.development.title": "Développement",
    "services.development.description": "Nous créons des applications web et mobiles personnalisées",
    "services.consulting.title": "Conseil",
    "services.consulting.description": "Orientation stratégique en technologie",
    "services.integration.title": "Intégration",
    "services.integration.description": "Nous connectons vos systèmes et processus",
    "services.support.title": "Support",
    "services.support.description": "Maintenance et support technique continu",

    // Industries Section
    "industries.title": "Industries que Nous Servons",
    "industries.subtitle": "Expérience spécialisée dans divers secteurs",
    "industries.healthcare.title": "Santé",
    "industries.healthcare.description": "Solutions numériques pour hôpitaux et cliniques",
    "industries.education.title": "Éducation",
    "industries.education.description": "Plateformes éducatives et systèmes de gestion",
    "industries.finance.title": "Finance",
    "industries.finance.description": "Systèmes bancaires et de paiement sécurisés",
    "industries.government.title": "Gouvernement",
    "industries.government.description": "Solutions pour l'administration publique",
    "industries.manufacturing.title": "Fabrication",
    "industries.manufacturing.description": "Automatisation et contrôle des processus industriels",
    "industries.retail.title": "Commerce de Détail",
    "industries.retail.description": "E-commerce et systèmes de gestion commerciale",

    // Testimonials Section
    "testimonials.title": "Ce Que Disent Nos Clients",
    "testimonials.subtitle": "Témoignages de ceux qui font confiance à notre travail",

    // Insights Section
    "insights.title": "Insights et Innovation",
    "insights.subtitle": "Découvrez les dernières tendances en technologie",
    "insights.ai.title": "Intelligence Artificielle",
    "insights.ai.description": "Comment l'IA transforme les entreprises modernes",
    "insights.cloud.title": "Informatique en Nuage",
    "insights.cloud.description": "Avantages de la migration vers le cloud",
    "insights.security.title": "Cybersécurité",
    "insights.security.description": "Protéger les données dans un monde numérique",
    "insights.mobile.title": "Développement Mobile",
    "insights.mobile.description": "Tendances dans les applications mobiles",

    // Projects Section
    "projects.title": "Nos Projets",
    "projects.subtitle": "Découvrez certains de nos travaux les plus récents",
    "projects.viewAll": "Voir Tous les Projets",

    // Careers Section
    "careers.title": "Rejoignez Notre Équipe",
    "careers.subtitle": "Faites partie d'une entreprise innovante",
    "careers.cta": "Voir les Emplois",

    // Footer
    "footer.company": "Entreprise",
    "footer.services": "Services",
    "footer.industries": "Industries",
    "footer.contact": "Contact",
    "footer.followUs": "Suivez-nous",
    "footer.rights": "Tous droits réservés.",

    // Contact Page
    "contact.title": "Entrer en Contact",
    "contact.subtitle": "Parlons de votre prochain projet",
    "contact.form.name": "Nom",
    "contact.form.email": "Email",
    "contact.form.company": "Entreprise",
    "contact.form.message": "Message",
    "contact.form.send": "Envoyer le Message",
    "contact.info.address": "Adresse",
    "contact.info.phone": "Téléphone",
    "contact.info.email": "Email",

    // About Page
    "about.title": "À Propos de VianaHub",
    "about.subtitle": "Découvrez notre histoire et nos valeurs",
    "about.mission.title": "Notre Mission",
    "about.mission.description": "Transformer les idées en solutions numériques innovantes",
    "about.vision.title": "Notre Vision",
    "about.vision.description": "Être une référence en développement de logiciels",
    "about.values.title": "Nos Valeurs",
    "about.values.description": "Innovation, qualité et engagement envers le client",

    // Agile Page
    "agile.hero.title": "Méthodologie Agile",
    "agile.hero.subtitle": "Développement efficace et collaboratif",
    "agile.benefits.title": "Avantages de la Méthodologie Agile",
    "agile.benefits.subtitle": "Pourquoi choisir le développement agile",
    "agile.benefits.delivery.title": "Livraison Rapide",
    "agile.benefits.delivery.description": "Livraisons fréquentes et incrémentales de valeur",
    "agile.benefits.collaboration.title": "Collaboration",
    "agile.benefits.collaboration.description": "Travail d'équipe et communication constante",
    "agile.benefits.flexibility.title": "Flexibilité",
    "agile.benefits.flexibility.description": "Adaptation rapide aux changements et feedback",
    "agile.benefits.quality.title": "Qualité",
    "agile.benefits.quality.description": "Focus sur la qualité grâce aux tests continus",
    "agile.parallax.title": "Transformez Votre Vision en Réalité",
    "agile.parallax.subtitle": "Avec la méthodologie agile, votre projet prend vie rapidement et efficacement",
    "agile.process.title": "Notre Processus Agile",
    "agile.process.subtitle": "Comment nous travaillons avec la méthodologie agile",
    "agile.process.planning.title": "Planification",
    "agile.process.planning.description": "Définition des objectifs et priorités du projet",
    "agile.process.sprints.title": "Sprints",
    "agile.process.sprints.description": "Développement en cycles courts et focalisés",
    "agile.process.review.title": "Révision",
    "agile.process.review.description": "Évaluation continue et ajustements nécessaires",
    "agile.process.delivery.title": "Livraison",
    "agile.process.delivery.description": "Livraison de valeur incrémentale au client",

    // Common
    "common.readMore": "Lire Plus",
    "common.learnMore": "En Savoir Plus",
    "common.getStarted": "Commencer",
    "common.contactUs": "Contactez-nous",
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.about": "Über Uns",
    "nav.whatWeDo": "Was Wir Tun",
    "nav.industries": "Branchen",
    "nav.security": "Sicherheit",
    "nav.careers": "Karriere",
    "nav.contact": "Kontakt",

    // What We Do Dropdown
    "nav.whatWeDo.development": "Entwicklung",
    "nav.whatWeDo.agile": "Agile Methodik",
    "nav.whatWeDo.outsourcing": "Outsourcing",
    "nav.whatWeDo.systemIntegration": "Systemintegration",
    "nav.whatWeDo.landingPages": "Landing Pages",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.whatWeDo.solarEnergy": "Solarenergie",
    "nav.whatWeDo.railway": "Eisenbahn",
    "nav.whatWeDo.road": "Straße",

    // Industries Dropdown
    "nav.industries.healthcare": "Gesundheitswesen",
    "nav.industries.education": "Bildung",
    "nav.industries.financial": "Finanzwesen",
    "nav.industries.government": "Regierung",
    "nav.industries.manufacturing": "Fertigung",
    "nav.industries.retail": "Einzelhandel",

    // Security Dropdown
    "nav.security.cyberSecurity": "Cybersicherheit",
    "nav.security.access": "Zugriffskontrolle",
    "nav.security.backups": "Backups",

    // Engineering Dropdown
    "nav.engineering.title": "Ingenieurwesen",
    "nav.engineering.software": "Software",
    "nav.engineering.systems": "Systeme",
    "nav.engineering.infrastructure": "Infrastruktur",

    // Hero Section
    "hero.title": "Ideen in Digitale Lösungen Verwandeln",
    "hero.subtitle":
      "Wir entwickeln maßgeschneiderte Software und innovative Technologielösungen, um Ihr Unternehmen voranzubringen",
    "hero.cta": "Projekt Starten",
    "hero.learnMore": "Mehr Erfahren",

    // Services Section
    "services.title": "Unsere Dienstleistungen",
    "services.subtitle": "Wir bieten komplette Technologielösungen",
    "services.development.title": "Entwicklung",
    "services.development.description": "Wir erstellen maßgeschneiderte Web- und Mobile-Anwendungen",
    "services.consulting.title": "Beratung",
    "services.consulting.description": "Strategische Beratung in der Technologie",
    "services.integration.title": "Integration",
    "services.integration.description": "Wir verbinden Ihre Systeme und Prozesse",
    "services.support.title": "Support",
    "services.support.description": "Kontinuierliche Wartung und technischer Support",

    // Industries Section
    "industries.title": "Branchen, die Wir Bedienen",
    "industries.subtitle": "Spezialisierte Erfahrung in verschiedenen Sektoren",
    "industries.healthcare.title": "Gesundheitswesen",
    "industries.healthcare.description": "Digitale Lösungen für Krankenhäuser und Kliniken",
    "industries.education.title": "Bildung",
    "industries.education.description": "Bildungsplattformen und Managementsysteme",
    "industries.finance.title": "Finanzwesen",
    "industries.finance.description": "Sichere Bank- und Zahlungssysteme",
    "industries.government.title": "Regierung",
    "industries.government.description": "Lösungen für die öffentliche Verwaltung",
    "industries.manufacturing.title": "Fertigung",
    "industries.manufacturing.description": "Automatisierung und Kontrolle industrieller Prozesse",
    "industries.retail.title": "Einzelhandel",
    "industries.retail.description": "E-Commerce und kommerzielle Managementsysteme",

    // Testimonials Section
    "testimonials.title": "Was Unsere Kunden Sagen",
    "testimonials.subtitle": "Testimonials von denen, die unserer Arbeit vertrauen",

    // Insights Section
    "insights.title": "Einblicke und Innovation",
    "insights.subtitle": "Entdecken Sie die neuesten Trends in der Technologie",
    "insights.ai.title": "Künstliche Intelligenz",
    "insights.ai.description": "Wie KI moderne Unternehmen transformiert",
    "insights.cloud.title": "Cloud Computing",
    "insights.cloud.description": "Vorteile der Migration in die Cloud",
    "insights.security.title": "Cybersicherheit",
    "insights.security.description": "Datenschutz in einer digitalen Welt",
    "insights.mobile.title": "Mobile Entwicklung",
    "insights.mobile.description": "Trends in mobilen Anwendungen",

    // Projects Section
    "projects.title": "Unsere Projekte",
    "projects.subtitle": "Erfahren Sie mehr über einige unserer neuesten Arbeiten",
    "projects.viewAll": "Alle Projekte Anzeigen",

    // Careers Section
    "careers.title": "Treten Sie Unserem Team Bei",
    "careers.subtitle": "Werden Sie Teil eines innovativen Unternehmens",
    "careers.cta": "Jobs Anzeigen",

    // Footer
    "footer.company": "Unternehmen",
    "footer.services": "Dienstleistungen",
    "footer.industries": "Branchen",
    "footer.contact": "Kontakt",
    "footer.followUs": "Folgen Sie uns",
    "footer.rights": "Alle Rechte vorbehalten.",

    // Contact Page
    "contact.title": "Kontakt Aufnehmen",
    "contact.subtitle": "Lassen Sie uns über Ihr nächstes Projekt sprechen",
    "contact.form.name": "Name",
    "contact.form.email": "E-Mail",
    "contact.form.company": "Unternehmen",
    "contact.form.message": "Nachricht",
    "contact.form.send": "Nachricht Senden",
    "contact.info.address": "Adresse",
    "contact.info.phone": "Telefon",
    "contact.info.email": "E-Mail",

    // About Page
    "about.title": "Über VianaHub",
    "about.subtitle": "Erfahren Sie mehr über unsere Geschichte und Werte",
    "about.mission.title": "Unsere Mission",
    "about.mission.description": "Ideen in innovative digitale Lösungen verwandeln",
    "about.vision.title": "Unsere Vision",
    "about.vision.description": "Eine Referenz in der Softwareentwicklung sein",
    "about.values.title": "Unsere Werte",
    "about.values.description": "Innovation, Qualität und Engagement für den Kunden",

    // Agile Page
    "agile.hero.title": "Agile Methodik",
    "agile.hero.subtitle": "Effiziente und kollaborative Entwicklung",
    "agile.benefits.title": "Vorteile der Agilen Methodik",
    "agile.benefits.subtitle": "Warum agile Entwicklung wählen",
    "agile.benefits.delivery.title": "Schnelle Lieferung",
    "agile.benefits.delivery.description": "Häufige und inkrementelle Wertlieferungen",
    "agile.benefits.collaboration.title": "Zusammenarbeit",
    "agile.benefits.collaboration.description": "Teamarbeit und konstante Kommunikation",
    "agile.benefits.flexibility.title": "Flexibilität",
    "agile.benefits.flexibility.description": "Schnelle Anpassung an Änderungen und Feedback",
    "agile.benefits.quality.title": "Qualität",
    "agile.benefits.quality.description": "Fokus auf Qualität durch kontinuierliche Tests",
    "agile.parallax.title": "Verwandeln Sie Ihre Vision in Realität",
    "agile.parallax.subtitle": "Mit agiler Methodik wird Ihr Projekt schnell und effizient zum Leben erweckt",
    "agile.process.title": "Unser Agiler Prozess",
    "agile.process.subtitle": "Wie wir mit agiler Methodik arbeiten",
    "agile.process.planning.title": "Planung",
    "agile.process.planning.description": "Definition von Projektzielen und Prioritäten",
    "agile.process.sprints.title": "Sprints",
    "agile.process.sprints.description": "Entwicklung in kurzen und fokussierten Zyklen",
    "agile.process.review.title": "Überprüfung",
    "agile.process.review.description": "Kontinuierliche Bewertung und notwendige Anpassungen",
    "agile.process.delivery.title": "Lieferung",
    "agile.process.delivery.description": "Inkrementelle Wertlieferung an den Kunden",

    // Common
    "common.readMore": "Mehr Lesen",
    "common.learnMore": "Mehr Erfahren",
    "common.getStarted": "Loslegen",
    "common.contactUs": "Kontaktieren Sie uns",
  },
}

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
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
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
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
