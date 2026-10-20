import { site, asset } from '../data/site.js'

const links = [
  { href: '#about', label: 'SOBRE' },
  { href: '#skills', label: 'HABILIDADES' },
  { href: '#projects', label: 'PROJETO' },
  { href: '#extra', label: 'CONTATO' },
]

export default function Nav() {
  return (
    <section className="head" id="nav">
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
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
