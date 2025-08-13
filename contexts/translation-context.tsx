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
    nav: {
      home: "Início",
      about: "Sobre Nós",
      careers: "Carreiras",
      contact: "Contacto",
    },

    // Menu items
    menu: {
      whatWeDo: "O que Fazemos",
      development: "Desenvolvimento",
      agile: "Metodologia Ágil",
      chatbot: "Chatbot",
      "landing-pages": "Landing Pages",
      outsourcing: "Outsourcing",
      "system-integration": "Integração de Sistemas",
      railway: "Engenharia Ferroviária",
      road: "Engenharia Rodoviária",
      "solar-energy": "Energia Solar",
      industry: "Indústrias",
      education: "Educação",
      government: "Governo",
      manufacturing: "Manufatura",
      financial: "Financeiro",
      retail: "Retalho",
      healthcare: "Saúde",
      security: "Segurança",
      cybersecurity: "Cibersegurança",
      backups: "Backups",
      access: "Controlo de Acesso",
      institutional: "Institucional",
      about: "Sobre Nós",
      careers: "Carreiras",
    },

    // Home page sections
    hero: {
      title: "Transformamos Ideias em Soluções Digitais",
      subtitle:
        "Desenvolvemos software personalizado, aplicações web e móveis que impulsionam o seu negócio para o futuro digital.",
      cta: "Começar Projeto",
      learnMore: "Saber Mais",
    },

    services: {
      title: "Os Nossos Serviços",
      subtitle: "Oferecemos soluções completas para transformar o seu negócio",
      development: {
        title: "Desenvolvimento",
        description: "Criamos aplicações web e móveis personalizadas",
      },
      consulting: {
        title: "Consultoria",
        description: "Orientação estratégica para a transformação digital",
      },
      integration: {
        title: "Integração",
        description: "Conectamos os seus sistemas de forma eficiente",
      },
      support: {
        title: "Suporte",
        description: "Apoio técnico contínuo para os seus projetos",
      },
    },

    projects: {
      title: "Projetos em Destaque",
      subtitle: "Alguns dos nossos trabalhos mais recentes",
      viewAll: "Ver Todos os Projetos",
    },

    industries: {
      title: "Indústrias que Servimos",
      subtitle: "Experiência especializada em diversos setores",
    },

    testimonials: {
      title: "O que Dizem os Nossos Clientes",
      subtitle: "Feedback real de empresas que confiaram em nós",
    },

    insights: {
      title: "Insights e Tendências",
      subtitle: "Mantenha-se atualizado com as últimas novidades tecnológicas",
      readMore: "Ler Mais",
    },

    technologies: {
      title: "Tecnologias que Utilizamos",
      subtitle: "Trabalhamos com as mais modernas ferramentas e frameworks",
    },

    careers: {
      title: "Junte-se à Nossa Equipa",
      subtitle: "Procuramos talentos apaixonados por tecnologia e inovação",
      cta: "Candidatar-me",
      positions: {
        title: "Posições Disponíveis",
        subtitle: "Encontre a oportunidade perfeita para a sua carreira",
        viewDetails: "Ver Detalhes",
        apply: "Candidatar-me",
        talentBankNote: "Banco de Talentos",
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
        "3": {
          title: "Gestor de Projeto",
          department: "Gestão",
          location: "Presencial",
          type: "Tempo Integral",
          description: "Lidere projetos tecnológicos do início ao fim.",
          requirements: [
            "Experiência em gestão de projetos",
            "Certificação PMP ou similar",
            "Conhecimento de metodologias ágeis",
            "Excelentes capacidades de comunicação",
          ],
          responsibilities: [
            "Planear e executar projetos",
            "Gerir equipas multidisciplinares",
            "Comunicar com stakeholders",
            "Garantir qualidade e prazos",
          ],
          benefits: [
            "Liderança de equipas",
            "Projetos variados",
            "Desenvolvimento profissional",
            "Bónus por performance",
          ],
        },
        "4": {
          title: "Engenheiro DevOps",
          department: "Infraestrutura",
          location: "Remoto",
          type: "Tempo Integral",
          description: "Otimize e automatize os nossos processos de desenvolvimento.",
          requirements: [
            "Experiência com AWS/Azure",
            "Conhecimento de Docker e Kubernetes",
            "Automação com CI/CD",
            "Scripting em Python/Bash",
          ],
          responsibilities: [
            "Gerir infraestrutura cloud",
            "Implementar pipelines CI/CD",
            "Monitorizar sistemas",
            "Otimizar performance",
          ],
          benefits: ["Tecnologias de ponta", "Trabalho remoto", "Certificações pagas", "Horário flexível"],
        },
        "5": {
          title: "Analista de Dados",
          department: "Analytics",
          location: "Híbrido",
          type: "Tempo Integral",
          description: "Transforme dados em insights valiosos para o negócio.",
          requirements: [
            "Experiência com SQL e Python",
            "Conhecimento de Power BI/Tableau",
            "Estatística e machine learning",
            "Pensamento analítico",
          ],
          responsibilities: [
            "Analisar grandes volumes de dados",
            "Criar dashboards e relatórios",
            "Desenvolver modelos preditivos",
            "Apresentar insights ao negócio",
          ],
          benefits: ["Projetos de IA", "Formação especializada", "Ambiente inovador", "Crescimento rápido"],
        },
        "6": {
          title: "Desenvolvedor Mobile",
          department: "Desenvolvimento",
          location: "Remoto",
          type: "Tempo Integral",
          description: "Crie aplicações móveis que encantam os utilizadores.",
          requirements: [
            "Experiência com React Native/Flutter",
            "Conhecimento de iOS/Android",
            "APIs REST e GraphQL",
            "Testes automatizados",
          ],
          responsibilities: [
            "Desenvolver apps móveis",
            "Otimizar performance",
            "Integrar com APIs",
            "Publicar nas app stores",
          ],
          benefits: ["Projetos móveis inovadores", "Dispositivos de teste", "Trabalho remoto", "Formação contínua"],
        },
        "7": {
          title: "Especialista em Cibersegurança",
          department: "Segurança",
          location: "Presencial",
          type: "Tempo Integral",
          description: "Proteja os nossos sistemas e dados contra ameaças.",
          requirements: [
            "Certificações em segurança",
            "Experiência com pentesting",
            "Conhecimento de compliance",
            "Análise de vulnerabilidades",
          ],
          responsibilities: [
            "Auditorias de segurança",
            "Implementar controlos",
            "Resposta a incidentes",
            "Formação em segurança",
          ],
          benefits: ["Área em crescimento", "Certificações pagas", "Projetos críticos", "Salário competitivo"],
        },
        "8": {
          title: "Arquiteto de Software",
          department: "Arquitetura",
          location: "Híbrido",
          type: "Tempo Integral",
          description: "Desenhe a arquitetura de sistemas complexos e escaláveis.",
          requirements: [
            "10+ anos de experiência",
            "Conhecimento de microserviços",
            "Padrões de arquitetura",
            "Liderança técnica",
          ],
          responsibilities: [
            "Definir arquitetura de sistemas",
            "Mentorizar desenvolvedores",
            "Avaliar tecnologias",
            "Garantir escalabilidade",
          ],
          benefits: ["Posição sénior", "Decisões técnicas", "Projetos complexos", "Pacote atrativo"],
        },
        "9": {
          title: "Estagiário de Desenvolvimento",
          department: "Desenvolvimento",
          location: "Presencial",
          type: "Estágio",
          description: "Inicie a sua carreira em tecnologia connosco.",
          requirements: [
            "Estudante de Informática",
            "Conhecimentos básicos de programação",
            "Vontade de aprender",
            "Trabalho em equipa",
          ],
          responsibilities: [
            "Apoiar em projetos",
            "Aprender tecnologias",
            "Participar em formações",
            "Desenvolver competências",
          ],
          benefits: ["Mentoria dedicada", "Experiência real", "Possibilidade de contratação", "Ambiente jovem"],
        },
        "10": {
          title: "Consultor Funcional",
          department: "Consultoria",
          location: "Cliente",
          type: "Tempo Integral",
          description: "Ajude clientes a otimizar os seus processos de negócio.",
          requirements: [
            "Experiência em consultoria",
            "Conhecimento de ERP/CRM",
            "Análise de processos",
            "Comunicação excelente",
          ],
          responsibilities: [
            "Analisar processos cliente",
            "Propor melhorias",
            "Implementar soluções",
            "Formar utilizadores",
          ],
          benefits: ["Contacto com clientes", "Projetos variados", "Viagens ocasionais", "Crescimento profissional"],
        },
        "11": {
          title: "Especialista em Marketing Digital",
          department: "Marketing",
          location: "Híbrido",
          type: "Tempo Integral",
          description: "Promova a nossa marca e serviços no mundo digital.",
          requirements: [
            "Experiência em marketing digital",
            "Google Ads e Facebook Ads",
            "SEO e content marketing",
            "Analytics e métricas",
          ],
          responsibilities: ["Gerir campanhas digitais", "Criar conteúdo", "Analisar métricas", "Otimizar conversões"],
          benefits: ["Criatividade", "Ferramentas modernas", "Resultados mensuráveis", "Ambiente dinâmico"],
        },
        "12": {
          title: "Técnico de Suporte",
          department: "Suporte",
          location: "Presencial",
          type: "Tempo Integral",
          description: "Forneça suporte técnico excecional aos nossos clientes.",
          requirements: [
            "Conhecimentos técnicos gerais",
            "Experiência em helpdesk",
            "Paciência e empatia",
            "Resolução de problemas",
          ],
          responsibilities: [
            "Atender clientes",
            "Resolver problemas técnicos",
            "Documentar soluções",
            "Escalar casos complexos",
          ],
          benefits: ["Contacto humano", "Aprendizagem contínua", "Ambiente colaborativo", "Progressão interna"],
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
      terms: {
        title: "Termos e Condições de Candidatura",
        close: "Fechar",
        object: {
          title: "1. Objeto",
          description:
            "Os presentes termos regulam o processo de candidatura e tratamento de dados pessoais no âmbito do recrutamento da VianaHub.",
        },
        personalData: {
          title: "2. Tratamento de Dados Pessoais",
          collectionTreatment: {
            title: "2.1 Recolha e Tratamento",
            description: "A VianaHub recolhe e trata os seguintes dados pessoais:",
            item1: "Dados de identificação (nome, email, telefone)",
            item2: "Dados de formação e experiência profissional",
            item3: "Curriculum Vitae e documentos anexos",
            item4: "Dados fornecidos durante o processo de seleção",
          },
          purpose: {
            title: "2.2 Finalidades",
            description: "Os dados são tratados para as seguintes finalidades:",
            item1: "Avaliação de candidaturas",
            item2: "Processo de seleção e recrutamento",
            item3: "Comunicação com candidatos",
            item4: "Cumprimento de obrigações legais",
          },
          retention: {
            title: "2.3 Conservação",
            description:
              "Os dados são conservados pelo período necessário ao processo de seleção e, posteriormente, por um período máximo de 2 anos para futuras oportunidades, salvo consentimento em contrário.",
          },
        },
        candidateRights: {
          title: "3. Direitos dos Candidatos",
          description: "Os candidatos têm os seguintes direitos:",
          item1: "Direito de acesso aos dados pessoais",
          item2: "Direito de retificação de dados incorretos",
          item3: "Direito de apagamento dos dados",
          item4: "Direito de limitação do tratamento",
          item5: "Direito de portabilidade dos dados",
          item6: "Direito de oposição ao tratamento",
          item7: "Direito de retirar o consentimento",
        },
        selectionProcess: {
          title: "4. Processo de Seleção",
          phases: {
            title: "4.1 Fases",
            description: "O processo de seleção pode incluir:",
            item1: "Análise curricular",
            item2: "Entrevistas (presenciais ou remotas)",
            item3: "Testes técnicos ou psicotécnicos",
            item4: "Verificação de referências",
          },
          criteria: {
            title: "4.2 Critérios",
            description:
              "A seleção baseia-se em critérios objetivos relacionados com as competências, experiência e adequação ao perfil da função.",
          },
        },
        confidentiality: {
          title: "5. Confidencialidade",
          description:
            "Todas as informações fornecidas são tratadas de forma confidencial e apenas acedidas por pessoal autorizado envolvido no processo de recrutamento.",
        },
        communications: {
          title: "6. Comunicações",
          description:
            "A VianaHub compromete-se a manter os candidatos informados sobre o estado da sua candidatura, dentro de prazos razoáveis.",
        },
        changes: {
          title: "7. Alterações",
          description:
            "A VianaHub reserva-se o direito de alterar estes termos, comunicando previamente aos candidatos qualquer modificação relevante.",
        },
        contacts: {
          title: "8. Contactos",
          description: "Para questões relacionadas com o tratamento de dados pessoais:",
          email: "Email:",
          phone: "Telefone:",
          address: "Morada:",
        },
        applicableLaw: {
          title: "9. Lei Aplicável",
          description:
            "Estes termos são regidos pela lei portuguesa e pelo Regulamento Geral sobre a Proteção de Dados (RGPD).",
        },
      },
    },

    entertainment: {
      title: "Entretenimento",
      subtitle: "Relaxe e divirta-se com os nossos jogos",
      foxMaze: {
        title: "Fox Maze",
        description: "Ajude a raposa a encontrar o oásis no deserto",
        play: "Jogar Agora",
      },
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
        carousel: {
          website: "Websites Corporativos",
          mobile: "Aplicações Móveis",
          corporate: "Sistemas Corporativos",
          apis: "APIs e Integrações",
        },
      },
      web: {
        title: "Desenvolvimento Web",
        description: "Websites e aplicações web modernas e responsivas",
      },
      mobile: {
        title: "Aplicações Móveis",
        description: "Apps nativas e híbridas para iOS e Android",
      },
      corporate: {
        title: "Sistemas Corporativos",
        description: "Soluções empresariais robustas e escaláveis",
      },
      apis: {
        title: "APIs e Integrações",
        description: "Conectamos sistemas e automatizamos processos",
      },
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

    // Footer
    footer: {
      company: "VianaHub",
      description: "Transformamos ideias em soluções digitais inovadoras",
      services: "Serviços",
      company_menu: "Empresa",
      contact: "Contacto",
      followUs: "Siga-nos",
      rights: "Todos os direitos reservados.",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
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
    menu: {
      whatWeDo: "What We Do",
      development: "Development",
      agile: "Agile Methodology",
      chatbot: "Chatbot",
      "landing-pages": "Landing Pages",
      outsourcing: "Outsourcing",
      "system-integration": "System Integration",
      railway: "Railway Engineering",
      road: "Road Engineering",
      "solar-energy": "Solar Energy",
      industry: "Industries",
      education: "Education",
      government: "Government",
      manufacturing: "Manufacturing",
      financial: "Financial",
      retail: "Retail",
      healthcare: "Healthcare",
      security: "Security",
      cybersecurity: "Cybersecurity",
      backups: "Backups",
      access: "Access Control",
      institutional: "Institutional",
      about: "About Us",
      careers: "Careers",
    },

    // Home page sections
    hero: {
      title: "We Transform Ideas into Digital Solutions",
      subtitle:
        "We develop custom software, web and mobile applications that drive your business into the digital future.",
      cta: "Start Project",
      learnMore: "Learn More",
    },

    services: {
      title: "Our Services",
      subtitle: "We offer complete solutions to transform your business",
      development: {
        title: "Development",
        description: "We create custom web and mobile applications",
      },
      consulting: {
        title: "Consulting",
        description: "Strategic guidance for digital transformation",
      },
      integration: {
        title: "Integration",
        description: "We connect your systems efficiently",
      },
      support: {
        title: "Support",
        description: "Continuous technical support for your projects",
      },
    },

    projects: {
      title: "Featured Projects",
      subtitle: "Some of our most recent work",
      viewAll: "View All Projects",
    },

    industries: {
      title: "Industries We Serve",
      subtitle: "Specialized experience across various sectors",
    },

    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Real feedback from companies that trusted us",
    },

    insights: {
      title: "Insights and Trends",
      subtitle: "Stay updated with the latest technology news",
      readMore: "Read More",
    },

    technologies: {
      title: "Technologies We Use",
      subtitle: "We work with the most modern tools and frameworks",
    },

    careers: {
      title: "Join Our Team",
      subtitle: "We're looking for talents passionate about technology and innovation",
      cta: "Apply Now",
      positions: {
        title: "Available Positions",
        subtitle: "Find the perfect opportunity for your career",
        viewDetails: "View Details",
        apply: "Apply",
        talentBankNote: "Talent Bank",
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
        "3": {
          title: "Project Manager",
          department: "Management",
          location: "On-site",
          type: "Full Time",
          description: "Lead technology projects from start to finish.",
          requirements: [
            "Project management experience",
            "PMP certification or similar",
            "Knowledge of agile methodologies",
            "Excellent communication skills",
          ],
          responsibilities: [
            "Plan and execute projects",
            "Manage multidisciplinary teams",
            "Communicate with stakeholders",
            "Ensure quality and deadlines",
          ],
          benefits: ["Team leadership", "Varied projects", "Professional development", "Performance bonus"],
        },
        "4": {
          title: "DevOps Engineer",
          department: "Infrastructure",
          location: "Remote",
          type: "Full Time",
          description: "Optimize and automate our development processes.",
          requirements: [
            "Experience with AWS/Azure",
            "Knowledge of Docker and Kubernetes",
            "CI/CD automation",
            "Python/Bash scripting",
          ],
          responsibilities: [
            "Manage cloud infrastructure",
            "Implement CI/CD pipelines",
            "Monitor systems",
            "Optimize performance",
          ],
          benefits: ["Cutting-edge technologies", "Remote work", "Paid certifications", "Flexible schedule"],
        },
        "5": {
          title: "Data Analyst",
          department: "Analytics",
          location: "Hybrid",
          type: "Full Time",
          description: "Transform data into valuable business insights.",
          requirements: [
            "Experience with SQL and Python",
            "Knowledge of Power BI/Tableau",
            "Statistics and machine learning",
            "Analytical thinking",
          ],
          responsibilities: [
            "Analyze large data volumes",
            "Create dashboards and reports",
            "Develop predictive models",
            "Present insights to business",
          ],
          benefits: ["AI projects", "Specialized training", "Innovative environment", "Fast growth"],
        },
        "6": {
          title: "Mobile Developer",
          department: "Development",
          location: "Remote",
          type: "Full Time",
          description: "Create mobile applications that delight users.",
          requirements: [
            "Experience with React Native/Flutter",
            "Knowledge of iOS/Android",
            "REST APIs and GraphQL",
            "Automated testing",
          ],
          responsibilities: [
            "Develop mobile apps",
            "Optimize performance",
            "Integrate with APIs",
            "Publish to app stores",
          ],
          benefits: ["Innovative mobile projects", "Testing devices", "Remote work", "Continuous training"],
        },
        "7": {
          title: "Cybersecurity Specialist",
          department: "Security",
          location: "On-site",
          type: "Full Time",
          description: "Protect our systems and data against threats.",
          requirements: [
            "Security certifications",
            "Pentesting experience",
            "Compliance knowledge",
            "Vulnerability analysis",
          ],
          responsibilities: ["Security audits", "Implement controls", "Incident response", "Security training"],
          benefits: ["Growing field", "Paid certifications", "Critical projects", "Competitive salary"],
        },
        "8": {
          title: "Software Architect",
          department: "Architecture",
          location: "Hybrid",
          type: "Full Time",
          description: "Design the architecture of complex and scalable systems.",
          requirements: [
            "10+ years of experience",
            "Knowledge of microservices",
            "Architecture patterns",
            "Technical leadership",
          ],
          responsibilities: [
            "Define system architecture",
            "Mentor developers",
            "Evaluate technologies",
            "Ensure scalability",
          ],
          benefits: ["Senior position", "Technical decisions", "Complex projects", "Attractive package"],
        },
        "9": {
          title: "Development Intern",
          department: "Development",
          location: "On-site",
          type: "Internship",
          description: "Start your technology career with us.",
          requirements: ["Computer Science student", "Basic programming knowledge", "Willingness to learn", "Teamwork"],
          responsibilities: ["Support projects", "Learn technologies", "Participate in training", "Develop skills"],
          benefits: ["Dedicated mentorship", "Real experience", "Hiring possibility", "Young environment"],
        },
        "10": {
          title: "Functional Consultant",
          department: "Consulting",
          location: "Client site",
          type: "Full Time",
          description: "Help clients optimize their business processes.",
          requirements: ["Consulting experience", "ERP/CRM knowledge", "Process analysis", "Excellent communication"],
          responsibilities: ["Analyze client processes", "Propose improvements", "Implement solutions", "Train users"],
          benefits: ["Client contact", "Varied projects", "Occasional travel", "Professional growth"],
        },
        "11": {
          title: "Digital Marketing Specialist",
          department: "Marketing",
          location: "Hybrid",
          type: "Full Time",
          description: "Promote our brand and services in the digital world.",
          requirements: [
            "Digital marketing experience",
            "Google Ads and Facebook Ads",
            "SEO and content marketing",
            "Analytics and metrics",
          ],
          responsibilities: ["Manage digital campaigns", "Create content", "Analyze metrics", "Optimize conversions"],
          benefits: ["Creativity", "Modern tools", "Measurable results", "Dynamic environment"],
        },
        "12": {
          title: "Support Technician",
          department: "Support",
          location: "On-site",
          type: "Full Time",
          description: "Provide exceptional technical support to our clients.",
          requirements: [
            "General technical knowledge",
            "Helpdesk experience",
            "Patience and empathy",
            "Problem solving",
          ],
          responsibilities: [
            "Assist clients",
            "Solve technical problems",
            "Document solutions",
            "Escalate complex cases",
          ],
          benefits: ["Human contact", "Continuous learning", "Collaborative environment", "Internal progression"],
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
      terms: {
        title: "Application Terms and Conditions",
        close: "Close",
        object: {
          title: "1. Object",
          description:
            "These terms regulate the application process and personal data processing within VianaHub's recruitment scope.",
        },
        personalData: {
          title: "2. Personal Data Processing",
          collectionTreatment: {
            title: "2.1 Collection and Processing",
            description: "VianaHub collects and processes the following personal data:",
            item1: "Identification data (name, email, phone)",
            item2: "Education and professional experience data",
            item3: "Curriculum Vitae and attached documents",
            item4: "Data provided during the selection process",
          },
          purpose: {
            title: "2.2 Purposes",
            description: "Data is processed for the following purposes:",
            item1: "Application evaluation",
            item2: "Selection and recruitment process",
            item3: "Communication with candidates",
            item4: "Compliance with legal obligations",
          },
          retention: {
            title: "2.3 Retention",
            description:
              "Data is retained for the period necessary for the selection process and, subsequently, for a maximum period of 2 years for future opportunities, unless otherwise consented.",
          },
        },
        candidateRights: {
          title: "3. Candidate Rights",
          description: "Candidates have the following rights:",
          item1: "Right of access to personal data",
          item2: "Right to rectification of incorrect data",
          item3: "Right to erasure of data",
          item4: "Right to restriction of processing",
          item5: "Right to data portability",
          item6: "Right to object to processing",
          item7: "Right to withdraw consent",
        },
        selectionProcess: {
          title: "4. Selection Process",
          phases: {
            title: "4.1 Phases",
            description: "The selection process may include:",
            item1: "Curriculum analysis",
            item2: "Interviews (in-person or remote)",
            item3: "Technical or psychotechnical tests",
            item4: "Reference verification",
          },
          criteria: {
            title: "4.2 Criteria",
            description:
              "Selection is based on objective criteria related to skills, experience and suitability to the job profile.",
          },
        },
        confidentiality: {
          title: "5. Confidentiality",
          description:
            "All information provided is treated confidentially and only accessed by authorized personnel involved in the recruitment process.",
        },
        communications: {
          title: "6. Communications",
          description:
            "VianaHub commits to keeping candidates informed about the status of their application, within reasonable timeframes.",
        },
        changes: {
          title: "7. Changes",
          description:
            "VianaHub reserves the right to change these terms, previously communicating any relevant modification to candidates.",
        },
        contacts: {
          title: "8. Contacts",
          description: "For questions related to personal data processing:",
          email: "Email:",
          phone: "Phone:",
          address: "Address:",
        },
        applicableLaw: {
          title: "9. Applicable Law",
          description: "These terms are governed by Portuguese law and the General Data Protection Regulation (GDPR).",
        },
      },
    },

    entertainment: {
      title: "Entertainment",
      subtitle: "Relax and have fun with our games",
      foxMaze: {
        title: "Fox Maze",
        description: "Help the fox find the oasis in the desert",
        play: "Play Now",
      },
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
        carousel: {
          website: "Corporate Websites",
          mobile: "Mobile Applications",
          corporate: "Corporate Systems",
          apis: "APIs and Integrations",
        },
      },
      web: {
        title: "Web Development",
        description: "Modern and responsive websites and web applications",
      },
      mobile: {
        title: "Mobile Applications",
        description: "Native and hybrid apps for iOS and Android",
      },
      corporate: {
        title: "Corporate Systems",
        description: "Robust and scalable enterprise solutions",
      },
      apis: {
        title: "APIs and Integrations",
        description: "We connect systems and automate processes",
      },
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

    // Footer
    footer: {
      company: "VianaHub",
      description: "We transform ideas into innovative digital solutions",
      services: "Services",
      company_menu: "Company",
      contact: "Contact",
      followUs: "Follow Us",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
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
    menu: {
      whatWeDo: "Qué Hacemos",
      development: "Desarrollo",
      agile: "Metodología Ágil",
      chatbot: "Chatbot",
      "landing-pages": "Landing Pages",
      outsourcing: "Outsourcing",
      "system-integration": "Integración de Sistemas",
      railway: "Ingeniería Ferroviaria",
      road: "Ingeniería de Carreteras",
      "solar-energy": "Energía Solar",
      industry: "Industrias",
      education: "Educación",
      government: "Gobierno",
      manufacturing: "Manufactura",
      financial: "Financiero",
      retail: "Retail",
      healthcare: "Salud",
      security: "Seguridad",
      cybersecurity: "Ciberseguridad",
      backups: "Copias de Seguridad",
      access: "Control de Acceso",
      institutional: "Institucional",
      about: "Sobre Nosotros",
      careers: "Carreras",
    },

    // Home page sections
    hero: {
      title: "Transformamos Ideas en Soluciones Digitales",
      subtitle:
        "Desarrollamos software personalizado, aplicaciones web y móviles que impulsan tu negocio hacia el futuro digital.",
      cta: "Iniciar Proyecto",
      learnMore: "Saber Más",
    },

    services: {
      title: "Nuestros Servicios",
      subtitle: "Ofrecemos soluciones completas para transformar tu negocio",
      development: {
        title: "Desarrollo",
        description: "Creamos aplicaciones web y móviles personalizadas",
      },
      consulting: {
        title: "Consultoría",
        description: "Orientación estratégica para la transformación digital",
      },
      integration: {
        title: "Integración",
        description: "Conectamos tus sistemas de manera eficiente",
      },
      support: {
        title: "Soporte",
        description: "Apoyo técnico continuo para tus proyectos",
      },
    },

    projects: {
      title: "Proyectos Destacados",
      subtitle: "Algunos de nuestros trabajos más recientes",
      viewAll: "Ver Todos los Proyectos",
    },

    industries: {
      title: "Industrias que Servimos",
      subtitle: "Experiencia especializada en diversos sectores",
    },

    testimonials: {
      title: "Lo que Dicen Nuestros Clientes",
      subtitle: "Comentarios reales de empresas que confiaron en nosotros",
    },

    insights: {
      title: "Insights y Tendencias",
      subtitle: "Mantente actualizado con las últimas noticias tecnológicas",
      readMore: "Leer Más",
    },

    technologies: {
      title: "Tecnologías que Utilizamos",
      subtitle: "Trabajamos con las herramientas y frameworks más modernos",
    },

    careers: {
      title: "Únete a Nuestro Equipo",
      subtitle: "Buscamos talentos apasionados por la tecnología e innovación",
      cta: "Aplicar Ahora",
      positions: {
        title: "Posiciones Disponibles",
        subtitle: "Encuentra la oportunidad perfecta para tu carrera",
        viewDetails: "Ver Detalles",
        apply: "Aplicar",
        talentBankNote: "Banco de Talentos",
        talentBank: "Banco de Talentos",
        joinTalentBank: "Unirse al Banco de Talentos",
        "1": {
          title: "Desarrollador Full Stack",
          department: "Desarrollo",
          location: "Remoto",
          type: "Tiempo Completo",
          description: "Buscamos un desarrollador experimentado para trabajar en proyectos innovadores.",
          requirements: [
            "3+ años de experiencia en desarrollo web",
            "Conocimiento de React, Node.js y bases de datos",
            "Experiencia con metodologías ágiles",
            "Inglés fluido",
          ],
          responsibilities: [
            "Desarrollar aplicaciones web completas",
            "Colaborar con equipos multidisciplinarios",
            "Mantener código de alta calidad",
            "Participar en revisiones de código",
          ],
          benefits: ["Salario competitivo", "Trabajo remoto", "Formación continua", "Seguro de salud"],
        },
        "2": {
          title: "Diseñador UX/UI",
          department: "Diseño",
          location: "Híbrido",
          type: "Tiempo Completo",
          description: "Creamos experiencias digitales excepcionales para nuestros clientes.",
          requirements: [
            "2+ años de experiencia en diseño UX/UI",
            "Dominio de Figma y Adobe Creative Suite",
            "Portfolio sólido",
            "Conocimiento de diseño responsivo",
          ],
          responsibilities: [
            "Crear wireframes y prototipos",
            "Desarrollar interfaces intuitivas",
            "Realizar pruebas de usabilidad",
            "Colaborar con desarrolladores",
          ],
          benefits: [
            "Ambiente creativo",
            "Flexibilidad de horarios",
            "Proyectos desafiantes",
            "Equipo de última generación",
          ],
        },
        "3": {
          title: "Gerente de Proyecto",
          department: "Gestión",
          location: "Presencial",
          type: "Tiempo Completo",
          description: "Lidera proyectos tecnológicos de principio a fin.",
          requirements: [
            "Experiencia en gestión de proyectos",
            "Certificación PMP o similar",
            "Conocimiento de metodologías ágiles",
            "Excelentes habilidades de comunicación",
          ],
          responsibilities: [
            "Planificar y ejecutar proyectos",
            "Gestionar equipos multidisciplinarios",
            "Comunicar con stakeholders",
            "Garantizar calidad y plazos",
          ],
          benefits: ["Liderazgo de equipos", "Proyectos variados", "Desarrollo profesional", "Bonus por rendimiento"],
        },
        "4": {
          title: "Ingeniero DevOps",
          department: "Infraestructura",
          location: "Remoto",
          type: "Tiempo Completo",
          description: "Optimiza y automatiza nuestros procesos de desarrollo.",
          requirements: [
            "Experiencia con AWS/Azure",
            "Conocimiento de Docker y Kubernetes",
            "Automatización con CI/CD",
            "Scripting en Python/Bash",
          ],
          responsibilities: [
            "Gestionar infraestructura cloud",
            "Implementar pipelines CI/CD",
            "Monitorear sistemas",
            "Optimizar rendimiento",
          ],
          benefits: ["Tecnologías de punta", "Trabajo remoto", "Certificaciones pagadas", "Horario flexible"],
        },
        "5": {
          title: "Analista de Datos",
          department: "Analytics",
          location: "Híbrido",
          type: "Tiempo Completo",
          description: "Transforma datos en insights valiosos para el negocio.",
          requirements: [
            "Experiencia con SQL y Python",
            "Conocimiento de Power BI/Tableau",
            "Estadística y machine learning",
            "Pensamiento analítico",
          ],
          responsibilities: [
            "Analizar grandes volúmenes de datos",
            "Crear dashboards e informes",
            "Desarrollar modelos predictivos",
            "Presentar insights al negocio",
          ],
          benefits: ["Proyectos de IA", "Formación especializada", "Ambiente innovador", "Crecimiento rápido"],
        },
        "6": {
          title: "Desarrollador Mobile",
          department: "Desarrollo",
          location: "Remoto",
          type: "Tiempo Completo",
          description: "Crea aplicaciones móviles que encantan a los usuarios.",
          requirements: [
            "Experiencia con React Native/Flutter",
            "Conocimiento de iOS/Android",
            "APIs REST y GraphQL",
            "Pruebas automatizadas",
          ],
          responsibilities: [
            "Desarrollar apps móviles",
            "Optimizar rendimiento",
            "Integrar con APIs",
            "Publicar en app stores",
          ],
          benefits: ["Proyectos móviles innovadores", "Dispositivos de prueba", "Trabajo remoto", "Formación continua"],
        },
        "7": {
          title: "Especialista en Ciberseguridad",
          department: "Seguridad",
          location: "Presencial",
          type: "Tiempo Completo",
          description: "Protege nuestros sistemas y datos contra amenazas.",
          requirements: [
            "Certificaciones en seguridad",
            "Experiencia con pentesting",
            "Conocimiento de compliance",
            "Análisis de vulnerabilidades",
          ],
          responsibilities: [
            "Auditorías de seguridad",
            "Implementar controles",
            "Respuesta a incidentes",
            "Formación en seguridad",
          ],
          benefits: ["Área en crecimiento", "Certificaciones pagadas", "Proyectos críticos", "Salario competitivo"],
        },
        "8": {
          title: "Arquitecto de Software",
          department: "Arquitectura",
          location: "Híbrido",
          type: "Tiempo Completo",
          description: "Diseña la arquitectura de sistemas complejos y escalables.",
          requirements: [
            "10+ años de experiencia",
            "Conocimiento de microservicios",
            "Patrones de arquitectura",
            "Liderazgo técnico",
          ],
          responsibilities: [
            "Definir arquitectura de sistemas",
            "Mentorizar desarrolladores",
            "Evaluar tecnologías",
            "Garantizar escalabilidad",
          ],
          benefits: ["Posición senior", "Decisiones técnicas", "Proyectos complejos", "Paquete atractivo"],
        },
        "9": {
          title: "Practicante de Desarrollo",
          department: "Desarrollo",
          location: "Presencial",
          type: "Práctica",
          description: "Inicia tu carrera en tecnología con nosotros.",
          requirements: [
            "Estudiante de Informática",
            "Conocimientos básicos de programación",
            "Ganas de aprender",
            "Trabajo en equipo",
          ],
          responsibilities: [
            "Apoyar en proyectos",
            "Aprender tecnologías",
            "Participar en formaciones",
            "Desarrollar competencias",
          ],
          benefits: ["Mentoría dedicada", "Experiencia real", "Posibilidad de contratación", "Ambiente joven"],
        },
        "10": {
          title: "Consultor Funcional",
          department: "Consultoría",
          location: "Cliente",
          type: "Tiempo Completo",
          description: "Ayuda a clientes a optimizar sus procesos de negocio.",
          requirements: [
            "Experiencia en consultoría",
            "Conocimiento de ERP/CRM",
            "Análisis de procesos",
            "Comunicación excelente",
          ],
          responsibilities: [
            "Analizar procesos cliente",
            "Proponer mejoras",
            "Implementar soluciones",
            "Formar usuarios",
          ],
          benefits: ["Contacto con clientes", "Proyectos variados", "Viajes ocasionales", "Crecimiento profesional"],
        },
        "11": {
          title: "Especialista en Marketing Digital",
          department: "Marketing",
          location: "Híbrido",
          type: "Tiempo Completo",
          description: "Promociona nuestra marca y servicios en el mundo digital.",
          requirements: [
            "Experiencia en marketing digital",
            "Google Ads y Facebook Ads",
            "SEO y content marketing",
            "Analytics y métricas",
          ],
          responsibilities: [
            "Gestionar campañas digitales",
            "Crear contenido",
            "Analizar métricas",
            "Optimizar conversiones",
          ],
          benefits: ["Creatividad", "Herramientas modernas", "Resultados medibles", "Ambiente dinámico"],
        },
        "12": {
          title: "Técnico de Soporte",
          department: "Soporte",
          location: "Presencial",
          type: "Tiempo Completo",
          description: "Proporciona soporte técnico excepcional a nuestros clientes.",
          requirements: [
            "Conocimientos técnicos generales",
            "Experiencia en helpdesk",
            "Paciencia y empatía",
            "Resolución de problemas",
          ],
          responsibilities: [
            "Atender clientes",
            "Resolver problemas técnicos",
            "Documentar soluciones",
            "Escalar casos complejos",
          ],
          benefits: ["Contacto humano", "Aprendizaje continuo", "Ambiente colaborativo", "Progresión interna"],
        },
      },
      parallax: {
        title: "Construye el Futuro Con Nosotros",
        subtitle: "Únete a un equipo que valora la innovación, creatividad y crecimiento profesional.",
      },
      why: {
        title: "¿Por Qué Trabajar Con Nosotros?",
        subtitle: "Descubre qué nos hace un lugar especial para trabajar",
        innovation: {
          title: "Innovación",
          description: "Trabaja con las tecnologías más recientes y proyectos desafiantes",
        },
        team: {
          title: "Equipo",
          description: "Colabora con profesionales talentosos y apasionados",
        },
        growth: {
          title: "Crecimiento",
          description: "Desarrolla tus competencias con formación continua",
        },
        wellbeing: {
          title: "Bienestar",
          description: "Ambiente de trabajo saludable y equilibrado",
        },
      },
      application: {
        title: "Aplicación",
        general: "Aplicación General",
        personalInfo: "Información Personal",
        name: "Nombre Completo",
        email: "Email",
        phone: "Teléfono",
        educationExperienceTitle: "Formación y Experiencia",
        education: "Formación Académica",
        educationPlaceholder: "Describe tu formación académica...",
        experience: "Experiencia Profesional",
        experiencePlaceholder: "Describe tu experiencia profesional relevante...",
        motivation: "Motivación",
        motivationLabel: "¿Por qué quieres trabajar con nosotros?",
        motivationPlaceholder: "Comparte tu motivación para unirte a nuestro equipo...",
        cv: "Curriculum Vitae",
        cvLabel: "Adjuntar CV (PDF, DOC, DOCX)",
        fileSelected: "Archivo seleccionado:",
        terms: "Acepto los términos y condiciones de aplicación",
        acceptTermsAlert: "Debes aceptar los términos y condiciones para continuar.",
        cancel: "Cancelar",
        submit: "Enviar Aplicación",
        successMessage: "¡Aplicación enviada con éxito! Nos pondremos en contacto pronto.",
      },
      positionDetails: {
        description: "Descripción",
        requirements: "Requisitos",
        responsibilities: "Responsabilidades",
        benefits: "Beneficios",
        salary: "Salario",
      },
      terms: {
        title: "Términos y Condiciones de Aplicación",
        close: "Cerrar",
        object: {
          title: "1. Objeto",
          description:
            "Los presentes términos regulan el proceso de aplicación y tratamiento de datos personales en el ámbito del reclutamiento de VianaHub.",
        },
        personalData: {
          title: "2. Tratamiento de Datos Personales",
          collectionTreatment: {
            title: "2.1 Recolección y Tratamiento",
            description: "VianaHub recolecta y trata los siguientes datos personales:",
            item1: "Datos de identificación (nombre, email, teléfono)",
            item2: "Datos de formación y experiencia profesional",
            item3: "Curriculum Vitae y documentos adjuntos",
            item4: "Datos proporcionados durante el proceso de selección",
          },
          purpose: {
            title: "2.2 Finalidades",
            description: "Los datos se tratan para las siguientes finalidades:",
            item1: "Evaluación de aplicaciones",
            item2: "Proceso de selección y reclutamiento",
            item3: "Comunicación con candidatos",
            item4: "Cumplimiento de obligaciones legales",
          },
          retention: {
            title: "2.3 Conservación",
            description:
              "Los datos se conservan por el período necesario para el proceso de selección y, posteriormente, por un período máximo de 2 años para futuras oportunidades, salvo consentimiento en contrario.",
          },
        },
        candidateRights: {
          title: "3. Derechos de los Candidatos",
          description: "Los candidatos tienen los siguientes derechos:",
          item1: "Derecho de acceso a los datos personales",
          item2: "Derecho de rectificación de datos incorrectos",
          item3: "Derecho de supresión de los datos",
          item4: "Derecho de limitación del tratamiento",
          item5: "Derecho de portabilidad de los datos",
          item6: "Derecho de oposición al tratamiento",
          item7: "Derecho de retirar el consentimiento",
        },
        selectionProcess: {
          title: "4. Proceso de Selección",
          phases: {
            title: "4.1 Fases",
            description: "El proceso de selección puede incluir:",
            item1: "Análisis curricular",
            item2: "Entrevistas (presenciales o remotas)",
            item3: "Pruebas técnicas o psicotécnicas",
            item4: "Verificación de referencias",
          },
          criteria: {
            title: "4.2 Criterios",
            description:
              "La selección se basa en criterios objetivos relacionados con las competencias, experiencia y adecuación al perfil de la función.",
          },
        },
        confidentiality: {
          title: "5. Confidencialidad",
          description:
            "Toda la información proporcionada se trata de forma confidencial y solo es accedida por personal autorizado involucrado en el proceso de reclutamiento.",
        },
        communications: {
          title: "6. Comunicaciones",
          description:
            "VianaHub se compromete a mantener a los candidatos informados sobre el estado de su aplicación, dentro de plazos razonables.",
        },
        changes: {
          title: "7. Cambios",
          description:
            "VianaHub se reserva el derecho de cambiar estos términos, comunicando previamente a los candidatos cualquier modificación relevante.",
        },
        contacts: {
          title: "8. Contactos",
          description: "Para cuestiones relacionadas con el tratamiento de datos personales:",
          email: "Email:",
          phone: "Teléfono:",
          address: "Dirección:",
        },
        applicableLaw: {
          title: "9. Ley Aplicable",
          description:
            "Estos términos se rigen por la ley portuguesa y el Reglamento General de Protección de Datos (RGPD).",
        },
      },
    },

    entertainment: {
      title: "Entretenimiento",
      subtitle: "Relájate y diviértete con nuestros juegos",
      foxMaze: {
        title: "Fox Maze",
        description: "Ayuda al zorro a encontrar el oasis en el desierto",
        play: "Jugar Ahora",
      },
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
        carousel: {
          website: "Sitios Web Corporativos",
          mobile: "Aplicaciones Móviles",
          corporate: "Sistemas Corporativos",
          apis: "APIs e Integraciones",
        },
      },
      web: {
        title: "Desarrollo Web",
        description: "Sitios web y aplicaciones web modernas y responsivas",
      },
      mobile: {
        title: "Aplicaciones Móviles",
        description: "Apps nativas e híbridas para iOS y Android",
      },
      corporate: {
        title: "Sistemas Corporativos",
        description: "Soluciones empresariales robustas y escalables",
      },
      apis: {
        title: "APIs e Integraciones",
        description: "Conectamos sistemas y automatizamos procesos",
      },
      performance: {
        title: "Alto Rendimiento",
        description: "Optimizamos cada línea de código para máxima eficiencia",
      },
      security: {
        title: "Seguridad",
        description: "Implementamos las mejores prácticas de seguridad",
      },
      ux: {
        title: "Experiencia del Usuario",
        description: "Interfaces intuitivas y experiencias memorables",
      },
      quality: {
        title: "Calidad",
        description: "Pruebas rigurosas y código de alta calidad",
      },
      why: {
        title: "¿Por Qué Elegirnos?",
        subtitle: "Combinamos experiencia técnica con pasión por la innovación",
      },
      cta: {
        title: "¿Listo para Comenzar?",
        subtitle: "Discutamos tu próximo proyecto y cómo podemos ayudar",
        button: "Iniciar Proyecto",
      },
    },

    // Footer
    footer: {
      company: "VianaHub",
      description: "Transformamos ideas en soluciones digitales innovadoras",
      services: "Servicios",
      company_menu: "Empresa",
      contact: "Contacto",
      followUs: "Síguenos",
      rights: "Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
    },

    // Common
    common: {
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
      cancel: "Cancelar",
      save: "Guardar",
      edit: "Editar",
      delete: "Eliminar",
      confirm: "Confirmar",
      back: "Atrás",
      next: "Siguiente",
      previous: "Anterior",
      close: "Cerrar",
      open: "Abrir",
      yes: "Sí",
      no: "No",
      ok: "OK",
    },
  },
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      about: "À Propos",
      careers: "Carrières",
      contact: "Contact",
    },

    // Menu items
    menu: {
      whatWeDo: "Ce que Nous Faisons",
      development: "Développement",
      agile: "Méthodologie Agile",
      chatbot: "Chatbot",
      "landing-pages": "Pages d'Atterrissage",
      outsourcing: "Externalisation",
      "system-integration": "Intégration de Systèmes",
      railway: "Ingénierie Ferroviaire",
      road: "Ingénierie Routière",
      "solar-energy": "Énergie Solaire",
      industry: "Industries",
      education: "Éducation",
      government: "Gouvernement",
      manufacturing: "Fabrication",
      financial: "Financier",
      retail: "Commerce de Détail",
      healthcare: "Santé",
      security: "Sécurité",
      cybersecurity: "Cybersécurité",
      backups: "Sauvegardes",
      access: "Contrôle d'Accès",
      institutional: "Institutionnel",
      about: "À Propos",
      careers: "Carrières",
    },

    // Home page sections
    hero: {
      title: "Nous Transformons les Idées en Solutions Numériques",
      subtitle:
        "Nous développons des logiciels personnalisés, des applications web et mobiles qui propulsent votre entreprise vers l'avenir numérique.",
      cta: "Commencer le Projet",
      learnMore: "En Savoir Plus",
    },

    services: {
      title: "Nos Services",
      subtitle: "Nous offrons des solutions complètes pour transformer votre entreprise",
      development: {
        title: "Développement",
        description: "Nous créons des applications web et mobiles personnalisées",
      },
      consulting: {
        title: "Conseil",
        description: "Orientation stratégique pour la transformation numérique",
      },
      integration: {
        title: "Intégration",
        description: "Nous connectons vos systèmes efficacement",
      },
      support: {
        title: "Support",
        description: "Support technique continu pour vos projets",
      },
    },

    projects: {
      title: "Projets en Vedette",
      subtitle: "Quelques-uns de nos travaux les plus récents",
      viewAll: "Voir Tous les Projets",
    },

    industries: {
      title: "Industries que Nous Servons",
      subtitle: "Expérience spécialisée dans divers secteurs",
    },

    testimonials: {
      title: "Ce que Disent Nos Clients",
      subtitle: "Commentaires réels d'entreprises qui nous ont fait confiance",
    },

    insights: {
      title: "Insights et Tendances",
      subtitle: "Restez à jour avec les dernières nouvelles technologiques",
      readMore: "Lire Plus",
    },

    technologies: {
      title: "Technologies que Nous Utilisons",
      subtitle: "Nous travaillons avec les outils et frameworks les plus modernes",
    },

    careers: {
      title: "Rejoignez Notre Équipe",
      subtitle: "Nous recherchons des talents passionnés par la technologie et l'innovation",
      cta: "Postuler Maintenant",
      positions: {
        title: "Postes Disponibles",
        subtitle: "Trouvez l'opportunité parfaite pour votre carrière",
        viewDetails: "Voir les Détails",
        apply: "Postuler",
        talentBankNote: "Banque de Talents",
        talentBank: "Banque de Talents",
        joinTalentBank: "Rejoindre la Banque de Talents",
        "1": {
          title: "Développeur Full Stack",
          department: "Développement",
          location: "À Distance",
          type: "Temps Plein",
          description: "Nous recherchons un développeur expérimenté pour travailler sur des projets innovants.",
          requirements: [
            "3+ années d'expérience en développement web",
            "Connaissance de React, Node.js et bases de données",
            "Expérience avec les méthodologies agiles",
            "Anglais courant",
          ],
          responsibilities: [
            "Développer des applications web complètes",
            "Collaborer avec des équipes multidisciplinaires",
            "Maintenir un code de haute qualité",
            "Participer aux revues de code",
          ],
          benefits: ["Salaire compétitif", "Travail à distance", "Formation continue", "Assurance santé"],
        },
        "2": {
          title: "Designer UX/UI",
          department: "Design",
          location: "Hybride",
          type: "Temps Plein",
          description: "Nous créons des expériences numériques exceptionnelles pour nos clients.",
          requirements: [
            "2+ années d'expérience en design UX/UI",
            "Maîtrise de Figma et Adobe Creative Suite",
            "Portfolio solide",
            "Connaissance du design responsive",
          ],
          responsibilities: [
            "Créer des wireframes et prototypes",
            "Développer des interfaces intuitives",
            "Réaliser des tests d'utilisabilité",
            "Collaborer avec les développeurs",
          ],
          benefits: ["Environnement créatif", "Flexibilité des horaires", "Projets stimulants", "Équipement de pointe"],
        },
        "3": {
          title: "Chef de Projet",
          department: "Gestion",
          location: "Sur Site",
          type: "Temps Plein",
          description: "Dirigez des projets technologiques du début à la fin.",
          requirements: [
            "Expérience en gestion de projet",
            "Certification PMP ou similaire",
            "Connaissance des méthodologies agiles",
            "Excellentes compétences de communication",
          ],
          responsibilities: [
            "Planifier et exécuter des projets",
            "Gérer des équipes multidisciplinaires",
            "Communiquer avec les parties prenantes",
            "Garantir la qualité et les délais",
          ],
          benefits: ["Leadership d'équipe", "Projets variés", "Développement professionnel", "Bonus de performance"],
        },
        "4": {
          title: "Ingénieur DevOps",
          department: "Infrastructure",
          location: "À Distance",
          type: "Temps Plein",
          description: "Optimisez et automatisez nos processus de développement.",
          requirements: [
            "Expérience avec AWS/Azure",
            "Connaissance de Docker et Kubernetes",
            "Automatisation avec CI/CD",
            "Scripts Python/Bash",
          ],
          responsibilities: [
            "Gérer l'infrastructure cloud",
            "Implémenter des pipelines CI/CD",
            "Surveiller les systèmes",
            "Optimiser les performances",
          ],
          benefits: ["Technologies de pointe", "Travail à distance", "Certifications payées", "Horaire flexible"],
        },
        "5": {
          title: "Analyste de Données",
          department: "Analytics",
          location: "Hybride",
          type: "Temps Plein",
          description: "Transformez les données en insights précieux pour l'entreprise.",
          requirements: [
            "Expérience avec SQL et Python",
            "Connaissance de Power BI/Tableau",
            "Statistiques et machine learning",
            "Pensée analytique",
          ],
          responsibilities: [
            "Analyser de gros volumes de données",
            "Créer des tableaux de bord et rapports",
            "Développer des modèles prédictifs",
            "Présenter des insights à l'entreprise",
          ],
          benefits: ["Projets d'IA", "Formation spécialisée", "Environnement innovant", "Croissance rapide"],
        },
        "6": {
          title: "Développeur Mobile",
          department: "Développement",
          location: "À Distance",
          type: "Temps Plein",
          description: "Créez des applications mobiles qui enchantent les utilisateurs.",
          requirements: [
            "Expérience avec React Native/Flutter",
            "Connaissance d'iOS/Android",
            "APIs REST et GraphQL",
            "Tests automatisés",
          ],
          responsibilities: [
            "Développer des apps mobiles",
            "Optimiser les performances",
            "Intégrer avec des APIs",
            "Publier sur les app stores",
          ],
          benefits: ["Projets mobiles innovants", "Appareils de test", "Travail à distance", "Formation continue"],
        },
        "7": {
          title: "Spécialiste en Cybersécurité",
          department: "Sécurité",
          location: "Sur Site",
          type: "Temps Plein",
          description: "Protégez nos systèmes et données contre les menaces.",
          requirements: [
            "Certifications en sécurité",
            "Expérience en pentesting",
            "Connaissance de la conformité",
            "Analyse des vulnérabilités",
          ],
          responsibilities: [
            "Audits de sécurité",
            "Implémenter des contrôles",
            "Réponse aux incidents",
            "Formation en sécurité",
          ],
          benefits: ["Domaine en croissance", "Certifications payées", "Projets critiques", "Salaire compétitif"],
        },
        "8": {
          title: "Architecte Logiciel",
          department: "Architecture",
          location: "Hybride",
          type: "Temps Plein",
          description: "Concevez l'architecture de systèmes complexes et évolutifs.",
          requirements: [
            "10+ années d'expérience",
            "Connaissance des microservices",
            "Modèles d'architecture",
            "Leadership technique",
          ],
          responsibilities: [
            "Définir l'architecture des systèmes",
            "Encadrer les développeurs",
            "Évaluer les technologies",
            "Garantir l'évolutivité",
          ],
          benefits: ["Poste senior", "Décisions techniques", "Projets complexes", "Package attractif"],
        },
        "9": {
          title: "Stagiaire en Développement",
          department: "Développement",
          location: "Sur Site",
          type: "Stage",
          description: "Commencez votre carrière en technologie avec nous.",
          requirements: [
            "Étudiant en Informatique",
            "Connaissances de base en programmation",
            "Volonté d'apprendre",
            "Travail d'équipe",
          ],
          responsibilities: [
            "Soutenir les projets",
            "Apprendre les technologies",
            "Participer aux formations",
            "Développer les compétences",
          ],
          benefits: ["Mentorat dédié", "Expérience réelle", "Possibilité d'embauche", "Environnement jeune"],
        },
        "10": {
          title: "Consultant Fonctionnel",
          department: "Conseil",
          location: "Chez le Client",
          type: "Temps Plein",
          description: "Aidez les clients à optimiser leurs processus métier.",
          requirements: [
            "Expérience en conseil",
            "Connaissance ERP/CRM",
            "Analyse de processus",
            "Communication excellente",
          ],
          responsibilities: [
            "Analyser les processus client",
            "Proposer des améliorations",
            "Implémenter des solutions",
            "Former les utilisateurs",
          ],
          benefits: ["Contact client", "Projets variés", "Voyages occasionnels", "Croissance professionnelle"],
        },
        "11": {
          title: "Spécialiste Marketing Digital",
          department: "Marketing",
          location: "Hybride",
          type: "Temps Plein",
          description: "Promouvez notre marque et services dans le monde numérique.",
          requirements: [
            "Expérience en marketing digital",
            "Google Ads et Facebook Ads",
            "SEO et content marketing",
            "Analytics et métriques",
          ],
          responsibilities: [
            "Gérer les campagnes digitales",
            "Créer du contenu",
            "Analyser les métriques",
            "Optimiser les conversions",
          ],
          benefits: ["Créativité", "Outils modernes", "Résultats mesurables", "Environnement dynamique"],
        },
        "12": {
          title: "Technicien Support",
          department: "Support",
          location: "Sur Site",
          type: "Temps Plein",
          description: "Fournissez un support technique exceptionnel à nos clients.",
          requirements: [
            "Connaissances techniques générales",
            "Expérience helpdesk",
            "Patience et empathie",
            "Résolution de problèmes",
          ],
          responsibilities: [
            "Assister les clients",
            "Résoudre les problèmes techniques",
            "Documenter les solutions",
            "Escalader les cas complexes",
          ],
          benefits: ["Contact humain", "Apprentissage continu", "Environnement collaboratif", "Progression interne"],
        },
      },
      parallax: {
        title: "Construisez l'Avenir Avec Nous",
        subtitle: "Rejoignez une équipe qui valorise l'innovation, la créativité et la croissance professionnelle.",
      },
      why: {
        title: "Pourquoi Travailler Avec Nous ?",
        subtitle: "Découvrez ce qui fait de nous un endroit spécial pour travailler",
        innovation: {
          title: "Innovation",
          description: "Travaillez avec les dernières technologies et projets stimulants",
        },
        team: {
          title: "Équipe",
          description: "Collaborez avec des professionnels talentueux et passionnés",
        },
        growth: {
          title: "Croissance",
          description: "Développez vos compétences avec une formation continue",
        },
        wellbeing: {
          title: "Bien-être",
          description: "Environnement de travail sain et équilibré",
        },
      },
      application: {
        title: "Candidature",
        general: "Candidature Générale",
        personalInfo: "Informations Personnelles",
        name: "Nom Complet",
        email: "Email",
        phone: "Téléphone",
        educationExperienceTitle: "Formation et Expérience",
        education: "Formation Académique",
        educationPlaceholder: "Décrivez votre formation académique...",
        experience: "Expérience Professionnelle",
        experiencePlaceholder: "Décrivez votre expérience professionnelle pertinente...",
        motivation: "Motivation",
        motivationLabel: "Pourquoi voulez-vous travailler avec nous ?",
        motivationPlaceholder: "Partagez votre motivation pour rejoindre notre équipe...",
        cv: "Curriculum Vitae",
        cvLabel: "Joindre CV (PDF, DOC, DOCX)",
        fileSelected: "Fichier sélectionné :",
        terms: "J'accepte les termes et conditions de candidature",
        acceptTermsAlert: "Vous devez accepter les termes et conditions pour continuer.",
        cancel: "Annuler",
        submit: "Soumettre la Candidature",
        successMessage: "Candidature soumise avec succès ! Nous vous contacterons bientôt.",
      },
      positionDetails: {
        description: "Description",
        requirements: "Exigences",
        responsibilities: "Responsabilités",
        benefits: "Avantages",
        salary: "Salaire",
      },
      terms: {
        title: "Termes et Conditions de Candidature",
        close: "Fermer",
        object: {
          title: "1. Objet",
          description:
            "Les présents termes régulent le processus de candidature et le traitement des données personnelles dans le cadre du recrutement de VianaHub.",
        },
        personalData: {
          title: "2. Traitement des Données Personnelles",
          collectionTreatment: {
            title: "2.1 Collecte et Traitement",
            description: "VianaHub collecte et traite les données personnelles suivantes :",
            item1: "Données d'identification (nom, email, téléphone)",
            item2: "Données de formation et d'expérience professionnelle",
            item3: "Curriculum Vitae et documents joints",
            item4: "Données fournies pendant le processus de sélection",
          },
          purpose: {
            title: "2.2 Finalités",
            description: "Les données sont traitées pour les finalités suivantes :",
            item1: "Évaluation des candidatures",
            item2: "Processus de sélection et recrutement",
            item3: "Communication avec les candidats",
            item4: "Respect des obligations légales",
          },
          retention: {
            title: "2.3 Conservation",
            description:
              "Les données sont conservées pour la période nécessaire au processus de sélection et, par la suite, pour une période maximale de 2 ans pour de futures opportunités, sauf consentement contraire.",
          },
        },
        candidateRights: {
          title: "3. Droits des Candidats",
          description: "Les candidats ont les droits suivants :",
          item1: "Droit d'accès aux données personnelles",
          item2: "Droit de rectification des données incorrectes",
          item3: "Droit d'effacement des données",
          item4: "Droit de limitation du traitement",
          item5: "Droit de portabilité des données",
          item6: "Droit d'opposition au traitement",
          item7: "Droit de retirer le consentement",
        },
        selectionProcess: {
          title: "4. Processus de Sélection",
          phases: {
            title: "4.1 Phases",
            description: "Le processus de sélection peut inclure :",
            item1: "Analyse curriculaire",
            item2: "Entretiens (en personne ou à distance)",
            item3: "Tests techniques ou psychotechniques",
            item4: "Vérification des références",
          },
          criteria: {
            title: "4.2 Critères",
            description:
              "La sélection est basée sur des critères objectifs liés aux compétences, à l'expérience et à l'adéquation au profil du poste.",
          },
        },
        confidentiality: {
          title: "5. Confidentialité",
          description:
            "Toutes les informations fournies sont traitées de manière confidentielle et ne sont accessibles qu'au personnel autorisé impliqué dans le processus de recrutement.",
        },
        communications: {
          title: "6. Communications",
          description:
            "VianaHub s'engage à tenir les candidats informés de l'état de leur candidature, dans des délais raisonnables.",
        },
        changes: {
          title: "7. Modifications",
          description:
            "VianaHub se réserve le droit de modifier ces termes, en communiquant préalablement aux candidats toute modification pertinente.",
        },
        contacts: {
          title: "8. Contacts",
          description: "Pour les questions liées au traitement des données personnelles :",
          email: "Email :",
          phone: "Téléphone :",
          address: "Adresse :",
        },
        applicableLaw: {
          title: "9. Loi Applicable",
          description:
            "Ces termes sont régis par la loi portugaise et le Règlement Général sur la Protection des Données (RGPD).",
        },
      },
    },

    entertainment: {
      title: "Divertissement",
      subtitle: "Détendez-vous et amusez-vous avec nos jeux",
      foxMaze: {
        title: "Fox Maze",
        description: "Aidez le renard à trouver l'oasis dans le désert",
        play: "Jouer Maintenant",
      },
    },

    // About page
    about: {
      hero: {
        title: "À Propos de VianaHub",
        subtitle:
          "Nous sommes une entreprise technologique dédiée à transformer les idées en solutions numériques innovantes",
        cta: {
          history: "Notre Histoire",
          team: "Notre Équipe",
        },
      },
      mission: {
        title: "Notre Mission",
        description:
          "Autonomiser les entreprises grâce à des solutions technologiques innovantes, créant de la valeur et stimulant la croissance durable de nos clients.",
      },
      vision: {
        title: "Notre Vision",
        description:
          "Être reconnu comme leader en transformation numérique, offrant des solutions qui façonnent l'avenir des affaires.",
      },
      values: {
        badge: "Nos Valeurs",
        title: "Ce qui Nous Anime",
        subtitle: "Principes fondamentaux qui guident toutes nos actions et décisions",
        innovation: {
          title: "Innovation",
          description: "Nous cherchons constamment de nouvelles façons de résoudre les problèmes et créer de la valeur",
        },
        commitment: {
          title: "Engagement",
          description: "Nous nous dédions entièrement au succès de nos clients et projets",
        },
        reliability: {
          title: "Fiabilité",
          description: "Nous construisons des relations durables basées sur la confiance et la transparence",
        },
        agility: {
          title: "Agilité",
          description: "Nous nous adaptons rapidement aux changements et besoins du marché",
        },
      },
      history: {
        badge: "Notre Parcours",
        title: "Histoire de VianaHub",
        subtitle: "Une trajectoire de croissance, d'innovation et de réalisations",
        foundation: {
          title: "Fondation",
          description: "VianaHub a été fondée avec l'objectif de démocratiser l'accès à une technologie de qualité",
        },
        projects: {
          title: "Premiers Projets",
          description:
            "Nous avons développé nos premiers projets significatifs, établissant notre réputation sur le marché",
        },
        expansion: {
          title: "Expansion",
          description:
            "Nous avons élargi notre équipe et notre portefeuille de services, servant des clients dans divers secteurs",
        },
        growth: {
          title: "Croissance",
          description: "Nous avons consolidé notre position comme référence en solutions numériques innovantes",
        },
      },
      team: {
        badge: "Notre Équipe",
        title: "Rencontrez Ceux qui Font que Ça Marche",
        subtitle: "Professionnels passionnés par la technologie et dédiés à l'excellence",
        tatiana: {
          role: "PDG et Fondatrice",
          description: "Visionnaire et leader stratégique, elle conduit l'entreprise vers l'innovation constante",
        },
        dener: {
          role: "CTO et Co-fondateur",
          description: "Spécialiste technique responsable de l'architecture et de la qualité de nos solutions",
        },
        carlos: {
          role: "Directeur du Développement",
          description: "Dirige l'équipe de développement avec un focus sur l'excellence technique et l'innovation",
        },
      },
      cta: {
        title: "Prêt à Transformer Votre Entreprise ?",
        subtitle:
          "Contactez-nous et découvrez comment nous pouvons aider votre entreprise à atteindre de nouveaux sommets",
        contact: "Nous Parler",
        projects: "Voir les Projets",
      },
    },

    // Contact page
    contact: {
      hero: {
        title: "Entrez en Contact",
        subtitle: "Nous sommes là pour aider à transformer vos idées en réalité numérique",
      },
      form: {
        title: "Envoyez-nous un Message",
        name: "Nom",
        email: "Email",
        company: "Entreprise",
        message: "Message",
        submit: "Envoyer le Message",
      },
      info: {
        title: "Informations de Contact",
        email: "Email",
        phone: "Téléphone",
        address: "Adresse",
        hours: "Heures d'Ouverture",
        weekdays: "Lundi au Vendredi : 9h00 - 18h00",
      },
      success: {
        title: "Message Envoyé !",
        message: "Merci pour votre contact. Nous répondrons bientôt.",
      },
    },

    // Development page
    development: {
      hero: {
        title: "Développement de Logiciels",
        subtitle: "Nous créons des solutions numériques personnalisées pour booster votre entreprise",
      },
      services: {
        carousel: {
          website: "Sites Web d'Entreprise",
          mobile: "Applications Mobiles",
          corporate: "Systèmes d'Entreprise",
          apis: "APIs et Intégrations",
        },
      },
      web: {
        title: "Développement Web",
        description: "Sites web et applications web modernes et responsives",
      },
      mobile: {
        title: "Applications Mobiles",
        description: "Apps natives et hybrides pour iOS et Android",
      },
      corporate: {
        title: "Systèmes d'Entreprise",
        description: "Solutions d'entreprise robustes et évolutives",
      },
      apis: {
        title: "APIs et Intégrations",
        description: "Nous connectons les systèmes et automatisons les processus",
      },
      performance: {
        title: "Haute Performance",
        description: "Nous optimisons chaque ligne de code pour une efficacité maximale",
      },
      security: {
        title: "Sécurité",
        description: "Nous implémentons les meilleures pratiques de sécurité",
      },
      ux: {
        title: "Expérience Utilisateur",
        description: "Interfaces intuitives et expériences mémorables",
      },
      quality: {
        title: "Qualité",
        description: "Tests rigoureux et code de haute qualité",
      },
      why: {
        title: "Pourquoi Nous Choisir ?",
        subtitle: "Nous combinons expertise technique et passion pour l'innovation",
      },
      cta: {
        title: "Prêt à Commencer ?",
        subtitle: "Discutons de votre prochain projet et comment nous pouvons aider",
        button: "Commencer le Projet",
      },
    },

    // Footer
    footer: {
      company: "VianaHub",
      description: "Nous transformons les idées en solutions numériques innovantes",
      services: "Services",
      company_menu: "Entreprise",
      contact: "Contact",
      followUs: "Suivez-nous",
      rights: "Tous droits réservés.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions de Service",
    },

    // Common
    common: {
      loading: "Chargement...",
      error: "Erreur",
      success: "Succès",
      cancel: "Annuler",
      save: "Sauvegarder",
      edit: "Modifier",
      delete: "Supprimer",
      confirm: "Confirmer",
      back: "Retour",
      next: "Suivant",
      previous: "Précédent",
      close: "Fermer",
      open: "Ouvrir",
      yes: "Oui",
      no: "Non",
      ok: "OK",
    },
  },
  de: {
    // Navigation
    nav: {
      home: "Startseite",
      about: "Über Uns",
      careers: "Karriere",
      contact: "Kontakt",
    },

    // Menu items
    menu: {
      whatWeDo: "Was Wir Tun",
      development: "Entwicklung",
      agile: "Agile Methodik",
      chatbot: "Chatbot",
      "landing-pages": "Landing Pages",
      outsourcing: "Outsourcing",
      "system-integration": "Systemintegration",
      railway: "Eisenbahntechnik",
      road: "Straßentechnik",
      "solar-energy": "Solarenergie",
      industry: "Branchen",
      education: "Bildung",
      government: "Regierung",
      manufacturing: "Fertigung",
      financial: "Finanzwesen",
      retail: "Einzelhandel",
      healthcare: "Gesundheitswesen",
      security: "Sicherheit",
      cybersecurity: "Cybersicherheit",
      backups: "Backups",
      access: "Zugriffskontrolle",
      institutional: "Institutionell",
      about: "Über Uns",
      careers: "Karriere",
    },

    // Home page sections
    hero: {
      title: "Wir Verwandeln Ideen in Digitale Lösungen",
      subtitle:
        "Wir entwickeln maßgeschneiderte Software, Web- und Mobile-Anwendungen, die Ihr Unternehmen in die digitale Zukunft führen.",
      cta: "Projekt Starten",
      learnMore: "Mehr Erfahren",
    },

    services: {
      title: "Unsere Dienstleistungen",
      subtitle: "Wir bieten komplette Lösungen zur Transformation Ihres Unternehmens",
      development: {
        title: "Entwicklung",
        description: "Wir erstellen maßgeschneiderte Web- und Mobile-Anwendungen",
      },
      consulting: {
        title: "Beratung",
        description: "Strategische Beratung für die digitale Transformation",
      },
      integration: {
        title: "Integration",
        description: "Wir verbinden Ihre Systeme effizient",
      },
      support: {
        title: "Support",
        description: "Kontinuierlicher technischer Support für Ihre Projekte",
      },
    },

    projects: {
      title: "Ausgewählte Projekte",
      subtitle: "Einige unserer neuesten Arbeiten",
      viewAll: "Alle Projekte Anzeigen",
    },

    industries: {
      title: "Branchen, die Wir Bedienen",
      subtitle: "Spezialisierte Erfahrung in verschiedenen Sektoren",
    },

    testimonials: {
      title: "Was Unsere Kunden Sagen",
      subtitle: "Echtes Feedback von Unternehmen, die uns vertraut haben",
    },

    insights: {
      title: "Insights und Trends",
      subtitle: "Bleiben Sie auf dem Laufenden mit den neuesten Technologie-News",
      readMore: "Mehr Lesen",
    },

    technologies: {
      title: "Technologien, die Wir Verwenden",
      subtitle: "Wir arbeiten mit den modernsten Tools und Frameworks",
    },

    careers: {
      title: "Werden Sie Teil Unseres Teams",
      subtitle: "Wir suchen Talente, die sich für Technologie und Innovation begeistern",
      cta: "Jetzt Bewerben",
      positions: {
        title: "Verfügbare Positionen",
        subtitle: "Finden Sie die perfekte Gelegenheit für Ihre Karriere",
        viewDetails: "Details Anzeigen",
        apply: "Bewerben",
        talentBankNote: "Talent-Pool",
        talentBank: "Talent-Pool",
        joinTalentBank: "Dem Talent-Pool Beitreten",
        "1": {
          title: "Full Stack Entwickler",
          department: "Entwicklung",
          location: "Remote",
          type: "Vollzeit",
          description: "Wir suchen einen erfahrenen Entwickler für innovative Projekte.",
          requirements: [
            "3+ Jahre Erfahrung in der Webentwicklung",
            "Kenntnisse in React, Node.js und Datenbanken",
            "Erfahrung mit agilen Methoden",
            "Fließendes Englisch",
          ],
          responsibilities: [
            "Vollständige Webanwendungen entwickeln",
            "Mit multidisziplinären Teams zusammenarbeiten",
            "Hochwertigen Code pflegen",
            "An Code-Reviews teilnehmen",
          ],
          benefits: [
            "Wettbewerbsfähiges Gehalt",
            "Remote-Arbeit",
            "Kontinuierliche Weiterbildung",
            "Krankenversicherung",
          ],
        },
        "2": {
          title: "UX/UI Designer",
          department: "Design",
          location: "Hybrid",
          type: "Vollzeit",
          description: "Wir schaffen außergewöhnliche digitale Erfahrungen für unsere Kunden.",
          requirements: [
            "2+ Jahre Erfahrung im UX/UI Design",
            "Beherrschung von Figma und Adobe Creative Suite",
            "Starkes Portfolio",
            "Kenntnisse im Responsive Design",
          ],
          responsibilities: [
            "Wireframes und Prototypen erstellen",
            "Intuitive Benutzeroberflächen entwickeln",
            "Usability-Tests durchführen",
            "Mit Entwicklern zusammenarbeiten",
          ],
          benefits: ["Kreative Umgebung", "Flexible Arbeitszeiten", "Herausfordernde Projekte", "Neueste Ausrüstung"],
        },
        "3": {
          title: "Projektmanager",
          department: "Management",
          location: "Vor Ort",
          type: "Vollzeit",
          description: "Leiten Sie Technologieprojekte von Anfang bis Ende.",
          requirements: [
            "Erfahrung im Projektmanagement",
            "PMP-Zertifizierung oder ähnlich",
            "Kenntnisse agiler Methoden",
            "Ausgezeichnete Kommunikationsfähigkeiten",
          ],
          responsibilities: [
            "Projekte planen und durchführen",
            "Multidisziplinäre Teams leiten",
            "Mit Stakeholdern kommunizieren",
            "Qualität und Termine gewährleisten",
          ],
          benefits: ["Teamführung", "Vielfältige Projekte", "Berufliche Entwicklung", "Leistungsbonus"],
        },
        "4": {
          title: "DevOps Ingenieur",
          department: "Infrastruktur",
          location: "Remote",
          type: "Vollzeit",
          description: "Optimieren und automatisieren Sie unsere Entwicklungsprozesse.",
          requirements: [
            "Erfahrung mit AWS/Azure",
            "Kenntnisse in Docker und Kubernetes",
            "CI/CD-Automatisierung",
            "Python/Bash-Scripting",
          ],
          responsibilities: [
            "Cloud-Infrastruktur verwalten",
            "CI/CD-Pipelines implementieren",
            "Systeme überwachen",
            "Performance optimieren",
          ],
          benefits: ["Spitzentechnologien", "Remote-Arbeit", "Bezahlte Zertifizierungen", "Flexibler Zeitplan"],
        },
        "5": {
          title: "Datenanalyst",
          department: "Analytics",
          location: "Hybrid",
          type: "Vollzeit",
          description: "Verwandeln Sie Daten in wertvolle Geschäftseinblicke.",
          requirements: [
            "Erfahrung mit SQL und Python",
            "Kenntnisse in Power BI/Tableau",
            "Statistik und Machine Learning",
            "Analytisches Denken",
          ],
          responsibilities: [
            "Große Datenmengen analysieren",
            "Dashboards und Berichte erstellen",
            "Prädiktive Modelle entwickeln",
            "Insights dem Unternehmen präsentieren",
          ],
          benefits: ["KI-Projekte", "Spezialisierte Schulungen", "Innovative Umgebung", "Schnelles Wachstum"],
        },
        "6": {
          title: "Mobile Entwickler",
          department: "Entwicklung",
          location: "Remote",
          type: "Vollzeit",
          description: "Erstellen Sie mobile Anwendungen, die Benutzer begeistern.",
          requirements: [
            "Erfahrung mit React Native/Flutter",
            "Kenntnisse in iOS/Android",
            "REST APIs und GraphQL",
            "Automatisierte Tests",
          ],
          responsibilities: [
            "Mobile Apps entwickeln",
            "Performance optimieren",
            "Mit APIs integrieren",
            "In App Stores veröffentlichen",
          ],
          benefits: ["Innovative mobile Projekte", "Testgeräte", "Remote-Arbeit", "Kontinuierliche Weiterbildung"],
        },
        "7": {
          title: "Cybersicherheitsspezialist",
          department: "Sicherheit",
          location: "Vor Ort",
          type: "Vollzeit",
          description: "Schützen Sie unsere Systeme und Daten vor Bedrohungen.",
          requirements: [
            "Sicherheitszertifizierungen",
            "Erfahrung mit Penetrationstests",
            "Compliance-Kenntnisse",
            "Schwachstellenanalyse",
          ],
          responsibilities: [
            "Sicherheitsaudits",
            "Kontrollen implementieren",
            "Incident Response",
            "Sicherheitsschulungen",
          ],
          benefits: [
            "Wachsender Bereich",
            "Bezahlte Zertifizierungen",
            "Kritische Projekte",
            "Wettbewerbsfähiges Gehalt",
          ],
        },
        "8": {
          title: "Software-Architekt",
          department: "Architektur",
          location: "Hybrid",
          type: "Vollzeit",
          description: "Entwerfen Sie die Architektur komplexer und skalierbarer Systeme.",
          requirements: [
            "10+ Jahre Erfahrung",
            "Kenntnisse in Microservices",
            "Architekturmuster",
            "Technische Führung",
          ],
          responsibilities: [
            "Systemarchitektur definieren",
            "Entwickler mentorieren",
            "Technologien bewerten",
            "Skalierbarkeit gewährleisten",
          ],
          benefits: ["Senior-Position", "Technische Entscheidungen", "Komplexe Projekte", "Attraktives Paket"],
        },
        "9": {
          title: "Entwicklungspraktikant",
          department: "Entwicklung",
          location: "Vor Ort",
          type: "Praktikum",
          description: "Starten Sie Ihre Technologie-Karriere mit uns.",
          requirements: ["Informatikstudent", "Grundkenntnisse in Programmierung", "Lernbereitschaft", "Teamarbeit"],
          responsibilities: [
            "Projekte unterstützen",
            "Technologien lernen",
            "An Schulungen teilnehmen",
            "Fähigkeiten entwickeln",
          ],
          benefits: ["Dedizierte Betreuung", "Echte Erfahrung", "Einstellungsmöglichkeit", "Junge Umgebung"],
        },
        "10": {
          title: "Funktionsberater",
          department: "Beratung",
          location: "Beim Kunden",
          type: "Vollzeit",
          description: "Helfen Sie Kunden bei der Optimierung ihrer Geschäftsprozesse.",
          requirements: ["Beratungserfahrung", "ERP/CRM-Kenntnisse", "Prozessanalyse", "Ausgezeichnete Kommunikation"],
          responsibilities: [
            "Kundenprozesse analysieren",
            "Verbesserungen vorschlagen",
            "Lösungen implementieren",
            "Benutzer schulen",
          ],
          benefits: ["Kundenkontakt", "Vielfältige Projekte", "Gelegentliche Reisen", "Berufliches Wachstum"],
        },
        "11": {
          title: "Digital Marketing Spezialist",
          department: "Marketing",
          location: "Hybrid",
          type: "Vollzeit",
          description: "Fördern Sie unsere Marke und Dienstleistungen in der digitalen Welt.",
          requirements: [
            "Erfahrung im digitalen Marketing",
            "Google Ads und Facebook Ads",
            "SEO und Content Marketing",
            "Analytics und Metriken",
          ],
          responsibilities: [
            "Digitale Kampagnen verwalten",
            "Inhalte erstellen",
            "Metriken analysieren",
            "Conversions optimieren",
          ],
          benefits: ["Kreativität", "Moderne Tools", "Messbare Ergebnisse", "Dynamische Umgebung"],
        },
        "12": {
          title: "Support-Techniker",
          department: "Support",
          location: "Vor Ort",
          type: "Vollzeit",
          description: "Bieten Sie außergewöhnlichen technischen Support für unsere Kunden.",
          requirements: [
            "Allgemeine technische Kenntnisse",
            "Helpdesk-Erfahrung",
            "Geduld und Empathie",
            "Problemlösung",
          ],
          responsibilities: [
            "Kunden betreuen",
            "Technische Probleme lösen",
            "Lösungen dokumentieren",
            "Komplexe Fälle eskalieren",
          ],
          benefits: [
            "Menschlicher Kontakt",
            "Kontinuierliches Lernen",
            "Kollaborative Umgebung",
            "Interne Weiterentwicklung",
          ],
        },
      },
      parallax: {
        title: "Bauen Sie die Zukunft Mit Uns",
        subtitle: "Werden Sie Teil eines Teams, das Innovation, Kreativität und berufliches Wachstum schätzt.",
      },
      why: {
        title: "Warum Bei Uns Arbeiten?",
        subtitle: "Entdecken Sie, was uns zu einem besonderen Arbeitsplatz macht",
        innovation: {
          title: "Innovation",
          description: "Arbeiten Sie mit den neuesten Technologien und herausfordernden Projekten",
        },
        team: {
          title: "Team",
          description: "Arbeiten Sie mit talentierten und leidenschaftlichen Fachleuten zusammen",
        },
        growth: {
          title: "Wachstum",
          description: "Entwickeln Sie Ihre Fähigkeiten durch kontinuierliche Weiterbildung",
        },
        wellbeing: {
          title: "Wohlbefinden",
          description: "Gesunde und ausgewogene Arbeitsumgebung",
        },
      },
      application: {
        title: "Bewerbung",
        general: "Allgemeine Bewerbung",
        personalInfo: "Persönliche Informationen",
        name: "Vollständiger Name",
        email: "E-Mail",
        phone: "Telefon",
        educationExperienceTitle: "Bildung und Erfahrung",
        education: "Akademische Ausbildung",
        educationPlaceholder: "Beschreiben Sie Ihre akademische Ausbildung...",
        experience: "Berufserfahrung",
        experiencePlaceholder: "Beschreiben Sie Ihre relevante Berufserfahrung...",
        motivation: "Motivation",
        motivationLabel: "Warum möchten Sie mit uns arbeiten?",
        motivationPlaceholder: "Teilen Sie Ihre Motivation mit, unserem Team beizutreten...",
        cv: "Lebenslauf",
        cvLabel: "Lebenslauf anhängen (PDF, DOC, DOCX)",
        fileSelected: "Datei ausgewählt:",
        terms: "Ich akzeptiere die Bewerbungsbedingungen",
        acceptTermsAlert: "Sie müssen die Bedingungen akzeptieren, um fortzufahren.",
        cancel: "Abbrechen",
        submit: "Bewerbung Senden",
        successMessage: "Bewerbung erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.",
      },
      positionDetails: {
        description: "Beschreibung",
        requirements: "Anforderungen",
        responsibilities: "Verantwortlichkeiten",
        benefits: "Vorteile",
        salary: "Gehalt",
      },
      terms: {
        title: "Bewerbungsbedingungen",
        close: "Schließen",
        object: {
          title: "1. Gegenstand",
          description:
            "Diese Bedingungen regeln den Bewerbungsprozess und die Verarbeitung personenbezogener Daten im Rahmen der Rekrutierung von VianaHub.",
        },
        personalData: {
          title: "2. Verarbeitung Personenbezogener Daten",
          collectionTreatment: {
            title: "2.1 Sammlung und Verarbeitung",
            description: "VianaHub sammelt und verarbeitet folgende personenbezogene Daten:",
            item1: "Identifikationsdaten (Name, E-Mail, Telefon)",
            item2: "Bildungs- und Berufserfahrungsdaten",
            item3: "Lebenslauf und angehängte Dokumente",
            item4: "Während des Auswahlprozesses bereitgestellte Daten",
          },
          purpose: {
            title: "2.2 Zwecke",
            description: "Die Daten werden für folgende Zwecke verarbeitet:",
            item1: "Bewertung von Bewerbungen",
            item2: "Auswahl- und Rekrutierungsprozess",
            item3: "Kommunikation mit Bewerbern",
            item4: "Erfüllung gesetzlicher Verpflichtungen",
          },
          retention: {
            title: "2.3 Aufbewahrung",
            description:
              "Die Daten werden für den für den Auswahlprozess erforderlichen Zeitraum und anschließend für maximal 2 Jahre für zukünftige Gelegenheiten aufbewahrt, sofern nicht anders eingewilligt.",
          },
        },
        candidateRights: {
          title: "3. Bewerberrechte",
          description: "Bewerber haben folgende Rechte:",
          item1: "Recht auf Zugang zu personenbezogenen Daten",
          item2: "Recht auf Berichtigung falscher Daten",
          item3: "Recht auf Löschung der Daten",
          item4: "Recht auf Einschränkung der Verarbeitung",
          item5: "Recht auf Datenübertragbarkeit",
          item6: "Recht auf Widerspruch gegen die Verarbeitung",
          item7: "Recht auf Widerruf der Einwilligung",
        },
        selectionProcess: {
          title: "4. Auswahlprozess",
          phases: {
            title: "4.1 Phasen",
            description: "Der Auswahlprozess kann umfassen:",
            item1: "Lebenslaufanalyse",
            item2: "Interviews (persönlich oder remote)",
            item3: "Technische oder psychotechnische Tests",
            item4: "Referenzüberprüfung",
          },
          criteria: {
            title: "4.2 Kriterien",
            description:
              "Die Auswahl basiert auf objektiven Kriterien bezüglich Kompetenzen, Erfahrung und Eignung für das Stellenprofil.",
          },
        },
        confidentiality: {
          title: "5. Vertraulichkeit",
          description:
            "Alle bereitgestellten Informationen werden vertraulich behandelt und sind nur für autorisiertes Personal zugänglich, das am Rekrutierungsprozess beteiligt ist.",
        },
        communications: {
          title: "6. Kommunikation",
          description:
            "VianaHub verpflichtet sich, Bewerber über den Status ihrer Bewerbung innerhalb angemessener Fristen zu informieren.",
        },
        changes: {
          title: "7. Änderungen",
          description:
            "VianaHub behält sich das Recht vor, diese Bedingungen zu ändern und Bewerbern relevante Änderungen im Voraus mitzuteilen.",
        },
        contacts: {
          title: "8. Kontakte",
          description: "Für Fragen zur Verarbeitung personenbezogener Daten:",
          email: "E-Mail:",
          phone: "Telefon:",
          address: "Adresse:",
        },
        applicableLaw: {
          title: "9. Anwendbares Recht",
          description:
            "Diese Bedingungen unterliegen portugiesischem Recht und der Datenschutz-Grundverordnung (DSGVO).",
        },
      },
    },

    entertainment: {
      title: "Unterhaltung",
      subtitle: "Entspannen Sie sich und haben Sie Spaß mit unseren Spielen",
      foxMaze: {
        title: "Fox Maze",
        description: "Helfen Sie dem Fuchs, die Oase in der Wüste zu finden",
        play: "Jetzt Spielen",
      },
    },

    // About page
    about: {
      hero: {
        title: "Über VianaHub",
        subtitle:
          "Wir sind ein Technologieunternehmen, das sich der Transformation von Ideen in innovative digitale Lösungen widmet",
        cta: {
          history: "Unsere Geschichte",
          team: "Unser Team",
        },
      },
      mission: {
        title: "Unsere Mission",
        description:
          "Unternehmen durch innovative technologische Lösungen zu stärken, Wert zu schaffen und nachhaltiges Wachstum für unsere Kunden zu fördern.",
      },
      vision: {
        title: "Unsere Vision",
        description:
          "Als Marktführer in der digitalen Transformation anerkannt zu werden und Lösungen anzubieten, die die Zukunft der Geschäftswelt prägen.",
      },
      values: {
        badge: "Unsere Werte",
        title: "Was Uns Antreibt",
        subtitle: "Grundprinzipien, die alle unsere Handlungen und Entscheidungen leiten",
        innovation: {
          title: "Innovation",
          description: "Wir suchen ständig nach neuen Wegen, Probleme zu lösen und Wert zu schaffen",
        },
        commitment: {
          title: "Engagement",
          description: "Wir widmen uns vollständig dem Erfolg unserer Kunden und Projekte",
        },
        reliability: {
          title: "Zuverlässigkeit",
          description: "Wir bauen dauerhafte Beziehungen auf, die auf Vertrauen und Transparenz basieren",
        },
        agility: {
          title: "Agilität",
          description: "Wir passen uns schnell an Marktveränderungen und -bedürfnisse an",
        },
      },
      history: {
        badge: "Unsere Reise",
        title: "Geschichte von VianaHub",
        subtitle: "Ein Weg des Wachstums, der Innovation und der Erfolge",
        foundation: {
          title: "Gründung",
          description:
            "VianaHub wurde mit dem Ziel gegründet, den Zugang zu hochwertiger Technologie zu demokratisieren",
        },
        projects: {
          title: "Erste Projekte",
          description: "Wir entwickelten unsere ersten bedeutenden Projekte und etablierten unseren Ruf am Markt",
        },
        expansion: {
          title: "Expansion",
          description: "Wir erweiterten unser Team und Serviceportfolio und bedienten Kunden in verschiedenen Sektoren",
        },
        growth: {
          title: "Wachstum",
          description: "Wir festigten unsere Position als Referenz für innovative digitale Lösungen",
        },
      },
      team: {
        badge: "Unser Team",
        title: "Lernen Sie Die Macher Kennen",
        subtitle: "Fachleute, die sich für Technologie begeistern und sich der Exzellenz verschrieben haben",
        tatiana: {
          role: "CEO & Gründerin",
          description: "Visionärin und strategische Führungskraft, die das Unternehmen zu ständiger Innovation führt",
        },
        dener: {
          role: "CTO & Mitgründer",
          description: "Technischer Spezialist, verantwortlich für die Architektur und Qualität unserer Lösungen",
        },
        carlos: {
          role: "Entwicklungsleiter",
          description: "Leitet das Entwicklungsteam mit Fokus auf technische Exzellenz und Innovation",
        },
      },
      cta: {
        title: "Bereit, Ihr Unternehmen Zu Transformieren?",
        subtitle:
          "Kontaktieren Sie uns und entdecken Sie, wie wir Ihrem Unternehmen helfen können, neue Höhen zu erreichen",
        contact: "Mit Uns Sprechen",
        projects: "Projekte Ansehen",
      },
    },

    // Contact page
    contact: {
      hero: {
        title: "Kontakt Aufnehmen",
        subtitle: "Wir sind hier, um Ihre Ideen in digitale Realität zu verwandeln",
      },
      form: {
        title: "Senden Sie Uns Eine Nachricht",
        name: "Name",
        email: "E-Mail",
        company: "Unternehmen",
        message: "Nachricht",
        submit: "Nachricht Senden",
      },
      info: {
        title: "Kontaktinformationen",
        email: "E-Mail",
        phone: "Telefon",
        address: "Adresse",
        hours: "Öffnungszeiten",
        weekdays: "Montag bis Freitag: 9:00 - 18:00",
      },
      success: {
        title: "Nachricht Gesendet!",
        message: "Vielen Dank für Ihre Kontaktaufnahme. Wir werden bald antworten.",
      },
    },

    // Development page
    development: {
      hero: {
        title: "Softwareentwicklung",
        subtitle: "Wir erstellen maßgeschneiderte digitale Lösungen, um Ihr Unternehmen zu stärken",
      },
      services: {
        carousel: {
          website: "Unternehmenswebsites",
          mobile: "Mobile Anwendungen",
          corporate: "Unternehmenssysteme",
          apis: "APIs und Integrationen",
        },
      },
      web: {
        title: "Webentwicklung",
        description: "Moderne und responsive Websites und Webanwendungen",
      },
      mobile: {
        title: "Mobile Anwendungen",
        description: "Native und hybride Apps für iOS und Android",
      },
      corporate: {
        title: "Unternehmenssysteme",
        description: "Robuste und skalierbare Unternehmenslösungen",
      },
      apis: {
        title: "APIs und Integrationen",
        description: "Wir verbinden Systeme und automatisieren Prozesse",
      },
      performance: {
        title: "Hohe Leistung",
        description: "Wir optimieren jede Codezeile für maximale Effizienz",
      },
      security: {
        title: "Sicherheit",
        description: "Wir implementieren bewährte Sicherheitspraktiken",
      },
      ux: {
        title: "Benutzererfahrung",
        description: "Intuitive Benutzeroberflächen und unvergessliche Erfahrungen",
      },
      quality: {
        title: "Qualität",
        description: "Rigorose Tests und hochwertiger Code",
      },
      why: {
        title: "Warum Uns Wählen?",
        subtitle: "Wir kombinieren technische Expertise mit Leidenschaft für Innovation",
      },
      cta: {
        title: "Bereit Zu Beginnen?",
        subtitle: "Lassen Sie uns Ihr nächstes Projekt besprechen und wie wir helfen können",
        button: "Projekt Starten",
      },
    },

    // Footer
    footer: {
      company: "VianaHub",
      description: "Wir verwandeln Ideen in innovative digitale Lösungen",
      services: "Dienstleistungen",
      company_menu: "Unternehmen",
      contact: "Kontakt",
      followUs: "Folgen Sie Uns",
      rights: "Alle Rechte vorbehalten.",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
    },

    // Common
    common: {
      loading: "Laden...",
      error: "Fehler",
      success: "Erfolg",
      cancel: "Abbrechen",
      save: "Speichern",
      edit: "Bearbeiten",
      delete: "Löschen",
      confirm: "Bestätigen",
      back: "Zurück",
      next: "Weiter",
      previous: "Vorherige",
      close: "Schließen",
      open: "Öffnen",
      yes: "Ja",
      no: "Nein",
      ok: "OK",
    },
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

  const setLanguageAndSave = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        // Fallback to Portuguese if key not found
        value = translations.pt
        for (const fallbackKey of keys) {
          if (value && typeof value === "object" && fallbackKey in value) {
            value = value[fallbackKey]
          } else {
            return key // Return key if not found in fallback
          }
        }
        break
      }
    }

    return typeof value === "string" ? value : key
  }

  return (
    <TranslationContext.Provider
      value={{
        language,
        setLanguage: setLanguageAndSave,
        t,
      }}
    >
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
