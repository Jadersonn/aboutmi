import { site, asset } from '../data/site.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const socials = [
  { href: `mailto:${site.email}`, label: 'Email', icon: 'fas fa-envelope' },
  { href: site.linkedin, label: 'LinkedIn', icon: 'fab fa-linkedin' },
  { href: site.github, label: 'GitHub', icon: 'fab fa-github' },
  { href: site.facebook, label: 'Facebook', icon: 'fab fa-facebook' },
  { href: site.instagram, label: 'Instagram', icon: 'fab fa-instagram' },
  { href: site.twitter, label: 'Twitter', icon: 'fab fa-twitter' },
]

export default function Contact() {
  const { t } = useLanguage()

  return (
    <div className="section-wrapper">
      <section className="section extra" id="extra">
        <div>
          <div className="section-heading" id="chat-text">{t('headings.contact')}</div>

          <p className="paragraph-text justify-text">
            Vamos conversar? Estou aberto a <strong>oportunidades de trabalho</strong>,{' '}
            <strong>projetos freelance</strong>, colaborações em <strong>open source</strong> ou simplesmente trocar
            uma ideia sobre <strong>tecnologia</strong>, <strong>carreira</strong> ou o que mais fizer sentido.
          </p>

          <p className="paragraph-text justify-text">
            💌 E-mail: <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            📱 Tel: {site.phone}
            <br />
            ⏳ Respondo em até 24 horas.
            <br />
            🔗 Redes:{' '}
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>{' '}
            |{' '}
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>

          <p className="paragraph-text justify-text">
            📄 Currículo:{' '}
            <a href={asset(site.resumePdf)} target="_blank" rel="noreferrer">
              PDF
            </a>{' '}
            |{' '}
            <a href={asset(site.resumeDoc)} target="_blank" rel="noreferrer">
              DOC
            </a>
          </p>

          <p className="paragraph-text justify-text">
            Seja para <strong>projetos</strong>, <strong>parcerias</strong> ou uma boa conversa, estou por aqui. Bora
            construir algo?🚀
          </p>

          <div className="extra-links">
            {socials.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer' })}
              >
                <i className={`head-icon ${icon}`} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
