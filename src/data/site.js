export const site = {
  title: 'Jaderson Pillar',
  profilePicture: 'assets/images/imagemPrincipal.jpeg',
  email: 'pillar.jaderson@gmail.com',
  // WhatsApp guardado em pedaços para o número não aparecer inteiro no código publicado,
  // onde robôs coletam telefones. O link só é montado no clique (ver openWhatsApp abaixo).
  whatsappParts: ['55', '67', '9969', '42783'],
  github: 'https://github.com/Jadersonn',
  linkedin: 'https://www.linkedin.com/in/jaderson-pillar',
  facebook: 'https://www.facebook.com/jadersonpillarmartins',
  instagram: 'https://www.instagram.com/jadersonpillarmartins',
  twitter: 'https://twitter.com/jaderson610',
}

// Abre a conversa no WhatsApp sem expor o número na página
export const openWhatsApp = () => {
  window.open(`https://wa.me/${site.whatsappParts.join('')}`, '_blank', 'noopener,noreferrer')
}

// Caminhos de arquivos em public/ precisam do prefixo base do Vite (/aboutmi/)
export const asset = (path) => import.meta.env.BASE_URL + encodeURI(path)
