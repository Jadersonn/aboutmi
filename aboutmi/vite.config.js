import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O site é publicado em https://jadersonn.github.io/aboutmi/
export default defineConfig({
  base: '/aboutmi/',
  plugins: [react()],
})
