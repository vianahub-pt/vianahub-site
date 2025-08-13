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
    "nav.about": "Sobre Nós",
    "nav.services": "Serviços",
    "nav.contact": "Contacto",
    "nav.careers": "Carreiras",
    "nav.blog": "Blog",
    "nav.portfolio": "Portfólio",
    "nav.testimonials": "Testemunhos",

    // Menu items
    whatWeDo: "O que Fazemos",
    industry: "Indústria",
    security: "Segurança",
    engineering: "Engenharia",
    institutional: "Institucional",

    // Menu options
    "menu.development": "Desenvolvimento",
    "menu.agile": "Metodologia Ágil",
    "menu.chatbot": "Chatbot",
    "menu.landing-pages": "Landing Pages",
    "menu.outsourcing": "Outsourcing",
    "menu.system-integration": "Integração de Sistemas",
    "menu.railway": "Ferroviário",
    "menu.road": "Rodoviário",
    "menu.solar-energy": "Energia Solar",
    "menu.education": "Educação",
    "menu.financial": "Financeiro",
    "menu.healthcare": "Saúde",
    "menu.manufacturing": "Manufatura",
    "menu.retail": "Retalho",
    "menu.government": "Governo",
    "menu.access": "Controlo de Acesso",
    "menu.backups": "Backups",
    "menu.cybersecurity": "Segurança Cibernética",
    "menu.institutional": "Institucional",
    "menu.about": "Sobre Nós",
    "menu.careers": "Carreiras",
    "menu.contact": "Contacto",

    // Contact page
    "contact.hero.title": "Entre em Contacto",
    "contact.hero.subtitle":
      "Estamos aqui para ajudar a transformar as suas ideias em realidade. Entre em contacto connosco hoje mesmo.",
    "contact.form.title": "Fale Connosco",
    "contact.form.name": "Nome",
    "contact.form.email": "Email",
    "contact.form.company": "Empresa",
    "contact.form.message": "Mensagem",
    "contact.form.submit": "Enviar Mensagem",
    "contact.info.title": "Informações de Contacto",
    "contact.info.email": "Email",
    "contact.info.phone": "Telefone",
    "contact.info.address": "Morada",
    "contact.info.hours": "Horário de Funcionamento",
    "contact.info.hours.weekdays": "Segunda a Sexta: 9:00 - 18:00",
    "contact.success.title": "Mensagem Enviada!",
    "contact.success.message": "Obrigado pelo seu contacto. Responderemos em breve.",

    // Hero section
    "hero.title": "Transformamos Ideias em Soluções Digitais",
    "hero.subtitle":
      "Somos uma empresa de tecnologia especializada em desenvolvimento de software, consultoria e soluções inovadoras para o seu negócio.",
    "hero.cta": "Começar Projeto",
    "hero.learnMore": "Saber Mais",

    // Services section
    "services.title": "Os Nossos Serviços",
    "services.subtitle": "Oferecemos uma gama completa de serviços de tecnologia para impulsionar o seu negócio",
    "services.development.title": "Desenvolvimento de Software",
    "services.development.description":
      "Criamos aplicações web e móveis personalizadas usando as mais recentes tecnologias",
    "services.consulting.title": "Consultoria Tecnológica",
    "services.consulting.description": "Ajudamos a definir a melhor estratégia tecnológica para o seu negócio",
    "services.integration.title": "Integração de Sistemas",
    "services.integration.description": "Conectamos os seus sistemas existentes para uma operação mais eficiente",
    "services.support.title": "Suporte e Manutenção",
    "services.support.description": "Fornecemos suporte contínuo e manutenção para as suas soluções tecnológicas",

    // About section
    "about.title": "Sobre a VianaHub",
    "about.subtitle": "Conheça a nossa história e missão",
    "about.description":
      "A VianaHub é uma empresa de tecnologia fundada com o objetivo de transformar ideias em soluções digitais inovadoras. Com uma equipa experiente e apaixonada por tecnologia, ajudamos empresas de todos os tamanhos a alcançar os seus objetivos através de soluções personalizadas.",
    "about.mission.title": "A Nossa Missão",
    "about.mission.description": "Capacitar empresas através de soluções tecnológicas inovadoras e personalizadas",
    "about.vision.title": "A Nossa Visão",
    "about.vision.description": "Ser reconhecida como líder em transformação digital e inovação tecnológica",
    "about.values.title": "Os Nossos Valores",
    "about.values.innovation": "Inovação",
    "about.values.quality": "Qualidade",
    "about.values.partnership": "Parceria",
    "about.values.excellence": "Excelência",

    // Testimonials section
    "testimonials.title": "O que Dizem os Nossos Clientes",
    "testimonials.subtitle": "Veja como ajudámos outras empresas a alcançar o sucesso",

    // CTA section
    "cta.title": "Pronto para Começar?",
    "cta.subtitle": "Entre em contacto connosco hoje e vamos discutir como podemos ajudar o seu negócio",
    "cta.button": "Contactar Agora",

    // Footer
    "footer.company": "Empresa",
    "footer.services": "Serviços",
    "footer.support": "Suporte",
    "footer.legal": "Legal",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Serviço",
    "footer.cookies": "Política de Cookies",
    "footer.rights": "Todos os direitos reservados",
    "footer.followUs": "Siga-nos",

    // Common
    "common.loading": "A carregar...",
    "common.error": "Erro",
    "common.success": "Sucesso",
    "common.cancel": "Cancelar",
    "common.save": "Guardar",
    "common.edit": "Editar",
    "common.delete": "Eliminar",
    "common.view": "Ver",
    "common.download": "Descarregar",
    "common.upload": "Carregar",
    "common.search": "Pesquisar",
    "common.filter": "Filtrar",
    "common.sort": "Ordenar",
    "common.next": "Seguinte",
    "common.previous": "Anterior",
    "common.close": "Fechar",
    "common.open": "Abrir",
    "common.yes": "Sim",
    "common.no": "Não",

    // Careers
    "careers.title": "Junte-se à Nossa Equipa",
    "careers.subtitle": "Descubra oportunidades emocionantes na VianaHub",
    "careers.noPositions": "Não há posições disponíveis no momento",
    "careers.apply": "Candidatar-se",
    "careers.requirements": "Requisitos",
    "careers.responsibilities": "Responsabilidades",
    "careers.benefits": "Benefícios",
    "careers.location": "Localização",
    "careers.type": "Tipo",
    "careers.experience": "Experiência",
    "careers.salary": "Salário",

    // Projects
    "projects.title": "Os Nossos Projetos",
    "projects.subtitle": "Veja alguns dos projetos que desenvolvemos",
    "projects.viewProject": "Ver Projeto",
    "projects.technologies": "Tecnologias",
    "projects.client": "Cliente",
    "projects.duration": "Duração",
    "projects.team": "Equipa",

    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Artigos e insights sobre tecnologia",
    "blog.readMore": "Ler Mais",
    "blog.author": "Autor",
    "blog.date": "Data",
    "blog.category": "Categoria",
    "blog.tags": "Tags",
    "blog.share": "Partilhar",
    "blog.comments": "Comentários",
    "blog.relatedPosts": "Artigos Relacionados",

    // Forms
    "form.required": "Campo obrigatório",
    "form.invalid": "Campo inválido",
    "form.email.invalid": "Email inválido",
    "form.phone.invalid": "Telefone inválido",
    "form.password.weak": "Palavra-passe fraca",
    "form.password.mismatch": "Palavras-passe não coincidem",
    "form.submit": "Submeter",
    "form.reset": "Limpar",
    "form.sending": "A enviar...",
    "form.sent": "Enviado com sucesso",
    "form.error": "Erro ao enviar",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.careers": "Careers",
    "nav.blog": "Blog",
    "nav.portfolio": "Portfolio",
    "nav.testimonials": "Testimonials",

    // Menu items
    whatWeDo: "What We Do",
    industry: "Industry",
    security: "Security",
    engineering: "Engineering",
    institutional: "Institutional",

    // Menu options
    "menu.development": "Development",
    "menu.agile": "Agile Methodology",
    "menu.chatbot": "Chatbot",
    "menu.landing-pages": "Landing Pages",
    "menu.outsourcing": "Outsourcing",
    "menu.system-integration": "System Integration",
    "menu.railway": "Railway",
    "menu.road": "Road",
    "menu.solar-energy": "Solar Energy",
    "menu.education": "Education",
    "menu.financial": "Financial",
    "menu.healthcare": "Healthcare",
    "menu.manufacturing": "Manufacturing",
    "menu.retail": "Retail",
    "menu.government": "Government",
    "menu.access": "Access Control",
    "menu.backups": "Backups",
    "menu.cybersecurity": "Cybersecurity",
    "menu.institutional": "Institutional",
    "menu.about": "About Us",
    "menu.careers": "Careers",
    "menu.contact": "Contact",

    // Contact page
    "contact.hero.title": "Get In Touch",
    "contact.hero.subtitle": "We're here to help transform your ideas into reality. Contact us today.",
    "contact.form.title": "Contact Us",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.company": "Company",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.address": "Address",
    "contact.info.hours": "Business Hours",
    "contact.info.hours.weekdays": "Monday to Friday: 9:00 - 18:00",
    "contact.success.title": "Message Sent!",
    "contact.success.message": "Thank you for contacting us. We'll respond shortly.",

    // Hero section
    "hero.title": "We Transform Ideas into Digital Solutions",
    "hero.subtitle":
      "We are a technology company specialized in software development, consulting and innovative solutions for your business.",
    "hero.cta": "Start Project",
    "hero.learnMore": "Learn More",

    // Services section
    "services.title": "Our Services",
    "services.subtitle": "We offer a complete range of technology services to boost your business",
    "services.development.title": "Software Development",
    "services.development.description": "We create custom web and mobile applications using the latest technologies",
    "services.consulting.title": "Technology Consulting",
    "services.consulting.description": "We help define the best technology strategy for your business",
    "services.integration.title": "System Integration",
    "services.integration.description": "We connect your existing systems for more efficient operation",
    "services.support.title": "Support and Maintenance",
    "services.support.description": "We provide ongoing support and maintenance for your technology solutions",

    // About section
    "about.title": "About VianaHub",
    "about.subtitle": "Learn about our story and mission",
    "about.description":
      "VianaHub is a technology company founded with the goal of transforming ideas into innovative digital solutions. With an experienced team passionate about technology, we help companies of all sizes achieve their goals through customized solutions.",
    "about.mission.title": "Our Mission",
    "about.mission.description": "Empower companies through innovative and customized technology solutions",
    "about.vision.title": "Our Vision",
    "about.vision.description": "To be recognized as a leader in digital transformation and technological innovation",
    "about.values.title": "Our Values",
    "about.values.innovation": "Innovation",
    "about.values.quality": "Quality",
    "about.values.partnership": "Partnership",
    "about.values.excellence": "Excellence",

    // Testimonials section
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "See how we helped other companies achieve success",

    // CTA section
    "cta.title": "Ready to Get Started?",
    "cta.subtitle": "Contact us today and let's discuss how we can help your business",
    "cta.button": "Contact Now",

    // Footer
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.support": "Support",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
    "footer.rights": "All rights reserved",
    "footer.followUs": "Follow Us",

    // Common
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
    "common.cancel": "Cancel",
    "common.save": "Save",
    "common.edit": "Edit",
    "common.delete": "Delete",
    "common.view": "View",
    "common.download": "Download",
    "common.upload": "Upload",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.sort": "Sort",
    "common.next": "Next",
    "common.previous": "Previous",
    "common.close": "Close",
    "common.open": "Open",
    "common.yes": "Yes",
    "common.no": "No",

    // Careers
    "careers.title": "Join Our Team",
    "careers.subtitle": "Discover exciting opportunities at VianaHub",
    "careers.noPositions": "No positions available at the moment",
    "careers.apply": "Apply",
    "careers.requirements": "Requirements",
    "careers.responsibilities": "Responsibilities",
    "careers.benefits": "Benefits",
    "careers.location": "Location",
    "careers.type": "Type",
    "careers.experience": "Experience",
    "careers.salary": "Salary",

    // Projects
    "projects.title": "Our Projects",
    "projects.subtitle": "See some of the projects we've developed",
    "projects.viewProject": "View Project",
    "projects.technologies": "Technologies",
    "projects.client": "Client",
    "projects.duration": "Duration",
    "projects.team": "Team",

    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Articles and insights about technology",
    "blog.readMore": "Read More",
    "blog.author": "Author",
    "blog.date": "Date",
    "blog.category": "Category",
    "blog.tags": "Tags",
    "blog.share": "Share",
    "blog.comments": "Comments",
    "blog.relatedPosts": "Related Posts",

    // Forms
    "form.required": "Required field",
    "form.invalid": "Invalid field",
    "form.email.invalid": "Invalid email",
    "form.phone.invalid": "Invalid phone",
    "form.password.weak": "Weak password",
    "form.password.mismatch": "Passwords don't match",
    "form.submit": "Submit",
    "form.reset": "Reset",
    "form.sending": "Sending...",
    "form.sent": "Sent successfully",
    "form.error": "Error sending",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.services": "Servicios",
    "nav.contact": "Contacto",
    "nav.careers": "Carreras",
    "nav.blog": "Blog",
    "nav.portfolio": "Portafolio",
    "nav.testimonials": "Testimonios",

    // Menu items
    whatWeDo: "Qué Hacemos",
    industry: "Industria",
    security: "Seguridad",
    engineering: "Ingeniería",
    institutional: "Institucional",

    // Menu options
    "menu.development": "Desarrollo",
    "menu.agile": "Metodología Ágil",
    "menu.chatbot": "Chatbot",
    "menu.landing-pages": "Landing Pages",
    "menu.outsourcing": "Outsourcing",
    "menu.system-integration": "Integración de Sistemas",
    "menu.railway": "Ferroviario",
    "menu.road": "Carreteras",
    "menu.solar-energy": "Energía Solar",
    "menu.education": "Educación",
    "menu.financial": "Financiero",
    "menu.healthcare": "Salud",
    "menu.manufacturing": "Manufactura",
    "menu.retail": "Retail",
    "menu.government": "Gobierno",
    "menu.access": "Control de Acceso",
    "menu.backups": "Respaldos",
    "menu.cybersecurity": "Ciberseguridad",
    "menu.institutional": "Institucional",
    "menu.about": "Acerca de",
    "menu.careers": "Carreras",
    "menu.contact": "Contacto",

    // Contact page
    "contact.hero.title": "Ponte en Contacto",
    "contact.hero.subtitle": "Estamos aquí para ayudar a transformar tus ideas en realidad. Contáctanos hoy.",
    "contact.form.title": "Contáctanos",
    "contact.form.name": "Nombre",
    "contact.form.email": "Email",
    "contact.form.company": "Empresa",
    "contact.form.message": "Mensaje",
    "contact.form.submit": "Enviar Mensaje",
    "contact.info.title": "Información de Contacto",
    "contact.info.email": "Email",
    "contact.info.phone": "Teléfono",
    "contact.info.address": "Dirección",
    "contact.info.hours": "Horario de Atención",
    "contact.info.hours.weekdays": "Lunes a Viernes: 9:00 - 18:00",
    "contact.success.title": "¡Mensaje Enviado!",
    "contact.success.message": "Gracias por contactarnos. Responderemos pronto.",

    // Hero section
    "hero.title": "Transformamos Ideas en Soluciones Digitales",
    "hero.subtitle":
      "Somos una empresa de tecnología especializada en desarrollo de software, consultoría y soluciones innovadoras para tu negocio.",
    "hero.cta": "Iniciar Proyecto",
    "hero.learnMore": "Saber Más",

    // Services section
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Ofrecemos una gama completa de servicios de tecnología para impulsar tu negocio",
    "services.development.title": "Desarrollo de Software",
    "services.development.description":
      "Creamos aplicaciones web y móviles personalizadas usando las últimas tecnologías",
    "services.consulting.title": "Consultoría Tecnológica",
    "services.consulting.description": "Ayudamos a definir la mejor estrategia tecnológica para tu negocio",
    "services.integration.title": "Integración de Sistemas",
    "services.integration.description": "Conectamos tus sistemas existentes para una operación más eficiente",
    "services.support.title": "Soporte y Mantenimiento",
    "services.support.description": "Proporcionamos soporte continuo y mantenimiento para tus soluciones tecnológicas",

    // About section
    "about.title": "Acerca de VianaHub",
    "about.subtitle": "Conoce nuestra historia y misión",
    "about.description":
      "VianaHub es una empresa de tecnología fundada con el objetivo de transformar ideas en soluciones digitales innovadoras. Con un equipo experimentado y apasionado por la tecnología, ayudamos a empresas de todos los tamaños a alcanzar sus objetivos a través de soluciones personalizadas.",
    "about.mission.title": "Nuestra Misión",
    "about.mission.description": "Empoderar empresas a través de soluciones tecnológicas innovadoras y personalizadas",
    "about.vision.title": "Nuestra Visión",
    "about.vision.description": "Ser reconocidos como líderes en transformación digital e innovación tecnológica",
    "about.values.title": "Nuestros Valores",
    "about.values.innovation": "Innovación",
    "about.values.quality": "Calidad",
    "about.values.partnership": "Asociación",
    "about.values.excellence": "Excelencia",

    // Testimonials section
    "testimonials.title": "Lo que Dicen Nuestros Clientes",
    "testimonials.subtitle": "Ve cómo ayudamos a otras empresas a alcanzar el éxito",

    // CTA section
    "cta.title": "¿Listo para Comenzar?",
    "cta.subtitle": "Contáctanos hoy y discutamos cómo podemos ayudar a tu negocio",
    "cta.button": "Contactar Ahora",

    // Footer
    "footer.company": "Empresa",
    "footer.services": "Servicios",
    "footer.support": "Soporte",
    "footer.legal": "Legal",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.cookies": "Política de Cookies",
    "footer.rights": "Todos los derechos reservados",
    "footer.followUs": "Síguenos",

    // Common
    "common.loading": "Cargando...",
    "common.error": "Error",
    "common.success": "Éxito",
    "common.cancel": "Cancelar",
    "common.save": "Guardar",
    "common.edit": "Editar",
    "common.delete": "Eliminar",
    "common.view": "Ver",
    "common.download": "Descargar",
    "common.upload": "Subir",
    "common.search": "Buscar",
    "common.filter": "Filtrar",
    "common.sort": "Ordenar",
    "common.next": "Siguiente",
    "common.previous": "Anterior",
    "common.close": "Cerrar",
    "common.open": "Abrir",
    "common.yes": "Sí",
    "common.no": "No",

    // Careers
    "careers.title": "Únete a Nuestro Equipo",
    "careers.subtitle": "Descubre oportunidades emocionantes en VianaHub",
    "careers.noPositions": "No hay posiciones disponibles en este momento",
    "careers.apply": "Aplicar",
    "careers.requirements": "Requisitos",
    "careers.responsibilities": "Responsabilidades",
    "careers.benefits": "Beneficios",
    "careers.location": "Ubicación",
    "careers.type": "Tipo",
    "careers.experience": "Experiencia",
    "careers.salary": "Salario",

    // Projects
    "projects.title": "Nuestros Proyectos",
    "projects.subtitle": "Ve algunos de los proyectos que hemos desarrollado",
    "projects.viewProject": "Ver Proyecto",
    "projects.technologies": "Tecnologías",
    "projects.client": "Cliente",
    "projects.duration": "Duración",
    "projects.team": "Equipo",

    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Artículos e insights sobre tecnología",
    "blog.readMore": "Leer Más",
    "blog.author": "Autor",
    "blog.date": "Fecha",
    "blog.category": "Categoría",
    "blog.tags": "Etiquetas",
    "blog.share": "Compartir",
    "blog.comments": "Comentarios",
    "blog.relatedPosts": "Posts Relacionados",

    // Forms
    "form.required": "Campo requerido",
    "form.invalid": "Campo inválido",
    "form.email.invalid": "Email inválido",
    "form.phone.invalid": "Teléfono inválido",
    "form.password.weak": "Contraseña débil",
    "form.password.mismatch": "Las contraseñas no coinciden",
    "form.submit": "Enviar",
    "form.reset": "Limpiar",
    "form.sending": "Enviando...",
    "form.sent": "Enviado exitosamente",
    "form.error": "Error al enviar",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.careers": "Carrières",
    "nav.blog": "Blog",
    "nav.portfolio": "Portfolio",
    "nav.testimonials": "Témoignages",

    // Menu items
    whatWeDo: "Ce Que Nous Faisons",
    industry: "Industrie",
    security: "Sécurité",
    engineering: "Ingénierie",
    institutional: "Institutionnel",

    // Menu options
    "menu.development": "Développement",
    "menu.agile": "Méthodologie Agile",
    "menu.chatbot": "Chatbot",
    "menu.landing-pages": "Landing Pages",
    "menu.outsourcing": "Externalisation",
    "menu.system-integration": "Intégration de Systèmes",
    "menu.railway": "Ferroviaire",
    "menu.road": "Routier",
    "menu.solar-energy": "Énergie Solaire",
    "menu.education": "Éducation",
    "menu.financial": "Financier",
    "menu.healthcare": "Santé",
    "menu.manufacturing": "Fabrication",
    "menu.retail": "Commerce de Détail",
    "menu.government": "Gouvernement",
    "menu.access": "Contrôle d'Accès",
    "menu.backups": "Sauvegardes",
    "menu.cybersecurity": "Cybersécurité",
    "menu.institutional": "Institutionnel",
    "menu.about": "À Propos",
    "menu.careers": "Carrières",
    "menu.contact": "Contact",

    // Contact page
    "contact.hero.title": "Contactez-Nous",
    "contact.hero.subtitle":
      "Nous sommes là pour aider à transformer vos idées en réalité. Contactez-nous aujourd'hui.",
    "contact.form.title": "Contactez-Nous",
    "contact.form.name": "Nom",
    "contact.form.email": "Email",
    "contact.form.company": "Entreprise",
    "contact.form.message": "Message",
    "contact.form.submit": "Envoyer le Message",
    "contact.info.title": "Informations de Contact",
    "contact.info.email": "Email",
    "contact.info.phone": "Téléphone",
    "contact.info.address": "Adresse",
    "contact.info.hours": "Heures d'Ouverture",
    "contact.info.hours.weekdays": "Lundi au Vendredi: 9:00 - 18:00",
    "contact.success.title": "Message Envoyé!",
    "contact.success.message": "Merci de nous avoir contactés. Nous répondrons bientôt.",

    // Hero section
    "hero.title": "Nous Transformons les Idées en Solutions Numériques",
    "hero.subtitle":
      "Nous sommes une entreprise technologique spécialisée dans le développement de logiciels, le conseil et les solutions innovantes pour votre entreprise.",
    "hero.cta": "Commencer le Projet",
    "hero.learnMore": "En Savoir Plus",

    // Services section
    "services.title": "Nos Services",
    "services.subtitle": "Nous offrons une gamme complète de services technologiques pour booster votre entreprise",
    "services.development.title": "Développement de Logiciels",
    "services.development.description":
      "Nous créons des applications web et mobiles personnalisées en utilisant les dernières technologies",
    "services.consulting.title": "Conseil Technologique",
    "services.consulting.description":
      "Nous aidons à définir la meilleure stratégie technologique pour votre entreprise",
    "services.integration.title": "Intégration de Systèmes",
    "services.integration.description": "Nous connectons vos systèmes existants pour une opération plus efficace",
    "services.support.title": "Support et Maintenance",
    "services.support.description":
      "Nous fournissons un support continu et la maintenance pour vos solutions technologiques",

    // About section
    "about.title": "À Propos de VianaHub",
    "about.subtitle": "Découvrez notre histoire et notre mission",
    "about.description":
      "VianaHub est une entreprise technologique fondée dans le but de transformer les idées en solutions numériques innovantes. Avec une équipe expérimentée et passionnée par la technologie, nous aidons les entreprises de toutes tailles à atteindre leurs objectifs grâce à des solutions personnalisées.",
    "about.mission.title": "Notre Mission",
    "about.mission.description":
      "Autonomiser les entreprises grâce à des solutions technologiques innovantes et personnalisées",
    "about.vision.title": "Notre Vision",
    "about.vision.description": "Être reconnu comme leader en transformation numérique et innovation technologique",
    "about.values.title": "Nos Valeurs",
    "about.values.innovation": "Innovation",
    "about.values.quality": "Qualité",
    "about.values.partnership": "Partenariat",
    "about.values.excellence": "Excellence",

    // Testimonials section
    "testimonials.title": "Ce Que Disent Nos Clients",
    "testimonials.subtitle": "Voyez comment nous avons aidé d'autres entreprises à réussir",

    // CTA section
    "cta.title": "Prêt à Commencer?",
    "cta.subtitle": "Contactez-nous aujourd'hui et discutons de la façon dont nous pouvons aider votre entreprise",
    "cta.button": "Contacter Maintenant",

    // Footer
    "footer.company": "Entreprise",
    "footer.services": "Services",
    "footer.support": "Support",
    "footer.legal": "Légal",
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions de Service",
    "footer.cookies": "Politique des Cookies",
    "footer.rights": "Tous droits réservés",
    "footer.followUs": "Suivez-Nous",

    // Common
    "common.loading": "Chargement...",
    "common.error": "Erreur",
    "common.success": "Succès",
    "common.cancel": "Annuler",
    "common.save": "Sauvegarder",
    "common.edit": "Modifier",
    "common.delete": "Supprimer",
    "common.view": "Voir",
    "common.download": "Télécharger",
    "common.upload": "Téléverser",
    "common.search": "Rechercher",
    "common.filter": "Filtrer",
    "common.sort": "Trier",
    "common.next": "Suivant",
    "common.previous": "Précédent",
    "common.close": "Fermer",
    "common.open": "Ouvrir",
    "common.yes": "Oui",
    "common.no": "Non",

    // Careers
    "careers.title": "Rejoignez Notre Équipe",
    "careers.subtitle": "Découvrez des opportunités passionnantes chez VianaHub",
    "careers.noPositions": "Aucun poste disponible pour le moment",
    "careers.apply": "Postuler",
    "careers.requirements": "Exigences",
    "careers.responsibilities": "Responsabilités",
    "careers.benefits": "Avantages",
    "careers.location": "Localisation",
    "careers.type": "Type",
    "careers.experience": "Expérience",
    "careers.salary": "Salaire",

    // Projects
    "projects.title": "Nos Projets",
    "projects.subtitle": "Voyez quelques-uns des projets que nous avons développés",
    "projects.viewProject": "Voir le Projet",
    "projects.technologies": "Technologies",
    "projects.client": "Client",
    "projects.duration": "Durée",
    "projects.team": "Équipe",

    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Articles et insights sur la technologie",
    "blog.readMore": "Lire Plus",
    "blog.author": "Auteur",
    "blog.date": "Date",
    "blog.category": "Catégorie",
    "blog.tags": "Tags",
    "blog.share": "Partager",
    "blog.comments": "Commentaires",
    "blog.relatedPosts": "Articles Connexes",

    // Forms
    "form.required": "Champ requis",
    "form.invalid": "Champ invalide",
    "form.email.invalid": "Email invalide",
    "form.phone.invalid": "Téléphone invalide",
    "form.password.weak": "Mot de passe faible",
    "form.password.mismatch": "Les mots de passe ne correspondent pas",
    "form.submit": "Soumettre",
    "form.reset": "Réinitialiser",
    "form.sending": "Envoi...",
    "form.sent": "Envoyé avec succès",
    "form.error": "Erreur lors de l'envoi",
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.about": "Über Uns",
    "nav.services": "Dienstleistungen",
    "nav.contact": "Kontakt",
    "nav.careers": "Karrieren",
    "nav.blog": "Blog",
    "nav.portfolio": "Portfolio",
    "nav.testimonials": "Testimonials",

    // Menu items
    whatWeDo: "Was Wir Tun",
    industry: "Industrie",
    security: "Sicherheit",
    engineering: "Ingenieurwesen",
    institutional: "Institutionell",

    // Menu options
    "menu.development": "Entwicklung",
    "menu.agile": "Agile Methodik",
    "menu.chatbot": "Chatbot",
    "menu.landing-pages": "Landing Pages",
    "menu.outsourcing": "Outsourcing",
    "menu.system-integration": "Systemintegration",
    "menu.railway": "Eisenbahn",
    "menu.road": "Straße",
    "menu.solar-energy": "Solarenergie",
    "menu.education": "Bildung",
    "menu.financial": "Finanzen",
    "menu.healthcare": "Gesundheitswesen",
    "menu.manufacturing": "Fertigung",
    "menu.retail": "Einzelhandel",
    "menu.government": "Regierung",
    "menu.access": "Zugriffskontrolle",
    "menu.backups": "Backups",
    "menu.cybersecurity": "Cybersicherheit",
    "menu.institutional": "Institutionell",
    "menu.about": "Über Uns",
    "menu.careers": "Karrieren",
    "menu.contact": "Kontakt",

    // Contact page
    "contact.hero.title": "Kontaktieren Sie Uns",
    "contact.hero.subtitle": "Wir sind hier, um Ihre Ideen in die Realität umzusetzen. Kontaktieren Sie uns heute.",
    "contact.form.title": "Kontaktieren Sie Uns",
    "contact.form.name": "Name",
    "contact.form.email": "E-Mail",
    "contact.form.company": "Unternehmen",
    "contact.form.message": "Nachricht",
    "contact.form.submit": "Nachricht Senden",
    "contact.info.title": "Kontaktinformationen",
    "contact.info.email": "E-Mail",
    "contact.info.phone": "Telefon",
    "contact.info.address": "Adresse",
    "contact.info.hours": "Geschäftszeiten",
    "contact.info.hours.weekdays": "Montag bis Freitag: 9:00 - 18:00",
    "contact.success.title": "Nachricht Gesendet!",
    "contact.success.message": "Danke, dass Sie uns kontaktiert haben. Wir werden bald antworten.",

    // Hero section
    "hero.title": "Wir Verwandeln Ideen in Digitale Lösungen",
    "hero.subtitle":
      "Wir sind ein Technologieunternehmen, das sich auf Softwareentwicklung, Beratung und innovative Lösungen für Ihr Unternehmen spezialisiert hat.",
    "hero.cta": "Projekt Starten",
    "hero.learnMore": "Mehr Erfahren",

    // Services section
    "services.title": "Unsere Dienstleistungen",
    "services.subtitle":
      "Wir bieten eine vollständige Palette von Technologiedienstleistungen, um Ihr Unternehmen zu stärken",
    "services.development.title": "Softwareentwicklung",
    "services.development.description":
      "Wir erstellen maßgeschneiderte Web- und Mobile-Anwendungen mit den neuesten Technologien",
    "services.consulting.title": "Technologieberatung",
    "services.consulting.description":
      "Wir helfen dabei, die beste Technologiestrategie für Ihr Unternehmen zu definieren",
    "services.integration.title": "Systemintegration",
    "services.integration.description": "Wir verbinden Ihre bestehenden Systeme für einen effizienteren Betrieb",
    "services.support.title": "Support und Wartung",
    "services.support.description": "Wir bieten kontinuierlichen Support und Wartung für Ihre Technologielösungen",

    // About section
    "about.title": "Über VianaHub",
    "about.subtitle": "Erfahren Sie mehr über unsere Geschichte und Mission",
    "about.description":
      "VianaHub ist ein Technologieunternehmen, das mit dem Ziel gegründet wurde, Ideen in innovative digitale Lösungen zu verwandeln. Mit einem erfahrenen Team, das leidenschaftlich für Technologie ist, helfen wir Unternehmen aller Größen, ihre Ziele durch maßgeschneiderte Lösungen zu erreichen.",
    "about.mission.title": "Unsere Mission",
    "about.mission.description": "Unternehmen durch innovative und maßgeschneiderte Technologielösungen stärken",
    "about.vision.title": "Unsere Vision",
    "about.vision.description":
      "Als Marktführer in der digitalen Transformation und technologischen Innovation anerkannt zu werden",
    "about.values.title": "Unsere Werte",
    "about.values.innovation": "Innovation",
    "about.values.quality": "Qualität",
    "about.values.partnership": "Partnerschaft",
    "about.values.excellence": "Exzellenz",

    // Testimonials section
    "testimonials.title": "Was Unsere Kunden Sagen",
    "testimonials.subtitle": "Sehen Sie, wie wir anderen Unternehmen zum Erfolg verholfen haben",

    // CTA section
    "cta.title": "Bereit Anzufangen?",
    "cta.subtitle": "Kontaktieren Sie uns heute und lassen Sie uns besprechen, wie wir Ihrem Unternehmen helfen können",
    "cta.button": "Jetzt Kontaktieren",

    // Footer
    "footer.company": "Unternehmen",
    "footer.services": "Dienstleistungen",
    "footer.support": "Support",
    "footer.legal": "Rechtliches",
    "footer.privacy": "Datenschutzrichtlinie",
    "footer.terms": "Nutzungsbedingungen",
    "footer.cookies": "Cookie-Richtlinie",
    "footer.rights": "Alle Rechte vorbehalten",
    "footer.followUs": "Folgen Sie Uns",

    // Common
    "common.loading": "Laden...",
    "common.error": "Fehler",
    "common.success": "Erfolg",
    "common.cancel": "Abbrechen",
    "common.save": "Speichern",
    "common.edit": "Bearbeiten",
    "common.delete": "Löschen",
    "common.view": "Ansehen",
    "common.download": "Herunterladen",
    "common.upload": "Hochladen",
    "common.search": "Suchen",
    "common.filter": "Filtern",
    "common.sort": "Sortieren",
    "common.next": "Weiter",
    "common.previous": "Zurück",
    "common.close": "Schließen",
    "common.open": "Öffnen",
    "common.yes": "Ja",
    "common.no": "Nein",

    // Careers
    "careers.title": "Treten Sie Unserem Team Bei",
    "careers.subtitle": "Entdecken Sie aufregende Möglichkeiten bei VianaHub",
    "careers.noPositions": "Derzeit keine Stellen verfügbar",
    "careers.apply": "Bewerben",
    "careers.requirements": "Anforderungen",
    "careers.responsibilities": "Verantwortlichkeiten",
    "careers.benefits": "Vorteile",
    "careers.location": "Standort",
    "careers.type": "Typ",
    "careers.experience": "Erfahrung",
    "careers.salary": "Gehalt",

    // Projects
    "projects.title": "Unsere Projekte",
    "projects.subtitle": "Sehen Sie einige der Projekte, die wir entwickelt haben",
    "projects.viewProject": "Projekt Ansehen",
    "projects.technologies": "Technologien",
    "projects.client": "Kunde",
    "projects.duration": "Dauer",
    "projects.team": "Team",

    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Artikel und Einblicke über Technologie",
    "blog.readMore": "Mehr Lesen",
    "blog.author": "Autor",
    "blog.date": "Datum",
    "blog.category": "Kategorie",
    "blog.tags": "Tags",
    "blog.share": "Teilen",
    "blog.comments": "Kommentare",
    "blog.relatedPosts": "Verwandte Beiträge",

    // Forms
    "form.required": "Pflichtfeld",
    "form.invalid": "Ungültiges Feld",
    "form.email.invalid": "Ungültige E-Mail",
    "form.phone.invalid": "Ungültige Telefonnummer",
    "form.password.weak": "Schwaches Passwort",
    "form.password.mismatch": "Passwörter stimmen nicht überein",
    "form.submit": "Absenden",
    "form.reset": "Zurücksetzen",
    "form.sending": "Senden...",
    "form.sent": "Erfolgreich gesendet",
    "form.error": "Fehler beim Senden",
  },
}

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
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
