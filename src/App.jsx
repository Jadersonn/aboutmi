import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // Links com âncora (ex.: /aboutmi/#projects) chegam antes do React renderizar a seção
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <>
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
