"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "pt" | "en" | "es" | "fr" | "de"

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pt: {
    // Navigation
    "nav.whatWeDo": "O que Fazemos",
    "nav.engineering": "Engenharia",
    "nav.security": "Segurança",
    "nav.institutional": "Institucional",
    "nav.contact": "Contacto",
    "nav.development": "Desenvolvimento",
    "nav.agile": "Metodologia Ágil",
    "nav.outsourcing": "Outsourcing",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.systemIntegration": "Integração de Sistemas",
    "nav.railway": "Ferroviário",
    "nav.road": "Rodoviário",
    "nav.solarEnergy": "Energia Solar",
    "nav.education": "Educação",
    "nav.government": "Governo",
    "nav.manufacturing": "Manufactura",
    "nav.financial": "Financeiro",
    "nav.retail": "Retalho",
    "nav.healthcare": "Saúde",
    "nav.cybersecurity": "Cibersegurança",
    "nav.backupSolutions": "Soluções de Backup",
    "nav.accessControl": "Controlo de Acesso",
    "nav.aboutUs": "Sobre Nós",
    "nav.opportunities": "Oportunidades",
    // Hero Section
    "hero.title.line1": "Soluções que",
    "hero.title.line2": "Transformam",
    "hero.title.line3": "O Seu Negócio",
    "hero.subtitle": "Desenvolvemos tecnologias inovadoras que impulsionam o crescimento do seu negócio.",
    // Services Section
    "services.title.part1": "Os Nossos",
    "services.title.part2": "Serviços",
    "services.subtitle": "Oferecemos soluções tecnológicas completas para transformar o seu negócio",
    "services.web.title": "Desenvolvimento Web",
    "services.web.description": "Criamos websites modernos e responsivos que elevam a sua presença digital",
    "services.mobile.title": "Aplicações Móveis",
    "services.mobile.description": "Desenvolvemos apps nativas e híbridas para iOS e Android",
    "services.landing.title": "Landing Pages",
    "services.landing.description": "Páginas optimizadas para conversão e geração de leads",
    "services.integration.title": "Integração de Sistemas",
    "services.integration.description": "Conectamos os seus sistemas para maior eficiência operacional",
    "services.security.title": "Segurança Digital",
    "services.security.description": "Protegemos os seus dados com as melhores práticas de segurança",
    "services.automation.title": "Automação",
    "services.automation.description": "Automatizamos processos para aumentar a produtividade",
    "services.cta": "Saber Mais",
    // Entertainment Section
    "entertainment.title": "Entretenimento",
    "entertainment.subtitle": "Divirta-se com os nossos jogos interactivos",
    "entertainment.foxGame.title": "Jogo da Raposa",
    "entertainment.foxGame.description": "Ajude a raposa a encontrar o caminho através do labirinto",
    "entertainment.foxGame.cta": "Jogar Agora",
    "entertainment.desertGame.title": "Aventura no Deserto",
    "entertainment.desertGame.description": "Explore o deserto e descubra tesouros escondidos",
    "entertainment.desertGame.cta": "Explorar",
    "entertainment.oasisGame.title": "Oásis Perdido",
    "entertainment.oasisGame.description": "Encontre o oásis perdido nesta aventura épica",
    "entertainment.oasisGame.cta": "Descobrir",
  },
  en: {
    // Navigation
    "nav.whatWeDo": "What We Do",
    "nav.engineering": "Engineering",
    "nav.security": "Security",
    "nav.institutional": "Institutional",
    "nav.contact": "Contact",
    "nav.development": "Development",
    "nav.agile": "Agile Methodology",
    "nav.outsourcing": "Outsourcing",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.systemIntegration": "System Integration",
    "nav.railway": "Railway",
    "nav.road": "Road",
    "nav.solarEnergy": "Solar Energy",
    "nav.education": "Education",
    "nav.government": "Government",
    "nav.manufacturing": "Manufacturing",
    "nav.financial": "Financial",
    "nav.retail": "Retail",
    "nav.healthcare": "Healthcare",
    "nav.cybersecurity": "Cybersecurity",
    "nav.backupSolutions": "Backup Solutions",
    "nav.accessControl": "Access Control",
    "nav.aboutUs": "About Us",
    "nav.opportunities": "Opportunities",
    // Hero Section
    "hero.title.line1": "Solutions that",
    "hero.title.line2": "Transform",
    "hero.title.line3": "Your Business",
    "hero.subtitle": "We develop innovative technologies that drive your business growth.",
    // Services Section
    "services.title.part1": "Our",
    "services.title.part2": "Services",
    "services.subtitle": "We offer complete technological solutions to transform your business",
    "services.web.title": "Web Development",
    "services.web.description": "We create modern and responsive websites that elevate your digital presence",
    "services.mobile.title": "Mobile Applications",
    "services.mobile.description": "We develop native and hybrid apps for iOS and Android",
    "services.landing.title": "Landing Pages",
    "services.landing.description": "Pages optimized for conversion and lead generation",
    "services.integration.title": "System Integration",
    "services.integration.description": "We connect your systems for greater operational efficiency",
    "services.security.title": "Digital Security",
    "services.security.description": "We protect your data with the best security practices",
    "services.automation.title": "Automation",
    "services.automation.description": "We automate processes to increase productivity",
    "services.cta": "Learn More",
    // Entertainment Section
    "entertainment.title": "Entertainment",
    "entertainment.subtitle": "Have fun with our interactive games",
    "entertainment.foxGame.title": "Fox Game",
    "entertainment.foxGame.description": "Help the fox find its way through the maze",
    "entertainment.foxGame.cta": "Play Now",
    "entertainment.desertGame.title": "Desert Adventure",
    "entertainment.desertGame.description": "Explore the desert and discover hidden treasures",
    "entertainment.desertGame.cta": "Explore",
    "entertainment.oasisGame.title": "Lost Oasis",
    "entertainment.oasisGame.description": "Find the lost oasis in this epic adventure",
    "entertainment.oasisGame.cta": "Discover",
  },
  es: {
    // Navigation
    "nav.whatWeDo": "Lo que Hacemos",
    "nav.engineering": "Ingeniería",
    "nav.security": "Seguridad",
    "nav.institutional": "Institucional",
    "nav.contact": "Contacto",
    "nav.development": "Desarrollo",
    "nav.agile": "Metodología Ágil",
    "nav.outsourcing": "Outsourcing",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.systemIntegration": "Integración de Sistemas",
    "nav.railway": "Ferroviario",
    "nav.road": "Carreteras",
    "nav.solarEnergy": "Energía Solar",
    "nav.education": "Educación",
    "nav.government": "Gobierno",
    "nav.manufacturing": "Manufactura",
    "nav.financial": "Financiero",
    "nav.retail": "Comercio",
    "nav.healthcare": "Salud",
    "nav.cybersecurity": "Ciberseguridad",
    "nav.backupSolutions": "Soluciones de Respaldo",
    "nav.accessControl": "Control de Acceso",
    "nav.aboutUs": "Sobre Nosotros",
    "nav.opportunities": "Oportunidades",
    // Hero Section
    "hero.title.line1": "Soluciones que",
    "hero.title.line2": "Transforman",
    "hero.title.line3": "Su Negocio",
    "hero.subtitle": "Desarrollamos tecnologías innovadoras que impulsan el crecimiento de su negocio.",
    // Services Section
    "services.title.part1": "Nuestros",
    "services.title.part2": "Servicios",
    "services.subtitle": "Ofrecemos soluciones tecnológicas completas para transformar su negocio",
    "services.web.title": "Desarrollo Web",
    "services.web.description": "Creamos sitios web modernos y responsivos que elevan su presencia digital",
    "services.mobile.title": "Aplicaciones Móviles",
    "services.mobile.description": "Desarrollamos apps nativas e híbridas para iOS y Android",
    "services.landing.title": "Landing Pages",
    "services.landing.description": "Páginas optimizadas para conversión y generación de leads",
    "services.integration.title": "Integración de Sistemas",
    "services.integration.description": "Conectamos sus sistemas para mayor eficiencia operacional",
    "services.security.title": "Seguridad Digital",
    "services.security.description": "Protegemos sus datos con las mejores prácticas de seguridad",
    "services.automation.title": "Automatización",
    "services.automation.description": "Automatizamos procesos para aumentar la productividad",
    "services.cta": "Saber Más",
    // Entertainment Section
    "entertainment.title": "Entretenimiento",
    "entertainment.subtitle": "Diviértete con nuestros juegos interactivos",
    "entertainment.foxGame.title": "Juego del Zorro",
    "entertainment.foxGame.description": "Ayuda al zorro a encontrar el camino a través del laberinto",
    "entertainment.foxGame.cta": "Jugar Ahora",
    "entertainment.desertGame.title": "Aventura en el Desierto",
    "entertainment.desertGame.description": "Explora el desierto y descubre tesoros ocultos",
    "entertainment.desertGame.cta": "Explorar",
    "entertainment.oasisGame.title": "Oasis Perdido",
    "entertainment.oasisGame.description": "Encuentra el oasis perdido en esta aventura épica",
    "entertainment.oasisGame.cta": "Descubrir",
  },
  fr: {
    // Navigation
    "nav.whatWeDo": "Ce que Nous Faisons",
    "nav.engineering": "Ingénierie",
    "nav.security": "Sécurité",
    "nav.institutional": "Institutionnel",
    "nav.contact": "Contact",
    "nav.development": "Développement",
    "nav.agile": "Méthodologie Agile",
    "nav.outsourcing": "Externalisation",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Pages de Destination",
    "nav.systemIntegration": "Intégration de Systèmes",
    "nav.railway": "Ferroviaire",
    "nav.road": "Routier",
    "nav.solarEnergy": "Énergie Solaire",
    "nav.education": "Éducation",
    "nav.government": "Gouvernement",
    "nav.manufacturing": "Fabrication",
    "nav.financial": "Financier",
    "nav.retail": "Commerce de Détail",
    "nav.healthcare": "Santé",
    "nav.cybersecurity": "Cybersécurité",
    "nav.backupSolutions": "Solutions de Sauvegarde",
    "nav.accessControl": "Contrôle d'Accès",
    "nav.aboutUs": "À Propos de Nous",
    "nav.opportunities": "Opportunités",
    // Hero Section
    "hero.title.line1": "Solutions qui",
    "hero.title.line2": "Transforment",
    "hero.title.line3": "Votre Entreprise",
    "hero.subtitle": "Nous développons des technologies innovantes qui stimulent la croissance de votre entreprise.",
    // Services Section
    "services.title.part1": "Nos",
    "services.title.part2": "Services",
    "services.subtitle": "Nous offrons des solutions technologiques complètes pour transformer votre entreprise",
    "services.web.title": "Développement Web",
    "services.web.description": "Nous créons des sites web modernes et responsifs qui élèvent votre présence numérique",
    "services.mobile.title": "Applications Mobiles",
    "services.mobile.description": "Nous développons des apps natives et hybrides pour iOS et Android",
    "services.landing.title": "Pages de Destination",
    "services.landing.description": "Pages optimisées pour la conversion et la génération de leads",
    "services.integration.title": "Intégration de Systèmes",
    "services.integration.description": "Nous connectons vos systèmes pour une plus grande efficacité opérationnelle",
    "services.security.title": "Sécurité Numérique",
    "services.security.description": "Nous protégeons vos données avec les meilleures pratiques de sécurité",
    "services.automation.title": "Automatisation",
    "services.automation.description": "Nous automatisons les processus pour augmenter la productivité",
    "services.cta": "En Savoir Plus",
    // Entertainment Section
    "entertainment.title": "Divertissement",
    "entertainment.subtitle": "Amusez-vous avec nos jeux interactifs",
    "entertainment.foxGame.title": "Jeu du Renard",
    "entertainment.foxGame.description": "Aidez le renard à trouver son chemin à travers le labyrinthe",
    "entertainment.foxGame.cta": "Jouer Maintenant",
    "entertainment.desertGame.title": "Aventure dans le Désert",
    "entertainment.desertGame.description": "Explorez le désert et découvrez des trésors cachés",
    "entertainment.desertGame.cta": "Explorer",
    "entertainment.oasisGame.title": "Oasis Perdue",
    "entertainment.oasisGame.description": "Trouvez l'oasis perdue dans cette aventure épique",
    "entertainment.oasisGame.cta": "Découvrir",
  },
  de: {
    // Navigation
    "nav.whatWeDo": "Was Wir Tun",
    "nav.engineering": "Ingenieurwesen",
    "nav.security": "Sicherheit",
    "nav.institutional": "Institutionell",
    "nav.contact": "Kontakt",
    "nav.development": "Entwicklung",
    "nav.agile": "Agile Methodik",
    "nav.outsourcing": "Outsourcing",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.systemIntegration": "Systemintegration",
    "nav.railway": "Eisenbahn",
    "nav.road": "Straße",
    "nav.solarEnergy": "Solarenergie",
    "nav.education": "Bildung",
    "nav.government": "Regierung",
    "nav.manufacturing": "Fertigung",
    "nav.financial": "Finanzen",
    "nav.retail": "Einzelhandel",
    "nav.healthcare": "Gesundheitswesen",
    "nav.cybersecurity": "Cybersicherheit",
    "nav.backupSolutions": "Backup-Lösungen",
    "nav.accessControl": "Zugriffskontrolle",
    "nav.aboutUs": "Über Uns",
    "nav.opportunities": "Möglichkeiten",
    // Hero Section
    "hero.title.line1": "Lösungen die",
    "hero.title.line2": "Transformieren",
    "hero.title.line3": "Ihr Unternehmen",
    "hero.subtitle": "Wir entwickeln innovative Technologien, die das Wachstum Ihres Unternehmens vorantreiben.",
    // Services Section
    "services.title.part1": "Unsere",
    "services.title.part2": "Dienstleistungen",
    "services.subtitle": "Wir bieten komplette technologische Lösungen zur Transformation Ihres Unternehmens",
    "services.web.title": "Webentwicklung",
    "services.web.description": "Wir erstellen moderne und responsive Websites, die Ihre digitale Präsenz verbessern",
    "services.mobile.title": "Mobile Anwendungen",
    "services.mobile.description": "Wir entwickeln native und hybride Apps für iOS und Android",
    "services.landing.title": "Landing Pages",
    "services.landing.description": "Für Konversion und Lead-Generierung optimierte Seiten",
    "services.integration.title": "Systemintegration",
    "services.integration.description": "Wir verbinden Ihre Systeme für größere operative Effizienz",
    "services.security.title": "Digitale Sicherheit",
    "services.security.description": "Wir schützen Ihre Daten mit den besten Sicherheitspraktiken",
    "services.automation.title": "Automatisierung",
    "services.automation.description": "Wir automatisieren Prozesse zur Steigerung der Produktivität",
    "services.cta": "Mehr Erfahren",
    // Entertainment Section
    "entertainment.title": "Unterhaltung",
    "entertainment.subtitle": "Haben Sie Spaß mit unseren interaktiven Spielen",
    "entertainment.foxGame.title": "Fuchs-Spiel",
    "entertainment.foxGame.description": "Helfen Sie dem Fuchs, seinen Weg durch das Labyrinth zu finden",
    "entertainment.foxGame.cta": "Jetzt Spielen",
    "entertainment.desertGame.title": "Wüstenabenteuer",
    "entertainment.desertGame.description": "Erkunden Sie die Wüste und entdecken Sie verborgene Schätze",
    "entertainment.desertGame.cta": "Erkunden",
    "entertainment.oasisGame.title": "Verlorene Oase",
    "entertainment.oasisGame.description": "Finden Sie die verlorene Oase in diesem epischen Abenteuer",
    "entertainment.oasisGame.cta": "Entdecken",
  },
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: ReactNode }) {
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
    return translations[language][key] || translations.pt[key] || key
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
