"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "pt" | "en" | "es" | "fr" | "de"

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

// All translations consolidated in one place
const allTranslations = {
  pt: {
    // Navigation
    "nav.about": "Sobre",
    "nav.careers": "Carreiras",
    "nav.contact": "Contacto",
    "nav.blog": "Blog",

    // Menu items
    "menu.whatWeDo": "O que Fazemos",
    "menu.development": "Desenvolvimento",
    "menu.chatbot": "Chatbot",
    "menu.agile": "Ágil",
    "menu.integration": "Integração de Sistemas",
    "menu.landing": "Landing Pages",
    "menu.outsourcing": "Terceirização",
    "menu.engineering": "Engenharia",
    "menu.solar": "Energia Solar",
    "menu.railway": "Ferroviário",
    "menu.road": "Rodoviário",
    "menu.industry": "Indústria",
    "menu.education": "Educação",
    "menu.government": "Governo",
    "menu.manufacturing": "Manufatura",
    "menu.financial": "Financeiros",
    "menu.retail": "Varejo",
    "menu.healthcare": "Saúde",
    "menu.security": "Segurança",
    "menu.access": "Acessos",
    "menu.backups": "Backups",
    "menu.cybersecurity": "Segurança Cibernética",
    "menu.institutional": "Institucional",

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

    // Contact Page
    "contact.hero.title": "Entre em Contacto",
    "contact.hero.subtitle":
      "Estamos prontos para transformar as suas ideias em soluções digitais inovadoras. Fale connosco hoje mesmo.",
    "contact.form.title": "Envie-nos uma Mensagem",
    "contact.form.name": "Nome Completo",
    "contact.form.email": "Email",
    "contact.form.phone": "Telefone",
    "contact.form.company": "Empresa",
    "contact.form.subject": "Assunto",
    "contact.form.message": "Mensagem",
    "contact.form.submit": "Enviar Mensagem",
    "contact.form.sending": "A enviar...",
    "contact.info.title": "Informações de Contacto",
    "contact.info.address": "Morada",
    "contact.info.phone": "Telefone",
    "contact.info.email": "Email",
    "contact.info.hours": "Horário de Funcionamento",
    "contact.info.hours.weekdays": "Segunda a Sexta: 9:00 - 18:00",
    "contact.info.hours.weekend": "Sábado: 9:00 - 13:00",
    "contact.success.title": "Mensagem Enviada!",
    "contact.success.message": "Obrigado pelo seu contacto. Responderemos em breve.",

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

    // Career positions
    "careers.positions.1.title": "Desenvolvedor Full Stack Sénior",
    "careers.positions.1.department": "Desenvolvimento",
    "careers.positions.1.location": "Remoto",
    "careers.positions.1.type": "Tempo Integral",
    "careers.positions.1.description":
      "Procuramos um desenvolvedor experiente para liderar projetos de desenvolvimento web complexos usando tecnologias modernas.",

    "careers.positions.2.title": "Designer UX/UI",
    "careers.positions.2.department": "Design",
    "careers.positions.2.location": "Híbrido",
    "careers.positions.2.type": "Tempo Integral",
    "careers.positions.2.description":
      "Criamos experiências digitais excepcionais. Procuramos um designer criativo para se juntar à nossa equipa.",

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
    "foxGame.ranking.title": "🏆 Ranking dos Melhores Tempos",
    "foxGame.ranking.empty.title": "🌟 Seja o primeiro no ranking!",
    "foxGame.ranking.empty.subtitle": "Complete todos os níveis para aparecer aqui",
    "foxGame.ranking.you": "Você",
    "foxGame.ranking.footer": "Complete todos os 5 níveis o mais rápido possível para entrar no ranking!",
    "foxGame.loading": "Carregando Aventura da Raposa...",
    "foxGame.loadingSubtitle": "Preparando o deserto para sua jornada",
    "foxGame.level": "Nível",
    "foxGame.routes": "Rotas",
    "foxGame.time": "Tempo",

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

    // Projects Section
    "projects.title.part1": "Nossos",
    "projects.title.part2": "Projetos",
    "projects.subtitle": "Conheça alguns dos projetos que desenvolvemos para nossos clientes",
    "projects.cta": "Ver Todos os Projetos",
    "projects.viewProject": "Ver Projeto",

    // Testimonials Section
    "testimonials.title.part1": "Nossos",
    "testimonials.title.part2": "Depoimentos",
    "testimonials.subtitle": "Depoimentos reais de clientes que transformaram seus negócios conosco",

    // Insights Section
    "insights.title": "Insights e Resultados",
    "insights.subtitle": "Dados que comprovam nossa excelência e compromisso com resultados excepcionais",
    "insights.growth.title": "Crescimento dos Clientes",
    "insights.growth.description": "Aumento médio no crescimento dos nossos clientes após implementação",
    "insights.experience.title": "Satisfação do Cliente",
    "insights.experience.description": "Taxa de satisfação baseada em feedback direto dos clientes",
    "insights.innovation.title": "Projetos Inovadores",
    "insights.innovation.description": "Projetos que implementam tecnologias de ponta e soluções únicas",
    "insights.results.title": "Taxa de Sucesso",
    "insights.results.description": "Projetos entregues dentro do prazo e orçamento estabelecidos",
    "insights.cta": "Conheça Nossos Resultados",

    // Careers in home
    "careers.viewPositions": "Ver Vagas",

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

    // Footer
    "footer.description":
      "Transformamos ideias em soluções digitais inovadoras. Especialistas em desenvolvimento de software e consultoria em TI.",
    "footer.location": "São Paulo, SP - Brasil",
    "footer.newsletter": "Receba nossas novidades:",
    "footer.subscribe": "Inscrever",
    "footer.rights": "Todos os direitos reservados.",
    "footer.privacy": "Privacidade",
    "footer.terms": "Termos",
    "footer.cookies": "Cookies",
    "footer.whatsapp": "Atendimento WhatsApp",
    "footer.services": "Serviços",
    "footer.company": "Empresa",
    "footer.contact": "Contacto",

    // Development page
    "development.hero.title": "Desenvolvimento de Software",
    "development.hero.subtitle": "Criamos soluções digitais inovadoras e escaláveis para impulsionar seu negócio.",
    "development.services.carousel.website": "Desenvolvimento de Websites",
    "development.services.carousel.mobile": "Aplicações Mobile",
    "development.services.carousel.corporate": "Sistemas Corporativos",
    "development.services.carousel.apis": "Arquitetura de APIs",
    "development.web.title": "Desenvolvimento Web",
    "development.web.description": "Sites e aplicações web modernas, responsivas e otimizadas.",
    "development.mobile.title": "Apps Mobile",
    "development.mobile.description": "Aplicativos nativos e híbridos para iOS e Android.",
    "development.corporate.title": "Sistemas Corporativos",
    "development.corporate.description": "Soluções empresariais robustas e integradas.",
    "development.apis.title": "APIs e Integrações",
    "development.apis.description": "Desenvolvimento de APIs RESTful e integrações de sistemas.",
    "development.why.title": "Por que Escolher Nosso Desenvolvimento?",
    "development.why.subtitle":
      "Combinamos tecnologia de ponta com metodologias ágeis para entregar resultados excepcionais.",
    "development.performance.title": "Alta Performance",
    "development.performance.description": "Código otimizado para máxima velocidade e eficiência.",
    "development.security.title": "Segurança Avançada",
    "development.security.description": "Implementamos as melhores práticas de segurança digital.",
    "development.ux.title": "UX/UI Excepcional",
    "development.ux.description": "Interfaces intuitivas e experiências de usuário memoráveis.",
    "development.quality.title": "Qualidade Garantida",
    "development.quality.description": "Testes rigorosos e controle de qualidade em cada etapa.",
    "development.cta.title": "Pronto para Desenvolver?",
    "development.cta.subtitle": "Transforme suas ideias em realidade com nossa expertise em desenvolvimento.",
    "development.cta.button": "Solicitar Orçamento",
  },
  fr: {
    // Navigation
    "nav.about": "À propos",
    "nav.careers": "Carrières",
    "nav.contact": "Contact",
    "nav.blog": "Blog",

    // Menu items
    "menu.whatWeDo": "Ce Que Nous Faisons",
    "menu.development": "Développement",
    "menu.chatbot": "Chatbot",
    "menu.agile": "Agile",
    "menu.integration": "Intégration de Systèmes",
    "menu.landing": "Landing Pages",
    "menu.outsourcing": "Externalisation",
    "menu.engineering": "Ingénierie",
    "menu.solar": "Énergie Solaire",
    "menu.railway": "Ferroviaire",
    "menu.road": "Routier",
    "menu.industry": "Industrie",
    "menu.education": "Éducation",
    "menu.government": "Gouvernement",
    "menu.manufacturing": "Fabrication",
    "menu.financial": "Financiers",
    "menu.retail": "Commerce de Détail",
    "menu.healthcare": "Santé",
    "menu.security": "Sécurité",
    "menu.access": "Accès",
    "menu.backups": "Sauvegardes",
    "menu.cybersecurity": "Cybersécurité",
    "menu.institutional": "Institutionnel",

    // Hero Section
    "hero.title.line1": "Solutions Digitales",
    "hero.title.line2": "qui Transforment",
    "hero.title.line3": "votre Entreprise",
    "hero.subtitle":
      "Nous développons des technologies innovantes qui stimulent la croissance de votre entreprise. De la conception à la mise en œuvre, nous créons des solutions personnalisées qui font la différence.",
    "hero.cta.start": "Démarrer le Projet",
    "hero.cta.demo": "Voir la Démo",
    "hero.stats.projects": "Projets",
    "hero.stats.clients": "Clients",
    "hero.stats.years": "Ans",

    // About Page
    "about.hero.title": "À propos de VianaHub",
    "about.hero.subtitle":
      "Nous sommes une entreprise technologique spécialisée dans la transformation numérique, offrant des solutions innovantes qui stimulent la croissance de nos clients.",
    "about.hero.cta.history": "Notre Histoire",
    "about.hero.cta.team": "Rencontrez l'Équipe",
    "about.mission.title": "Notre Mission",
    "about.mission.description":
      "Transformer les entreprises grâce à la technologie, en offrant des solutions innovantes et personnalisées qui génèrent une valeur réelle pour nos clients et contribuent à un avenir numérique plus efficace et durable.",
    "about.vision.title": "Notre Vision",
    "about.vision.description":
      "Être reconnu comme la principale référence en solutions technologiques innovantes, en menant la transformation numérique et en créant un impact positif sur la société grâce à la technologie.",
    "about.values.badge": "Nos Valeurs",
    "about.values.title": "Ce Qui Nous Anime",
    "about.values.subtitle": "Nos valeurs fondamentales guident chaque décision et action dans notre parcours",
    "about.values.innovation.title": "Innovation",
    "about.values.innovation.description":
      "Nous recherchons constamment de nouvelles technologies et solutions pour dépasser les attentes.",
    "about.values.commitment.title": "Engagement",
    "about.values.commitment.description": "Dévouement total au succès de nos clients et partenaires commerciaux.",
    "about.values.reliability.title": "Fiabilité",
    "about.values.reliability.description":
      "Nous construisons des relations durables basées sur la confiance et la transparence.",
    "about.values.agility.title": "Agilité",
    "about.values.agility.description":
      "Nous fournissons des solutions rapides et efficaces sans compromettre la qualité.",
    "about.history.badge": "Notre Histoire",
    "about.history.title": "Un Parcours d'Innovation",
    "about.history.subtitle":
      "Plus de 15 ans à construire des solutions qui transforment les entreprises et ont un impact sur les vies",
    "about.history.foundation.title": "Fondation de VianaHub",
    "about.history.foundation.description":
      "Nous avons commencé notre parcours dans le but de transformer les entreprises grâce à la technologie, en commençant par une petite équipe de développeurs passionnés.",
    "about.history.projects.title": "Premiers Grands Projets",
    "about.history.projects.description":
      "Nous avons gagné nos premiers clients corporatifs et développé des solutions qui ont eu un impact sur des milliers d'utilisateurs.",
    "about.history.expansion.title": "Expansion Internationale",
    "about.history.expansion.description":
      "Nous avons étendu nos opérations à d'autres pays, en offrant des solutions technologiques à l'échelle mondiale.",
    "about.history.growth.title": "Croissance de l'Équipe",
    "about.history.growth.description":
      "Nous avons atteint la barre des 50+ spécialistes, consolidant notre position en tant que référence en transformation numérique.",
    "about.team.badge": "Notre Équipe",
    "about.team.title": "Leadership Expérimenté",
    "about.team.subtitle": "Rencontrez les professionnels qui dirigent notre vision et notre stratégie",
    "about.team.tatiana.role": "PDG et Fondatrice",
    "about.team.tatiana.description":
      "Administratrice et Ingénieure avec plus de 15 ans d'expérience dans la transformation numérique.",
    "about.team.dener.role": "CTO et Fondateur",
    "about.team.dener.description":
      "Analyste de Systèmes avec plus de 30 ans d'expérience dans les systèmes informatiques.",
    "about.team.carlos.role": "Directeur Commercial",
    "about.team.carlos.description": "Expert en relations clients et développement de nouvelles affaires.",
    "about.cta.title": "Prêt à Transformer Votre Entreprise ?",
    "about.cta.subtitle":
      "Contactez-nous et découvrez comment nous pouvons aider votre entreprise à atteindre de nouveaux sommets grâce à nos solutions technologiques.",
    "about.cta.contact": "Contactez-Nous",
    "about.cta.projects": "Voir Nos Projets",

    // Contact Page
    "contact.hero.title": "Contactez-Nous",
    "contact.hero.subtitle":
      "Nous sommes prêts à transformer vos idées en solutions numériques innovantes. Contactez-nous dès aujourd'hui.",
    "contact.form.title": "Envoyez-Nous un Message",
    "contact.form.name": "Nom Complet",
    "contact.form.email": "Courriel",
    "contact.form.phone": "Téléphone",
    "contact.form.company": "Entreprise",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Message",
    "contact.form.submit": "Envoyer le Message",
    "contact.form.sending": "Envoi...",
    "contact.info.title": "Informations de Contact",
    "contact.info.address": "Adresse",
    "contact.info.phone": "Téléphone",
    "contact.info.email": "Courriel",
    "contact.info.hours": "Heures d'Ouverture",
    "contact.info.hours.weekdays": "Lundi au Vendredi : 9h00 - 18h00",
    "contact.info.hours.weekend": "Samedi : 9h00 - 13h00",
    "contact.success.title": "Message Envoyé !",
    "contact.success.message": "Merci de nous avoir contactés. Nous vous répondrons sous peu.",

    // Careers Page
    "careers.title": "Rejoignez Notre Équipe",
    "careers.subtitle":
      "Découvrez des opportunités de carrière dans une entreprise innovante qui valorise le talent, la créativité et la croissance professionnelle.",
    "careers.cta": "Postuler Maintenant",
    "careers.parallax.title": "Construisez l'Avenir Avec Nous",
    "careers.parallax.subtitle":
      "Faites partie d'une équipe qui transforme le monde numérique grâce à la technologie et à l'innovation.",
    "careers.positions.title": "Opportunités Disponibles",
    "careers.positions.subtitle":
      "Explorez nos postes ouverts et trouvez l'opportunité parfaite pour votre profil professionnel.",
    "careers.positions.viewDetails": "Voir les Détails",
    "careers.positions.apply": "Postuler",
    "careers.positions.talentBank": "Banque de Talents",
    "careers.positions.talentBankNote": "Vous n'avez pas trouvé le poste idéal ? Rejoignez notre banque de talents !",
    "careers.positions.joinTalentBank": "Rejoindre la Banque de Talents",

    // Career positions
    "careers.positions.1.title": "Développeur Full Stack Senior",
    "careers.positions.1.department": "Développement",
    "careers.positions.1.location": "À Distance",
    "careers.positions.1.type": "Temps Plein",
    "careers.positions.1.description":
      "Nous recherchons un développeur expérimenté pour diriger des projets de développement web complexes en utilisant des technologies modernes.",

    "careers.positions.2.title": "Concepteur UX/UI",
    "careers.positions.2.department": "Conception",
    "careers.positions.2.location": "Hybride",
    "careers.positions.2.type": "Temps Plein",
    "careers.positions.2.description":
      "Nous créons des expériences numériques exceptionnelles. Nous recherchons un concepteur créatif pour rejoindre notre équipe.",

    "careers.positions.3.title": "Chef de Projet",
    "careers.positions.3.department": "Gestion",
    "careers.positions.3.location": "Sur Site",
    "careers.positions.3.type": "Temps Plein",
    "careers.positions.3.description":
      "Dirigez des projets technologiques du début à la fin, en assurant des livraisons de qualité dans les délais établis.",

    "careers.positions.4.title": "Spécialiste en Cybersécurité",
    "careers.positions.4.department": "Sécurité",
    "careers.positions.4.location": "À Distance",
    "careers.positions.4.type": "Temps Plein",
    "careers.positions.4.description":
      "Protégez nos systèmes et données contre les cybermenaces, en mettant en œuvre les meilleures pratiques de sécurité.",

    "careers.positions.5.title": "Analyste de Données",
    "careers.positions.5.department": "Analytique",
    "careers.positions.5.location": "Hybride",
    "careers.positions.5.type": "Temps Plein",
    "careers.positions.5.description":
      "Transformez les données en informations précieuses pour soutenir les décisions stratégiques de l'entreprise.",

    "careers.positions.6.title": "Ingénieur DevOps",
    "careers.positions.6.department": "Infrastructure",
    "careers.positions.6.location": "À Distance",
    "careers.positions.6.type": "Temps Plein",
    "careers.positions.6.description": "Automatisez et optimisez nos processus de développement et de déploiement.",

    "careers.positionDetails.description": "Description",
    "careers.positionDetails.requirements": "Exigences",
    "careers.positionDetails.responsibilities": "Responsabilités",
    "careers.positionDetails.benefits": "Avantages",
    "careers.positionDetails.salary": "Salaire",

    "careers.why.title": "Pourquoi Travailler Avec Nous ?",
    "careers.why.subtitle": "Découvrez ce qui fait de VianaHub un endroit spécial pour développer votre carrière.",
    "careers.why.innovation.title": "Innovation",
    "careers.why.innovation.description":
      "Travaillez avec les dernières technologies et participez à des projets innovants.",
    "careers.why.team.title": "Équipe",
    "careers.why.team.description":
      "Faites partie d'une équipe talentueuse et collaborative qui se soutient mutuellement.",
    "careers.why.growth.title": "Croissance",
    "careers.why.growth.description":
      "Développez vos compétences grâce à une formation continue et à des possibilités d'avancement.",
    "careers.why.wellbeing.title": "Bien-être",
    "careers.why.wellbeing.description": "Nous valorisons l'équilibre travail-vie et le bien-être de nos employés.",

    "careers.application.title": "Candidature",
    "careers.application.general": "Candidature Générale",
    "careers.application.personalInfo": "Informations Personnelles",
    "careers.application.name": "Nom Complet",
    "careers.application.email": "Courriel",
    "careers.application.phone": "Téléphone",
    "careers.application.educationExperienceTitle": "Formation et Expérience",
    "careers.application.education": "Formation Académique",
    "careers.application.educationPlaceholder": "Décrivez votre formation académique...",
    "careers.application.experience": "Expérience Professionnelle",
    "careers.application.experiencePlaceholder": "Décrivez votre expérience professionnelle pertinente...",
    "careers.application.motivation": "Motivation",
    "careers.application.motivationLabel": "Lettre de Motivation",
    "careers.application.motivationPlaceholder": "Dites-nous pourquoi vous voulez rejoindre notre équipe...",
    "careers.application.cv": "Curriculum Vitae",
    "careers.application.cvLabel": "Télécharger le CV (PDF, DOC, DOCX)",
    "careers.application.fileSelected": "Fichier sélectionné :",
    "careers.application.terms": "J'accepte les conditions générales de candidature",
    "careers.application.acceptTermsAlert":
      "Vous devez accepter les conditions générales pour soumettre la candidature.",
    "careers.application.cancel": "Annuler",
    "careers.application.submit": "Soumettre la Candidature",
    "careers.application.successMessage": "Candidature soumise avec succès ! Nous vous contacterons sous peu.",

    // Entertainment Section
    "entertainment.title": "Divertissement",

    // Fox Game
    "foxGame.title": "Aventure du Renard dans le Désert",
    "foxGame.subtitle": "Aidez le renard à trouver l'oasis à travers le labyrinthe !",
    "foxGame.nameLabel": "Entrez votre nom pour commencer :",
    "foxGame.namePlaceholder": "Votre nom ici...",
    "foxGame.startButton": "Démarrer l'Aventure !",
    "foxGame.howToPlay": "Comment jouer :",
    "foxGame.instructions":
      "• Utilisez les touches fléchées pour déplacer le renard\n• Ou cliquez sur les cellules pour vous déplacer\n• Trouvez l'oasis à chaque niveau\n• Terminez les 5 niveaux le plus rapidement possible !",
    "foxGame.ranking.title": "🏆 Classement des Meilleurs Temps",
    "foxGame.ranking.empty.title": "🌟 Soyez le premier du classement !",
    "foxGame.ranking.empty.subtitle": "Terminez tous les niveaux pour apparaître ici",
    "foxGame.ranking.you": "Vous",
    "foxGame.ranking.footer": "Terminez les 5 niveaux le plus rapidement possible pour entrer dans le classement !",
    "foxGame.loading": "Chargement de l'Aventure du Renard...",
    "foxGame.loadingSubtitle": "Préparation du désert pour votre voyage",
    "foxGame.level": "Niveau",
    "foxGame.routes": "Itinéraires",
    "foxGame.time": "Temps",

    // Industries Section
    "industries.title.part1": "Industries",
    "industries.title.part2": "Desservies",
    "industries.subtitle": "Expérience éprouvée dans divers secteurs",
    "industries.education.title": "Éducation",
    "industries.education.description": "Plateformes éducatives et systèmes de gestion académique",
    "industries.financial.title": "Financier",
    "industries.financial.description": "Solutions bancaires et systèmes de paiement sécurisés",
    "industries.government.title": "Gouvernement",
    "industries.government.description": "Systèmes publics et portails de transparence",
    "industries.healthcare.title": "Santé",
    "industries.healthcare.description": "Systèmes hospitaliers et solutions de télémédecine",
    "industries.manufacturing.title": "Fabrication",
    "industries.manufacturing.description": "Automatisation industrielle et systèmes de contrôle",
    "industries.retail.title": "Commerce de Détail",
    "industries.retail.description": "Commerce électronique et systèmes de gestion commerciale",
    "industries.cta": "Explorer",

    // Services Section
    "services.title.part1": "Nos",
    "services.title.part2": "Services",
    "services.subtitle":
      "Nous offrons des solutions technologiques complètes pour transformer votre vision en réalité numérique",
    "services.web.title": "Développement Web",
    "services.web.description":
      "Nous créons des sites et des applications web modernes, réactifs et optimisés pour la performance.",
    "services.mobile.title": "Applications Mobiles",
    "services.mobile.description":
      "Nous développons des applications natives et hybrides pour iOS et Android en mettant l'accent sur l'expérience utilisateur.",
    "services.landing.title": "Pages de Destination",
    "services.landing.description":
      "Pages de conversion optimisées pour maximiser vos résultats de marketing numérique.",
    "services.integration.title": "Intégration de Systèmes",
    "services.integration.description":
      "Nous connectons différents systèmes et plateformes pour optimiser vos processus d'affaires.",
    "services.security.title": "Sécurité Numérique",
    "services.security.description":
      "Nous mettons en œuvre des solutions de sécurité robustes pour protéger vos données et vos systèmes.",
    "services.automation.title": "Automatisation",
    "services.automation.description":
      "Nous automatisons les processus répétitifs pour accroître l'efficacité de votre entreprise.",
    "services.cta": "En Savoir Plus",

    // Projects Section
    "projects.title.part1": "Nos",
    "projects.title.part2": "Projets",
    "projects.subtitle": "Découvrez quelques-uns des projets que nous avons développés pour nos clients",
    "projects.cta": "Voir Tous les Projets",
    "projects.viewProject": "Voir le Projet",

    // Testimonials Section
    "testimonials.title.part1": "Nos",
    "testimonials.title.part2": "Témoignages",
    "testimonials.subtitle": "De vrais témoignages de clients qui ont transformé leur entreprise avec nous",

    // Insights Section
    "insights.title": "Aperçus et Résultats",
    "insights.subtitle":
      "Des données qui prouvent notre excellence et notre engagement envers des résultats exceptionnels",
    "insights.growth.title": "Croissance des Clients",
    "insights.growth.description": "Augmentation moyenne de la croissance de nos clients après la mise en œuvre",
    "insights.experience.title": "Satisfaction Client",
    "insights.experience.description": "Taux de satisfaction basé sur les commentaires directs des clients",
    "insights.innovation.title": "Projets Innovants",
    "insights.innovation.description": "Projets mettant en œuvre des technologies de pointe et des solutions uniques",
    "insights.results.title": "Taux de Réussite",
    "insights.results.description": "Projets livrés dans les délais et dans le budget établis",
    "insights.cta": "Découvrez Nos Résultats",

    // Careers in home
    "careers.viewPositions": "Voir les Postes",

    // WhatsApp Chat
    "whatsapp.title": "VianaHub Support",
    "whatsapp.status": "En ligne maintenant",
    "whatsapp.welcome":
      "Bonjour ! Comment pouvons-nous vous aider aujourd'hui ? Notre équipe est prête à répondre à vos questions sur nos services.",
    "whatsapp.placeholder": "Tapez votre message...",
    "whatsapp.continue": "Continuer sur WhatsApp",
    "whatsapp.autoReply":
      "Merci pour votre message ! Notre équipe vous répondra sous peu. Pour une assistance immédiate, appelez le +55 (11) 9999-9999.",
    "whatsapp.defaultMessage": "Bonjour ! J'aimerais en savoir plus sur les services de VianaHub.",

    // Footer
    "footer.description":
      "Nous transformons les idées en solutions numériques innovantes. Experts en développement de logiciels et en conseil informatique.",
    "footer.location": "São Paulo, SP - Brésil",
    "footer.newsletter": "Recevez nos nouveautés :",
    "footer.subscribe": "S'abonner",
    "footer.rights": "Tous droits réservés.",
    "footer.privacy": "Confidentialité",
    "footer.terms": "Conditions",
    "footer.cookies": "Cookies",
    "footer.whatsapp": "Assistance WhatsApp",
    "footer.services": "Services",
    "footer.company": "Entreprise",
    "footer.contact": "Contact",

    // Development page
    "development.hero.title": "Développement de Logiciels",
    "development.hero.subtitle":
      "Nous créons des solutions numériques innovantes et évolutives pour booster votre entreprise.",
    "development.services.carousel.website": "Développement de Sites Web",
    "development.services.carousel.mobile": "Applications Mobiles",
    "development.services.carousel.corporate": "Systèmes d'Entreprise",
    "development.services.carousel.apis": "Architecture d'APIs",
    "development.web.title": "Développement Web",
    "development.web.description": "Sites web et applications web modernes, responsives et optimisées.",
    "development.mobile.title": "Apps Mobiles",
    "development.mobile.description": "Applications natives et hybrides pour iOS et Android.",
    "development.corporate.title": "Systèmes d'Entreprise",
    "development.corporate.description": "Solutions d'entreprise robustes et intégrées.",
    "development.apis.title": "APIs et Intégrations",
    "development.apis.description": "Développement d'APIs RESTful et intégrations de systèmes.",
    "development.why.title": "Pourquoi Choisir Notre Développement?",
    "development.why.subtitle":
      "Nous combinons une technologie de pointe avec des méthodologies agiles pour livrer des résultats exceptionnels.",
    "development.performance.title": "Haute Performance",
    "development.performance.description": "Code optimisé pour une vitesse et une efficacité maximales.",
    "development.security.title": "Sécurité Avancée",
    "development.security.description": "Nous implémentons les meilleures pratiques de sécurité numérique.",
    "development.ux.title": "UX/UI Exceptionnel",
    "development.ux.description": "Interfaces intuitives et expériences utilisateur mémorables.",
    "development.quality.title": "Qualité Garantie",
    "development.quality.description": "Tests rigoureux et contrôle qualité à chaque étape.",
    "development.cta.title": "Prêt à Développer?",
    "development.cta.subtitle": "Transformez vos idées en réalité avec notre expertise en développement.",
    "development.cta.button": "Demander Devis",
  },
  de: {
    // Navigation
    "nav.about": "Über Uns",
    "nav.careers": "Karriere",
    "nav.contact": "Kontakt",
    "nav.blog": "Blog",

    // Menu items
    "menu.whatWeDo": "Was Wir Tun",
    "menu.development": "Entwicklung",
    "menu.chatbot": "Chatbot",
    "menu.agile": "Agil",
    "menu.integration": "Systemintegration",
    "menu.landing": "Landing Pages",
    "menu.outsourcing": "Outsourcing",
    "menu.engineering": "Ingenieurwesen",
    "menu.solar": "Solarenergie",
    "menu.railway": "Eisenbahn",
    "menu.road": "Straße",
    "menu.industry": "Industrie",
    "menu.education": "Bildung",
    "menu.government": "Regierung",
    "menu.manufacturing": "Fertigung",
    "menu.financial": "Finanzen",
    "menu.retail": "Einzelhandel",
    "menu.healthcare": "Gesundheitswesen",
    "menu.security": "Sicherheit",
    "menu.access": "Zugang",
    "menu.backups": "Backups",
    "menu.cybersecurity": "Cybersicherheit",
    "menu.institutional": "Institutionell",

    // Hero Section
    "hero.title.line1": "Digitale Lösungen",
    "hero.title.line2": "die Transformieren",
    "hero.title.line3": "Ihr Geschäft",
    "hero.subtitle":
      "Wir entwickeln innovative Technologien, die Ihr Geschäftswachstum vorantreiben. Von der Konzeption bis zur Umsetzung schaffen wir maßgeschneiderte Lösungen, die einen Unterschied machen.",
    "hero.cta.start": "Projekt Starten",
    "hero.cta.demo": "Demo Ansehen",
    "hero.stats.projects": "Projekte",
    "hero.stats.clients": "Kunden",
    "hero.stats.years": "Jahre",

    // About Page
    "about.hero.title": "Über VianaHub",
    "about.hero.subtitle":
      "Wir sind ein Technologieunternehmen, das sich auf digitale Transformation spezialisiert hat und innovative Lösungen anbietet, die das Wachstum unserer Kunden vorantreiben.",
    "about.hero.cta.history": "Unsere Geschichte",
    "about.hero.cta.team": "Lernen Sie das Team Kennen",
    "about.mission.title": "Unsere Mission",
    "about.mission.description":
      "Unternehmen durch Technologie zu transformieren, innovative und personalisierte Lösungen anzubieten, die einen echten Mehrwert für unsere Kunden schaffen und zu einer effizienteren und nachhaltigeren digitalen Zukunft beitragen.",
    "about.vision.title": "Unsere Vision",
    "about.vision.description":
      "Als führende Referenz für innovative technologische Lösungen anerkannt zu werden, die digitale Transformation voranzutreiben und durch Technologie einen positiven Einfluss auf die Gesellschaft auszuüben.",
    "about.values.badge": "Unsere Werte",
    "about.values.title": "Was Uns Antreibt",
    "about.values.subtitle": "Unsere grundlegenden Werte leiten jede Entscheidung und Handlung auf unserem Weg",
    "about.values.innovation.title": "Innovation",
    "about.values.innovation.description":
      "Wir suchen ständig nach neuen Technologien und Lösungen, um die Erwartungen zu übertreffen.",
    "about.values.commitment.title": "Engagement",
    "about.values.commitment.description": "Volles Engagement für den Erfolg unserer Kunden und Geschäftspartner.",
    "about.values.reliability.title": "Zuverlässigkeit",
    "about.values.reliability.description":
      "Wir bauen dauerhafte Beziehungen auf, die auf Vertrauen und Transparenz basieren.",
    "about.values.agility.title": "Agilität",
    "about.values.agility.description":
      "Wir liefern schnelle und effiziente Lösungen, ohne Kompromisse bei der Qualität einzugehen.",
    "about.history.badge": "Unsere Geschichte",
    "about.history.title": "Eine Reise der Innovation",
    "about.history.subtitle": "Über 15 Jahre Bau von Lösungen, die Unternehmen verändern und Leben beeinflussen",
    "about.history.foundation.title": "Gründung von VianaHub",
    "about.history.foundation.description":
      "Wir begannen unsere Reise mit dem Ziel, Unternehmen durch Technologie zu transformieren, beginnend mit einem kleinen Team leidenschaftlicher Entwickler.",
    "about.history.projects.title": "Erste Große Projekte",
    "about.history.projects.description":
      "Wir gewannen unsere ersten Unternehmenskunden und entwickelten Lösungen, die Tausende von Benutzern beeinflussten.",
    "about.history.expansion.title": "Internationale Expansion",
    "about.history.expansion.description":
      "Wir weiteten unsere Geschäftstätigkeit auf andere Länder aus und boten technologische Lösungen auf globaler Ebene an.",
    "about.history.growth.title": "Teamwachstum",
    "about.history.growth.description":
      "Wir erreichten die Marke von über 50 Spezialisten und festigten unsere Position als Referenz für digitale Transformation.",
    "about.team.badge": "Unser Team",
    "about.team.title": "Erfahrene Führung",
    "about.team.subtitle": "Lernen Sie die Fachleute kennen, die unsere Vision und Strategie leiten",
    "about.team.tatiana.role": "CEO & Gründerin",
    "about.team.tatiana.description":
      "Administratorin und Ingenieurin mit über 15 Jahren Erfahrung in der digitalen Transformation.",
    "about.team.dener.role": "CTO & Gründer",
    "about.team.dener.description": "Systemanalytiker mit über 30 Jahren Erfahrung in Computersystemen.",
    "about.team.carlos.role": "Kaufmännischer Leiter",
    "about.team.carlos.description": "Experte für Kundenbeziehungen und Neugeschäftsentwicklung.",
    "about.cta.title": "Bereit, Ihr Geschäft zu Transformieren?",
    "about.cta.subtitle":
      "Nehmen Sie Kontakt mit uns auf und entdecken Sie, wie wir Ihrem Unternehmen helfen können, mit unseren technologischen Lösungen neue Höhen zu erreichen.",
    "about.cta.contact": "Kontaktieren Sie Uns",
    "about.cta.projects": "Sehen Sie Sich Unsere Projekte An",

    // Contact Page
    "contact.hero.title": "Nehmen Sie Kontakt Auf",
    "contact.hero.subtitle":
      "Wir sind bereit, Ihre Ideen in innovative digitale Lösungen zu verwandeln. Kontaktieren Sie uns noch heute.",
    "contact.form.title": "Senden Sie Uns eine Nachricht",
    "contact.form.name": "Vollständiger Name",
    "contact.form.email": "E-Mail",
    "contact.form.phone": "Telefon",
    "contact.form.company": "Unternehmen",
    "contact.form.subject": "Betreff",
    "contact.form.message": "Nachricht",
    "contact.form.submit": "Nachricht Senden",
    "contact.form.sending": "Senden...",
    "contact.info.title": "Kontaktinformationen",
    "contact.info.address": "Adresse",
    "contact.info.phone": "Telefon",
    "contact.info.email": "E-Mail",
    "contact.info.hours": "Geschäftszeiten",
    "contact.info.hours.weekdays": "Montag bis Freitag: 9:00 - 18:00 Uhr",
    "contact.info.hours.weekend": "Samstag: 9:00 - 13:00 Uhr",
    "contact.success.title": "Nachricht Gesendet!",
    "contact.success.message": "Vielen Dank für Ihre Kontaktaufnahme. Wir werden uns in Kürze bei Ihnen melden.",

    // Careers Page
    "careers.title": "Werden Sie Teil Unseres Teams",
    "careers.subtitle":
      "Entdecken Sie Karrieremöglichkeiten in einem innovativen Unternehmen, das Talent, Kreativität und berufliches Wachstum schätzt.",
    "careers.cta": "Jetzt Bewerben",
    "careers.parallax.title": "Bauen Sie mit Uns die Zukunft",
    "careers.parallax.subtitle":
      "Seien Sie Teil eines Teams, das die digitale Welt durch Technologie und Innovation verändert.",
    "careers.positions.title": "Verfügbare Möglichkeiten",
    "careers.positions.subtitle":
      "Entdecken Sie unsere offenen Stellen und finden Sie die perfekte Möglichkeit für Ihr berufliches Profil.",
    "careers.positions.viewDetails": "Details Ansehen",
    "careers.positions.apply": "Bewerben",
    "careers.positions.talentBank": "Talentpool",
    "careers.positions.talentBankNote": "Nicht die ideale Position gefunden? Treten Sie unserem Talentpool bei!",
    "careers.positions.joinTalentBank": "Talentpool Beitreten",

    // Career positions
    "careers.positions.1.title": "Senior Full Stack Entwickler",
    "careers.positions.1.department": "Entwicklung",
    "careers.positions.1.location": "Remote",
    "careers.positions.1.type": "Vollzeit",
    "careers.positions.1.description":
      "Wir suchen einen erfahrenen Entwickler zur Leitung komplexer Webentwicklungsprojekte unter Verwendung moderner Technologien.",

    "careers.positions.2.title": "UX/UI Designer",
    "careers.positions.2.department": "Design",
    "careers.positions.2.location": "Hybrid",
    "careers.positions.2.type": "Vollzeit",
    "careers.positions.2.description":
      "Wir schaffen außergewöhnliche digitale Erlebnisse. Wir suchen einen kreativen Designer zur Verstärkung unseres Teams.",

    "careers.positions.3.title": "Projektmanager",
    "careers.positions.3.department": "Management",
    "careers.positions.3.location": "Vor Ort",
    "careers.positions.3.type": "Vollzeit",
    "careers.positions.3.description":
      "Leiten Sie Technologieprojekte von Anfang bis Ende und gewährleisten Sie qualitativ hochwertige Lieferungen innerhalb der festgelegten Fristen.",

    "careers.positions.4.title": "Spezialist für Cybersicherheit",
    "careers.positions.4.department": "Sicherheit",
    "careers.positions.4.location": "Remote",
    "careers.positions.4.type": "Vollzeit",
    "careers.positions.4.description":
      "Schützen Sie unsere Systeme und Daten vor Cyberbedrohungen, indem Sie die besten Sicherheitspraktiken implementieren.",

    "careers.positions.5.title": "Datenanalyst",
    "careers.positions.5.department": "Analytik",
    "careers.positions.5.location": "Hybrid",
    "careers.positions.5.type": "Vollzeit",
    "careers.positions.5.description":
      "Verwandeln Sie Daten in wertvolle Erkenntnisse, um strategische Geschäftsentscheidungen zu unterstützen.",

    "careers.positions.6.title": "DevOps Engineer",
    "careers.positions.6.department": "Infrastruktur",
    "careers.positions.6.location": "Remote",
    "careers.positions.6.type": "Vollzeit",
    "careers.positions.6.description":
      "Automatisieren und optimieren Sie unsere Entwicklungs- und Bereitstellungsprozesse.",

    "careers.positionDetails.description": "Beschreibung",
    "careers.positionDetails.requirements": "Anforderungen",
    "careers.positionDetails.responsibilities": "Verantwortlichkeiten",
    "careers.positionDetails.benefits": "Vorteile",
    "careers.positionDetails.salary": "Gehalt",

    "careers.why.title": "Warum mit Uns Arbeiten?",
    "careers.why.subtitle":
      "Entdecken Sie, was VianaHub zu einem besonderen Ort macht, um Ihre Karriere zu entwickeln.",
    "careers.why.innovation.title": "Innovation",
    "careers.why.innovation.description":
      "Arbeiten Sie mit den neuesten Technologien und nehmen Sie an innovativen Projekten teil.",
    "careers.why.team.title": "Team",
    "careers.why.team.description":
      "Seien Sie Teil eines talentierten und kollaborativen Teams, das sich gegenseitig unterstützt.",
    "careers.why.growth.title": "Wachstum",
    "careers.why.growth.description":
      "Entwickeln Sie Ihre Fähigkeiten durch kontinuierliche Weiterbildung und Aufstiegsmöglichkeiten.",
    "careers.why.wellbeing.title": "Wohlbefinden",
    "careers.why.wellbeing.description": "Wir schätzen die Work-Life-Balance und das Wohlbefinden unserer Mitarbeiter.",

    "careers.application.title": "Bewerbung",
    "careers.application.general": "Allgemeine Bewerbung",
    "careers.application.personalInfo": "Persönliche Informationen",
    "careers.application.name": "Vollständiger Name",
    "careers.application.email": "E-Mail",
    "careers.application.phone": "Telefon",
    "careers.application.educationExperienceTitle": "Ausbildung und Erfahrung",
    "careers.application.education": "Akademischer Hintergrund",
    "careers.application.educationPlaceholder": "Beschreiben Sie Ihren akademischen Hintergrund...",
    "careers.application.experience": "Berufserfahrung",
    "careers.application.experiencePlaceholder": "Beschreiben Sie Ihre relevante Berufserfahrung...",
    "careers.application.motivation": "Motivation",
    "careers.application.motivationLabel": "Motivationsschreiben",
    "careers.application.motivationPlaceholder": "Erzählen Sie uns, warum Sie unserem Team beitreten möchten...",
    "careers.application.cv": "Lebenslauf",
    "careers.application.cvLabel": "Lebenslauf Hochladen (PDF, DOC, DOCX)",
    "careers.application.fileSelected": "Datei ausgewählt:",
    "careers.application.terms": "Ich akzeptiere die Bewerbungsbedingungen",
    "careers.application.acceptTermsAlert": "Sie müssen die Bedingungen akzeptieren, um die Bewerbung einzureichen.",
    "careers.application.cancel": "Abbrechen",
    "careers.application.submit": "Bewerbung Einreichen",
    "careers.application.successMessage":
      "Bewerbung erfolgreich eingereicht! Wir werden uns in Kürze bei Ihnen melden.",

    // Entertainment Section
    "entertainment.title": "Unterhaltung",

    // Fox Game
    "foxGame.title": "Fuchs Wüstenabenteuer",
    "foxGame.subtitle": "Helfen Sie dem Fuchs, die Oase durch das Labyrinth zu finden!",
    "foxGame.nameLabel": "Geben Sie Ihren Namen ein, um zu beginnen:",
    "foxGame.namePlaceholder": "Ihr Name hier...",
    "foxGame.startButton": "Abenteuer Starten!",
    "foxGame.howToPlay": "Spielanleitung:",
    "foxGame.instructions":
      "• Verwenden Sie die Pfeiltasten, um den Fuchs zu bewegen\n• Oder klicken Sie auf Zellen, um sich zu bewegen\n• Finden Sie die Oase in jedem Level\n• Schließen Sie alle 5 Level so schnell wie möglich ab!",
    "foxGame.ranking.title": "🏆 Bestzeiten-Rangliste",
    "foxGame.ranking.empty.title": "🌟 Seien Sie der Erste in der Rangliste!",
    "foxGame.ranking.empty.subtitle": "Schließen Sie alle Level ab, um hier zu erscheinen",
    "foxGame.ranking.you": "Sie",
    "foxGame.ranking.footer": "Schließen Sie alle 5 Level so schnell wie möglich ab, um in die Rangliste zu gelangen!",
    "foxGame.loading": "Fuchs Abenteuer Laden...",
    "foxGame.loadingSubtitle": "Vorbereitung der Wüste für Ihre Reise",
    "foxGame.level": "Level",
    "foxGame.routes": "Routen",
    "foxGame.time": "Zeit",

    // Industries Section
    "industries.title.part1": "Branchen",
    "industries.title.part2": "Bedient",
    "industries.subtitle": "Bewährte Erfahrung in verschiedenen Sektoren",
    "industries.education.title": "Bildung",
    "industries.education.description": "Bildungsplattformen und akademische Managementsysteme",
    "industries.financial.title": "Finanzwesen",
    "industries.financial.description": "Banking-Lösungen und sichere Zahlungssysteme",
    "industries.government.title": "Regierung",
    "industries.government.description": "Öffentliche Systeme und Transparenzportale",
    "industries.healthcare.title": "Gesundheitswesen",
    "industries.healthcare.description": "Krankenhaussysteme und Telemedizinlösungen",
    "industries.manufacturing.title": "Fertigung",
    "industries.manufacturing.description": "Industrielle Automatisierung und Steuerungssysteme",
    "industries.retail.title": "Einzelhandel",
    "industries.retail.description": "E-Commerce- und kommerzielle Managementsysteme",
    "industries.cta": "Erkunden",

    // Services Section
    "services.title.part1": "Unsere",
    "services.title.part2": "Dienstleistungen",
    "services.subtitle": "Wir bieten komplette Technologielösungen, um Ihre Vision in digitale Realität zu verwandeln",
    "services.web.title": "Webentwicklung",
    "services.web.description":
      "Wir erstellen moderne, reaktionsschnelle und leistungsoptimierte Websites und Webanwendungen.",
    "services.mobile.title": "Mobile Anwendungen",
    "services.mobile.description":
      "Wir entwickeln native und hybride Apps für iOS und Android mit Fokus auf Benutzererfahrung.",
    "services.landing.title": "Landing Pages",
    "services.landing.description": "Konversionsoptimierte Seiten zur Maximierung Ihrer digitalen Marketingergebnisse.",
    "services.integration.title": "Systemintegration",
    "services.integration.description":
      "Wir verbinden verschiedene Systeme und Plattformen, um Ihre Geschäftsprozesse zu optimieren.",
    "services.security.title": "Digitale Sicherheit",
    "services.security.description":
      "Wir implementieren robuste Sicherheitslösungen, um Ihre Daten und Systeme zu schützen.",
    "services.automation.title": "Automatisierung",
    "services.automation.description":
      "Wir automatisieren sich wiederholende Prozesse, um die Effizienz Ihres Unternehmens zu steigern.",
    "services.cta": "Mehr Erfahren",

    // Projects Section
    "projects.title.part1": "Unsere",
    "projects.title.part2": "Projekte",
    "projects.subtitle": "Entdecken Sie einige der Projekte, die wir für unsere Kunden entwickelt haben",
    "projects.cta": "Alle Projekte Ansehen",
    "projects.viewProject": "Projekt Ansehen",

    // Testimonials Section
    "testimonials.title.part1": "Unsere",
    "testimonials.title.part2": "Testimonials",
    "testimonials.subtitle": "Echte Testimonials von Kunden, die ihr Geschäft mit uns transformiert haben",

    // Insights Section
    "insights.title": "Einblicke und Ergebnisse",
    "insights.subtitle": "Daten, die unsere Exzellenz und unser Engagement für außergewöhnliche Ergebnisse beweisen",
    "insights.growth.title": "Kundenwachstum",
    "insights.growth.description": "Durchschnittliche Wachstumssteigerung unserer Kunden nach der Implementierung",
    "insights.experience.title": "Kundenzufriedenheit",
    "insights.experience.description": "Zufriedenheitsrate basierend auf direktem Kundenfeedback",
    "insights.innovation.title": "Innovative Projekte",
    "insights.innovation.description": "Projekte, die modernste Technologien und einzigartige Lösungen implementieren",
    "insights.results.title": "Erfolgsquote",
    "insights.results.description": "Projekte, die pünktlich und innerhalb des festgelegten Budgets geliefert werden",
    "insights.cta": "Entdecken Sie Unsere Ergebnisse",

    // Careers in home
    "careers.viewPositions": "Stellen Ansehen",

    // WhatsApp Chat
    "whatsapp.title": "VianaHub Support",
    "whatsapp.status": "Jetzt online",
    "whatsapp.welcome":
      "Hallo! Wie können wir Ihnen heute helfen? Unser Team ist bereit, Ihre Fragen zu unseren Dienstleistungen zu beantworten.",
    "whatsapp.placeholder": "Geben Sie Ihre Nachricht ein...",
    "whatsapp.continue": "Auf WhatsApp Fortfahren",
    "whatsapp.autoReply":
      "Vielen Dank für Ihre Nachricht! Unser Team wird sich in Kürze bei Ihnen melden. Für sofortige Hilfe rufen Sie +55 (11) 9999-9999 an.",
    "whatsapp.defaultMessage": "Hallo! Ich möchte mehr über die Dienstleistungen von VianaHub erfahren.",

    // Footer
    "footer.description":
      "Wir verwandeln Ideen in innovative digitale Lösungen. Experten für Softwareentwicklung und IT-Beratung.",
    "footer.location": "São Paulo, SP - Brasilien",
    "footer.newsletter": "Erhalten Sie unsere Neuigkeiten:",
    "footer.subscribe": "Abonnieren",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.privacy": "Datenschutz",
    "footer.terms": "Bedingungen",
    "footer.cookies": "Cookies",
    "footer.whatsapp": "WhatsApp Support",
    "footer.services": "Dienstleistungen",
    "footer.company": "Unternehmen",
    "footer.contact": "Kontakt",

    // Development page
    "development.hero.title": "Software-Entwicklung",
    "development.hero.subtitle":
      "Wir erstellen innovative und skalierbare digitale Lösungen, um Ihr Unternehmen voranzubringen.",
    "development.services.carousel.website": "Website-Entwicklung",
    "development.services.carousel.mobile": "Mobile Anwendungen",
    "development.services.carousel.corporate": "Unternehmenssysteme",
    "development.services.carousel.apis": "API-Architektur",
    "development.web.title": "Web-Entwicklung",
    "development.web.description": "Moderne, responsive und optimierte Websites und Webanwendungen.",
    "development.mobile.title": "Mobile Apps",
    "development.mobile.description": "Native und hybride Anwendungen für iOS und Android.",
    "development.corporate.title": "Unternehmenssysteme",
    "development.corporate.description": "Robuste und integrierte Unternehmenslösungen.",
    "development.apis.title": "APIs und Integrationen",
    "development.apis.description": "RESTful API-Entwicklung und Systemintegrationen.",
    "development.why.title": "Warum Unsere Entwicklung Wählen?",
    "development.why.subtitle":
      "Wir kombinieren modernste Technologie mit agilen Methoden, um außergewöhnliche Ergebnisse zu liefern.",
    "development.performance.title": "Hohe Leistung",
    "development.performance.description": "Optimierter Code für maximale Geschwindigkeit und Effizienz.",
    "development.security.title": "Erweiterte Sicherheit",
    "development.security.description": "Wir implementieren die besten digitalen Sicherheitspraktiken.",
    "development.ux.title": "Außergewöhnliche UX/UI",
    "development.ux.description": "Intuitive Benutzeroberflächen und unvergessliche Benutzererfahrungen.",
    "development.quality.title": "Garantierte Qualität",
    "development.quality.description": "Rigorose Tests und Qualitätskontrolle in jeder Phase.",
    "development.cta.title": "Bereit zu Entwickeln?",
    "development.cta.subtitle": "Verwandeln Sie Ihre Ideen mit unserer Entwicklungsexpertise in die Realität.",
    "development.cta.button": "Angebot Anfordern",
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
