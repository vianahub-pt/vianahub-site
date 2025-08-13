"use client"
import { createContext } from "react"

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
    nav: {
      home: "Início",
      about: "Sobre Nós",
      careers: "Carreiras",
      contact: "Contacto",
    },

    // Menu items
    whatWeDo: "O que Fazemos",
    industry: "Indústria",
    security: "Segurança",
    engineering: "Engenharia",
    institutional: "Institucional",

    menu: {
      development: "Desenvolvimento",
      agile: "Metodologia Ágil",
      chatbot: "Chatbot",
      "landing-pages": "Landing Pages",
      outsourcing: "Outsourcing",
      "system-integration": "Integração de Sistemas",
      railway: "Engenharia Ferroviária",
      road: "Engenharia Rodoviária",
      "solar-energy": "Energia Solar",
      education: "Educação",
      government: "Governo",
      manufacturing: "Manufatura",
      financial: "Financeiro",
      retail: "Retalho",
      healthcare: "Saúde",
      cybersecurity: "Cibersegurança",
      backups: "Backups",
      access: "Controlo de Acesso",
      institutional: "Institucional",
      about: "Sobre Nós",
      careers: "Carreiras",
    },

    // Hero section
    hero: {
      title: {
        line1: "Transformamos",
        line2: "Ideias em",
        line3: "Soluções Digitais",
      },
      subtitle:
        "Desenvolvemos software personalizado, aplicações web e móveis que impulsionam o seu negócio para o futuro digital.",
      stats: {
        projects: "Projetos",
        clients: "Clientes",
        years: "Anos",
      },
    },

    // Services section
    services: {
      title: {
        part1: "Os Nossos",
        part2: "Serviços",
      },
      subtitle: "Oferecemos soluções completas para transformar o seu negócio",
      web: {
        title: "Desenvolvimento Web",
        description: "Criamos aplicações web modernas e responsivas",
      },
      mobile: {
        title: "Aplicações Móveis",
        description: "Apps nativas e híbridas para iOS e Android",
      },
      landing: {
        title: "Landing Pages",
        description: "Páginas de conversão otimizadas para resultados",
      },
      integration: {
        title: "Integração de Sistemas",
        description: "Conectamos os seus sistemas de forma eficiente",
      },
      security: {
        title: "Segurança",
        description: "Protegemos os seus dados e sistemas",
      },
      automation: {
        title: "Automação",
        description: "Automatizamos processos para maior eficiência",
      },
      cta: "Saber Mais",
    },

    // Projects section
    projects: {
      title: {
        part1: "Projetos em",
        part2: "Destaque",
      },
      subtitle: "Alguns dos nossos trabalhos mais recentes",
      viewProject: "Ver Projeto",
      cta: "Ver Todos os Projetos",
      ecommerce: {
        title: "Plataforma E-commerce",
        category: "E-commerce",
        description: "Plataforma completa de comércio eletrónico com gestão de inventário",
      },
      hospital: {
        title: "Sistema Hospitalar",
        category: "Saúde",
        description: "Sistema de gestão hospitalar com agendamento e prontuários",
      },
      delivery: {
        title: "App de Delivery",
        category: "Mobile",
        description: "Aplicação móvel para entrega de comida com rastreamento",
      },
      banking: {
        title: "Sistema Bancário",
        category: "Fintech",
        description: "Plataforma bancária digital com segurança avançada",
      },
      education: {
        title: "Plataforma Educacional",
        category: "Educação",
        description: "Sistema de ensino online com videoconferência",
      },
      logistics: {
        title: "Sistema de Logística",
        category: "Logística",
        description: "Gestão completa de frota e entregas",
      },
      streaming: {
        title: "Plataforma de Streaming",
        category: "Media",
        description: "Serviço de streaming de vídeo com CDN global",
      },
      crm: {
        title: "Sistema CRM",
        category: "Negócios",
        description: "Gestão de relacionamento com clientes",
      },
    },

    // Industries section
    industries: {
      title: {
        part1: "Indústrias que",
        part2: "Servimos",
      },
      subtitle: "Experiência especializada em diversos setores",
      education: {
        title: "Educação",
        description: "Soluções para instituições de ensino e plataformas educacionais",
      },
      financial: {
        title: "Financeiro",
        description: "Sistemas bancários e soluções fintech seguras",
      },
      government: {
        title: "Governo",
        description: "Plataformas digitais para serviços públicos",
      },
      healthcare: {
        title: "Saúde",
        description: "Sistemas hospitalares e aplicações médicas",
      },
      manufacturing: {
        title: "Manufatura",
        description: "Automação industrial e sistemas de produção",
      },
      retail: {
        title: "Retalho",
        description: "E-commerce e sistemas de gestão comercial",
      },
      cta: "Saber Mais",
    },

    // Testimonials section
    testimonials: {
      title: {
        part1: "O que Dizem os",
        part2: "Nossos Clientes",
      },
      subtitle: "Feedback real de empresas que confiaram em nós",
      ana: {
        name: "Ana Costa",
        role: "CEO, TechStart",
        content:
          "A VianaHub transformou completamente a nossa presença digital. O profissionalismo e a qualidade do trabalho são excepcionais.",
      },
      roberto: {
        name: "Roberto Lima",
        role: "Diretor de TI, InnovaCorp",
        content:
          "Excelente parceria! Entregaram o projeto no prazo e superaram as nossas expectativas em todos os aspetos.",
      },
      maria: {
        name: "Maria Silva",
        role: "Fundadora, EduTech",
        content:
          "A equipa da VianaHub é altamente competente e sempre disponível. Recomendo sem hesitação!",
      },
      carlos: {
        name: "Carlos Oliveira",
        role: "Gestor de Projetos, FinanceFlow",
        content:
          "Profissionais dedicados que realmente compreendem as necessidades do negócio. Resultado final impecável.",
      },
      lucia: {
        name: "Lúcia Ferreira",
        role: "Diretora Comercial, RetailMax",
        content:
          "A nossa plataforma de e-commerce desenvolvida pela VianaHub aumentou as vendas em 300%. Fantástico!",
      },
      joao: {
        name: "João Santos",
        role: "CTO, HealthCare+",
        content:
          "Tecnologia de ponta e suporte excepcional. A VianaHub é o parceiro ideal para projetos complexos.",
      },
    },

    // Insights section
    insights: {
      subtitle: "Dados que comprovam a nossa excelência",
      growth: {
        title: "Crescimento",
        description: "Crescimento médio dos nossos clientes",
      },
      experience: {
        title: "Satisfação",
        description: "Taxa de satisfação dos clientes",
      },
      innovation: {
        title: "Inovação",
        description: "Projetos com tecnologias inovadoras",
      },
      results: {
        title: "Resultados",
        description: "Projetos entregues no prazo",
      },
    },

    // Footer
    footer: {
      description: "Transformamos ideias em soluções digitais inovadoras",
      services: "Serviços",
      company: "Empresa",
      contact: "Contacto",
      rights: "Todos os direitos reservados.",
    },

    // About page
    about: {
      hero: {
        title: "Sobre a VianaHub",
        subtitle: "Somos uma empresa de tecnologia dedicada a transformar ideias em soluções digitais inovadoras",
        cta: {
          history: "Nossa História",
          team: "Nossa Equipa",
        },
      },
      mission: {
        title: "Nossa Missão",
        description:
          "Capacitar empresas através de soluções tecnológicas inovadoras, criando valor e impulsionando o crescimento sustentável dos nossos clientes.",
      },
      vision: {
        title: "Nossa Visão",
        description:
          "Ser reconhecida como líder em transformação digital, oferecendo soluções que moldam o futuro dos negócios.",
      },
      values: {
        badge: "Nossos Valores",
        title: "O que nos Move",
        subtitle: "Princípios fundamentais que guiam todas as nossas ações e decisões",
        innovation: {
          title: "Inovação",
          description: "Buscamos constantemente novas formas de resolver problemas e criar valor",
        },
        commitment: {
          title: "Compromisso",
          description: "Dedicamo-nos integralmente ao sucesso dos nossos clientes e projetos",
        },
        reliability: {
          title: "Confiabilidade",
          description: "Construímos relacionamentos duradouros baseados na confiança e transparência",
        },
        agility: {
          title: "Agilidade",
          description: "Adaptamo-nos rapidamente às mudanças e necessidades do mercado",
        },
      },
      history: {
        badge: "Nossa Jornada",
        title: "História da VianaHub",
        subtitle: "Uma trajetória de crescimento, inovação e conquistas",
        foundation: {
          title: "Fundação",
          description: "A VianaHub foi fundada com o objetivo de democratizar o acesso à tecnologia de qualidade",
        },
        projects: {
          title: "Primeiros Projetos",
          description:
            "Desenvolvemos nossos primeiros projetos significativos, estabelecendo nossa reputação no mercado",
        },
        expansion: {
          title: "Expansão",
          description: "Expandimos nossa equipa e portfólio de serviços, atendendo clientes em diversos setores",
        },
        growth: {
          title: "Crescimento",
          description: "Consolidamos nossa posição como referência em soluções digitais inovadoras",
        },
      },
      team: {
        badge: "Nossa Equipa",
        title: "Conheça Quem Faz Acontecer",
        subtitle: "Profissionais apaixonados por tecnologia e dedicados à excelência",
        tatiana: {
          role: "CEO & Fundadora",
          description: "Visionária e líder estratégica, conduz a empresa rumo à inovação constante",
        },
        dener: {
          role: "CTO & Co-fundador",
          description: "Especialista técnico responsável pela arquitetura e qualidade das nossas soluções",
        },
        carlos: {
          role: "Diretor de Desenvolvimento",
          description: "Lidera a equipa de desenvolvimento com foco na excelência técnica e inovação",
        },
      },
      cta: {
        title: "Pronto para Transformar o Seu Negócio?",
        subtitle: "Entre em contacto connosco e descubra como podemos ajudar a sua empresa a alcançar novos patamares",
        contact: "Falar Connosco",
        projects: "Ver Projetos",
      },
    },

    // Contact page
    contact: {
      hero: {
        title: "Entre em Contacto",
        subtitle: "Estamos aqui para ajudar a transformar as suas ideias em realidade digital",
      },
      form: {
        title: "Envie-nos uma Mensagem",
        name: "Nome",
        email: "Email",
        company: "Empresa",
        message: "Mensagem",
        submit: "Enviar Mensagem",
      },
      info: {
        title: "Informações de Contacto",
        email: "Email",
        phone: "Telefone",
        address: "Morada",
        hours: "Horário de Funcionamento",
        weekdays: "Segunda a Sexta: 9h00 - 18h00",
      },
      success: {
        title: "Mensagem Enviada!",
        message: "Obrigado pelo seu contacto. Responderemos em breve.",
      },
    },

    // Development page
    development: {
      hero: {
        title: "Desenvolvimento de Software",
        subtitle: "Criamos soluções digitais personalizadas para impulsionar o seu negócio",
      },
      services: {
        title: "Os Nossos Serviços",
        subtitle: "Soluções completas de desenvolvimento",
        carousel: {
          website: "Websites Corporativos",
          mobile: "Aplicações Móveis",
          corporate: "Sistemas Corporativos",
          apis: "APIs e Integrações",
        },
      },
      features: {
        title: "Características dos Nossos Serviços",
        subtitle: "O que nos diferencia no mercado",
        performance: {
          title: "Alta Performance",
          description: "Otimizamos cada linha de código para máxima eficiência",
        },
        security: {
          title: "Segurança",
          description: "Implementamos as melhores práticas de segurança",
        },
        ux: {
          title: "Experiência do Utilizador",
          description: "Interfaces intuitivas e experiências memoráveis",
        },
        quality: {
          title: "Qualidade",
          description: "Testes rigorosos e código de alta qualidade",
        },
      },
      why: {
        title: "Porquê Escolher-nos?",
        subtitle: "Combinamos experiência técnica com paixão pela inovação",
      },
      cta: {
        title: "Pronto para Começar?",
        subtitle: "Vamos discutir o seu próximo projeto e como podemos ajudar",
        button: "Iniciar Projeto",
      },
    },

    // Agile page
    agile: {
      hero: {
        title: "Metodologia Ágil",
        subtitle: "Desenvolvemos software com agilidade, qualidade e foco no cliente",
      },
      benefits: {
        title: "Benefícios da Metodologia Ágil",
        subtitle: "Como a agilidade transforma o desenvolvimento de software",
        delivery: {
          title: "Entrega Rápida",
          description: "Entregas frequentes e incrementais de valor",
        },
        collaboration: {
          title: "Colaboração",
          description: "Trabalho em equipa e comunicação constante",
        },
        flexibility: {
          title: "Flexibilidade",
          description: "Adaptação rápida a mudanças e novos requisitos",
        },
        quality: {
          title: "Qualidade",
          description: "Foco na qualidade através de testes contínuos",
        },
      },
      process: {
        title: "O Nosso Processo Ágil",
        subtitle: "Como implementamos a metodologia ágil nos nossos projetos",
        planning: {
          title: "Planeamento",
          description: "Definição de objetivos e prioridades do projeto",
        },
        sprints: {
          title: "Sprints",
          description: "Desenvolvimento em ciclos curtos e focados",
        },
        review: {
          title: "Revisão",
          description: "Avaliação contínua e feedback do cliente",
        },
        delivery: {
          title: "Entrega",
          description: "Implementação e entrega de funcionalidades",
        },
      },
    },

    // Chatbot page
    chatbot: {
      hero: {
        title: "Chatbot Inteligente",
        subtitle: "Automatize o atendimento ao cliente com inteligência artificial",
      },
      features: {
        title: "Funcionalidades do Chatbot",
        subtitle: "Recursos avançados para melhor atendimento",
        conversations: {
          title: "Conversas Naturais",
          description: "Diálogos fluidos e naturais com os utilizadores",
        },
        availability: {
          title: "Disponibilidade 24/7",
          description: "Atendimento contínuo, todos os dias da semana",
        },
        channels: {
          title: "Multi-canal",
          description: "Integração com website, WhatsApp e redes sociais",
        },
        analytics: {
          title: "Análises",
          description: "Relatórios detalhados sobre interações e performance",
        },
      },
      benefits: {
        title: "Benefícios do Chatbot",
        subtitle: "Como um chatbot pode transformar o seu negócio",
        response: {
          title: "Resposta Imediata",
          description: "Respostas instantâneas às dúvidas dos clientes",
        },
        costs: {
          title: "Redução de Custos",
          description: "Diminuição significativa nos custos de atendimento",
        },
        satisfaction: {
          title: "Satisfação do Cliente",
          description: "Melhoria na experiência e satisfação dos utilizadores",
        },
        scalability: {
          title: "Escalabilidade",
          description: "Atendimento simultâneo de múltiplos clientes",
        },
      },
      demo: {
        title: "Demonstração do Chatbot",
        subtitle: "Veja como funciona na prática",
      },
      chat: {
        bot: {
          greeting: "Olá! Como posso ajudá-lo hoje?",
          options: "Posso ajudar com: 1) Informações sobre produtos 2) Suporte técnico 3) Falar com um humano",
          confirm: "Perfeito! Vou processar o seu pedido. Mais alguma coisa?",
          success: "Pedido processado com sucesso! Obrigado por contactar-nos.",
        },
        user: {
          order: "Gostaria de fazer um pedido",
          choice: "Opção 1 - Informações sobre produtos",
          confirm: "Sim, por favor",
        },
      },
      cta: {
        title: "Pronto para Automatizar?",
        subtitle: "Implemente um chatbot inteligente no seu negócio hoje mesmo",
        button: "Solicitar Demonstração",
      },
    },

    // Landing Pages page
    landingPages: {
      hero: {
        title: "Landing Pages",
        subtitle: "Páginas de conversão otimizadas para maximizar os seus resultados",
      },
      features: {
        title: "Características das Nossas Landing Pages",
        subtitle: "Elementos essenciais para conversão",
        conversion: {
          title: "Alta Conversão",
          description: "Design otimizado para maximizar conversões",
        },
        responsive: {
          title: "Design Responsivo",
          description: "Perfeita visualização em todos os dispositivos",
        },
        seo: {
          title: "SEO Otimizado",
          description: "Otimização para motores de busca",
        },
        analytics: {
          title: "Análises Detalhadas",
          description: "Acompanhamento completo de métricas",
        },
      },
      benefits: {
        title: "Benefícios das Landing Pages",
        subtitle: "Como uma landing page pode impulsionar o seu negócio",
        focus: {
          title: "Foco no Objetivo",
          description: "Página dedicada a uma ação específica",
        },
        sales: {
          title: "Aumento de Vendas",
          description: "Maior taxa de conversão de visitantes em clientes",
        },
        design: {
          title: "Design Profissional",
          description: "Visual atrativo e profissional",
        },
        speed: {
          title: "Carregamento Rápido",
          description: "Otimização para velocidade de carregamento",
        },
      },
      cta: {
        title: "Pronto para Converter Mais?",
        subtitle: "Crie uma landing page que realmente converte visitantes em clientes",
        button: "Solicitar Orçamento",
      },
    },

    // Careers page
    careers: {
      hero: {
        title: "Junte-se à Nossa Equipa",
        subtitle: "Descubra oportunidades emocionantes na VianaHub e construa o futuro da tecnologia connosco",
      },
      positions: {
        title: "Posições Disponíveis",
        subtitle: "Encontre a oportunidade perfeita para a sua carreira",
        viewDetails: "Ver Detalhes",
        apply: "Candidatar-me",
        talentBankNote: "Não encontrou a posição ideal?",
        talentBank: "Banco de Talentos",
        joinTalentBank: "Juntar ao Banco de Talentos",
        "1": {
          title: "Desenvolvedor Full Stack",
          department: "Desenvolvimento",
          location: "Remoto",
          type: "Tempo Integral",
          description: "Procuramos um desenvolvedor experiente para trabalhar em projetos inovadores.",
          requirements: [
            "3+ anos de experiência em desenvolvimento web",
            "Conhecimento em React, Node.js e bases de dados",
            "Experiência com metodologias ágeis",
            "Inglês fluente",
          ],
          responsibilities: [
            "Desenvolver aplicações web completas",
            "Colaborar com equipas multidisciplinares",
            "Manter código de alta qualidade",
            "Participar em revisões de código",
          ],
          benefits: ["Salário competitivo", "Trabalho remoto", "Formação contínua", "Seguro de saúde"],
        },
        "2": {
          title: "Designer UX/UI",
          department: "Design",
          location: "Híbrido",
          type: "Tempo Integral",
          description: "Criamos experiências digitais excepcionais para os nossos clientes.",
          requirements: [
            "2+ anos de experiência em design UX/UI",
            "Domínio de Figma e Adobe Creative Suite",
            "Portfolio sólido",
            "Conhecimento de design responsivo",
          ],
          responsibilities: [
            "Criar wireframes e protótipos",
            "Desenvolver interfaces intuitivas",
            "Realizar testes de usabilidade",
            "Colaborar com desenvolvedores",
          ],
          benefits: [
            "Ambiente criativo",
            "Flexibilidade de horários",
            "Projetos desafiantes",
            "Equipamento de última geração",
          ],
        },
      },
      parallax: {
        title: "Construa o Futuro Connosco",
        subtitle: "Junte-se a uma equipa que valoriza a inovação, criatividade e crescimento profissional.",
      },
      why: {
        title: "Porquê Trabalhar Connosco?",
        subtitle: "Descubra o que nos torna um local especial para trabalhar",
        innovation: {
          title: "Inovação",
          description: "Trabalhe com as tecnologias mais recentes e projetos desafiantes",
        },
        team: {
          title: "Equipa",
          description: "Colabore com profissionais talentosos e apaixonados",
        },
        growth: {
          title: "Crescimento",
          description: "Desenvolva as suas competências com formação contínua",
        },
        wellbeing: {
          title: "Bem-estar",
          description: "Ambiente de trabalho saudável e equilibrado",
        },
      },
      application: {
        title: "Candidatura",
        general: "Candidatura Geral",
        personalInfo: "Informações Pessoais",
        name: "Nome Completo",
        email: "Email",
        phone: "Telefone",
        educationExperienceTitle: "Formação e Experiência",
        education: "Formação Académica",
        educationPlaceholder: "Descreva a sua formação académica...",
        experience: "Experiência Profissional",
        experiencePlaceholder: "Descreva a sua experiência profissional relevante...",
        motivation: "Motivação",
        motivationLabel: "Porque quer trabalhar connosco?",
        motivationPlaceholder: "Partilhe a sua motivação para se juntar à nossa equipa...",
        cv: "Curriculum Vitae",
        cvLabel: "Anexar CV (PDF, DOC, DOCX)",
        fileSelected: "Ficheiro selecionado:",
        terms: "Aceito os termos e condições de candidatura",
        acceptTermsAlert: "Deve aceitar os termos e condições para continuar.",
        cancel: "Cancelar",
        submit: "Enviar Candidatura",
        successMessage: "Candidatura enviada com sucesso! Entraremos em contacto em breve.",
      },
      positionDetails: {
        description: "Descrição",
        requirements: "Requisitos",
        responsibilities: "Responsabilidades",
        benefits: "Benefícios",
        salary: "Salário",
      },
    },

    // Entertainment section
    entertainment: {
      title: "Entretenimento",
      subtitle: "Relaxe e divirta-se com os nossos jogos",
      foxMaze: {
        title: "Fox Maze",
        description: "Ajude a raposa a encontrar o oásis no deserto",
        play: "Jogar Agora",
      },
    },

    // Common
    common: {
      loading: "A carregar...",
      error: "Erro",
      success: "Sucesso",
      cancel: "Cancelar",
      save: "Guardar",
      edit: "Editar",
      delete: "Eliminar",
      confirm: "Confirmar",
      back: "Voltar",
      next: "Seguinte",
      previous: "Anterior",
      close: "Fechar",
      open: "Abrir",
      yes: "Sim",
      no: "Não",
      ok: "OK",
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About Us",
      careers: "Careers",
      contact: "Contact",
    },

    // Menu items
    whatWeDo: "What We Do",
    industry: "Industry",
    security: "Security",
    engineering: "Engineering",
    institutional: "Institutional",

    menu: {
      development: "Development",
      agile: "Agile Methodology",
      chatbot: "Chatbot",
      "landing-pages": "Landing Pages",
      outsourcing: "Outsourcing",
      "system-integration": "System Integration",
      railway: "Railway Engineering",
      road: "Road Engineering",
      "solar-energy": "Solar Energy",
      education: "Education",
      government: "Government",
      manufacturing: "Manufacturing",
      financial: "Financial",
      retail: "Retail",
      healthcare: "Healthcare",
      cybersecurity: "Cybersecurity",
      backups: "Backups",
      access: "Access Control",
      institutional: "Institutional",
      about: "About Us",
      careers: "Careers",
    },

    // Hero section
    hero: {
      title: {
        line1: "We Transform",
        line2: "Ideas into",
        line3: "Digital Solutions",
      },
      subtitle:
        "We develop custom software, web and mobile applications that drive your business into the digital future.",
      stats: {
        projects: "Projects",
        clients: "Clients",
        years: "Years",
      },
    },

    // Services section
    services: {
      title: {
        part1: "Our",
        part2: "Services",
      },
      subtitle: "We offer complete solutions to transform your business",
      web: {
        title: "Web Development",
        description: "We create modern and responsive web applications",
      },
      mobile: {
        title: "Mobile Applications",
        description: "Native and hybrid apps for iOS and Android",
      },
      landing: {
        title: "Landing Pages",
        description: "Conversion-optimized pages for results",
      },
      integration: {
        title: "System Integration",
        description: "We connect your systems efficiently",
      },
      security: {
        title: "Security",
        description: "We protect your data and systems",
      },
      automation: {
        title: "Automation",
        description: "We automate processes for greater efficiency",
      },
      cta: "Learn More",
    },

    // Projects section
    projects: {
      title: {
        part1: "Featured",
        part2: "Projects",
      },
      subtitle: "Some of our most recent work",
      viewProject: "View Project",
      cta: "View All Projects",
      ecommerce: {
        title: "E-commerce Platform",
        category: "E-commerce",
        description: "Complete e-commerce platform with inventory management",
      },
      hospital: {
        title: "Hospital System",
        category: "Healthcare",
        description: "Hospital management system with scheduling and medical records",
      },
      delivery: {
        title: "Delivery App",
        category: "Mobile",
        description: "Mobile food delivery application with tracking",
      },
      banking: {
        title: "Banking System",
        category: "Fintech",
        description: "Digital banking platform with advanced security",
      },
      education: {
        title: "Educational Platform",
        category: "Education",
        description: "Online learning system with video conferencing",
      },
      logistics: {
        title: "Logistics System",
        category: "Logistics",
        description: "Complete fleet and delivery management",
      },
      streaming: {
        title: "Streaming Platform",
        category: "Media",
        description: "Video streaming service with global CDN",
      },
      crm: {
        title: "CRM System",
        category: "Business",
        description: "Customer relationship management",
      },
    },

    // Industries section
    industries: {
      title: {
        part1: "Industries We",
        part2: "Serve",
      },
      subtitle: "Specialized experience across various sectors",
      education: {
        title: "Education",
        description: "Solutions for educational institutions and learning platforms",
      },
      financial: {
        title: "Financial",
        description: "Banking systems and secure fintech solutions",
      },
      government: {
        title: "Government",
        description: "Digital platforms for public services",
      },
      healthcare: {
        title: "Healthcare",
        description: "Hospital systems and medical applications",
      },
      manufacturing: {
        title: "Manufacturing",
        description: "Industrial automation and production systems",
      },
      retail: {
        title: "Retail",
        description: "E-commerce and commercial management systems",
      },
      cta: "Learn More",
    },

    // Testimonials section
    testimonials: {
      title: {
        part1: "What Our",
        part2: "Clients Say",
      },
      subtitle: "Real feedback from companies that trusted us",
      ana: {
        name: "Ana Costa",
        role: "CEO, TechStart",
        content:
          "VianaHub completely transformed our digital presence. The professionalism and quality of work are exceptional.",
      },
      roberto: {
        name: "Roberto Lima",
        role: "IT Director, InnovaCorp",
        content: "Excellent partnership! They delivered the project on time and exceeded our expectations in every aspect.",
      },
      maria: {
        name: "Maria Silva",
        role: "Founder, EduTech",
        content: "The VianaHub team is highly competent and always available. I recommend without hesitation!",
      },
      carlos: {
        name: "Carlos Oliveira",
        role: "Project Manager, FinanceFlow",
        content:
          "Dedicated professionals who truly understand business needs. The final result was impeccable.",
      },
      lucia: {
        name: "Lúcia Ferreira",
        role: "Commercial Director, RetailMax",
        content: "Our e-commerce platform developed by VianaHub increased sales by 300%. Fantastic!",
      },
      joao: {
        name: "João Santos",
        role: "CTO, HealthCare+",
        content: "Cutting-edge technology and exceptional support. VianaHub is the ideal partner for complex projects.",
      },
    },

    // Insights section
    insights: {
      subtitle: "Data that proves our excellence",
      growth: {
        title: "Growth",
        description: "Average growth of our clients",
      },
      experience: {
        title: "Satisfaction",
        description: "Client satisfaction rate",
      },
      innovation: {
        title: "Innovation",
        description: "Projects with innovative technologies",
      },
      results: {
        title: "Results",
        description: "Projects delivered on time",
      },
    },

    // Footer
    footer: {
      description: "We transform ideas into innovative digital solutions",
      services: "Services",
      company: "Company",
      contact: "Contact",
      rights: "All rights reserved.",
    },

    // About page
    about: {
      hero: {
        title: "About VianaHub",
        subtitle: "We are a technology company dedicated to transforming ideas into innovative digital solutions",
        cta: {
          history: "Our History",
          team: "Our Team",
        },
      },
      mission: {
        title: "Our Mission",
        description:
          "Empower companies through innovative technological solutions, creating value and driving sustainable growth for our clients.",
      },
      vision: {
        title: "Our Vision",
        description:
          "To be recognized as a leader in digital transformation, offering solutions that shape the future of business.",
      },
      values: {
        badge: "Our Values",
        title: "What Drives Us",
        subtitle: "Fundamental principles that guide all our actions and decisions",
        innovation: {
          title: "Innovation",
          description: "We constantly seek new ways to solve problems and create value",
        },
        commitment: {
          title: "Commitment",
          description: "We dedicate ourselves entirely to the success of our clients and projects",
        },
        reliability: {
          title: "Reliability",
          description: "We build lasting relationships based on trust and transparency",
        },
        agility: {
          title: "Agility",
          description: "We adapt quickly to market changes and needs",
        },
      },
      history: {
        badge: "Our Journey",
        title: "VianaHub's History",
        subtitle: "A trajectory of growth, innovation and achievements",
        foundation: {
          title: "Foundation",
          description: "VianaHub was founded with the goal of democratizing access to quality technology",
        },
        projects: {
          title: "First Projects",
          description: "We developed our first significant projects, establishing our reputation in the market",
        },
        expansion: {
          title: "Expansion",
          description: "We expanded our team and service portfolio, serving clients in various sectors",
        },
        growth: {
          title: "Growth",
          description: "We consolidated our position as a reference in innovative digital solutions",
        },
      },
      team: {
        badge: "Our Team",
        title: "Meet Who Makes It Happen",
        subtitle: "Professionals passionate about technology and dedicated to excellence",
        tatiana: {
          role: "CEO & Founder",
          description: "Visionary and strategic leader, drives the company towards constant innovation",
        },
        dener: {
          role: "CTO & Co-founder",
          description: "Technical specialist responsible for the architecture and quality of our solutions",
        },
        carlos: {
          role: "Development Director",
          description: "Leads the development team with focus on technical excellence and innovation",
        },
      },
      cta: {
        title: "Ready to Transform Your Business?",
        subtitle: "Contact us and discover how we can help your company reach new heights",
        contact: "Talk to Us",
        projects: "View Projects",
      },
    },

    // Contact page
    contact: {
      hero: {
        title: "Get in Touch",
        subtitle: "We're here to help transform your ideas into digital reality",
      },
      form: {
        title: "Send us a Message",
        name: "Name",
        email: "Email",
        company: "Company",
        message: "Message",
        submit: "Send Message",
      },
      info: {
        title: "Contact Information",
        email: "Email",
        phone: "Phone",
        address: "Address",
        hours: "Business Hours",
        weekdays: "Monday to Friday: 9:00 AM - 6:00 PM",
      },
      success: {
        title: "Message Sent!",
        message: "Thank you for your contact. We'll respond shortly.",
      },
    },

    // Development page
    development: {
      hero: {
        title: "Software Development",
        subtitle: "We create custom digital solutions to boost your business",
      },
      services: {
        title: "Our Services",
        subtitle: "Complete development solutions",
        carousel: {
          website: "Corporate Websites",
          mobile: "Mobile Applications",
          corporate: "Corporate Systems",
          apis: "APIs and Integrations",
        },
      },
      features: {
        title: "Our Service Features",
        subtitle: "What sets us apart in the market",
        performance: {
          title: "High Performance",
          description: "We optimize every line of code for maximum efficiency",
        },
        security: {
          title: "Security",
          description: "We implement security best practices",
        },
        ux: {
          title: "User Experience",
          description: "Intuitive interfaces and memorable experiences",
        },
        quality: {
          title: "Quality",
          description: "Rigorous testing and high-quality code",
        },
      },
      why: {
        title: "Why Choose Us?",
        subtitle: "We combine technical expertise with passion for innovation",
      },
      cta: {
        title: "Ready to Start?",
        subtitle: "Let's discuss your next project and how we can help",
        button: "Start Project",
      },
    },

    // Agile page
    agile: {
      hero: {
        title: "Agile Methodology",
        subtitle: "We develop software with agility, quality and customer focus",
      },
      benefits: {
        title: "Benefits of Agile Methodology",
        subtitle: "How agility transforms software development",
        delivery: {
          title: "Fast Delivery",
          description: "Frequent and incremental value deliveries",
        },
        collaboration: {
          title: "Collaboration",
          description: "Teamwork and constant communication",
        },
        flexibility: {
          title: "Flexibility",
          description: "Quick adaptation to changes and new requirements",
        },
        quality: {
          title: "Quality",
          description: "Focus on quality through continuous testing",
        },
      },
      process: {
        title: "Our Agile Process",
        subtitle: "How we implement agile methodology in our projects",
        planning: {
          title: "Planning",
          description: "Definition of project objectives and priorities",
        },
        sprints: {
          title: "Sprints",
          description: "Development in short and focused cycles",
        },
        review: {
          title: "Review",
          description: "Continuous evaluation and client feedback",
        },
        delivery: {
          title: "Delivery",
          description: "Implementation and delivery of features",
        },
      },
    },

    // Chatbot page
    chatbot: {
      hero: {
        title: "Intelligent Chatbot",
        subtitle: "Automate customer service with artificial intelligence",
      },
      features: {
        title: "Chatbot Features",
        subtitle: "Advanced resources for better service",
        conversations: {
          title: "Natural Conversations",
          description: "Fluid and natural dialogues with users",
        },
        availability: {
          title: "24/7 Availability",
          description: "Continuous service, every day of the week",
        },
        channels: {
          title: "Multi-channel",
          description: "Integration with website, WhatsApp and social media",
        },
        analytics: {
          title: "Analytics",
          description: "Detailed reports on interactions and performance",
        },
      },
      benefits: {
        title: "Chatbot Benefits",
        subtitle: "How a chatbot can transform your business",
        response: {
          title: "Immediate Response",
          description: "Instant responses to customer queries",
        },
        costs: {
          title: "Cost Reduction",
          description: "Significant decrease in service costs",
        },
        satisfaction: {
          title: "Customer Satisfaction",
          description: "Improvement in user experience and satisfaction",
        },
        scalability: {
          title: "Scalability",
          description: "Simultaneous service to multiple customers",
        },
      },
      demo: {
        title: "Chatbot Demo",
        subtitle: "See how it works in practice",
      },
      chat: {
        bot: {
          greeting: "Hello! How can I help you today?",
          options: "I can help with: 1) Product information 2) Technical support 3) Talk to a human",
          confirm: "Perfect! I'll process your request. Anything else?",
          success: "Request processed successfully! Thank you for contacting us.",
        },
        user: {
          order: "I would like to place an order",
          choice: "Option 1 - Product information",
          confirm: "Yes, please",
        },
      },
      cta: {
        title: "Ready to Automate?",
        subtitle: "Implement an intelligent chatbot in your business today",
        button: "Request Demo",
      },
    },

    // Landing Pages page
    landingPages: {
      hero: {
        title: "Landing Pages",
        subtitle: "Conversion-optimized pages to maximize your results",
      },
      features: {
        title: "Our Landing Page Features",
        subtitle: "Essential elements for conversion",
        conversion: {
          title: "High Conversion",
          description: "Design optimized to maximize conversions",
        },
        responsive: {
          title: "Responsive Design",
          description: "Perfect visualization on all devices",
        },
        seo: {
          title: "SEO Optimized",
          description: "Search engine optimization",
        },
        analytics: {
          title: "Detailed Analytics",
          description: "Complete metrics tracking",
        },
      },
      benefits: {
        title: "Landing Page Benefits",
        subtitle: "How a landing page can boost your business",
        focus: {
          title: "Goal Focus",
          description: "Page dedicated to a specific action",
        },
        sales: {
          title: "Increased Sales",
          description: "Higher conversion rate from visitors to customers",
        },
        design: {
          title: "Professional Design",
          description: "Attractive and professional visual",
        },
        speed: {
          title: "Fast Loading",
          description: "Optimization for loading speed",
        },
      },
      cta: {
        title: "Ready to Convert More?",
        subtitle: "Create a landing page that really converts visitors into customers",
        button: "Request Quote",
      },
    },

    // Careers page
    careers: {
      hero: {
        title: "Join Our Team",
        subtitle: "Discover exciting opportunities at VianaHub and build the future of technology with us",
      },
      positions: {
        title: "Available Positions",
        subtitle: "Find the perfect opportunity for your career",
        viewDetails: "View Details",
        apply: "Apply",
        talentBankNote: "Didn't find the ideal position?",
        talentBank: "Talent Bank",
        joinTalentBank: "Join Talent Bank",
        "1": {
          title: "Full Stack Developer",
          department: "Development",
          location: "Remote",
          type: "Full Time",
          description: "We're looking for an experienced developer to work on innovative projects.",
          requirements: [
            "3+ years of web development experience",
            "Knowledge of React, Node.js and databases",
            "Experience with agile methodologies",
            "Fluent English",
          ],
          responsibilities: [
            "Develop complete web applications",
            "Collaborate with multidisciplinary teams",
            "Maintain high-quality code",
            "Participate in code reviews",
          ],
          benefits: ["Competitive salary", "Remote work", "Continuous training", "Health insurance"],
        },
        "2": {
          title: "UX/UI Designer",
          department: "Design",
          location: "Hybrid",
          type: "Full Time",
          description: "We create exceptional digital experiences for our clients.",
          requirements: [
            "2+ years of UX/UI design experience",
            "Proficiency in Figma and Adobe Creative Suite",
            "Strong portfolio",
            "Knowledge of responsive design",
          ],
          responsibilities: [
            "Create wireframes and prototypes",
            "Develop intuitive interfaces",
            "Conduct usability testing",
            "Collaborate with developers",
          ],
          benefits: ["Creative environment", "Flexible hours", "Challenging projects", "Latest equipment"],
        },
      },
      parallax: {
        title: "Build the Future With Us",
        subtitle: "Join a team that values innovation, creativity and professional growth.",
      },
      why: {
        title: "Why Work With Us?",
        subtitle: "Discover what makes us a special place to work",
        innovation: {
          title: "Innovation",
          description: "Work with the latest technologies and challenging projects",
        },
        team: {
          title: "Team",
          description: "Collaborate with talented and passionate professionals",
        },
        growth: {
          title: "Growth",
          description: "Develop your skills with continuous training",
        },
        wellbeing: {
          title: "Well-being",
          description: "Healthy and balanced work environment",
        },
      },
      application: {
        title: "Application",
        general: "General Application",
        personalInfo: "Personal Information",
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        educationExperienceTitle: "Education and Experience",
        education: "Academic Background",
        educationPlaceholder: "Describe your academic background...",
        experience: "Professional Experience",
        experiencePlaceholder: "Describe your relevant professional experience...",
        motivation: "Motivation",
        motivationLabel: "Why do you want to work with us?",
        motivationPlaceholder: "Share your motivation to join our team...",
        cv: "Curriculum Vitae",
        cvLabel: "Attach CV (PDF, DOC, DOCX)",
        fileSelected: "File selected:",
        terms: "I accept the application terms and conditions",
        acceptTermsAlert: "You must accept the terms and conditions to continue.",
        cancel: "Cancel",
        submit: "Submit Application",
        successMessage: "Application submitted successfully! We'll be in touch soon.",
      },
      positionDetails: {
        description: "Description",
        requirements: "Requirements",
        responsibilities: "Responsibilities",
        benefits: "Benefits",
        salary: "Salary",
      },
    },

    // Entertainment section
    entertainment: {
      title: "Entertainment",
      subtitle: "Relax and have fun with our games",
      foxMaze: {
        title: "Fox Maze",
        description: "Help the fox find the oasis in the desert",
        play: "Play Now",
      },
    },

    // Common
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      cancel: "Cancel",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      confirm: "Confirm",
      back: "Back",
      next: "Next",
      previous: "Previous",
      close: "Close",
      open: "Open",
      yes: "Yes",
      no: "No",
      ok: "OK",
    },
  },
  es: {
    // Navigation
    nav: {
      home: "Inicio",
      about: "Sobre Nosotros",
      careers: "Carreras",
      contact: "Contacto",
    },

    // Menu items
    whatWeDo: "Qué Hacemos",
    industry: "Industria",
    security: "Seguridad",
    engineering: "Ingeniería",
    institutional: "Institucional",

    menu: {
      development: "Desarrollo",
      agile: "Metodología Ágil",
      chatbot: "Chatbot",
      "landing-pages": "Landing Pages",
      outsourcing: "Outsourcing",
      "system-integration": "Integración de Sistemas",
      railway: "Ingeniería Ferroviaria",
      road: "Ingeniería de Carreteras",
      "solar-energy": "Energía Solar",
      education: "Educación",
      government: "Gobierno",
      manufacturing: "Manufactura",
      financial: "Financiero",
      retail: "Retail",
      healthcare: "Salud",
      cybersecurity: "Ciberseguridad",
      backups: "Copias de Seguridad",
      access: "Control de Acceso",
      institutional: "Institucional",
      about: "Sobre Nosotros",
      careers: "Carreras",
    },

    // Hero section
    hero: {
      title: {
        line1: "Transformamos",
        line2: "Ideas en",
        line3: "Soluciones Digitales",
      },
      subtitle:
        "Desarrollamos software personalizado, aplicaciones web y móviles que impulsan tu negocio hacia el futuro digital.",
      stats: {
        projects: "Proyectos",
        clients: "Clientes",
        years: "Años",
      },
    },

    // Services section
    services: {
      title: {
        part1: "Nuestros",
        part2: "Servicios",
      },
      subtitle: "Ofrecemos soluciones completas para transformar tu negocio",
      web: {
        title: "Desarrollo Web",
        description: "Creamos aplicaciones web modernas y responsivas",
      },
      mobile: {
        title: "Aplicaciones Móviles",
        description: "Apps nativas e híbridas para iOS y Android",
      },
      landing: {
        title: "Landing Pages",
        description: "Páginas de conversión optimizadas para resultados",
      },
      integration: {
        title: "Integración de Sistemas",
        description: "Conectamos tus sistemas de manera eficiente",
      },
      security: {
        title: "Seguridad",
        description: "Protegemos tus datos y sistemas",
      },
      automation: {
        title: "Automatización",
        description: "Automatizamos procesos para mayor eficiencia",
      },
      cta: "Saber Más",
    },

    // Projects section
    projects: {
      title: {
        part1: "Proyectos",
        part2: "Destacados",
      },
      subtitle: "Algunos de nuestros trabajos más recientes",
      viewProject: "Ver Proyecto",
      cta: "Ver Todos los Proyectos",
      ecommerce: {
        title: "Plataforma E-commerce",
        category: "E-commerce",
        description: "Plataforma completa de comercio electrónico con gestión de inventario",
      },
      hospital: {
        title: "Sistema Hospitalario",
        category: "Salud",
        description: "Sistema de gestión hospitalaria con citas y historiales médicos",
      },
      delivery: {
        title: "App de Delivery",
        category: "Móvil",
        description: "Aplicación móvil de entrega de comida con seguimiento",
      },
      banking: {
        title: "Sistema Bancario",
        category: "Fintech",
        description: "Plataforma bancaria digital con seguridad avanzada",
      },
      education: {
        title: "Plataforma Educativa",
        category: "Educación",
        description: "Sistema de aprendizaje en línea con videoconferencia",
      },
      logistics: {
        title: "Sistema de Logística",
        category: "Logística",
        description: "Gestión completa de flota y entregas",
      },
      streaming: {
        title: "Plataforma de Streaming",
        category: "Media",
        description: "Servicio de streaming de video con CDN global",
      },
      crm: {
        title: "Sistema CRM",
        category: "Negocios",
        description: "Gestión de relaciones con clientes",
      },
    },

    // Industries section
    industries: {
      title: {
        part1: "Industrias que",
        part2: "Servimos",
      },
      subtitle: "Experiencia especializada en diversos sectores",
      education: {
        title: "Educación",
        description: "Soluciones para instituciones educativas y plataformas de aprendizaje",
      },
      financial: {
        title: "Financiero",
        description: "Sistemas bancarios y soluciones fintech seguras",
      },
      government: {
        title: "Gobierno",
        description: "Plataformas digitales para servicios públicos",
      },
      healthcare: {
        title: "Salud",
        description: "Sistemas hospitalarios y aplicaciones médicas",
      },
      manufacturing: {
        title: "Manufactura",
        description: "Automatización industrial y sistemas de producción",
      },
      retail: {
        title: "Retail",
        description: "E-commerce y sistemas de gestión comercial",
      },
      cta: "Saber Más",
    },

    // Testimonials section
    testimonials: {
      title: {
        part1: "Lo que Dicen",
        part2: "Nuestros Clientes",
      },
      subtitle: "Comentarios reales de empresas que confiaron en nosotros",
      ana: {
        name: "Ana Costa",
        role: "CEO, TechStart",
        content:
          "VianaHub transformó completamente nuestra presencia digital. El profesionalismo y la calidad del trabajo son excepcionales.",
      },
      roberto: {
        name: "Roberto Lima",
        role: "Director de TI, InnovaCorp",
        content:
          "¡Excelente asociación! Entregaron el proyecto a tiempo y superaron nuestras expectativas en todos los aspectos.",
      },
      maria: {
        name: "Maria Silva",
        role: "Fundadora, EduTech",
        content: "El equipo de VianaHub es altamente competente y siempre disponible. ¡Recomiendo sin dudarlo!",
      },
      carlos: {
        name: "Carlos Oliveira",
        role: "Gerente de Proyectos, FinanceFlow",
        content:
          "Profesionales dedicados que realmente entienden las necesidades del negocio. El resultado final fue impecable.",
      },
      lucia: {
        name: "Lúcia Ferreira",
        role: "Directora Comercial, RetailMax",
        content:
          "Nuestra plataforma de e-commerce desarrollada por VianaHub aumentó las ventas en un 300%. ¡Fantástico!",
      },
      joao: {
        name: "João Santos",
        role: "CTO, HealthCare+",
        content:
          "Tecnología de vanguardia y soporte excepcional. VianaHub es el socio ideal para proyectos complejos.",
      },
    },

    // Insights section
    insights: {
      subtitle: "Datos que comprueban nuestra excelencia",
      growth: {
        title: "Crecimiento",
        description: "Crecimiento promedio de nuestros clientes",
      },
      experience: {
        title: "Satisfacción",
        description: "Tasa de satisfacción de clientes",
      },
      innovation: {
        title: "Innovación",
        description: "Proyectos con tecnologías innovadoras",
      },
      results: {
        title: "Resultados",
        description: "Proyectos entregados a tiempo",
      },
    },

    // Footer
    footer: {
      description: "Transformamos ideas en soluciones digitales innovadoras",
      services: "Servicios",
      company: "Empresa",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
    },

    // About page
    about: {
      hero: {
        title: "Sobre VianaHub",
        subtitle: "Somos una empresa de tecnología dedicada a transformar ideas en soluciones digitales innovadoras",
        cta: {
          history: "Nuestra Historia",
          team: "Nuestro Equipo",
        },
      },
      mission: {
        title: "Nuestra Misión",
        description:
          "Capacitar empresas a través de soluciones tecnológicas innovadoras, creando valor e impulsando el crecimiento sostenible de nuestros clientes.",
      },
      vision: {
        title: "Nuestra Visión",
        description:
          "Ser reconocida como líder en transformación digital, ofreciendo soluciones que moldean el futuro de los negocios.",
      },
      values: {
        badge: "Nuestros Valores",
        title: "Lo que nos Mueve",
        subtitle: "Principios fundamentales que guían todas nuestras acciones y decisiones",
        innovation: {
          title: "Innovación",
          description: "Buscamos constantemente nuevas formas de resolver problemas y crear valor",
        },
        commitment: {
          title: "Compromiso",
          description: "Nos dedicamos íntegramente al éxito de nuestros clientes y proyectos",
        },
        reliability: {
          title: "Confiabilidad",
          description: "Construimos relaciones duraderas basadas en la confianza y transparencia",
        },
        agility: {
          title: "Agilidad",
          description: "Nos adaptamos rápidamente a los cambios y necesidades del mercado",
        },
      },
      history: {
        badge: "Nuestro Viaje",
        title: "Historia de VianaHub",
        subtitle: "Una trayectoria de crecimiento, innovación y logros",
        foundation: {
          title: "Fundación",
          description: "VianaHub fue fundada con el objetivo de democratizar el acceso a tecnología de calidad",
        },
        projects: {
          title: "Primeros Proyectos",
          description:
            "Desarrollamos nuestros primeros proyectos significativos, estableciendo nuestra reputación en el mercado",
        },
        expansion: {
          title: "Expansión",
          description: "Expandimos nuestro equipo y portafolio de servicios, atendiendo clientes en diversos sectores",
        },
        growth: {
          title: "Crecimiento",
          description: "Consolidamos nuestra posición como referencia en soluciones digitales innovadoras",
        },
      },
      team: {
        badge: "Nuestro Equipo",
        title: "Conoce Quién Hace que Suceda",
        subtitle: "Profesionales apasionados por la tecnología y dedicados a la excelencia",
        tatiana: {
          role: "CEO y Fundadora",
          description: "Visionaria y líder estratégica, conduce la empresa hacia la innovación constante",
        },
        dener: {
          role: "CTO y Co-fundador",
          description: "Especialista técnico responsable de la arquitectura y calidad de nuestras soluciones",
        },
        carlos: {
          role: "Director de Desarrollo",
          description: "Lidera el equipo de desarrollo con enfoque en la excelencia técnica e innovación",
        },
      },
      cta: {
        title: "¿Listo para Transformar tu Negocio?",
        subtitle: "Contáctanos y descubre cómo podemos ayudar a tu empresa a alcanzar nuevas alturas",
        contact: "Hablar con Nosotros",
        projects: "Ver Proyectos",
      },
    },

    // Contact page
    contact: {
      hero: {
        title: "Ponte en Contacto",
        subtitle: "Estamos aquí para ayudar a transformar tus ideas en realidad digital",
      },
      form: {
        title: "Envíanos un Mensaje",
        name: "Nombre",
        email: "Email",
        company: "Empresa",
        message: "Mensaje",
        submit: "Enviar Mensaje",
      },
      info: {
        title: "Información de Contacto",
        email: "Email",
        phone: "Teléfono",
        address: "Dirección",
        hours: "Horario de Atención",
        weekdays: "Lunes a Viernes: 9:00 AM - 6:00 PM",
      },
      success: {
        title: "¡Mensaje Enviado!",
        message: "Gracias por tu contacto. Responderemos pronto.",
      },
    },

    // Development page
    development: {
      hero: {
        title: "Desarrollo de Software",
        subtitle: "Creamos soluciones digitales personalizadas para impulsar tu negocio",
      },
      services: {
        title: "Nuestros Servicios",
        subtitle: "Soluciones completas de desarrollo",
        carousel: {
          website: "Sitios Web\
