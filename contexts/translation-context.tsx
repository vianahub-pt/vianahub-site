"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "pt" | "en" | "es" | "fr" | "de"

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

const translations = {
  pt: {
    // Navbar
    "nav.home": "Início",
    "nav.whatWeDo": "O que fazemos",
    "nav.whatWeDo.development": "Desenvolvimento",
    "nav.whatWeDo.agile": "Metodologia Ágil",
    "nav.whatWeDo.outsourcing": "Outsourcing",
    "nav.whatWeDo.systemIntegration": "Integração de Sistemas",
    "nav.whatWeDo.landingPages": "Landing Pages",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.industry": "Indústria",
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
    "nav.engineering": "Engenharia",
    "nav.engineering.railway": "Ferroviário",
    "nav.engineering.road": "Rodoviário",
    "nav.engineering.solarEnergy": "Energia Solar",
    "nav.institutional": "Institucional",
    "nav.institutional.about": "Sobre Nós",
    "nav.institutional.careers": "Carreiras",
    "nav.institutional.contact": "Contacto",
    "nav.entertainment": "Entretenimento",

    // Home Page
    "home.hero.title": "Transformamos ideias em soluções digitais de alta qualidade",
    "home.hero.subtitle":
      "Somos especialistas em desenvolvimento web, aplicações móveis e sistemas empresariais. Criamos tecnologia que impulsiona o seu negócio.",
    "home.hero.cta": "Começar Projeto",
    "home.hero.learnMore": "Saber Mais",

    "home.services.title": "Os Nossos Serviços",
    "home.services.subtitle": "Oferecemos soluções tecnológicas completas para impulsionar o seu negócio",
    "home.services.development.title": "Desenvolvimento Web",
    "home.services.development.description":
      "Criamos websites e aplicações web modernas, responsivas e otimizadas para performance.",
    "home.services.mobile.title": "Aplicações Móveis",
    "home.services.mobile.description":
      "Desenvolvemos apps nativas e híbridas para iOS e Android com foco na experiência do utilizador.",
    "home.services.systems.title": "Sistemas Empresariais",
    "home.services.systems.description":
      "Soluções personalizadas para gestão empresarial, CRM, ERP e integração de sistemas.",
    "home.services.consulting.title": "Consultoria Tecnológica",
    "home.services.consulting.description":
      "Orientação estratégica para transformação digital e otimização de processos tecnológicos.",

    "home.projects.title": "Projetos em Destaque",
    "home.projects.subtitle": "Alguns dos nossos trabalhos mais recentes",
    "home.projects.ecommerce.title": "Plataforma E-commerce",
    "home.projects.ecommerce.description":
      "Sistema completo de vendas online com gestão de inventário e pagamentos integrados.",
    "home.projects.hospital.title": "Sistema Hospitalar",
    "home.projects.hospital.description":
      "Plataforma de gestão hospitalar com módulos para pacientes, médicos e administração.",
    "home.projects.banking.title": "Sistema Bancário",
    "home.projects.banking.description": "Aplicação segura para gestão de contas e transações bancárias online.",
    "home.projects.education.title": "Plataforma Educacional",
    "home.projects.education.description": "Sistema de ensino à distância com videoconferências e gestão de cursos.",
    "home.projects.food.title": "App de Entrega",
    "home.projects.food.description":
      "Aplicação móvel para pedidos e entregas de comida com rastreamento em tempo real.",
    "home.projects.streaming.title": "Plataforma de Streaming",
    "home.projects.streaming.description":
      "Serviço de streaming de vídeo com reprodução adaptativa e recomendações personalizadas.",
    "home.projects.crm.title": "Sistema CRM",
    "home.projects.crm.description": "Plataforma de gestão de relacionamento com clientes e automação de vendas.",
    "home.projects.logistics.title": "Sistema Logístico",
    "home.projects.logistics.description": "Solução completa para gestão de frota e otimização de rotas de entrega.",

    "home.testimonials.title": "O que dizem os nossos clientes",
    "home.testimonials.subtitle": "Feedback de empresas que confiaram em nós",
    "home.testimonials.client1.name": "Maria Silva",
    "home.testimonials.client1.role": "CEO, TechStart",
    "home.testimonials.client1.text":
      "A VianaHub transformou completamente a nossa presença digital. O resultado superou todas as expectativas.",
    "home.testimonials.client2.name": "João Santos",
    "home.testimonials.client2.role": "Diretor de TI, InnovaCorp",
    "home.testimonials.client2.text":
      "Profissionalismo excecional e entrega dentro do prazo. Recomendo vivamente os seus serviços.",
    "home.testimonials.client3.name": "Ana Costa",
    "home.testimonials.client3.role": "Fundadora, StartupXYZ",
    "home.testimonials.client3.text":
      "A equipa da VianaHub entendeu perfeitamente a nossa visão e criou uma solução incrível.",

    "home.insights.title": "Insights e Tendências",
    "home.insights.subtitle": "Mantenha-se atualizado com as últimas novidades tecnológicas",
    "home.insights.ai.title": "O Futuro da Inteligência Artificial",
    "home.insights.ai.description":
      "Como a IA está a revolucionar o desenvolvimento de software e a experiência do utilizador.",
    "home.insights.cloud.title": "Migração para a Cloud",
    "home.insights.cloud.description":
      "Estratégias e benefícios da migração de sistemas para ambientes cloud modernos.",
    "home.insights.security.title": "Cibersegurança em 2024",
    "home.insights.security.description":
      "As principais ameaças e como proteger a sua empresa no ambiente digital atual.",

    "home.technologies.title": "Tecnologias que Utilizamos",
    "home.technologies.subtitle": "Trabalhamos com as mais modernas ferramentas e frameworks",

    "home.careers.title": "Junte-se à Nossa Equipa",
    "home.careers.subtitle": "Procuramos talentos apaixonados por tecnologia",
    "home.careers.description":
      "Na VianaHub, valorizamos a inovação, o crescimento profissional e o trabalho em equipa. Descubra as oportunidades disponíveis.",
    "home.careers.cta": "Ver Vagas",

    "home.entertainment.title": "Entretenimento",
    "home.entertainment.subtitle": "Desafie-se com o nosso jogo interativo",
    "home.entertainment.description":
      "Teste as suas habilidades no Fox Maze Game - um jogo de labirinto desenvolvido pela nossa equipa.",
    "home.entertainment.cta": "Jogar Agora",

    // About Page
    "about.hero.title": "Sobre a VianaHub",
    "about.hero.subtitle": "Conheça a nossa história, missão e valores",

    "about.story.title": "A Nossa História",
    "about.story.content":
      "Fundada em 2020, a VianaHub nasceu da paixão por tecnologia e inovação. Começámos como uma pequena equipa de desenvolvedores com o sonho de criar soluções digitais que fizessem a diferença. Hoje, somos uma empresa reconhecida no mercado, com projetos em diversos setores e clientes satisfeitos em todo o mundo.",

    "about.mission.title": "Missão",
    "about.mission.content":
      "Transformar ideias em soluções digitais de alta qualidade, ajudando empresas a alcançar os seus objetivos através da tecnologia.",

    "about.vision.title": "Visão",
    "about.vision.content":
      "Ser a empresa de referência em soluções tecnológicas inovadoras, reconhecida pela excelência e impacto positivo nos negócios dos nossos clientes.",

    "about.values.title": "Os Nossos Valores",
    "about.values.innovation.title": "Inovação",
    "about.values.innovation.description":
      "Procuramos constantemente novas formas de resolver problemas e criar valor.",
    "about.values.quality.title": "Qualidade",
    "about.values.quality.description": "Comprometemo-nos com a excelência em todos os projetos que desenvolvemos.",
    "about.values.collaboration.title": "Colaboração",
    "about.values.collaboration.description":
      "Acreditamos no poder do trabalho em equipa e na parceria com os nossos clientes.",
    "about.values.integrity.title": "Integridade",
    "about.values.integrity.description":
      "Atuamos com transparência, honestidade e responsabilidade em todas as nossas relações.",

    "about.team.title": "A Nossa Equipa",
    "about.team.subtitle": "Conheça os profissionais que tornam tudo possível",
    "about.team.dener.name": "Dener Viana",
    "about.team.dener.role": "CEO & Fundador",
    "about.team.dener.description":
      "Visionário e líder com mais de 10 anos de experiência em tecnologia e gestão empresarial.",
    "about.team.tatiana.name": "Tatiana Viana",
    "about.team.tatiana.role": "CTO",
    "about.team.tatiana.description":
      "Especialista em arquitetura de software e desenvolvimento de soluções escaláveis.",
    "about.team.carlos.name": "Carlos Oliveira",
    "about.team.carlos.role": "Lead Developer",
    "about.team.carlos.description":
      "Desenvolvedor sénior com expertise em tecnologias web modernas e metodologias ágeis.",
    "about.team.lucia.name": "Lúcia Ferreira",
    "about.team.lucia.role": "UX/UI Designer",
    "about.team.lucia.description":
      "Designer criativa focada em experiências de utilizador intuitivas e interfaces elegantes.",
    "about.team.roberto.name": "Roberto Lima",
    "about.team.roberto.role": "DevOps Engineer",
    "about.team.roberto.description":
      "Especialista em infraestrutura cloud e automação de processos de desenvolvimento.",

    "about.stats.title": "Números que Falam por Si",
    "about.stats.projects": "Projetos Concluídos",
    "about.stats.clients": "Clientes Satisfeitos",
    "about.stats.experience": "Anos de Experiência",
    "about.stats.team": "Membros da Equipa",

    // Careers Page
    "careers.hero.title": "Carreiras na VianaHub",
    "careers.hero.subtitle": "Junte-se a uma equipa apaixonada por tecnologia e inovação",

    "careers.why.title": "Porquê Trabalhar Connosco?",
    "careers.why.growth.title": "Crescimento Profissional",
    "careers.why.growth.description": "Oferecemos oportunidades de desenvolvimento contínuo e progressão na carreira.",
    "careers.why.innovation.title": "Projetos Inovadores",
    "careers.why.innovation.description":
      "Trabalhe em projetos desafiantes usando as tecnologias mais modernas do mercado.",
    "careers.why.culture.title": "Cultura Colaborativa",
    "careers.why.culture.description":
      "Ambiente de trabalho inclusivo onde todas as ideias são valorizadas e respeitadas.",
    "careers.why.balance.title": "Equilíbrio Vida-Trabalho",
    "careers.why.balance.description":
      "Promovemos um ambiente saudável com flexibilidade e bem-estar dos colaboradores.",

    "careers.positions.title": "Posições Abertas",
    "careers.positions.subtitle": "Encontre a oportunidade perfeita para si",
    "careers.positions.frontend.title": "Desenvolvedor Frontend",
    "careers.positions.frontend.location": "Lisboa, Portugal",
    "careers.positions.frontend.type": "Tempo Integral",
    "careers.positions.frontend.description":
      "Procuramos um desenvolvedor frontend experiente em React, TypeScript e tecnologias modernas para integrar a nossa equipa de desenvolvimento.",
    "careers.positions.backend.title": "Desenvolvedor Backend",
    "careers.positions.backend.location": "Porto, Portugal",
    "careers.positions.backend.type": "Tempo Integral",
    "careers.positions.backend.description":
      "Oportunidade para desenvolvedor backend com experiência em Node.js, Python ou Java para trabalhar em sistemas escaláveis.",
    "careers.positions.designer.title": "UX/UI Designer",
    "careers.positions.designer.location": "Remoto",
    "careers.positions.designer.type": "Tempo Integral",
    "careers.positions.designer.description":
      "Procuramos um designer criativo para criar experiências de utilizador excepcionais e interfaces intuitivas.",
    "careers.positions.devops.title": "DevOps Engineer",
    "careers.positions.devops.location": "Lisboa, Portugal",
    "careers.positions.devops.type": "Tempo Integral",
    "careers.positions.devops.description":
      "Oportunidade para especialista em DevOps com experiência em cloud computing e automação de processos.",

    "careers.apply.title": "Como Candidatar-se",
    "careers.apply.step1": "Escolha a posição que mais se adequa ao seu perfil",
    "careers.apply.step2": "Preencha o formulário de candidatura com os seus dados",
    "careers.apply.step3": "Anexe o seu CV e carta de motivação",
    "careers.apply.step4": "Aguarde o nosso contacto para os próximos passos",

    "careers.benefits.title": "Benefícios",
    "careers.benefits.salary": "Salário Competitivo",
    "careers.benefits.health": "Seguro de Saúde",
    "careers.benefits.training": "Formação Contínua",
    "careers.benefits.flexible": "Horário Flexível",
    "careers.benefits.remote": "Trabalho Remoto",
    "careers.benefits.vacation": "Férias Pagas",

    // Contact Page
    "contact.hero.title": "Entre em Contacto",
    "contact.hero.subtitle": "Estamos aqui para ajudar com o seu próximo projeto",

    "contact.info.title": "Informações de Contacto",
    "contact.info.address": "Rua da Inovação, 123\n1000-001 Lisboa, Portugal",
    "contact.info.phone": "+351 21 123 4567",
    "contact.info.email": "info@vianahub.com",
    "contact.info.hours": "Segunda a Sexta: 9h00 - 18h00",

    "contact.form.title": "Envie-nos uma Mensagem",
    "contact.form.name": "Nome",
    "contact.form.email": "Email",
    "contact.form.subject": "Assunto",
    "contact.form.message": "Mensagem",
    "contact.form.send": "Enviar Mensagem",
    "contact.form.success": "Mensagem enviada com sucesso! Entraremos em contacto em breve.",

    "contact.map.title": "Localização",

    // Application Modal
    "application.title": "Candidatura para {position}",
    "application.personalInfo": "Informações Pessoais",
    "application.name": "Nome Completo",
    "application.email": "Email",
    "application.phone": "Telefone",
    "application.linkedin": "LinkedIn (opcional)",
    "application.experience": "Experiência e Educação",
    "application.education": "Formação Académica",
    "application.workExperience": "Experiência Profissional",
    "application.skills": "Competências Técnicas",
    "application.motivation": "Motivação",
    "application.whyPosition": "Porque se candidata a esta posição?",
    "application.whyCompany": "Porque quer trabalhar na VianaHub?",
    "application.documents": "Documentos",
    "application.cv": "CV (PDF)",
    "application.coverLetter": "Carta de Motivação (opcional)",
    "application.terms": "Aceito os termos e condições",
    "application.submit": "Enviar Candidatura",
    "application.cancel": "Cancelar",

    // Common
    "common.learnMore": "Saber Mais",
    "common.getStarted": "Começar",
    "common.viewAll": "Ver Todos",
    "common.apply": "Candidatar-me",
    "common.close": "Fechar",
    "common.loading": "A carregar...",
    "common.error": "Erro",
    "common.success": "Sucesso",

    // Footer
    "footer.company": "Empresa",
    "footer.services": "Serviços",
    "footer.support": "Suporte",
    "footer.legal": "Legal",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Serviço",
    "footer.cookies": "Política de Cookies",
    "footer.rights": "Todos os direitos reservados.",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.whatWeDo": "What We Do",
    "nav.whatWeDo.development": "Development",
    "nav.whatWeDo.agile": "Agile Methodology",
    "nav.whatWeDo.outsourcing": "Outsourcing",
    "nav.whatWeDo.systemIntegration": "System Integration",
    "nav.whatWeDo.landingPages": "Landing Pages",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.industry": "Industry",
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
    "nav.engineering": "Engineering",
    "nav.engineering.railway": "Railway",
    "nav.engineering.road": "Road",
    "nav.engineering.solarEnergy": "Solar Energy",
    "nav.institutional": "Institutional",
    "nav.institutional.about": "About Us",
    "nav.institutional.careers": "Careers",
    "nav.institutional.contact": "Contact",
    "nav.entertainment": "Entertainment",

    // Home Page
    "home.hero.title": "We transform ideas into high-quality digital solutions",
    "home.hero.subtitle":
      "We are experts in web development, mobile applications, and enterprise systems. We create technology that drives your business.",
    "home.hero.cta": "Start Project",
    "home.hero.learnMore": "Learn More",

    "home.services.title": "Our Services",
    "home.services.subtitle": "We offer complete technological solutions to boost your business",
    "home.services.development.title": "Web Development",
    "home.services.development.description":
      "We create modern, responsive websites and web applications optimized for performance.",
    "home.services.mobile.title": "Mobile Applications",
    "home.services.mobile.description":
      "We develop native and hybrid apps for iOS and Android focused on user experience.",
    "home.services.systems.title": "Enterprise Systems",
    "home.services.systems.description": "Custom solutions for business management, CRM, ERP, and system integration.",
    "home.services.consulting.title": "Technology Consulting",
    "home.services.consulting.description":
      "Strategic guidance for digital transformation and technological process optimization.",

    "home.projects.title": "Featured Projects",
    "home.projects.subtitle": "Some of our most recent work",
    "home.projects.ecommerce.title": "E-commerce Platform",
    "home.projects.ecommerce.description":
      "Complete online sales system with inventory management and integrated payments.",
    "home.projects.hospital.title": "Hospital System",
    "home.projects.hospital.description":
      "Hospital management platform with modules for patients, doctors, and administration.",
    "home.projects.banking.title": "Banking System",
    "home.projects.banking.description": "Secure application for online account and banking transaction management.",
    "home.projects.education.title": "Educational Platform",
    "home.projects.education.description": "Distance learning system with video conferencing and course management.",
    "home.projects.food.title": "Delivery App",
    "home.projects.food.description": "Mobile application for food orders and deliveries with real-time tracking.",
    "home.projects.streaming.title": "Streaming Platform",
    "home.projects.streaming.description":
      "Video streaming service with adaptive playback and personalized recommendations.",
    "home.projects.crm.title": "CRM System",
    "home.projects.crm.description": "Customer relationship management platform and sales automation.",
    "home.projects.logistics.title": "Logistics System",
    "home.projects.logistics.description": "Complete solution for fleet management and delivery route optimization.",

    "home.testimonials.title": "What our clients say",
    "home.testimonials.subtitle": "Feedback from companies that trusted us",
    "home.testimonials.client1.name": "Maria Silva",
    "home.testimonials.client1.role": "CEO, TechStart",
    "home.testimonials.client1.text":
      "VianaHub completely transformed our digital presence. The result exceeded all expectations.",
    "home.testimonials.client2.name": "João Santos",
    "home.testimonials.client2.role": "IT Director, InnovaCorp",
    "home.testimonials.client2.text":
      "Exceptional professionalism and on-time delivery. I highly recommend their services.",
    "home.testimonials.client3.name": "Ana Costa",
    "home.testimonials.client3.role": "Founder, StartupXYZ",
    "home.testimonials.client3.text":
      "The VianaHub team perfectly understood our vision and created an incredible solution.",

    "home.insights.title": "Insights and Trends",
    "home.insights.subtitle": "Stay updated with the latest technology news",
    "home.insights.ai.title": "The Future of Artificial Intelligence",
    "home.insights.ai.description": "How AI is revolutionizing software development and user experience.",
    "home.insights.cloud.title": "Cloud Migration",
    "home.insights.cloud.description": "Strategies and benefits of migrating systems to modern cloud environments.",
    "home.insights.security.title": "Cybersecurity in 2024",
    "home.insights.security.description":
      "The main threats and how to protect your company in today's digital environment.",

    "home.technologies.title": "Technologies We Use",
    "home.technologies.subtitle": "We work with the most modern tools and frameworks",

    "home.careers.title": "Join Our Team",
    "home.careers.subtitle": "We're looking for talents passionate about technology",
    "home.careers.description":
      "At VianaHub, we value innovation, professional growth, and teamwork. Discover available opportunities.",
    "home.careers.cta": "View Jobs",

    "home.entertainment.title": "Entertainment",
    "home.entertainment.subtitle": "Challenge yourself with our interactive game",
    "home.entertainment.description": "Test your skills in the Fox Maze Game - a maze game developed by our team.",
    "home.entertainment.cta": "Play Now",

    // About Page
    "about.hero.title": "About VianaHub",
    "about.hero.subtitle": "Learn about our history, mission, and values",

    "about.story.title": "Our Story",
    "about.story.content":
      "Founded in 2020, VianaHub was born from a passion for technology and innovation. We started as a small team of developers with the dream of creating digital solutions that make a difference. Today, we are a recognized company in the market, with projects in various sectors and satisfied clients worldwide.",

    "about.mission.title": "Mission",
    "about.mission.content":
      "Transform ideas into high-quality digital solutions, helping companies achieve their goals through technology.",

    "about.vision.title": "Vision",
    "about.vision.content":
      "To be the reference company in innovative technological solutions, recognized for excellence and positive impact on our clients' businesses.",

    "about.values.title": "Our Values",
    "about.values.innovation.title": "Innovation",
    "about.values.innovation.description": "We constantly seek new ways to solve problems and create value.",
    "about.values.quality.title": "Quality",
    "about.values.quality.description": "We commit to excellence in all projects we develop.",
    "about.values.collaboration.title": "Collaboration",
    "about.values.collaboration.description": "We believe in the power of teamwork and partnership with our clients.",
    "about.values.integrity.title": "Integrity",
    "about.values.integrity.description":
      "We act with transparency, honesty, and responsibility in all our relationships.",

    "about.team.title": "Our Team",
    "about.team.subtitle": "Meet the professionals who make it all possible",
    "about.team.dener.name": "Dener Viana",
    "about.team.dener.role": "CEO & Founder",
    "about.team.dener.description":
      "Visionary and leader with over 10 years of experience in technology and business management.",
    "about.team.tatiana.name": "Tatiana Viana",
    "about.team.tatiana.role": "CTO",
    "about.team.tatiana.description": "Software architecture specialist and scalable solution development.",
    "about.team.carlos.name": "Carlos Oliveira",
    "about.team.carlos.role": "Lead Developer",
    "about.team.carlos.description":
      "Senior developer with expertise in modern web technologies and agile methodologies.",
    "about.team.lucia.name": "Lúcia Ferreira",
    "about.team.lucia.role": "UX/UI Designer",
    "about.team.lucia.description": "Creative designer focused on intuitive user experiences and elegant interfaces.",
    "about.team.roberto.name": "Roberto Lima",
    "about.team.roberto.role": "DevOps Engineer",
    "about.team.roberto.description": "Cloud infrastructure specialist and development process automation.",

    "about.stats.title": "Numbers That Speak for Themselves",
    "about.stats.projects": "Completed Projects",
    "about.stats.clients": "Satisfied Clients",
    "about.stats.experience": "Years of Experience",
    "about.stats.team": "Team Members",

    // Careers Page
    "careers.hero.title": "Careers at VianaHub",
    "careers.hero.subtitle": "Join a team passionate about technology and innovation",

    "careers.why.title": "Why Work With Us?",
    "careers.why.growth.title": "Professional Growth",
    "careers.why.growth.description": "We offer continuous development opportunities and career progression.",
    "careers.why.innovation.title": "Innovative Projects",
    "careers.why.innovation.description":
      "Work on challenging projects using the most modern technologies in the market.",
    "careers.why.culture.title": "Collaborative Culture",
    "careers.why.culture.description": "Inclusive work environment where all ideas are valued and respected.",
    "careers.why.balance.title": "Work-Life Balance",
    "careers.why.balance.description": "We promote a healthy environment with flexibility and employee well-being.",

    "careers.positions.title": "Open Positions",
    "careers.positions.subtitle": "Find the perfect opportunity for you",
    "careers.positions.frontend.title": "Frontend Developer",
    "careers.positions.frontend.location": "Lisbon, Portugal",
    "careers.positions.frontend.type": "Full Time",
    "careers.positions.frontend.description":
      "We're looking for an experienced frontend developer in React, TypeScript, and modern technologies to join our development team.",
    "careers.positions.backend.title": "Backend Developer",
    "careers.positions.backend.location": "Porto, Portugal",
    "careers.positions.backend.type": "Full Time",
    "careers.positions.backend.description":
      "Opportunity for backend developer with experience in Node.js, Python, or Java to work on scalable systems.",
    "careers.positions.designer.title": "UX/UI Designer",
    "careers.positions.designer.location": "Remote",
    "careers.positions.designer.type": "Full Time",
    "careers.positions.designer.description":
      "We're looking for a creative designer to create exceptional user experiences and intuitive interfaces.",
    "careers.positions.devops.title": "DevOps Engineer",
    "careers.positions.devops.location": "Lisbon, Portugal",
    "careers.positions.devops.type": "Full Time",
    "careers.positions.devops.description":
      "Opportunity for DevOps specialist with experience in cloud computing and process automation.",

    "careers.apply.title": "How to Apply",
    "careers.apply.step1": "Choose the position that best fits your profile",
    "careers.apply.step2": "Fill out the application form with your details",
    "careers.apply.step3": "Attach your CV and cover letter",
    "careers.apply.step4": "Wait for our contact for the next steps",

    "careers.benefits.title": "Benefits",
    "careers.benefits.salary": "Competitive Salary",
    "careers.benefits.health": "Health Insurance",
    "careers.benefits.training": "Continuous Training",
    "careers.benefits.flexible": "Flexible Hours",
    "careers.benefits.remote": "Remote Work",
    "careers.benefits.vacation": "Paid Vacation",

    // Contact Page
    "contact.hero.title": "Get in Touch",
    "contact.hero.subtitle": "We're here to help with your next project",

    "contact.info.title": "Contact Information",
    "contact.info.address": "Innovation Street, 123\n1000-001 Lisbon, Portugal",
    "contact.info.phone": "+351 21 123 4567",
    "contact.info.email": "info@vianahub.com",
    "contact.info.hours": "Monday to Friday: 9:00 AM - 6:00 PM",

    "contact.form.title": "Send us a Message",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.form.success": "Message sent successfully! We'll get in touch soon.",

    "contact.map.title": "Location",

    // Application Modal
    "application.title": "Application for {position}",
    "application.personalInfo": "Personal Information",
    "application.name": "Full Name",
    "application.email": "Email",
    "application.phone": "Phone",
    "application.linkedin": "LinkedIn (optional)",
    "application.experience": "Experience and Education",
    "application.education": "Academic Background",
    "application.workExperience": "Work Experience",
    "application.skills": "Technical Skills",
    "application.motivation": "Motivation",
    "application.whyPosition": "Why are you applying for this position?",
    "application.whyCompany": "Why do you want to work at VianaHub?",
    "application.documents": "Documents",
    "application.cv": "CV (PDF)",
    "application.coverLetter": "Cover Letter (optional)",
    "application.terms": "I accept the terms and conditions",
    "application.submit": "Submit Application",
    "application.cancel": "Cancel",

    // Common
    "common.learnMore": "Learn More",
    "common.getStarted": "Get Started",
    "common.viewAll": "View All",
    "common.apply": "Apply",
    "common.close": "Close",
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",

    // Footer
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.support": "Support",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
    "footer.rights": "All rights reserved.",
  },
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.whatWeDo": "Qué Hacemos",
    "nav.whatWeDo.development": "Desarrollo",
    "nav.whatWeDo.agile": "Metodología Ágil",
    "nav.whatWeDo.outsourcing": "Outsourcing",
    "nav.whatWeDo.systemIntegration": "Integración de Sistemas",
    "nav.whatWeDo.landingPages": "Landing Pages",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.industry": "Industria",
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
    "nav.engineering": "Ingeniería",
    "nav.engineering.railway": "Ferroviario",
    "nav.engineering.road": "Carreteras",
    "nav.engineering.solarEnergy": "Energía Solar",
    "nav.institutional": "Institucional",
    "nav.institutional.about": "Sobre Nosotros",
    "nav.institutional.careers": "Carreras",
    "nav.institutional.contact": "Contacto",
    "nav.entertainment": "Entretenimiento",

    // Home Page
    "home.hero.title": "Transformamos ideas en soluciones digitales de alta calidad",
    "home.hero.subtitle":
      "Somos expertos en desarrollo web, aplicaciones móviles y sistemas empresariales. Creamos tecnología que impulsa tu negocio.",
    "home.hero.cta": "Iniciar Proyecto",
    "home.hero.learnMore": "Saber Más",

    "home.services.title": "Nuestros Servicios",
    "home.services.subtitle": "Ofrecemos soluciones tecnológicas completas para impulsar tu negocio",
    "home.services.development.title": "Desarrollo Web",
    "home.services.development.description":
      "Creamos sitios web y aplicaciones web modernas, responsivas y optimizadas para rendimiento.",
    "home.services.mobile.title": "Aplicaciones Móviles",
    "home.services.mobile.description":
      "Desarrollamos apps nativas e híbridas para iOS y Android enfocadas en la experiencia del usuario.",
    "home.services.systems.title": "Sistemas Empresariales",
    "home.services.systems.description":
      "Soluciones personalizadas para gestión empresarial, CRM, ERP e integración de sistemas.",
    "home.services.consulting.title": "Consultoría Tecnológica",
    "home.services.consulting.description":
      "Orientación estratégica para transformación digital y optimización de procesos tecnológicos.",

    "home.projects.title": "Proyectos Destacados",
    "home.projects.subtitle": "Algunos de nuestros trabajos más recientes",
    "home.projects.ecommerce.title": "Plataforma E-commerce",
    "home.projects.ecommerce.description":
      "Sistema completo de ventas online con gestión de inventario y pagos integrados.",
    "home.projects.hospital.title": "Sistema Hospitalario",
    "home.projects.hospital.description":
      "Plataforma de gestión hospitalaria con módulos para pacientes, médicos y administración.",
    "home.projects.banking.title": "Sistema Bancario",
    "home.projects.banking.description": "Aplicación segura para gestión de cuentas y transacciones bancarias online.",
    "home.projects.education.title": "Plataforma Educacional",
    "home.projects.education.description":
      "Sistema de enseñanza a distancia con videoconferencias y gestión de cursos.",
    "home.projects.food.title": "App de Entrega",
    "home.projects.food.description":
      "Aplicación móvil para pedidos y entregas de comida con seguimiento en tiempo real.",
    "home.projects.streaming.title": "Plataforma de Streaming",
    "home.projects.streaming.description":
      "Servicio de streaming de video con reproducción adaptativa y recomendaciones personalizadas.",
    "home.projects.crm.title": "Sistema CRM",
    "home.projects.crm.description": "Plataforma de gestión de relaciones con clientes y automatización de ventas.",
    "home.projects.logistics.title": "Sistema Logístico",
    "home.projects.logistics.description":
      "Solución completa para gestión de flota y optimización de rutas de entrega.",

    "home.testimonials.title": "Lo que dicen nuestros clientes",
    "home.testimonials.subtitle": "Comentarios de empresas que confiaron en nosotros",
    "home.testimonials.client1.name": "María Silva",
    "home.testimonials.client1.role": "CEO, TechStart",
    "home.testimonials.client1.text":
      "VianaHub transformó completamente nuestra presencia digital. El resultado superó todas las expectativas.",
    "home.testimonials.client2.name": "João Santos",
    "home.testimonials.client2.role": "Director de TI, InnovaCorp",
    "home.testimonials.client2.text":
      "Profesionalismo excepcional y entrega a tiempo. Recomiendo altamente sus servicios.",
    "home.testimonials.client3.name": "Ana Costa",
    "home.testimonials.client3.role": "Fundadora, StartupXYZ",
    "home.testimonials.client3.text":
      "El equipo de VianaHub entendió perfectamente nuestra visión y creó una solución increíble.",

    "home.insights.title": "Insights y Tendencias",
    "home.insights.subtitle": "Mantente actualizado con las últimas noticias tecnológicas",
    "home.insights.ai.title": "El Futuro de la Inteligencia Artificial",
    "home.insights.ai.description":
      "Cómo la IA está revolucionando el desarrollo de software y la experiencia del usuario.",
    "home.insights.cloud.title": "Migración a la Nube",
    "home.insights.cloud.description": "Estrategias y beneficios de migrar sistemas a entornos de nube modernos.",
    "home.insights.security.title": "Ciberseguridad en 2024",
    "home.insights.security.description":
      "Las principales amenazas y cómo proteger tu empresa en el entorno digital actual.",

    "home.technologies.title": "Tecnologías que Utilizamos",
    "home.technologies.subtitle": "Trabajamos con las herramientas y frameworks más modernos",

    "home.careers.title": "Únete a Nuestro Equipo",
    "home.careers.subtitle": "Buscamos talentos apasionados por la tecnología",
    "home.careers.description":
      "En VianaHub, valoramos la innovación, el crecimiento profesional y el trabajo en equipo. Descubre las oportunidades disponibles.",
    "home.careers.cta": "Ver Empleos",

    "home.entertainment.title": "Entretenimiento",
    "home.entertainment.subtitle": "Desafíate con nuestro juego interactivo",
    "home.entertainment.description":
      "Pon a prueba tus habilidades en el Fox Maze Game - un juego de laberinto desarrollado por nuestro equipo.",
    "home.entertainment.cta": "Jugar Ahora",

    // About Page
    "about.hero.title": "Sobre VianaHub",
    "about.hero.subtitle": "Conoce nuestra historia, misión y valores",

    "about.story.title": "Nuestra Historia",
    "about.story.content":
      "Fundada en 2020, VianaHub nació de la pasión por la tecnología y la innovación. Comenzamos como un pequeño equipo de desarrolladores con el sueño de crear soluciones digitales que marquen la diferencia. Hoy, somos una empresa reconocida en el mercado, con proyectos en diversos sectores y clientes satisfechos en todo el mundo.",

    "about.mission.title": "Misión",
    "about.mission.content":
      "Transformar ideas en soluciones digitales de alta calidad, ayudando a las empresas a alcanzar sus objetivos a través de la tecnología.",

    "about.vision.title": "Visión",
    "about.vision.content":
      "Ser la empresa de referencia en soluciones tecnológicas innovadoras, reconocida por la excelencia e impacto positivo en los negocios de nuestros clientes.",

    "about.values.title": "Nuestros Valores",
    "about.values.innovation.title": "Innovación",
    "about.values.innovation.description": "Buscamos constantemente nuevas formas de resolver problemas y crear valor.",
    "about.values.quality.title": "Calidad",
    "about.values.quality.description": "Nos comprometemos con la excelencia en todos los proyectos que desarrollamos.",
    "about.values.collaboration.title": "Colaboración",
    "about.values.collaboration.description":
      "Creemos en el poder del trabajo en equipo y la asociación con nuestros clientes.",
    "about.values.integrity.title": "Integridad",
    "about.values.integrity.description":
      "Actuamos con transparencia, honestidad y responsabilidad en todas nuestras relaciones.",

    "about.team.title": "Nuestro Equipo",
    "about.team.subtitle": "Conoce a los profesionales que hacen todo posible",
    "about.team.dener.name": "Dener Viana",
    "about.team.dener.role": "CEO y Fundador",
    "about.team.dener.description":
      "Visionario y líder con más de 10 años de experiencia en tecnología y gestión empresarial.",
    "about.team.tatiana.name": "Tatiana Viana",
    "about.team.tatiana.role": "CTO",
    "about.team.tatiana.description": "Especialista en arquitectura de software y desarrollo de soluciones escalables.",
    "about.team.carlos.name": "Carlos Oliveira",
    "about.team.carlos.role": "Desarrollador Principal",
    "about.team.carlos.description":
      "Desarrollador senior con experiencia en tecnologías web modernas y metodologías ágiles.",
    "about.team.lucia.name": "Lucía Ferreira",
    "about.team.lucia.role": "Diseñadora UX/UI",
    "about.team.lucia.description":
      "Diseñadora creativa enfocada en experiencias de usuario intuitivas e interfaces elegantes.",
    "about.team.roberto.name": "Roberto Lima",
    "about.team.roberto.role": "Ingeniero DevOps",
    "about.team.roberto.description":
      "Especialista en infraestructura en la nube y automatización de procesos de desarrollo.",

    "about.stats.title": "Números que Hablan por Sí Mismos",
    "about.stats.projects": "Proyectos Completados",
    "about.stats.clients": "Clientes Satisfechos",
    "about.stats.experience": "Años de Experiencia",
    "about.stats.team": "Miembros del Equipo",

    // Careers Page
    "careers.hero.title": "Carreras en VianaHub",
    "careers.hero.subtitle": "Únete a un equipo apasionado por la tecnología y la innovación",

    "careers.why.title": "¿Por qué Trabajar con Nosotros?",
    "careers.why.growth.title": "Crecimiento Profesional",
    "careers.why.growth.description": "Ofrecemos oportunidades de desarrollo continuo y progresión en la carrera.",
    "careers.why.innovation.title": "Proyectos Innovadores",
    "careers.why.innovation.description":
      "Trabaja en proyectos desafiantes usando las tecnologías más modernas del mercado.",
    "careers.why.culture.title": "Cultura Colaborativa",
    "careers.why.culture.description":
      "Ambiente de trabajo inclusivo donde todas las ideas son valoradas y respetadas.",
    "careers.why.balance.title": "Equilibrio Vida-Trabajo",
    "careers.why.balance.description":
      "Promovemos un ambiente saludable con flexibilidad y bienestar de los empleados.",

    "careers.positions.title": "Posiciones Abiertas",
    "careers.positions.subtitle": "Encuentra la oportunidad perfecta para ti",
    "careers.positions.frontend.title": "Desarrollador Frontend",
    "careers.positions.frontend.location": "Lisboa, Portugal",
    "careers.positions.frontend.type": "Tiempo Completo",
    "careers.positions.frontend.description":
      "Buscamos un desarrollador frontend experimentado en React, TypeScript y tecnologías modernas para unirse a nuestro equipo de desarrollo.",
    "careers.positions.backend.title": "Desarrollador Backend",
    "careers.positions.backend.location": "Porto, Portugal",
    "careers.positions.backend.type": "Tiempo Completo",
    "careers.positions.backend.description":
      "Oportunidad para desarrollador backend con experiencia en Node.js, Python o Java para trabajar en sistemas escalables.",
    "careers.positions.designer.title": "Diseñador UX/UI",
    "careers.positions.designer.location": "Remoto",
    "careers.positions.designer.type": "Tiempo Completo",
    "careers.positions.designer.description":
      "Buscamos un diseñador creativo para crear experiencias de usuario excepcionales e interfaces intuitivas.",
    "careers.positions.devops.title": "Ingeniero DevOps",
    "careers.positions.devops.location": "Lisboa, Portugal",
    "careers.positions.devops.type": "Tiempo Completo",
    "careers.positions.devops.description":
      "Oportunidad para especialista en DevOps con experiencia en computación en la nube y automatización de procesos.",

    "careers.apply.title": "Cómo Aplicar",
    "careers.apply.step1": "Elige la posición que mejor se adapte a tu perfil",
    "careers.apply.step2": "Completa el formulario de aplicación con tus datos",
    "careers.apply.step3": "Adjunta tu CV y carta de motivación",
    "careers.apply.step4": "Espera nuestro contacto para los próximos pasos",

    "careers.benefits.title": "Beneficios",
    "careers.benefits.salary": "Salario Competitivo",
    "careers.benefits.health": "Seguro de Salud",
    "careers.benefits.training": "Formación Continua",
    "careers.benefits.flexible": "Horario Flexible",
    "careers.benefits.remote": "Trabajo Remoto",
    "careers.benefits.vacation": "Vacaciones Pagadas",

    // Contact Page
    "contact.hero.title": "Ponte en Contacto",
    "contact.hero.subtitle": "Estamos aquí para ayudar con tu próximo proyecto",

    "contact.info.title": "Información de Contacto",
    "contact.info.address": "Calle de la Innovación, 123\n1000-001 Lisboa, Portugal",
    "contact.info.phone": "+351 21 123 4567",
    "contact.info.email": "info@vianahub.com",
    "contact.info.hours": "Lunes a Viernes: 9:00 AM - 6:00 PM",

    "contact.form.title": "Envíanos un Mensaje",
    "contact.form.name": "Nombre",
    "contact.form.email": "Email",
    "contact.form.subject": "Asunto",
    "contact.form.message": "Mensaje",
    "contact.form.send": "Enviar Mensaje",
    "contact.form.success": "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",

    "contact.map.title": "Ubicación",

    // Application Modal
    "application.title": "Aplicación para {position}",
    "application.personalInfo": "Información Personal",
    "application.name": "Nombre Completo",
    "application.email": "Email",
    "application.phone": "Teléfono",
    "application.linkedin": "LinkedIn (opcional)",
    "application.experience": "Experiencia y Educación",
    "application.education": "Formación Académica",
    "application.workExperience": "Experiencia Laboral",
    "application.skills": "Habilidades Técnicas",
    "application.motivation": "Motivación",
    "application.whyPosition": "¿Por qué te postulas para esta posición?",
    "application.whyCompany": "¿Por qué quieres trabajar en VianaHub?",
    "application.documents": "Documentos",
    "application.cv": "CV (PDF)",
    "application.coverLetter": "Carta de Presentación (opcional)",
    "application.terms": "Acepto los términos y condiciones",
    "application.submit": "Enviar Aplicación",
    "application.cancel": "Cancelar",

    // Common
    "common.learnMore": "Saber Más",
    "common.getStarted": "Comenzar",
    "common.viewAll": "Ver Todos",
    "common.apply": "Aplicar",
    "common.close": "Cerrar",
    "common.loading": "Cargando...",
    "common.error": "Error",
    "common.success": "Éxito",

    // Footer
    "footer.company": "Empresa",
    "footer.services": "Servicios",
    "footer.support": "Soporte",
    "footer.legal": "Legal",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.cookies": "Política de Cookies",
    "footer.rights": "Todos los derechos reservados.",
  },
  fr: {
    // Navbar
    "nav.home": "Accueil",
    "nav.whatWeDo": "Ce que nous faisons",
    "nav.whatWeDo.development": "Développement",
    "nav.whatWeDo.agile": "Méthodologie Agile",
    "nav.whatWeDo.outsourcing": "Externalisation",
    "nav.whatWeDo.systemIntegration": "Intégration de Systèmes",
    "nav.whatWeDo.landingPages": "Pages d'Atterrissage",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.industry": "Industrie",
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
    "nav.engineering": "Ingénierie",
    "nav.engineering.railway": "Ferroviaire",
    "nav.engineering.road": "Routier",
    "nav.engineering.solarEnergy": "Énergie Solaire",
    "nav.institutional": "Institutionnel",
    "nav.institutional.about": "À Propos",
    "nav.institutional.careers": "Carrières",
    "nav.institutional.contact": "Contact",
    "nav.entertainment": "Divertissement",

    // Home Page
    "home.hero.title": "Nous transformons les idées en solutions numériques de haute qualité",
    "home.hero.subtitle":
      "Nous sommes experts en développement web, applications mobiles et systèmes d'entreprise. Nous créons la technologie qui propulse votre entreprise.",
    "home.hero.cta": "Démarrer le Projet",
    "home.hero.learnMore": "En Savoir Plus",

    "home.services.title": "Nos Services",
    "home.services.subtitle": "Nous offrons des solutions technologiques complètes pour booster votre entreprise",
    "home.services.development.title": "Développement Web",
    "home.services.development.description":
      "Nous créons des sites web et applications web modernes, responsives et optimisés pour la performance.",
    "home.services.mobile.title": "Applications Mobiles",
    "home.services.mobile.description":
      "Nous développons des apps natives et hybrides pour iOS et Android axées sur l'expérience utilisateur.",
    "home.services.systems.title": "Systèmes d'Entreprise",
    "home.services.systems.description":
      "Solutions personnalisées pour la gestion d'entreprise, CRM, ERP et intégration de systèmes.",
    "home.services.consulting.title": "Conseil Technologique",
    "home.services.consulting.description":
      "Orientation stratégique pour la transformation numérique et l'optimisation des processus technologiques.",

    "home.projects.title": "Projets en Vedette",
    "home.projects.subtitle": "Quelques-uns de nos travaux les plus récents",
    "home.projects.ecommerce.title": "Plateforme E-commerce",
    "home.projects.ecommerce.description":
      "Système complet de vente en ligne avec gestion d'inventaire et paiements intégrés.",
    "home.projects.hospital.title": "Système Hospitalier",
    "home.projects.hospital.description":
      "Plateforme de gestion hospitalière avec modules pour patients, médecins et administration.",
    "home.projects.banking.title": "Système Bancaire",
    "home.projects.banking.description":
      "Application sécurisée pour la gestion de comptes et transactions bancaires en ligne.",
    "home.projects.education.title": "Plateforme Éducative",
    "home.projects.education.description":
      "Système d'enseignement à distance avec vidéoconférences et gestion de cours.",
    "home.projects.food.title": "App de Livraison",
    "home.projects.food.description":
      "Application mobile pour commandes et livraisons de nourriture avec suivi en temps réel.",
    "home.projects.streaming.title": "Plateforme de Streaming",
    "home.projects.streaming.description":
      "Service de streaming vidéo avec lecture adaptative et recommandations personnalisées.",
    "home.projects.crm.title": "Système CRM",
    "home.projects.crm.description": "Plateforme de gestion de relation client et automatisation des ventes.",
    "home.projects.logistics.title": "Système Logistique",
    "home.projects.logistics.description":
      "Solution complète pour la gestion de flotte et l'optimisation des routes de livraison.",

    "home.testimonials.title": "Ce que disent nos clients",
    "home.testimonials.subtitle": "Retours d'entreprises qui nous ont fait confiance",
    "home.testimonials.client1.name": "Maria Silva",
    "home.testimonials.client1.role": "PDG, TechStart",
    "home.testimonials.client1.text":
      "VianaHub a complètement transformé notre présence numérique. Le résultat a dépassé toutes les attentes.",
    "home.testimonials.client2.name": "João Santos",
    "home.testimonials.client2.role": "Directeur IT, InnovaCorp",
    "home.testimonials.client2.text":
      "Professionnalisme exceptionnel et livraison dans les délais. Je recommande vivement leurs services.",
    "home.testimonials.client3.name": "Ana Costa",
    "home.testimonials.client3.role": "Fondatrice, StartupXYZ",
    "home.testimonials.client3.text":
      "L'équipe VianaHub a parfaitement compris notre vision et créé une solution incroyable.",

    "home.insights.title": "Insights et Tendances",
    "home.insights.subtitle": "Restez à jour avec les dernières nouvelles technologiques",
    "home.insights.ai.title": "L'Avenir de l'Intelligence Artificielle",
    "home.insights.ai.description": "Comment l'IA révolutionne le développement logiciel et l'expérience utilisateur.",
    "home.insights.cloud.title": "Migration vers le Cloud",
    "home.insights.cloud.description":
      "Stratégies et avantages de la migration des systèmes vers des environnements cloud modernes.",
    "home.insights.security.title": "Cybersécurité en 2024",
    "home.insights.security.description":
      "Les principales menaces et comment protéger votre entreprise dans l'environnement numérique actuel.",

    "home.technologies.title": "Technologies que Nous Utilisons",
    "home.technologies.subtitle": "Nous travaillons avec les outils et frameworks les plus modernes",

    "home.careers.title": "Rejoignez Notre Équipe",
    "home.careers.subtitle": "Nous recherchons des talents passionnés par la technologie",
    "home.careers.description":
      "Chez VianaHub, nous valorisons l'innovation, la croissance professionnelle et le travail d'équipe. Découvrez les opportunités disponibles.",
    "home.careers.cta": "Voir les Emplois",

    "home.entertainment.title": "Divertissement",
    "home.entertainment.subtitle": "Défiez-vous avec notre jeu interactif",
    "home.entertainment.description":
      "Testez vos compétences dans le Fox Maze Game - un jeu de labyrinthe développé par notre équipe.",
    "home.entertainment.cta": "Jouer Maintenant",

    // About Page
    "about.hero.title": "À Propos de VianaHub",
    "about.hero.subtitle": "Découvrez notre histoire, mission et valeurs",

    "about.story.title": "Notre Histoire",
    "about.story.content":
      "Fondée en 2020, VianaHub est née de la passion pour la technologie et l'innovation. Nous avons commencé comme une petite équipe de développeurs avec le rêve de créer des solutions numériques qui font la différence. Aujourd'hui, nous sommes une entreprise reconnue sur le marché, avec des projets dans divers secteurs et des clients satisfaits dans le monde entier.",

    "about.mission.title": "Mission",
    "about.mission.content":
      "Transformer les idées en solutions numériques de haute qualité, aidant les entreprises à atteindre leurs objectifs grâce à la technologie.",

    "about.vision.title": "Vision",
    "about.vision.content":
      "Être l'entreprise de référence en solutions technologiques innovantes, reconnue pour l'excellence et l'impact positif sur les affaires de nos clients.",

    "about.values.title": "Nos Valeurs",
    "about.values.innovation.title": "Innovation",
    "about.values.innovation.description":
      "Nous cherchons constamment de nouvelles façons de résoudre les problèmes et créer de la valeur.",
    "about.values.quality.title": "Qualité",
    "about.values.quality.description":
      "Nous nous engageons à l'excellence dans tous les projets que nous développons.",
    "about.values.collaboration.title": "Collaboration",
    "about.values.collaboration.description":
      "Nous croyons au pouvoir du travail d'équipe et du partenariat avec nos clients.",
    "about.values.integrity.title": "Intégrité",
    "about.values.integrity.description":
      "Nous agissons avec transparence, honnêteté et responsabilité dans toutes nos relations.",

    "about.team.title": "Notre Équipe",
    "about.team.subtitle": "Rencontrez les professionnels qui rendent tout possible",
    "about.team.dener.name": "Dener Viana",
    "about.team.dener.role": "PDG et Fondateur",
    "about.team.dener.description":
      "Visionnaire et leader avec plus de 10 ans d'expérience en technologie et gestion d'entreprise.",
    "about.team.tatiana.name": "Tatiana Viana",
    "about.team.tatiana.role": "CTO",
    "about.team.tatiana.description":
      "Spécialiste en architecture logicielle et développement de solutions évolutives.",
    "about.team.carlos.name": "Carlos Oliveira",
    "about.team.carlos.role": "Développeur Principal",
    "about.team.carlos.description":
      "Développeur senior avec expertise en technologies web modernes et méthodologies agiles.",
    "about.team.lucia.name": "Lúcia Ferreira",
    "about.team.lucia.role": "Designer UX/UI",
    "about.team.lucia.description":
      "Designer créative axée sur les expériences utilisateur intuitives et interfaces élégantes.",
    "about.team.roberto.name": "Roberto Lima",
    "about.team.roberto.role": "Ingénieur DevOps",
    "about.team.roberto.description":
      "Spécialiste en infrastructure cloud et automatisation des processus de développement.",

    "about.stats.title": "Chiffres qui Parlent d'Eux-Mêmes",
    "about.stats.projects": "Projets Terminés",
    "about.stats.clients": "Clients Satisfaits",
    "about.stats.experience": "Années d'Expérience",
    "about.stats.team": "Membres de l'Équipe",

    // Careers Page
    "careers.hero.title": "Carrières chez VianaHub",
    "careers.hero.subtitle": "Rejoignez une équipe passionnée par la technologie et l'innovation",

    "careers.why.title": "Pourquoi Travailler avec Nous?",
    "careers.why.growth.title": "Croissance Professionnelle",
    "careers.why.growth.description":
      "Nous offrons des opportunités de développement continu et de progression de carrière.",
    "careers.why.innovation.title": "Projets Innovants",
    "careers.why.innovation.description":
      "Travaillez sur des projets stimulants utilisant les technologies les plus modernes du marché.",
    "careers.why.culture.title": "Culture Collaborative",
    "careers.why.culture.description":
      "Environnement de travail inclusif où toutes les idées sont valorisées et respectées.",
    "careers.why.balance.title": "Équilibre Vie-Travail",
    "careers.why.balance.description":
      "Nous promouvons un environnement sain avec flexibilité et bien-être des employés.",

    "careers.positions.title": "Postes Ouverts",
    "careers.positions.subtitle": "Trouvez l'opportunité parfaite pour vous",
    "careers.positions.frontend.title": "Développeur Frontend",
    "careers.positions.frontend.location": "Lisbonne, Portugal",
    "careers.positions.frontend.type": "Temps Plein",
    "careers.positions.frontend.description":
      "Nous recherchons un développeur frontend expérimenté en React, TypeScript et technologies modernes pour rejoindre notre équipe de développement.",
    "careers.positions.backend.title": "Développeur Backend",
    "careers.positions.backend.location": "Porto, Portugal",
    "careers.positions.backend.type": "Temps Plein",
    "careers.positions.backend.description":
      "Opportunité pour développeur backend avec expérience en Node.js, Python ou Java pour travailler sur des systèmes évolutifs.",
    "careers.positions.designer.title": "Designer UX/UI",
    "careers.positions.designer.location": "À Distance",
    "careers.positions.designer.type": "Temps Plein",
    "careers.positions.designer.description":
      "Nous recherchons un designer créatif pour créer des expériences utilisateur exceptionnelles et des interfaces intuitives.",
    "careers.positions.devops.title": "Ingénieur DevOps",
    "careers.positions.devops.location": "Lisbonne, Portugal",
    "careers.positions.devops.type": "Temps Plein",
    "careers.positions.devops.description":
      "Opportunité pour spécialiste DevOps avec expérience en informatique cloud et automatisation des processus.",

    "careers.apply.title": "Comment Postuler",
    "careers.apply.step1": "Choisissez le poste qui correspond le mieux à votre profil",
    "careers.apply.step2": "Remplissez le formulaire de candidature avec vos informations",
    "careers.apply.step3": "Joignez votre CV et lettre de motivation",
    "careers.apply.step4": "Attendez notre contact pour les prochaines étapes",

    "careers.benefits.title": "Avantages",
    "careers.benefits.salary": "Salaire Compétitif",
    "careers.benefits.health": "Assurance Santé",
    "careers.benefits.training": "Formation Continue",
    "careers.benefits.flexible": "Horaires Flexibles",
    "careers.benefits.remote": "Travail à Distance",
    "careers.benefits.vacation": "Congés Payés",

    // Contact Page
    "contact.hero.title": "Entrez en Contact",
    "contact.hero.subtitle": "Nous sommes là pour vous aider avec votre prochain projet",

    "contact.info.title": "Informations de Contact",
    "contact.info.address": "Rue de l'Innovation, 123\n1000-001 Lisbonne, Portugal",
    "contact.info.phone": "+351 21 123 4567",
    "contact.info.email": "info@vianahub.com",
    "contact.info.hours": "Lundi au Vendredi: 9h00 - 18h00",

    "contact.form.title": "Envoyez-nous un Message",
    "contact.form.name": "Nom",
    "contact.form.email": "Email",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Message",
    "contact.form.send": "Envoyer le Message",
    "contact.form.success": "Message envoyé avec succès! Nous vous contacterons bientôt.",

    "contact.map.title": "Localisation",

    // Application Modal
    "application.title": "Candidature pour {position}",
    "application.personalInfo": "Informations Personnelles",
    "application.name": "Nom Complet",
    "application.email": "Email",
    "application.phone": "Téléphone",
    "application.linkedin": "LinkedIn (optionnel)",
    "application.experience": "Expérience et Éducation",
    "application.education": "Formation Académique",
    "application.workExperience": "Expérience Professionnelle",
    "application.skills": "Compétences Techniques",
    "application.motivation": "Motivation",
    "application.whyPosition": "Pourquoi postulez-vous pour ce poste?",
    "application.whyCompany": "Pourquoi voulez-vous travailler chez VianaHub?",
    "application.documents": "Documents",
    "application.cv": "CV (PDF)",
    "application.coverLetter": "Lettre de Motivation (optionnelle)",
    "application.terms": "J'accepte les termes et conditions",
    "application.submit": "Soumettre la Candidature",
    "application.cancel": "Annuler",

    // Common
    "common.learnMore": "En Savoir Plus",
    "common.getStarted": "Commencer",
    "common.viewAll": "Voir Tout",
    "common.apply": "Postuler",
    "common.close": "Fermer",
    "common.loading": "Chargement...",
    "common.error": "Erreur",
    "common.success": "Succès",

    // Footer
    "footer.company": "Entreprise",
    "footer.services": "Services",
    "footer.support": "Support",
    "footer.legal": "Légal",
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions de Service",
    "footer.cookies": "Politique des Cookies",
    "footer.rights": "Tous droits réservés.",
  },
  de: {
    // Navbar
    "nav.home": "Startseite",
    "nav.whatWeDo": "Was wir tun",
    "nav.whatWeDo.development": "Entwicklung",
    "nav.whatWeDo.agile": "Agile Methodik",
    "nav.whatWeDo.outsourcing": "Outsourcing",
    "nav.whatWeDo.systemIntegration": "Systemintegration",
    "nav.whatWeDo.landingPages": "Landing Pages",
    "nav.whatWeDo.chatbot": "Chatbot",
    "nav.industry": "Industrie",
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
    "nav.engineering": "Ingenieurwesen",
    "nav.engineering.railway": "Eisenbahn",
    "nav.engineering.road": "Straße",
    "nav.engineering.solarEnergy": "Solarenergie",
    "nav.institutional": "Institutionell",
    "nav.institutional.about": "Über uns",
    "nav.institutional.careers": "Karrieren",
    "nav.institutional.contact": "Kontakt",
    "nav.entertainment": "Unterhaltung",

    // Home Page
    "home.hero.title": "Wir verwandeln Ideen in hochwertige digitale Lösungen",
    "home.hero.subtitle":
      "Wir sind Experten in Webentwicklung, mobilen Anwendungen und Unternehmenssystemen. Wir schaffen Technologie, die Ihr Geschäft vorantreibt.",
    "home.hero.cta": "Projekt starten",
    "home.hero.learnMore": "Mehr erfahren",

    "home.services.title": "Unsere Dienstleistungen",
    "home.services.subtitle": "Wir bieten komplette technologische Lösungen zur Förderung Ihres Geschäfts",
    "home.services.development.title": "Webentwicklung",
    "home.services.development.description":
      "Wir erstellen moderne, responsive Websites und Webanwendungen, die für Leistung optimiert sind.",
    "home.services.mobile.title": "Mobile Anwendungen",
    "home.services.mobile.description":
      "Wir entwickeln native und hybride Apps für iOS und Android mit Fokus auf Benutzererfahrung.",
    "home.services.systems.title": "Unternehmenssysteme",
    "home.services.systems.description":
      "Maßgeschneiderte Lösungen für Unternehmensmanagement, CRM, ERP und Systemintegration.",
    "home.services.consulting.title": "Technologieberatung",
    "home.services.consulting.description":
      "Strategische Beratung für digitale Transformation und Optimierung technologischer Prozesse.",

    "home.projects.title": "Ausgewählte Projekte",
    "home.projects.subtitle": "Einige unserer neuesten Arbeiten",
    "home.projects.ecommerce.title": "E-Commerce-Plattform",
    "home.projects.ecommerce.description":
      "Komplettes Online-Verkaufssystem mit Bestandsverwaltung und integrierten Zahlungen.",
    "home.projects.hospital.title": "Krankenhaus-System",
    "home.projects.hospital.description":
      "Krankenhaus-Management-Plattform mit Modulen für Patienten, Ärzte und Verwaltung.",
    "home.projects.banking.title": "Banking-System",
    "home.projects.banking.description": "Sichere Anwendung für Online-Konto- und Banktransaktionsverwaltung.",
    "home.projects.education.title": "Bildungsplattform",
    "home.projects.education.description": "Fernlernsystem mit Videokonferenzen und Kursverwaltung.",
    "home.projects.food.title": "Lieferungs-App",
    "home.projects.food.description":
      "Mobile Anwendung für Essensbestellungen und -lieferungen mit Echtzeit-Verfolgung.",
    "home.projects.streaming.title": "Streaming-Plattform",
    "home.projects.streaming.description":
      "Video-Streaming-Service mit adaptiver Wiedergabe und personalisierten Empfehlungen.",
    "home.projects.crm.title": "CRM-System",
    "home.projects.crm.description": "Kundenbeziehungsmanagement-Plattform und Verkaufsautomatisierung.",
    "home.projects.logistics.title": "Logistiksystem",
    "home.projects.logistics.description": "Komplette Lösung für Flottenmanagement und Optimierung von Lieferrouten.",

    "home.testimonials.title": "Was unsere Kunden sagen",
    "home.testimonials.subtitle": "Feedback von Unternehmen, die uns vertraut haben",
    "home.testimonials.client1.name": "Maria Silva",
    "home.testimonials.client1.role": "CEO, TechStart",
    "home.testimonials.client1.text":
      "VianaHub hat unsere digitale Präsenz vollständig transformiert. Das Ergebnis übertraf alle Erwartungen.",
    "home.testimonials.client2.name": "João Santos",
    "home.testimonials.client2.role": "IT-Direktor, InnovaCorp",
    "home.testimonials.client2.text":
      "Außergewöhnliche Professionalität und pünktliche Lieferung. Ich empfehle ihre Dienstleistungen sehr.",
    "home.testimonials.client3.name": "Ana Costa",
    "home.testimonials.client3.role": "Gründerin, StartupXYZ",
    "home.testimonials.client3.text":
      "Das VianaHub-Team verstand unsere Vision perfekt und schuf eine unglaubliche Lösung.",

    "home.insights.title": "Einblicke und Trends",
    "home.insights.subtitle": "Bleiben Sie auf dem Laufenden mit den neuesten Technologie-Nachrichten",
    "home.insights.ai.title": "Die Zukunft der Künstlichen Intelligenz",
    "home.insights.ai.description": "Wie KI die Softwareentwicklung und Benutzererfahrung revolutioniert.",
    "home.insights.cloud.title": "Cloud-Migration",
    "home.insights.cloud.description":
      "Strategien und Vorteile der Migration von Systemen in moderne Cloud-Umgebungen.",
    "home.insights.security.title": "Cybersicherheit 2024",
    "home.insights.security.description":
      "Die Hauptbedrohungen und wie Sie Ihr Unternehmen in der heutigen digitalen Umgebung schützen.",

    "home.technologies.title": "Technologien, die wir verwenden",
    "home.technologies.subtitle": "Wir arbeiten mit den modernsten Tools und Frameworks",

    "home.careers.title": "Treten Sie unserem Team bei",
    "home.careers.subtitle": "Wir suchen Talente, die sich für Technologie begeistern",
    "home.careers.description":
      "Bei VianaHub schätzen wir Innovation, berufliches Wachstum und Teamarbeit. Entdecken Sie verfügbare Möglichkeiten.",
    "home.careers.cta": "Jobs anzeigen",

    "home.entertainment.title": "Unterhaltung",
    "home.entertainment.subtitle": "Fordern Sie sich mit unserem interaktiven Spiel heraus",
    "home.entertainment.description":
      "Testen Sie Ihre Fähigkeiten im Fox Maze Game - einem Labyrinthspiel, das von unserem Team entwickelt wurde.",
    "home.entertainment.cta": "Jetzt spielen",

    // About Page
    "about.hero.title": "Über VianaHub",
    "about.hero.subtitle": "Erfahren Sie mehr über unsere Geschichte, Mission und Werte",

    "about.story.title": "Unsere Geschichte",
    "about.story.content":
      "Gegründet 2020, entstand VianaHub aus der Leidenschaft für Technologie und Innovation. Wir begannen als kleines Team von Entwicklern mit dem Traum, digitale Lösungen zu schaffen, die einen Unterschied machen. Heute sind wir ein anerkanntes Unternehmen am Markt mit Projekten in verschiedenen Sektoren und zufriedenen Kunden weltweit.",

    "about.mission.title": "Mission",
    "about.mission.content":
      "Ideen in hochwertige digitale Lösungen verwandeln und Unternehmen dabei helfen, ihre Ziele durch Technologie zu erreichen.",

    "about.vision.title": "Vision",
    "about.vision.content":
      "Das Referenzunternehmen für innovative technologische Lösungen zu sein, anerkannt für Exzellenz und positive Auswirkungen auf die Geschäfte unserer Kunden.",

    "about.values.title": "Unsere Werte",
    "about.values.innovation.title": "Innovation",
    "about.values.innovation.description":
      "Wir suchen ständig nach neuen Wegen, Probleme zu lösen und Wert zu schaffen.",
    "about.values.quality.title": "Qualität",
    "about.values.quality.description": "Wir verpflichten uns zur Exzellenz in allen Projekten, die wir entwickeln.",
    "about.values.collaboration.title": "Zusammenarbeit",
    "about.values.collaboration.description":
      "Wir glauben an die Kraft der Teamarbeit und Partnerschaft mit unseren Kunden.",
    "about.values.integrity.title": "Integrität",
    "about.values.integrity.description":
      "Wir handeln mit Transparenz, Ehrlichkeit und Verantwortung in allen unseren Beziehungen.",

    "about.team.title": "Unser Team",
    "about.team.subtitle": "Lernen Sie die Fachleute kennen, die alles möglich machen",
    "about.team.dener.name": "Dener Viana",
    "about.team.dener.role": "CEO & Gründer",
    "about.team.dener.description":
      "Visionär und Führungskraft mit über 10 Jahren Erfahrung in Technologie und Unternehmensführung.",
    "about.team.tatiana.name": "Tatiana Viana",
    "about.team.tatiana.role": "CTO",
    "about.team.tatiana.description": "Spezialistin für Software-Architektur und Entwicklung skalierbarer Lösungen.",
    "about.team.carlos.name": "Carlos Oliveira",
    "about.team.carlos.role": "Lead-Entwickler",
    "about.team.carlos.description":
      "Senior-Entwickler mit Expertise in modernen Web-Technologien und agilen Methoden.",
    "about.team.lucia.name": "Lúcia Ferreira",
    "about.team.lucia.role": "UX/UI-Designerin",
    "about.team.lucia.description":
      "Kreative Designerin mit Fokus auf intuitive Benutzererfahrungen und elegante Interfaces.",
    "about.team.roberto.name": "Roberto Lima",
    "about.team.roberto.role": "DevOps-Ingenieur",
    "about.team.roberto.description":
      "Spezialist für Cloud-Infrastruktur und Automatisierung von Entwicklungsprozessen.",

    "about.stats.title": "Zahlen, die für sich sprechen",
    "about.stats.projects": "Abgeschlossene Projekte",
    "about.stats.clients": "Zufriedene Kunden",
    "about.stats.experience": "Jahre Erfahrung",
    "about.stats.team": "Teammitglieder",

    // Careers Page
    "careers.hero.title": "Karrieren bei VianaHub",
    "careers.hero.subtitle": "Treten Sie einem Team bei, das sich für Technologie und Innovation begeistert",

    "careers.why.title": "Warum mit uns arbeiten?",
    "careers.why.growth.title": "Berufliches Wachstum",
    "careers.why.growth.description": "Wir bieten kontinuierliche Entwicklungsmöglichkeiten und Karrierefortschritt.",
    "careers.why.innovation.title": "Innovative Projekte",
    "careers.why.innovation.description":
      "Arbeiten Sie an herausfordernden Projekten mit den modernsten Technologien am Markt.",
    "careers.why.culture.title": "Kollaborative Kultur",
    "careers.why.culture.description": "Inklusives Arbeitsumfeld, in dem alle Ideen geschätzt und respektiert werden.",
    "careers.why.balance.title": "Work-Life-Balance",
    "careers.why.balance.description": "Wir fördern ein gesundes Umfeld mit Flexibilität und Mitarbeiterwohlbefinden.",

    "careers.positions.title": "Offene Stellen",
    "careers.positions.subtitle": "Finden Sie die perfekte Gelegenheit für Sie",
    "careers.positions.frontend.title": "Frontend-Entwickler",
    "careers.positions.frontend.location": "Lissabon, Portugal",
    "careers.positions.frontend.type": "Vollzeit",
    "careers.positions.frontend.description":
      "Wir suchen einen erfahrenen Frontend-Entwickler in React, TypeScript und modernen Technologien für unser Entwicklungsteam.",
    "careers.positions.backend.title": "Backend-Entwickler",
    "careers.positions.backend.location": "Porto, Portugal",
    "careers.positions.backend.type": "Vollzeit",
    "careers.positions.backend.description":
      "Gelegenheit für Backend-Entwickler mit Erfahrung in Node.js, Python oder Java für skalierbare Systeme.",
    "careers.positions.designer.title": "UX/UI-Designer",
    "careers.positions.designer.location": "Remote",
    "careers.positions.designer.type": "Vollzeit",
    "careers.positions.designer.description":
      "Wir suchen einen kreativen Designer für außergewöhnliche Benutzererfahrungen und intuitive Interfaces.",
    "careers.positions.devops.title": "DevOps-Ingenieur",
    "careers.positions.devops.location": "Lissabon, Portugal",
    "careers.positions.devops.type": "Vollzeit",
    "careers.positions.devops.description":
      "Gelegenheit für DevOps-Spezialisten mit Erfahrung in Cloud-Computing und Prozessautomatisierung.",

    "careers.apply.title": "Wie bewerben",
    "careers.apply.step1": "Wählen Sie die Position, die am besten zu Ihrem Profil passt",
    "careers.apply.step2": "Füllen Sie das Bewerbungsformular mit Ihren Daten aus",
    "careers.apply.step3": "Fügen Sie Ihren Lebenslauf und Ihr Anschreiben bei",
    "careers.apply.step4": "Warten Sie auf unseren Kontakt für die nächsten Schritte",

    "careers.benefits.title": "Vorteile",
    "careers.benefits.salary": "Wettbewerbsfähiges Gehalt",
    "careers.benefits.health": "Krankenversicherung",
    "careers.benefits.training": "Kontinuierliche Weiterbildung",
    "careers.benefits.flexible": "Flexible Arbeitszeiten",
    "careers.benefits.remote": "Remote-Arbeit",
    "careers.benefits.vacation": "Bezahlter Urlaub",

    // Contact Page
    "contact.hero.title": "Kontakt aufnehmen",
    "contact.hero.subtitle": "Wir sind hier, um bei Ihrem nächsten Projekt zu helfen",

    "contact.info.title": "Kontaktinformationen",
    "contact.info.address": "Innovationsstraße 123\n1000-001 Lissabon, Portugal",
    "contact.info.phone": "+351 21 123 4567",
    "contact.info.email": "info@vianahub.com",
    "contact.info.hours": "Montag bis Freitag: 9:00 - 18:00",

    "contact.form.title": "Senden Sie uns eine Nachricht",
    "contact.form.name": "Name",
    "contact.form.email": "E-Mail",
    "contact.form.subject": "Betreff",
    "contact.form.message": "Nachricht",
    "contact.form.send": "Nachricht senden",
    "contact.form.success": "Nachricht erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.",

    "contact.map.title": "Standort",

    // Application Modal
    "application.title": "Bewerbung für {position}",
    "application.personalInfo": "Persönliche Informationen",
    "application.name": "Vollständiger Name",
    "application.email": "E-Mail",
    "application.phone": "Telefon",
    "application.linkedin": "LinkedIn (optional)",
    "application.experience": "Erfahrung und Bildung",
    "application.education": "Akademischer Hintergrund",
    "application.workExperience": "Berufserfahrung",
    "application.skills": "Technische Fähigkeiten",
    "application.motivation": "Motivation",
    "application.whyPosition": "Warum bewerben Sie sich für diese Position?",
    "application.whyCompany": "Warum möchten Sie bei VianaHub arbeiten?",
    "application.documents": "Dokumente",
    "application.cv": "Lebenslauf (PDF)",
    "application.coverLetter": "Anschreiben (optional)",
    "application.terms": "Ich akzeptiere die Geschäftsbedingungen",
    "application.submit": "Bewerbung einreichen",
    "application.cancel": "Abbrechen",

    // Common
    "common.learnMore": "Mehr erfahren",
    "common.getStarted": "Loslegen",
    "common.viewAll": "Alle anzeigen",
    "common.apply": "Bewerben",
    "common.close": "Schließen",
    "common.loading": "Laden...",
    "common.error": "Fehler",
    "common.success": "Erfolg",

    // Footer
    "footer.company": "Unternehmen",
    "footer.services": "Dienstleistungen",
    "footer.support": "Support",
    "footer.legal": "Rechtliches",
    "footer.privacy": "Datenschutzrichtlinie",
    "footer.terms": "Nutzungsbedingungen",
    "footer.cookies": "Cookie-Richtlinie",
    "footer.rights": "Alle Rechte vorbehalten.",
  },
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

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

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  return (
    <TranslationContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
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
