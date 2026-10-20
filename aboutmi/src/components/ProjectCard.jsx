import { asset } from '../data/site.js'

export default function ProjectCard({ image, link, title, demo, technologies, description }) {
  return (
    <div className="wrapper">
      <div className="card radius shadowDepth1">
        {image && (
          <div className="card__image border-tlr-radius">
            <a href={link}>
              <img src={asset(image)} alt={title} className="border-tlr-radius" />
            </a>
          </div>
        )}

        <div className="card__content card__padding">
          <article className="card__article">
            <h2>
              <a href={link}>{title}</a>
            </h2>
            <p className="paragraph-text-normal">
              {description} {demo && <a href={demo}>Demo</a>}
            </p>
          </article>

          <div className="card__meta">
            {technologies.map((tech) => (
              <span key={tech} className="project-technology paragraph-text-normal">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
