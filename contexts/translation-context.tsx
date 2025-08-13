"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "pt" | "en" | "es" | "fr" | "de"

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  getMetadata: (page: string) => any
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

const translations = {
  pt: {
    // Navigation
    "nav.whatWeDo": "O Que Fazemos",
    "nav.whatWeDo.development": "Desenvolvimento",
    "nav.whatWeDo.agile": "Metodologia Ágil",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.whatWeDo.outsourcing": "Outsourcing",
    "nav.whatWeDo.landingPages": "Landing Pages",
    "nav.whatWeDo.systemIntegration": "Integração de Sistemas",
    "nav.industry": "Indústrias",
    "nav.industry.healthcare": "Saúde",
    "nav.industry.financial": "Financeiro",
    "nav.industry.education": "Educação",
    "nav.industry.retail": "Retalho",
    "nav.industry.manufacturing": "Manufatura",
    "nav.industry.government": "Governo",
    "nav.security": "Segurança",
    "nav.security.cyberSecurity": "Cibersegurança",
    "nav.security.access": "Controlo de Acesso",
    "nav.security.backups": "Backups",
    "nav.institutional": "Institucional",
    "nav.institutional.about": "Sobre Nós",
    "nav.institutional.careers": "Carreiras",
    "nav.contact": "Contacto",
    "nav.engineering": "Engenharia",
    "nav.engineering.railway": "Ferroviário",
    "nav.engineering.road": "Rodoviário",
    "nav.engineering.solarEnergy": "Energia Solar",

    // Footer
    "footer.description":
      "Transformamos ideias em soluções digitais inovadoras. Desenvolvimento de software, consultoria tecnológica e soluções personalizadas para o seu negócio.",
    "footer.services": "Serviços",
    "footer.industries": "Indústrias",
    "footer.contact": "Contacto",
    "footer.rights": "Todos os direitos reservados.",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Serviço",

    // Home Page
    "home.hero.title": "Transformamos Ideias em Soluções Digitais Inovadoras",
    "home.hero.subtitle":
      "Desenvolvimento de software, consultoria tecnológica e soluções personalizadas para impulsionar o seu negócio no mundo digital.",
    "home.hero.cta": "Começar Projeto",
    "home.hero.learnMore": "Saber Mais",

    // About Page
    "about.hero.title": "Sobre a VianaHub",
    "about.hero.subtitle": "Conheça a nossa história, missão e a equipa que torna tudo possível",
    "about.mission.title": "A Nossa Missão",
    "about.mission.description":
      "Capacitar empresas através de soluções tecnológicas inovadoras que impulsionam o crescimento e a eficiência.",
    "about.vision.title": "A Nossa Visão",
    "about.vision.description":
      "Ser a empresa de referência em transformação digital, criando um futuro onde a tecnologia serve verdadeiramente as pessoas.",
    "about.values.title": "Os Nossos Valores",
    "about.values.innovation": "Inovação",
    "about.values.innovation.description": "Procuramos constantemente novas formas de resolver problemas complexos.",
    "about.values.quality": "Qualidade",
    "about.values.quality.description": "Comprometemo-nos com a excelência em cada projeto que desenvolvemos.",
    "about.values.collaboration": "Colaboração",
    "about.values.collaboration.description":
      "Trabalhamos em estreita parceria com os nossos clientes para alcançar o sucesso.",
    "about.team.title": "A Nossa Equipa",
    "about.team.subtitle": "Conheça os profissionais que fazem a diferença",

    // Contact Page
    "contact.hero.title": "Entre em Contacto",
    "contact.hero.subtitle": "Estamos aqui para ajudar a transformar as suas ideias em realidade",
    "contact.form.title": "Envie-nos uma Mensagem",
    "contact.form.name": "Nome",
    "contact.form.email": "Email",
    "contact.form.phone": "Telefone",
    "contact.form.company": "Empresa",
    "contact.form.subject": "Assunto",
    "contact.form.message": "Mensagem",
    "contact.form.send": "Enviar Mensagem",
    "contact.form.sending": "A enviar...",
    "contact.info.title": "Informações de Contacto",
    "contact.info.address": "Morada",
    "contact.info.phone": "Telefone",
    "contact.info.email": "Email",
    "contact.info.hours": "Horário de Funcionamento",
    "contact.info.hours.weekdays": "Segunda a Sexta: 9:00 - 18:00",
    "contact.info.hours.weekend": "Sábado e Domingo: Fechado",

    // Careers Page
    "careers.hero.title": "Junte-se à Nossa Equipa",
    "careers.hero.subtitle": "Descubra oportunidades emocionantes para crescer connosco",
    "careers.why.title": "Porquê Trabalhar Connosco?",
    "careers.why.growth": "Crescimento Profissional",
    "careers.why.growth.description": "Oferecemos oportunidades contínuas de aprendizagem e desenvolvimento.",
    "careers.why.innovation": "Ambiente Inovador",
    "careers.why.innovation.description": "Trabalhe com as mais recentes tecnologias e metodologias.",
    "careers.why.balance": "Equilíbrio Vida-Trabalho",
    "careers.why.balance.description": "Valorizamos o bem-estar e a flexibilidade dos nossos colaboradores.",
    "careers.positions.title": "Posições Abertas",
    "careers.positions.developer": "Desenvolvedor Full-Stack",
    "careers.positions.developer.description":
      "Procuramos um desenvolvedor experiente em React, Node.js e bases de dados.",
    "careers.positions.designer": "Designer UX/UI",
    "careers.positions.designer.description": "Junte-se à nossa equipa para criar experiências digitais excepcionais.",
    "careers.positions.manager": "Gestor de Projeto",
    "careers.positions.manager.description": "Lidere projetos tecnológicos desafiantes do início ao fim.",
    "careers.apply": "Candidatar-se",
    "careers.form.title": "Candidatura",
    "careers.form.position": "Posição",
    "careers.form.name": "Nome Completo",
    "careers.form.email": "Email",
    "careers.form.phone": "Telefone",
    "careers.form.experience": "Anos de Experiência",
    "careers.form.cv": "Curriculum Vitae",
    "careers.form.cover": "Carta de Apresentação",
    "careers.form.submit": "Enviar Candidatura",
    "careers.form.submitting": "A enviar...",

    // Engineering Pages
    "engineering.railway.hero.title": "Engenharia Ferroviária",
    "engineering.railway.hero.subtitle": "Soluções especializadas para o setor ferroviário",
    "engineering.road.hero.title": "Engenharia Rodoviária",
    "engineering.road.hero.subtitle": "Projetos rodoviários completos",
    "engineering.solarEnergy.hero.title": "Energia Solar",
    "engineering.solarEnergy.hero.subtitle": "Soluções sustentáveis em energia solar",
  },
  en: {
    // Navigation
    "nav.whatWeDo": "What We Do",
    "nav.whatWeDo.development": "Development",
    "nav.whatWeDo.agile": "Agile Methodology",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.whatWeDo.outsourcing": "Outsourcing",
    "nav.whatWeDo.landingPages": "Landing Pages",
    "nav.whatWeDo.systemIntegration": "System Integration",
    "nav.industry": "Industries",
    "nav.industry.healthcare": "Healthcare",
    "nav.industry.financial": "Financial",
    "nav.industry.education": "Education",
    "nav.industry.retail": "Retail",
    "nav.industry.manufacturing": "Manufacturing",
    "nav.industry.government": "Government",
    "nav.security": "Security",
    "nav.security.cyberSecurity": "Cybersecurity",
    "nav.security.access": "Access Control",
    "nav.security.backups": "Backups",
    "nav.institutional": "Institutional",
    "nav.institutional.about": "About Us",
    "nav.institutional.careers": "Careers",
    "nav.contact": "Contact",
    "nav.engineering": "Engineering",
    "nav.engineering.railway": "Railway",
    "nav.engineering.road": "Road",
    "nav.engineering.solarEnergy": "Solar Energy",

    // Footer
    "footer.description":
      "We transform ideas into innovative digital solutions. Software development, technology consulting and customized solutions for your business.",
    "footer.services": "Services",
    "footer.industries": "Industries",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // Home Page
    "home.hero.title": "We Transform Ideas into Innovative Digital Solutions",
    "home.hero.subtitle":
      "Software development, technology consulting and customized solutions to boost your business in the digital world.",
    "home.hero.cta": "Start Project",
    "home.hero.learnMore": "Learn More",

    // About Page
    "about.hero.title": "About VianaHub",
    "about.hero.subtitle": "Learn about our story, mission and the team that makes it all possible",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "Empower companies through innovative technological solutions that drive growth and efficiency.",
    "about.vision.title": "Our Vision",
    "about.vision.description":
      "To be the reference company in digital transformation, creating a future where technology truly serves people.",
    "about.values.title": "Our Values",
    "about.values.innovation": "Innovation",
    "about.values.innovation.description": "We constantly seek new ways to solve complex problems.",
    "about.values.quality": "Quality",
    "about.values.quality.description": "We commit to excellence in every project we develop.",
    "about.values.collaboration": "Collaboration",
    "about.values.collaboration.description": "We work in close partnership with our clients to achieve success.",
    "about.team.title": "Our Team",
    "about.team.subtitle": "Meet the professionals who make the difference",

    // Contact Page
    "contact.hero.title": "Get in Touch",
    "contact.hero.subtitle": "We're here to help transform your ideas into reality",
    "contact.form.title": "Send us a Message",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.company": "Company",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.info.title": "Contact Information",
    "contact.info.address": "Address",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.hours": "Business Hours",
    "contact.info.hours.weekdays": "Monday to Friday: 9:00 AM - 6:00 PM",
    "contact.info.hours.weekend": "Saturday and Sunday: Closed",

    // Careers Page
    "careers.hero.title": "Join Our Team",
    "careers.hero.subtitle": "Discover exciting opportunities to grow with us",
    "careers.why.title": "Why Work With Us?",
    "careers.why.growth": "Professional Growth",
    "careers.why.growth.description": "We offer continuous learning and development opportunities.",
    "careers.why.innovation": "Innovative Environment",
    "careers.why.innovation.description": "Work with the latest technologies and methodologies.",
    "careers.why.balance": "Work-Life Balance",
    "careers.why.balance.description": "We value the well-being and flexibility of our employees.",
    "careers.positions.title": "Open Positions",
    "careers.positions.developer": "Full-Stack Developer",
    "careers.positions.developer.description":
      "We're looking for an experienced developer in React, Node.js and databases.",
    "careers.positions.designer": "UX/UI Designer",
    "careers.positions.designer.description": "Join our team to create exceptional digital experiences.",
    "careers.positions.manager": "Project Manager",
    "careers.positions.manager.description": "Lead challenging technology projects from start to finish.",
    "careers.apply": "Apply",
    "careers.form.title": "Application",
    "careers.form.position": "Position",
    "careers.form.name": "Full Name",
    "careers.form.email": "Email",
    "careers.form.phone": "Phone",
    "careers.form.experience": "Years of Experience",
    "careers.form.cv": "Resume",
    "careers.form.cover": "Cover Letter",
    "careers.form.submit": "Submit Application",
    "careers.form.submitting": "Submitting...",

    // Engineering Pages
    "engineering.railway.hero.title": "Railway Engineering",
    "engineering.railway.hero.subtitle": "Specialized solutions for the railway sector",
    "engineering.road.hero.title": "Road Engineering",
    "engineering.road.hero.subtitle": "Complete road projects",
    "engineering.solarEnergy.hero.title": "Solar Energy",
    "engineering.solarEnergy.hero.subtitle": "Sustainable solar energy solutions",
  },
  es: {
    // Navigation
    "nav.whatWeDo": "Qué Hacemos",
    "nav.whatWeDo.development": "Desarrollo",
    "nav.whatWeDo.agile": "Metodología Ágil",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.whatWeDo.outsourcing": "Outsourcing",
    "nav.whatWeDo.landingPages": "Landing Pages",
    "nav.whatWeDo.systemIntegration": "Integración de Sistemas",
    "nav.industry": "Industrias",
    "nav.industry.healthcare": "Salud",
    "nav.industry.financial": "Financiero",
    "nav.industry.education": "Educación",
    "nav.industry.retail": "Retail",
    "nav.industry.manufacturing": "Manufactura",
    "nav.industry.government": "Gobierno",
    "nav.security": "Seguridad",
    "nav.security.cyberSecurity": "Ciberseguridad",
    "nav.security.access": "Control de Acceso",
    "nav.security.backups": "Copias de Seguridad",
    "nav.institutional": "Institucional",
    "nav.institutional.about": "Sobre Nosotros",
    "nav.institutional.careers": "Carreras",
    "nav.contact": "Contacto",
    "nav.engineering": "Ingeniería",
    "nav.engineering.railway": "Ferroviario",
    "nav.engineering.road": "Carreteras",
    "nav.engineering.solarEnergy": "Energía Solar",

    // Footer
    "footer.description":
      "Transformamos ideas en soluciones digitales innovadoras. Desarrollo de software, consultoría tecnológica y soluciones personalizadas para su negocio.",
    "footer.services": "Servicios",
    "footer.industries": "Industrias",
    "footer.contact": "Contacto",
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",

    // Home Page
    "home.hero.title": "Transformamos Ideas en Soluciones Digitales Innovadoras",
    "home.hero.subtitle":
      "Desarrollo de software, consultoría tecnológica y soluciones personalizadas para impulsar su negocio en el mundo digital.",
    "home.hero.cta": "Iniciar Proyecto",
    "home.hero.learnMore": "Saber Más",

    // About Page
    "about.hero.title": "Sobre VianaHub",
    "about.hero.subtitle": "Conoce nuestra historia, misión y el equipo que lo hace todo posible",
    "about.mission.title": "Nuestra Misión",
    "about.mission.description":
      "Empoderar empresas a través de soluciones tecnológicas innovadoras que impulsan el crecimiento y la eficiencia.",
    "about.vision.title": "Nuestra Visión",
    "about.vision.description":
      "Ser la empresa de referencia en transformación digital, creando un futuro donde la tecnología sirve verdaderamente a las personas.",
    "about.values.title": "Nuestros Valores",
    "about.values.innovation": "Innovación",
    "about.values.innovation.description": "Buscamos constantemente nuevas formas de resolver problemas complejos.",
    "about.values.quality": "Calidad",
    "about.values.quality.description": "Nos comprometemos con la excelencia en cada proyecto que desarrollamos.",
    "about.values.collaboration": "Colaboración",
    "about.values.collaboration.description":
      "Trabajamos en estrecha colaboración con nuestros clientes para lograr el éxito.",
    "about.team.title": "Nuestro Equipo",
    "about.team.subtitle": "Conoce a los profesionales que marcan la diferencia",

    // Contact Page
    "contact.hero.title": "Ponte en Contacto",
    "contact.hero.subtitle": "Estamos aquí para ayudar a transformar tus ideas en realidad",
    "contact.form.title": "Envíanos un Mensaje",
    "contact.form.name": "Nombre",
    "contact.form.email": "Email",
    "contact.form.phone": "Teléfono",
    "contact.form.company": "Empresa",
    "contact.form.subject": "Asunto",
    "contact.form.message": "Mensaje",
    "contact.form.send": "Enviar Mensaje",
    "contact.form.sending": "Enviando...",
    "contact.info.title": "Información de Contacto",
    "contact.info.address": "Dirección",
    "contact.info.phone": "Teléfono",
    "contact.info.email": "Email",
    "contact.info.hours": "Horario de Atención",
    "contact.info.hours.weekdays": "Lunes a Viernes: 9:00 - 18:00",
    "contact.info.hours.weekend": "Sábado y Domingo: Cerrado",

    // Careers Page
    "careers.hero.title": "Únete a Nuestro Equipo",
    "careers.hero.subtitle": "Descubre oportunidades emocionantes para crecer con nosotros",
    "careers.why.title": "¿Por Qué Trabajar Con Nosotros?",
    "careers.why.growth": "Crecimiento Profesional",
    "careers.why.growth.description": "Ofrecemos oportunidades continuas de aprendizaje y desarrollo.",
    "careers.why.innovation": "Ambiente Innovador",
    "careers.why.innovation.description": "Trabaja con las últimas tecnologías y metodologías.",
    "careers.why.balance": "Equilibrio Vida-Trabajo",
    "careers.why.balance.description": "Valoramos el bienestar y la flexibilidad de nuestros empleados.",
    "careers.positions.title": "Posiciones Abiertas",
    "careers.positions.developer": "Desarrollador Full-Stack",
    "careers.positions.developer.description":
      "Buscamos un desarrollador experimentado en React, Node.js y bases de datos.",
    "careers.positions.designer": "Diseñador UX/UI",
    "careers.positions.designer.description": "Únete a nuestro equipo para crear experiencias digitales excepcionales.",
    "careers.positions.manager": "Gerente de Proyecto",
    "careers.positions.manager.description": "Lidera proyectos tecnológicos desafiantes de principio a fin.",
    "careers.apply": "Aplicar",
    "careers.form.title": "Aplicación",
    "careers.form.position": "Posición",
    "careers.form.name": "Nombre Completo",
    "careers.form.email": "Email",
    "careers.form.phone": "Teléfono",
    "careers.form.experience": "Años de Experiencia",
    "careers.form.cv": "Currículum",
    "careers.form.cover": "Carta de Presentación",
    "careers.form.submit": "Enviar Aplicación",
    "careers.form.submitting": "Enviando...",

    // Engineering Pages
    "engineering.railway.hero.title": "Ingeniería Ferroviaria",
    "engineering.railway.hero.subtitle": "Soluciones especializadas para el sector ferroviario",
    "engineering.road.hero.title": "Ingeniería de Carreteras",
    "engineering.road.hero.subtitle": "Proyectos de carreteras completos",
    "engineering.solarEnergy.hero.title": "Energía Solar",
    "engineering.solarEnergy.hero.subtitle": "Soluciones sostenibles de energía solar",
  },
  fr: {
    // Navigation
    "nav.whatWeDo": "Ce Que Nous Faisons",
    "nav.whatWeDo.development": "Développement",
    "nav.whatWeDo.agile": "Méthodologie Agile",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.whatWeDo.outsourcing": "Externalisation",
    "nav.whatWeDo.landingPages": "Pages d'Atterrissage",
    "nav.whatWeDo.systemIntegration": "Intégration de Systèmes",
    "nav.industry": "Industries",
    "nav.industry.healthcare": "Santé",
    "nav.industry.financial": "Financier",
    "nav.industry.education": "Éducation",
    "nav.industry.retail": "Commerce de Détail",
    "nav.industry.manufacturing": "Fabrication",
    "nav.industry.government": "Gouvernement",
    "nav.security": "Sécurité",
    "nav.security.cyberSecurity": "Cybersécurité",
    "nav.security.access": "Contrôle d'Accès",
    "nav.security.backups": "Sauvegardes",
    "nav.institutional": "Institutionnel",
    "nav.institutional.about": "À Propos",
    "nav.institutional.careers": "Carrières",
    "nav.contact": "Contact",
    "nav.engineering": "Ingénierie",
    "nav.engineering.railway": "Ferroviaire",
    "nav.engineering.road": "Routier",
    "nav.engineering.solarEnergy": "Énergie Solaire",

    // Footer
    "footer.description":
      "Nous transformons les idées en solutions numériques innovantes. Développement de logiciels, conseil technologique et solutions personnalisées pour votre entreprise.",
    "footer.services": "Services",
    "footer.industries": "Industries",
    "footer.contact": "Contact",
    "footer.rights": "Tous droits réservés.",
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions de Service",

    // Home Page
    "home.hero.title": "Nous Transformons les Idées en Solutions Numériques Innovantes",
    "home.hero.subtitle":
      "Développement de logiciels, conseil technologique et solutions personnalisées pour propulser votre entreprise dans le monde numérique.",
    "home.hero.cta": "Commencer le Projet",
    "home.hero.learnMore": "En Savoir Plus",

    // About Page
    "about.hero.title": "À Propos de VianaHub",
    "about.hero.subtitle": "Découvrez notre histoire, notre mission et l'équipe qui rend tout possible",
    "about.mission.title": "Notre Mission",
    "about.mission.description":
      "Autonomiser les entreprises grâce à des solutions technologiques innovantes qui stimulent la croissance et l'efficacité.",
    "about.vision.title": "Notre Vision",
    "about.vision.description":
      "Être l'entreprise de référence en transformation numérique, créant un avenir où la technologie sert véritablement les gens.",
    "about.values.title": "Nos Valeurs",
    "about.values.innovation": "Innovation",
    "about.values.innovation.description":
      "Nous cherchons constamment de nouvelles façons de résoudre des problèmes complexes.",
    "about.values.quality": "Qualité",
    "about.values.quality.description": "Nous nous engageons à l'excellence dans chaque projet que nous développons.",
    "about.values.collaboration": "Collaboration",
    "about.values.collaboration.description":
      "Nous travaillons en partenariat étroit avec nos clients pour atteindre le succès.",
    "about.team.title": "Notre Équipe",
    "about.team.subtitle": "Rencontrez les professionnels qui font la différence",

    // Contact Page
    "contact.hero.title": "Entrez en Contact",
    "contact.hero.subtitle": "Nous sommes là pour aider à transformer vos idées en réalité",
    "contact.form.title": "Envoyez-nous un Message",
    "contact.form.name": "Nom",
    "contact.form.email": "Email",
    "contact.form.phone": "Téléphone",
    "contact.form.company": "Entreprise",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Message",
    "contact.form.send": "Envoyer le Message",
    "contact.form.sending": "Envoi en cours...",
    "contact.info.title": "Informations de Contact",
    "contact.info.address": "Adresse",
    "contact.info.phone": "Téléphone",
    "contact.info.email": "Email",
    "contact.info.hours": "Heures d'Ouverture",
    "contact.info.hours.weekdays": "Lundi au Vendredi: 9h00 - 18h00",
    "contact.info.hours.weekend": "Samedi et Dimanche: Fermé",

    // Careers Page
    "careers.hero.title": "Rejoignez Notre Équipe",
    "careers.hero.subtitle": "Découvrez des opportunités passionnantes pour grandir avec nous",
    "careers.why.title": "Pourquoi Travailler Avec Nous?",
    "careers.why.growth": "Croissance Professionnelle",
    "careers.why.growth.description": "Nous offrons des opportunités continues d'apprentissage et de développement.",
    "careers.why.innovation": "Environnement Innovant",
    "careers.why.innovation.description": "Travaillez avec les dernières technologies et méthodologies.",
    "careers.why.balance": "Équilibre Vie-Travail",
    "careers.why.balance.description": "Nous valorisons le bien-être et la flexibilité de nos employés.",
    "careers.positions.title": "Postes Ouverts",
    "careers.positions.developer": "Développeur Full-Stack",
    "careers.positions.developer.description":
      "Nous recherchons un développeur expérimenté en React, Node.js et bases de données.",
    "careers.positions.designer": "Designer UX/UI",
    "careers.positions.designer.description":
      "Rejoignez notre équipe pour créer des expériences numériques exceptionnelles.",
    "careers.positions.manager": "Chef de Projet",
    "careers.positions.manager.description": "Dirigez des projets technologiques stimulants du début à la fin.",
    "careers.apply": "Postuler",
    "careers.form.title": "Candidature",
    "careers.form.position": "Poste",
    "careers.form.name": "Nom Complet",
    "careers.form.email": "Email",
    "careers.form.phone": "Téléphone",
    "careers.form.experience": "Années d'Expérience",
    "careers.form.cv": "CV",
    "careers.form.cover": "Lettre de Motivation",
    "careers.form.submit": "Soumettre la Candidature",
    "careers.form.submitting": "Soumission en cours...",

    // Engineering Pages
    "engineering.railway.hero.title": "Ingénierie Ferroviaire",
    "engineering.railway.hero.subtitle": "Solutions spécialisées pour le secteur ferroviaire",
    "engineering.road.hero.title": "Ingénierie Routière",
    "engineering.road.hero.subtitle": "Projets routiers complets",
    "engineering.solarEnergy.hero.title": "Énergie Solaire",
    "engineering.solarEnergy.hero.subtitle": "Solutions durables d'énergie solaire",
  },
  de: {
    // Navigation
    "nav.whatWeDo": "Was Wir Tun",
    "nav.whatWeDo.development": "Entwicklung",
    "nav.whatWeDo.agile": "Agile Methodik",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.whatWeDo.outsourcing": "Outsourcing",
    "nav.whatWeDo.landingPages": "Landing Pages",
    "nav.whatWeDo.systemIntegration": "Systemintegration",
    "nav.industry": "Branchen",
    "nav.industry.healthcare": "Gesundheitswesen",
    "nav.industry.financial": "Finanzwesen",
    "nav.industry.education": "Bildung",
    "nav.industry.retail": "Einzelhandel",
    "nav.industry.manufacturing": "Fertigung",
    "nav.industry.government": "Regierung",
    "nav.security": "Sicherheit",
    "nav.security.cyberSecurity": "Cybersicherheit",
    "nav.security.access": "Zugriffskontrolle",
    "nav.security.backups": "Backups",
    "nav.institutional": "Institutionell",
    "nav.institutional.about": "Über Uns",
    "nav.institutional.careers": "Karrieren",
    "nav.contact": "Kontakt",
    "nav.engineering": "Ingenieurwesen",
    "nav.engineering.railway": "Eisenbahn",
    "nav.engineering.road": "Straße",
    "nav.engineering.solarEnergy": "Solarenergie",

    // Footer
    "footer.description":
      "Wir verwandeln Ideen in innovative digitale Lösungen. Softwareentwicklung, Technologieberatung und maßgeschneiderte Lösungen für Ihr Unternehmen.",
    "footer.services": "Dienstleistungen",
    "footer.industries": "Branchen",
    "footer.contact": "Kontakt",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.privacy": "Datenschutzrichtlinie",
    "footer.terms": "Nutzungsbedingungen",

    // Home Page
    "home.hero.title": "Wir Verwandeln Ideen in Innovative Digitale Lösungen",
    "home.hero.subtitle":
      "Softwareentwicklung, Technologieberatung und maßgeschneiderte Lösungen, um Ihr Unternehmen in der digitalen Welt voranzubringen.",
    "home.hero.cta": "Projekt Starten",
    "home.hero.learnMore": "Mehr Erfahren",

    // About Page
    "about.hero.title": "Über VianaHub",
    "about.hero.subtitle": "Erfahren Sie mehr über unsere Geschichte, Mission und das Team, das alles möglich macht",
    "about.mission.title": "Unsere Mission",
    "about.mission.description":
      "Unternehmen durch innovative technologische Lösungen zu stärken, die Wachstum und Effizienz fördern.",
    "about.vision.title": "Unsere Vision",
    "about.vision.description":
      "Das Referenzunternehmen für digitale Transformation zu sein und eine Zukunft zu schaffen, in der Technologie den Menschen wirklich dient.",
    "about.values.title": "Unsere Werte",
    "about.values.innovation": "Innovation",
    "about.values.innovation.description": "Wir suchen ständig nach neuen Wegen, komplexe Probleme zu lösen.",
    "about.values.quality": "Qualität",
    "about.values.quality.description": "Wir verpflichten uns zur Exzellenz in jedem Projekt, das wir entwickeln.",
    "about.values.collaboration": "Zusammenarbeit",
    "about.values.collaboration.description":
      "Wir arbeiten in enger Partnerschaft mit unseren Kunden, um Erfolg zu erzielen.",
    "about.team.title": "Unser Team",
    "about.team.subtitle": "Lernen Sie die Fachleute kennen, die den Unterschied machen",

    // Contact Page
    "contact.hero.title": "Kontakt Aufnehmen",
    "contact.hero.subtitle": "Wir sind hier, um Ihre Ideen in die Realität umzusetzen",
    "contact.form.title": "Senden Sie uns eine Nachricht",
    "contact.form.name": "Name",
    "contact.form.email": "E-Mail",
    "contact.form.phone": "Telefon",
    "contact.form.company": "Unternehmen",
    "contact.form.subject": "Betreff",
    "contact.form.message": "Nachricht",
    "contact.form.send": "Nachricht Senden",
    "contact.form.sending": "Wird gesendet...",
    "contact.info.title": "Kontaktinformationen",
    "contact.info.address": "Adresse",
    "contact.info.phone": "Telefon",
    "contact.info.email": "E-Mail",
    "contact.info.hours": "Geschäftszeiten",
    "contact.info.hours.weekdays": "Montag bis Freitag: 9:00 - 18:00",
    "contact.info.hours.weekend": "Samstag und Sonntag: Geschlossen",

    // Careers Page
    "careers.hero.title": "Werden Sie Teil Unseres Teams",
    "careers.hero.subtitle": "Entdecken Sie aufregende Möglichkeiten, mit uns zu wachsen",
    "careers.why.title": "Warum Bei Uns Arbeiten?",
    "careers.why.growth": "Berufliche Entwicklung",
    "careers.why.growth.description": "Wir bieten kontinuierliche Lern- und Entwicklungsmöglichkeiten.",
    "careers.why.innovation": "Innovatives Umfeld",
    "careers.why.innovation.description": "Arbeiten Sie mit den neuesten Technologien und Methoden.",
    "careers.why.balance": "Work-Life-Balance",
    "careers.why.balance.description": "Wir schätzen das Wohlbefinden und die Flexibilität unserer Mitarbeiter.",
    "careers.positions.title": "Offene Stellen",
    "careers.positions.developer": "Full-Stack-Entwickler",
    "careers.positions.developer.description":
      "Wir suchen einen erfahrenen Entwickler in React, Node.js und Datenbanken.",
    "careers.positions.designer": "UX/UI-Designer",
    "careers.positions.designer.description":
      "Werden Sie Teil unseres Teams, um außergewöhnliche digitale Erfahrungen zu schaffen.",
    "careers.positions.manager": "Projektmanager",
    "careers.positions.manager.description": "Leiten Sie herausfordernde Technologieprojekte von Anfang bis Ende.",
    "careers.apply": "Bewerben",
    "careers.form.title": "Bewerbung",
    "careers.form.position": "Position",
    "careers.form.name": "Vollständiger Name",
    "careers.form.email": "E-Mail",
    "careers.form.phone": "Telefon",
    "careers.form.experience": "Jahre Erfahrung",
    "careers.form.cv": "Lebenslauf",
    "careers.form.cover": "Anschreiben",
    "careers.form.submit": "Bewerbung Senden",
    "careers.form.submitting": "Wird gesendet...",

    // Engineering Pages
    "engineering.railway.hero.title": "Eisenbahn-Ingenieurwesen",
    "engineering.railway.hero.subtitle": "Spezialisierte Lösungen für den Eisenbahnsektor",
    "engineering.road.hero.title": "Straßenbau-Ingenieurwesen",
    "engineering.road.hero.subtitle": "Komplette Straßenbauprojekte",
    "engineering.solarEnergy.hero.title": "Solarenergie",
    "engineering.solarEnergy.hero.subtitle": "Nachhaltige Solarenergielösungen",
  },
}

const metadata = {
  pt: {
    contact: {
      title: "Contato - VianaHub",
      description:
        "Entre em contato conosco para discutir seu próximo projeto. Nossa equipe está pronta para transformar suas ideias em realidade.",
      keywords: "contato, suporte, atendimento, consultoria, desenvolvimento",
      openGraph: {
        title: "Contato - VianaHub",
        description: "Entre em contato conosco para discutir seu próximo projeto",
        type: "website",
        locale: "pt_PT",
      },
    },
    railway: {
      title: "Engenharia Ferroviária - VianaHub",
      description:
        "Soluções especializadas para o setor ferroviário. Projetos de infraestrutura, sinalização e sistemas de controle.",
      keywords: "engenharia ferroviária, infraestrutura, sinalização, controle",
      openGraph: {
        title: "Engenharia Ferroviária - VianaHub",
        description: "Soluções especializadas para o setor ferroviário",
        type: "website",
        locale: "pt_PT",
      },
    },
    road: {
      title: "Engenharia Rodoviária - VianaHub",
      description: "Projetos rodoviários completos. Planejamento, construção e manutenção de rodovias e vias urbanas.",
      keywords: "engenharia rodoviária, rodovias, planejamento, construção",
      openGraph: {
        title: "Engenharia Rodoviária - VianaHub",
        description: "Projetos rodoviários completos",
        type: "website",
        locale: "pt_PT",
      },
    },
    solarEnergy: {
      title: "Energia Solar - VianaHub",
      description:
        "Soluções sustentáveis em energia solar. Painéis fotovoltaicos, sistemas de armazenamento e monitoramento.",
      keywords: "energia solar, painéis fotovoltaicos, sustentabilidade, energia renovável",
      openGraph: {
        title: "Energia Solar - VianaHub",
        description: "Soluções sustentáveis em energia solar",
        type: "website",
        locale: "pt_PT",
      },
    },
  },
  en: {
    contact: {
      title: "Contact - VianaHub",
      description:
        "Get in touch with us to discuss your next project. Our team is ready to transform your ideas into reality.",
      keywords: "contact, support, service, consulting, development",
      openGraph: {
        title: "Contact - VianaHub",
        description: "Get in touch with us to discuss your next project",
        type: "website",
        locale: "en_US",
      },
    },
    railway: {
      title: "Railway Engineering - VianaHub",
      description:
        "Specialized solutions for the railway sector. Infrastructure projects, signaling and control systems.",
      keywords: "railway engineering, infrastructure, signaling, control",
      openGraph: {
        title: "Railway Engineering - VianaHub",
        description: "Specialized solutions for the railway sector",
        type: "website",
        locale: "en_US",
      },
    },
    road: {
      title: "Road Engineering - VianaHub",
      description: "Complete road projects. Planning, construction and maintenance of highways and urban roads.",
      keywords: "road engineering, highways, planning, construction",
      openGraph: {
        title: "Road Engineering - VianaHub",
        description: "Complete road projects",
        type: "website",
        locale: "en_US",
      },
    },
    solarEnergy: {
      title: "Solar Energy - VianaHub",
      description: "Sustainable solar energy solutions. Photovoltaic panels, storage and monitoring systems.",
      keywords: "solar energy, photovoltaic panels, sustainability, renewable energy",
      openGraph: {
        title: "Solar Energy - VianaHub",
        description: "Sustainable solar energy solutions",
        type: "website",
        locale: "en_US",
      },
    },
  },
  es: {
    contact: {
      title: "Contacto - VianaHub",
      description:
        "Ponte en contacto con nosotros para discutir tu próximo proyecto. Nuestro equipo está listo para transformar tus ideas en realidad.",
      keywords: "contacto, soporte, atención, consultoría, desarrollo",
      openGraph: {
        title: "Contacto - VianaHub",
        description: "Ponte en contacto con nosotros para discutir tu próximo proyecto",
        type: "website",
        locale: "es_ES",
      },
    },
    railway: {
      title: "Ingeniería Ferroviaria - VianaHub",
      description:
        "Soluciones especializadas para el sector ferroviario. Proyectos de infraestructura, señalización y sistemas de control.",
      keywords: "ingeniería ferroviaria, infraestructura, señalización, control",
      openGraph: {
        title: "Ingeniería Ferroviaria - VianaHub",
        description: "Soluciones especializadas para el sector ferroviario",
        type: "website",
        locale: "es_ES",
      },
    },
    road: {
      title: "Ingeniería de Carreteras - VianaHub",
      description:
        "Proyectos de carreteras completos. Planificación, construcción y mantenimiento de autopistas y vías urbanas.",
      keywords: "ingeniería de carreteras, autopistas, planificación, construcción",
      openGraph: {
        title: "Ingeniería de Carreteras - VianaHub",
        description: "Proyectos de carreteras completos",
        type: "website",
        locale: "es_ES",
      },
    },
    solarEnergy: {
      title: "Energía Solar - VianaHub",
      description:
        "Soluciones sostenibles de energía solar. Paneles fotovoltaicos, sistemas de almacenamiento y monitoreo.",
      keywords: "energía solar, paneles fotovoltaicos, sostenibilidad, energía renovable",
      openGraph: {
        title: "Energía Solar - VianaHub",
        description: "Soluciones sostenibles de energía solar",
        type: "website",
        locale: "es_ES",
      },
    },
  },
  fr: {
    contact: {
      title: "Contact - VianaHub",
      description:
        "Contactez-nous pour discuter de votre prochain projet. Notre équipe est prête à transformer vos idées en réalité.",
      keywords: "contact, support, service, conseil, développement",
      openGraph: {
        title: "Contact - VianaHub",
        description: "Contactez-nous pour discuter de votre prochain projet",
        type: "website",
        locale: "fr_FR",
      },
    },
    railway: {
      title: "Ingénierie Ferroviaire - VianaHub",
      description:
        "Solutions spécialisées pour le secteur ferroviaire. Projets d'infrastructure, signalisation et systèmes de contrôle.",
      keywords: "ingénierie ferroviaire, infrastructure, signalisation, contrôle",
      openGraph: {
        title: "Ingénierie Ferroviaire - VianaHub",
        description: "Solutions spécialisées pour le secteur ferroviaire",
        type: "website",
        locale: "fr_FR",
      },
    },
    road: {
      title: "Ingénierie Routière - VianaHub",
      description:
        "Projets routiers complets. Planification, construction et maintenance d'autoroutes et de routes urbaines.",
      keywords: "ingénierie routière, autoroutes, planification, construction",
      openGraph: {
        title: "Ingénierie Routière - VianaHub",
        description: "Projets routiers complets",
        type: "website",
        locale: "fr_FR",
      },
    },
    solarEnergy: {
      title: "Énergie Solaire - VianaHub",
      description:
        "Solutions durables d'énergie solaire. Panneaux photovoltaïques, systèmes de stockage et de surveillance.",
      keywords: "énergie solaire, panneaux photovoltaïques, durabilité, énergie renouvelable",
      openGraph: {
        title: "Énergie Solaire - VianaHub",
        description: "Solutions durables d'énergie solaire",
        type: "website",
        locale: "fr_FR",
      },
    },
  },
  de: {
    contact: {
      title: "Kontakt - VianaHub",
      description:
        "Kontaktieren Sie uns, um Ihr nächstes Projekt zu besprechen. Unser Team ist bereit, Ihre Ideen in die Realität umzusetzen.",
      keywords: "kontakt, support, service, beratung, entwicklung",
      openGraph: {
        title: "Kontakt - VianaHub",
        description: "Kontaktieren Sie uns, um Ihr nächstes Projekt zu besprechen",
        type: "website",
        locale: "de_DE",
      },
    },
    railway: {
      title: "Eisenbahn-Ingenieurwesen - VianaHub",
      description:
        "Spezialisierte Lösungen für den Eisenbahnsektor. Infrastrukturprojekte, Signaltechnik und Kontrollsysteme.",
      keywords: "eisenbahn-ingenieurwesen, infrastruktur, signaltechnik, kontrolle",
      openGraph: {
        title: "Eisenbahn-Ingenieurwesen - VianaHub",
        description: "Spezialisierte Lösungen für den Eisenbahnsektor",
        type: "website",
        locale: "de_DE",
      },
    },
    road: {
      title: "Straßenbau-Ingenieurwesen - VianaHub",
      description: "Komplette Straßenbauprojekte. Planung, Bau und Wartung von Autobahnen und Stadtstraßen.",
      keywords: "straßenbau-ingenieurwesen, autobahnen, planung, bau",
      openGraph: {
        title: "Straßenbau-Ingenieurwesen - VianaHub",
        description: "Komplette Straßenbauprojekte",
        type: "website",
        locale: "de_DE",
      },
    },
    solarEnergy: {
      title: "Solarenergie - VianaHub",
      description: "Nachhaltige Solarenergielösungen. Photovoltaik-Panels, Speicher- und Überwachungssysteme.",
      keywords: "solarenergie, photovoltaik-panels, nachhaltigkeit, erneuerbare energie",
      openGraph: {
        title: "Solarenergie - VianaHub",
        description: "Nachhaltige Solarenergielösungen",
        type: "website",
        locale: "de_DE",
      },
    },
  },
}

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
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

  const getMetadata = (page: string) => {
    return metadata[language]?.[page] || metadata.pt[page]
  }

  return (
    <TranslationContext.Provider value={{ language, setLanguage: handleSetLanguage, t, getMetadata }}>
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
