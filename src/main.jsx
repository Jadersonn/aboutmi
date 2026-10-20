import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'

import './styles/normalize.css'
import './styles/hint.base.min.css'
import './styles/semi-transparent-buttons.css'
import './styles/progress.css'
import './styles/main.css'
import './styles/card.css'
import './styles/app.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
