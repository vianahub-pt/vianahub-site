"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface TranslationContextType {
  language: string
  setLanguage: (language: string) => void
  translations: {
    [key: string]: any
  }
}

const TranslationContext = createContext<TranslationContextType>({
  language: "en",
  setLanguage: () => {},
  translations: {},
})

export const TranslationProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState("en")

  const translations = {
    en: {
      railway: {
        hero: {
          title: "Advanced Railway Solutions",
          subtitle: "We modernize railway systems with cutting-edge technology for safe and efficient transportation",
        },
        solutions: {
          title: "Our Railway Solutions",
          subtitle: "We offer complete solutions for modernization and optimization of railway systems",
          signaling: {
            title: "Intelligent Signaling",
            description: "Automated signaling systems for greater safety and operational efficiency",
          },
          control: {
            title: "Traffic Control",
            description: "Advanced control centers for real-time monitoring and management",
          },
          maintenance: {
            title: "Predictive Maintenance",
            description: "Monitoring systems for preventive maintenance and cost reduction",
          },
          passenger: {
            title: "Passenger Systems",
            description: "Solutions for passenger information, ticketing and comfort",
          },
        },
        projects: {
          title: "Featured Projects",
          subtitle: "Learn about some of our main railway modernization projects",
          norte: {
            title: "Northern Line - Modernization",
            description: "Complete modernization of the Northern Line signaling system",
            status: "Completed",
            year: "2023",
          },
          porto: {
            title: "Porto Metro - Expansion",
            description: "Implementation of new control systems for network expansion",
            status: "In Progress",
            year: "2024",
          },
          viewDetails: "View Details",
          viewAll: "View All Projects",
        },
        benefits: {
          title: "Benefits of Our Solutions",
          subtitle: "Discover how our solutions transform railway transportation",
          safety: {
            title: "Maximum Safety",
            description: "Redundant systems and advanced safety protocols",
          },
          efficiency: {
            title: "Operational Efficiency",
            description: "Resource optimization and travel time reduction",
          },
          reliability: {
            title: "Reliability",
            description: "Robust systems with high availability and low maintenance",
          },
          integration: {
            title: "Total Integration",
            description: "Compatibility with existing and future systems",
          },
        },
        features: {
          title: "Cutting-Edge Technology for the Future of Transportation",
          subtitle: "We implement the most advanced technologies to create railway systems of the future",
          automation: "Complete automation of operational processes",
          monitoring: "24/7 real-time monitoring",
          predictive: "Predictive analysis for preventive maintenance",
          integration: "Integration with enterprise management systems",
          compliance: "Compliance with international safety standards",
        },
        cta: {
          title: "Ready to Modernize Your Railway System?",
          subtitle: "Contact us and discover how we can transform your railway infrastructure",
          button: "Contact Us",
          downloadBrochure: "Download Brochure",
        },
      },
    },
    pt: {
      railway: {
        hero: {
          title: "Soluções Ferroviárias Avançadas",
          subtitle: "Modernizamos sistemas ferroviários com tecnologia de ponta para transporte seguro e eficiente",
        },
        solutions: {
          title: "Nossas Soluções Ferroviárias",
          subtitle: "Oferecemos soluções completas para modernização e otimização de sistemas ferroviários",
          signaling: {
            title: "Sinalização Inteligente",
            description: "Sistemas de sinalização automatizados para maior segurança e eficiência operacional",
          },
          control: {
            title: "Controle de Tráfego",
            description: "Centros de controle avançados para monitoramento e gestão em tempo real",
          },
          maintenance: {
            title: "Manutenção Preditiva",
            description: "Sistemas de monitoramento para manutenção preventiva e redução de custos",
          },
          passenger: {
            title: "Sistemas de Passageiros",
            description: "Soluções para informação, bilhetagem e conforto dos passageiros",
          },
        },
        projects: {
          title: "Projetos em Destaque",
          subtitle: "Conheça alguns dos nossos principais projetos de modernização ferroviária",
          norte: {
            title: "Linha do Norte - Modernização",
            description: "Modernização completa do sistema de sinalização da Linha do Norte",
            status: "Concluído",
            year: "2023",
          },
          porto: {
            title: "Metro do Porto - Expansão",
            description: "Implementação de novos sistemas de controle para expansão da rede",
            status: "Em Andamento",
            year: "2024",
          },
          viewDetails: "Ver Detalhes",
          viewAll: "Ver Todos os Projetos",
        },
        benefits: {
          title: "Benefícios das Nossas Soluções",
          subtitle: "Descubra como nossas soluções transformam o transporte ferroviário",
          safety: {
            title: "Segurança Máxima",
            description: "Sistemas redundantes e protocolos de segurança avançados",
          },
          efficiency: {
            title: "Eficiência Operacional",
            description: "Otimização de recursos e redução de tempos de viagem",
          },
          reliability: {
            title: "Confiabilidade",
            description: "Sistemas robustos com alta disponibilidade e baixa manutenção",
          },
          integration: {
            title: "Integração Total",
            description: "Compatibilidade com sistemas existentes e futuros",
          },
        },
        features: {
          title: "Tecnologia de Ponta para o Futuro do Transporte",
          subtitle: "Implementamos as mais avançadas tecnologias para criar sistemas ferroviários do futuro",
          automation: "Automação completa de processos operacionais",
          monitoring: "Monitoramento em tempo real 24/7",
          predictive: "Análise preditiva para manutenção preventiva",
          integration: "Integração com sistemas de gestão empresarial",
          compliance: "Conformidade com normas internacionais de segurança",
        },
        cta: {
          title: "Pronto para Modernizar seu Sistema Ferroviário?",
          subtitle: "Entre em contato conosco e descubra como podemos transformar sua infraestrutura ferroviária",
          button: "Fale Conosco",
          downloadBrochure: "Baixar Brochura",
        },
      },
    },
    es: {
      railway: {
        hero: {
          title: "Soluciones Ferroviarias Avanzadas",
          subtitle:
            "Modernizamos sistemas ferroviarios con tecnología de vanguardia para transporte seguro y eficiente",
        },
        solutions: {
          title: "Nuestras Soluciones Ferroviarias",
          subtitle: "Ofrecemos soluciones completas para modernización y optimización de sistemas ferroviarios",
          signaling: {
            title: "Señalización Inteligente",
            description: "Sistemas de señalización automatizados para mayor seguridad y eficiencia operacional",
          },
          control: {
            title: "Control de Tráfico",
            description: "Centros de control avanzados para monitoreo y gestión en tiempo real",
          },
          maintenance: {
            title: "Mantenimiento Predictivo",
            description: "Sistemas de monitoreo para mantenimiento preventivo y reducción de costos",
          },
          passenger: {
            title: "Sistemas de Pasajeros",
            description: "Soluciones para información, ticketing y comodidad de los pasajeros",
          },
        },
        projects: {
          title: "Proyectos Destacados",
          subtitle: "Conoce algunos de nuestros principales proyectos de modernización ferroviaria",
          norte: {
            title: "Línea del Norte - Modernización",
            description: "Modernización completa del sistema de señalización de la Línea del Norte",
            status: "Completado",
            year: "2023",
          },
          porto: {
            title: "Metro de Oporto - Expansión",
            description: "Implementación de nuevos sistemas de control para expansión de la red",
            status: "En Progreso",
            year: "2024",
          },
          viewDetails: "Ver Detalles",
          viewAll: "Ver Todos los Projetos",
        },
        benefits: {
          title: "Beneficios de Nuestras Soluciones",
          subtitle: "Descubre cómo nuestras soluciones transforman el transporte ferroviario",
          safety: {
            title: "Seguridad Máxima",
            description: "Sistemas redundantes y protocolos de seguridad avanzados",
          },
          efficiency: {
            title: "Eficiencia Operacional",
            description: "Optimización de recursos y reducción de tiempos de viaje",
          },
          reliability: {
            title: "Confiabilidad",
            description: "Sistemas robustos con alta disponibilidad y bajo mantenimiento",
          },
          integration: {
            title: "Integración Total",
            description: "Compatibilidad con sistemas existentes y futuros",
          },
        },
        features: {
          title: "Tecnología de Vanguardia para el Futuro del Transporte",
          subtitle: "Implementamos las tecnologías más avanzadas para crear sistemas ferroviarios del futuro",
          automation: "Automatización completa de procesos operacionales",
          monitoring: "Monitoreo en tiempo real 24/7",
          predictive: "Análisis predictivo para mantenimiento preventivo",
          integration: "Integración con sistemas de gestión empresarial",
          compliance: "Cumplimiento con normas internacionales de seguridad",
        },
        cta: {
          title: "¿Listo para Modernizar tu Sistema Ferroviario?",
          subtitle: "Contáctanos y descubre cómo podemos transformar tu infraestructura ferroviaria",
          button: "Contáctanos",
          downloadBrochure: "Descargar Folleto",
        },
      },
    },
    fr: {
      railway: {
        hero: {
          title: "Solutions Ferroviaires Avancées",
          subtitle:
            "Nous modernisons les systèmes ferroviaires avec une technologie de pointe pour un transport sûr et efficace",
        },
        solutions: {
          title: "Nos Solutions Ferroviaires",
          subtitle:
            "Nous offrons des solutions complètes pour la modernisation et l'optimisation des systèmes ferroviaires",
          signaling: {
            title: "Signalisation Intelligente",
            description:
              "Systèmes de signalisation automatisés pour une sécurité et une efficacité opérationnelle accrues",
          },
          control: {
            title: "Contrôle du Trafic",
            description: "Centres de contrôle avancés pour surveillance et gestion en temps réel",
          },
          maintenance: {
            title: "Maintenance Prédictive",
            description: "Systèmes de surveillance pour maintenance préventive et réduction des coûts",
          },
          passenger: {
            title: "Systèmes Passagers",
            description: "Solutions pour information, billetterie et confort des passagers",
          },
        },
        projects: {
          title: "Projets Phares",
          subtitle: "Découvrez quelques-uns de nos principaux projets de modernisation ferroviaire",
          norte: {
            title: "Ligne du Nord - Modernisation",
            description: "Modernisation complète du système de signalisation de la Ligne du Nord",
            status: "Terminé",
            year: "2023",
          },
          porto: {
            title: "Métro de Porto - Extension",
            description: "Mise en œuvre de nouveaux systèmes de contrôle pour l'extension du réseau",
            status: "En Cours",
            year: "2024",
          },
          viewDetails: "Voir Détails",
          viewAll: "Voir Tous les Projets",
        },
        benefits: {
          title: "Avantages de Nos Solutions",
          subtitle: "Découvrez comment nos solutions transforment le transport ferroviaire",
          safety: {
            title: "Sécurité Maximale",
            description: "Systèmes redondants et protocoles de sécurité avancés",
          },
          efficiency: {
            title: "Efficacité Opérationnelle",
            description: "Optimisation des ressources et réduction des temps de trajet",
          },
          reliability: {
            title: "Fiabilité",
            description: "Systèmes robustes avec haute disponibilité et faible maintenance",
          },
          integration: {
            title: "Intégration Totale",
            description: "Compatibilité avec les systèmes existants et futurs",
          },
        },
        features: {
          title: "Technologie de Pointe pour l'Avenir du Transport",
          subtitle:
            "Nous implémentons les technologies les plus avancées pour créer les systèmes ferroviaires du futur",
          automation: "Automatisation complète des processus opérationnels",
          monitoring: "Surveillance en temps réel 24/7",
          predictive: "Analyse prédictive pour maintenance préventive",
          integration: "Intégration avec systèmes de gestion d'entreprise",
          compliance: "Conformité aux normes internationales de sécurité",
        },
        cta: {
          title: "Prêt à Moderniser Votre Système Ferroviaire?",
          subtitle: "Contactez-nous et découvrez comment nous pouvons transformer votre infrastructure ferroviaire",
          button: "Nous Contacter",
          downloadBrochure: "Télécharger Brochure",
        },
      },
    },
    de: {
      railway: {
        hero: {
          title: "Fortschrittliche Eisenbahnlösungen",
          subtitle:
            "Wir modernisieren Eisenbahnsysteme mit modernster Technologie für sicheren und effizienten Transport",
        },
        solutions: {
          title: "Unsere Eisenbahnlösungen",
          subtitle: "Wir bieten komplette Lösungen für Modernisierung und Optimierung von Eisenbahnsystemen",
          signaling: {
            title: "Intelligente Signaltechnik",
            description: "Automatisierte Signalsysteme für höhere Sicherheit und operative Effizienz",
          },
          control: {
            title: "Verkehrssteuerung",
            description: "Fortschrittliche Kontrollzentren für Echtzeitüberwachung und -management",
          },
          maintenance: {
            title: "Vorausschauende Wartung",
            description: "Überwachungssysteme für präventive Wartung und Kostenreduzierung",
          },
          passenger: {
            title: "Fahrgastsysteme",
            description: "Lösungen für Fahrgastinformation, Ticketing und Komfort",
          },
        },
        projects: {
          title: "Herausragende Projekte",
          subtitle: "Erfahren Sie mehr über einige unserer wichtigsten Eisenbahnmodernisierungsprojekte",
          norte: {
            title: "Nordlinie - Modernisierung",
            description: "Komplette Modernisierung des Signalsystems der Nordlinie",
            status: "Abgeschlossen",
            year: "2023",
          },
          porto: {
            title: "Metro Porto - Erweiterung",
            description: "Implementierung neuer Kontrollsysteme für Netzerweiterung",
            status: "In Bearbeitung",
            year: "2024",
          },
          viewDetails: "Details Anzeigen",
          viewAll: "Alle Projekte Anzeigen",
        },
        benefits: {
          title: "Vorteile Unserer Lösungen",
          subtitle: "Entdecken Sie, wie unsere Lösungen den Eisenbahntransport transformieren",
          safety: {
            title: "Maximale Sicherheit",
            description: "Redundante Systeme und fortschrittliche Sicherheitsprotokolle",
          },
          efficiency: {
            title: "Operative Effizienz",
            description: "Ressourcenoptimierung und Reduzierung der Reisezeiten",
          },
          reliability: {
            title: "Zuverlässigkeit",
            description: "Robuste Systeme mit hoher Verfügbarkeit und geringer Wartung",
          },
          integration: {
            title: "Vollständige Integration",
            description: "Kompatibilität mit bestehenden und zukünftigen Systemen",
          },
        },
        features: {
          title: "Spitzentechnologie für die Zukunft des Transports",
          subtitle:
            "Wir implementieren die fortschrittlichsten Technologien zur Schaffung von Eisenbahnsystemen der Zukunft",
          automation: "Vollständige Automatisierung operativer Prozesse",
          monitoring: "24/7 Echtzeitüberwachung",
          predictive: "Prädiktive Analyse für präventive Wartung",
          integration: "Integration mit Unternehmensmanagement-Systemen",
          compliance: "Einhaltung internationaler Sicherheitsstandards",
        },
        cta: {
          title: "Bereit, Ihr Eisenbahnsystem zu Modernisieren?",
          subtitle: "Kontaktieren Sie uns und entdecken Sie, wie wir Ihre Eisenbahninfrastruktur transformieren können",
          button: "Kontaktieren Sie Uns",
          downloadBrochure: "Broschüre Herunterladen",
        },
      },
    },
  }

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => useContext(TranslationContext)
