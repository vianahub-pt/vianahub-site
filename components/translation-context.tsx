"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "pt" | "en" | "es" | "fr" | "de"

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.whatWeDo": "O que Fazemos",
    "nav.development": "Desenvolvimento",
    "nav.agile": "Metodologia Ágil",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.outsourcing": "Outsourcing",
    "nav.systemIntegration": "Integração de Sistemas",
    "nav.industry": "Indústria",
    "nav.education": "Educação",
    "nav.financial": "Financeiro",
    "nav.government": "Governo",
    "nav.healthcare": "Saúde",
    "nav.manufacturing": "Manufatura",
    "nav.retail": "Varejo",
    "nav.security": "Segurança",
    "nav.access": "Controle de Acesso",
    "nav.backups": "Backups",
    "nav.cyberSecurity": "Cibersegurança",
    "nav.engineering": "Engenharia",
    "nav.railway": "Ferroviário",
    "nav.road": "Rodoviário",
    "nav.solarEnergy": "Energia Solar",
    "nav.institutional": "Institucional",
    "nav.about": "Sobre",
    "nav.careers": "Carreiras",
    "nav.contact": "Contato",

    // Common
    "common.loading": "Carregando...",
    "common.error": "Erro",
    "common.success": "Sucesso",
    "common.cancel": "Cancelar",
    "common.save": "Salvar",
    "common.edit": "Editar",
    "common.delete": "Excluir",
    "common.close": "Fechar",
    "common.open": "Abrir",
    "common.yes": "Sim",
    "common.no": "Não",

    // Hero Section
    "hero.title": "Transformamos Ideias em Soluções Digitais",
    "hero.subtitle":
      "Desenvolvimento de software personalizado, consultoria em TI e soluções inovadoras para impulsionar seu negócio.",
    "hero.cta": "Começar Projeto",

    // Services
    "services.title": "Nossos Serviços",
    "services.development.title": "Desenvolvimento",
    "services.development.description": "Criamos aplicações web e mobile sob medida para seu negócio.",
    "services.consulting.title": "Consultoria",
    "services.consulting.description": "Orientação especializada em tecnologia e estratégia digital.",
    "services.support.title": "Suporte",
    "services.support.description": "Manutenção e suporte técnico para suas soluções.",
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.whatWeDo": "What We Do",
    "nav.development": "Development",
    "nav.agile": "Agile Methodology",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.outsourcing": "Outsourcing",
    "nav.systemIntegration": "System Integration",
    "nav.industry": "Industry",
    "nav.education": "Education",
    "nav.financial": "Financial",
    "nav.government": "Government",
    "nav.healthcare": "Healthcare",
    "nav.manufacturing": "Manufacturing",
    "nav.retail": "Retail",
    "nav.security": "Security",
    "nav.access": "Access Control",
    "nav.backups": "Backups",
    "nav.cyberSecurity": "Cybersecurity",
    "nav.engineering": "Engineering",
    "nav.railway": "Railway",
    "nav.road": "Road",
    "nav.solarEnergy": "Solar Energy",
    "nav.institutional": "Institutional",
    "nav.about": "About",
    "nav.careers": "Careers",
    "nav.contact": "Contact",

    // Common
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
    "common.cancel": "Cancel",
    "common.save": "Save",
    "common.edit": "Edit",
    "common.delete": "Delete",
    "common.close": "Close",
    "common.open": "Open",
    "common.yes": "Yes",
    "common.no": "No",

    // Hero Section
    "hero.title": "We Transform Ideas into Digital Solutions",
    "hero.subtitle": "Custom software development, IT consulting and innovative solutions to boost your business.",
    "hero.cta": "Start Project",

    // Services
    "services.title": "Our Services",
    "services.development.title": "Development",
    "services.development.description": "We create custom web and mobile applications for your business.",
    "services.consulting.title": "Consulting",
    "services.consulting.description": "Specialized guidance in technology and digital strategy.",
    "services.support.title": "Support",
    "services.support.description": "Maintenance and technical support for your solutions.",
  },

  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.whatWeDo": "Qué Hacemos",
    "nav.development": "Desarrollo",
    "nav.agile": "Metodología Ágil",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.outsourcing": "Outsourcing",
    "nav.systemIntegration": "Integración de Sistemas",
    "nav.industry": "Industria",
    "nav.education": "Educación",
    "nav.financial": "Financiero",
    "nav.government": "Gobierno",
    "nav.healthcare": "Salud",
    "nav.manufacturing": "Manufactura",
    "nav.retail": "Retail",
    "nav.security": "Seguridad",
    "nav.access": "Control de Acceso",
    "nav.backups": "Respaldos",
    "nav.cyberSecurity": "Ciberseguridad",
    "nav.engineering": "Ingeniería",
    "nav.railway": "Ferroviario",
    "nav.road": "Carreteras",
    "nav.solarEnergy": "Energía Solar",
    "nav.institutional": "Institucional",
    "nav.about": "Acerca de",
    "nav.careers": "Carreras",
    "nav.contact": "Contacto",

    // Common
    "common.loading": "Cargando...",
    "common.error": "Error",
    "common.success": "Éxito",
    "common.cancel": "Cancelar",
    "common.save": "Guardar",
    "common.edit": "Editar",
    "common.delete": "Eliminar",
    "common.close": "Cerrar",
    "common.open": "Abrir",
    "common.yes": "Sí",
    "common.no": "No",

    // Hero Section
    "hero.title": "Transformamos Ideas en Soluciones Digitales",
    "hero.subtitle":
      "Desarrollo de software personalizado, consultoría en TI y soluciones innovadoras para impulsar su negocio.",
    "hero.cta": "Iniciar Proyecto",

    // Services
    "services.title": "Nuestros Servicios",
    "services.development.title": "Desarrollo",
    "services.development.description": "Creamos aplicaciones web y móviles personalizadas para su negocio.",
    "services.consulting.title": "Consultoría",
    "services.consulting.description": "Orientación especializada en tecnología y estrategia digital.",
    "services.support.title": "Soporte",
    "services.support.description": "Mantenimiento y soporte técnico para sus soluciones.",
  },

  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.whatWeDo": "Ce Que Nous Faisons",
    "nav.development": "Développement",
    "nav.agile": "Méthodologie Agile",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Pages de Destination",
    "nav.outsourcing": "Externalisation",
    "nav.systemIntegration": "Intégration de Systèmes",
    "nav.industry": "Industrie",
    "nav.education": "Éducation",
    "nav.financial": "Financier",
    "nav.government": "Gouvernement",
    "nav.healthcare": "Santé",
    "nav.manufacturing": "Fabrication",
    "nav.retail": "Commerce de Détail",
    "nav.security": "Sécurité",
    "nav.access": "Contrôle d'Accès",
    "nav.backups": "Sauvegardes",
    "nav.cyberSecurity": "Cybersécurité",
    "nav.engineering": "Ingénierie",
    "nav.railway": "Ferroviaire",
    "nav.road": "Routier",
    "nav.solarEnergy": "Énergie Solaire",
    "nav.institutional": "Institutionnel",
    "nav.about": "À Propos",
    "nav.careers": "Carrières",
    "nav.contact": "Contact",

    // Common
    "common.loading": "Chargement...",
    "common.error": "Erreur",
    "common.success": "Succès",
    "common.cancel": "Annuler",
    "common.save": "Enregistrer",
    "common.edit": "Modifier",
    "common.delete": "Supprimer",
    "common.close": "Fermer",
    "common.open": "Ouvrir",
    "common.yes": "Oui",
    "common.no": "Non",

    // Hero Section
    "hero.title": "Nous Transformons les Idées en Solutions Numériques",
    "hero.subtitle":
      "Développement de logiciels personnalisés, conseil en informatique et solutions innovantes pour dynamiser votre entreprise.",
    "hero.cta": "Démarrer le Projet",

    // Services
    "services.title": "Nos Services",
    "services.development.title": "Développement",
    "services.development.description": "Nous créons des applications web et mobiles sur mesure pour votre entreprise.",
    "services.consulting.title": "Conseil",
    "services.consulting.description": "Orientation spécialisée en technologie et stratégie numérique.",
    "services.support.title": "Support",
    "services.support.description": "Maintenance et support technique pour vos solutions.",
  },

  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.whatWeDo": "Was Wir Tun",
    "nav.development": "Entwicklung",
    "nav.agile": "Agile Methodik",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.outsourcing": "Outsourcing",
    "nav.systemIntegration": "Systemintegration",
    "nav.industry": "Industrie",
    "nav.education": "Bildung",
    "nav.financial": "Finanzen",
    "nav.government": "Regierung",
    "nav.healthcare": "Gesundheitswesen",
    "nav.manufacturing": "Fertigung",
    "nav.retail": "Einzelhandel",
    "nav.security": "Sicherheit",
    "nav.access": "Zugriffskontrolle",
    "nav.backups": "Backups",
    "nav.cyberSecurity": "Cybersicherheit",
    "nav.engineering": "Ingenieurwesen",
    "nav.railway": "Eisenbahn",
    "nav.road": "Straße",
    "nav.solarEnergy": "Solarenergie",
    "nav.institutional": "Institutionell",
    "nav.about": "Über Uns",
    "nav.careers": "Karriere",
    "nav.contact": "Kontakt",

    // Common
    "common.loading": "Laden...",
    "common.error": "Fehler",
    "common.success": "Erfolg",
    "common.cancel": "Abbrechen",
    "common.save": "Speichern",
    "common.edit": "Bearbeiten",
    "common.delete": "Löschen",
    "common.close": "Schließen",
    "common.open": "Öffnen",
    "common.yes": "Ja",
    "common.no": "Nein",

    // Hero Section
    "hero.title": "Wir Verwandeln Ideen in Digitale Lösungen",
    "hero.subtitle":
      "Maßgeschneiderte Softwareentwicklung, IT-Beratung und innovative Lösungen zur Stärkung Ihres Unternehmens.",
    "hero.cta": "Projekt Starten",

    // Services
    "services.title": "Unsere Dienstleistungen",
    "services.development.title": "Entwicklung",
    "services.development.description":
      "Wir erstellen maßgeschneiderte Web- und Mobile-Anwendungen für Ihr Unternehmen.",
    "services.consulting.title": "Beratung",
    "services.consulting.description": "Spezialisierte Beratung in Technologie und digitaler Strategie.",
    "services.support.title": "Support",
    "services.support.description": "Wartung und technischer Support für Ihre Lösungen.",
  },
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["pt", "en", "es", "fr", "de"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    if (typeof value === "string") {
      return value
    }

    // Fallback to Portuguese if translation not found
    value = translations.pt
    for (const k of keys) {
      value = value?.[k]
    }

    return typeof value === "string" ? value : key
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
