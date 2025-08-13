"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "pt" | "en" | "es" | "fr" | "de"

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

// Todas as traduções consolidadas em um único objeto
const allTranslations = {
  pt: {
    // Navbar
    "nav.whatWeDo": "O que Fazemos",
    "nav.engineering": "Engenharia",
    "nav.industry": "Indústria",
    "nav.security": "Segurança",
    "nav.institutional": "Institucional",
    "nav.about": "Sobre",
    "nav.careers": "Carreiras",
    "nav.contact": "Contacto",
    "nav.home": "Início",

    // Menu items
    "menu.agile": "Ágil",
    "menu.development": "Desenvolvimento",
    "menu.chatbot": "Chatbot",
    "menu.landing-pages": "Landing Pages",
    "menu.outsourcing": "Terceirização",
    "menu.system-integration": "Integração de Sistemas",
    "menu.solar-energy": "Energia Solar",
    "menu.railway": "Ferroviário",
    "menu.road": "Rodoviário",
    "menu.education": "Educação",
    "menu.government": "Governo",
    "menu.manufacturing": "Manufatura",
    "menu.financial": "Financeiros",
    "menu.retail": "Varejo",
    "menu.healthcare": "Saúde",
    "menu.cybersecurity": "Segurança Cibernética",
    "menu.backups": "Backups",
    "menu.access": "Acessos",

    // Footer
    "footer.description":
      "Transformamos ideias em soluções digitais inovadoras. Especialistas em desenvolvimento de software e consultoria em TI.",
    "footer.services": "Serviços",
    "footer.company": "Empresa",
    "footer.contact": "Contacto",
    "footer.rights": "Todos os direitos reservados.",
    "footer.allRightsReserved": "Todos os direitos reservados.",

    // Hero Section
    "hero.title.line1": "Soluções que",
    "hero.title.line2": "Transformam",
    "hero.title.line3": "Negócios",
    "hero.subtitle": "Desenvolvemos tecnologias inovadoras que impulsionam o crescimento do seu negócio",
    "hero.cta.start": "Começar Projeto",
    "hero.cta.demo": "Ver Demo",
    "hero.stats.projects": "Projetos",
    "hero.stats.clients": "Clientes",
    "hero.stats.years": "Anos",

    // About Page
    "about.hero.title": "Sobre a VianaHub",
    "about.hero.subtitle":
      "Somos uma empresa de tecnologia especializada em transformação digital, oferecendo soluções inovadoras que impulsionam o crescimento dos nossos clientes.",
    "about.hero.cta.history": "A Nossa História",
    "about.hero.cta.team": "Conheça a Equipa",
    "about.mission.title": "A Nossa Missão",
    "about.mission.description":
      "Transformar negócios através da tecnologia, oferecendo soluções inovadoras e personalizadas que geram valor real para os nossos clientes e contribuem para um futuro digital mais eficiente e sustentável.",
    "about.vision.title": "A Nossa Visão",
    "about.vision.description":
      "Ser reconhecida como a principal referência em soluções tecnológicas inovadoras, liderando a transformação digital e criando um impacto positivo na sociedade através da tecnologia.",
    "about.values.badge": "Os Nossos Valores",
    "about.values.title": "O que Nos Move",
    "about.values.subtitle": "Os nossos valores fundamentais orientam cada decisão e acção na nossa jornada",
    "about.values.innovation.title": "Inovação",
    "about.values.innovation.description":
      "Procuramos constantemente novas tecnologias e soluções para superar expectativas.",
    "about.values.commitment.title": "Compromisso",
    "about.values.commitment.description": "Dedicação total ao sucesso dos nossos clientes e parceiros de negócio.",
    "about.values.reliability.title": "Confiabilidade",
    "about.values.reliability.description":
      "Construímos relacionamentos duradouros baseados na confiança e transparência.",
    "about.values.agility.title": "Agilidade",
    "about.values.agility.description": "Entregamos soluções rápidas e eficientes sem comprometer a qualidade.",
    "about.history.badge": "A Nossa História",
    "about.history.title": "Uma Jornada de Inovação",
    "about.history.subtitle": "Mais de 15 anos a construir soluções que transformam negócios e impactam vidas",
    "about.history.foundation.title": "Fundação da VianaHub",
    "about.history.foundation.description":
      "Iniciámos a nossa jornada com o objectivo de transformar negócios através da tecnologia, começando com uma pequena equipa de programadores apaixonados.",
    "about.history.projects.title": "Primeiros Grandes Projectos",
    "about.history.projects.description":
      "Conquistámos os nossos primeiros clientes empresariais e desenvolvemos soluções que impactaram milhares de utilizadores.",
    "about.history.expansion.title": "Expansão Internacional",
    "about.history.expansion.description":
      "Expandimos as nossas operações para outros países, oferecendo soluções tecnológicas em escala global.",
    "about.history.growth.title": "Crescimento da Equipa",
    "about.history.growth.description":
      "Alcançámos a marca de 50+ especialistas, consolidando a nossa posição como referência em transformação digital.",
    "about.team.badge": "A Nossa Equipa",
    "about.team.title": "Liderança Experiente",
    "about.team.subtitle": "Conheça os profissionais que lideram a nossa visão e estratégia",
    "about.team.tatiana.role": "CEO & Fundadora",
    "about.team.tatiana.description":
      "Administradora e Engenheira com mais de 15 anos de experiência em transformação digital.",
    "about.team.dener.role": "CTO & Fundador",
    "about.team.dener.description": "Analista de Sistemas com mais de 30 anos de experiência em sistemas informáticos.",
    "about.team.carlos.role": "Director Comercial",
    "about.team.carlos.description": "Especialista em relacionamento com clientes e desenvolvimento de novos negócios.",
    "about.cta.title": "Pronto para Transformar o Seu Negócio?",
    "about.cta.subtitle":
      "Entre em contacto connosco e descubra como podemos ajudar a sua empresa a alcançar novos patamares com as nossas soluções tecnológicas.",
    "about.cta.contact": "Falar Connosco",
    "about.cta.projects": "Ver os Nossos Projectos",

    // Careers Page
    "careers.title": "Junte-se à Nossa Equipa",
    "careers.subtitle":
      "Descubra oportunidades de carreira numa empresa inovadora que valoriza o talento, a criatividade e o crescimento profissional.",
    "careers.cta": "Candidatar-me Agora",
    "careers.parallax.title": "Construa o Futuro Connosco",
    "careers.parallax.subtitle":
      "Faça parte de uma equipa que está a transformar o mundo digital através da tecnologia e inovação.",
    "careers.positions.title": "Oportunidades Disponíveis",
    "careers.positions.subtitle":
      "Explore as nossas posições abertas e encontre a oportunidade perfeita para o seu perfil profissional.",
    "careers.positions.viewDetails": "Ver Detalhes",
    "careers.positions.apply": "Candidatar-me",
    "careers.positions.talentBank": "Banco de Talentos",
    "careers.positions.talentBankNote": "Não encontrou a posição ideal? Junte-se ao nosso banco de talentos!",
    "careers.positions.joinTalentBank": "Juntar ao Banco de Talentos",

    // Position 1 - Senior Full Stack Developer
    "careers.positions.1.title": "Desenvolvedor Full Stack Sénior",
    "careers.positions.1.department": "Desenvolvimento",
    "careers.positions.1.location": "Remoto",
    "careers.positions.1.type": "Tempo Integral",
    "careers.positions.1.description":
      "Procuramos um desenvolvedor experiente para liderar projetos de desenvolvimento web complexos usando tecnologias modernas.",
    "careers.positions.1.requirements.0": "5+ anos de experiência em desenvolvimento web",
    "careers.positions.1.requirements.1": "Experiência com React, Node.js, TypeScript",
    "careers.positions.1.requirements.2": "Conhecimento de bases de dados SQL e NoSQL",
    "careers.positions.1.requirements.3": "Experiência com metodologias ágeis",
    "careers.positions.1.responsibilities.0": "Desenvolver aplicações web escaláveis e performantes",
    "careers.positions.1.responsibilities.1": "Colaborar com equipas multidisciplinares",
    "careers.positions.1.responsibilities.2": "Mentorizar desenvolvedores juniores",
    "careers.positions.1.responsibilities.3": "Participar na arquitetura de soluções técnicas",
    "careers.positions.1.benefits.0": "Salário competitivo e benefícios",
    "careers.positions.1.benefits.1": "Trabalho remoto flexível",
    "careers.positions.1.benefits.2": "Formação contínua e certificações",
    "careers.positions.1.benefits.3": "Ambiente de trabalho colaborativo",

    // Position 2 - UX/UI Designer
    "careers.positions.2.title": "Designer UX/UI",
    "careers.positions.2.department": "Design",
    "careers.positions.2.location": "Híbrido",
    "careers.positions.2.type": "Tempo Integral",
    "careers.positions.2.description":
      "Criamos experiências digitais excepcionais. Procuramos um designer criativo para se juntar à nossa equipa.",
    "careers.positions.2.requirements.0": "3+ anos de experiência em design UX/UI",
    "careers.positions.2.requirements.1": "Proficiência em Figma, Adobe Creative Suite",
    "careers.positions.2.requirements.2": "Conhecimento de design systems",
    "careers.positions.2.requirements.3": "Portfolio demonstrando projetos diversos",
    "careers.positions.2.responsibilities.0": "Criar wireframes, protótipos e designs finais",
    "careers.positions.2.responsibilities.1": "Conduzir pesquisas de utilizador",
    "careers.positions.2.responsibilities.2": "Colaborar com desenvolvedores na implementação",
    "careers.positions.2.responsibilities.3": "Manter e evoluir design systems",
    "careers.positions.2.benefits.0": "Ambiente criativo e inspirador",
    "careers.positions.2.benefits.1": "Flexibilidade de horários",
    "careers.positions.2.benefits.2": "Acesso a ferramentas premium",
    "careers.positions.2.benefits.3": "Participação em conferências de design",

    // Continue with other positions...
    "careers.positions.3.title": "Gestor de Projeto",
    "careers.positions.3.department": "Gestão",
    "careers.positions.3.location": "Presencial",
    "careers.positions.3.type": "Tempo Integral",
    "careers.positions.3.description":
      "Lidere projetos tecnológicos do início ao fim, garantindo entregas de qualidade dentro dos prazos estabelecidos.",

    "careers.positions.4.title": "Especialista em Cibersegurança",
    "careers.positions.4.department": "Segurança",
    "careers.positions.4.location": "Remoto",
    "careers.positions.4.type": "Tempo Integral",
    "careers.positions.4.description":
      "Proteja os nossos sistemas e dados contra ameaças cibernéticas, implementando as melhores práticas de segurança.",

    "careers.positions.5.title": "Analista de Dados",
    "careers.positions.5.department": "Analytics",
    "careers.positions.5.location": "Híbrido",
    "careers.positions.5.type": "Tempo Integral",
    "careers.positions.5.description":
      "Transforme dados em insights valiosos para apoiar decisões estratégicas do negócio.",

    "careers.positions.6.title": "DevOps Engineer",
    "careers.positions.6.department": "Infraestrutura",
    "careers.positions.6.location": "Remoto",
    "careers.positions.6.type": "Tempo Integral",
    "careers.positions.6.description": "Automatize e otimize os nossos processos de desenvolvimento e deployment.",

    "careers.positions.7.title": "Marketing Digital",
    "careers.positions.7.department": "Marketing",
    "careers.positions.7.location": "Presencial",
    "careers.positions.7.type": "Tempo Integral",
    "careers.positions.7.description":
      "Desenvolva e execute estratégias de marketing digital para aumentar a nossa presença online.",

    "careers.positions.8.title": "Arquiteto de Soluções",
    "careers.positions.8.department": "Arquitetura",
    "careers.positions.8.location": "Híbrido",
    "careers.positions.8.type": "Tempo Integral",
    "careers.positions.8.description":
      "Desenhe arquiteturas técnicas robustas e escaláveis para os nossos projetos enterprise.",

    "careers.positions.9.title": "Suporte Técnico",
    "careers.positions.9.department": "Suporte",
    "careers.positions.9.location": "Presencial",
    "careers.positions.9.type": "Tempo Integral",
    "careers.positions.9.description":
      "Forneça suporte técnico de excelência aos nossos clientes e utilizadores internos.",

    "careers.positions.10.title": "Business Analyst",
    "careers.positions.10.department": "Análise",
    "careers.positions.10.location": "Híbrido",
    "careers.positions.10.type": "Tempo Integral",
    "careers.positions.10.description": "Analise requisitos de negócio e traduza-os em especificações técnicas claras.",

    "careers.positions.11.title": "QA Tester",
    "careers.positions.11.department": "Qualidade",
    "careers.positions.11.location": "Remoto",
    "careers.positions.11.type": "Tempo Integral",
    "careers.positions.11.description":
      "Garanta a qualidade dos nossos produtos através de testes rigorosos e metodologias de QA.",

    "careers.positions.12.title": "Recursos Humanos",
    "careers.positions.12.department": "RH",
    "careers.positions.12.location": "Presencial",
    "careers.positions.12.type": "Tempo Integral",
    "careers.positions.12.description":
      "Gerir o ciclo de vida dos colaboradores e desenvolver estratégias de retenção de talento.",

    "careers.positionDetails.description": "Descrição",
    "careers.positionDetails.requirements": "Requisitos",
    "careers.positionDetails.responsibilities": "Responsabilidades",
    "careers.positionDetails.benefits": "Benefícios",
    "careers.positionDetails.salary": "Salário",

    "careers.why.title": "Porquê Trabalhar Connosco?",
    "careers.why.subtitle": "Descubra o que torna a VianaHub um lugar especial para desenvolver a sua carreira.",
    "careers.why.innovation.title": "Inovação",
    "careers.why.innovation.description":
      "Trabalhe com as tecnologias mais recentes e participe em projetos inovadores.",
    "careers.why.team.title": "Equipa",
    "careers.why.team.description": "Faça parte de uma equipa talentosa e colaborativa que se apoia mutuamente.",
    "careers.why.growth.title": "Crescimento",
    "careers.why.growth.description":
      "Desenvolva as suas competências com formação contínua e oportunidades de progressão.",
    "careers.why.wellbeing.title": "Bem-estar",
    "careers.why.wellbeing.description":
      "Valorizamos o equilíbrio trabalho-vida e o bem-estar dos nossos colaboradores.",

    "careers.application.title": "Candidatura",
    "careers.application.general": "Candidatura Geral",
    "careers.application.personalInfo": "Informações Pessoais",
    "careers.application.name": "Nome Completo",
    "careers.application.email": "Email",
    "careers.application.phone": "Telefone",
    "careers.application.educationExperienceTitle": "Formação e Experiência",
    "careers.application.education": "Formação Académica",
    "careers.application.educationPlaceholder": "Descreva a sua formação académica...",
    "careers.application.experience": "Experiência Profissional",
    "careers.application.experiencePlaceholder": "Descreva a sua experiência profissional relevante...",
    "careers.application.motivation": "Motivação",
    "careers.application.motivationLabel": "Carta de Motivação",
    "careers.application.motivationPlaceholder": "Conte-nos porque quer juntar-se à nossa equipa...",
    "careers.application.cv": "Curriculum Vitae",
    "careers.application.cvLabel": "Upload do CV (PDF, DOC, DOCX)",
    "careers.application.fileSelected": "Ficheiro selecionado:",
    "careers.application.terms": "Aceito os termos e condições de candidatura",
    "careers.application.acceptTermsAlert": "Deve aceitar os termos e condições para submeter a candidatura.",
    "careers.application.cancel": "Cancelar",
    "careers.application.submit": "Submeter Candidatura",
    "careers.application.successMessage": "Candidatura submetida com sucesso! Entraremos em contacto brevemente.",

    "careers.terms.title": "Termos e Condições de Candidatura",
    "careers.terms.close": "Fechar",

    // Contact Page
    "contact.hero.title": "Entre em Contacto",
    "contact.hero.subtitle":
      "Estamos aqui para ajudar a transformar as suas ideias em realidade digital. Fale connosco hoje mesmo.",
    "contact.form.title": "Envie-nos uma Mensagem",
    "contact.form.name": "Nome",
    "contact.form.email": "Email",
    "contact.form.phone": "Telefone",
    "contact.form.company": "Empresa",
    "contact.form.subject": "Assunto",
    "contact.form.message": "Mensagem",
    "contact.form.send": "Enviar Mensagem",
    "contact.info.title": "Informações de Contacto",
    "contact.info.address": "Morada",
    "contact.info.phone": "Telefone",
    "contact.info.email": "Email",
    "contact.info.hours": "Horário de Funcionamento",
    "contact.info.hoursValue": "Segunda a Sexta: 9h às 18h",

    // Entertainment Section
    "entertainment.title": "Passa Tempo",

    // Fox Game
    "foxGame.title": "Aventura da Raposa no Deserto",
    "foxGame.subtitle": "Ajude a raposa a encontrar o oásis através do labirinto!",
    "foxGame.nameLabel": "Digite seu nome para começar:",
    "foxGame.namePlaceholder": "Seu nome aqui...",
    "foxGame.startButton": "Começar Aventura!",
    "foxGame.howToPlay": "Como jogar:",
    "foxGame.instructions":
      "• Use as setas do teclado para mover a raposa\n• Ou clique nas células para mover\n• Encontre o oásis em cada nível\n• Complete todos os 5 níveis o mais rápido possível!",

    // WhatsApp Chat
    "whatsapp.title": "VianaHub Suporte",
    "whatsapp.status": "Online agora",
    "whatsapp.welcome":
      "Olá! Como podemos ajudá-lo hoje? Nossa equipe está pronta para esclarecer suas dúvidas sobre nossos serviços.",
    "whatsapp.placeholder": "Digite sua mensagem...",
    "whatsapp.continue": "Continuar no WhatsApp",
    "whatsapp.autoReply":
      "Obrigado pela sua mensagem! Nossa equipe irá responder em breve. Para atendimento imediato, ligue para +55 (11) 9999-9999.",
    "whatsapp.defaultMessage": "Olá! Gostaria de saber mais sobre os serviços da VianaHub.",

    // Industries Section
    "industries.title.part1": "Indústrias",
    "industries.title.part2": "Atendidas",
    "industries.subtitle": "Experiência comprovada em diversos setores",
    "industries.education.title": "Educação",
    "industries.education.description": "Plataformas educacionais e sistemas de gestão acadêmica",
    "industries.financial.title": "Financeiro",
    "industries.financial.description": "Soluções bancárias e sistemas de pagamento seguros",
    "industries.government.title": "Governo",
    "industries.government.description": "Sistemas públicos e portais de transparência",
    "industries.healthcare.title": "Saúde",
    "industries.healthcare.description": "Sistemas hospitalares e soluções de telemedicina",
    "industries.manufacturing.title": "Manufatura",
    "industries.manufacturing.description": "Automação industrial e sistemas de controle",
    "industries.retail.title": "Varejo",
    "industries.retail.description": "E-commerce e sistemas de gestão comercial",
    "industries.cta": "Explorar",

    // Services Section
    "services.title.part1": "Nossos",
    "services.title.part2": "Serviços",
    "services.subtitle": "Oferecemos soluções completas em tecnologia para transformar sua visão em realidade digital",
    "services.web.title": "Desenvolvimento Web",
    "services.web.description": "Criamos sites e aplicações web modernas, responsivas e otimizadas para performance.",
    "services.mobile.title": "Aplicações Mobile",
    "services.mobile.description":
      "Desenvolvemos apps nativos e híbridos para iOS e Android com foco na experiência do usuário.",
    "services.landing.title": "Landing Pages",
    "services.landing.description":
      "Páginas de conversão otimizadas para maximizar seus resultados de marketing digital.",
    "services.integration.title": "Integração de Sistemas",
    "services.integration.description":
      "Conectamos diferentes sistemas e plataformas para otimizar seus processos de negócio.",
    "services.security.title": "Segurança Digital",
    "services.security.description":
      "Implementamos soluções de segurança robustas para proteger seus dados e sistemas.",
    "services.automation.title": "Automação",
    "services.automation.description": "Automatizamos processos repetitivos para aumentar a eficiência da sua empresa.",
    "services.cta": "Saiba Mais",
  },
  en: {
    // Navbar
    "nav.whatWeDo": "What We Do",
    "nav.engineering": "Engineering",
    "nav.industry": "Industry",
    "nav.security": "Security",
    "nav.institutional": "Institutional",
    "nav.about": "About",
    "nav.careers": "Careers",
    "nav.contact": "Contact",
    "nav.home": "Home",

    // Menu items
    "menu.agile": "Agile",
    "menu.development": "Development",
    "menu.chatbot": "Chatbot",
    "menu.landing-pages": "Landing Pages",
    "menu.outsourcing": "Outsourcing",
    "menu.system-integration": "System Integration",
    "menu.solar-energy": "Solar Energy",
    "menu.railway": "Railway",
    "menu.road": "Road",
    "menu.education": "Education",
    "menu.government": "Government",
    "menu.manufacturing": "Manufacturing",
    "menu.financial": "Financial",
    "menu.retail": "Retail",
    "menu.healthcare": "Healthcare",
    "menu.cybersecurity": "Cybersecurity",
    "menu.backups": "Backups",
    "menu.access": "Access",

    // Footer
    "footer.description":
      "We transform ideas into innovative digital solutions. Experts in software development and IT consulting.",
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.allRightsReserved": "All rights reserved.",

    // Hero Section
    "hero.title.line1": "Digital Solutions",
    "hero.title.line2": "that Transform",
    "hero.title.line3": "your Business",
    "hero.subtitle":
      "We develop innovative technologies that drive your business growth. From conception to implementation, we create customized solutions that make a difference.",
    "hero.cta.start": "Start Project",
    "hero.cta.demo": "View Demo",
    "hero.stats.projects": "Projects",
    "hero.stats.clients": "Clients",
    "hero.stats.years": "Years",

    // About Page
    "about.hero.title": "About VianaHub",
    "about.hero.subtitle":
      "We are a technology company specialized in digital transformation, offering innovative solutions that drive our clients' growth.",
    "about.hero.cta.history": "Our History",
    "about.hero.cta.team": "Meet the Team",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "Transform businesses through technology, offering innovative and personalized solutions that generate real value for our clients and contribute to a more efficient and sustainable digital future.",
    "about.vision.title": "Our Vision",
    "about.vision.description":
      "To be recognized as the leading reference in innovative technological solutions, leading digital transformation and creating a positive impact on society through technology.",
    "about.values.badge": "Our Values",
    "about.values.title": "What Drives Us",
    "about.values.subtitle": "Our fundamental values guide every decision and action in our journey",
    "about.values.innovation.title": "Innovation",
    "about.values.innovation.description": "We constantly seek new technologies and solutions to exceed expectations.",
    "about.values.commitment.title": "Commitment",
    "about.values.commitment.description": "Total dedication to the success of our clients and business partners.",
    "about.values.reliability.title": "Reliability",
    "about.values.reliability.description": "We build lasting relationships based on trust and transparency.",
    "about.values.agility.title": "Agility",
    "about.values.agility.description": "We deliver fast and efficient solutions without compromising quality.",
    "about.history.badge": "Our History",
    "about.history.title": "A Journey of Innovation",
    "about.history.subtitle": "Over 15 years building solutions that transform businesses and impact lives",
    "about.history.foundation.title": "VianaHub Foundation",
    "about.history.foundation.description":
      "We started our journey with the goal of transforming businesses through technology, beginning with a small team of passionate developers.",
    "about.history.projects.title": "First Major Projects",
    "about.history.projects.description":
      "We won our first corporate clients and developed solutions that impacted thousands of users.",
    "about.history.expansion.title": "International Expansion",
    "about.history.expansion.description":
      "We expanded our operations to other countries, offering technological solutions on a global scale.",
    "about.history.growth.title": "Team Growth",
    "about.history.growth.description":
      "We reached the mark of 50+ specialists, consolidating our position as a reference in digital transformation.",
    "about.team.badge": "Our Team",
    "about.team.title": "Experienced Leadership",
    "about.team.subtitle": "Meet the professionals who lead our vision and strategy",
    "about.team.tatiana.role": "CEO & Founder",
    "about.team.tatiana.description":
      "Administrator and Engineer with over 15 years of experience in digital transformation.",
    "about.team.dener.role": "CTO & Founder",
    "about.team.dener.description": "Systems Analyst with over 30 years of experience in computer systems.",
    "about.team.carlos.role": "Commercial Director",
    "about.team.carlos.description": "Expert in client relationships and new business development.",
    "about.cta.title": "Ready to Transform Your Business?",
    "about.cta.subtitle":
      "Get in touch with us and discover how we can help your company reach new heights with our technological solutions.",
    "about.cta.contact": "Contact Us",
    "about.cta.projects": "View Our Projects",

    // Careers Page
    "careers.title": "Join Our Team",
    "careers.subtitle":
      "Discover career opportunities in an innovative company that values talent, creativity, and professional growth.",
    "careers.cta": "Apply Now",
    "careers.parallax.title": "Build the Future With Us",
    "careers.parallax.subtitle":
      "Be part of a team that is transforming the digital world through technology and innovation.",
    "careers.positions.title": "Available Opportunities",
    "careers.positions.subtitle":
      "Explore our open positions and find the perfect opportunity for your professional profile.",
    "careers.positions.viewDetails": "View Details",
    "careers.positions.apply": "Apply",
    "careers.positions.talentBank": "Talent Bank",
    "careers.positions.talentBankNote": "Didn't find the ideal position? Join our talent bank!",
    "careers.positions.joinTalentBank": "Join Talent Bank",

    // Position translations in English...
    "careers.positions.1.title": "Senior Full Stack Developer",
    "careers.positions.1.department": "Development",
    "careers.positions.1.location": "Remote",
    "careers.positions.1.type": "Full Time",
    "careers.positions.1.description":
      "We are looking for an experienced developer to lead complex web development projects using modern technologies.",

    "careers.why.title": "Why Work With Us?",
    "careers.why.subtitle": "Discover what makes VianaHub a special place to develop your career.",
    "careers.why.innovation.title": "Innovation",
    "careers.why.innovation.description": "Work with the latest technologies and participate in innovative projects.",
    "careers.why.team.title": "Team",
    "careers.why.team.description": "Be part of a talented and collaborative team that supports each other.",
    "careers.why.growth.title": "Growth",
    "careers.why.growth.description": "Develop your skills with continuous training and advancement opportunities.",
    "careers.why.wellbeing.title": "Well-being",
    "careers.why.wellbeing.description": "We value work-life balance and the well-being of our employees.",

    "careers.application.title": "Application",
    "careers.application.general": "General Application",
    "careers.application.personalInfo": "Personal Information",
    "careers.application.name": "Full Name",
    "careers.application.email": "Email",
    "careers.application.phone": "Phone",
    "careers.application.educationExperienceTitle": "Education and Experience",
    "careers.application.education": "Academic Background",
    "careers.application.educationPlaceholder": "Describe your academic background...",
    "careers.application.experience": "Professional Experience",
    "careers.application.experiencePlaceholder": "Describe your relevant professional experience...",
    "careers.application.motivation": "Motivation",
    "careers.application.motivationLabel": "Cover Letter",
    "careers.application.motivationPlaceholder": "Tell us why you want to join our team...",
    "careers.application.cv": "Curriculum Vitae",
    "careers.application.cvLabel": "Upload CV (PDF, DOC, DOCX)",
    "careers.application.fileSelected": "File selected:",
    "careers.application.terms": "I accept the application terms and conditions",
    "careers.application.acceptTermsAlert": "You must accept the terms and conditions to submit the application.",
    "careers.application.cancel": "Cancel",
    "careers.application.submit": "Submit Application",
    "careers.application.successMessage": "Application submitted successfully! We will contact you shortly.",

    "careers.terms.title": "Application Terms and Conditions",
    "careers.terms.close": "Close",

    // Contact Page
    "contact.hero.title": "Get in Touch",
    "contact.hero.subtitle": "We're here to help transform your ideas into digital reality. Contact us today.",
    "contact.form.title": "Send us a Message",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.company": "Company",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.address": "Address",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.hours": "Business Hours",
    "contact.info.hoursValue": "Monday to Friday: 9am to 6pm",

    // Entertainment Section
    "entertainment.title": "Entertainment",

    // Fox Game
    "foxGame.title": "Fox Desert Adventure",
    "foxGame.subtitle": "Help the fox find the oasis through the maze!",
    "foxGame.nameLabel": "Enter your name to start:",
    "foxGame.namePlaceholder": "Your name here...",
    "foxGame.startButton": "Start Adventure!",
    "foxGame.howToPlay": "How to play:",
    "foxGame.instructions":
      "• Use arrow keys to move the fox\n• Or click on cells to move\n• Find the oasis in each level\n• Complete all 5 levels as fast as possible!",

    // WhatsApp Chat
    "whatsapp.title": "VianaHub Support",
    "whatsapp.status": "Online now",
    "whatsapp.welcome":
      "Hello! How can we help you today? Our team is ready to answer your questions about our services.",
    "whatsapp.placeholder": "Type your message...",
    "whatsapp.continue": "Continue on WhatsApp",
    "whatsapp.autoReply":
      "Thank you for your message! Our team will respond shortly. For immediate assistance, call +55 (11) 9999-9999.",
    "whatsapp.defaultMessage": "Hello! I would like to know more about VianaHub's services.",

    // Industries Section
    "industries.title.part1": "Industries",
    "industries.title.part2": "Served",
    "industries.subtitle": "Proven experience across various sectors",
    "industries.education.title": "Education",
    "industries.education.description": "Educational platforms and academic management systems",
    "industries.financial.title": "Financial",
    "industries.financial.description": "Banking solutions and secure payment systems",
    "industries.government.title": "Government",
    "industries.government.description": "Public systems and transparency portals",
    "industries.healthcare.title": "Healthcare",
    "industries.healthcare.description": "Hospital systems and telemedicine solutions",
    "industries.manufacturing.title": "Manufacturing",
    "industries.manufacturing.description": "Industrial automation and control systems",
    "industries.retail.title": "Retail",
    "industries.retail.description": "E-commerce and commercial management systems",
    "industries.cta": "Explore",

    // Services Section
    "services.title.part1": "Our",
    "services.title.part2": "Services",
    "services.subtitle": "We offer complete technology solutions to transform your vision into digital reality",
    "services.web.title": "Web Development",
    "services.web.description": "We create modern, responsive and performance-optimized websites and web applications.",
    "services.mobile.title": "Mobile Applications",
    "services.mobile.description":
      "We develop native and hybrid apps for iOS and Android with focus on user experience.",
    "services.landing.title": "Landing Pages",
    "services.landing.description": "Conversion-optimized pages to maximize your digital marketing results.",
    "services.integration.title": "System Integration",
    "services.integration.description":
      "We connect different systems and platforms to optimize your business processes.",
    "services.security.title": "Digital Security",
    "services.security.description": "We implement robust security solutions to protect your data and systems.",
    "services.automation.title": "Automation",
    "services.automation.description": "We automate repetitive processes to increase your company's efficiency.",
    "services.cta": "Learn More",
  },
  es: {
    // Navbar
    "nav.whatWeDo": "Qué Hacemos",
    "nav.engineering": "Ingeniería",
    "nav.industry": "Industria",
    "nav.security": "Seguridad",
    "nav.institutional": "Institucional",
    "nav.about": "Acerca de",
    "nav.careers": "Carreras",
    "nav.contact": "Contacto",
    "nav.home": "Inicio",

    // Menu items
    "menu.agile": "Ágil",
    "menu.development": "Desarrollo",
    "menu.chatbot": "Chatbot",
    "menu.landing-pages": "Landing Pages",
    "menu.outsourcing": "Tercerización",
    "menu.system-integration": "Integración de Sistemas",
    "menu.solar-energy": "Energía Solar",
    "menu.railway": "Ferroviario",
    "menu.road": "Carreteras",
    "menu.education": "Educación",
    "menu.government": "Gobierno",
    "menu.manufacturing": "Manufactura",
    "menu.financial": "Financieros",
    "menu.retail": "Retail",
    "menu.healthcare": "Salud",
    "menu.cybersecurity": "Ciberseguridad",
    "menu.backups": "Respaldos",
    "menu.access": "Accesos",

    // Footer
    "footer.description":
      "Transformamos ideas en soluciones digitales innovadoras. Expertos en desarrollo de software y consultoría en TI.",
    "footer.services": "Servicios",
    "footer.company": "Empresa",
    "footer.contact": "Contacto",
    "footer.rights": "Todos los derechos reservados.",
    "footer.allRightsReserved": "Todos los derechos reservados.",

    // Add more Spanish translations as needed...
  },
  fr: {
    // Navbar
    "nav.whatWeDo": "Ce Que Nous Faisons",
    "nav.engineering": "Ingénierie",
    "nav.industry": "Industrie",
    "nav.security": "Sécurité",
    "nav.institutional": "Institutionnel",
    "nav.about": "À Propos",
    "nav.careers": "Carrières",
    "nav.contact": "Contact",
    "nav.home": "Accueil",

    // Menu items
    "menu.agile": "Agile",
    "menu.development": "Développement",
    "menu.chatbot": "Chatbot",
    "menu.landing-pages": "Landing Pages",
    "menu.outsourcing": "Externalisation",
    "menu.system-integration": "Intégration de Systèmes",
    "menu.solar-energy": "Énergie Solaire",
    "menu.railway": "Ferroviaire",
    "menu.road": "Routier",
    "menu.education": "Éducation",
    "menu.government": "Gouvernement",
    "menu.manufacturing": "Fabrication",
    "menu.financial": "Financiers",
    "menu.retail": "Commerce de Détail",
    "menu.healthcare": "Santé",
    "menu.cybersecurity": "Cybersécurité",
    "menu.backups": "Sauvegardes",
    "menu.access": "Accès",

    // Footer
    "footer.description":
      "Nous transformons les idées en solutions numériques innovantes. Experts en développement logiciel et conseil en TI.",
    "footer.services": "Services",
    "footer.company": "Entreprise",
    "footer.contact": "Contact",
    "footer.rights": "Tous droits réservés.",
    "footer.allRightsReserved": "Tous droits réservés.",

    // Add more French translations as needed...
  },
  de: {
    // Navbar
    "nav.whatWeDo": "Was Wir Tun",
    "nav.engineering": "Ingenieurwesen",
    "nav.industry": "Industrie",
    "nav.security": "Sicherheit",
    "nav.institutional": "Institutionell",
    "nav.about": "Über Uns",
    "nav.careers": "Karriere",
    "nav.contact": "Kontakt",
    "nav.home": "Startseite",

    // Menu items
    "menu.agile": "Agil",
    "menu.development": "Entwicklung",
    "menu.chatbot": "Chatbot",
    "menu.landing-pages": "Landing Pages",
    "menu.outsourcing": "Outsourcing",
    "menu.system-integration": "Systemintegration",
    "menu.solar-energy": "Solarenergie",
    "menu.railway": "Eisenbahn",
    "menu.road": "Straße",
    "menu.education": "Bildung",
    "menu.government": "Regierung",
    "menu.manufacturing": "Fertigung",
    "menu.financial": "Finanzen",
    "menu.retail": "Einzelhandel",
    "menu.healthcare": "Gesundheitswesen",
    "menu.cybersecurity": "Cybersicherheit",
    "menu.backups": "Backups",
    "menu.access": "Zugang",

    // Footer
    "footer.description":
      "Wir verwandeln Ideen in innovative digitale Lösungen. Experten für Softwareentwicklung und IT-Beratung.",
    "footer.services": "Dienstleistungen",
    "footer.company": "Unternehmen",
    "footer.contact": "Kontakt",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.allRightsReserved": "Alle Rechte vorbehalten.",

    // Add more German translations as needed...
  },
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    // Load language from localStorage on client side
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["pt", "en", "es", "fr", "de"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    const translation = allTranslations[language]?.[key as keyof (typeof allTranslations)[typeof language]]
    return translation || key
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
