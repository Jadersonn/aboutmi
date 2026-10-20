import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import pt from './pt.jsx'
import en from './en.jsx'
import es from './es.jsx'

export const languages = [
  { code: 'pt', label: 'PT', htmlLang: 'pt-BR' },
  { code: 'en', label: 'EN', htmlLang: 'en' },
  { code: 'es', label: 'ES', htmlLang: 'es' },
]

const dictionaries = { pt, en, es }
const STORAGE_KEY = 'language'

// Idioma salvo na última visita; senão, o idioma do navegador; senão, português
function initialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (dictionaries[saved]) return saved
  } catch {
    // localStorage pode estar bloqueado (aba anônima etc.)
  }
  const browser = (navigator.language || '').slice(0, 2).toLowerCase()
  return dictionaries[browser] ? browser : 'pt'
}

// Busca 'a.b.c' dentro do dicionário
const lookup = (dict, key) => key.split('.').reduce((value, part) => value?.[part], dict)

const isTranslated = (field) => field && typeof field === 'object' && !Array.isArray(field) && 'pt' in field

// Versão de um campo ({ pt, en, es } ou texto simples) em um idioma, com o português de reserva
export const pickIn = (field, code) => (isTranslated(field) ? field[code] ?? field.pt : field)

// Monta um campo { pt, en, es } chamando fn(código, dicionário) para cada idioma.
// Usado nos arquivos de dados para textos que dependem do dicionário (ex.: "Emitido por").
export const translateAll = (fn) =>
  Object.fromEntries(Object.entries(dictionaries).map(([code, dict]) => [code, fn(code, dict)]))

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLanguage)

  useEffect(() => {
    document.documentElement.lang = languages.find((l) => l.code === lang).htmlLang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // sem problema: só não lembra a escolha
    }
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      // Texto da interface; cai para o português se faltar a tradução
      t: (key) => lookup(dictionaries[lang], key) ?? lookup(pt, key) ?? key,
      // Campo de conteúdo: texto simples ou { pt, en, es }
      pick: (field) => pickIn(field, lang),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
