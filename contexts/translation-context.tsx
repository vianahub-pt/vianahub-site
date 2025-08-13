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
    // Navbar translations
    "nav.whatWeDo": "O que Fazemos",
    "nav.engineering": "Engenharia",
    "nav.industry": "Indústria",
    "nav.security": "Segurança",
    "nav.institutional": "Institucional",
    "nav.about": "Sobre",
    "nav.careers": "Carreiras",
    "nav.contact": "Contacto",

    // Menu items
    "menu.agile": "Metodologia Ágil",
    "menu.development": "Desenvolvimento",
    "menu.chatbot": "Chatbot Inteligente",
    "menu.landing-pages": "Landing Pages",
    "menu.outsourcing": "Outsourcing",
    "menu.system-integration": "Integração de Sistemas",
    "menu.solar-energy": "Energia Solar",
    "menu.railway": "Ferroviária",
    "menu.road": "Rodoviária",
    "menu.education": "Educação",
    "menu.government": "Governo",
    "menu.manufacturing": "Manufatura",
    "menu.financial": "Financeiro",
    "menu.retail": "Varejo",
    "menu.healthcare": "Saúde",
    "menu.cybersecurity": "Cibersegurança",
    "menu.backups": "Backups",
    "menu.access": "Controle de Acesso",
    "menu.about-us": "Sobre Nós",
    "menu.our-mission": "Oportunidades",
    "menu.our-vision": "Nossa Visão",
    "menu.contact-us": "Fale Conosco",

    // About page translations
    "about.hero.title": "Sobre a VianaHub",
    "about.hero.subtitle": "Transformando ideias em soluções tecnológicas inovadoras há mais de 15 anos",
    "about.hero.cta.history": "Nossa História",
    "about.hero.cta.team": "Nossa Equipe",
    "about.mission.title": "Nossa Missão",
    "about.mission.description":
      "Capacitar empresas através de soluções tecnológicas inovadoras, fornecendo ferramentas digitais que impulsionam o crescimento e a eficiência operacional.",
    "about.vision.title": "Nossa Visão",
    "about.vision.description":
      "Ser reconhecida como líder em transformação digital, criando um futuro onde a tecnologia é acessível e benéfica para todas as organizações.",
    "about.values.badge": "Nossos Valores",
    "about.values.title": "O que nos Move",
    "about.values.subtitle": "Nossos valores fundamentais guiam cada projeto e parceria que estabelecemos",
    "about.values.innovation.title": "Inovação",
    "about.values.innovation.description":
      "Buscamos constantemente novas tecnologias e metodologias para entregar soluções de vanguarda.",
    "about.values.commitment.title": "Compromisso",
    "about.values.commitment.description": "Dedicamo-nos integralmente ao sucesso dos nossos clientes e projetos.",
    "about.values.reliability.title": "Confiabilidade",
    "about.values.reliability.description":
      "Construímos relacionamentos duradouros baseados em transparência e resultados consistentes.",
    "about.values.agility.title": "Agilidade",
    "about.values.agility.description": "Adaptamo-nos rapidamente às mudanças do mercado e necessidades dos clientes.",
    "about.history.badge": "Nossa História",
    "about.history.title": "Jornada de Crescimento",
    "about.history.subtitle": "Conheça os marcos importantes da nossa trajetória empresarial",
    "about.history.foundation.title": "Fundação da VianaHub",
    "about.history.foundation.description":
      "Iniciamos nossa jornada com a missão de democratizar a tecnologia para pequenas e médias empresas.",
    "about.history.projects.title": "Primeiros Grandes Projetos",
    "about.history.projects.description":
      "Expandimos nosso portfólio com projetos de maior complexidade e impacto no mercado.",
    "about.history.expansion.title": "Expansão Internacional",
    "about.history.expansion.description": "Iniciamos operações em múltiplos países, atendendo clientes globais.",
    "about.history.growth.title": "Crescimento da Equipe",
    "about.history.growth.description":
      "Nossa equipe cresceu significativamente, incorporando talentos especializados em diversas áreas tecnológicas.",
    "about.team.badge": "Nossa Equipe",
    "about.team.title": "Conheça Nossos Líderes",
    "about.team.subtitle": "Uma equipe experiente e apaixonada por tecnologia",
    "about.team.tatiana.role": "CEO e Cofundadora",
    "about.team.tatiana.description":
      "Visionária estratégica com mais de 20 anos de experiência em transformação digital e liderança empresarial.",
    "about.team.dener.role": "CTO e Cofundador",
    "about.team.dener.description":
      "Especialista em arquitetura de sistemas e inovação tecnológica, liderando nossa visão técnica.",
    "about.team.carlos.role": "Diretor de Desenvolvimento",
    "about.team.carlos.description":
      "Líder técnico experiente, especializado em metodologias ágeis e desenvolvimento de software de alta qualidade.",
    "about.cta.title": "Pronto para Transformar seu Negócio?",
    "about.cta.subtitle":
      "Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares",
    "about.cta.contact": "Fale Conosco",
    "about.cta.projects": "Ver Projetos",

    // Careers page translations
    "careers.title": "Junte-se à Nossa Equipe",
    "careers.subtitle":
      "Faça parte de uma empresa inovadora que está moldando o futuro da tecnologia. Descubra oportunidades únicas de crescimento profissional.",
    "careers.cta": "Candidatar-se Agora",
    "careers.parallax.title": "Construindo o Futuro Juntos",
    "careers.parallax.subtitle":
      "Na VianaHub, acreditamos que grandes ideias nascem de equipes diversas e colaborativas.",
    "careers.positions.title": "Oportunidades Disponíveis",
    "careers.positions.subtitle":
      "Explore nossas vagas atuais e encontre a posição perfeita para seu perfil profissional.",
    "careers.positions.viewDetails": "Ver Detalhes",
    "careers.positions.apply": "Candidatar-se",
    "careers.positions.talentBank": "Banco de Talentos",
    "careers.positions.talentBankNote":
      "As vagas listadas representam oportunidades futuras. Candidatos serão contactados quando uma posição compatível estiver disponível.",
    "careers.positions.joinTalentBank": "Juntar ao Banco de Talentos",

    // Position details
    "careers.positionDetails.description": "Descrição da Posição",
    "careers.positionDetails.requirements": "Requisitos",
    "careers.positionDetails.responsibilities": "Responsabilidades",
    "careers.positionDetails.benefits": "Benefícios",
    "careers.positionDetails.salary": "Remuneração",

    // Individual positions
    "careers.positions.1.title": "Desenvolvedor Full Stack Sénior",
    "careers.positions.1.department": "Desenvolvimento",
    "careers.positions.1.location": "Remoto",
    "careers.positions.1.type": "Tempo Integral",
    "careers.positions.1.description":
      "Procuramos um desenvolvedor full stack experiente para liderar projetos de alta complexidade e mentorar nossa equipe junior.",
    "careers.positions.1.requirements.0": "5+ anos de experiência em desenvolvimento full stack",
    "careers.positions.1.requirements.1": "Domínio de React, Node.js e TypeScript",
    "careers.positions.1.requirements.2": "Experiência com bases de dados relacionais e NoSQL",
    "careers.positions.1.requirements.3": "Conhecimento em arquitetura de microserviços",
    "careers.positions.1.requirements.4": "Experiência em metodologias ágeis",
    "careers.positions.1.responsibilities.0": "Desenvolver aplicações web complexas",
    "careers.positions.1.responsibilities.1": "Mentorar desenvolvedores junior",
    "careers.positions.1.responsibilities.2": "Arquitetar soluções escaláveis",
    "careers.positions.1.responsibilities.3": "Colaborar com equipas multidisciplinares",
    "careers.positions.1.benefits.0": "Salário competitivo",
    "careers.positions.1.benefits.1": "Trabalho remoto",
    "careers.positions.1.benefits.2": "Plano de saúde",
    "careers.positions.1.benefits.3": "Formação contínua",

    "careers.positions.2.title": "Designer UX/UI",
    "careers.positions.2.department": "Design",
    "careers.positions.2.location": "Híbrido",
    "careers.positions.2.type": "Tempo Integral",
    "careers.positions.2.description":
      "Buscamos um designer criativo para criar experiências digitais excepcionais e interfaces intuitivas.",
    "careers.positions.2.requirements.0": "3+ anos de experiência em UX/UI",
    "careers.positions.2.requirements.1": "Portfólio sólido em design digital",
    "careers.positions.2.requirements.2": "Domínio de Figma e Adobe Creative Suite",
    "careers.positions.2.requirements.3": "Conhecimento em design systems",
    "careers.positions.2.requirements.4": "Experiência em pesquisa de utilizadores",
    "careers.positions.2.responsibilities.0": "Criar wireframes e protótipos",
    "careers.positions.2.responsibilities.1": "Desenvolver design systems",
    "careers.positions.2.responsibilities.2": "Conduzir pesquisas de utilizadores",
    "careers.positions.2.responsibilities.3": "Colaborar com equipas de desenvolvimento",
    "careers.positions.2.benefits.0": "Ambiente criativo",
    "careers.positions.2.benefits.1": "Flexibilidade de horários",
    "careers.positions.2.benefits.2": "Orçamento para cursos",
    "careers.positions.2.benefits.3": "Equipamento de alta qualidade",

    "careers.positions.3.title": "Analista de Sistemas",
    "careers.positions.3.department": "Análise",
    "careers.positions.3.location": "Presencial",
    "careers.positions.3.type": "Tempo Integral",
    "careers.positions.3.description":
      "Procuramos um analista para mapear processos de negócio e definir requisitos técnicos para soluções inovadoras.",
    "careers.positions.3.requirements.0": "Graduação em Sistemas de Informação ou área afim",
    "careers.positions.3.requirements.1": "2+ anos de experiência em análise de sistemas",
    "careers.positions.3.requirements.2": "Conhecimento em modelação de processos",
    "careers.positions.3.requirements.3": "Experiência com levantamento de requisitos",
    "careers.positions.3.responsibilities.0": "Mapear processos de negócio",
    "careers.positions.3.responsibilities.1": "Definir requisitos técnicos",
    "careers.positions.3.responsibilities.2": "Criar documentação técnica",
    "careers.positions.3.responsibilities.3": "Apoiar equipas de desenvolvimento",
    "careers.positions.3.benefits.0": "Plano de carreira estruturado",
    "careers.positions.3.benefits.1": "Vale alimentação",
    "careers.positions.3.benefits.2": "Seguro de vida",
    "careers.positions.3.benefits.3": "Participação em congressos",

    // Application form
    "careers.application.title": "Formulário de Candidatura",
    "careers.application.general": "Candidatura Geral",
    "careers.application.personalInfo": "Informações Pessoais",
    "careers.application.name": "Nome Completo",
    "careers.application.email": "E-mail",
    "careers.application.phone": "Telefone",
    "careers.application.educationExperienceTitle": "Formação e Experiência",
    "careers.application.education": "Formação Académica",
    "careers.application.educationPlaceholder": "Descreva sua formação académica, cursos e certificações...",
    "careers.application.experience": "Experiência Profissional",
    "careers.application.experiencePlaceholder": "Descreva sua experiência profissional relevante...",
    "careers.application.motivation": "Motivação",
    "careers.application.motivationLabel": "Por que deseja trabalhar na VianaHub?",
    "careers.application.motivationPlaceholder": "Conte-nos o que o motiva a juntar-se à nossa equipe...",
    "careers.application.cv": "Currículo",
    "careers.application.cvLabel": "Upload do seu CV (PDF ou DOC)",
    "careers.application.fileSelected": "Arquivo selecionado:",
    "careers.application.terms": "Aceito os termos e condições de tratamento de dados pessoais",
    "careers.application.acceptTermsAlert": "Por favor, aceite os termos e condições.",
    "careers.application.cancel": "Cancelar",
    "careers.application.submit": "Enviar Candidatura",
    "careers.application.successMessage": "Candidatura enviada com sucesso! Entraremos em contato em breve.",

    // Why work with us
    "careers.why.title": "Por que Trabalhar Connosco?",
    "careers.why.subtitle": "Descubra os benefícios de fazer parte da família VianaHub",
    "careers.why.innovation.title": "Inovação Constante",
    "careers.why.innovation.description": "Trabalhe com as tecnologias mais avançadas e projetos desafiadores",
    "careers.why.team.title": "Equipa Excepcional",
    "careers.why.team.description": "Colabore com profissionais talentosos e apaixonados por tecnologia",
    "careers.why.growth.title": "Crescimento Profissional",
    "careers.why.growth.description": "Desenvolva suas competências com formação contínua e novos desafios",
    "careers.why.wellbeing.title": "Bem-estar",
    "careers.why.wellbeing.description": "Desfrute de um ambiente de trabalho saudável e equilibrado",

    // Terms and conditions
    "careers.terms.title": "Termos e Condições de Tratamento de Dados Pessoais",
    "careers.terms.object.title": "1. Objeto",
    "careers.terms.object.description":
      "Os presentes termos regulam o tratamento de dados pessoais dos candidatos a emprego na VianaHub.",
    "careers.terms.personalData.title": "2. Dados Pessoais",
    "careers.terms.personalData.collectionTreatment.title": "2.1 Recolha e Tratamento",
    "careers.terms.personalData.collectionTreatment.description": "A VianaHub recolhe os seguintes dados pessoais:",
    "careers.terms.personalData.collectionTreatment.item1": "Dados de identificação (nome, e-mail, telefone)",
    "careers.terms.personalData.collectionTreatment.item2": "Dados profissionais (experiência, formação)",
    "careers.terms.personalData.collectionTreatment.item3": "Currículum vitae e documentos anexos",
    "careers.terms.personalData.collectionTreatment.item4": "Dados fornecidos durante o processo de seleção",
    "careers.terms.personalData.purpose.title": "2.2 Finalidades",
    "careers.terms.personalData.purpose.description": "Os dados pessoais são utilizados para:",
    "careers.terms.personalData.purpose.item1": "Avaliação de candidaturas",
    "careers.terms.personalData.purpose.item2": "Processo de seleção e recrutamento",
    "careers.terms.personalData.purpose.item3": "Comunicação com candidatos",
    "careers.terms.personalData.purpose.item4": "Constituição de banco de talentos",
    "careers.terms.personalData.retention.title": "2.3 Retenção",
    "careers.terms.personalData.retention.description":
      "Os dados serão conservados pelo período necessário ao processo de seleção, sendo eliminados após 2 anos, salvo consentimento expresso para integração no banco de talentos.",
    "careers.terms.candidateRights.title": "3. Direitos dos Candidatos",
    "careers.terms.candidateRights.description": "O candidato tem direito a:",
    "careers.terms.candidateRights.item1": "Acesso aos seus dados pessoais",
    "careers.terms.candidateRights.item2": "Retificação de dados incorretos",
    "careers.terms.candidateRights.item3": "Apagamento dos dados",
    "careers.terms.candidateRights.item4": "Limitação do tratamento",
    "careers.terms.candidateRights.item5": "Portabilidade dos dados",
    "careers.terms.candidateRights.item6": "Oposição ao tratamento",
    "careers.terms.candidateRights.item7": "Retirar consentimento a qualquer momento",
    "careers.terms.selectionProcess.title": "4. Processo de Seleção",
    "careers.terms.selectionProcess.phases.title": "4.1 Fases",
    "careers.terms.selectionProcess.phases.description": "O processo de seleção pode incluir:",
    "careers.terms.selectionProcess.phases.item1": "Análise curricular",
    "careers.terms.selectionProcess.phases.item2": "Entrevistas (presencial ou online)",
    "careers.terms.selectionProcess.phases.item3": "Testes técnicos ou psicotécnicos",
    "careers.terms.selectionProcess.phases.item4": "Verificação de referências",
    "careers.terms.selectionProcess.criteria.title": "4.2 Critérios",
    "careers.terms.selectionProcess.criteria.description":
      "A seleção baseia-se em critérios objetivos relacionados com as competências exigidas para cada posição.",
    "careers.terms.confidentiality.title": "5. Confidencialidade",
    "careers.terms.confidentiality.description":
      "A VianaHub compromete-se a manter a confidencialidade de todas as informações fornecidas pelos candidatos.",
    "careers.terms.communications.title": "6. Comunicações",
    "careers.terms.communications.description":
      "As comunicações relacionadas com o processo de seleção serão efetuadas através dos contactos fornecidos pelo candidato.",
    "careers.terms.changes.title": "7. Alterações",
    "careers.terms.changes.description":
      "A VianaHub reserva-se o direito de alterar estes termos, comunicando previamente aos candidatos.",
    "careers.terms.contacts.title": "8. Contactos",
    "careers.terms.contacts.description": "Para exercer os seus direitos ou esclarecer dúvidas, contacte:",
    "careers.terms.contacts.email": "E-mail:",
    "careers.terms.contacts.phone": "Telefone:",
    "careers.terms.contacts.address": "Morada:",
    "careers.terms.applicableLaw.title": "9. Lei Aplicável",
    "careers.terms.applicableLaw.description":
      "Estes termos regem-se pela lei portuguesa e pelo Regulamento Geral sobre a Proteção de Dados (RGPD).",
    "careers.terms.close": "Fechar",

    // Contact page translations
    "contact.hero.title": "Entre em Contacto",
    "contact.hero.subtitle":
      "Estamos aqui para ajudá-lo a transformar suas ideias em realidade. Fale conosco hoje mesmo!",
    "contact.form.title": "Envie-nos uma Mensagem",
    "contact.form.name": "Nome",
    "contact.form.email": "E-mail",
    "contact.form.company": "Empresa",
    "contact.form.message": "Mensagem",
    "contact.form.submit": "Enviar Mensagem",
    "contact.info.title": "Informações de Contacto",
    "contact.info.email": "E-mail",
    "contact.info.phone": "Telefone",
    "contact.info.address": "Endereço",
    "contact.info.hours": "Horário de Atendimento",
    "contact.info.hours.weekdays": "Segunda a Sexta: 9h às 18h",
    "contact.success.title": "Mensagem Enviada!",
    "contact.success.message": "Recebemos sua mensagem e entraremos em contacto em breve.",
  },
  en: {
    // Navbar translations
    "nav.whatWeDo": "What We Do",
    "nav.engineering": "Engineering",
    "nav.industry": "Industry",
    "nav.security": "Security",
    "nav.institutional": "Institutional",
    "nav.about": "About",
    "nav.careers": "Careers",
    "nav.contact": "Contact",

    // Menu items
    "menu.agile": "Agile Methodology",
    "menu.development": "Development",
    "menu.chatbot": "Intelligent Chatbot",
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
    "menu.access": "Access Control",
    "menu.about-us": "About Us",
    "menu.our-mission": "Opportunities",
    "menu.our-vision": "Our Vision",
    "menu.contact-us": "Contact Us",

    // About page translations
    "about.hero.title": "About VianaHub",
    "about.hero.subtitle": "Transforming ideas into innovative technological solutions for over 15 years",
    "about.hero.cta.history": "Our History",
    "about.hero.cta.team": "Our Team",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "Empowering companies through innovative technological solutions, providing digital tools that drive growth and operational efficiency.",
    "about.vision.title": "Our Vision",
    "about.vision.description":
      "To be recognized as a leader in digital transformation, creating a future where technology is accessible and beneficial for all organizations.",
    "about.values.badge": "Our Values",
    "about.values.title": "What Drives Us",
    "about.values.subtitle": "Our core values guide every project and partnership we establish",
    "about.values.innovation.title": "Innovation",
    "about.values.innovation.description":
      "We constantly seek new technologies and methodologies to deliver cutting-edge solutions.",
    "about.values.commitment.title": "Commitment",
    "about.values.commitment.description": "We dedicate ourselves entirely to the success of our clients and projects.",
    "about.values.reliability.title": "Reliability",
    "about.values.reliability.description":
      "We build lasting relationships based on transparency and consistent results.",
    "about.values.agility.title": "Agility",
    "about.values.agility.description": "We quickly adapt to market changes and customer needs.",
    "about.history.badge": "Our History",
    "about.history.title": "Growth Journey",
    "about.history.subtitle": "Learn about the important milestones in our business journey",
    "about.history.foundation.title": "VianaHub Foundation",
    "about.history.foundation.description":
      "We began our journey with the mission to democratize technology for small and medium enterprises.",
    "about.history.projects.title": "First Major Projects",
    "about.history.projects.description":
      "We expanded our portfolio with projects of greater complexity and market impact.",
    "about.history.expansion.title": "International Expansion",
    "about.history.expansion.description": "We started operations in multiple countries, serving global clients.",
    "about.history.growth.title": "Team Growth",
    "about.history.growth.description":
      "Our team grew significantly, incorporating specialized talents in various technological areas.",
    "about.team.badge": "Our Team",
    "about.team.title": "Meet Our Leaders",
    "about.team.subtitle": "An experienced team passionate about technology",
    "about.team.tatiana.role": "CEO and Co-founder",
    "about.team.tatiana.description":
      "Strategic visionary with over 20 years of experience in digital transformation and business leadership.",
    "about.team.dener.role": "CTO and Co-founder",
    "about.team.dener.description":
      "Systems architecture and technological innovation specialist, leading our technical vision.",
    "about.team.carlos.role": "Development Director",
    "about.team.carlos.description":
      "Experienced technical leader, specialized in agile methodologies and high-quality software development.",
    "about.cta.title": "Ready to Transform Your Business?",
    "about.cta.subtitle": "Contact us and discover how we can help your company reach new heights",
    "about.cta.contact": "Contact Us",
    "about.cta.projects": "View Projects",

    // Careers page translations
    "careers.title": "Join Our Team",
    "careers.subtitle":
      "Be part of an innovative company that is shaping the future of technology. Discover unique opportunities for professional growth.",
    "careers.cta": "Apply Now",
    "careers.parallax.title": "Building the Future Together",
    "careers.parallax.subtitle": "At VianaHub, we believe great ideas are born from diverse and collaborative teams.",
    "careers.positions.title": "Available Opportunities",
    "careers.positions.subtitle":
      "Explore our current openings and find the perfect position for your professional profile.",
    "careers.positions.viewDetails": "View Details",
    "careers.positions.apply": "Apply",
    "careers.positions.talentBank": "Talent Pool",
    "careers.positions.talentBankNote":
      "Listed positions represent future opportunities. Candidates will be contacted when a compatible position becomes available.",
    "careers.positions.joinTalentBank": "Join Talent Pool",

    // Position details
    "careers.positionDetails.description": "Position Description",
    "careers.positionDetails.requirements": "Requirements",
    "careers.positionDetails.responsibilities": "Responsibilities",
    "careers.positionDetails.benefits": "Benefits",
    "careers.positionDetails.salary": "Salary",

    // Individual positions
    "careers.positions.1.title": "Senior Full Stack Developer",
    "careers.positions.1.department": "Development",
    "careers.positions.1.location": "Remote",
    "careers.positions.1.type": "Full Time",
    "careers.positions.1.description":
      "We're looking for an experienced full stack developer to lead high-complexity projects and mentor our junior team.",
    "careers.positions.1.requirements.0": "5+ years of full stack development experience",
    "careers.positions.1.requirements.1": "Proficiency in React, Node.js and TypeScript",
    "careers.positions.1.requirements.2": "Experience with relational and NoSQL databases",
    "careers.positions.1.requirements.3": "Knowledge of microservices architecture",
    "careers.positions.1.requirements.4": "Experience in agile methodologies",
    "careers.positions.1.responsibilities.0": "Develop complex web applications",
    "careers.positions.1.responsibilities.1": "Mentor junior developers",
    "careers.positions.1.responsibilities.2": "Architect scalable solutions",
    "careers.positions.1.responsibilities.3": "Collaborate with multidisciplinary teams",
    "careers.positions.1.benefits.0": "Competitive salary",
    "careers.positions.1.benefits.1": "Remote work",
    "careers.positions.1.benefits.2": "Health insurance",
    "careers.positions.1.benefits.3": "Continuous training",

    "careers.positions.2.title": "UX/UI Designer",
    "careers.positions.2.department": "Design",
    "careers.positions.2.location": "Hybrid",
    "careers.positions.2.type": "Full Time",
    "careers.positions.2.description":
      "We seek a creative designer to create exceptional digital experiences and intuitive interfaces.",
    "careers.positions.2.requirements.0": "3+ years of UX/UI experience",
    "careers.positions.2.requirements.1": "Strong portfolio in digital design",
    "careers.positions.2.requirements.2": "Proficiency in Figma and Adobe Creative Suite",
    "careers.positions.2.requirements.3": "Knowledge of design systems",
    "careers.positions.2.requirements.4": "Experience in user research",
    "careers.positions.2.responsibilities.0": "Create wireframes and prototypes",
    "careers.positions.2.responsibilities.1": "Develop design systems",
    "careers.positions.2.responsibilities.2": "Conduct user research",
    "careers.positions.2.responsibilities.3": "Collaborate with development teams",
    "careers.positions.2.benefits.0": "Creative environment",
    "careers.positions.2.benefits.1": "Flexible schedule",
    "careers.positions.2.benefits.2": "Course budget",
    "careers.positions.2.benefits.3": "High-quality equipment",

    "careers.positions.3.title": "Systems Analyst",
    "careers.positions.3.department": "Analysis",
    "careers.positions.3.location": "On-site",
    "careers.positions.3.type": "Full Time",
    "careers.positions.3.description":
      "We're looking for an analyst to map business processes and define technical requirements for innovative solutions.",
    "careers.positions.3.requirements.0": "Degree in Information Systems or related field",
    "careers.positions.3.requirements.1": "2+ years of systems analysis experience",
    "careers.positions.3.requirements.2": "Knowledge in process modeling",
    "careers.positions.3.requirements.3": "Experience with requirements gathering",
    "careers.positions.3.responsibilities.0": "Map business processes",
    "careers.positions.3.responsibilities.1": "Define technical requirements",
    "careers.positions.3.responsibilities.2": "Create technical documentation",
    "careers.positions.3.responsibilities.3": "Support development teams",
    "careers.positions.3.benefits.0": "Structured career path",
    "careers.positions.3.benefits.1": "Meal vouchers",
    "careers.positions.3.benefits.2": "Life insurance",
    "careers.positions.3.benefits.3": "Conference participation",

    // Application form
    "careers.application.title": "Application Form",
    "careers.application.general": "General Application",
    "careers.application.personalInfo": "Personal Information",
    "careers.application.name": "Full Name",
    "careers.application.email": "Email",
    "careers.application.phone": "Phone",
    "careers.application.educationExperienceTitle": "Education and Experience",
    "careers.application.education": "Academic Background",
    "careers.application.educationPlaceholder": "Describe your academic background, courses and certifications...",
    "careers.application.experience": "Professional Experience",
    "careers.application.experiencePlaceholder": "Describe your relevant professional experience...",
    "careers.application.motivation": "Motivation",
    "careers.application.motivationLabel": "Why do you want to work at VianaHub?",
    "careers.application.motivationPlaceholder": "Tell us what motivates you to join our team...",
    "careers.application.cv": "Resume",
    "careers.application.cvLabel": "Upload your CV (PDF or DOC)",
    "careers.application.fileSelected": "File selected:",
    "careers.application.terms": "I accept the terms and conditions of personal data processing",
    "careers.application.acceptTermsAlert": "Please accept the terms and conditions.",
    "careers.application.cancel": "Cancel",
    "careers.application.submit": "Submit Application",
    "careers.application.successMessage": "Application submitted successfully! We will contact you soon.",

    // Why work with us
    "careers.why.title": "Why Work With Us?",
    "careers.why.subtitle": "Discover the benefits of being part of the VianaHub family",
    "careers.why.innovation.title": "Constant Innovation",
    "careers.why.innovation.description": "Work with the most advanced technologies and challenging projects",
    "careers.why.team.title": "Exceptional Team",
    "careers.why.team.description": "Collaborate with talented professionals passionate about technology",
    "careers.why.growth.title": "Professional Growth",
    "careers.why.growth.description": "Develop your skills with continuous training and new challenges",
    "careers.why.wellbeing.title": "Well-being",
    "careers.why.wellbeing.description": "Enjoy a healthy and balanced work environment",

    // Terms and conditions
    "careers.terms.title": "Terms and Conditions of Personal Data Processing",
    "careers.terms.object.title": "1. Purpose",
    "careers.terms.object.description":
      "These terms regulate the processing of personal data of job candidates at VianaHub.",
    "careers.terms.personalData.title": "2. Personal Data",
    "careers.terms.personalData.collectionTreatment.title": "2.1 Collection and Processing",
    "careers.terms.personalData.collectionTreatment.description": "VianaHub collects the following personal data:",
    "careers.terms.personalData.collectionTreatment.item1": "Identification data (name, email, phone)",
    "careers.terms.personalData.collectionTreatment.item2": "Professional data (experience, education)",
    "careers.terms.personalData.collectionTreatment.item3": "Resume and attached documents",
    "careers.terms.personalData.collectionTreatment.item4": "Data provided during the selection process",
    "careers.terms.personalData.purpose.title": "2.2 Purposes",
    "careers.terms.personalData.purpose.description": "Personal data is used for:",
    "careers.terms.personalData.purpose.item1": "Application evaluation",
    "careers.terms.personalData.purpose.item2": "Selection and recruitment process",
    "careers.terms.personalData.purpose.item3": "Communication with candidates",
    "careers.terms.personalData.purpose.item4": "Talent pool constitution",
    "careers.terms.personalData.retention.title": "2.3 Retention",
    "careers.terms.personalData.retention.description":
      "Data will be kept for the period necessary for the selection process, being deleted after 2 years, except with express consent for talent pool integration.",
    "careers.terms.candidateRights.title": "3. Candidate Rights",
    "careers.terms.candidateRights.description": "The candidate has the right to:",
    "careers.terms.candidateRights.item1": "Access their personal data",
    "careers.terms.candidateRights.item2": "Rectification of incorrect data",
    "careers.terms.candidateRights.item3": "Data erasure",
    "careers.terms.candidateRights.item4": "Processing limitation",
    "careers.terms.candidateRights.item5": "Data portability",
    "careers.terms.candidateRights.item6": "Object to processing",
    "careers.terms.candidateRights.item7": "Withdraw consent at any time",
    "careers.terms.selectionProcess.title": "4. Selection Process",
    "careers.terms.selectionProcess.phases.title": "4.1 Phases",
    "careers.terms.selectionProcess.phases.description": "The selection process may include:",
    "careers.terms.selectionProcess.phases.item1": "Resume analysis",
    "careers.terms.selectionProcess.phases.item2": "Interviews (in-person or online)",
    "careers.terms.selectionProcess.phases.item3": "Technical or psychotechnical tests",
    "careers.terms.selectionProcess.phases.item4": "Reference verification",
    "careers.terms.selectionProcess.criteria.title": "4.2 Criteria",
    "careers.terms.selectionProcess.criteria.description":
      "Selection is based on objective criteria related to the skills required for each position.",
    "careers.terms.confidentiality.title": "5. Confidentiality",
    "careers.terms.confidentiality.description":
      "VianaHub commits to maintaining the confidentiality of all information provided by candidates.",
    "careers.terms.communications.title": "6. Communications",
    "careers.terms.communications.description":
      "Communications related to the selection process will be made through the contacts provided by the candidate.",
    "careers.terms.changes.title": "7. Changes",
    "careers.terms.changes.description":
      "VianaHub reserves the right to change these terms, communicating previously to candidates.",
    "careers.terms.contacts.title": "8. Contacts",
    "careers.terms.contacts.description": "To exercise your rights or clarify doubts, contact:",
    "careers.terms.contacts.email": "Email:",
    "careers.terms.contacts.phone": "Phone:",
    "careers.terms.contacts.address": "Address:",
    "careers.terms.applicableLaw.title": "9. Applicable Law",
    "careers.terms.applicableLaw.description":
      "These terms are governed by Portuguese law and the General Data Protection Regulation (GDPR).",
    "careers.terms.close": "Close",

    // Contact page translations
    "contact.hero.title": "Get In Touch",
    "contact.hero.subtitle": "We're here to help you turn your ideas into reality. Contact us today!",
    "contact.form.title": "Send Us a Message",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.company": "Company",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.address": "Address",
    "contact.info.hours": "Business Hours",
    "contact.info.hours.weekdays": "Monday to Friday: 9am to 6pm",
    "contact.success.title": "Message Sent!",
    "contact.success.message": "We received your message and will contact you soon.",
  },
  es: {
    // Navbar translations
    "nav.whatWeDo": "Qué Hacemos",
    "nav.engineering": "Ingeniería",
    "nav.industry": "Industria",
    "nav.security": "Seguridad",
    "nav.institutional": "Institucional",
    "nav.about": "Acerca de",
    "nav.careers": "Carreras",
    "nav.contact": "Contacto",

    // Menu items
    "menu.agile": "Metodología Ágil",
    "menu.development": "Desarrollo",
    "menu.chatbot": "Chatbot Inteligente",
    "menu.landing-pages": "Landing Pages",
    "menu.outsourcing": "Outsourcing",
    "menu.system-integration": "Integración de Sistemas",
    "menu.solar-energy": "Energía Solar",
    "menu.railway": "Ferroviaria",
    "menu.road": "Carretera",
    "menu.education": "Educación",
    "menu.government": "Gobierno",
    "menu.manufacturing": "Manufactura",
    "menu.financial": "Financiero",
    "menu.retail": "Minorista",
    "menu.healthcare": "Salud",
    "menu.cybersecurity": "Ciberseguridad",
    "menu.backups": "Copias de Seguridad",
    "menu.access": "Control de Acceso",
    "menu.about-us": "Sobre Nosotros",
    "menu.our-mission": "Oportunidades",
    "menu.our-vision": "Nuestra Visión",
    "menu.contact-us": "Contáctenos",

    // About page translations
    "about.hero.title": "Acerca de VianaHub",
    "about.hero.subtitle": "Transformando ideas en soluciones tecnológicas innovadoras durante más de 15 años",
    "about.hero.cta.history": "Nuestra Historia",
    "about.hero.cta.team": "Nuestro Equipo",
    "about.mission.title": "Nuestra Misión",
    "about.mission.description":
      "Empoderar empresas a través de soluciones tecnológicas innovadoras, proporcionando herramientas digitales que impulsan el crecimiento y la eficiencia operacional.",
    "about.vision.title": "Nuestra Visión",
    "about.vision.description":
      "Ser reconocida como líder en transformación digital, creando un futuro donde la tecnología es accesible y beneficiosa para todas las organizaciones.",
    "about.values.badge": "Nuestros Valores",
    "about.values.title": "Lo que nos Mueve",
    "about.values.subtitle": "Nuestros valores fundamentales guían cada proyecto y asociación que establecemos",
    "about.values.innovation.title": "Innovación",
    "about.values.innovation.description":
      "Buscamos constantemente nuevas tecnologías y metodologías para entregar soluciones de vanguardia.",
    "about.values.commitment.title": "Compromiso",
    "about.values.commitment.description": "Nos dedicamos completamente al éxito de nuestros clientes y proyectos.",
    "about.values.reliability.title": "Confiabilidad",
    "about.values.reliability.description":
      "Construimos relaciones duraderas basadas en transparencia y resultados consistentes.",
    "about.values.agility.title": "Agilidad",
    "about.values.agility.description":
      "Nos adaptamos rápidamente a los cambios del mercado y necesidades de los clientes.",
    "about.history.badge": "Nuestra Historia",
    "about.history.title": "Jornada de Crecimiento",
    "about.history.subtitle": "Conoce los hitos importantes de nuestro trayecto empresarial",
    "about.history.foundation.title": "Fundación de VianaHub",
    "about.history.foundation.description":
      "Iniciamos nuestro camino con la misión de democratizar la tecnología para pequeñas y medianas empresas.",
    "about.history.projects.title": "Primeros Grandes Proyectos",
    "about.history.projects.description":
      "Expandimos nuestro portafolio con proyectos de mayor complejidad e impacto en el mercado.",
    "about.history.expansion.title": "Expansión Internacional",
    "about.history.expansion.description": "Iniciamos operaciones en múltiples países, atendiendo clientes globales.",
    "about.history.growth.title": "Crecimiento del Equipo",
    "about.history.growth.description":
      "Nuestro equipo creció significativamente, incorporando talentos especializados en diversas áreas tecnológicas.",
    "about.team.badge": "Nuestro Equipo",
    "about.team.title": "Conoce a Nuestros Líderes",
    "about.team.subtitle": "Un equipo experimentado y apasionado por la tecnología",
    "about.team.tatiana.role": "CEO y Cofundadora",
    "about.team.tatiana.description":
      "Visionaria estratégica con más de 20 años de experiencia en transformación digital y liderazgo empresarial.",
    "about.team.dener.role": "CTO y Cofundador",
    "about.team.dener.description":
      "Especialista en arquitectura de sistemas e innovación tecnológica, liderando nuestra visión técnica.",
    "about.team.carlos.role": "Director de Desarrollo",
    "about.team.carlos.description":
      "Líder técnico experimentado, especializado en metodologías ágiles y desarrollo de software de alta calidad.",
    "about.cta.title": "¿Listo para Transformar tu Negocio?",
    "about.cta.subtitle": "Contáctanos y descubre cómo podemos ayudar a tu empresa a alcanzar nuevas alturas",
    "about.cta.contact": "Contáctanos",
    "about.cta.projects": "Ver Proyectos",

    // Careers page translations
    "careers.title": "Únete a Nuestro Equipo",
    "careers.subtitle":
      "Sé parte de una empresa innovadora que está moldeando el futuro de la tecnología. Descubre oportunidades únicas de crecimiento profesional.",
    "careers.cta": "Aplicar Ahora",
    "careers.parallax.title": "Construyendo el Futuro Juntos",
    "careers.parallax.subtitle":
      "En VianaHub, creemos que las grandes ideas nacen de equipos diversos y colaborativos.",
    "careers.positions.title": "Oportunidades Disponibles",
    "careers.positions.subtitle":
      "Explora nuestras vacantes actuales y encuentra la posición perfecta para tu perfil profesional.",
    "careers.positions.viewDetails": "Ver Detalles",
    "careers.positions.apply": "Aplicar",
    "careers.positions.talentBank": "Banco de Talentos",
    "careers.positions.talentBankNote":
      "Las posiciones listadas representan oportunidades futuras. Los candidatos serán contactados cuando una posición compatible esté disponible.",
    "careers.positions.joinTalentBank": "Unirse al Banco de Talentos",

    // Contact page translations
    "contact.hero.title": "Ponte en Contacto",
    "contact.hero.subtitle": "Estamos aquí para ayudarte a convertir tus ideas en realidad. ¡Contáctanos hoy mismo!",
    "contact.form.title": "Envíanos un Mensaje",
    "contact.form.name": "Nombre",
    "contact.form.email": "Email",
    "contact.form.company": "Empresa",
    "contact.form.message": "Mensaje",
    "contact.form.submit": "Enviar Mensaje",
    "contact.info.title": "Información de Contacto",
    "contact.info.email": "Email",
    "contact.info.phone": "Teléfono",
    "contact.info.address": "Dirección",
    "contact.info.hours": "Horario de Atención",
    "contact.info.hours.weekdays": "Lunes a Viernes: 9am a 6pm",
    "contact.success.title": "¡Mensaje Enviado!",
    "contact.success.message": "Recibimos tu mensaje y nos pondremos en contacto pronto.",
  },
  fr: {
    // Navbar translations
    "nav.whatWeDo": "Ce que nous faisons",
    "nav.engineering": "Ingénierie",
    "nav.industry": "Industrie",
    "nav.security": "Sécurité",
    "nav.institutional": "Institutionnel",
    "nav.about": "À propos",
    "nav.careers": "Carrières",
    "nav.contact": "Contact",

    // Menu items
    "menu.agile": "Méthodologie Agile",
    "menu.development": "Développement",
    "menu.chatbot": "Chatbot Intelligent",
    "menu.landing-pages": "Pages d'Atterrissage",
    "menu.outsourcing": "Externalisation",
    "menu.system-integration": "Intégration de Systèmes",
    "menu.solar-energy": "Énergie Solaire",
    "menu.railway": "Ferroviaire",
    "menu.road": "Routière",
    "menu.education": "Éducation",
    "menu.government": "Gouvernement",
    "menu.manufacturing": "Fabrication",
    "menu.financial": "Financier",
    "menu.retail": "Commerce de Détail",
    "menu.healthcare": "Santé",
    "menu.cybersecurity": "Cybersécurité",
    "menu.backups": "Sauvegardes",
    "menu.access": "Contrôle d'Accès",
    "menu.about-us": "À Propos de Nous",
    "menu.our-mission": "Opportunités",
    "menu.our-vision": "Notre Vision",
    "menu.contact-us": "Contactez-nous",

    // About page translations
    "about.hero.title": "À Propos de VianaHub",
    "about.hero.subtitle": "Transformant les idées en solutions technologiques innovantes depuis plus de 15 ans",
    "about.hero.cta.history": "Notre Histoire",
    "about.hero.cta.team": "Notre Équipe",
    "about.mission.title": "Notre Mission",
    "about.mission.description":
      "Autonomiser les entreprises grâce à des solutions technologiques innovantes, en fournissant des outils numériques qui stimulent la croissance et l'efficacité opérationnelle.",
    "about.vision.title": "Notre Vision",
    "about.vision.description":
      "Être reconnu comme leader dans la transformation numérique, créant un avenir où la technologie est accessible et bénéfique pour toutes les organisations.",
    "about.values.badge": "Nos Valeurs",
    "about.values.title": "Ce qui nous Motive",
    "about.values.subtitle": "Nos valeurs fondamentales guident chaque projet et partenariat que nous établissons",
    "about.values.innovation.title": "Innovation",
    "about.values.innovation.description":
      "Nous recherchons constamment de nouvelles technologies et méthodologies pour fournir des solutions de pointe.",
    "about.values.commitment.title": "Engagement",
    "about.values.commitment.description": "Nous nous dédions entièrement au succès de nos clients et projets.",
    "about.values.reliability.title": "Fiabilité",
    "about.values.reliability.description":
      "Nous construisons des relations durables basées sur la transparence et des résultats cohérents.",
    "about.values.agility.title": "Agilité",
    "about.values.agility.description":
      "Nous nous adaptons rapidement aux changements du marché et aux besoins des clients.",
    "about.history.badge": "Notre Histoire",
    "about.history.title": "Parcours de Croissance",
    "about.history.subtitle": "Découvrez les jalons importants de notre parcours d'entreprise",
    "about.history.foundation.title": "Fondation de VianaHub",
    "about.history.foundation.description":
      "Nous avons commencé notre parcours avec la mission de démocratiser la technologie pour les petites et moyennes entreprises.",
    "about.history.projects.title": "Premiers Grands Projets",
    "about.history.projects.description":
      "Nous avons élargi notre portefeuille avec des projets de plus grande complexité et d'impact sur le marché.",
    "about.history.expansion.title": "Expansion Internationale",
    "about.history.expansion.description":
      "Nous avons commencé des opérations dans plusieurs pays, servant des clients mondiaux.",
    "about.history.growth.title": "Croissance de l'Équipe",
    "about.history.growth.description":
      "Notre équipe a considérablement grandi, incorporant des talents spécialisés dans diverses domaines technologiques.",
    "about.team.badge": "Notre Équipe",
    "about.team.title": "Rencontrez Nos Leaders",
    "about.team.subtitle": "Une équipe expérimentée et passionnée par la technologie",
    "about.team.tatiana.role": "PDG et Cofondatrice",
    "about.team.tatiana.description":
      "Visionnaire stratégique avec plus de 20 ans d'expérience dans la transformation numérique et le leadership d'entreprise.",
    "about.team.dener.role": "CTO et Cofondateur",
    "about.team.dener.description":
      "Spécialiste en architecture de systèmes et innovation technologique, dirigeant notre vision technique.",
    "about.team.carlos.role": "Directeur du Développement",
    "about.team.carlos.description":
      "Leader technique expérimenté, spécialisé dans les méthodologies agiles et le développement de logiciels de haute qualité.",
    "about.cta.title": "Prêt à Transformer Votre Entreprise?",
    "about.cta.subtitle":
      "Contactez-nous et découvrez comment nous pouvons aider votre entreprise à atteindre de nouveaux sommets",
    "about.cta.contact": "Contactez-nous",
    "about.cta.projects": "Voir les Projets",

    // Careers page translations
    "careers.title": "Rejoignez Notre Équipe",
    "careers.subtitle":
      "Faites partie d'une entreprise innovante qui façonne l'avenir de la technologie. Découvrez des opportunités uniques de croissance professionnelle.",
    "careers.cta": "Postuler Maintenant",
    "careers.parallax.title": "Construire l'Avenir Ensemble",
    "careers.parallax.subtitle":
      "Chez VianaHub, nous croyons que les grandes idées naissent d'équipes diverses et collaboratives.",
    "careers.positions.title": "Opportunités Disponibles",
    "careers.positions.subtitle":
      "Explorez nos ouvertures actuelles et trouvez la position parfaite pour votre profil professionnel.",
    "careers.positions.viewDetails": "Voir les Détails",
    "careers.positions.apply": "Postuler",
    "careers.positions.talentBank": "Vivier de Talents",
    "careers.positions.talentBankNote":
      "Les postes listés représentent des opportunités futures. Les candidats seront contactés lorsqu'une position compatible sera disponible.",
    "careers.positions.joinTalentBank": "Rejoindre le Vivier de Talents",

    // Contact page translations
    "contact.hero.title": "Entrer en Contact",
    "contact.hero.subtitle":
      "Nous sommes là pour vous aider à transformer vos idées en réalité. Contactez-nous aujourd'hui!",
    "contact.form.title": "Envoyez-nous un Message",
    "contact.form.name": "Nom",
    "contact.form.email": "Email",
    "contact.form.company": "Entreprise",
    "contact.form.message": "Message",
    "contact.form.submit": "Envoyer le Message",
    "contact.info.title": "Informations de Contact",
    "contact.info.email": "Email",
    "contact.info.phone": "Téléphone",
    "contact.info.address": "Adresse",
    "contact.info.hours": "Heures d'Ouverture",
    "contact.info.hours.weekdays": "Lundi au Vendredi: 9h à 18h",
    "contact.success.title": "Message Envoyé!",
    "contact.success.message": "Nous avons reçu votre message et vous contacterons bientôt.",
  },
  de: {
    // Navbar translations
    "nav.whatWeDo": "Was wir tun",
    "nav.engineering": "Ingenieurwesen",
    "nav.industry": "Industrie",
    "nav.security": "Sicherheit",
    "nav.institutional": "Institutionell",
    "nav.about": "Über uns",
    "nav.careers": "Karriere",
    "nav.contact": "Kontakt",

    // Menu items
    "menu.agile": "Agile Methodik",
    "menu.development": "Entwicklung",
    "menu.chatbot": "Intelligenter Chatbot",
    "menu.landing-pages": "Landing Pages",
    "menu.outsourcing": "Outsourcing",
    "menu.system-integration": "Systemintegration",
    "menu.solar-energy": "Solarenergie",
    "menu.railway": "Eisenbahn",
    "menu.road": "Straße",
    "menu.education": "Bildung",
    "menu.government": "Regierung",
    "menu.manufacturing": "Fertigung",
    "menu.financial": "Finanzwesen",
    "menu.retail": "Einzelhandel",
    "menu.healthcare": "Gesundheitswesen",
    "menu.cybersecurity": "Cybersicherheit",
    "menu.backups": "Backups",
    "menu.access": "Zugriffskontrolle",
    "menu.about-us": "Über Uns",
    "menu.our-mission": "Möglichkeiten",
    "menu.our-vision": "Unsere Vision",
    "menu.contact-us": "Kontaktieren Sie Uns",

    // About page translations
    "about.hero.title": "Über VianaHub",
    "about.hero.subtitle": "Verwandlung von Ideen in innovative technologische Lösungen seit über 15 Jahren",
    "about.hero.cta.history": "Unsere Geschichte",
    "about.hero.cta.team": "Unser Team",
    "about.mission.title": "Unsere Mission",
    "about.mission.description":
      "Unternehmen durch innovative technologische Lösungen stärken, digitale Tools bereitstellen, die Wachstum und operative Effizienz fördern.",
    "about.vision.title": "Unsere Vision",
    "about.vision.description":
      "Als Marktführer in der digitalen Transformation anerkannt zu werden und eine Zukunft zu schaffen, in der Technologie für alle Organisationen zugänglich und vorteilhaft ist.",
    "about.values.badge": "Unsere Werte",
    "about.values.title": "Was uns Antreibt",
    "about.values.subtitle": "Unsere Grundwerte leiten jedes Projekt und jede Partnerschaft, die wir eingehen",
    "about.values.innovation.title": "Innovation",
    "about.values.innovation.description":
      "Wir suchen ständig nach neuen Technologien und Methodologien, um Spitzenlösungen zu liefern.",
    "about.values.commitment.title": "Engagement",
    "about.values.commitment.description": "Wir widmen uns voll und ganz dem Erfolg unserer Kunden und Projekte.",
    "about.values.reliability.title": "Zuverlässigkeit",
    "about.values.reliability.description":
      "Wir bauen dauerhafte Beziehungen auf, die auf Transparenz und konsistenten Ergebnissen basieren.",
    "about.values.agility.title": "Agilität",
    "about.values.agility.description": "Wir passen uns schnell an Marktveränderungen und Kundenbedürfnisse an.",
    "about.history.badge": "Unsere Geschichte",
    "about.history.title": "Wachstumsreise",
    "about.history.subtitle": "Lernen Sie die wichtigen Meilensteine unserer Unternehmensreise kennen",
    "about.history.foundation.title": "Gründung von VianaHub",
    "about.history.foundation.description":
      "Wir begannen unsere Reise mit der Mission, Technologie für kleine und mittlere Unternehmen zu demokratisieren.",
    "about.history.projects.title": "Erste Großprojekte",
    "about.history.projects.description":
      "Wir erweiterten unser Portfolio mit Projekten größerer Komplexität und Marktauswirkung.",
    "about.history.expansion.title": "Internationale Expansion",
    "about.history.expansion.description": "Wir begannen Operationen in mehreren Ländern und bedienten globale Kunden.",
    "about.history.growth.title": "Teamwachstum",
    "about.history.growth.description":
      "Unser Team wuchs erheblich, incorporating specialized talents in various technological areas.",
    "about.team.badge": "Unser Team",
    "about.team.title": "Lernen Sie unsere Führungskräfte kennen",
    "about.team.subtitle": "Ein erfahrenes Team mit Leidenschaft für Technologie",
    "about.team.tatiana.role": "CEO und Mitgründerin",
    "about.team.tatiana.description":
      "Strategische Visionärin mit über 20 Jahren Erfahrung in digitaler Transformation und Unternehmensführung.",
    "about.team.dener.role": "CTO und Mitgründer",
    "about.team.dener.description":
      "Spezialist für Systemarchitektur und technologische Innovation, der unsere technische Vision leitet.",
    "about.team.carlos.role": "Entwicklungsdirektor",
    "about.team.carlos.description":
      "Erfahrener technischer Leiter, spezialisiert auf agile Methodologien und qualitativ hochwertige Softwareentwicklung.",
    "about.cta.title": "Bereit, Ihr Geschäft zu Transformieren?",
    "about.cta.subtitle":
      "Kontaktieren Sie uns und entdecken Sie, wie wir Ihrem Unternehmen helfen können, neue Höhen zu erreichen",
    "about.cta.contact": "Kontaktieren Sie uns",
    "about.cta.projects": "Projekte Ansehen",

    // Careers page translations
    "careers.title": "Werden Sie Teil unseres Teams",
    "careers.subtitle":
      "Werden Sie Teil eines innovativen Unternehmens, das die Zukunft der Technologie gestaltet. Entdecken Sie einzigartige Möglichkeiten für berufliches Wachstum.",
    "careers.cta": "Jetzt Bewerben",
    "careers.parallax.title": "Gemeinsam die Zukunft Gestalten",
    "careers.parallax.subtitle":
      "Bei VianaHub glauben wir, dass große Ideen aus vielfältigen und kollaborativen Teams entstehen.",
    "careers.positions.title": "Verfügbare Möglichkeiten",
    "careers.positions.subtitle":
      "Erkunden Sie unsere aktuellen Stellenausschreibungen und finden Sie die perfekte Position für Ihr Berufsprofil.",
    "careers.positions.viewDetails": "Details Ansehen",
    "careers.positions.apply": "Bewerben",
    "careers.positions.talentBank": "Talentpool",
    "careers.positions.talentBankNote":
      "Die aufgelisteten Positionen stellen zukünftige Möglichkeiten dar. Kandidaten werden kontaktiert, wenn eine kompatible Position verfügbar wird.",
    "careers.positions.joinTalentBank": "Dem Talentpool Beitreten",

    // Contact page translations
    "contact.hero.title": "Kontakt Aufnehmen",
    "contact.hero.subtitle":
      "Wir sind hier, um Ihnen zu helfen, Ihre Ideen in die Realität umzusetzen. Kontaktieren Sie uns noch heute!",
    "contact.form.title": "Senden Sie uns eine Nachricht",
    "contact.form.name": "Name",
    "contact.form.email": "E-Mail",
    "contact.form.company": "Unternehmen",
    "contact.form.message": "Nachricht",
    "contact.form.submit": "Nachricht Senden",
    "contact.info.title": "Kontaktinformationen",
    "contact.info.email": "E-Mail",
    "contact.info.phone": "Telefon",
    "contact.info.address": "Adresse",
    "contact.info.hours": "Geschäftszeiten",
    "contact.info.hours.weekdays": "Montag bis Freitag: 9 bis 18 Uhr",
    "contact.success.title": "Nachricht Gesendet!",
    "contact.success.message": "Wir haben Ihre Nachricht erhalten und werden Sie bald kontaktieren.",
  },
}

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    // Load saved language from localStorage on mount
    const savedLanguage = localStorage.getItem("vianahub-language") as Language
    if (savedLanguage && ["pt", "en", "es", "fr", "de"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("vianahub-language", lang)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        // Fallback to Portuguese if translation not found
        value = translations.pt
        for (const fallbackKey of keys) {
          if (value && typeof value === "object" && fallbackKey in value) {
            value = value[fallbackKey]
          } else {
            return key // Return the key if no translation found
          }
        }
        break
      }
    }

    return typeof value === "string" ? value : key
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
