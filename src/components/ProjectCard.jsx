import { asset } from '../data/site.js'

// Links locais (ex.: PDFs em public/) precisam do prefixo base e abrem em nova aba
const linkProps = (link) =>
  /^https?:/.test(link) ? { href: link } : { href: asset(link), target: '_blank', rel: 'noreferrer' }

export default function ProjectCard({ image, link, title, demo, technologies, description }) {
  return (
    <div className="wrapper">
      <div className="card radius shadowDepth1">
        {image && (
          <div className="card__image border-tlr-radius">
            <a {...linkProps(link)}>
              <img src={asset(image)} alt={title} className="border-tlr-radius" />
            </a>
          </div>
        )}

        <div className="card__content card__padding">
          <article className="card__article">
            {/* Itens sem link (ex.: próximos estudos) mostram só o título */}
            <h2>{link ? <a {...linkProps(link)}>{title}</a> : title}</h2>
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
