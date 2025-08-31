"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { WhatWeDoDropdown } from "@/components/what-we-do-dropdown"
import { EngineeringDropdown } from "@/components/engineering-dropdown"
import { SecurityDropdown } from "@/components/security-dropdown"
import { InstitutionalDropdown } from "@/components/institutional-dropdown"
import { LanguageSelector } from "@/components/language-selector"
import { useTranslation } from "@/components/translation-context"

const translations = {
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.whatWeDo": "O que Fazemos",
    "nav.engineering": "Engenharia",
    "nav.security": "Segurança",
    "nav.institutional": "Institucional",
    "nav.contact": "Contacto",
    "nav.about": "Sobre Nós",
    "nav.careers": "Carreiras",
    "nav.development": "Desenvolvimento",
    "nav.agile": "Metodologia Ágil",
    "nav.outsourcing": "Outsourcing",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.systemIntegration": "Integração de Sistemas",
    "nav.railway": "Ferroviário",
    "nav.road": "Rodoviário",
    "nav.solarEnergy": "Energia Solar",
    "nav.education": "Educação",
    "nav.government": "Governo",
    "nav.manufacturing": "Manufactura",
    "nav.financial": "Financeiro",
    "nav.retail": "Retalho",
    "nav.healthcare": "Saúde",
    "nav.cybersecurity": "Cibersegurança",
    "nav.backupSolutions": "Soluções de Backup",
    "nav.accessControl": "Controlo de Acesso",
    "nav.access": "Acesso",
    "nav.backups": "Backups",
    "nav.cyberSecurity": "Cibersegurança",
    "nav.aboutUs": "Sobre Nós",
    "nav.opportunities": "Oportunidades",
    "nav.industries": "Setores",
    "nav.security": "Segurança",
    // Hero Section
    "hero.title.line1": "Soluções que",
    "hero.title.line2": "Transformam",
    "hero.title.line3": "O Seu Negócio",
    "hero.subtitle": "Desenvolvemos tecnologias inovadoras que impulsionam o crescimento do seu negócio.",
    "hero.stats.projects": "Projetos",
    "hero.stats.clients": "Clientes",
    "hero.stats.years": "Anos",
    // Development Page
    "development.hero.title": "Desenvolvimento de Software",
    "development.hero.subtitle": "Criamos soluções tecnológicas personalizadas para transformar o seu negócio",
    "development.services.title": "Nossos Serviços de Desenvolvimento",
    "development.services.subtitle": "Oferecemos soluções completas desde o conceito até a implementação",
    "development.services.web.title": "Desenvolvimento Web",
    "development.services.web.description": "Criamos websites modernos e responsivos que elevam a sua presença digital",
    "development.services.mobile.title": "Aplicações Móveis",
    "development.services.mobile.description": "Desenvolvemos apps nativas e híbridas para iOS e Android",
    "development.services.integration.title": "Integração de Sistemas",
    "development.services.integration.description": "Conectamos os seus sistemas para maior eficiência operacional",
    "development.services.automation.title": "Automação",
    "development.services.automation.description": "Automatizamos processos para aumentar a produtividade",
    "development.features.title": "Por que Escolher os Nossos Serviços",
    "development.features.subtitle": "Trabalhamos com as mais modernas tecnologias do mercado",
    "development.features.results.title": "Resultados Rápidos",
    "development.features.results.description": "Entregamos projetos com agilidade e qualidade",
    "development.features.security.title": "Máxima Segurança",
    "development.features.security.description": "Implementamos as melhores práticas de segurança",
    "development.features.innovation.title": "Tecnologia Inovadora",
    "development.features.innovation.description": "Utilizamos as mais recentes tecnologias disponíveis",
    "development.features.experience.title": "Experiência Comprovada",
    "development.features.experience.description": "Anos de experiência no desenvolvimento de software",
    "development.cta.title": "Pronto para Transformar sua Ideia em Realidade?",
    "development.cta.subtitle": "Entre em contato conosco e vamos criar a solução perfeita para o seu negócio",
    "development.cta.button": "Fale Conosco",
    // Agile Page
    "agile.hero.title": "Metodologia Ágil",
    "agile.hero.subtitle": "Transformamos projetos complexos em entregas rápidas e eficientes",
    "agile.benefits.title": "Benefícios da Metodologia Ágil",
    "agile.benefits.subtitle": "Descubra como nossa abordagem ágil acelera o seu projeto",
    "agile.benefits.delivery.title": "Entregas Rápidas",
    "agile.benefits.delivery.description": "Dividimos projetos em sprints para entregas frequentes",
    "agile.benefits.collaboration.title": "Colaboração Efetiva",
    "agile.benefits.collaboration.description": "Trabalhamos em estreita colaboração com nossa equipe",
    "agile.benefits.flexibility.title": "Flexibilidade Total",
    "agile.benefits.flexibility.description": "Adaptamos rapidamente às mudanças de requisitos",
    "agile.benefits.quality.title": "Alta Qualidade",
    "agile.benefits.quality.description": "Testes contínuos garantem a qualidade do produto",
    "agile.process.title": "Nosso Processo Ágil",
    "agile.process.subtitle": "Como implementamos a metodologia ágil nos seus projetos",
    "agile.process.planning.title": "Planeamento",
    "agile.process.planning.description": "Definimos objetivos claros e criamos backlog do produto",
    "agile.process.sprints.title": "Sprints",
    "agile.process.sprints.description": "Desenvolvemos funcionalidades em ciclos curtos",
    "agile.process.review.title": "Revisão",
    "agile.process.review.description": "Apresentamos resultados e coletamos feedback",
    "agile.process.delivery.title": "Entrega",
    "agile.process.delivery.description": "Implementamos melhorias e preparamos próxima sprint",
    "agile.cta.title": "Acelere seu Projeto com Metodologia Ágil",
    "agile.cta.subtitle": "Vamos implementar a metodologia ágil no seu próximo projeto",
    "agile.cta.button": "Começar Agora",
    // Outsourcing Page
    "outsourcing.hero.title": "Outsourcing de TI",
    "outsourcing.hero.subtitle": "Amplie sua equipe com nossos profissionais especializados",
    "outsourcing.services.title": "Nossos Serviços de Outsourcing",
    "outsourcing.services.subtitle": "Oferecemos diferentes modelos de contratação para suas necessidades",
    "outsourcing.services.dedicated.title": "Equipe Dedicada",
    "outsourcing.services.dedicated.description": "Time completo focado exclusivamente no seu projeto",
    "outsourcing.services.offshore.title": "Desenvolvimento Offshore",
    "outsourcing.services.offshore.description": "Aproveite nossos talentos globais com custos otimizados",
    "outsourcing.services.support.title": "Suporte 24/7",
    "outsourcing.services.support.description": "Suporte técnico contínuo para seus sistemas",
    "outsourcing.services.specialists.title": "Especialistas",
    "outsourcing.services.specialists.description": "Acesso aos melhores profissionais do mercado",
    "outsourcing.benefits.title": "Vantagens do Outsourcing",
    "outsourcing.benefits.subtitle": "Descubra como o outsourcing pode beneficiar seu negócio",
    "outsourcing.benefits.costs.title": "Redução de Custos",
    "outsourcing.benefits.costs.description": "Economize até 60% em custos de desenvolvimento",
    "outsourcing.benefits.scalability.title": "Escalabilidade",
    "outsourcing.benefits.scalability.description": "Aumente ou diminua a equipe conforme necessidade",
    "outsourcing.benefits.quality.title": "Alta Qualidade",
    "outsourcing.benefits.quality.description": "Profissionais experientes e processos estabelecidos",
    "outsourcing.benefits.focus.title": "Foco no Core Business",
    "outsourcing.benefits.focus.description": "Concentre-se no que realmente importa para seu negócio",
    "outsourcing.process.title": "Nosso Processo de Outsourcing",
    "outsourcing.process.subtitle": "Como implementamos soluções de outsourcing personalizadas",
    "outsourcing.process.analysis.title": "Análise de Necessidades",
    "outsourcing.process.analysis.description": "Avaliamos suas necessidades e definimos o melhor modelo",
    "outsourcing.process.selection.title": "Seleção de Talentos",
    "outsourcing.process.selection.description": "Escolhemos os melhores profissionais para seu projeto",
    "outsourcing.process.integration.title": "Integração",
    "outsourcing.process.integration.description": "Integramos a equipe aos seus processos e cultura",
    "outsourcing.cta.title": "Pronto para Expandir sua Equipe?",
    "outsourcing.cta.subtitle": "Entre em contato e descubra como podemos ajudar seu negócio crescer",
    "outsourcing.cta.button": "Solicitar Orçamento",
    // Chatbot Page
    "chatbot.hero.title": "Chatbot Inteligente",
    "chatbot.hero.subtitle": "Automatize o atendimento ao cliente com inteligência artificial",
    "chatbot.features.title": "Funcionalidades do Chatbot",
    "chatbot.features.subtitle": "Recursos avançados para melhorar a experiência do cliente",
    "chatbot.features.conversations.title": "Conversas Naturais",
    "chatbot.features.conversations.description": "Processamento de linguagem natural para diálogos fluidos",
    "chatbot.features.availability.title": "Disponível 24/7",
    "chatbot.features.availability.description": "Atendimento ininterrupto todos os dias da semana",
    "chatbot.features.channels.title": "Multicanal",
    "chatbot.features.channels.description": "Integração com WhatsApp, site, app e redes sociais",
    "chatbot.features.analytics.title": "Relatórios Detalhados",
    "chatbot.features.analytics.description": "Análises completas sobre interações e performance",
    "chatbot.benefits.title": "Benefícios para seu Negócio",
    "chatbot.benefits.subtitle": "Como o chatbot pode transformar seu atendimento",
    "chatbot.benefits.response.title": "Resposta Instantânea",
    "chatbot.benefits.response.description": "Atendimento imediato sem tempo de espera",
    "chatbot.benefits.costs.title": "Redução de Custos",
    "chatbot.benefits.costs.description": "Diminua custos operacionais de atendimento",
    "chatbot.benefits.satisfaction.title": "Maior Satisfação",
    "chatbot.benefits.satisfaction.description": "Clientes mais satisfeitos com atendimento eficiente",
    "chatbot.benefits.scalability.title": "Escalabilidade",
    "chatbot.benefits.scalability.description": "Atenda milhares de clientes simultaneamente",
    "chatbot.demo.title": "Veja o Chatbot em Ação",
    "chatbot.demo.subtitle": "Demonstração interativa das funcionalidades",
    "chatbot.chat.bot.greeting": "Olá! Como posso ajudá-lo hoje?",
    "chatbot.chat.user.order": "Gostaria de fazer um pedido",
    "chatbot.chat.bot.options": "Perfeito! Temos várias opções disponíveis. O que você prefere?",
    "chatbot.chat.user.choice": "Quero uma pizza margherita",
    "chatbot.chat.bot.confirm": "Excelente escolha! Confirma o pedido de pizza margherita?",
    "chatbot.chat.user.confirm": "Sim, confirmo!",
    "chatbot.chat.bot.success": "Pedido confirmado! Em breve você receberá os detalhes.",
    "chatbot.cta.title": "Transforme seu Atendimento com IA",
    "chatbot.cta.subtitle": "Implemente um chatbot inteligente e revolucione a experiência do cliente",
    "chatbot.cta.button": "Solicitar Demo",
    // Landing Pages Page
    "landingPages.hero.title": "Landing Pages de Alto Impacto",
    "landingPages.hero.subtitle": "Páginas otimizadas para conversão e geração de leads qualificados",
    "landingPages.features.title": "Características das Nossas Landing Pages",
    "landingPages.features.subtitle": "Cada página é desenvolvida pensando na conversão máxima",
    "landingPages.features.conversion.title": "Alta Conversão",
    "landingPages.features.conversion.description": "Design e conteúdo otimizados para máxima taxa de conversão",
    "landingPages.features.responsive.title": "Design Responsivo",
    "landingPages.features.responsive.description": "Perfeita visualização em todos os dispositivos",
    "landingPages.features.seo.title": "SEO Otimizado",
    "landingPages.features.seo.description": "Estrutura otimizada para mecanismos de busca",
    "landingPages.features.analytics.title": "Analytics Integrado",
    "landingPages.features.analytics.description": "Acompanhamento detalhado de métricas e conversões",
    "landingPages.benefits.title": "Benefícios das Landing Pages",
    "landingPages.benefits.subtitle": "Como nossas páginas podem impulsionar seus resultados",
    "landingPages.benefits.focus.title": "Foco no Objetivo",
    "landingPages.benefits.focus.description": "Cada elemento direcionado para a conversão desejada",
    "landingPages.benefits.sales.title": "Aumento de Vendas",
    "landingPages.benefits.sales.description": "Páginas que realmente convertem visitantes em clientes",
    "landingPages.benefits.design.title": "Design Profissional",
    "landingPages.benefits.design.description": "Layout moderno e atrativo que gera confiança",
    "landingPages.benefits.speed.title": "Carregamento Rápido",
    "landingPages.benefits.speed.description": "Otimização para máxima velocidade de carregamento",
    "landingPages.cta.title": "Crie sua Landing Page de Sucesso",
    "landingPages.cta.subtitle": "Desenvolva uma página que realmente converte visitantes em clientes",
    "landingPages.cta.button": "Criar Minha Página",
    // System Integration Page
    "systemIntegration.hero.title": "Integração de Sistemas",
    "systemIntegration.hero.subtitle": "Conectamos seus sistemas para máxima eficiência operacional",
    "systemIntegration.benefits.title": "Benefícios da Integração",
    "systemIntegration.benefits.subtitle": "Como a integração pode transformar seus processos",
    "systemIntegration.benefits.connectivity.title": "Conectividade Total",
    "systemIntegration.benefits.connectivity.description": "Todos os sistemas trabalhando em perfeita harmonia",
    "systemIntegration.benefits.automation.title": "Automação de Processos",
    "systemIntegration.benefits.automation.description": "Redução de tarefas manuais e erros operacionais",
    "systemIntegration.benefits.data.title": "Dados Centralizados",
    "systemIntegration.benefits.data.description": "Visão unificada de todas as informações do negócio",
    "systemIntegration.benefits.security.title": "Segurança Avançada",
    "systemIntegration.benefits.security.description": "Protocolos de segurança em todas as integrações",
    "systemIntegration.solutions.title": "Nossas Soluções de Integração",
    "systemIntegration.solutions.subtitle": "Diferentes abordagens para conectar seus sistemas",
    "systemIntegration.solutions.apis.title": "APIs Personalizadas",
    "systemIntegration.solutions.apis.description": "Desenvolvimento de APIs para conectar diferentes sistemas",
    "systemIntegration.solutions.cloud.title": "Integração na Nuvem",
    "systemIntegration.solutions.cloud.description": "Soluções baseadas em cloud para máxima flexibilidade",
    "systemIntegration.solutions.erp.title": "Integração ERP",
    "systemIntegration.solutions.erp.description": "Conectamos ERPs com outros sistemas empresariais",
    "systemIntegration.solutions.legacy.title": "Sistemas Legados",
    "systemIntegration.solutions.legacy.description": "Modernização e integração de sistemas antigos",
    "systemIntegration.cta.title": "Integre seus Sistemas Hoje",
    "systemIntegration.cta.subtitle": "Conecte todos os seus sistemas e transforme sua operação",
    "systemIntegration.cta.button": "Solicitar Análise",
    // Railway Page
    "railway.hero.title": "Soluções Ferroviárias Avançadas",
    "railway.hero.subtitle":
      "Modernizamos sistemas ferroviários com tecnologia de ponta para transporte seguro e eficiente",
    "railway.solutions.title": "Nossas Soluções Ferroviárias",
    "railway.solutions.subtitle":
      "Oferecemos soluções completas para modernização e otimização de sistemas ferroviários",
    "railway.solutions.signaling.title": "Sinalização Inteligente",
    "railway.solutions.signaling.description":
      "Sistemas de sinalização automatizados para maior segurança e eficiência operacional",
    "railway.solutions.control.title": "Controle de Tráfego",
    "railway.solutions.control.description": "Centros de controle avançados para monitoramento e gestão em tempo real",
    "railway.solutions.maintenance.title": "Manutenção Preditiva",
    "railway.solutions.maintenance.description":
      "Sistemas de monitoramento para manutenção preventiva e redução de custos",
    "railway.solutions.passenger.title": "Sistemas de Passageiros",
    "railway.solutions.passenger.description": "Soluções para informação, bilhetagem e conforto dos passageiros",
    "railway.projects.title": "Projetos em Destaque",
    "railway.projects.subtitle": "Conheça alguns dos nossos principais projetos de modernização ferroviária",
    "railway.projects.norte.title": "Linha do Norte - Modernização",
    "railway.projects.norte.description": "Modernização completa do sistema de sinalização da Linha do Norte",
    "railway.projects.norte.status": "Concluído",
    "railway.projects.norte.year": "2023",
    "railway.projects.porto.title": "Metro do Porto - Expansão",
    "railway.projects.porto.description": "Implementação de novos sistemas de controle para expansão da rede",
    "railway.projects.porto.status": "Em Andamento",
    "railway.projects.porto.year": "2024",
    "railway.projects.viewDetails": "Ver Detalhes",
    "railway.projects.viewAll": "Ver Todos os Projetos",
    "railway.benefits.title": "Benefícios das Nossas Soluções",
    "railway.benefits.subtitle": "Descubra como nossas soluções transformam o transporte ferroviário",
    "railway.benefits.safety.title": "Segurança Máxima",
    "railway.benefits.safety.description": "Sistemas redundantes e protocolos de segurança avançados",
    "railway.benefits.efficiency.title": "Eficiência Operacional",
    "railway.benefits.efficiency.description": "Otimização de recursos e redução de tempos de viagem",
    "railway.benefits.reliability.title": "Confiabilidade",
    "railway.benefits.reliability.description": "Sistemas robustos com alta disponibilidade e baixa manutenção",
    "railway.benefits.integration.title": "Integração Total",
    "railway.benefits.integration.description": "Compatibilidade com sistemas existentes e futuros",
    "railway.features.title": "Tecnologia de Ponta para o Futuro do Transporte",
    "railway.features.subtitle":
      "Implementamos as mais avançadas tecnologias para criar sistemas ferroviários do futuro",
    "railway.features.automation": "Automação completa de processos operacionais",
    "railway.features.monitoring": "Monitoramento em tempo real 24/7",
    "railway.features.predictive": "Análise preditiva para manutenção preventiva",
    "railway.features.integration": "Integração com sistemas de gestão empresarial",
    "railway.features.compliance": "Conformidade com normas internacionais de segurança",
    "railway.cta.title": "Pronto para Modernizar seu Sistema Ferroviário?",
    "railway.cta.subtitle":
      "Entre em contato conosco e descubra como podemos transformar sua infraestrutura ferroviária",
    "railway.cta.button": "Fale Conosco",
    "railway.cta.downloadBrochure": "Baixar Brochura",
    // Road Page
    "road.hero.title": "Soluções Rodoviárias Inteligentes",
    "road.hero.subtitle": "Sistemas avançados para gestão e monitoramento de infraestrutura rodoviária",
    "road.solutions.title": "Nossas Soluções Rodoviárias",
    "road.solutions.subtitle": "Tecnologias inovadoras para otimizar o transporte rodoviário",
    "road.solutions.traffic.title": "Gestão de Tráfego",
    "road.solutions.traffic.description": "Sistemas inteligentes para controle e otimização do fluxo de tráfego",
    "road.solutions.monitoring.title": "Monitoramento de Estradas",
    "road.solutions.monitoring.description": "Sensores IoT para monitoramento contínuo das condições rodoviárias",
    "road.solutions.maintenance.title": "Manutenção Preditiva",
    "road.solutions.maintenance.description": "Análise de dados para manutenção preventiva da infraestrutura",
    "road.solutions.safety.title": "Sistemas de Segurança",
    "road.solutions.safety.description": "Tecnologias avançadas para aumentar a segurança rodoviária",
    "road.benefits.title": "Benefícios das Soluções Rodoviárias",
    "road.benefits.subtitle": "Como nossas tecnologias melhoram o transporte rodoviário",
    "road.benefits.efficiency.title": "Maior Eficiência",
    "road.benefits.efficiency.description": "Otimização do fluxo de tráfego e redução de congestionamentos",
    "road.benefits.safety.title": "Segurança Aprimorada",
    "road.benefits.safety.description": "Redução significativa de acidentes e incidentes",
    "road.benefits.costs.title": "Redução de Custos",
    "road.benefits.costs.description": "Menor custo de manutenção e operação da infraestrutura",
    "road.benefits.sustainability.title": "Sustentabilidade",
    "road.benefits.sustainability.description": "Soluções que promovem o transporte sustentável",
    "road.cta.title": "Modernize sua Infraestrutura Rodoviária",
    "road.cta.subtitle": "Implemente soluções inteligentes para o futuro do transporte rodoviário",
    "road.cta.button": "Descobrir Soluções",
    // Services Section
    "services.title.part1": "Os Nossos",
    "services.title.part2": "Serviços",
    "services.subtitle": "Oferecemos soluções tecnológicas completas para transformar o seu negócio",
    "services.web.title": "Desenvolvimento Web",
    "services.web.description": "Criamos websites modernos e responsivos que elevam a sua presença digital",
    "services.mobile.title": "Aplicações Móveis",
    "services.mobile.description": "Desenvolvemos apps nativas e híbridas para iOS e Android",
    "services.landing.title": "Landing Pages",
    "services.landing.description": "Páginas optimizadas para conversão e geração de leads",
    "services.integration.title": "Integração de Sistemas",
    "services.integration.description": "Conectamos os seus sistemas para maior eficiência operacional",
    "services.security.title": "Segurança Digital",
    "services.security.description": "Protegemos os seus dados com as melhores práticas de segurança",
    "services.automation.title": "Automação",
    "services.automation.description": "Automatizamos processos para aumentar a produtividade",
    "services.cta": "Saber Mais",
    // Projects Section
    "projects.title.part1": "Nossos",
    "projects.title.part2": "Projetos",
    "projects.subtitle": "Conheça alguns dos projetos que desenvolvemos para nossos clientes",
    "projects.cta": "Ver Todos os Projetos",
    "projects.viewProject": "Ver Projeto",
    "projects.ecommerce.title": "Plataforma de E-commerce",
    "projects.ecommerce.category": "E-commerce",
    "projects.ecommerce.description":
      "Sistema completo de vendas online com gestão de inventário, pagamentos e análises avançadas.",
    "projects.hospital.title": "Sistema de Gestão Hospitalar",
    "projects.hospital.category": "Saúde",
    "projects.hospital.description":
      "Plataforma integrada para gestão de pacientes, consultas, exames e recursos hospitalares.",
    "projects.delivery.title": "App de Entrega de Comida",
    "projects.delivery.category": "Delivery",
    "projects.delivery.description":
      "Aplicação móvel para pedidos de comida com rastreamento em tempo real e pagamentos integrados.",
    "projects.banking.title": "Sistema Bancário Digital",
    "projects.banking.category": "Financeiro",
    "projects.banking.description":
      "Plataforma bancária completa com transações seguras, gestão de contas e serviços digitais.",
    "projects.education.title": "Plataforma Educacional",
    "projects.education.category": "Educação",
    "projects.education.description":
      "Sistema de ensino online com videoconferências, gestão de cursos e avaliações automatizadas.",
    "projects.logistics.title": "Sistema de Logística",
    "projects.logistics.category": "Logística",
    "projects.logistics.description":
      "Solução completa para gestão de frotas, rastreamento de entregas e otimização de rotas.",
    "projects.streaming.title": "Plataforma de Streaming",
    "projects.streaming.category": "Entretenimento",
    "projects.streaming.description": "Sistema de streaming de vídeo com CDN global e analytics avançados.",
    "projects.crm.title": "Sistema CRM",
    "projects.crm.category": "Gestão",
    "projects.crm.description":
      "Plataforma de gestão de relacionamento com clientes com automação de vendas e marketing.",
    // Industries Section
    "industries.title.part1": "Setores que",
    "industries.title.part2": "Servimos",
    "industries.subtitle": "Oferecemos soluções especializadas para diversos setores da economia",
    "industries.cta": "Saber Mais",
    "industries.education.title": "Educação",
    "industries.education.description": "Soluções tecnológicas para instituições de ensino e plataformas educacionais",
    "industries.financial.title": "Financeiro",
    "industries.financial.description": "Sistemas seguros para bancos, fintechs e instituições financeiras",
    "industries.government.title": "Governo",
    "industries.government.description": "Plataformas digitais para modernização de serviços públicos",
    "industries.healthcare.title": "Saúde",
    "industries.healthcare.description": "Sistemas de gestão hospitalar e soluções para área da saúde",
    "industries.manufacturing.title": "Manufactura",
    "industries.manufacturing.description": "Automação e sistemas de gestão para o setor industrial",
    "industries.retail.title": "Retalho",
    "industries.retail.description": "Soluções de e-commerce e gestão para o setor de retalho",
    // Testimonials Section
    "testimonials.title.part1": "O que Dizem",
    "testimonials.title.part2": "Nossos Clientes",
    "testimonials.subtitle": "Veja o que nossos clientes falam sobre nossos serviços e soluções",
    "testimonials.kayth.name": "Kayth Cristina",
    "testimonials.kayth.company": "App NOZ!",
    "testimonials.kayth.text":
      "Nós, da App NOZ!, gostaríamos de aproveitar este momento para registrar os nossos profundos agradecimentos pelo incrível trabalho entregue na criação de nossa Landing Page.",
    "testimonials.alan.name": "Alan Antônio",
    "testimonials.alan.company": "CSU Digital",
    "testimonials.alan.text":
      "A CSU Digital expressa sincero agradecimento pelo trabalho de campanhas digitais; a equipa demonstrou ser eficiente, entregando um serviço de alta qualidade. Se busca ser visto no mercado a VianaHub é o parceiro certo.",
    "testimonials.claudio.name": "Claudio Antunes",
    "testimonials.claudio.company": "Claudio Eletricista",
    "testimonials.claudio.text":
      "Sou Claudio, da Claudio Eletricista, gerimos projetos de energias e construção civil em Portugal. Quero ressaltar o quão fundamental foi a VianaHub na criação do nosso site e implantação do nosso ERP Odoo.",
    "testimonials.wellington.name": "Wellington Silva",
    "testimonials.wellington.company": "Diagnóstica S.A.",
    "testimonials.wellington.text":
      "Agradecemos por padronizar eficientemente a gestão da nossa infraestrutura com a poderosa ferramenta Terraform. A Labtest Diagnóstica S.A. teve uma experiência positiva com os serviços prestados e recomenda a VianaHub.",
    // Insights Section
    "insights.title.part1": "Nossos",
    "insights.title.part2": "Insights",
    "insights.subtitle": "Dados e estatísticas que demonstram nosso compromisso com a excelência",
    "insights.growth.title": "Crescimento",
    "insights.growth.description": "Aumento médio na eficiência dos nossos clientes",
    "insights.experience.title": "Satisfação",
    "insights.experience.description": "Taxa de satisfação dos nossos clientes",
    "insights.innovation.title": "Inovação",
    "insights.innovation.description": "Projetos entregues com tecnologias de ponta",
    "insights.results.title": "Resultados",
    "insights.results.description": "Taxa de sucesso nos projetos entregues",
    // Entertainment Section
    "entertainment.title": "Entretenimento",
    "entertainment.subtitle": "Divirta-se com os nossos jogos interactivos",
    "entertainment.foxGame.title": "Jogo da Raposa",
    "entertainment.foxGame.description": "Ajude a raposa a encontrar o caminho através do labirinto",
    "entertainment.foxGame.cta": "Jogar Agora",
    "entertainment.desertGame.title": "Aventura no Deserto",
    "entertainment.desertGame.description": "Explore o deserto e descubra tesouros escondidos",
    "entertainment.desertGame.cta": "Explorar",
    "entertainment.oasisGame.title": "Oásis Perdido",
    "entertainment.oasisGame.description": "Encontre o oásis perdido nesta aventura épica",
    "entertainment.oasisGame.cta": "Descobrir",
    // Fox Game
    "foxGame.title": "Aventura da Raposa no Deserto",
    "foxGame.subtitle": "Ajude a raposa a encontrar o oásis através do labirinto!",
    "foxGame.nameLabel": "Digite seu nome para começar:",
    "foxGame.namePlaceholder": "Seu nome",
    "foxGame.startButton": "Começar Aventura!",
    "foxGame.howToPlay": "Como jogar:",
    "foxGame.instructions":
      "Use as setas do teclado para mover a raposa • Ou clique nas células para mover • Encontre o oásis em cada nível • Complete todos os 5 níveis o mais rápido possível!",
    "foxGame.level": "Nível",
    "foxGame.time": "Tempo",
    "foxGame.controls": "Controles",
    "foxGame.start": "Iniciar",
    "foxGame.pause": "Pausar",
    "foxGame.stop": "Parar",
    "foxGame.reset": "Reiniciar",
    "foxGame.previousLevel": "Ir para o nível anterior",
    "foxGame.nextLevel": "Ir para o próximo nível",
    "foxGame.startGame": "Iniciar o jogo",
    "foxGame.pauseGame": "Pausar o jogo",
    "foxGame.stopGame": "Encerrar o jogo e voltar ao início",
    "foxGame.resetLevel": "Reiniciar o nível atual",
    "foxGame.playing": "Jogando",
    "foxGame.stopping": "Encerrando",
    "foxGame.oasisFound": "Oásis Encontrado!",
    "foxGame.pathCompleted": "Caminho completado! Preparando próximo desafio...",
    "foxGame.currentTime": "Tempo atual:",
    "foxGame.congratulations": "Parabéns!",
    "foxGame.allLevelsCompleted": "Você completou todos os níveis em",
    "foxGame.playAgain": "Jogar Novamente",
    "foxGame.gameEnding": "Encerrando Jogo",
    "foxGame.gameEndingMessage": "O jogo está sendo encerrado...",
    "foxGame.returningToStart": "Voltando para a tela inicial",
    "foxGame.ranking.title": "Ranking dos Melhores Tempos",
    "foxGame.ranking.empty.title": "Seja o primeiro no ranking!",
    "foxGame.ranking.empty.subtitle": "Complete todos os níveis para aparecer aqui",
    "foxGame.ranking.you": "Você",
    "foxGame.ranking.footer": "Complete todos os 5 níveis o mais rápido possível para entrar no ranking!",
    "foxGame.routes": "Rotas:",
    "foxGame.routes.level1": "1 caminho principal",
    "foxGame.routes.level2": "2 caminhos possíveis",
    "foxGame.routes.level3": "3 rotas diferentes",
    "foxGame.routes.level4": "4 caminhos alternativos",
    "foxGame.routes.level5": "5 rotas para explorar",
    "foxGame.routes.multiple": "Múltiplos caminhos",
    // Footer
    "footer.companyName": "VianaHub",
    "footer.description": "Desenvolvemos tecnologias inovadoras que impulsionam o crescimento do seu negócio.",
    "footer.services": "Serviços",
    "footer.industries": "Setores",
    "footer.contact": "Contacto",
    "footer.email": "info@vianahub.com",
    "footer.phone": "+351 123 456 789",
    "footer.address": "Rua da Inovação, 123<br />4000-000 Porto, Portugal",
    "footer.copyright": "© 2024 VianaHub. Todos os direitos reservados.",
    "footer.privacy": "Privacidade",
    "footer.terms": "Termos",
    "footer.development": "Desenvolvimento",
    "footer.agile": "Metodologia Ágil",
    "footer.chatbot": "Chatbot",
    "footer.outsourcing": "Outsourcing",
    "footer.healthcare": "Saúde",
    "footer.financial": "Financeiro",
    "footer.education": "Educação",
    "footer.retail": "Retalho",
    "footer.link.industry.healthcare": "Saúde",
    "footer.link.industry.financial": "Financeiro",
    "footer.link.industry.education": "Educação",
    "footer.link.industry.retail": "Retalho",
    "footer.whatWeDo.development": "Desenvolvimento",
    "footer.whatWeDo.agile": "Metodologia Ágil",
    "footer.whatWeDo.chatbot": "Chatbot",
    "footer.whatWeDo.outsourcing": "Outsourcing",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.whatWeDo": "What We Do",
    "nav.engineering": "Engineering",
    "nav.security": "Security",
    "nav.institutional": "Institutional",
    "nav.contact": "Contact",
    "nav.about": "About Us",
    "nav.careers": "Careers",
    "nav.development": "Development",
    "nav.agile": "Agile Methodology",
    "nav.outsourcing": "Outsourcing",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.systemIntegration": "System Integration",
    "nav.railway": "Railway",
    "nav.road": "Road",
    "nav.solarEnergy": "Solar Energy",
    "nav.education": "Education",
    "nav.government": "Government",
    "nav.manufacturing": "Manufacturing",
    "nav.financial": "Financial",
    "nav.retail": "Retail",
    "nav.healthcare": "Healthcare",
    "nav.cybersecurity": "Cybersecurity",
    "nav.backupSolutions": "Backup Solutions",
    "nav.accessControl": "Access Control",
    "nav.access": "Access",
    "nav.backups": "Backups",
    "nav.cyberSecurity": "Cybersecurity",
    "nav.aboutUs": "About Us",
    "nav.opportunities": "Opportunities",
    "nav.industries": "Industries",
    "nav.security": "Security",
    // Hero Section
    "hero.title.line1": "Solutions that",
    "hero.title.line2": "Transform",
    "hero.title.line3": "Your Business",
    "hero.subtitle": "We develop innovative technologies that drive your business growth.",
    "hero.stats.projects": "Projects",
    "hero.stats.clients": "Clients",
    "hero.stats.years": "Years",
    // Development Page
    "development.hero.title": "Software Development",
    "development.hero.subtitle": "We create customized technological solutions to transform your business",
    "development.services.title": "Our Development Services",
    "development.services.subtitle": "We offer complete solutions from concept to implementation",
    "development.services.web.title": "Web Development",
    "development.services.web.description":
      "We create modern and responsive websites that elevate your digital presence",
    "development.services.mobile.title": "Mobile Applications",
    "development.services.mobile.description": "We develop native and hybrid apps for iOS and Android",
    "development.services.integration.title": "System Integration",
    "development.services.integration.description": "We connect your systems for greater operational efficiency",
    "development.services.automation.title": "Automation",
    "development.services.automation.description": "We automate processes to increase productivity",
    "development.features.title": "Why Choose Our Services",
    "development.features.subtitle": "We work with the most modern technologies in the market",
    "development.features.results.title": "Fast Results",
    "development.features.results.description": "We deliver projects with agility and quality",
    "development.features.security.title": "Maximum Security",
    "development.features.security.description": "We implement the best security practices",
    "development.features.innovation.title": "Innovative Technology",
    "development.features.innovation.description": "We use the most recent technologies available",
    "development.features.experience.title": "Proven Experience",
    "development.features.experience.description": "Years of experience in software development",
    "development.cta.title": "Ready to Transform Your Idea into Reality?",
    "development.cta.subtitle": "Contact us and let's create the perfect solution for your business",
    "development.cta.button": "Contact Us",
    // Agile Page
    "agile.hero.title": "Agile Methodology",
    "agile.hero.subtitle": "We transform complex projects into fast and efficient deliveries",
    "agile.benefits.title": "Benefits of Agile Methodology",
    "agile.benefits.subtitle": "Discover how our agile approach accelerates your project",
    "agile.benefits.delivery.title": "Fast Deliveries",
    "agile.benefits.delivery.description": "We divide projects into sprints for frequent deliveries",
    "agile.benefits.collaboration.title": "Effective Collaboration",
    "agile.benefits.collaboration.description": "We work closely with our team",
    "agile.benefits.flexibility.title": "Total Flexibility",
    "agile.benefits.flexibility.description": "We quickly adapt to changes in requirements",
    "agile.benefits.quality.title": "High Quality",
    "agile.benefits.quality.description": "Continuous testing ensures product quality",
    "agile.process.title": "Our Agile Process",
    "agile.process.subtitle": "How we implement agile methodology in your projects",
    "agile.process.planning.title": "Planning",
    "agile.process.planning.description": "We define clear objectives and create product backlog",
    "agile.process.sprints.title": "Sprints",
    "agile.process.sprints.description": "We develop features in short cycles",
    "agile.process.review.title": "Review",
    "agile.process.review.description": "We present results and collect feedback",
    "agile.process.delivery.title": "Delivery",
    "agile.process.delivery.description": "We implement improvements and prepare next sprint",
    "agile.cta.title": "Accelerate your Project with Agile Methodology",
    "agile.cta.subtitle": "Let's implement agile methodology in your next project",
    "agile.cta.button": "Start Now",
    // Outsourcing Page
    "outsourcing.hero.title": "IT Outsourcing",
    "outsourcing.hero.subtitle": "Expand your team with our specialized professionals",
    "outsourcing.services.title": "Our Outsourcing Services",
    "outsourcing.services.subtitle": "We offer different contracting models for your needs",
    "outsourcing.services.dedicated.title": "Dedicated Team",
    "outsourcing.services.dedicated.description": "Complete team focused exclusively on your project",
    "outsourcing.services.offshore.title": "Offshore Development",
    "outsourcing.services.offshore.description": "Leverage our global talents with optimized costs",
    "outsourcing.services.support.title": "24/7 Support",
    "outsourcing.services.support.description": "Continuous technical support for your systems",
    "outsourcing.services.specialists.title": "Specialists",
    "outsourcing.services.specialists.description": "Access to the best professionals in the market",
    "outsourcing.benefits.title": "Outsourcing Advantages",
    "outsourcing.benefits.subtitle": "Discover how outsourcing can benefit your business",
    "outsourcing.benefits.costs.title": "Cost Reduction",
    "outsourcing.benefits.costs.description": "Save up to 60% on development costs",
    "outsourcing.benefits.scalability.title": "Scalability",
    "outsourcing.benefits.scalability.description": "Increase or decrease team size as needed",
    "outsourcing.benefits.quality.title": "High Quality",
    "outsourcing.benefits.quality.description": "Experienced professionals and established processes",
    "outsourcing.benefits.focus.title": "Focus on Core Business",
    "outsourcing.benefits.focus.description": "Concentrate on what really matters for your business",
    "outsourcing.process.title": "Our Outsourcing Process",
    "outsourcing.process.subtitle": "How we implement customized outsourcing solutions",
    "outsourcing.process.analysis.title": "Needs Analysis",
    "outsourcing.process.analysis.description": "We assess your needs and define the best model",
    "outsourcing.process.selection.title": "Talent Selection",
    "outsourcing.process.selection.description": "We choose the best professionals for your project",
    "outsourcing.process.integration.title": "Integration",
    "outsourcing.process.integration.description": "We integrate the team to your processes and culture",
    "outsourcing.cta.title": "Ready to Expand Your Team?",
    "outsourcing.cta.subtitle": "Contact us and discover how we can help your business grow",
    "outsourcing.cta.button": "Request Quote",
    // Chatbot Page
    "chatbot.hero.title": "Intelligent Chatbot",
    "chatbot.hero.subtitle": "Automate customer service with artificial intelligence",
    "chatbot.features.title": "Chatbot Features",
    "chatbot.features.subtitle": "Advanced resources to improve customer experience",
    "chatbot.features.conversations.title": "Natural Conversations",
    "chatbot.features.conversations.description": "Natural language processing for fluid dialogues",
    "chatbot.features.availability.title": "Available 24/7",
    "chatbot.features.availability.description": "Uninterrupted service every day of the week",
    "chatbot.features.channels.title": "Multi-channel",
    "chatbot.features.channels.description": "Integration with WhatsApp, website, app and social networks",
    "chatbot.features.analytics.title": "Detailed Reports",
    "chatbot.features.analytics.description": "Complete analysis of interactions and performance",
    "chatbot.benefits.title": "Benefits for your Business",
    "chatbot.benefits.subtitle": "How chatbot can transform your service",
    "chatbot.benefits.response.title": "Instant Response",
    "chatbot.benefits.response.description": "Immediate service without waiting time",
    "chatbot.benefits.costs.title": "Cost Reduction",
    "chatbot.benefits.costs.description": "Decrease operational service costs",
    "chatbot.benefits.satisfaction.title": "Greater Satisfaction",
    "chatbot.benefits.satisfaction.description": "More satisfied customers with efficient service",
    "chatbot.benefits.scalability.title": "Scalability",
    "chatbot.benefits.scalability.description": "Serve thousands of customers simultaneously",
    "chatbot.demo.title": "See Chatbot in Action",
    "chatbot.demo.subtitle": "Interactive demonstration of features",
    "chatbot.chat.bot.greeting": "Hello! How can I help you today?",
    "chatbot.chat.user.order": "I would like to place an order",
    "chatbot.chat.bot.options": "Perfect! We have several options available. What do you prefer?",
    "chatbot.chat.user.choice": "I want a margherita pizza",
    "chatbot.chat.bot.confirm": "Excellent choice! Confirm the margherita pizza order?",
    "chatbot.chat.user.confirm": "Yes, I confirm!",
    "chatbot.chat.bot.success": "Order confirmed! You will receive the details soon.",
    "chatbot.cta.title": "Transform your Service with AI",
    "chatbot.cta.subtitle": "Implement an intelligent chatbot and revolutionize customer experience",
    "chatbot.cta.button": "Request Demo",
    // Landing Pages Page
    "landingPages.hero.title": "High-Impact Landing Pages",
    "landingPages.hero.subtitle": "Pages optimized for conversion and qualified lead generation",
    "landingPages.features.title": "Our Landing Pages Features",
    "landingPages.features.subtitle": "Each page is developed thinking about maximum conversion",
    "landingPages.features.conversion.title": "High Conversion",
    "landingPages.features.conversion.description": "Design and content optimized for maximum conversion rate",
    "landingPages.features.responsive.title": "Responsive Design",
    "landingPages.features.responsive.description": "Perfect visualization on all devices",
    "landingPages.features.seo.title": "SEO Optimized",
    "landingPages.features.seo.description": "Structure optimized for search engines",
    "landingPages.features.analytics.title": "Integrated Analytics",
    "landingPages.features.analytics.description": "Detailed tracking of metrics and conversions",
    "landingPages.benefits.title": "Landing Pages Benefits",
    "landingPages.benefits.subtitle": "How our pages can boost your results",
    "landingPages.benefits.focus.title": "Focus on Objective",
    "landingPages.benefits.focus.description": "Every element directed towards the desired conversion",
    "landingPages.benefits.sales.title": "Increase Sales",
    "landingPages.benefits.sales.description": "Pages that really convert visitors into customers",
    "landingPages.benefits.design.title": "Professional Design",
    "landingPages.benefits.design.description": "Modern and attractive layout that generates trust",
    "landingPages.benefits.speed.title": "Fast Loading",
    "landingPages.benefits.speed.description": "Optimization for maximum loading speed",
    "landingPages.cta.title": "Create your Successful Landing Page",
    "landingPages.cta.subtitle": "Develop a page that really converts visitors into customers",
    "landingPages.cta.button": "Create My Page",
    // System Integration Page
    "systemIntegration.hero.title": "System Integration",
    "systemIntegration.hero.subtitle": "We connect your systems for maximum operational efficiency",
    "systemIntegration.benefits.title": "Integration Benefits",
    "systemIntegration.benefits.subtitle": "How integration can transform your processes",
    "systemIntegration.benefits.connectivity.title": "Total Connectivity",
    "systemIntegration.benefits.connectivity.description": "All systems working in perfect harmony",
    "systemIntegration.benefits.automation.title": "Process Automation",
    "systemIntegration.benefits.automation.description": "Reduction of manual tasks and operational errors",
    "systemIntegration.benefits.data.title": "Centralized Data",
    "systemIntegration.benefits.data.description": "Unified view of all business information",
    "systemIntegration.benefits.security.title": "Advanced Security",
    "systemIntegration.benefits.security.description": "Security protocols in all integrations",
    "systemIntegration.solutions.title": "Our Integration Solutions",
    "systemIntegration.solutions.subtitle": "Different approaches to connect your systems",
    "systemIntegration.solutions.apis.title": "Custom APIs",
    "systemIntegration.solutions.apis.description": "API development to connect different systems",
    "systemIntegration.solutions.cloud.title": "Cloud Integration",
    "systemIntegration.solutions.cloud.description": "Cloud-based solutions for maximum flexibility",
    "systemIntegration.solutions.erp.title": "ERP Integration",
    "systemIntegration.solutions.erp.description": "We connect ERPs with other business systems",
    "systemIntegration.solutions.legacy.title": "Legacy Systems",
    "systemIntegration.solutions.legacy.description": "Modernization and integration of old systems",
    "systemIntegration.cta.title": "Integrate your Systems Today",
    "systemIntegration.cta.subtitle": "Connect all your systems and transform your operation",
    "systemIntegration.cta.button": "Request Analysis",
    // Railway Page
    "railway.hero.title": "Advanced Railway Solutions",
    "railway.hero.subtitle":
      "We modernize railway systems with cutting-edge technology for safe and efficient transportation",
    "railway.solutions.title": "Our Railway Solutions",
    "railway.solutions.subtitle": "We offer complete solutions for modernization and optimization of railway systems",
    "railway.solutions.signaling.title": "Intelligent Signaling",
    "railway.solutions.signaling.description":
      "Automated signaling systems for greater safety and operational efficiency",
    "railway.solutions.control.title": "Traffic Control",
    "railway.solutions.control.description": "Advanced control centers for real-time monitoring and management",
    "railway.solutions.maintenance.title": "Predictive Maintenance",
    "railway.solutions.maintenance.description": "Monitoring systems for preventive maintenance and cost reduction",
    "railway.solutions.passenger.title": "Passenger Systems",
    "railway.solutions.passenger.description": "Solutions for passenger information, ticketing and comfort",
    "railway.projects.title": "Featured Projects",
    "railway.projects.subtitle": "Learn about some of our main railway modernization projects",
    "railway.projects.norte.title": "Northern Line - Modernization",
    "railway.projects.norte.description": "Complete modernization of the Northern Line signaling system",
    "railway.projects.norte.status": "Completed",
    "railway.projects.norte.year": "2023",
    "railway.projects.porto.title": "Porto Metro - Expansion",
    "railway.projects.porto.description": "Implementation of new control systems for network expansion",
    "railway.projects.porto.status": "In Progress",
    "railway.projects.porto.year": "2024",
    "railway.projects.viewDetails": "View Details",
    "railway.projects.viewAll": "View All Projects",
    "railway.benefits.title": "Benefits of Our Solutions",
    "railway.benefits.subtitle": "Discover how our solutions transform railway transportation",
    "railway.benefits.safety.title": "Maximum Safety",
    "railway.benefits.safety.description": "Redundant systems and advanced safety protocols",
    "railway.benefits.efficiency.title": "Operational Efficiency",
    "railway.benefits.efficiency.description": "Resource optimization and travel time reduction",
    "railway.benefits.reliability.title": "Reliability",
    "railway.benefits.reliability.description": "Robust systems with high availability and low maintenance",
    "railway.benefits.integration.title": "Total Integration",
    "railway.benefits.integration.description": "Compatibility with existing and future systems",
    "railway.features.title": "Cutting-Edge Technology for the Future of Transportation",
    "railway.features.subtitle": "We implement the most advanced technologies to create railway systems of the future",
    "railway.features.automation": "Complete automation of operational processes",
    "railway.features.monitoring": "24/7 real-time monitoring",
    "railway.features.predictive": "Predictive analysis for preventive maintenance",
    "railway.features.integration": "Integration with enterprise management systems",
    "railway.features.compliance": "Compliance with international safety standards",
    "railway.cta.title": "Ready to Modernize Your Railway System?",
    "railway.cta.subtitle": "Contact us and discover how we can transform your railway infrastructure",
    "railway.cta.button": "Contact Us",
    "railway.cta.downloadBrochure": "Download Brochure",
    // Road Page
    "road.hero.title": "Smart Road Solutions",
    "road.hero.subtitle": "Advanced systems for road infrastructure management and monitoring",
    "road.solutions.title": "Our Road Solutions",
    "road.solutions.subtitle": "Innovative technologies to optimize road transportation",
    "road.solutions.traffic.title": "Traffic Management",
    "road.solutions.traffic.description": "Intelligent systems for traffic flow control and optimization",
    "road.solutions.monitoring.title": "Road Monitoring",
    "road.solutions.monitoring.description": "IoT sensors for continuous monitoring of road conditions",
    "road.solutions.maintenance.title": "Predictive Maintenance",
    "road.solutions.maintenance.description": "Data analysis for preventive infrastructure maintenance",
    "road.solutions.safety.title": "Safety Systems",
    "road.solutions.safety.description": "Advanced technologies to increase road safety",
    "road.benefits.title": "Road Solutions Benefits",
    "road.benefits.subtitle": "How our technologies improve road transportation",
    "road.benefits.efficiency.title": "Greater Efficiency",
    "road.benefits.efficiency.description": "Traffic flow optimization and congestion reduction",
    "road.benefits.safety.title": "Enhanced Safety",
    "road.benefits.safety.description": "Significant reduction of accidents and incidents",
    "road.benefits.costs.title": "Cost Reduction",
    "road.benefits.costs.description": "Lower infrastructure maintenance and operation costs",
    "road.benefits.sustainability.title": "Sustainability",
    "road.benefits.sustainability.description": "Solutions that promote sustainable transportation",
    "road.cta.title": "Modernize your Road Infrastructure",
    "road.cta.subtitle": "Implement smart solutions for the future of road transportation",
    "road.cta.button": "Discover Solutions",
    // Services Section
    "services.title.part1": "Our",
    "services.title.part2": "Services",
    "services.subtitle": "We offer complete technological solutions to transform your business",
    "services.web.title": "Web Development",
    "services.web.description": "We create modern and responsive websites that elevate your digital presence",
    "services.mobile.title": "Mobile Applications",
    "services.mobile.description": "We develop native and hybrid apps for iOS and Android",
    "services.landing.title": "Landing Pages",
    "services.landing.description": "Pages optimized for conversion and lead generation",
    "services.integration.title": "System Integration",
    "services.integration.description": "We connect your systems for greater operational efficiency",
    "services.security.title": "Digital Security",
    "services.security.description": "We protect your data with the best security practices",
    "services.automation.title": "Automation",
    "services.automation.description": "We automate processes to increase productivity",
    "services.cta": "Learn More",
    // Footer
    "footer.companyName": "VianaHub",
    "footer.description": "We develop innovative technologies that drive your business growth.",
    "footer.services": "Services",
    "footer.industries": "Industries",
    "footer.contact": "Contact",
    "footer.email": "info@vianahub.com",
    "footer.phone": "+351 123 456 789",
    "footer.address": "Rua da Inovação, 123<br />4000-000 Porto, Portugal",
    "footer.copyright": "© 2024 VianaHub. All rights reserved.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.development": "Development",
    "footer.agile": "Agile Methodology",
    "footer.chatbot": "Chatbot",
    "footer.outsourcing": "Outsourcing",
    "footer.healthcare": "Healthcare",
    "footer.financial": "Financial",
    "footer.education": "Education",
    "footer.retail": "Retail",
    "footer.link.industry.healthcare": "Healthcare",
    "footer.link.industry.financial": "Financial",
    "footer.link.industry.education": "Education",
    "footer.link.industry.retail": "Retail",
    "footer.whatWeDo.development": "Development",
    "footer.whatWeDo.agile": "Agile Methodology",
    "footer.whatWeDo.chatbot": "Chatbot",
    "footer.whatWeDo.outsourcing": "Outsourcing",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.whatWeDo": "Lo que Hacemos",
    "nav.engineering": "Ingeniería",
    "nav.security": "Seguridad",
    "nav.institutional": "Institucional",
    "nav.contact": "Contacto",
    "nav.about": "Acerca de Nosotros",
    "nav.careers": "Oportunidades de Trabajo",
    "nav.development": "Desarrollo",
    "nav.agile": "Metodología Ágil",
    "nav.outsourcing": "Contratación Externa",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Páginas de Aterrizaje",
    "nav.systemIntegration": "Integración de Sistemas",
    "nav.railway": "Ferroviario",
    "nav.road": "Rodoviario",
    "nav.solarEnergy": "Energía Solar",
    "nav.education": "Educación",
    "nav.government": "Gobierno",
    "nav.manufacturing": "Manufactura",
    "nav.financial": "Financiero",
    "nav.retail": "Retail",
    "nav.healthcare": "Salud",
    "nav.cybersecurity": "Ciberseguridad",
    "nav.backupSolutions": "Soluciones de Respaldo",
    "nav.accessControl": "Control de Acceso",
    "nav.access": "Acceso",
    "nav.backups": "Respaldos",
    "nav.cyberSecurity": "Ciberseguridad",
    "nav.aboutUs": "Acerca de Nosotros",
    "nav.opportunities": "Oportunidades",
    "nav.industries": "Industrias",
    "nav.security": "Seguridad",
    // Footer
    "footer.companyName": "VianaHub",
    "footer.description": "Desarrollamos tecnologías innovadoras que impulsan el crecimiento de tu negocio.",
    "footer.services": "Servicios",
    "footer.industries": "Industrias",
    "footer.contact": "Contacto",
    "footer.email": "info@vianahub.com",
    "footer.phone": "+351 123 456 789",
    "footer.address": "Rua da Inovação, 123<br />4000-000 Porto, Portugal",
    "footer.copyright": "© 2024 VianaHub. Todos los derechos reservados.",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",
    "footer.development": "Desarrollo",
    "footer.agile": "Metodología Ágil",
    "footer.chatbot": "Chatbot",
    "footer.outsourcing": "Contratación Externa",
    "footer.healthcare": "Salud",
    "footer.financial": "Financiero",
    "footer.education": "Educación",
    "footer.retail": "Retail",
    "footer.link.industry.healthcare": "Salud",
    "footer.link.industry.financial": "Financiero",
    "footer.link.industry.education": "Educación",
    "footer.link.industry.retail": "Retail",
    "footer.whatWeDo.development": "Desarrollo",
    "footer.whatWeDo.agile": "Metodología Ágil",
    "footer.whatWeDo.chatbot": "Chatbot",
    "footer.whatWeDo.outsourcing": "Contratación Externa",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.whatWeDo": "Ce que Nous Faisons",
    "nav.engineering": "Ingénierie",
    "nav.security": "Sécurité",
    "nav.institutional": "Institutionnel",
    "nav.contact": "Contact",
    "nav.about": "À Propos de Nous",
    "nav.careers": "Carrières",
    "nav.development": "Développement",
    "nav.agile": "Méthodologie Agile",
    "nav.outsourcing": "Outsourcing",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Pages d'Atterrissage",
    "nav.systemIntegration": "Intégration de Systèmes",
    "nav.railway": "Ferroviaire",
    "nav.road": "Route",
    "nav.solarEnergy": "Énergie Solaire",
    "nav.education": "Éducation",
    "nav.government": "Gouvernement",
    "nav.manufacturing": "Fabrication",
    "nav.financial": "Financier",
    "nav.retail": "Retail",
    "nav.healthcare": "Santé",
    "nav.cybersecurity": "Cybersécurité",
    "nav.backupSolutions": "Solutions de Sauvegarde",
    "nav.accessControl": "Contrôle d'Accès",
    "nav.access": "Accès",
    "nav.backups": "Sauvegardes",
    "nav.cyberSecurity": "Cybersécurité",
    "nav.aboutUs": "À Propos de Nous",
    "nav.opportunities": "Opportunités",
    "nav.industries": "Industries",
    "nav.security": "Sécurité",
    // Footer
    "footer.companyName": "VianaHub",
    "footer.description":
      "Nous développons des technologies innovantes qui propulsent la croissance de votre entreprise.",
    "footer.services": "Services",
    "footer.industries": "Industries",
    "footer.contact": "Contact",
    "footer.email": "info@vianahub.com",
    "footer.phone": "+351 123 456 789",
    "footer.address": "Rua da Inovação, 123<br />4000-000 Porto, Portugal",
    "footer.copyright": "© 2024 VianaHub. Tous les droits réservés.",
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.whatWeDo": "Was Wir Tun",
    "nav.engineering": "Ingenieurwesen",
    "nav.security": "Sicherheit",
    "nav.institutional": "Institutionell",
    "nav.contact": "Kontakt",
    "nav.about": "Über Uns",
    "nav.careers": "Karrieremöglichkeiten",
    "nav.development": "Entwicklung",
    "nav.agile": "Agile Methode",
    "nav.outsourcing": "Outsourcing",
    "nav.chatbot": "Chatbot",
    "nav.landingPages": "Landing Pages",
    "nav.systemIntegration": "Systemintegration",
    "nav.railway": "Eisenbahn",
    "nav.road": "Straße",
    "nav.solarEnergy": "Solarenergie",
    "nav.education": "Bildung",
    "nav.government": "Regierung",
    "nav.manufacturing": "Fertigung",
    "nav.financial": "Finanz",
    "nav.retail": "Einzelhandel",
    "nav.healthcare": "Gesundheit",
    "nav.cybersecurity": "Cybersicherheit",
    "nav.backupSolutions": "Sicherungslösungen",
    "nav.accessControl": "Zugangskontrolle",
    "nav.access": "Zugang",
    "nav.backups": "Sicherungen",
    "nav.cyberSecurity": "Cybersicherheit",
    "nav.aboutUs": "Über Uns",
    "nav.opportunities": "Chancen",
    "nav.industries": "Industrien",
    "nav.security": "Sicherheit",
    // Footer
    "footer.companyName": "VianaHub",
    "footer.description": "Wir entwickeln innovative Technologien, die das Wachstum Ihres Unternehmens fördern.",
    "footer.services": "Dienstleistungen",
    "footer.industries": "Industrien",
    "footer.contact": "Kontakt",
    "footer.email": "info@vianahub.com",
    "footer.phone": "+351 123 456 789",
    "footer.address": "Rua da Inovação, 123<br />4000-000 Porto, Portugal",
    "footer.copyright": "© 2024 VianaHub. Alle Rechte vorbehalten.",
  },
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const { t, language } = useTranslation()

  const getTranslation = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }

    return typeof value === "string" ? value : key
  }

  const handleNavigation = (path: string) => {
    router.push(path)
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 dark:bg-black/80 backdrop-blur-md border-b border-white/30 dark:border-gray-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button onClick={() => handleNavigation("/")} className="flex items-center cursor-pointer">
                <Image src="/logo.png" alt="VianaHub" width={40} height={40} className="h-10 w-auto" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <WhatWeDoDropdown />
                <EngineeringDropdown />
                <SecurityDropdown />
                <InstitutionalDropdown />
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-100 font-medium drop-shadow-lg cursor-pointer bg-transparent text-white hover:bg-yellow-500/20 hover:text-white text-sm"
                >
                  {getTranslation("nav.contact")}
                </button>
              </div>
            </div>

            {/* Right side - Language selector and theme toggle */}
            <div className="hidden lg:flex items-center space-x-4">
              <LanguageSelector />
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-yellow-500/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <Menu className="block h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Background overlay */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />

          {/* Side menu */}
          <div className="fixed top-0 left-0 h-full w-80 max-w-[80vw] bg-black/95 backdrop-blur-md border-r border-white/30 transform transition-transform duration-300 ease-in-out">
            {/* Menu header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <Image src="/logo.png" alt="VianaHub" width={32} height={32} className="h-8 w-auto" />
              <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-md text-white hover:bg-white/10">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu items */}
            <div className="py-4">
              {/* Home */}
              <button
                onClick={() => handleNavigation("/")}
                className="block w-full px-6 py-3 text-left text-white hover:bg-white/10 transition-colors"
              >
                {getTranslation("nav.home") || "Home"}
              </button>

              {/* What We Do Section */}
              <div className="border-t border-white/10 mt-2 pt-2">
                <div className="px-6 py-2 text-white/70 text-sm font-medium uppercase tracking-wide">
                  {getTranslation("nav.whatWeDo")}
                </div>
                <button
                  onClick={() => handleNavigation("/what-we-do/development")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.development")}
                </button>
                <button
                  onClick={() => handleNavigation("/what-we-do/agile")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.agile")}
                </button>
                <button
                  onClick={() => handleNavigation("/what-we-do/outsourcing")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.outsourcing")}
                </button>
                <button
                  onClick={() => handleNavigation("/what-we-do/chatbot")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.chatbot")}
                </button>
                <button
                  onClick={() => handleNavigation("/what-we-do/landing-pages")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.landingPages")}
                </button>
                <button
                  onClick={() => handleNavigation("/what-we-do/system-integration")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.systemIntegration")}
                </button>
              </div>

              {/* Engineering Section */}
              <div className="border-t border-white/10 mt-2 pt-2">
                <div className="px-6 py-2 text-white/70 text-sm font-medium uppercase tracking-wide">
                  {getTranslation("nav.engineering") || "Engineering"}
                </div>
                <button
                  onClick={() => handleNavigation("/what-we-do/railway")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.railway") || "Railway"}
                </button>
                <button
                  onClick={() => handleNavigation("/what-we-do/road")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.road") || "Road"}
                </button>
                <button
                  onClick={() => handleNavigation("/what-we-do/solar-energy")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.solarEnergy") || "Solar Energy"}
                </button>
              </div>

              {/* Security Section */}
              <div className="border-t border-white/10 mt-2 pt-2">
                <div className="px-6 py-2 text-white/70 text-sm font-medium uppercase tracking-wide">
                  {getTranslation("nav.security") || "Security"}
                </div>
                <button
                  onClick={() => handleNavigation("/security/cyber-security")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.cyberSecurity") || "Cyber Security"}
                </button>
                <button
                  onClick={() => handleNavigation("/security/access")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.access") || "Access"}
                </button>
                <button
                  onClick={() => handleNavigation("/security/backups")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.backups") || "Backups"}
                </button>
              </div>

              {/* Industries Section */}
              <div className="border-t border-white/10 mt-2 pt-2">
                <div className="px-6 py-2 text-white/70 text-sm font-medium uppercase tracking-wide">
                  {getTranslation("nav.industries") || "Industries"}
                </div>
                <button
                  onClick={() => handleNavigation("/industry/healthcare")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.healthcare") || "Healthcare"}
                </button>
                <button
                  onClick={() => handleNavigation("/industry/financial")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.financial") || "Financial"}
                </button>
                <button
                  onClick={() => handleNavigation("/industry/retail")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.retail") || "Retail"}
                </button>
                <button
                  onClick={() => handleNavigation("/industry/education")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.education") || "Education"}
                </button>
                <button
                  onClick={() => handleNavigation("/industry/government")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.government") || "Government"}
                </button>
                <button
                  onClick={() => handleNavigation("/industry/manufacturing")}
                  className="block w-full px-8 py-2 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.manufacturing") || "Manufacturing"}
                </button>
              </div>

              {/* Other Pages */}
              <div className="border-t border-white/10 mt-2 pt-2">
                <button
                  onClick={() => handleNavigation("/about")}
                  className="block w-full px-6 py-3 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.about") || "About"}
                </button>
                <button
                  onClick={() => handleNavigation("/careers")}
                  className="block w-full px-6 py-3 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.careers") || "Careers"}
                </button>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="block w-full px-6 py-3 text-left text-white hover:bg-white/10 transition-colors"
                >
                  {getTranslation("nav.contact")}
                </button>
              </div>

              {/* Language Selector */}
              <div className="border-t border-white/10 mt-4 pt-4 px-6">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
