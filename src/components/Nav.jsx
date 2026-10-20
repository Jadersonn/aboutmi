import { site, asset } from '../data/site.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'

const links = [
  { href: '#about', key: 'nav.about' },
  { href: '#skills', key: 'nav.skills' },
  { href: '#projects', key: 'nav.projects' },
  { href: '#extra', key: 'nav.contact' },
]

export default function Nav() {
  const { t } = useLanguage()

  return (
    <section className="head" id="nav">
      <LanguageSwitcher />
      <div className="head-inner-wrap">
        <div className="profile-pic-div animated">
          <a href="#about" className="profile-pic-link">
            <img src={asset(site.profilePicture)} className="profile-pic" alt={site.title} />
          </a>
        </div>
        <div className="head-name head-title animated" id="head-name">{site.title}</div>
        <div className="head-punchline animated">{site.description}</div>
        <div className="head-menu-wrap">
          {links.map((link) => (
            <a key={link.href} className="semi-transparent-button with-border nav-links" href={link.href}>
              {t(link.key)}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
