import { site } from '../data/site.js'

// Site texts in English. Missing keys fall back to pt.jsx.
export default {
  languageSelector: 'Language',
  punchline: 'Full Stack Developer | Back-end Developer | Web Developer | Data Analyst | Systems Analyst',
  nav: { about: 'ABOUT', skills: 'SKILLS', projects: 'PROJECTS', contact: 'CONTACT' },
  headings: { about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
  projects: { empty: 'Nothing here yet.' },
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  certificates: { issuedBy: 'Issued by' },
  studies: { status: { inProgress: 'In progress', recommended: 'Recommended', done: 'Completed' } },

  about: (
    <>
      <p className="paragraph-text justify-text">
        I am <strong>Jaderson da Silva Pillar Martins</strong>, a software developer with a strong focus on{' '}
        <strong>software engineering</strong>, <strong>digital infrastructure</strong> and{' '}
        <strong>process optimization</strong>. In the <strong>Brazilian Army</strong>, I maintained websites, networks,
        servers and databases.
      </p>
      <p className="paragraph-text justify-text">
        With over <strong>4 years of experience</strong>, I have taken part in <strong>12+ technical deliveries</strong>,
        worked on <strong>2 teams</strong> and helped scale <strong>2 digital projects</strong>, always focused on
        performance, stability and delivering value. Working in military tech, I found in technology a way to combine
        logic, problem solving, discipline and creativity.
      </p>
      <p className="paragraph-text justify-text">
        My work connects <strong>software engineering</strong> with <strong>operational efficiency</strong>. I build
        solutions that:
      </p>
      <ul className="paragraph-text">
        <li>🔧 Modernize legacy systems, cutting response time by up to <strong>71%</strong>;</li>
        <li>📊 Integrate real-time pipelines and dashboards with a <strong>98.9% SLA</strong>;</li>
        <li>🚀 Scale APIs and microservices, eliminating up to <strong>87%</strong> of unnecessary calls;</li>
        <li>⚙️ Automate processes, tripling operational efficiency;</li>
        <li>🛡️ Ensure high availability for large volumes of concurrent requests.</li>
      </ul>
      <p className="paragraph-text justify-text">
        How? Through <strong>applied logic</strong>, <strong>precise analysis</strong> and{' '}
        <strong>full stack execution</strong> — always aiming for real impact.
      </p>
      <p className="paragraph-text justify-text">
        <strong>Technologies I master:</strong> Java, Python, Laravel, React, PostgreSQL, MySQL, Docker, Spring, Spring
        Boot, Hibernate, HTML, CSS, JavaScript, Joomla, Flutter and Kotlin.
      </p>
      <p className="paragraph-text justify-text">
        Beyond development, I work with <strong>systems architecture</strong>, <strong>server infrastructure</strong>,{' '}
        <strong>networking</strong> and <strong>institutional web development</strong>.
      </p>
      <p className="paragraph-text justify-text">
        <strong>Languages:</strong> Portuguese (native), English (intermediate — good writing, building fluency) and
        Spanish (intermediate — good writing and pronunciation).
      </p>
      <p className="paragraph-text justify-text">
        🚀 This is where I share <strong>projects</strong>, <strong>lessons learned</strong> and{' '}
        <strong>thoughts on technology</strong>. Check out my projects on{' '}
        <a href={site.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        . My contact details are at the <a href="#extra">bottom of the page</a>.
      </p>
      <p className="paragraph-text justify-text">
        Open to <strong>new opportunities</strong>, <strong>challenges</strong> and <strong>collaborations</strong>. If
        you are looking for a committed, results-driven professional who loves technology,{' '}
        <strong>let's talk!</strong> I am ready to build great solutions.
      </p>
    </>
  ),

  skills: {
    summaryTitle: 'Summary',
    summary: [
      'Proficient in MVC and DDD for software architecture, and skilled in MySQL and PostgreSQL for database management.',
      'Expertise in JAVA, PHP and PYTHON, plus familiarity with C++.',
      'Broad experience with JOOMLA, Spring Boot, Spring, Bootstrap and Hibernate, with outstanding proficiency in the LARAVEL framework. I also know FLUTTER for cross-platform development.',
      'With this combination of skills, I am ready to take on complex challenges and deliver high-quality projects.',
    ],
  },

  contact: {
    intro: (
      <>
        Let's talk! I am open to <strong>job opportunities</strong>, <strong>freelance projects</strong>,{' '}
        <strong>open source</strong> collaborations or simply a chat about <strong>technology</strong>,{' '}
        <strong>careers</strong> or anything else that makes sense.
      </>
    ),
    phone: 'Phone',
    reply: 'I reply within 24 hours.',
    networks: 'Social',
    resume: 'Resume',
    outro: (
      <>
        Whether for <strong>projects</strong>, <strong>partnerships</strong> or a good conversation, I am here. Shall we
        build something?🚀
      </>
    ),
  },

  // Resume linked in the Contact section
  resume: { pdf: 'assets/docs/CV-Jaderson-en.pdf' },
}
