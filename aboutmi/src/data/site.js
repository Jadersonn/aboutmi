export const site = {
  title: 'Jaderson Pillar',
  description:
    'Desenvolvedor Full Stack | Desenvolvedor Back end | Desenvolvedor Web | Analista de Dados | Analista de Sistemas',
  profilePicture: 'assets/images/imagemPrincipal.jpeg',
  email: 'pillar.jaderson@gmail.com',
  phone: '+55 67 996942783',
  github: 'https://github.com/Jadersonn',
  linkedin: 'https://www.linkedin.com/in/jaderson-pillar',
  facebook: 'https://www.facebook.com/jadersonpillarmartins',
  instagram: 'https://www.instagram.com/jadersonpillarmartins',
  twitter: 'https://twitter.com/jaderson610',
  resumePdf: 'assets/docs/curriculo - pt.pdf',
  resumeDoc: 'assets/docs/curriculo - pt.docx',
}

// Caminhos de arquivos em public/ precisam do prefixo base do Vite (/aboutmi/)
export const asset = (path) => import.meta.env.BASE_URL + encodeURI(path)
