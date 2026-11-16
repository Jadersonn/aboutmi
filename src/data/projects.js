import { certificateCards } from './certificates.js'
import { studyCards } from './studies.js'
import { ideaCards } from './ideas.js'

export const categories = [
  {
    slug: 'concluidos',
    label: { pt: 'Projetos Concluídos', en: 'Completed Projects', es: 'Proyectos Concluidos' },
  },
  {
    slug: 'desenvolvimento',
    label: { pt: 'Projetos em Desenvolvimento', en: 'Projects in Progress', es: 'Proyectos en Desarrollo' },
  },
  {
    slug: 'naoImplementadas',
    label: { pt: 'Ideias não implementadas', en: 'Unbuilt Ideas', es: 'Ideas no implementadas' },
  },
  {
    slug: 'proxEstudos',
    label: { pt: 'Próximos Estudos', en: 'Next Studies', es: 'Próximos Estudios' },
  },
  {
    slug: 'certificacoes',
    label: { pt: 'Certificações', en: 'Certifications', es: 'Certificaciones' },
  },
]

export const projects = [
  // ---------- Projetos em Desenvolvimento ----------
  {
    title: {
      pt: 'Sistema de Gestão para Rede de Óticas',
      en: 'Management System for an Optical Store Chain',
      es: 'Sistema de Gestión para una Red de Ópticas',
    },
    technologies: ['Django', 'HTMX', 'PostgreSQL', 'Docker'],
    description: {
      pt: 'Sistema interno para várias lojas de uma rede de óticas: clientes, receitas, pedidos de óculos com linha do tempo de status, pagamentos, entregas e avisos por WhatsApp. Tem login com 2FA, permissões por perfil, auditoria e LGPD (exportação e anonimização de dados). Projeto para cliente, em repositório privado.',
      en: 'Internal system for the stores of an optical chain: customers, prescriptions, glasses orders with a status timeline, payments, deliveries and WhatsApp notifications. Includes 2FA login, role-based permissions, audit logs and LGPD compliance (data export and anonymization). Client project, private repository.',
      es: 'Sistema interno para las tiendas de una red de ópticas: clientes, recetas, pedidos de anteojos con línea de tiempo de estado, pagos, entregas y avisos por WhatsApp. Incluye inicio de sesión con 2FA, permisos por perfil, auditoría y LGPD (exportación y anonimización de datos). Proyecto para cliente, en repositorio privado.',
    },
    categories: ['desenvolvimento'],
  },
  {
    title: {
      pt: 'Sistema para Consultório de Nutrição',
      en: 'Nutrition Clinic System',
      es: 'Sistema para Consultorio de Nutrición',
    },
    technologies: ['Django', 'HTMX', 'PostgreSQL', 'Docker'],
    description: {
      pt: 'Sistema para uma nutricionista: pacientes, agenda, consultas, pedidos de exames, receitas e planos alimentares em PDF, pagamentos e fila de mensagens no WhatsApp. Inclui um programa de 21 dias com turmas, leituras diárias e check-in de refeições. Segurança e LGPD desde o início, por lidar com dados de saúde. Projeto para cliente, em repositório privado.',
      en: 'System for a nutritionist: patients, scheduling, appointments, lab test requests, prescriptions and meal plans as PDFs, payments and a WhatsApp message queue. Includes a 21-day program with groups, daily readings and meal check-ins. Security and LGPD compliance from day one, since it handles health data. Client project, private repository.',
      es: 'Sistema para una nutricionista: pacientes, agenda, consultas, pedidos de exámenes, recetas y planes alimentarios en PDF, pagos y cola de mensajes de WhatsApp. Incluye un programa de 21 días con grupos, lecturas diarias y check-in de comidas. Seguridad y LGPD desde el inicio, por manejar datos de salud. Proyecto para cliente, en repositorio privado.',
    },
    categories: ['desenvolvimento'],
  },
  {
    title: {
      pt: 'Sites Institucionais para Pequenos Negócios',
      en: 'Websites for Small Businesses',
      es: 'Sitios Institucionales para Pequeños Negocios',
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: {
      pt: 'Sites de página única, leves e sem dependências, para uma ótica e para uma nutricionista: vitrine de produtos e serviços, orçamento pelo WhatsApp, mapa, horário de funcionamento e foco no celular.',
      en: 'Lightweight, dependency-free single-page websites for an optical store and a nutritionist: product and service showcase, quotes via WhatsApp, map, opening hours and a mobile-first layout.',
      es: 'Sitios de una sola página, livianos y sin dependencias, para una óptica y una nutricionista: vitrina de productos y servicios, presupuesto por WhatsApp, mapa, horario de atención y diseño pensado para el celular.',
    },
    categories: ['desenvolvimento'],
  },

  // ---------- Projetos Concluídos ----------
  {
    image: 'assets/images/login-funcional.png',
    link: 'https://github.com/Jadersonn/AppCertificadosLaravel',
    title: 'AppCertificadosLaravel',
    demo: 'https://github.com/Jadersonn/AppCertificadosLaravel',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Docker'],
    description: {
      pt: 'Sistema web para o IFMS Campus Corumbá gerenciar e emitir certificados de atividades complementares dos alunos, com áreas separadas para alunos e professores.',
      en: 'Web system for IFMS Corumbá Campus to manage and issue certificates for students’ complementary activities, with separate areas for students and teachers.',
      es: 'Sistema web para el IFMS Campus Corumbá que gestiona y emite certificados de actividades complementarias de los alumnos, con áreas separadas para alumnos y profesores.',
    },
    categories: ['concluidos', 'laravel'],
  },
  ...ideaCards,
  ...studyCards,
  ...certificateCards,
]
