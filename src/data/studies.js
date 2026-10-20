import { translateAll } from '../i18n/LanguageContext.jsx'

// Itens da aba "Próximos Estudos": primeiro o que está em andamento, depois as recomendações.
// status: 'inProgress' (Em andamento), 'recommended' (Recomendado) ou 'done' (Concluído).
// Campos de texto aceitam { pt, en, es }; se faltar um idioma, aparece o português.
const studies = [
  {
    title: {
      pt: 'Desenvolvimento com Inteligência Artificial',
      en: 'AI-Assisted Development',
      es: 'Desarrollo con Inteligencia Artificial',
    },
    status: 'inProgress',
    description: {
      pt: 'Meu foco atual de estudos. Comecei a programar com assistentes de IA, e a migração deste portfólio para React + Vite foi o primeiro projeto. Estou aprendendo a escrever bons prompts, revisar o código gerado e usar a IA no dia a dia com Git e deploy automatizado.',
      en: 'My current study focus. I started coding with AI assistants, and migrating this portfolio to React + Vite was my first project. I am learning to write good prompts, review generated code and use AI day to day with Git and automated deployment.',
      es: 'Mi foco actual de estudio. Empecé a programar con asistentes de IA, y la migración de este portafolio a React + Vite fue el primer proyecto. Estoy aprendiendo a escribir buenos prompts, revisar el código generado y usar la IA en el día a día con Git y despliegue automatizado.',
    },
    technologies: [
      { pt: 'IA generativa', en: 'Generative AI', es: 'IA generativa' },
      { pt: 'Engenharia de prompt', en: 'Prompt engineering', es: 'Ingeniería de prompts' },
      'Claude Code',
    ],
  },
  {
    title: 'Power BI',
    status: 'inProgress',
    description: {
      pt: 'Análise e visualização de dados com Power Query, modelagem de dados, DAX e dashboards interativos. Dá base prática ao meu perfil de Analista de Dados.',
      en: 'Data analysis and visualization with Power Query, data modeling, DAX and interactive dashboards. It gives hands-on grounding to my Data Analyst profile.',
      es: 'Análisis y visualización de datos con Power Query, modelado de datos, DAX y dashboards interactivos. Da base práctica a mi perfil de Analista de Datos.',
    },
    technologies: ['Power BI', 'DAX', 'Power Query'],
  },
  {
    title: {
      pt: 'SQL para Análise de Dados',
      en: 'SQL for Data Analysis',
      es: 'SQL para Análisis de Datos',
    },
    status: 'recommended',
    description: {
      pt: 'Aprofundar o MySQL e o PostgreSQL que já uso com consultas analíticas (CTEs e funções de janela) e modelagem dimensional, que alimentam os relatórios no Power BI.',
      en: 'Go deeper into the MySQL and PostgreSQL I already use with analytical queries (CTEs and window functions) and dimensional modeling, which feed the Power BI reports.',
      es: 'Profundizar en el MySQL y PostgreSQL que ya uso con consultas analíticas (CTE y funciones de ventana) y modelado dimensional, que alimentan los informes en Power BI.',
    },
    technologies: [
      'SQL',
      'PostgreSQL',
      { pt: 'Modelagem dimensional', en: 'Dimensional modeling', es: 'Modelado dimensional' },
    ],
  },
  {
    title: { pt: 'Docker e CI/CD', en: 'Docker and CI/CD', es: 'Docker y CI/CD' },
    status: 'recommended',
    description: {
      pt: 'Empacotar APIs Spring Boot e Laravel em containers e automatizar testes e deploy com GitHub Actions, como já acontece na publicação deste site.',
      en: 'Package Spring Boot and Laravel APIs in containers and automate tests and deployment with GitHub Actions, as already happens when this site is published.',
      es: 'Empaquetar APIs Spring Boot y Laravel en contenedores y automatizar pruebas y despliegue con GitHub Actions, como ya ocurre al publicar este sitio.',
    },
    technologies: ['Docker', 'GitHub Actions', 'DevOps'],
  },
  {
    title: { pt: 'Computação em Nuvem', en: 'Cloud Computing', es: 'Computación en la Nube' },
    status: 'recommended',
    description: {
      pt: 'Levar minha experiência com redes, servidores Linux e segurança para a nuvem, começando pela certificação AWS Cloud Practitioner.',
      en: 'Take my experience with networks, Linux servers and security to the cloud, starting with the AWS Cloud Practitioner certification.',
      es: 'Llevar mi experiencia con redes, servidores Linux y seguridad a la nube, empezando por la certificación AWS Cloud Practitioner.',
    },
    technologies: ['AWS', 'Cloud', 'Linux'],
  },
  {
    title: { pt: 'React com TypeScript', en: 'React with TypeScript', es: 'React con TypeScript' },
    status: 'recommended',
    description: {
      pt: 'Evoluir o front end a partir deste portfólio, já em React, e somar ao back end em Java e PHP para atuar de ponta a ponta como Full Stack.',
      en: 'Grow my front-end skills starting from this portfolio, already in React, and combine them with my Java and PHP back end to work end to end as a Full Stack developer.',
      es: 'Evolucionar el front end a partir de este portafolio, ya en React, y sumarlo al back end en Java y PHP para trabajar de punta a punta como Full Stack.',
    },
    technologies: ['React', 'TypeScript', 'Vite'],
  },
]

// Converte para o mesmo formato dos projetos, usado pelo ProjectCard
export const studyCards = studies.map(({ title, status, description, technologies }) => ({
  title,
  description,
  technologies: [translateAll((code, dict) => dict.studies.status[status]), ...technologies],
  categories: ['proxEstudos'],
}))
