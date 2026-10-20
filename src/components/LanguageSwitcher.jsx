import { languages, useLanguage } from '../i18n/LanguageContext.jsx'

// Seletor discreto no canto do cabeçalho: PT · EN · ES
export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage()

  return (
    <nav className="language-switcher" aria-label={t('languageSelector')}>
      {languages.map(({ code, label, htmlLang }) => (
        <button
          key={code}
          type="button"
          lang={htmlLang}
          aria-pressed={lang === code}
          className={lang === code ? 'active' : undefined}
          onClick={() => setLang(code)}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}
