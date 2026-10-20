import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer footer-text">
      {site.title} &copy; {new Date().getFullYear()}
    </footer>
  )
}
