// Itens da aba "Próximos Estudos": primeiro o que está em andamento, depois as recomendações.
const studies = [
  {
    title: 'Desenvolvimento com Inteligência Artificial',
    status: 'Em andamento',
    description:
      'Meu foco atual de estudos. Comecei a programar com assistentes de IA, e a migração deste portfólio para React + Vite foi o primeiro projeto. Estou aprendendo a escrever bons prompts, revisar o código gerado e usar a IA no dia a dia com Git e deploy automatizado.',
    technologies: ['IA generativa', 'Engenharia de prompt', 'Claude Code'],
  },
  {
    title: 'Power BI',
    status: 'Em andamento',
    description:
      'Análise e visualização de dados com Power Query, modelagem de dados, DAX e dashboards interativos. Dá base prática ao meu perfil de Analista de Dados.',
    technologies: ['Power BI', 'DAX', 'Power Query'],
  },
  {
    title: 'SQL para Análise de Dados',
    status: 'Recomendado',
    description:
      'Aprofundar o MySQL e o PostgreSQL que já uso com consultas analíticas (CTEs e funções de janela) e modelagem dimensional, que alimentam os relatórios no Power BI.',
    technologies: ['SQL', 'PostgreSQL', 'Modelagem dimensional'],
  },
  {
    title: 'Docker e CI/CD',
    status: 'Recomendado',
    description:
      'Empacotar APIs Spring Boot e Laravel em containers e automatizar testes e deploy com GitHub Actions, como já acontece na publicação deste site.',
    technologies: ['Docker', 'GitHub Actions', 'DevOps'],
  },
  {
    title: 'Computação em Nuvem',
    status: 'Recomendado',
    description:
      'Levar minha experiência com redes, servidores Linux e segurança para a nuvem, começando pela certificação AWS Cloud Practitioner.',
    technologies: ['AWS', 'Cloud', 'Linux'],
  },
  {
    title: 'React com TypeScript',
    status: 'Recomendado',
    description:
      'Evoluir o front end a partir deste portfólio, já em React, e somar ao back end em Java e PHP para atuar de ponta a ponta como Full Stack.',
    technologies: ['React', 'TypeScript', 'Vite'],
  },
]

// Converte para o mesmo formato dos projetos, usado pelo ProjectCard
export const studyCards = studies.map(({ title, status, description, technologies }) => ({
  title,
  description,
  technologies: [status, ...technologies],
  categories: ['proxEstudos'],
}))
