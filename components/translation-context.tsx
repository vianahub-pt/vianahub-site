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
    "nav.whatWeDo.systemIntegration": "Integração de Sistemas",
    "nav.whatWeDo.outsourcing": "Terceirização",
    "nav.whatWeDo.landingPages": "Landing Pages",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.whatWeDo.agile": "Metodologia Ágil",
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

    // Hero Section
    "hero.title": "Transformando Ideias em Soluções Digitais",
    "hero.subtitle":
      "Desenvolvemos software personalizado e soluções tecnológicas inovadoras para impulsionar o seu negócio",
    "hero.cta": "Começar Projeto",
    "hero.learnMore": "Saiba Mais",

    // Services Section
    "services.title": "Nossos Serviços",
    "services.subtitle": "Oferecemos soluções completas em tecnologia para transformar seu negócio",
    "services.development.title": "Desenvolvimento de Software",
    "services.development.description":
      "Criamos aplicações web e mobile personalizadas usando as mais modernas tecnologias",
    "services.integration.title": "Integração de Sistemas",
    "services.integration.description":
      "Conectamos seus sistemas existentes para otimizar processos e melhorar a eficiência",
    "services.outsourcing.title": "Terceirização de TI",
    "services.outsourcing.description": "Equipe especializada para gerenciar e manter sua infraestrutura tecnológica",
    "services.consulting.title": "Consultoria Tecnológica",
    "services.consulting.description": "Orientação estratégica para escolher as melhores soluções para seu negócio",

    // Industries Section
    "industries.title": "Indústrias que Atendemos",
    "industries.subtitle": "Experiência especializada em diversos setores",
    "industries.healthcare.title": "Saúde",
    "industries.healthcare.description": "Sistemas hospitalares e telemedicina",
    "industries.education.title": "Educação",
    "industries.education.description": "Plataformas de ensino e gestão acadêmica",
    "industries.financial.title": "Financeiro",
    "industries.financial.description": "Soluções fintech e sistemas bancários",
    "industries.government.title": "Governo",
    "industries.government.description": "Sistemas públicos e e-gov",
    "industries.manufacturing.title": "Manufatura",
    "industries.manufacturing.description": "Automação e controle industrial",
    "industries.retail.title": "Varejo",
    "industries.retail.description": "E-commerce e gestão de vendas",

    // Projects Section
    "projects.title": "Nossos Projetos",
    "projects.subtitle": "Conheça alguns dos projetos que desenvolvemos",
    "projects.banking.title": "Sistema Bancário",
    "projects.banking.description": "Plataforma completa para gestão bancária com segurança avançada",
    "projects.ecommerce.title": "Plataforma E-commerce",
    "projects.ecommerce.description": "Solução completa para vendas online com integração de pagamentos",
    "projects.hospital.title": "Sistema Hospitalar",
    "projects.hospital.description": "Gestão completa de pacientes e recursos hospitalares",
    "projects.education.title": "Plataforma Educacional",
    "projects.education.description": "Sistema de ensino à distância com recursos interativos",
    "projects.logistics.title": "Sistema de Logística",
    "projects.logistics.description": "Controle completo de estoque e distribuição",
    "projects.streaming.title": "Plataforma de Streaming",
    "projects.streaming.description": "Solução para transmissão de vídeo com alta qualidade",

    // Testimonials Section
    "testimonials.title": "O que nossos clientes dizem",
    "testimonials.subtitle": "Depoimentos de quem confia em nosso trabalho",
    "testimonials.client1.name": "Alan Antônio",
    "testimonials.client1.company": "TechCorp Solutions",
    "testimonials.client1.text":
      "A VianaHub transformou completamente nossa operação digital. O sistema que desenvolveram superou todas as nossas expectativas em funcionalidade e performance.",
    "testimonials.client2.name": "Cláudio Antunes",
    "testimonials.client2.company": "InnovateX",
    "testimonials.client2.text":
      "Profissionalismo excepcional e entrega no prazo. A equipe da VianaHub entendeu perfeitamente nossas necessidades e entregou uma solução robusta e escalável.",
    "testimonials.client3.name": "Kayth Cristina",
    "testimonials.client3.company": "Digital Dynamics",
    "testimonials.client3.text":
      "Parceria estratégica que gerou resultados extraordinários. O conhecimento técnico e a dedicação da equipe fizeram toda a diferença no sucesso do projeto.",
    "testimonials.client4.name": "Wellington Silva",
    "testimonials.client4.company": "FutureTech Enterprises",
    "testimonials.client4.text":
      "Inovação e qualidade em cada detalhe. A VianaHub não apenas desenvolveu nossa plataforma, mas também nos orientou nas melhores práticas do mercado.",

    // Insights Section
    "insights.title": "Insights e Tendências",
    "insights.subtitle": "Mantenha-se atualizado com as últimas novidades em tecnologia",
    "insights.ai.title": "Inteligência Artificial no Desenvolvimento",
    "insights.ai.description":
      "Como a IA está revolucionando o processo de desenvolvimento de software e criando novas oportunidades de negócio.",
    "insights.cloud.title": "Migração para a Nuvem",
    "insights.cloud.description":
      "Estratégias eficazes para migrar sistemas legados para arquiteturas cloud-native com segurança e eficiência.",
    "insights.security.title": "Cibersegurança em 2024",
    "insights.security.description":
      "As principais ameaças digitais e como proteger sua empresa com as melhores práticas de segurança.",

    // Footer
    "footer.company": "Empresa",
    "footer.services": "Serviços",
    "footer.industries": "Indústrias",
    "footer.contact": "Contato",
    "footer.rights": "Todos os direitos reservados.",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Uso",

    // Contact Page
    "contact.title": "Entre em Contato",
    "contact.subtitle": "Vamos conversar sobre seu próximo projeto",
    "contact.form.name": "Nome",
    "contact.form.email": "E-mail",
    "contact.form.company": "Empresa",
    "contact.form.message": "Mensagem",
    "contact.form.send": "Enviar Mensagem",
    "contact.info.address": "Endereço",
    "contact.info.phone": "Telefone",
    "contact.info.email": "E-mail",

    // About Page
    "about.title": "Sobre a VianaHub",
    "about.subtitle": "Conheça nossa história e nossa missão",
    "about.mission": "Nossa Missão",
    "about.vision": "Nossa Visão",
    "about.values": "Nossos Valores",

    // Careers Page
    "careers.title": "Carreiras",
    "careers.subtitle": "Junte-se à nossa equipe de inovadores",
    "careers.openPositions": "Vagas Abertas",
    "careers.benefits": "Benefícios",
    "careers.culture": "Nossa Cultura",

    // Agile Page
    "agile.hero.title": "Metodologia Ágil",
    "agile.hero.subtitle": "Desenvolvimento eficiente com entregas rápidas e qualidade garantida",
    "agile.benefits.title": "Benefícios da Metodologia Ágil",
    "agile.benefits.subtitle": "Por que escolher o desenvolvimento ágil para seu projeto",
    "agile.benefits.delivery.title": "Entregas Rápidas",
    "agile.benefits.delivery.description": "Ciclos curtos de desenvolvimento com entregas frequentes e incrementais",
    "agile.benefits.collaboration.title": "Colaboração Intensa",
    "agile.benefits.collaboration.description":
      "Comunicação constante entre equipe e cliente para alinhamento perfeito",
    "agile.benefits.flexibility.title": "Flexibilidade Total",
    "agile.benefits.flexibility.description":
      "Adaptação rápida a mudanças e novos requisitos durante o desenvolvimento",
    "agile.benefits.quality.title": "Alta Qualidade",
    "agile.benefits.quality.description": "Testes contínuos e revisões frequentes garantem excelência no produto final",
    "agile.parallax.title": "Transforme Sua Visão em Realidade",
    "agile.parallax.subtitle": "Com metodologia ágil, seu projeto ganha vida de forma rápida e eficiente",
    "agile.process.title": "Nosso Processo Ágil",
    "agile.process.subtitle": "Como trabalhamos para entregar resultados excepcionais",
    "agile.process.planning.title": "Planejamento",
    "agile.process.planning.description": "Definição clara de objetivos, escopo e prioridades do projeto",
    "agile.process.sprints.title": "Sprints",
    "agile.process.sprints.description": "Desenvolvimento em ciclos curtos com entregas funcionais a cada iteração",
    "agile.process.review.title": "Revisão",
    "agile.process.review.description": "Avaliação contínua do progresso com feedback constante do cliente",
    "agile.process.delivery.title": "Entrega",
    "agile.process.delivery.description": "Implementação e deploy de funcionalidades testadas e aprovadas",
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
    "nav.whatWeDo.systemIntegration": "System Integration",
    "nav.whatWeDo.outsourcing": "Outsourcing",
    "nav.whatWeDo.landingPages": "Landing Pages",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.whatWeDo.agile": "Agile Methodology",
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

    // Hero Section
    "hero.title": "Transforming Ideas into Digital Solutions",
    "hero.subtitle": "We develop custom software and innovative technology solutions to boost your business",
    "hero.cta": "Start Project",
    "hero.learnMore": "Learn More",

    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "We offer complete technology solutions to transform your business",
    "services.development.title": "Software Development",
    "services.development.description":
      "We create custom web and mobile applications using the most modern technologies",
    "services.integration.title": "System Integration",
    "services.integration.description": "We connect your existing systems to optimize processes and improve efficiency",
    "services.outsourcing.title": "IT Outsourcing",
    "services.outsourcing.description": "Specialized team to manage and maintain your technological infrastructure",
    "services.consulting.title": "Technology Consulting",
    "services.consulting.description": "Strategic guidance to choose the best solutions for your business",

    // Industries Section
    "industries.title": "Industries We Serve",
    "industries.subtitle": "Specialized experience across various sectors",
    "industries.healthcare.title": "Healthcare",
    "industries.healthcare.description": "Hospital systems and telemedicine",
    "industries.education.title": "Education",
    "industries.education.description": "Teaching platforms and academic management",
    "industries.financial.title": "Financial",
    "industries.financial.description": "Fintech solutions and banking systems",
    "industries.government.title": "Government",
    "industries.government.description": "Public systems and e-government",
    "industries.manufacturing.title": "Manufacturing",
    "industries.manufacturing.description": "Automation and industrial control",
    "industries.retail.title": "Retail",
    "industries.retail.description": "E-commerce and sales management",

    // Projects Section
    "projects.title": "Our Projects",
    "projects.subtitle": "Discover some of the projects we've developed",
    "projects.banking.title": "Banking System",
    "projects.banking.description": "Complete platform for banking management with advanced security",
    "projects.ecommerce.title": "E-commerce Platform",
    "projects.ecommerce.description": "Complete solution for online sales with payment integration",
    "projects.hospital.title": "Hospital System",
    "projects.hospital.description": "Complete management of patients and hospital resources",
    "projects.education.title": "Educational Platform",
    "projects.education.description": "Distance learning system with interactive resources",
    "projects.logistics.title": "Logistics System",
    "projects.logistics.description": "Complete control of inventory and distribution",
    "projects.streaming.title": "Streaming Platform",
    "projects.streaming.description": "High-quality video streaming solution",

    // Testimonials Section
    "testimonials.title": "What our clients say",
    "testimonials.subtitle": "Testimonials from those who trust our work",
    "testimonials.client1.name": "Alan Antonio",
    "testimonials.client1.company": "TechCorp Solutions",
    "testimonials.client1.text":
      "VianaHub completely transformed our digital operation. The system they developed exceeded all our expectations in functionality and performance.",
    "testimonials.client2.name": "Claudio Antunes",
    "testimonials.client2.company": "InnovateX",
    "testimonials.client2.text":
      "Exceptional professionalism and on-time delivery. VianaHub's team perfectly understood our needs and delivered a robust and scalable solution.",
    "testimonials.client3.name": "Kayth Cristina",
    "testimonials.client3.company": "Digital Dynamics",
    "testimonials.client3.text":
      "Strategic partnership that generated extraordinary results. The technical knowledge and team dedication made all the difference in the project's success.",
    "testimonials.client4.name": "Wellington Silva",
    "testimonials.client4.company": "FutureTech Enterprises",
    "testimonials.client4.text":
      "Innovation and quality in every detail. VianaHub not only developed our platform but also guided us in market best practices.",

    // Insights Section
    "insights.title": "Insights and Trends",
    "insights.subtitle": "Stay updated with the latest technology news",
    "insights.ai.title": "Artificial Intelligence in Development",
    "insights.ai.description":
      "How AI is revolutionizing the software development process and creating new business opportunities.",
    "insights.cloud.title": "Cloud Migration",
    "insights.cloud.description":
      "Effective strategies to migrate legacy systems to cloud-native architectures with security and efficiency.",
    "insights.security.title": "Cybersecurity in 2024",
    "insights.security.description":
      "The main digital threats and how to protect your company with security best practices.",

    // Footer
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.industries": "Industries",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",

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
    "about.subtitle": "Learn about our history and mission",
    "about.mission": "Our Mission",
    "about.vision": "Our Vision",
    "about.values": "Our Values",

    // Careers Page
    "careers.title": "Careers",
    "careers.subtitle": "Join our team of innovators",
    "careers.openPositions": "Open Positions",
    "careers.benefits": "Benefits",
    "careers.culture": "Our Culture",

    // Agile Page
    "agile.hero.title": "Agile Methodology",
    "agile.hero.subtitle": "Efficient development with fast deliveries and guaranteed quality",
    "agile.benefits.title": "Benefits of Agile Methodology",
    "agile.benefits.subtitle": "Why choose agile development for your project",
    "agile.benefits.delivery.title": "Fast Deliveries",
    "agile.benefits.delivery.description": "Short development cycles with frequent and incremental deliveries",
    "agile.benefits.collaboration.title": "Intense Collaboration",
    "agile.benefits.collaboration.description": "Constant communication between team and client for perfect alignment",
    "agile.benefits.flexibility.title": "Total Flexibility",
    "agile.benefits.flexibility.description": "Quick adaptation to changes and new requirements during development",
    "agile.benefits.quality.title": "High Quality",
    "agile.benefits.quality.description":
      "Continuous testing and frequent reviews ensure excellence in the final product",
    "agile.parallax.title": "Transform Your Vision into Reality",
    "agile.parallax.subtitle": "With agile methodology, your project comes to life quickly and efficiently",
    "agile.process.title": "Our Agile Process",
    "agile.process.subtitle": "How we work to deliver exceptional results",
    "agile.process.planning.title": "Planning",
    "agile.process.planning.description": "Clear definition of project objectives, scope and priorities",
    "agile.process.sprints.title": "Sprints",
    "agile.process.sprints.description": "Development in short cycles with functional deliveries at each iteration",
    "agile.process.review.title": "Review",
    "agile.process.review.description": "Continuous progress evaluation with constant client feedback",
    "agile.process.delivery.title": "Delivery",
    "agile.process.delivery.description": "Implementation and deployment of tested and approved functionalities",
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
    "nav.whatWeDo.systemIntegration": "Integración de Sistemas",
    "nav.whatWeDo.outsourcing": "Externalización",
    "nav.whatWeDo.landingPages": "Landing Pages",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.whatWeDo.agile": "Metodología Ágil",
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

    // Hero Section
    "hero.title": "Transformando Ideas en Soluciones Digitales",
    "hero.subtitle":
      "Desarrollamos software personalizado y soluciones tecnológicas innovadoras para impulsar tu negocio",
    "hero.cta": "Iniciar Proyecto",
    "hero.learnMore": "Saber Más",

    // Services Section
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Ofrecemos soluciones tecnológicas completas para transformar tu negocio",
    "services.development.title": "Desarrollo de Software",
    "services.development.description":
      "Creamos aplicaciones web y móviles personalizadas usando las tecnologías más modernas",
    "services.integration.title": "Integración de Sistemas",
    "services.integration.description":
      "Conectamos tus sistemas existentes para optimizar procesos y mejorar la eficiencia",
    "services.outsourcing.title": "Externalización de TI",
    "services.outsourcing.description": "Equipo especializado para gestionar y mantener tu infraestructura tecnológica",
    "services.consulting.title": "Consultoría Tecnológica",
    "services.consulting.description": "Orientación estratégica para elegir las mejores soluciones para tu negocio",

    // Industries Section
    "industries.title": "Industrias que Atendemos",
    "industries.subtitle": "Experiencia especializada en diversos sectores",
    "industries.healthcare.title": "Salud",
    "industries.healthcare.description": "Sistemas hospitalarios y telemedicina",
    "industries.education.title": "Educación",
    "industries.education.description": "Plataformas de enseñanza y gestión académica",
    "industries.financial.title": "Financiero",
    "industries.financial.description": "Soluciones fintech y sistemas bancarios",
    "industries.government.title": "Gobierno",
    "industries.government.description": "Sistemas públicos y gobierno electrónico",
    "industries.manufacturing.title": "Manufactura",
    "industries.manufacturing.description": "Automatización y control industrial",
    "industries.retail.title": "Retail",
    "industries.retail.description": "E-commerce y gestión de ventas",

    // Projects Section
    "projects.title": "Nuestros Proyectos",
    "projects.subtitle": "Conoce algunos de los proyectos que hemos desarrollado",
    "projects.banking.title": "Sistema Bancario",
    "projects.banking.description": "Plataforma completa para gestión bancaria con seguridad avanzada",
    "projects.ecommerce.title": "Plataforma E-commerce",
    "projects.ecommerce.description": "Solución completa para ventas online con integración de pagos",
    "projects.hospital.title": "Sistema Hospitalario",
    "projects.hospital.description": "Gestión completa de pacientes y recursos hospitalarios",
    "projects.education.title": "Plataforma Educativa",
    "projects.education.description": "Sistema de enseñanza a distancia con recursos interactivos",
    "projects.logistics.title": "Sistema de Logística",
    "projects.logistics.description": "Control completo de inventario y distribución",
    "projects.streaming.title": "Plataforma de Streaming",
    "projects.streaming.description": "Solución para transmisión de video de alta calidad",

    // Testimonials Section
    "testimonials.title": "Lo que dicen nuestros clientes",
    "testimonials.subtitle": "Testimonios de quienes confían en nuestro trabajo",
    "testimonials.client1.name": "Alan Antonio",
    "testimonials.client1.company": "TechCorp Solutions",
    "testimonials.client1.text":
      "VianaHub transformó completamente nuestra operación digital. El sistema que desarrollaron superó todas nuestras expectativas en funcionalidad y rendimiento.",
    "testimonials.client2.name": "Claudio Antunes",
    "testimonials.client2.company": "InnovateX",
    "testimonials.client2.text":
      "Profesionalismo excepcional y entrega a tiempo. El equipo de VianaHub entendió perfectamente nuestras necesidades y entregó una solución robusta y escalable.",
    "testimonials.client3.name": "Kayth Cristina",
    "testimonials.client3.company": "Digital Dynamics",
    "testimonials.client3.text":
      "Asociación estratégica que generó resultados extraordinarios. El conocimiento técnico y la dedicación del equipo marcaron la diferencia en el éxito del proyecto.",
    "testimonials.client4.name": "Wellington Silva",
    "testimonials.client4.company": "FutureTech Enterprises",
    "testimonials.client4.text":
      "Innovación y calidad en cada detalle. VianaHub no solo desarrolló nuestra plataforma, sino que también nos orientó en las mejores prácticas del mercado.",

    // Insights Section
    "insights.title": "Insights y Tendencias",
    "insights.subtitle": "Mantente actualizado con las últimas novedades en tecnología",
    "insights.ai.title": "Inteligencia Artificial en el Desarrollo",
    "insights.ai.description":
      "Cómo la IA está revolucionando el proceso de desarrollo de software y creando nuevas oportunidades de negocio.",
    "insights.cloud.title": "Migración a la Nube",
    "insights.cloud.description":
      "Estrategias efectivas para migrar sistemas legacy a arquitecturas cloud-native con seguridad y eficiencia.",
    "insights.security.title": "Ciberseguridad en 2024",
    "insights.security.description":
      "Las principales amenazas digitales y cómo proteger tu empresa con las mejores prácticas de seguridad.",

    // Footer
    "footer.company": "Empresa",
    "footer.services": "Servicios",
    "footer.industries": "Industrias",
    "footer.contact": "Contacto",
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Uso",

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
    "about.subtitle": "Conoce nuestra historia y misión",
    "about.mission": "Nuestra Misión",
    "about.vision": "Nuestra Visión",
    "about.values": "Nuestros Valores",

    // Careers Page
    "careers.title": "Carreras",
    "careers.subtitle": "Únete a nuestro equipo de innovadores",
    "careers.openPositions": "Posiciones Abiertas",
    "careers.benefits": "Beneficios",
    "careers.culture": "Nuestra Cultura",

    // Agile Page
    "agile.hero.title": "Metodología Ágil",
    "agile.hero.subtitle": "Desarrollo eficiente con entregas rápidas y calidad garantizada",
    "agile.benefits.title": "Beneficios de la Metodología Ágil",
    "agile.benefits.subtitle": "Por qué elegir desarrollo ágil para tu proyecto",
    "agile.benefits.delivery.title": "Entregas Rápidas",
    "agile.benefits.delivery.description": "Ciclos cortos de desarrollo con entregas frecuentes e incrementales",
    "agile.benefits.collaboration.title": "Colaboración Intensa",
    "agile.benefits.collaboration.description":
      "Comunicación constante entre equipo y cliente para alineación perfecta",
    "agile.benefits.flexibility.title": "Flexibilidad Total",
    "agile.benefits.flexibility.description": "Adaptación rápida a cambios y nuevos requisitos durante el desarrollo",
    "agile.benefits.quality.title": "Alta Calidad",
    "agile.benefits.quality.description":
      "Pruebas continuas y revisiones frecuentes garantizan excelencia en el producto final",
    "agile.parallax.title": "Transforma Tu Visión en Realidad",
    "agile.parallax.subtitle": "Con metodología ágil, tu proyecto cobra vida de forma rápida y eficiente",
    "agile.process.title": "Nuestro Proceso Ágil",
    "agile.process.subtitle": "Cómo trabajamos para entregar resultados excepcionales",
    "agile.process.planning.title": "Planificación",
    "agile.process.planning.description": "Definición clara de objetivos, alcance y prioridades del proyecto",
    "agile.process.sprints.title": "Sprints",
    "agile.process.sprints.description": "Desarrollo en ciclos cortos con entregas funcionales en cada iteración",
    "agile.process.review.title": "Revisión",
    "agile.process.review.description": "Evaluación continua del progreso con retroalimentación constante del cliente",
    "agile.process.delivery.title": "Entrega",
    "agile.process.delivery.description": "Implementación y despliegue de funcionalidades probadas y aprobadas",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.whatWeDo": "Ce que nous faisons",
    "nav.industries": "Industries",
    "nav.security": "Sécurité",
    "nav.careers": "Carrières",
    "nav.contact": "Contact",

    // What We Do Dropdown
    "nav.whatWeDo.development": "Développement",
    "nav.whatWeDo.systemIntegration": "Intégration de Systèmes",
    "nav.whatWeDo.outsourcing": "Externalisation",
    "nav.whatWeDo.landingPages": "Pages d'Atterrissage",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.whatWeDo.agile": "Méthodologie Agile",
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

    // Hero Section
    "hero.title": "Transformer les Idées en Solutions Numériques",
    "hero.subtitle":
      "Nous développons des logiciels personnalisés et des solutions technologiques innovantes pour booster votre entreprise",
    "hero.cta": "Démarrer le Projet",
    "hero.learnMore": "En Savoir Plus",

    // Services Section
    "services.title": "Nos Services",
    "services.subtitle": "Nous offrons des solutions technologiques complètes pour transformer votre entreprise",
    "services.development.title": "Développement de Logiciels",
    "services.development.description":
      "Nous créons des applications web et mobiles personnalisées en utilisant les technologies les plus modernes",
    "services.integration.title": "Intégration de Systèmes",
    "services.integration.description":
      "Nous connectons vos systèmes existants pour optimiser les processus et améliorer l'efficacité",
    "services.outsourcing.title": "Externalisation IT",
    "services.outsourcing.description": "Équipe spécialisée pour gérer et maintenir votre infrastructure technologique",
    "services.consulting.title": "Conseil Technologique",
    "services.consulting.description":
      "Orientation stratégique pour choisir les meilleures solutions pour votre entreprise",

    // Industries Section
    "industries.title": "Industries que Nous Servons",
    "industries.subtitle": "Expérience spécialisée dans divers secteurs",
    "industries.healthcare.title": "Santé",
    "industries.healthcare.description": "Systèmes hospitaliers et télémédecine",
    "industries.education.title": "Éducation",
    "industries.education.description": "Plateformes d'enseignement et gestion académique",
    "industries.financial.title": "Financier",
    "industries.financial.description": "Solutions fintech et systèmes bancaires",
    "industries.government.title": "Gouvernement",
    "industries.government.description": "Systèmes publics et e-gouvernement",
    "industries.manufacturing.title": "Fabrication",
    "industries.manufacturing.description": "Automatisation et contrôle industriel",
    "industries.retail.title": "Commerce de Détail",
    "industries.retail.description": "E-commerce et gestion des ventes",

    // Projects Section
    "projects.title": "Nos Projets",
    "projects.subtitle": "Découvrez quelques-uns des projets que nous avons développés",
    "projects.banking.title": "Système Bancaire",
    "projects.banking.description": "Plateforme complète pour la gestion bancaire avec sécurité avancée",
    "projects.ecommerce.title": "Plateforme E-commerce",
    "projects.ecommerce.description": "Solution complète pour les ventes en ligne avec intégration de paiements",
    "projects.hospital.title": "Système Hospitalier",
    "projects.hospital.description": "Gestion complète des patients et des ressources hospitalières",
    "projects.education.title": "Plateforme Éducative",
    "projects.education.description": "Système d'enseignement à distance avec ressources interactives",
    "projects.logistics.title": "Système de Logistique",
    "projects.logistics.description": "Contrôle complet des stocks et de la distribution",
    "projects.streaming.title": "Plateforme de Streaming",
    "projects.streaming.description": "Solution de streaming vidéo haute qualité",

    // Testimonials Section
    "testimonials.title": "Ce que disent nos clients",
    "testimonials.subtitle": "Témoignages de ceux qui font confiance à notre travail",
    "testimonials.client1.name": "Alan Antonio",
    "testimonials.client1.company": "TechCorp Solutions",
    "testimonials.client1.text":
      "VianaHub a complètement transformé notre opération numérique. Le système qu'ils ont développé a dépassé toutes nos attentes en fonctionnalité et performance.",
    "testimonials.client2.name": "Claudio Antunes",
    "testimonials.client2.company": "InnovateX",
    "testimonials.client2.text":
      "Professionnalisme exceptionnel et livraison dans les délais. L'équipe de VianaHub a parfaitement compris nos besoins et a livré une solution robuste et évolutive.",
    "testimonials.client3.name": "Kayth Cristina",
    "testimonials.client3.company": "Digital Dynamics",
    "testimonials.client3.text":
      "Partenariat stratégique qui a généré des résultats extraordinaires. Les connaissances techniques et le dévouement de l'équipe ont fait toute la différence dans le succès du projet.",
    "testimonials.client4.name": "Wellington Silva",
    "testimonials.client4.company": "FutureTech Enterprises",
    "testimonials.client4.text":
      "Innovation et qualité dans chaque détail. VianaHub n'a pas seulement développé notre plateforme, mais nous a aussi guidés dans les meilleures pratiques du marché.",

    // Insights Section
    "insights.title": "Insights et Tendances",
    "insights.subtitle": "Restez à jour avec les dernières nouvelles technologiques",
    "insights.ai.title": "Intelligence Artificielle dans le Développement",
    "insights.ai.description":
      "Comment l'IA révolutionne le processus de développement logiciel et crée de nouvelles opportunités commerciales.",
    "insights.cloud.title": "Migration vers le Cloud",
    "insights.cloud.description":
      "Stratégies efficaces pour migrer les systèmes legacy vers des architectures cloud-native avec sécurité et efficacité.",
    "insights.security.title": "Cybersécurité en 2024",
    "insights.security.description":
      "Les principales menaces numériques et comment protéger votre entreprise avec les meilleures pratiques de sécurité.",

    // Footer
    "footer.company": "Entreprise",
    "footer.services": "Services",
    "footer.industries": "Industries",
    "footer.contact": "Contact",
    "footer.rights": "Tous droits réservés.",
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions d'Utilisation",

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
    "about.title": "À propos de VianaHub",
    "about.subtitle": "Découvrez notre histoire et notre mission",
    "about.mission": "Notre Mission",
    "about.vision": "Notre Vision",
    "about.values": "Nos Valeurs",

    // Careers Page
    "careers.title": "Carrières",
    "careers.subtitle": "Rejoignez notre équipe d'innovateurs",
    "careers.openPositions": "Postes Ouverts",
    "careers.benefits": "Avantages",
    "careers.culture": "Notre Culture",

    // Agile Page
    "agile.hero.title": "Méthodologie Agile",
    "agile.hero.subtitle": "Développement efficace avec des livraisons rapides et une qualité garantie",
    "agile.benefits.title": "Avantages de la Méthodologie Agile",
    "agile.benefits.subtitle": "Pourquoi choisir le développement agile pour votre projet",
    "agile.benefits.delivery.title": "Livraisons Rapides",
    "agile.benefits.delivery.description":
      "Cycles de développement courts avec des livraisons fréquentes et incrémentales",
    "agile.benefits.collaboration.title": "Collaboration Intense",
    "agile.benefits.collaboration.description":
      "Communication constante entre l'équipe et le client pour un alignement parfait",
    "agile.benefits.flexibility.title": "Flexibilité Totale",
    "agile.benefits.flexibility.description":
      "Adaptation rapide aux changements et nouveaux besoins pendant le développement",
    "agile.benefits.quality.title": "Haute Qualité",
    "agile.benefits.quality.description":
      "Tests continus et révisions fréquentes garantissent l'excellence du produit final",
    "agile.parallax.title": "Transformez Votre Vision en Réalité",
    "agile.parallax.subtitle": "Avec la méthodologie agile, votre projet prend vie rapidement et efficacement",
    "agile.process.title": "Notre Processus Agile",
    "agile.process.subtitle": "Comment nous travaillons pour livrer des résultats exceptionnels",
    "agile.process.planning.title": "Planification",
    "agile.process.planning.description": "Définition claire des objectifs, portée et priorités du projet",
    "agile.process.sprints.title": "Sprints",
    "agile.process.sprints.description":
      "Développement en cycles courts avec des livraisons fonctionnelles à chaque itération",
    "agile.process.review.title": "Révision",
    "agile.process.review.description": "Évaluation continue du progrès avec feedback constant du client",
    "agile.process.delivery.title": "Livraison",
    "agile.process.delivery.description": "Implémentation et déploiement de fonctionnalités testées et approuvées",
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.about": "Über uns",
    "nav.whatWeDo": "Was wir tun",
    "nav.industries": "Branchen",
    "nav.security": "Sicherheit",
    "nav.careers": "Karriere",
    "nav.contact": "Kontakt",

    // What We Do Dropdown
    "nav.whatWeDo.development": "Entwicklung",
    "nav.whatWeDo.systemIntegration": "Systemintegration",
    "nav.whatWeDo.outsourcing": "Outsourcing",
    "nav.whatWeDo.landingPages": "Landing Pages",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.whatWeDo.agile": "Agile Methodik",
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

    // Hero Section
    "hero.title": "Ideen in Digitale Lösungen Verwandeln",
    "hero.subtitle":
      "Wir entwickeln maßgeschneiderte Software und innovative Technologielösungen, um Ihr Unternehmen voranzubringen",
    "hero.cta": "Projekt Starten",
    "hero.learnMore": "Mehr Erfahren",

    // Services Section
    "services.title": "Unsere Dienstleistungen",
    "services.subtitle": "Wir bieten komplette Technologielösungen zur Transformation Ihres Unternehmens",
    "services.development.title": "Softwareentwicklung",
    "services.development.description":
      "Wir erstellen maßgeschneiderte Web- und Mobile-Anwendungen mit modernsten Technologien",
    "services.integration.title": "Systemintegration",
    "services.integration.description":
      "Wir verbinden Ihre bestehenden Systeme zur Prozessoptimierung und Effizienzsteigerung",
    "services.outsourcing.title": "IT-Outsourcing",
    "services.outsourcing.description":
      "Spezialisiertes Team zur Verwaltung und Wartung Ihrer technologischen Infrastruktur",
    "services.consulting.title": "Technologieberatung",
    "services.consulting.description": "Strategische Beratung zur Auswahl der besten Lösungen für Ihr Unternehmen",

    // Industries Section
    "industries.title": "Branchen, die wir bedienen",
    "industries.subtitle": "Spezialisierte Erfahrung in verschiedenen Sektoren",
    "industries.healthcare.title": "Gesundheitswesen",
    "industries.healthcare.description": "Krankenhaus-Systeme und Telemedizin",
    "industries.education.title": "Bildung",
    "industries.education.description": "Lehrplattformen und akademisches Management",
    "industries.financial.title": "Finanzwesen",
    "industries.financial.description": "Fintech-Lösungen und Bankensysteme",
    "industries.government.title": "Regierung",
    "industries.government.description": "Öffentliche Systeme und E-Government",
    "industries.manufacturing.title": "Fertigung",
    "industries.manufacturing.description": "Automatisierung und Industriesteuerung",
    "industries.retail.title": "Einzelhandel",
    "industries.retail.description": "E-Commerce und Verkaufsmanagement",

    // Projects Section
    "projects.title": "Unsere Projekte",
    "projects.subtitle": "Entdecken Sie einige der Projekte, die wir entwickelt haben",
    "projects.banking.title": "Bankensystem",
    "projects.banking.description": "Komplette Plattform für Bankmanagement mit fortschrittlicher Sicherheit",
    "projects.ecommerce.title": "E-Commerce-Plattform",
    "projects.ecommerce.description": "Komplettlösung für Online-Verkäufe mit Zahlungsintegration",
    "projects.hospital.title": "Krankenhaus-System",
    "projects.hospital.description": "Komplettes Management von Patienten und Krankenhausressourcen",
    "projects.education.title": "Bildungsplattform",
    "projects.education.description": "Fernlernsystem mit interaktiven Ressourcen",
    "projects.logistics.title": "Logistiksystem",
    "projects.logistics.description": "Vollständige Kontrolle von Inventar und Vertrieb",
    "projects.streaming.title": "Streaming-Plattform",
    "projects.streaming.description": "Hochwertige Video-Streaming-Lösung",

    // Testimonials Section
    "testimonials.title": "Was unsere Kunden sagen",
    "testimonials.subtitle": "Testimonials von denen, die unserer Arbeit vertrauen",
    "testimonials.client1.name": "Alan Antonio",
    "testimonials.client1.company": "TechCorp Solutions",
    "testimonials.client1.text":
      "VianaHub hat unsere digitale Operation vollständig transformiert. Das System, das sie entwickelt haben, übertraf alle unsere Erwartungen in Funktionalität und Leistung.",
    "testimonials.client2.name": "Claudio Antunes",
    "testimonials.client2.company": "InnovateX",
    "testimonials.client2.text":
      "Außergewöhnliche Professionalität und pünktliche Lieferung. Das Team von VianaHub verstand unsere Bedürfnisse perfekt und lieferte eine robuste und skalierbare Lösung.",
    "testimonials.client3.name": "Kayth Cristina",
    "testimonials.client3.company": "Digital Dynamics",
    "testimonials.client3.text":
      "Strategische Partnerschaft, die außergewöhnliche Ergebnisse erzielte. Das technische Wissen und die Hingabe des Teams machten den Unterschied im Projekterfolg aus.",
    "testimonials.client4.name": "Wellington Silva",
    "testimonials.client4.company": "FutureTech Enterprises",
    "testimonials.client4.text":
      "Innovation und Qualität in jedem Detail. VianaHub entwickelte nicht nur unsere Plattform, sondern führte uns auch zu den besten Marktpraktiken.",

    // Insights Section
    "insights.title": "Insights und Trends",
    "insights.subtitle": "Bleiben Sie auf dem Laufenden mit den neuesten Technologie-News",
    "insights.ai.title": "Künstliche Intelligenz in der Entwicklung",
    "insights.ai.description":
      "Wie KI den Softwareentwicklungsprozess revolutioniert und neue Geschäftsmöglichkeiten schafft.",
    "insights.cloud.title": "Cloud-Migration",
    "insights.cloud.description":
      "Effektive Strategien zur Migration von Legacy-Systemen zu Cloud-nativen Architekturen mit Sicherheit und Effizienz.",
    "insights.security.title": "Cybersicherheit 2024",
    "insights.security.description":
      "Die wichtigsten digitalen Bedrohungen und wie Sie Ihr Unternehmen mit den besten Sicherheitspraktiken schützen.",

    // Footer
    "footer.company": "Unternehmen",
    "footer.services": "Dienstleistungen",
    "footer.industries": "Branchen",
    "footer.contact": "Kontakt",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.privacy": "Datenschutzrichtlinie",
    "footer.terms": "Nutzungsbedingungen",

    // Contact Page
    "contact.title": "Kontakt aufnehmen",
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
    "about.subtitle": "Erfahren Sie mehr über unsere Geschichte und Mission",
    "about.mission": "Unsere Mission",
    "about.vision": "Unsere Vision",
    "about.values": "Unsere Werte",

    // Careers Page
    "careers.title": "Karriere",
    "careers.subtitle": "Werden Sie Teil unseres Innovatorenteams",
    "careers.openPositions": "Offene Stellen",
    "careers.benefits": "Vorteile",
    "careers.culture": "Unsere Kultur",

    // Agile Page
    "agile.hero.title": "Agile Methodik",
    "agile.hero.subtitle": "Effiziente Entwicklung mit schnellen Lieferungen und garantierter Qualität",
    "agile.benefits.title": "Vorteile der Agilen Methodik",
    "agile.benefits.subtitle": "Warum agile Entwicklung für Ihr Projekt wählen",
    "agile.benefits.delivery.title": "Schnelle Lieferungen",
    "agile.benefits.delivery.description": "Kurze Entwicklungszyklen mit häufigen und inkrementellen Lieferungen",
    "agile.benefits.collaboration.title": "Intensive Zusammenarbeit",
    "agile.benefits.collaboration.description":
      "Konstante Kommunikation zwischen Team und Kunde für perfekte Abstimmung",
    "agile.benefits.flexibility.title": "Totale Flexibilität",
    "agile.benefits.flexibility.description":
      "Schnelle Anpassung an Änderungen und neue Anforderungen während der Entwicklung",
    "agile.benefits.quality.title": "Hohe Qualität",
    "agile.benefits.quality.description":
      "Kontinuierliche Tests und häufige Überprüfungen gewährleisten Exzellenz im Endprodukt",
    "agile.parallax.title": "Verwandeln Sie Ihre Vision in Realität",
    "agile.parallax.subtitle": "Mit agiler Methodik wird Ihr Projekt schnell und effizient zum Leben erweckt",
    "agile.process.title": "Unser Agiler Prozess",
    "agile.process.subtitle": "Wie wir arbeiten, um außergewöhnliche Ergebnisse zu liefern",
    "agile.process.planning.title": "Planung",
    "agile.process.planning.description": "Klare Definition von Projektzielen, Umfang und Prioritäten",
    "agile.process.sprints.title": "Sprints",
    "agile.process.sprints.description":
      "Entwicklung in kurzen Zyklen mit funktionalen Lieferungen bei jeder Iteration",
    "agile.process.review.title": "Überprüfung",
    "agile.process.review.description": "Kontinuierliche Fortschrittsbewertung mit konstantem Kundenfeedback",
    "agile.process.delivery.title": "Lieferung",
    "agile.process.delivery.description":
      "Implementierung und Bereitstellung getesteter und genehmigter Funktionalitäten",
  },
}

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["pt", "en", "es", "fr", "de"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)
    }
  }, [language, mounted])

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key "${key}" not found for language "${language}"`)
        return key
      }
    }

    return typeof value === "string" ? value : key
  }

  if (!mounted) {
    return null
  }

  return <TranslationContext.Provider value={{ language, setLanguage, t }}>{children}</TranslationContext.Provider>
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}
