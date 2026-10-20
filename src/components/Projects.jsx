import { useState } from 'react'
import { categories, projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  const [selected, setSelected] = useState('concluidos')
  const visible = projects.filter((project) => project.categories.includes(selected))

  return (
    <div className="section-wrapper">
      <section className="section projects" id="projects">
        <div className="full-width">
          <div className="section-heading" id="featured-projects-text">Projetos</div>

          <div className="project-technologies">
            {categories.map(({ slug, label }) => (
              <button
                key={slug}
                type="button"
                id={slug}
                className={`semi-transparent-button with-border white-button${
                  selected === slug ? ' white-button-hover' : ''
                }`}
                aria-pressed={selected === slug}
                onClick={() => setSelected(slug)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* key força a remontagem para repetir o fade-in a cada troca de aba */}
          <div className="projects-wrapper fade-in" key={selected}>
            {visible.length > 0 ? (
              visible.map((project) => <ProjectCard key={project.title} {...project} />)
            ) : (
              <p className="paragraph-text projects-empty">Nada por aqui ainda.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
