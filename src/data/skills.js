const BLUE = { title: '#2980b9', bar: '#3498db' }
const RED = { title: '#db3434', bar: '#e72727' }

export const skillGroups = [
  {
    title: { pt: 'Padrões de Linguagens', en: 'Design Patterns', es: 'Patrones de Diseño' },
    skills: [
      { name: 'MVC', percent: 90 },
      { name: 'DDD', percent: 70 },
    ],
  },
  {
    title: { pt: 'Banco de Dados', en: 'Databases', es: 'Bases de Datos' },
    skills: [
      { name: 'MySQL', percent: 80 },
      { name: 'PostgreSQL', percent: 70 },
    ],
  },
  {
    title: { pt: 'Linguagens', en: 'Languages', es: 'Lenguajes' },
    skills: [
      { name: 'JAVA', percent: 90 },
      { name: 'PHP', percent: 80 },
      { name: 'PYTHON', percent: 80 },
      { name: 'C++', percent: 45 },
    ],
  },
  {
    title: 'FRAMEWORKS',
    skills: [
      { name: 'JOOMLA', percent: 90 },
      { name: 'LARAVEL', percent: 90, color: RED },
      { name: 'SPRINGBOOT', percent: 80 },
      { name: 'SPRING', percent: 80 },
      { name: 'FLUTTER', percent: 45 },
      { name: 'BOOTSTRAP', percent: 70 },
      { name: 'HIBERNATE', percent: 45 },
    ],
  },
].map((group) => ({
  ...group,
  skills: group.skills.map((skill) => ({ color: BLUE, ...skill })),
}))
