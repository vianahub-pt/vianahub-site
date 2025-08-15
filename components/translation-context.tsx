"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface TranslationContextType {
  language: string
  setLanguage: (language: string) => void
  translations: {
    pt: {
      footer: {
        companyName: string
        description: string
        services: string
        industries: string
        contact: string
        email: string
        phone: string
        address: string
        copyright: string
        privacy: string
        terms: string
        link: {
          whatWeDo: {
            development: string
            agile: string
            chatbot: string
            outsourcing: string
          }
          industry: {
            healthcare: string
            financial: string
            education: string
            retail: string
          }
        }
      }
    }
    en: {
      footer: {
        companyName: string
        description: string
        services: string
        industries: string
        contact: string
        email: string
        phone: string
        address: string
        copyright: string
        privacy: string
        terms: string
        link: {
          whatWeDo: {
            development: string
            agile: string
            chatbot: string
            outsourcing: string
          }
          industry: {
            healthcare: string
            financial: string
            education: string
            retail: string
          }
        }
      }
    }
    es: {
      footer: {
        companyName: string
        description: string
        services: string
        industries: string
        contact: string
        email: string
        phone: string
        address: string
        copyright: string
        privacy: string
        terms: string
        link: {
          whatWeDo: {
            development: string
            agile: string
            chatbot: string
            outsourcing: string
          }
          industry: {
            healthcare: string
            financial: string
            education: string
            retail: string
          }
        }
      }
    }
    fr: {
      footer: {
        companyName: string
        description: string
        services: string
        industries: string
        contact: string
        email: string
        phone: string
        address: string
        copyright: string
        privacy: string
        terms: string
        link: {
          whatWeDo: {
            development: string
            agile: string
            chatbot: string
            outsourcing: string
          }
          industry: {
            healthcare: string
            financial: string
            education: string
            retail: string
          }
        }
      }
    }
    de: {
      footer: {
        companyName: string
        description: string
        services: string
        industries: string
        contact: string
        email: string
        phone: string
        address: string
        copyright: string
        privacy: string
        terms: string
        link: {
          whatWeDo: {
            development: string
            agile: string
            chatbot: string
            outsourcing: string
          }
          industry: {
            healthcare: string
            financial: string
            education: string
            retail: string
          }
        }
      }
    }
  }
}

const TranslationContext = createContext<TranslationContextType>({
  language: "en",
  setLanguage: () => {},
  translations: {
    pt: {
      footer: {
        companyName: "VianaHub",
        description:
          "Transformamos ideias em soluções digitais inovadoras. Especialistas em desenvolvimento de software, consultoria tecnológica e soluções personalizadas para o seu negócio.",
        services: "Serviços",
        industries: "Indústrias",
        contact: "Contacto",
        email: "info@vianahub.com",
        phone: "+351 123 456 789",
        address: "Rua da Inovação, 123<br />4000-000 Porto, Portugal",
        copyright: "© 2024 VianaHub. Todos os direitos reservados.",
        privacy: "Privacidade",
        terms: "Termos",
        link: {
          whatWeDo: {
            development: "Desenvolvimento",
            agile: "Metodologia Ágil",
            chatbot: "Chatbot",
            outsourcing: "Outsourcing",
          },
          industry: {
            healthcare: "Saúde",
            financial: "Financeiro",
            education: "Educação",
            retail: "Retalho",
          },
        },
      },
    },
    en: {
      footer: {
        companyName: "VianaHub",
        description:
          "We transform ideas into innovative digital solutions. Experts in software development, technology consulting and customized solutions for your business.",
        services: "Services",
        industries: "Industries",
        contact: "Contact",
        email: "info@vianahub.com",
        phone: "+351 123 456 789",
        address: "Innovation Street, 123<br />4000-000 Porto, Portugal",
        copyright: "© 2024 VianaHub. All rights reserved.",
        privacy: "Privacy",
        terms: "Terms",
        link: {
          whatWeDo: {
            development: "Development",
            agile: "Agile Methodology",
            chatbot: "Chatbot",
            outsourcing: "Outsourcing",
          },
          industry: {
            healthcare: "Healthcare",
            financial: "Financial",
            education: "Education",
            retail: "Retail",
          },
        },
      },
    },
    es: {
      footer: {
        companyName: "VianaHub",
        description:
          "Transformamos ideas en soluciones digitales innovadoras. Expertos en desarrollo de software, consultoría tecnológica y soluciones personalizadas para su negocio.",
        services: "Servicios",
        industries: "Industrias",
        contact: "Contacto",
        email: "info@vianahub.com",
        phone: "+351 123 456 789",
        address: "Calle de la Innovación, 123<br />4000-000 Oporto, Portugal",
        copyright: "© 2024 VianaHub. Todos los derechos reservados.",
        privacy: "Privacidad",
        terms: "Términos",
        link: {
          whatWeDo: {
            development: "Desarrollo",
            agile: "Metodología Ágil",
            chatbot: "Chatbot",
            outsourcing: "Outsourcing",
          },
          industry: {
            healthcare: "Salud",
            financial: "Financiero",
            education: "Educación",
            retail: "Comercio",
          },
        },
      },
    },
    fr: {
      footer: {
        companyName: "VianaHub",
        description:
          "Nous transformons les idées en solutions numériques innovantes. Experts en développement logiciel, conseil technologique et solutions personnalisées pour votre entreprise.",
        services: "Services",
        industries: "Industries",
        contact: "Contact",
        email: "info@vianahub.com",
        phone: "+351 123 456 789",
        address: "Rue de l'Innovation, 123<br />4000-000 Porto, Portugal",
        copyright: "© 2024 VianaHub. Tous droits réservés.",
        privacy: "Confidentialité",
        terms: "Conditions",
        link: {
          whatWeDo: {
            development: "Développement",
            agile: "Méthodologie Agile",
            chatbot: "Chatbot",
            outsourcing: "Externalisation",
          },
          industry: {
            healthcare: "Santé",
            financial: "Financier",
            education: "Éducation",
            retail: "Commerce",
          },
        },
      },
    },
    de: {
      footer: {
        companyName: "VianaHub",
        description:
          "Wir verwandeln Ideen in innovative digitale Lösungen. Experten für Softwareentwicklung, Technologieberatung und maßgeschneiderte Lösungen für Ihr Unternehmen.",
        services: "Dienstleistungen",
        industries: "Branchen",
        contact: "Kontakt",
        email: "info@vianahub.com",
        phone: "+351 123 456 789",
        address: "Innovationsstraße, 123<br />4000-000 Porto, Portugal",
        copyright: "© 2024 VianaHub. Alle Rechte vorbehalten.",
        privacy: "Datenschutz",
        terms: "Bedingungen",
        link: {
          whatWeDo: {
            development: "Entwicklung",
            agile: "Agile Methodik",
            chatbot: "Chatbot",
            outsourcing: "Outsourcing",
          },
          industry: {
            healthcare: "Gesundheitswesen",
            financial: "Finanzwesen",
            education: "Bildung",
            retail: "Einzelhandel",
          },
        },
      },
    },
  },
})

export const useTranslation = () => useContext(TranslationContext)

export const TranslationProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState("en")

  const translations = {
    pt: {
      footer: {
        companyName: "VianaHub",
        description:
          "Transformamos ideias em soluções digitais inovadoras. Especialistas em desenvolvimento de software, consultoria tecnológica e soluções personalizadas para o seu negócio.",
        services: "Serviços",
        industries: "Indústrias",
        contact: "Contacto",
        email: "info@vianahub.com",
        phone: "+351 123 456 789",
        address: "Rua da Inovação, 123<br />4000-000 Porto, Portugal",
        copyright: "© 2024 VianaHub. Todos os direitos reservados.",
        privacy: "Privacidade",
        terms: "Termos",
        link: {
          whatWeDo: {
            development: "Desenvolvimento",
            agile: "Metodologia Ágil",
            chatbot: "Chatbot",
            outsourcing: "Outsourcing",
          },
          industry: {
            healthcare: "Saúde",
            financial: "Financeiro",
            education: "Educação",
            retail: "Retalho",
          },
        },
      },
    },
    en: {
      footer: {
        companyName: "VianaHub",
        description:
          "We transform ideas into innovative digital solutions. Experts in software development, technology consulting and customized solutions for your business.",
        services: "Services",
        industries: "Industries",
        contact: "Contact",
        email: "info@vianahub.com",
        phone: "+351 123 456 789",
        address: "Innovation Street, 123<br />4000-000 Porto, Portugal",
        copyright: "© 2024 VianaHub. All rights reserved.",
        privacy: "Privacy",
        terms: "Terms",
        link: {
          whatWeDo: {
            development: "Development",
            agile: "Agile Methodology",
            chatbot: "Chatbot",
            outsourcing: "Outsourcing",
          },
          industry: {
            healthcare: "Healthcare",
            financial: "Financial",
            education: "Education",
            retail: "Retail",
          },
        },
      },
    },
    es: {
      footer: {
        companyName: "VianaHub",
        description:
          "Transformamos ideas en soluciones digitales innovadoras. Expertos en desarrollo de software, consultoría tecnológica y soluciones personalizadas para su negocio.",
        services: "Servicios",
        industries: "Industrias",
        contact: "Contacto",
        email: "info@vianahub.com",
        phone: "+351 123 456 789",
        address: "Calle de la Innovación, 123<br />4000-000 Oporto, Portugal",
        copyright: "© 2024 VianaHub. Todos los derechos reservados.",
        privacy: "Privacidad",
        terms: "Términos",
        link: {
          whatWeDo: {
            development: "Desarrollo",
            agile: "Metodología Ágil",
            chatbot: "Chatbot",
            outsourcing: "Outsourcing",
          },
          industry: {
            healthcare: "Salud",
            financial: "Financiero",
            education: "Educación",
            retail: "Comercio",
          },
        },
      },
    },
    fr: {
      footer: {
        companyName: "VianaHub",
        description:
          "Nous transformons les idées en solutions numériques innovantes. Experts en développement logiciel, conseil technologique et solutions personnalisées pour votre entreprise.",
        services: "Services",
        industries: "Industries",
        contact: "Contact",
        email: "info@vianahub.com",
        phone: "+351 123 456 789",
        address: "Rue de l'Innovation, 123<br />4000-000 Porto, Portugal",
        copyright: "© 2024 VianaHub. Tous droits réservés.",
        privacy: "Confidentialité",
        terms: "Conditions",
        link: {
          whatWeDo: {
            development: "Développement",
            agile: "Méthodologie Agile",
            chatbot: "Chatbot",
            outsourcing: "Externalisation",
          },
          industry: {
            healthcare: "Santé",
            financial: "Financier",
            education: "Éducation",
            retail: "Commerce",
          },
        },
      },
    },
    de: {
      footer: {
        companyName: "VianaHub",
        description:
          "Wir verwandeln Ideen in innovative digitale Lösungen. Experten für Softwareentwicklung, Technologieberatung und maßgeschneiderte Lösungen für Ihr Unternehmen.",
        services: "Dienstleistungen",
        industries: "Branchen",
        contact: "Kontakt",
        email: "info@vianahub.com",
        phone: "+351 123 456 789",
        address: "Innovationsstraße, 123<br />4000-000 Porto, Portugal",
        copyright: "© 2024 VianaHub. Alle Rechte vorbehalten.",
        privacy: "Datenschutz",
        terms: "Bedingungen",
        link: {
          whatWeDo: {
            development: "Entwicklung",
            agile: "Agile Methodik",
            chatbot: "Chatbot",
            outsourcing: "Outsourcing",
          },
          industry: {
            healthcare: "Gesundheitswesen",
            financial: "Finanzwesen",
            education: "Bildung",
            retail: "Einzelhandel",
          },
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
