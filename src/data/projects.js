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
  {
    image: 'assets/images/login-funcional.png',
    link: 'https://github.com/Jadersonn/AppCertificadosLaravel',
    title: 'AppCertificadosLaravel',
    demo: 'https://github.com/Jadersonn/AppCertificadosLaravel',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    description:
      'A web application for generating and managing certificates. Built with Laravel, it allows users to create, issue, and track certificates efficiently.',
    categories: ['concluidos', 'laravel'],
  },
  ...ideaCards,
  ...studyCards,
  ...certificateCards,
]
