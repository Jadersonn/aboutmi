import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './styles/normalize.css'
import './styles/hint.base.min.css'
import './styles/semi-transparent-buttons.css'
import './styles/progress.css'
import './styles/main.css'
import './styles/card.css'
import './styles/app.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
