import { site } from '../data/site.js'

// Textos del sitio en español. Las claves que falten usan pt.jsx.
export default {
  languageSelector: 'Idioma',
  punchline:
    'Desarrollador Full Stack | Desarrollador Back end | Desarrollador Web | Analista de Datos | Analista de Sistemas',
  nav: { about: 'SOBRE MÍ', skills: 'HABILIDADES', projects: 'PROYECTOS', contact: 'CONTACTO' },
  headings: { about: 'Sobre mí', skills: 'Habilidades', projects: 'Proyectos', contact: 'Contacto' },
  projects: { empty: 'Nada por aquí todavía.' },
  months: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  certificates: { issuedBy: 'Emitido por' },
  studies: { status: { inProgress: 'En curso', recommended: 'Recomendado', done: 'Concluido' } },

  about: (
    <>
      <p className="paragraph-text justify-text">
        Soy <strong>Jaderson da Silva Pillar Martins</strong>, desarrollador de software con fuerte actuación en{' '}
        <strong>ingeniería de software</strong>, <strong>infraestructura digital</strong> y{' '}
        <strong>optimización de procesos</strong>. Soy graduado en{' '}
        <strong>Análisis y Desarrollo de Sistemas (ADS)</strong> por el{' '}
        <strong>Instituto Federal de Mato Grosso do Sul (IFMS)</strong>. En el <strong>Ejército Brasileño</strong> me encargué del
        mantenimiento de páginas web, redes, servidores y bases de datos.
      </p>
      <p className="paragraph-text justify-text">
        Con más de <strong>4 años de experiencia</strong>, participé en <strong>+12 entregas técnicas</strong>, trabajé
        en <strong>2 equipos</strong> y ayudé a escalar <strong>2 proyectos digitales</strong>, siempre con foco en
        rendimiento, estabilidad y entrega de valor. Trabajando en tecnología militar, encontré en la tecnología una
        forma de unir lógica, resolución de problemas, disciplina y creatividad.
      </p>
      <p className="paragraph-text justify-text">
        Mi trabajo conecta la <strong>ingeniería de software</strong> con la <strong>eficiencia operativa</strong>.
        Desarrollo soluciones que:
      </p>
      <ul className="paragraph-text">
        <li>🔧 Modernizan sistemas heredados, reduciendo hasta un <strong>71%</strong> el tiempo de respuesta;</li>
        <li>📊 Integran pipelines y dashboards en tiempo real, con <strong>SLA del 98,9%</strong>;</li>
        <li>🚀 Escalan APIs y microservicios, eliminando hasta un <strong>87%</strong> de llamadas innecesarias;</li>
        <li>⚙️ Automatizan procesos, triplicando la eficiencia operativa;</li>
        <li>🛡️ Garantizan alta disponibilidad para grandes volúmenes de solicitudes simultáneas.</li>
      </ul>
      <p className="paragraph-text justify-text">
        ¿Cómo? A través de <strong>lógica aplicada</strong>, <strong>análisis preciso</strong> y{' '}
        <strong>ejecución full stack</strong> — siempre buscando generar un impacto real.
      </p>
      <p className="paragraph-text justify-text">
        <strong>Tecnologías que domino:</strong> Java, Python, Laravel, React, PostgreSQL, MySQL, Docker, Spring, Spring
        Boot, Hibernate, HTML, CSS, JavaScript, Joomla, Flutter y Kotlin.
      </p>
      <p className="paragraph-text justify-text">
        Además del desarrollo, trabajo con <strong>arquitectura de sistemas</strong>,{' '}
        <strong>infraestructura de servidores</strong>, <strong>redes</strong> y{' '}
        <strong>desarrollo web institucional</strong>.
      </p>
      <p className="paragraph-text justify-text">
        <strong>Mis idiomas:</strong> Portugués (nativo), Inglés (intermedio — buena escritura, desarrollando fluidez) y
        Español (intermedio — buena escritura y pronunciación).
      </p>
      <p className="paragraph-text justify-text">
        🚀 En este espacio comparto <strong>proyectos</strong>, <strong>aprendizajes</strong> y{' '}
        <strong>reflexiones sobre tecnología</strong>. Mira mis proyectos en{' '}
        <a href={site.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        . Mis datos de contacto están al <a href="#extra">final de la página</a>.
      </p>
      <p className="paragraph-text justify-text">
        Abierto a <strong>nuevas oportunidades</strong>, <strong>desafíos</strong> y <strong>colaboraciones</strong>. Si
        buscas un profesional comprometido, apasionado por la tecnología y enfocado en resultados,{' '}
        <strong>¡hablemos!</strong> Estoy listo para crear soluciones increíbles.
      </p>
    </>
  ),

  skills: {
    summaryTitle: 'Resumen',
    summary: [
      'Dominio de MVC y DDD para arquitectura de software, y de MySQL y PostgreSQL para la gestión de bases de datos.',
      'Experiencia en JAVA, PHP y PYTHON, además de familiaridad con C++.',
      'Amplia experiencia con JOOMLA, Spring Boot, Spring, Bootstrap e Hibernate, con un nivel de dominio excepcional del framework LARAVEL. También tengo conocimientos de FLUTTER para desarrollo multiplataforma.',
      'Con esta combinación de competencias, estoy listo para enfrentar desafíos complejos y entregar proyectos de alta calidad.',
    ],
  },

  contact: {
    intro: (
      <>
        ¿Hablamos? Estoy abierto a <strong>oportunidades de trabajo</strong>, <strong>proyectos freelance</strong>,
        colaboraciones en <strong>open source</strong> o simplemente a charlar sobre <strong>tecnología</strong>,{' '}
        <strong>carrera</strong> o lo que tenga sentido.
      </>
    ),
    phone: 'Tel',
    reply: 'Respondo en menos de 24 horas.',
    networks: 'Redes',
    resume: 'Currículum',
    outro: (
      <>
        Ya sea para <strong>proyectos</strong>, <strong>alianzas</strong> o una buena conversación, aquí estoy. ¿Construimos
        algo juntos?🚀
      </>
    ),
  },

  // Currículum enlazado en la sección de Contacto
  resume: { pdf: 'assets/docs/CV-Jaderson-es.pdf' },
}
