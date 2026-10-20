import { skillGroups } from '../data/skills.js'
import SkillBar from './SkillBar.jsx'

export default function Skills() {
  return (
    <div className="section-wrapper">
      <section className="section skills" id="skills">
        <div>
          <div className="section-heading" id="skills-text">Habilidades</div>

          <div className="skills-grid">
            <div className="what-i-do">
              <h3 className="center-align skills-subsection">Sumário</h3>
              <p className="paragraph-text center-align">
                <br />
                Proficiência em MVC e DDD para arquitetura de software, e domínio em MySQL e PostgreSQL para gestão de
                bancos de dados.
                <br /><br /><br /><br /><br /><br />
                Expertise em JAVA, PHP e PYTHON, além de familiaridade com C++.
                <br /><br /><br /><br /><br />
                Ampla experiência com JOOMLA, Spring Boot, Spring, Bootstrap e Hibernate, com um nível de proficiência
                excepcional no framework LARAVEL. Também possuo conhecimento em FLUTTER para desenvolvimento
                multiplataforma.
                <br /><br />
                Com esta combinação de competências, estou pronto para enfrentar desafios complexos e entregar projetos
                de alta qualidade.
              </p>
            </div>

            <div className="skills">
              {skillGroups.map((group) => (
                <div key={group.title} className="progress-bars">
                  <h3 className="center-align skills-subsection">{group.title}</h3>
                  {group.skills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
