import { skillGroups } from '../data/skills.js'
import SkillBar from './SkillBar.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Skills() {
  const { t, pick } = useLanguage()
  const [architecture, languagesText, frameworks, closing] = t('skills.summary')

  return (
    <div className="section-wrapper">
      <section className="section skills" id="skills">
        <div>
          <div className="section-heading" id="skills-text">{t('headings.skills')}</div>

          <div className="skills-grid">
            <div className="what-i-do">
              <h3 className="center-align skills-subsection">{t('skills.summaryTitle')}</h3>
              {/* As quebras de linha alinham cada trecho com o grupo de barras ao lado */}
              <p className="paragraph-text center-align">
                <br />
                {architecture}
                <br /><br /><br /><br /><br /><br />
                {languagesText}
                <br /><br /><br /><br /><br />
                {frameworks}
                <br /><br />
                {closing}
              </p>
            </div>

            <div className="skills">
              {skillGroups.map((group) => (
                <div key={group.title.pt ?? group.title} className="progress-bars">
                  <h3 className="center-align skills-subsection">{pick(group.title)}</h3>
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
