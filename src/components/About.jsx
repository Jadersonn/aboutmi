import { useLanguage } from '../i18n/LanguageContext.jsx'

// O texto fica em src/i18n/<idioma>.jsx, na chave "about"
export default function About() {
  const { t } = useLanguage()

  return (
    <div className="section-wrapper">
      <section className="section about" id="about">
        <div id="about-text">
          <div className="section-heading">{t('headings.about')}</div>
          {t('about')}
        </div>
      </section>
    </div>
  )
}
