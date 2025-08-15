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
    "nav.institutional": "Institucional",
    "nav.security": "Segurança",
    "nav.engineering": "Engenharia",
    "nav.contact": "Contato",
    "nav.careers": "Carreiras",

    // What We Do Dropdown
    "whatWeDo.development": "Desenvolvimento",
    "whatWeDo.agile": "Metodologia Ágil",
    "whatWeDo.outsourcing": "Outsourcing",
    "whatWeDo.systemIntegration": "Integração de Sistemas",
    "whatWeDo.chatbot": "Chatbot",
    "whatWeDo.landingPages": "Landing Pages",

    // Institutional Dropdown
    "institutional.education": "Educação",
    "institutional.healthcare": "Saúde",
    "institutional.financial": "Financeiro",
    "institutional.government": "Governo",
    "institutional.manufacturing": "Manufatura",
    "institutional.retail": "Varejo",

    // Security Dropdown
    "security.cyberSecurity": "Cibersegurança",
    "security.access": "Controle de Acesso",
    "security.backups": "Backups",

    // Engineering Dropdown
    "engineering.railway": "Ferroviário",
    "engineering.road": "Rodoviário",
    "engineering.solarEnergy": "Energia Solar",

    // Hero Section
    "hero.title": "Transformando ideias em soluções digitais inovadoras",
    "hero.subtitle":
      "Desenvolvemos software personalizado, sistemas web e aplicações móveis que impulsionam o crescimento do seu negócio",
    "hero.cta": "Começar Projeto",
    "hero.learnMore": "Saiba Mais",

    // Services Section
    "services.title": "Nossos Serviços",
    "services.subtitle": "Oferecemos soluções completas em tecnologia para impulsionar seu negócio",
    "services.development.title": "Desenvolvimento de Software",
    "services.development.description":
      "Criamos aplicações web e móveis personalizadas usando as mais modernas tecnologias",
    "services.consulting.title": "Consultoria em TI",
    "services.consulting.description": "Orientamos sua empresa na transformação digital e otimização de processos",
    "services.integration.title": "Integração de Sistemas",
    "services.integration.description": "Conectamos seus sistemas existentes para maior eficiência operacional",
    "services.support.title": "Suporte Técnico",
    "services.support.description": "Oferecemos suporte contínuo para manter seus sistemas funcionando perfeitamente",

    // Projects Section
    "projects.title": "Projetos em Destaque",
    "projects.subtitle": "Conheça alguns dos nossos trabalhos mais recentes",
    "projects.ecommerce.title": "Plataforma E-commerce",
    "projects.ecommerce.description": "Sistema completo de vendas online com gestão de estoque e pagamentos",
    "projects.crm.title": "Sistema CRM",
    "projects.crm.description": "Plataforma de gestão de relacionamento com clientes e automação de vendas",
    "projects.banking.title": "Sistema Bancário",
    "projects.banking.description": "Aplicação segura para transações financeiras e gestão de contas",
    "projects.education.title": "Plataforma Educacional",
    "projects.education.description": "Sistema de ensino à distância com recursos interativos",
    "projects.hospital.title": "Sistema Hospitalar",
    "projects.hospital.description": "Gestão completa de pacientes, consultas e prontuários médicos",
    "projects.logistics.title": "Sistema Logístico",
    "projects.logistics.description": "Controle de frota, rotas e entregas em tempo real",
    "projects.streaming.title": "Plataforma de Streaming",
    "projects.streaming.description": "Sistema de transmissão de vídeo com qualidade HD",
    "projects.food.title": "App Delivery",
    "projects.food.description": "Aplicativo de entrega de comida com rastreamento em tempo real",

    // Industries Section
    "industries.title": "Setores que Atendemos",
    "industries.subtitle": "Experiência comprovada em diversos segmentos de mercado",
    "industries.education.title": "Educação Digital",
    "industries.education.description": "Plataformas de ensino e gestão educacional",
    "industries.health.title": "Saúde Digital",
    "industries.health.description": "Sistemas hospitalares e telemedicina",
    "industries.ecommerce.title": "E-commerce",
    "industries.ecommerce.description": "Lojas virtuais e marketplaces",
    "industries.government.title": "Governo",
    "industries.government.description": "Sistemas públicos e transparência",
    "industries.finance.title": "Fintech",
    "industries.finance.description": "Soluções de pagamento e banking",
    "industries.manufacturing.title": "Indústria 4.0",
    "industries.manufacturing.description": "Automação e IoT industrial",

    // Testimonials Section
    "testimonials.title": "O que nossos clientes dizem",
    "testimonials.subtitle": "Depoimentos de quem confia no nosso trabalho",

    // Insights Section
    "insights.title": "Insights e Tendências",
    "insights.subtitle": "Fique por dentro das últimas novidades em tecnologia",
    "insights.cta": "Ver Todos os Artigos",

    // Careers Section
    "careers.title": "Junte-se à Nossa Equipe",
    "careers.subtitle": "Faça parte de uma empresa inovadora e em constante crescimento",
    "careers.cta": "Ver Vagas",

    // Entertainment Section
    "entertainment.title": "Diversão e Interação",
    "entertainment.subtitle": "Experimente nosso jogo Fox Maze e teste suas habilidades!",
    "entertainment.cta": "Jogar Agora",

    // Footer
    "footer.company": "Empresa",
    "footer.services": "Serviços",
    "footer.industries": "Setores",
    "footer.contact": "Contato",
    "footer.followUs": "Siga-nos",
    "footer.rights": "Todos os direitos reservados.",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Uso",

    // Contact Page
    "contact.title": "Entre em Contato",
    "contact.subtitle": "Estamos prontos para transformar suas ideias em realidade",
    "contact.form.name": "Nome",
    "contact.form.email": "E-mail",
    "contact.form.phone": "Telefone",
    "contact.form.company": "Empresa",
    "contact.form.message": "Mensagem",
    "contact.form.send": "Enviar Mensagem",
    "contact.info.address": "Endereço",
    "contact.info.phone": "Telefone",
    "contact.info.email": "E-mail",
    "contact.info.hours": "Horário de Funcionamento",
    "contact.info.hoursValue": "Segunda a Sexta: 9h às 18h",

    // About Page
    "about.hero.title": "Sobre a VianaHub",
    "about.hero.subtitle":
      "Somos uma empresa de tecnologia dedicada a transformar ideias em soluções digitais inovadoras",
    "about.mission.title": "Nossa Missão",
    "about.mission.description":
      "Desenvolver soluções tecnológicas que impulsionem o crescimento e a eficiência dos nossos clientes, sempre com foco na inovação e qualidade.",
    "about.vision.title": "Nossa Visão",
    "about.vision.description":
      "Ser reconhecida como uma das principais empresas de tecnologia, oferecendo soluções que fazem a diferença no mercado.",
    "about.values.title": "Nossos Valores",
    "about.values.innovation": "Inovação",
    "about.values.quality": "Qualidade",
    "about.values.commitment": "Compromisso",
    "about.values.transparency": "Transparência",
    "about.team.title": "Nossa Equipe",
    "about.team.subtitle": "Conheça os profissionais que fazem a diferença",

    // Careers Page
    "careers.hero.title": "Carreiras na VianaHub",
    "careers.hero.subtitle": "Junte-se a uma equipe apaixonada por tecnologia e inovação",
    "careers.why.title": "Por que trabalhar conosco?",
    "careers.why.growth": "Crescimento Profissional",
    "careers.why.innovation": "Ambiente Inovador",
    "careers.why.benefits": "Benefícios Competitivos",
    "careers.why.culture": "Cultura Colaborativa",
    "careers.positions.title": "Posições Abertas",
    "careers.positions.apply": "Candidatar-se",
    "careers.contact.title": "Não encontrou a vaga ideal?",
    "careers.contact.description":
      "Envie seu currículo e entraremos em contato quando surgir uma oportunidade adequada ao seu perfil.",
    "careers.contact.cta": "Enviar Currículo",

    // Development Page
    "development.hero.title": "Desenvolvimento de Software",
    "development.hero.subtitle":
      "Criamos soluções digitais personalizadas que impulsionam o crescimento do seu negócio",
    "development.services.title": "Nossos Serviços de Desenvolvimento",
    "development.services.web.title": "Desenvolvimento Web",
    "development.services.web.description": "Aplicações web modernas e responsivas usando as mais recentes tecnologias",
    "development.services.mobile.title": "Desenvolvimento Mobile",
    "development.services.mobile.description": "Apps nativos e híbridos para iOS e Android",
    "development.services.api.title": "APIs e Integrações",
    "development.services.api.description": "Desenvolvimento de APIs robustas e integrações com sistemas terceiros",
    "development.services.cloud.title": "Soluções em Nuvem",
    "development.services.cloud.description": "Arquiteturas escaláveis e seguras na nuvem",
    "development.technologies.title": "Tecnologias que Utilizamos",
    "development.process.title": "Nosso Processo de Desenvolvimento",
    "development.process.analysis.title": "Análise e Planejamento",
    "development.process.analysis.description": "Entendemos suas necessidades e definimos a melhor estratégia",
    "development.process.design.title": "Design e Prototipagem",
    "development.process.design.description": "Criamos protótipos e designs intuitivos",
    "development.process.development.title": "Desenvolvimento",
    "development.process.development.description": "Codificamos com as melhores práticas e padrões",
    "development.process.testing.title": "Testes e Qualidade",
    "development.process.testing.description": "Garantimos a qualidade através de testes rigorosos",
    "development.process.deployment.title": "Deploy e Manutenção",
    "development.process.deployment.description": "Colocamos em produção e oferecemos suporte contínuo",

    // Agile Page
    "agile.hero.title": "Metodologia Ágil",
    "agile.hero.subtitle": "Desenvolvemos projetos com agilidade, flexibilidade e foco no cliente",
    "agile.principles.title": "Princípios Ágeis",
    "agile.principles.individuals": "Indivíduos e interações mais que processos e ferramentas",
    "agile.principles.software": "Software em funcionamento mais que documentação abrangente",
    "agile.principles.collaboration": "Colaboração com o cliente mais que negociação de contratos",
    "agile.principles.responding": "Responder a mudanças mais que seguir um plano",
    "agile.benefits.title": "Benefícios da Metodologia Ágil",
    "agile.benefits.flexibility": "Flexibilidade",
    "agile.benefits.quality": "Qualidade",
    "agile.benefits.speed": "Velocidade",
    "agile.benefits.transparency": "Transparência",
    "agile.frameworks.title": "Frameworks que Utilizamos",
    "agile.frameworks.scrum": "Scrum",
    "agile.frameworks.kanban": "Kanban",
    "agile.frameworks.lean": "Lean",

    // Chatbot Page
    "chatbot.hero.title": "Soluções de Chatbot Inteligente",
    "chatbot.hero.subtitle": "Automatize o atendimento ao cliente com chatbots personalizados e inteligentes",
    "chatbot.features.title": "Recursos dos Nossos Chatbots",
    "chatbot.features.ai.title": "Inteligência Artificial",
    "chatbot.features.ai.description": "Chatbots com IA que aprendem e melhoram continuamente",
    "chatbot.features.integration.title": "Integração Completa",
    "chatbot.features.integration.description": "Conectamos com seus sistemas existentes e plataformas",
    "chatbot.features.multilingual.title": "Multilíngue",
    "chatbot.features.multilingual.description": "Suporte a múltiplos idiomas para alcançar mais clientes",
    "chatbot.features.analytics.title": "Analytics Avançado",
    "chatbot.features.analytics.description": "Relatórios detalhados sobre interações e performance",
    "chatbot.benefits.title": "Benefícios dos Chatbots",
    "chatbot.benefits.availability.title": "Disponibilidade 24/7",
    "chatbot.benefits.availability.description": "Atendimento contínuo sem interrupções",
    "chatbot.benefits.cost.title": "Redução de Custos",
    "chatbot.benefits.cost.description": "Diminua custos operacionais de atendimento",
    "chatbot.benefits.satisfaction.title": "Satisfação do Cliente",
    "chatbot.benefits.satisfaction.description": "Respostas rápidas e precisas aumentam a satisfação",
    "chatbot.benefits.scalability.title": "Escalabilidade",
    "chatbot.benefits.scalability.description": "Atenda milhares de clientes simultaneamente",
    "chatbot.platforms.title": "Plataformas Suportadas",
    "chatbot.platforms.website": "Website",
    "chatbot.platforms.whatsapp": "WhatsApp",
    "chatbot.platforms.facebook": "Facebook Messenger",
    "chatbot.platforms.telegram": "Telegram",
    "chatbot.cta.title": "Pronto para Automatizar seu Atendimento?",
    "chatbot.cta.subtitle": "Entre em contato e descubra como nossos chatbots podem transformar seu negócio",
    "chatbot.cta.button": "Solicitar Demonstração",

    // Outsourcing Page
    "outsourcing.hero.title": "Outsourcing de TI",
    "outsourcing.hero.subtitle": "Amplie sua equipe com profissionais especializados e reduza custos operacionais",
    "outsourcing.services.title": "Nossos Serviços de Outsourcing",
    "outsourcing.services.subtitle": "Soluções flexíveis para suas necessidades de desenvolvimento",
    "outsourcing.services.dedicated.title": "Equipe Dedicada",
    "outsourcing.services.dedicated.description": "Profissionais exclusivos para seu projeto com total dedicação",
    "outsourcing.services.offshore.title": "Desenvolvimento Offshore",
    "outsourcing.services.offshore.description": "Equipe remota especializada com custos otimizados",
    "outsourcing.services.support.title": "Suporte Técnico",
    "outsourcing.services.support.description": "Manutenção e suporte contínuo para seus sistemas",
    "outsourcing.services.specialists.title": "Especialistas sob Demanda",
    "outsourcing.services.specialists.description": "Acesso a especialistas específicos quando necessário",
    "outsourcing.benefits.title": "Vantagens do Outsourcing",
    "outsourcing.benefits.subtitle": "Por que escolher nossos serviços de outsourcing",
    "outsourcing.benefits.costs.title": "Redução de Custos",
    "outsourcing.benefits.costs.description": "Economize até 60% em custos de desenvolvimento",
    "outsourcing.benefits.scalability.title": "Escalabilidade",
    "outsourcing.benefits.scalability.description": "Ajuste o tamanho da equipe conforme necessário",
    "outsourcing.benefits.quality.title": "Alta Qualidade",
    "outsourcing.benefits.quality.description": "Profissionais experientes e processos bem definidos",
    "outsourcing.benefits.focus.title": "Foco no Core Business",
    "outsourcing.benefits.focus.description": "Concentre-se no que é essencial para seu negócio",
    "outsourcing.process.title": "Nosso Processo",
    "outsourcing.process.subtitle": "Como trabalhamos para garantir o sucesso do seu projeto",
    "outsourcing.process.analysis.title": "Análise de Necessidades",
    "outsourcing.process.analysis.description": "Entendemos suas necessidades e definimos o perfil ideal",
    "outsourcing.process.selection.title": "Seleção da Equipe",
    "outsourcing.process.selection.description": "Escolhemos os melhores profissionais para seu projeto",
    "outsourcing.process.integration.title": "Integração e Execução",
    "outsourcing.process.integration.description": "Integramos a equipe e iniciamos o desenvolvimento",
    "outsourcing.cta.title": "Pronto para Expandir sua Equipe?",
    "outsourcing.cta.subtitle": "Entre em contato e descubra como podemos ajudar seu projeto",
    "outsourcing.cta.button": "Solicitar Orçamento",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.whatWeDo": "What We Do",
    "nav.institutional": "Institutional",
    "nav.security": "Security",
    "nav.engineering": "Engineering",
    "nav.contact": "Contact",
    "nav.careers": "Careers",

    // What We Do Dropdown
    "whatWeDo.development": "Development",
    "whatWeDo.agile": "Agile Methodology",
    "whatWeDo.outsourcing": "Outsourcing",
    "whatWeDo.systemIntegration": "System Integration",
    "whatWeDo.chatbot": "Chatbot",
    "whatWeDo.landingPages": "Landing Pages",

    // Institutional Dropdown
    "institutional.education": "Education",
    "institutional.healthcare": "Healthcare",
    "institutional.financial": "Financial",
    "institutional.government": "Government",
    "institutional.manufacturing": "Manufacturing",
    "institutional.retail": "Retail",

    // Security Dropdown
    "security.cyberSecurity": "Cybersecurity",
    "security.access": "Access Control",
    "security.backups": "Backups",

    // Engineering Dropdown
    "engineering.railway": "Railway",
    "engineering.road": "Road",
    "engineering.solarEnergy": "Solar Energy",

    // Hero Section
    "hero.title": "Transforming ideas into innovative digital solutions",
    "hero.subtitle": "We develop custom software, web systems and mobile applications that drive your business growth",
    "hero.cta": "Start Project",
    "hero.learnMore": "Learn More",

    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "We offer complete technology solutions to boost your business",
    "services.development.title": "Software Development",
    "services.development.description":
      "We create custom web and mobile applications using the most modern technologies",
    "services.consulting.title": "IT Consulting",
    "services.consulting.description": "We guide your company in digital transformation and process optimization",
    "services.integration.title": "System Integration",
    "services.integration.description": "We connect your existing systems for greater operational efficiency",
    "services.support.title": "Technical Support",
    "services.support.description": "We offer continuous support to keep your systems running perfectly",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.subtitle": "Discover some of our most recent work",
    "projects.ecommerce.title": "E-commerce Platform",
    "projects.ecommerce.description": "Complete online sales system with inventory management and payments",
    "projects.crm.title": "CRM System",
    "projects.crm.description": "Customer relationship management platform and sales automation",
    "projects.banking.title": "Banking System",
    "projects.banking.description": "Secure application for financial transactions and account management",
    "projects.education.title": "Educational Platform",
    "projects.education.description": "Distance learning system with interactive resources",
    "projects.hospital.title": "Hospital System",
    "projects.hospital.description": "Complete management of patients, appointments and medical records",
    "projects.logistics.title": "Logistics System",
    "projects.logistics.description": "Fleet control, routes and real-time deliveries",
    "projects.streaming.title": "Streaming Platform",
    "projects.streaming.description": "HD quality video streaming system",
    "projects.food.title": "Delivery App",
    "projects.food.description": "Food delivery app with real-time tracking",

    // Industries Section
    "industries.title": "Industries We Serve",
    "industries.subtitle": "Proven experience in various market segments",
    "industries.education.title": "Digital Education",
    "industries.education.description": "Teaching platforms and educational management",
    "industries.health.title": "Digital Health",
    "industries.health.description": "Hospital systems and telemedicine",
    "industries.ecommerce.title": "E-commerce",
    "industries.ecommerce.description": "Online stores and marketplaces",
    "industries.government.title": "Government",
    "industries.government.description": "Public systems and transparency",
    "industries.finance.title": "Fintech",
    "industries.finance.description": "Payment solutions and banking",
    "industries.manufacturing.title": "Industry 4.0",
    "industries.manufacturing.description": "Automation and industrial IoT",

    // Testimonials Section
    "testimonials.title": "What our clients say",
    "testimonials.subtitle": "Testimonials from those who trust our work",

    // Insights Section
    "insights.title": "Insights and Trends",
    "insights.subtitle": "Stay up to date with the latest technology news",
    "insights.cta": "View All Articles",

    // Careers Section
    "careers.title": "Join Our Team",
    "careers.subtitle": "Be part of an innovative and constantly growing company",
    "careers.cta": "View Jobs",

    // Entertainment Section
    "entertainment.title": "Fun and Interaction",
    "entertainment.subtitle": "Try our Fox Maze game and test your skills!",
    "entertainment.cta": "Play Now",

    // Footer
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.industries": "Industries",
    "footer.contact": "Contact",
    "footer.followUs": "Follow Us",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",

    // Contact Page
    "contact.title": "Get in Touch",
    "contact.subtitle": "We are ready to turn your ideas into reality",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.company": "Company",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.info.address": "Address",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.hours": "Business Hours",
    "contact.info.hoursValue": "Monday to Friday: 9am to 6pm",

    // About Page
    "about.hero.title": "About VianaHub",
    "about.hero.subtitle":
      "We are a technology company dedicated to transforming ideas into innovative digital solutions",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "Develop technological solutions that drive the growth and efficiency of our clients, always focusing on innovation and quality.",
    "about.vision.title": "Our Vision",
    "about.vision.description":
      "To be recognized as one of the leading technology companies, offering solutions that make a difference in the market.",
    "about.values.title": "Our Values",
    "about.values.innovation": "Innovation",
    "about.values.quality": "Quality",
    "about.values.commitment": "Commitment",
    "about.values.transparency": "Transparency",
    "about.team.title": "Our Team",
    "about.team.subtitle": "Meet the professionals who make the difference",

    // Careers Page
    "careers.hero.title": "Careers at VianaHub",
    "careers.hero.subtitle": "Join a team passionate about technology and innovation",
    "careers.why.title": "Why work with us?",
    "careers.why.growth": "Professional Growth",
    "careers.why.innovation": "Innovative Environment",
    "careers.why.benefits": "Competitive Benefits",
    "careers.why.culture": "Collaborative Culture",
    "careers.positions.title": "Open Positions",
    "careers.positions.apply": "Apply",
    "careers.contact.title": "Didn't find the ideal position?",
    "careers.contact.description":
      "Send your resume and we will contact you when an opportunity suitable for your profile arises.",
    "careers.contact.cta": "Send Resume",

    // Development Page
    "development.hero.title": "Software Development",
    "development.hero.subtitle": "We create personalized digital solutions that drive your business growth",
    "development.services.title": "Our Development Services",
    "development.services.web.title": "Web Development",
    "development.services.web.description": "Modern and responsive web applications using the latest technologies",
    "development.services.mobile.title": "Mobile Development",
    "development.services.mobile.description": "Native and hybrid apps for iOS and Android",
    "development.services.api.title": "APIs and Integrations",
    "development.services.api.description": "Development of robust APIs and integrations with third-party systems",
    "development.services.cloud.title": "Cloud Solutions",
    "development.services.cloud.description": "Scalable and secure cloud architectures",
    "development.technologies.title": "Technologies We Use",
    "development.process.title": "Our Development Process",
    "development.process.analysis.title": "Analysis and Planning",
    "development.process.analysis.description": "We understand your needs and define the best strategy",
    "development.process.design.title": "Design and Prototyping",
    "development.process.design.description": "We create prototypes and intuitive designs",
    "development.process.development.title": "Development",
    "development.process.development.description": "We code with best practices and standards",
    "development.process.testing.title": "Testing and Quality",
    "development.process.testing.description": "We ensure quality through rigorous testing",
    "development.process.deployment.title": "Deploy and Maintenance",
    "development.process.deployment.description": "We put into production and offer continuous support",

    // Agile Page
    "agile.hero.title": "Agile Methodology",
    "agile.hero.subtitle": "We develop projects with agility, flexibility and customer focus",
    "agile.principles.title": "Agile Principles",
    "agile.principles.individuals": "Individuals and interactions over processes and tools",
    "agile.principles.software": "Working software over comprehensive documentation",
    "agile.principles.collaboration": "Customer collaboration over contract negotiation",
    "agile.principles.responding": "Responding to change over following a plan",
    "agile.benefits.title": "Benefits of Agile Methodology",
    "agile.benefits.flexibility": "Flexibility",
    "agile.benefits.quality": "Quality",
    "agile.benefits.speed": "Speed",
    "agile.benefits.transparency": "Transparency",
    "agile.frameworks.title": "Frameworks We Use",
    "agile.frameworks.scrum": "Scrum",
    "agile.frameworks.kanban": "Kanban",
    "agile.frameworks.lean": "Lean",

    // Chatbot Page
    "chatbot.hero.title": "Intelligent Chatbot Solutions",
    "chatbot.hero.subtitle": "Automate customer service with personalized and intelligent chatbots",
    "chatbot.features.title": "Features of Our Chatbots",
    "chatbot.features.ai.title": "Artificial Intelligence",
    "chatbot.features.ai.description": "AI chatbots that learn and improve continuously",
    "chatbot.features.integration.title": "Complete Integration",
    "chatbot.features.integration.description": "We connect with your existing systems and platforms",
    "chatbot.features.multilingual.title": "Multilingual",
    "chatbot.features.multilingual.description": "Support for multiple languages to reach more customers",
    "chatbot.features.analytics.title": "Advanced Analytics",
    "chatbot.features.analytics.description": "Detailed reports on interactions and performance",
    "chatbot.benefits.title": "Chatbot Benefits",
    "chatbot.benefits.availability.title": "24/7 Availability",
    "chatbot.benefits.availability.description": "Continuous service without interruptions",
    "chatbot.benefits.cost.title": "Cost Reduction",
    "chatbot.benefits.cost.description": "Reduce operational service costs",
    "chatbot.benefits.satisfaction.title": "Customer Satisfaction",
    "chatbot.benefits.satisfaction.description": "Fast and accurate responses increase satisfaction",
    "chatbot.benefits.scalability.title": "Scalability",
    "chatbot.benefits.scalability.description": "Serve thousands of customers simultaneously",
    "chatbot.platforms.title": "Supported Platforms",
    "chatbot.platforms.website": "Website",
    "chatbot.platforms.whatsapp": "WhatsApp",
    "chatbot.platforms.facebook": "Facebook Messenger",
    "chatbot.platforms.telegram": "Telegram",
    "chatbot.cta.title": "Ready to Automate Your Service?",
    "chatbot.cta.subtitle": "Get in touch and discover how our chatbots can transform your business",
    "chatbot.cta.button": "Request Demo",

    // Outsourcing Page
    "outsourcing.hero.title": "IT Outsourcing",
    "outsourcing.hero.subtitle": "Expand your team with specialized professionals and reduce operational costs",
    "outsourcing.services.title": "Our Outsourcing Services",
    "outsourcing.services.subtitle": "Flexible solutions for your development needs",
    "outsourcing.services.dedicated.title": "Dedicated Team",
    "outsourcing.services.dedicated.description": "Exclusive professionals for your project with total dedication",
    "outsourcing.services.offshore.title": "Offshore Development",
    "outsourcing.services.offshore.description": "Specialized remote team with optimized costs",
    "outsourcing.services.support.title": "Technical Support",
    "outsourcing.services.support.description": "Maintenance and continuous support for your systems",
    "outsourcing.services.specialists.title": "On-Demand Specialists",
    "outsourcing.services.specialists.description": "Access to specific specialists when needed",
    "outsourcing.benefits.title": "Outsourcing Advantages",
    "outsourcing.benefits.subtitle": "Why choose our outsourcing services",
    "outsourcing.benefits.costs.title": "Cost Reduction",
    "outsourcing.benefits.costs.description": "Save up to 60% on development costs",
    "outsourcing.benefits.scalability.title": "Scalability",
    "outsourcing.benefits.scalability.description": "Adjust team size as needed",
    "outsourcing.benefits.quality.title": "High Quality",
    "outsourcing.benefits.quality.description": "Experienced professionals and well-defined processes",
    "outsourcing.benefits.focus.title": "Focus on Core Business",
    "outsourcing.benefits.focus.description": "Focus on what is essential for your business",
    "outsourcing.process.title": "Our Process",
    "outsourcing.process.subtitle": "How we work to ensure your project's success",
    "outsourcing.process.analysis.title": "Needs Analysis",
    "outsourcing.process.analysis.description": "We understand your needs and define the ideal profile",
    "outsourcing.process.selection.title": "Team Selection",
    "outsourcing.process.selection.description": "We choose the best professionals for your project",
    "outsourcing.process.integration.title": "Integration and Execution",
    "outsourcing.process.integration.description": "We integrate the team and start development",
    "outsourcing.cta.title": "Ready to Expand Your Team?",
    "outsourcing.cta.subtitle": "Get in touch and discover how we can help your project",
    "outsourcing.cta.button": "Request Quote",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.whatWeDo": "Qué Hacemos",
    "nav.institutional": "Institucional",
    "nav.security": "Seguridad",
    "nav.engineering": "Ingeniería",
    "nav.contact": "Contacto",
    "nav.careers": "Carreras",

    // What We Do Dropdown
    "whatWeDo.development": "Desarrollo",
    "whatWeDo.agile": "Metodología Ágil",
    "whatWeDo.outsourcing": "Outsourcing",
    "whatWeDo.systemIntegration": "Integración de Sistemas",
    "whatWeDo.chatbot": "Chatbot",
    "whatWeDo.landingPages": "Landing Pages",

    // Institutional Dropdown
    "institutional.education": "Educación",
    "institutional.healthcare": "Salud",
    "institutional.financial": "Financiero",
    "institutional.government": "Gobierno",
    "institutional.manufacturing": "Manufactura",
    "institutional.retail": "Retail",

    // Security Dropdown
    "security.cyberSecurity": "Ciberseguridad",
    "security.access": "Control de Acceso",
    "security.backups": "Respaldos",

    // Engineering Dropdown
    "engineering.railway": "Ferroviario",
    "engineering.road": "Carretero",
    "engineering.solarEnergy": "Energía Solar",

    // Hero Section
    "hero.title": "Transformando ideas en soluciones digitales innovadoras",
    "hero.subtitle":
      "Desarrollamos software personalizado, sistemas web y aplicaciones móviles que impulsan el crecimiento de tu negocio",
    "hero.cta": "Iniciar Proyecto",
    "hero.learnMore": "Saber Más",

    // Services Section
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Ofrecemos soluciones completas en tecnología para impulsar tu negocio",
    "services.development.title": "Desarrollo de Software",
    "services.development.description":
      "Creamos aplicaciones web y móviles personalizadas usando las tecnologías más modernas",
    "services.consulting.title": "Consultoría en TI",
    "services.consulting.description": "Orientamos tu empresa en la transformación digital y optimización de procesos",
    "services.integration.title": "Integración de Sistemas",
    "services.integration.description": "Conectamos tus sistemas existentes para mayor eficiencia operacional",
    "services.support.title": "Soporte Técnico",
    "services.support.description": "Ofrecemos soporte continuo para mantener tus sistemas funcionando perfectamente",

    // Projects Section
    "projects.title": "Proyectos Destacados",
    "projects.subtitle": "Conoce algunos de nuestros trabajos más recientes",
    "projects.ecommerce.title": "Plataforma E-commerce",
    "projects.ecommerce.description": "Sistema completo de ventas online con gestión de inventario y pagos",
    "projects.crm.title": "Sistema CRM",
    "projects.crm.description": "Plataforma de gestión de relaciones con clientes y automatización de ventas",
    "projects.banking.title": "Sistema Bancario",
    "projects.banking.description": "Aplicación segura para transacciones financieras y gestión de cuentas",
    "projects.education.title": "Plataforma Educacional",
    "projects.education.description": "Sistema de enseñanza a distancia con recursos interactivos",
    "projects.hospital.title": "Sistema Hospitalario",
    "projects.hospital.description": "Gestión completa de pacientes, consultas y historiales médicos",
    "projects.logistics.title": "Sistema Logístico",
    "projects.logistics.description": "Control de flota, rutas y entregas en tiempo real",
    "projects.streaming.title": "Plataforma de Streaming",
    "projects.streaming.description": "Sistema de transmisión de video con calidad HD",
    "projects.food.title": "App Delivery",
    "projects.food.description": "Aplicación de entrega de comida con seguimiento en tiempo real",

    // Industries Section
    "industries.title": "Sectores que Atendemos",
    "industries.subtitle": "Experiencia comprobada en diversos segmentos de mercado",
    "industries.education.title": "Educación Digital",
    "industries.education.description": "Plataformas de enseñanza y gestión educacional",
    "industries.health.title": "Salud Digital",
    "industries.health.description": "Sistemas hospitalarios y telemedicina",
    "industries.ecommerce.title": "E-commerce",
    "industries.ecommerce.description": "Tiendas virtuales y marketplaces",
    "industries.government.title": "Gobierno",
    "industries.government.description": "Sistemas públicos y transparencia",
    "industries.finance.title": "Fintech",
    "industries.finance.description": "Soluciones de pago y banking",
    "industries.manufacturing.title": "Industria 4.0",
    "industries.manufacturing.description": "Automatización e IoT industrial",

    // Testimonials Section
    "testimonials.title": "Lo que dicen nuestros clientes",
    "testimonials.subtitle": "Testimonios de quienes confían en nuestro trabajo",

    // Insights Section
    "insights.title": "Insights y Tendencias",
    "insights.subtitle": "Mantente al día con las últimas novedades en tecnología",
    "insights.cta": "Ver Todos los Artículos",

    // Careers Section
    "careers.title": "Únete a Nuestro Equipo",
    "careers.subtitle": "Forma parte de una empresa innovadora y en constante crecimiento",
    "careers.cta": "Ver Vacantes",

    // Entertainment Section
    "entertainment.title": "Diversión e Interacción",
    "entertainment.subtitle": "¡Prueba nuestro juego Fox Maze y pon a prueba tus habilidades!",
    "entertainment.cta": "Jugar Ahora",

    // Footer
    "footer.company": "Empresa",
    "footer.services": "Servicios",
    "footer.industries": "Sectores",
    "footer.contact": "Contacto",
    "footer.followUs": "Síguenos",
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Uso",

    // Contact Page
    "contact.title": "Ponte en Contacto",
    "contact.subtitle": "Estamos listos para transformar tus ideas en realidad",
    "contact.form.name": "Nombre",
    "contact.form.email": "Email",
    "contact.form.phone": "Teléfono",
    "contact.form.company": "Empresa",
    "contact.form.message": "Mensaje",
    "contact.form.send": "Enviar Mensaje",
    "contact.info.address": "Dirección",
    "contact.info.phone": "Teléfono",
    "contact.info.email": "Email",
    "contact.info.hours": "Horario de Atención",
    "contact.info.hoursValue": "Lunes a Viernes: 9h a 18h",

    // About Page
    "about.hero.title": "Acerca de VianaHub",
    "about.hero.subtitle":
      "Somos una empresa de tecnología dedicada a transformar ideas en soluciones digitales innovadoras",
    "about.mission.title": "Nuestra Misión",
    "about.mission.description":
      "Desarrollar soluciones tecnológicas que impulsen el crecimiento y la eficiencia de nuestros clientes, siempre con foco en la innovación y calidad.",
    "about.vision.title": "Nuestra Visión",
    "about.vision.description":
      "Ser reconocida como una de las principales empresas de tecnología, ofreciendo soluciones que hacen la diferencia en el mercado.",
    "about.values.title": "Nuestros Valores",
    "about.values.innovation": "Innovación",
    "about.values.quality": "Calidad",
    "about.values.commitment": "Compromiso",
    "about.values.transparency": "Transparencia",
    "about.team.title": "Nuestro Equipo",
    "about.team.subtitle": "Conoce a los profesionales que hacen la diferencia",

    // Careers Page
    "careers.hero.title": "Carreras en VianaHub",
    "careers.hero.subtitle": "Únete a un equipo apasionado por la tecnología e innovación",
    "careers.why.title": "¿Por qué trabajar con nosotros?",
    "careers.why.growth": "Crecimiento Profesional",
    "careers.why.innovation": "Ambiente Innovador",
    "careers.why.benefits": "Beneficios Competitivos",
    "careers.why.culture": "Cultura Colaborativa",
    "careers.positions.title": "Posiciones Abiertas",
    "careers.positions.apply": "Postularse",
    "careers.contact.title": "¿No encontraste la vacante ideal?",
    "careers.contact.description":
      "Envía tu currículum y nos pondremos en contacto cuando surja una oportunidad adecuada para tu perfil.",
    "careers.contact.cta": "Enviar Currículum",

    // Development Page
    "development.hero.title": "Desarrollo de Software",
    "development.hero.subtitle":
      "Creamos soluciones digitales personalizadas que impulsan el crecimiento de tu negocio",
    "development.services.title": "Nuestros Servicios de Desarrollo",
    "development.services.web.title": "Desarrollo Web",
    "development.services.web.description": "Aplicaciones web modernas y responsivas usando las últimas tecnologías",
    "development.services.mobile.title": "Desarrollo Móvil",
    "development.services.mobile.description": "Apps nativas e híbridas para iOS y Android",
    "development.services.api.title": "APIs e Integraciones",
    "development.services.api.description": "Desarrollo de APIs robustas e integraciones con sistemas terceros",
    "development.services.cloud.title": "Soluciones en la Nube",
    "development.services.cloud.description": "Arquitecturas escalables y seguras en la nube",
    "development.technologies.title": "Tecnologías que Utilizamos",
    "development.process.title": "Nuestro Proceso de Desarrollo",
    "development.process.analysis.title": "Análisis y Planificación",
    "development.process.analysis.description": "Entendemos tus necesidades y definimos la mejor estrategia",
    "development.process.design.title": "Diseño y Prototipado",
    "development.process.design.description": "Creamos prototipos y diseños intuitivos",
    "development.process.development.title": "Desarrollo",
    "development.process.development.description": "Codificamos con las mejores prácticas y estándares",
    "development.process.testing.title": "Pruebas y Calidad",
    "development.process.testing.description": "Garantizamos la calidad a través de pruebas rigurosas",
    "development.process.deployment.title": "Deploy y Mantenimiento",
    "development.process.deployment.description": "Ponemos en producción y ofrecemos soporte continuo",

    // Agile Page
    "agile.hero.title": "Metodología Ágil",
    "agile.hero.subtitle": "Desarrollamos proyectos con agilidad, flexibilidad y enfoque en el cliente",
    "agile.principles.title": "Principios Ágiles",
    "agile.principles.individuals": "Individuos e interacciones sobre procesos y herramientas",
    "agile.principles.software": "Software funcionando sobre documentación extensiva",
    "agile.principles.collaboration": "Colaboración con el cliente sobre negociación de contratos",
    "agile.principles.responding": "Responder a los cambios sobre seguir un plan",
    "agile.benefits.title": "Beneficios de la Metodología Ágil",
    "agile.benefits.flexibility": "Flexibilidad",
    "agile.benefits.quality": "Calidad",
    "agile.benefits.speed": "Velocidad",
    "agile.benefits.transparency": "Transparencia",
    "agile.frameworks.title": "Frameworks que Utilizamos",
    "agile.frameworks.scrum": "Scrum",
    "agile.frameworks.kanban": "Kanban",
    "agile.frameworks.lean": "Lean",

    // Chatbot Page
    "chatbot.hero.title": "Soluciones de Chatbot Inteligente",
    "chatbot.hero.subtitle": "Automatiza la atención al cliente con chatbots personalizados e inteligentes",
    "chatbot.features.title": "Características de Nuestros Chatbots",
    "chatbot.features.ai.title": "Inteligencia Artificial",
    "chatbot.features.ai.description": "Chatbots con IA que aprenden y mejoran continuamente",
    "chatbot.features.integration.title": "Integración Completa",
    "chatbot.features.integration.description": "Conectamos con tus sistemas existentes y plataformas",
    "chatbot.features.multilingual.title": "Multiidioma",
    "chatbot.features.multilingual.description": "Soporte para múltiples idiomas para alcanzar más clientes",
    "chatbot.features.analytics.title": "Analytics Avanzado",
    "chatbot.features.analytics.description": "Reportes detallados sobre interacciones y rendimiento",
    "chatbot.benefits.title": "Beneficios de los Chatbots",
    "chatbot.benefits.availability.title": "Disponibilidad 24/7",
    "chatbot.benefits.availability.description": "Atención continua sin interrupciones",
    "chatbot.benefits.cost.title": "Reducción de Costos",
    "chatbot.benefits.cost.description": "Disminuye costos operacionales de atención",
    "chatbot.benefits.satisfaction.title": "Satisfacción del Cliente",
    "chatbot.benefits.satisfaction.description": "Respuestas rápidas y precisas aumentan la satisfacción",
    "chatbot.benefits.scalability.title": "Escalabilidad",
    "chatbot.benefits.scalability.description": "Atiende miles de clientes simultáneamente",
    "chatbot.platforms.title": "Plataformas Soportadas",
    "chatbot.platforms.website": "Sitio Web",
    "chatbot.platforms.whatsapp": "WhatsApp",
    "chatbot.platforms.facebook": "Facebook Messenger",
    "chatbot.platforms.telegram": "Telegram",
    "chatbot.cta.title": "¿Listo para Automatizar tu Atención?",
    "chatbot.cta.subtitle": "Ponte en contacto y descubre cómo nuestros chatbots pueden transformar tu negocio",
    "chatbot.cta.button": "Solicitar Demostración",

    // Outsourcing Page
    "outsourcing.hero.title": "Outsourcing de TI",
    "outsourcing.hero.subtitle": "Amplía tu equipo con profesionales especializados y reduce costos operacionales",
    "outsourcing.services.title": "Nuestros Servicios de Outsourcing",
    "outsourcing.services.subtitle": "Soluciones flexibles para tus necesidades de desarrollo",
    "outsourcing.services.dedicated.title": "Equipo Dedicado",
    "outsourcing.services.dedicated.description": "Profesionales exclusivos para tu proyecto con total dedicación",
    "outsourcing.services.offshore.title": "Desarrollo Offshore",
    "outsourcing.services.offshore.description": "Equipo remoto especializado con costos optimizados",
    "outsourcing.services.support.title": "Soporte Técnico",
    "outsourcing.services.support.description": "Mantenimiento y soporte continuo para tus sistemas",
    "outsourcing.services.specialists.title": "Especialistas bajo Demanda",
    "outsourcing.services.specialists.description": "Acceso a especialistas específicos cuando sea necesario",
    "outsourcing.benefits.title": "Ventajas del Outsourcing",
    "outsourcing.benefits.subtitle": "Por qué elegir nuestros servicios de outsourcing",
    "outsourcing.benefits.costs.title": "Reducción de Costos",
    "outsourcing.benefits.costs.description": "Ahorra hasta 60% en costos de desarrollo",
    "outsourcing.benefits.scalability.title": "Escalabilidad",
    "outsourcing.benefits.scalability.description": "Ajusta el tamaño del equipo según sea necesario",
    "outsourcing.benefits.quality.title": "Alta Calidad",
    "outsourcing.benefits.quality.description": "Profesionales experimentados y procesos bien definidos",
    "outsourcing.benefits.focus.title": "Enfoque en el Core Business",
    "outsourcing.benefits.focus.description": "Concéntrate en lo que es esencial para tu negocio",
    "outsourcing.process.title": "Nuestro Proceso",
    "outsourcing.process.subtitle": "Cómo trabajamos para garantizar el éxito de tu proyecto",
    "outsourcing.process.analysis.title": "Análisis de Necesidades",
    "outsourcing.process.analysis.description": "Entendemos tus necesidades y definimos el perfil ideal",
    "outsourcing.process.selection.title": "Selección del Equipo",
    "outsourcing.process.selection.description": "Elegimos los mejores profesionales para tu proyecto",
    "outsourcing.process.integration.title": "Integración y Ejecución",
    "outsourcing.process.integration.description": "Integramos el equipo e iniciamos el desarrollo",
    "outsourcing.cta.title": "¿Listo para Expandir tu Equipo?",
    "outsourcing.cta.subtitle": "Ponte en contacto y descubre cómo podemos ayudar a tu proyecto",
    "outsourcing.cta.button": "Solicitar Cotización",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.whatWeDo": "Ce que nous faisons",
    "nav.institutional": "Institutionnel",
    "nav.security": "Sécurité",
    "nav.engineering": "Ingénierie",
    "nav.contact": "Contact",
    "nav.careers": "Carrières",

    // What We Do Dropdown
    "whatWeDo.development": "Développement",
    "whatWeDo.agile": "Méthodologie Agile",
    "whatWeDo.outsourcing": "Externalisation",
    "whatWeDo.systemIntegration": "Intégration de Systèmes",
    "whatWeDo.chatbot": "Chatbot",
    "whatWeDo.landingPages": "Pages d'atterrissage",

    // Institutional Dropdown
    "institutional.education": "Éducation",
    "institutional.healthcare": "Santé",
    "institutional.financial": "Financier",
    "institutional.government": "Gouvernement",
    "institutional.manufacturing": "Fabrication",
    "institutional.retail": "Commerce de détail",

    // Security Dropdown
    "security.cyberSecurity": "Cybersécurité",
    "security.access": "Contrôle d'accès",
    "security.backups": "Sauvegardes",

    // Engineering Dropdown
    "engineering.railway": "Ferroviaire",
    "engineering.road": "Routier",
    "engineering.solarEnergy": "Énergie solaire",

    // Hero Section
    "hero.title": "Transformer les idées en solutions numériques innovantes",
    "hero.subtitle":
      "Nous développons des logiciels personnalisés, des systèmes web et des applications mobiles qui stimulent la croissance de votre entreprise",
    "hero.cta": "Démarrer le projet",
    "hero.learnMore": "En savoir plus",

    // Services Section
    "services.title": "Nos Services",
    "services.subtitle": "Nous offrons des solutions technologiques complètes pour stimuler votre entreprise",
    "services.development.title": "Développement de logiciels",
    "services.development.description":
      "Nous créons des applications web et mobiles personnalisées en utilisant les technologies les plus modernes",
    "services.consulting.title": "Conseil en informatique",
    "services.consulting.description":
      "Nous guidons votre entreprise dans la transformation numérique et l'optimisation des processus",
    "services.integration.title": "Intégration de systèmes",
    "services.integration.description":
      "Nous connectons vos systèmes existants pour une plus grande efficacité opérationnelle",
    "services.support.title": "Support technique",
    "services.support.description":
      "Nous offrons un support continu pour maintenir vos systèmes en parfait état de fonctionnement",

    // Projects Section
    "projects.title": "Projets en vedette",
    "projects.subtitle": "Découvrez quelques-uns de nos travaux les plus récents",
    "projects.ecommerce.title": "Plateforme E-commerce",
    "projects.ecommerce.description": "Système complet de vente en ligne avec gestion des stocks et des paiements",
    "projects.crm.title": "Système CRM",
    "projects.crm.description": "Plateforme de gestion de la relation client et automatisation des ventes",
    "projects.banking.title": "Système bancaire",
    "projects.banking.description": "Application sécurisée pour les transactions financières et la gestion des comptes",
    "projects.education.title": "Plateforme éducative",
    "projects.education.description": "Système d'enseignement à distance avec des ressources interactives",
    "projects.hospital.title": "Système hospitalier",
    "projects.hospital.description": "Gestion complète des patients, consultations et dossiers médicaux",
    "projects.logistics.title": "Système logistique",
    "projects.logistics.description": "Contrôle de flotte, itinéraires et livraisons en temps réel",
    "projects.streaming.title": "Plateforme de streaming",
    "projects.streaming.description": "Système de diffusion vidéo en qualité HD",
    "projects.food.title": "App de livraison",
    "projects.food.description": "Application de livraison de nourriture avec suivi en temps réel",

    // Industries Section
    "industries.title": "Secteurs que nous servons",
    "industries.subtitle": "Expérience prouvée dans divers segments de marché",
    "industries.education.title": "Éducation numérique",
    "industries.education.description": "Plateformes d'enseignement et gestion éducative",
    "industries.health.title": "Santé numérique",
    "industries.health.description": "Systèmes hospitaliers et télémédecine",
    "industries.ecommerce.title": "E-commerce",
    "industries.ecommerce.description": "Boutiques en ligne et places de marché",
    "industries.government.title": "Gouvernement",
    "industries.government.description": "Systèmes publics et transparence",
    "industries.finance.title": "Fintech",
    "industries.finance.description": "Solutions de paiement et banking",
    "industries.manufacturing.title": "Industrie 4.0",
    "industries.manufacturing.description": "Automatisation et IoT industriel",

    // Testimonials Section
    "testimonials.title": "Ce que disent nos clients",
    "testimonials.subtitle": "Témoignages de ceux qui font confiance à notre travail",

    // Insights Section
    "insights.title": "Insights et tendances",
    "insights.subtitle": "Restez au courant des dernières nouvelles technologiques",
    "insights.cta": "Voir tous les articles",

    // Careers Section
    "careers.title": "Rejoignez notre équipe",
    "careers.subtitle": "Faites partie d'une entreprise innovante en croissance constante",
    "careers.cta": "Voir les emplois",

    // Entertainment Section
    "entertainment.title": "Amusement et interaction",
    "entertainment.subtitle": "Essayez notre jeu Fox Maze et testez vos compétences !",
    "entertainment.cta": "Jouer maintenant",

    // Footer
    "footer.company": "Entreprise",
    "footer.services": "Services",
    "footer.industries": "Secteurs",
    "footer.contact": "Contact",
    "footer.followUs": "Suivez-nous",
    "footer.rights": "Tous droits réservés.",
    "footer.privacy": "Politique de confidentialité",
    "footer.terms": "Conditions d'utilisation",

    // Contact Page
    "contact.title": "Entrer en contact",
    "contact.subtitle": "Nous sommes prêts à transformer vos idées en réalité",
    "contact.form.name": "Nom",
    "contact.form.email": "Email",
    "contact.form.phone": "Téléphone",
    "contact.form.company": "Entreprise",
    "contact.form.message": "Message",
    "contact.form.send": "Envoyer le message",
    "contact.info.address": "Adresse",
    "contact.info.phone": "Téléphone",
    "contact.info.email": "Email",
    "contact.info.hours": "Heures d'ouverture",
    "contact.info.hoursValue": "Lundi au vendredi : 9h à 18h",

    // About Page
    "about.hero.title": "À propos de VianaHub",
    "about.hero.subtitle":
      "Nous sommes une entreprise technologique dédiée à transformer les idées en solutions numériques innovantes",
    "about.mission.title": "Notre mission",
    "about.mission.description":
      "Développer des solutions technologiques qui stimulent la croissance et l'efficacité de nos clients, toujours en mettant l'accent sur l'innovation et la qualité.",
    "about.vision.title": "Notre vision",
    "about.vision.description":
      "Être reconnue comme l'une des principales entreprises technologiques, offrant des solutions qui font la différence sur le marché.",
    "about.values.title": "Nos valeurs",
    "about.values.innovation": "Innovation",
    "about.values.quality": "Qualité",
    "about.values.commitment": "Engagement",
    "about.values.transparency": "Transparence",
    "about.team.title": "Notre équipe",
    "about.team.subtitle": "Rencontrez les professionnels qui font la différence",

    // Careers Page
    "careers.hero.title": "Carrières chez VianaHub",
    "careers.hero.subtitle": "Rejoignez une équipe passionnée par la technologie et l'innovation",
    "careers.why.title": "Pourquoi travailler avec nous ?",
    "careers.why.growth": "Croissance professionnelle",
    "careers.why.innovation": "Environnement innovant",
    "careers.why.benefits": "Avantages compétitifs",
    "careers.why.culture": "Culture collaborative",
    "careers.positions.title": "Postes ouverts",
    "careers.positions.apply": "Postuler",
    "careers.contact.title": "Vous n'avez pas trouvé le poste idéal ?",
    "careers.contact.description":
      "Envoyez votre CV et nous vous contacterons lorsqu'une opportunité adaptée à votre profil se présentera.",
    "careers.contact.cta": "Envoyer CV",

    // Development Page
    "development.hero.title": "Développement de logiciels",
    "development.hero.subtitle":
      "Nous créons des solutions numériques personnalisées qui stimulent la croissance de votre entreprise",
    "development.services.title": "Nos services de développement",
    "development.services.web.title": "Développement Web",
    "development.services.web.description":
      "Applications web modernes et responsives utilisant les dernières technologies",
    "development.services.mobile.title": "Développement mobile",
    "development.services.mobile.description": "Applications natives et hybrides pour iOS et Android",
    "development.services.api.title": "APIs et intégrations",
    "development.services.api.description": "Développement d'APIs robustes et intégrations avec des systèmes tiers",
    "development.services.cloud.title": "Solutions cloud",
    "development.services.cloud.description": "Architectures évolutives et sécurisées dans le cloud",
    "development.technologies.title": "Technologies que nous utilisons",
    "development.process.title": "Notre processus de développement",
    "development.process.analysis.title": "Analyse et planification",
    "development.process.analysis.description": "Nous comprenons vos besoins et définissons la meilleure stratégie",
    "development.process.design.title": "Design et prototypage",
    "development.process.design.description": "Nous créons des prototypes et des designs intuitifs",
    "development.process.development.title": "Développement",
    "development.process.development.description": "Nous codons avec les meilleures pratiques et standards",
    "development.process.testing.title": "Tests et qualité",
    "development.process.testing.description": "Nous garantissons la qualité grâce à des tests rigoureux",
    "development.process.deployment.title": "Déploiement et maintenance",
    "development.process.deployment.description": "Nous mettons en production et offrons un support continu",

    // Agile Page
    "agile.hero.title": "Méthodologie Agile",
    "agile.hero.subtitle": "Nous développons des projets avec agilité, flexibilité et focus client",
    "agile.principles.title": "Principes Agiles",
    "agile.principles.individuals": "Les individus et interactions plus que les processus et outils",
    "agile.principles.software": "Des logiciels opérationnels plus qu'une documentation exhaustive",
    "agile.principles.collaboration": "La collaboration avec les clients plus que la négociation contractuelle",
    "agile.principles.responding": "L'adaptation au changement plus que le suivi d'un plan",
    "agile.benefits.title": "Avantages de la méthodologie Agile",
    "agile.benefits.flexibility": "Flexibilité",
    "agile.benefits.quality": "Qualité",
    "agile.benefits.speed": "Vitesse",
    "agile.benefits.transparency": "Transparence",
    "agile.frameworks.title": "Frameworks que nous utilisons",
    "agile.frameworks.scrum": "Scrum",
    "agile.frameworks.kanban": "Kanban",
    "agile.frameworks.lean": "Lean",

    // Chatbot Page
    "chatbot.hero.title": "Solutions de Chatbot Intelligent",
    "chatbot.hero.subtitle": "Automatisez le service client avec des chatbots personnalisés et intelligents",
    "chatbot.features.title": "Fonctionnalités de nos Chatbots",
    "chatbot.features.ai.title": "Intelligence Artificielle",
    "chatbot.features.ai.description": "Chatbots avec IA qui apprennent et s'améliorent continuellement",
    "chatbot.features.integration.title": "Intégration complète",
    "chatbot.features.integration.description": "Nous nous connectons avec vos systèmes existants et plateformes",
    "chatbot.features.multilingual.title": "Multilingue",
    "chatbot.features.multilingual.description": "Support pour plusieurs langues pour atteindre plus de clients",
    "chatbot.features.analytics.title": "Analytics avancé",
    "chatbot.features.analytics.description": "Rapports détaillés sur les interactions et performances",
    "chatbot.benefits.title": "Avantages des Chatbots",
    "chatbot.benefits.availability.title": "Disponibilité 24/7",
    "chatbot.benefits.availability.description": "Service continu sans interruptions",
    "chatbot.benefits.cost.title": "Réduction des coûts",
    "chatbot.benefits.cost.description": "Diminuez les coûts opérationnels de service",
    "chatbot.benefits.satisfaction.title": "Satisfaction client",
    "chatbot.benefits.satisfaction.description": "Des réponses rapides et précises augmentent la satisfaction",
    "chatbot.benefits.scalability.title": "Évolutivité",
    "chatbot.benefits.scalability.description": "Servez des milliers de clients simultanément",
    "chatbot.platforms.title": "Plateformes supportées",
    "chatbot.platforms.website": "Site Web",
    "chatbot.platforms.whatsapp": "WhatsApp",
    "chatbot.platforms.facebook": "Facebook Messenger",
    "chatbot.platforms.telegram": "Telegram",
    "chatbot.cta.title": "Prêt à automatiser votre service ?",
    "chatbot.cta.subtitle": "Contactez-nous et découvrez comment nos chatbots peuvent transformer votre entreprise",
    "chatbot.cta.button": "Demander une démonstration",

    // Outsourcing Page
    "outsourcing.hero.title": "Externalisation informatique",
    "outsourcing.hero.subtitle":
      "Élargissez votre équipe avec des professionnels spécialisés et réduisez les coûts opérationnels",
    "outsourcing.services.title": "Nos services d'externalisation",
    "outsourcing.services.subtitle": "Solutions flexibles pour vos besoins de développement",
    "outsourcing.services.dedicated.title": "Équipe dédiée",
    "outsourcing.services.dedicated.description": "Professionnels exclusifs pour votre projet avec dévouement total",
    "outsourcing.services.offshore.title": "Développement offshore",
    "outsourcing.services.offshore.description": "Équipe distante spécialisée avec des coûts optimisés",
    "outsourcing.services.support.title": "Support technique",
    "outsourcing.services.support.description": "Maintenance et support continu pour vos systèmes",
    "outsourcing.services.specialists.title": "Spécialistes à la demande",
    "outsourcing.services.specialists.description": "Accès à des spécialistes spécifiques quand nécessaire",
    "outsourcing.benefits.title": "Avantages de l'externalisation",
    "outsourcing.benefits.subtitle": "Pourquoi choisir nos services d'externalisation",
    "outsourcing.benefits.costs.title": "Réduction des coûts",
    "outsourcing.benefits.costs.description": "Économisez jusqu'à 60% sur les coûts de développement",
    "outsourcing.benefits.scalability.title": "Évolutivité",
    "outsourcing.benefits.scalability.description": "Ajustez la taille de l'équipe selon les besoins",
    "outsourcing.benefits.quality.title": "Haute qualité",
    "outsourcing.benefits.quality.description": "Professionnels expérimentés et processus bien définis",
    "outsourcing.benefits.focus.title": "Focus sur le cœur de métier",
    "outsourcing.benefits.focus.description": "Concentrez-vous sur ce qui est essentiel pour votre entreprise",
    "outsourcing.process.title": "Notre processus",
    "outsourcing.process.subtitle": "Comment nous travaillons pour garantir le succès de votre projet",
    "outsourcing.process.analysis.title": "Analyse des besoins",
    "outsourcing.process.analysis.description": "Nous comprenons vos besoins et définissons le profil idéal",
    "outsourcing.process.selection.title": "Sélection de l'équipe",
    "outsourcing.process.selection.description": "Nous choisissons les meilleurs professionnels pour votre projet",
    "outsourcing.process.integration.title": "Intégration et exécution",
    "outsourcing.process.integration.description": "Nous intégrons l'équipe et commençons le développement",
    "outsourcing.cta.title": "Prêt à élargir votre équipe ?",
    "outsourcing.cta.subtitle": "Contactez-nous et découvrez comment nous pouvons aider votre projet",
    "outsourcing.cta.button": "Demander un devis",
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.about": "Über uns",
    "nav.whatWeDo": "Was wir tun",
    "nav.institutional": "Institutionell",
    "nav.security": "Sicherheit",
    "nav.engineering": "Ingenieurwesen",
    "nav.contact": "Kontakt",
    "nav.careers": "Karriere",

    // What We Do Dropdown
    "whatWeDo.development": "Entwicklung",
    "whatWeDo.agile": "Agile Methodik",
    "whatWeDo.outsourcing": "Outsourcing",
    "whatWeDo.systemIntegration": "Systemintegration",
    "whatWeDo.chatbot": "Chatbot",
    "whatWeDo.landingPages": "Landing Pages",

    // Institutional Dropdown
    "institutional.education": "Bildung",
    "institutional.healthcare": "Gesundheitswesen",
    "institutional.financial": "Finanzwesen",
    "institutional.government": "Regierung",
    "institutional.manufacturing": "Fertigung",
    "institutional.retail": "Einzelhandel",

    // Security Dropdown
    "security.cyberSecurity": "Cybersicherheit",
    "security.access": "Zugriffskontrolle",
    "security.backups": "Backups",

    // Engineering Dropdown
    "engineering.railway": "Eisenbahn",
    "engineering.road": "Straße",
    "engineering.solarEnergy": "Solarenergie",

    // Hero Section
    "hero.title": "Ideen in innovative digitale Lösungen verwandeln",
    "hero.subtitle":
      "Wir entwickeln maßgeschneiderte Software, Websysteme und mobile Anwendungen, die das Wachstum Ihres Unternehmens vorantreiben",
    "hero.cta": "Projekt starten",
    "hero.learnMore": "Mehr erfahren",

    // Services Section
    "services.title": "Unsere Dienstleistungen",
    "services.subtitle": "Wir bieten komplette Technologielösungen zur Förderung Ihres Unternehmens",
    "services.development.title": "Softwareentwicklung",
    "services.development.description":
      "Wir erstellen maßgeschneiderte Web- und mobile Anwendungen mit modernsten Technologien",
    "services.consulting.title": "IT-Beratung",
    "services.consulting.description":
      "Wir führen Ihr Unternehmen durch die digitale Transformation und Prozessoptimierung",
    "services.integration.title": "Systemintegration",
    "services.integration.description": "Wir verbinden Ihre bestehenden Systeme für größere operative Effizienz",
    "services.support.title": "Technischer Support",
    "services.support.description": "Wir bieten kontinuierlichen Support, um Ihre Systeme perfekt am Laufen zu halten",

    // Projects Section
    "projects.title": "Ausgewählte Projekte",
    "projects.subtitle": "Entdecken Sie einige unserer neuesten Arbeiten",
    "projects.ecommerce.title": "E-Commerce-Plattform",
    "projects.ecommerce.description": "Komplettes Online-Verkaufssystem mit Lager- und Zahlungsmanagement",
    "projects.crm.title": "CRM-System",
    "projects.crm.description": "Kundenbeziehungsmanagement-Plattform und Verkaufsautomatisierung",
    "projects.banking.title": "Banksystem",
    "projects.banking.description": "Sichere Anwendung für Finanztransaktionen und Kontoverwaltung",
    "projects.education.title": "Bildungsplattform",
    "projects.education.description": "Fernlernsystem mit interaktiven Ressourcen",
    "projects.hospital.title": "Krankenhaus-System",
    "projects.hospital.description": "Vollständige Verwaltung von Patienten, Terminen und Krankenakten",
    "projects.logistics.title": "Logistiksystem",
    "projects.logistics.description": "Flottenkontrolle, Routen und Lieferungen in Echtzeit",
    "projects.streaming.title": "Streaming-Plattform",
    "projects.streaming.description": "Video-Streaming-System in HD-Qualität",
    "projects.food.title": "Lieferservice-App",
    "projects.food.description": "Essenslieferungs-App mit Echtzeit-Tracking",

    // Industries Section
    "industries.title": "Branchen, die wir bedienen",
    "industries.subtitle": "Bewährte Erfahrung in verschiedenen Marktsegmenten",
    "industries.education.title": "Digitale Bildung",
    "industries.education.description": "Lehrplattformen und Bildungsmanagement",
    "industries.health.title": "Digitale Gesundheit",
    "industries.health.description": "Krankenhaus-Systeme und Telemedizin",
    "industries.ecommerce.title": "E-Commerce",
    "industries.ecommerce.description": "Online-Shops und Marktplätze",
    "industries.government.title": "Regierung",
    "industries.government.description": "Öffentliche Systeme und Transparenz",
    "industries.finance.title": "Fintech",
    "industries.finance.description": "Zahlungslösungen und Banking",
    "industries.manufacturing.title": "Industrie 4.0",
    "industries.manufacturing.description": "Automatisierung und industrielles IoT",

    // Testimonials Section
    "testimonials.title": "Was unsere Kunden sagen",
    "testimonials.subtitle": "Testimonials von denen, die unserer Arbeit vertrauen",

    // Insights Section
    "insights.title": "Einblicke und Trends",
    "insights.subtitle": "Bleiben Sie auf dem Laufenden mit den neuesten Technologie-Nachrichten",
    "insights.cta": "Alle Artikel anzeigen",

    // Careers Section
    "careers.title": "Treten Sie unserem Team bei",
    "careers.subtitle": "Werden Sie Teil eines innovativen und ständig wachsenden Unternehmens",
    "careers.cta": "Jobs anzeigen",

    // Entertainment Section
    "entertainment.title": "Spaß und Interaktion",
    "entertainment.subtitle": "Probieren Sie unser Fox Maze-Spiel aus und testen Sie Ihre Fähigkeiten!",
    "entertainment.cta": "Jetzt spielen",

    // Footer
    "footer.company": "Unternehmen",
    "footer.services": "Dienstleistungen",
    "footer.industries": "Branchen",
    "footer.contact": "Kontakt",
    "footer.followUs": "Folgen Sie uns",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.privacy": "Datenschutzrichtlinie",
    "footer.terms": "Nutzungsbedingungen",

    // Contact Page
    "contact.title": "Kontakt aufnehmen",
    "contact.subtitle": "Wir sind bereit, Ihre Ideen in die Realität umzusetzen",
    "contact.form.name": "Name",
    "contact.form.email": "E-Mail",
    "contact.form.phone": "Telefon",
    "contact.form.company": "Unternehmen",
    "contact.form.message": "Nachricht",
    "contact.form.send": "Nachricht senden",
    "contact.info.address": "Adresse",
    "contact.info.phone": "Telefon",
    "contact.info.email": "E-Mail",
    "contact.info.hours": "Geschäftszeiten",
    "contact.info.hoursValue": "Montag bis Freitag: 9 bis 18 Uhr",

    // About Page
    "about.hero.title": "Über VianaHub",
    "about.hero.subtitle":
      "Wir sind ein Technologieunternehmen, das sich der Verwandlung von Ideen in innovative digitale Lösungen widmet",
    "about.mission.title": "Unsere Mission",
    "about.mission.description":
      "Technologische Lösungen entwickeln, die das Wachstum und die Effizienz unserer Kunden vorantreiben, immer mit Fokus auf Innovation und Qualität.",
    "about.vision.title": "Unsere Vision",
    "about.vision.description":
      "Als eines der führenden Technologieunternehmen anerkannt zu werden, das Lösungen anbietet, die einen Unterschied auf dem Markt machen.",
    "about.values.title": "Unsere Werte",
    "about.values.innovation": "Innovation",
    "about.values.quality": "Qualität",
    "about.values.commitment": "Engagement",
    "about.values.transparency": "Transparenz",
    "about.team.title": "Unser Team",
    "about.team.subtitle": "Lernen Sie die Fachkräfte kennen, die den Unterschied machen",

    // Careers Page
    "careers.hero.title": "Karriere bei VianaHub",
    "careers.hero.subtitle": "Treten Sie einem Team bei, das leidenschaftlich für Technologie und Innovation ist",
    "careers.why.title": "Warum mit uns arbeiten?",
    "careers.why.growth": "Berufliches Wachstum",
    "careers.why.innovation": "Innovatives Umfeld",
    "careers.why.benefits": "Wettbewerbsfähige Vorteile",
    "careers.why.culture": "Kollaborative Kultur",
    "careers.positions.title": "Offene Stellen",
    "careers.positions.apply": "Bewerben",
    "careers.contact.title": "Haben Sie nicht die ideale Position gefunden?",
    "careers.contact.description":
      "Senden Sie Ihren Lebenslauf und wir werden uns bei Ihnen melden, wenn sich eine für Ihr Profil geeignete Gelegenheit ergibt.",
    "careers.contact.cta": "Lebenslauf senden",

    // Development Page
    "development.hero.title": "Softwareentwicklung",
    "development.hero.subtitle":
      "Wir schaffen personalisierte digitale Lösungen, die das Wachstum Ihres Unternehmens vorantreiben",
    "development.services.title": "Unsere Entwicklungsdienstleistungen",
    "development.services.web.title": "Webentwicklung",
    "development.services.web.description": "Moderne und responsive Webanwendungen mit den neuesten Technologien",
    "development.services.mobile.title": "Mobile Entwicklung",
    "development.services.mobile.description": "Native und hybride Apps für iOS und Android",
    "development.services.api.title": "APIs und Integrationen",
    "development.services.api.description": "Entwicklung robuster APIs und Integrationen mit Drittsystemen",
    "development.services.cloud.title": "Cloud-Lösungen",
    "development.services.cloud.description": "Skalierbare und sichere Cloud-Architekturen",
    "development.technologies.title": "Technologien, die wir verwenden",
    "development.process.title": "Unser Entwicklungsprozess",
    "development.process.analysis.title": "Analyse und Planung",
    "development.process.analysis.description": "Wir verstehen Ihre Bedürfnisse und definieren die beste Strategie",
    "development.process.design.title": "Design und Prototyping",
    "development.process.design.description": "Wir erstellen Prototypen und intuitive Designs",
    "development.process.development.title": "Entwicklung",
    "development.process.development.description": "Wir programmieren mit bewährten Praktiken und Standards",
    "development.process.testing.title": "Tests und Qualität",
    "development.process.testing.description": "Wir gewährleisten Qualität durch rigorose Tests",
    "development.process.deployment.title": "Bereitstellung und Wartung",
    "development.process.deployment.description": "Wir bringen in Produktion und bieten kontinuierlichen Support",

    // Agile Page
    "agile.hero.title": "Agile Methodik",
    "agile.hero.subtitle": "Wir entwickeln Projekte mit Agilität, Flexibilität und Kundenfokus",
    "agile.principles.title": "Agile Prinzipien",
    "agile.principles.individuals": "Individuen und Interaktionen über Prozesse und Werkzeuge",
    "agile.principles.software": "Funktionierende Software über umfassende Dokumentation",
    "agile.principles.collaboration": "Zusammenarbeit mit dem Kunden über Vertragsverhandlung",
    "agile.principles.responding": "Reagieren auf Veränderung über das Befolgen eines Plans",
    "agile.benefits.title": "Vorteile der Agilen Methodik",
    "agile.benefits.flexibility": "Flexibilität",
    "agile.benefits.quality": "Qualität",
    "agile.benefits.speed": "Geschwindigkeit",
    "agile.benefits.transparency": "Transparenz",
    "agile.frameworks.title": "Frameworks, die wir verwenden",
    "agile.frameworks.scrum": "Scrum",
    "agile.frameworks.kanban": "Kanban",
    "agile.frameworks.lean": "Lean",

    // Chatbot Page
    "chatbot.hero.title": "Intelligente Chatbot-Lösungen",
    "chatbot.hero.subtitle": "Automatisieren Sie den Kundenservice mit personalisierten und intelligenten Chatbots",
    "chatbot.features.title": "Funktionen unserer Chatbots",
    "chatbot.features.ai.title": "Künstliche Intelligenz",
    "chatbot.features.ai.description": "KI-Chatbots, die kontinuierlich lernen und sich verbessern",
    "chatbot.features.integration.title": "Vollständige Integration",
    "chatbot.features.integration.description": "Wir verbinden uns mit Ihren bestehenden Systemen und Plattformen",
    "chatbot.features.multilingual.title": "Mehrsprachig",
    "chatbot.features.multilingual.description": "Unterstützung für mehrere Sprachen, um mehr Kunden zu erreichen",
    "chatbot.features.analytics.title": "Erweiterte Analytik",
    "chatbot.features.analytics.description": "Detaillierte Berichte über Interaktionen und Leistung",
    "chatbot.benefits.title": "Chatbot-Vorteile",
    "chatbot.benefits.availability.title": "24/7 Verfügbarkeit",
    "chatbot.benefits.availability.description": "Kontinuierlicher Service ohne Unterbrechungen",
    "chatbot.benefits.cost.title": "Kostenreduzierung",
    "chatbot.benefits.cost.description": "Reduzieren Sie operative Servicekosten",
    "chatbot.benefits.satisfaction.title": "Kundenzufriedenheit",
    "chatbot.benefits.satisfaction.description": "Schnelle und präzise Antworten erhöhen die Zufriedenheit",
    "chatbot.benefits.scalability.title": "Skalierbarkeit",
    "chatbot.benefits.scalability.description": "Bedienen Sie Tausende von Kunden gleichzeitig",
    "chatbot.platforms.title": "Unterstützte Plattformen",
    "chatbot.platforms.website": "Website",
    "chatbot.platforms.whatsapp": "WhatsApp",
    "chatbot.platforms.facebook": "Facebook Messenger",
    "chatbot.platforms.telegram": "Telegram",
    "chatbot.cta.title": "Bereit, Ihren Service zu automatisieren?",
    "chatbot.cta.subtitle":
      "Kontaktieren Sie uns und entdecken Sie, wie unsere Chatbots Ihr Unternehmen transformieren können",
    "chatbot.cta.button": "Demo anfordern",

    // Outsourcing Page
    "outsourcing.hero.title": "IT-Outsourcing",
    "outsourcing.hero.subtitle":
      "Erweitern Sie Ihr Team mit spezialisierten Fachkräften und reduzieren Sie operative Kosten",
    "outsourcing.services.title": "Unsere Outsourcing-Dienstleistungen",
    "outsourcing.services.subtitle": "Flexible Lösungen für Ihre Entwicklungsbedürfnisse",
    "outsourcing.services.dedicated.title": "Dediziertes Team",
    "outsourcing.services.dedicated.description": "Exklusive Fachkräfte für Ihr Projekt mit vollständiger Hingabe",
    "outsourcing.services.offshore.title": "Offshore-Entwicklung",
    "outsourcing.services.offshore.description": "Spezialisiertes Remote-Team mit optimierten Kosten",
    "outsourcing.services.support.title": "Technischer Support",
    "outsourcing.services.support.description": "Wartung und kontinuierlicher Support für Ihre Systeme",
    "outsourcing.services.specialists.title": "Spezialisten auf Abruf",
    "outsourcing.services.specialists.description": "Zugang zu spezifischen Spezialisten bei Bedarf",
    "outsourcing.benefits.title": "Outsourcing-Vorteile",
    "outsourcing.benefits.subtitle": "Warum unsere Outsourcing-Dienstleistungen wählen",
    "outsourcing.benefits.costs.title": "Kostenreduzierung",
    "outsourcing.benefits.costs.description": "Sparen Sie bis zu 60% bei Entwicklungskosten",
    "outsourcing.benefits.scalability.title": "Skalierbarkeit",
    "outsourcing.benefits.scalability.description": "Passen Sie die Teamgröße nach Bedarf an",
    "outsourcing.benefits.quality.title": "Hohe Qualität",
    "outsourcing.benefits.quality.description": "Erfahrene Fachkräfte und gut definierte Prozesse",
    "outsourcing.benefits.focus.title": "Fokus auf Kerngeschäft",
    "outsourcing.benefits.focus.description": "Konzentrieren Sie sich auf das, was für Ihr Unternehmen wesentlich ist",
    "outsourcing.process.title": "Unser Prozess",
    "outsourcing.process.subtitle": "Wie wir arbeiten, um den Erfolg Ihres Projekts zu gewährleisten",
    "outsourcing.process.analysis.title": "Bedarfsanalyse",
    "outsourcing.process.analysis.description": "Wir verstehen Ihre Bedürfnisse und definieren das ideale Profil",
    "outsourcing.process.selection.title": "Team-Auswahl",
    "outsourcing.process.selection.description": "Wir wählen die besten Fachkräfte für Ihr Projekt aus",
    "outsourcing.process.integration.title": "Integration und Ausführung",
    "outsourcing.process.integration.description": "Wir integrieren das Team und beginnen mit der Entwicklung",
    "outsourcing.cta.title": "Bereit, Ihr Team zu erweitern?",
    "outsourcing.cta.subtitle": "Kontaktieren Sie uns und entdecken Sie, wie wir Ihrem Projekt helfen können",
    "outsourcing.cta.button": "Angebot anfordern",
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

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  const value = {
    language,
    setLanguage: (lang: Language) => {
      setLanguage(lang)
      localStorage.setItem("language", lang)
    },
    t,
  }

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}
