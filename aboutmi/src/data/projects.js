export const categories = [
  { slug: 'concluidos', label: 'Projetos Concluídos' },
  { slug: 'desenvolvimento', label: 'Projetos em Desenvolvimento' },
  { slug: 'naoImplementadas', label: 'Ideias não implementadas' },
  { slug: 'proxEstudos', label: 'Próximos Estudos' },
  { slug: 'certificacoes', label: 'Certificações' },
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
    categories: ['desenvolvimento', 'laravel'],
  },
]
