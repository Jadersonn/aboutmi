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

          <p className="paragraph-text justify-text">{t('contact.intro')}</p>

          <p className="paragraph-text justify-text">
            💌 E-mail: <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            📱 {t('contact.phone')}: {site.phone}
            <br />
            ⏳ {t('contact.reply')}
            <br />
            🔗 {t('contact.networks')}:{' '}
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>{' '}
            |{' '}
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>

          <p className="paragraph-text justify-text">
            📄 {t('contact.resume')}:{' '}
            <a href={asset(t('resume.pdf'))} target="_blank" rel="noreferrer">
              PDF
            </a>{' '}
            |{' '}
            <a href={asset(t('resume.doc'))} target="_blank" rel="noreferrer">
              DOC
            </a>
          </p>

          <p className="paragraph-text justify-text">{t('contact.outro')}</p>

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
