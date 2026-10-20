// Certificados exibidos na aba "Certificações", ordenados pela carga horária (maior primeiro).
// O PDF fica em public/assets/docs/certificados/<arquivo>.pdf
// e a miniatura em public/assets/images/certificados/<arquivo>.jpg
const certificates = [
  {
    file: '5cta-redes-servidores-linux-2022',
    title: 'Estágio de Redes e Servidores Linux',
    summary:
      'Administração de redes TCP/IP e servidores Linux: firewall com iptables, DNS, DHCP, Apache, Squid, SSH e SFTP.',
    issuer: '5º CTA – Exército Brasileiro',
    date: 'out/2022',
    hours: 80,
  },
  {
    file: '5cta-joomla-2024',
    title: 'Estágio de Joomla',
    summary:
      'Criação e gestão de portais com o CMS Joomla no padrão e-Gov: templates, extensões, menus, usuários, backup e boas práticas de segurança.',
    issuer: '5º CTA – Exército Brasileiro',
    date: 'abr/2024',
    hours: 60,
  },
  {
    file: '5cta-seguranca-redes-sistemas-2022',
    title: 'Estágio de Segurança em Redes e Sistemas',
    summary:
      'Segurança da informação na prática: análise de tráfego com tcpdump e Wireshark, OWASP Top 10, varredura com Nmap, criptografia com OpenSSL e IPS/IDS.',
    issuer: '5º CTA – Exército Brasileiro',
    date: 'nov/2022',
    hours: 60,
  },
  {
    file: 'cisco-python-essentials-1-2025',
    title: 'Fundamentos do Python 1 (Python Essentials 1)',
    summary:
      'Fundamentos de programação em Python: variáveis, operadores, controle de fluxo, laços, funções, coleções de dados e tratamento de exceções.',
    issuer: 'Cisco Networking Academy / ESCOM',
    date: 'abr/2025',
    hours: 30,
  },
  {
    file: 'cisco-cybersecurity-essentials-2020',
    title: 'Cybersecurity Essentials',
    summary:
      'Princípios de segurança cibernética: ameaças e ataques, criptografia, controle de acesso, integridade de dados e alta disponibilidade.',
    issuer: 'Cisco Networking Academy',
    date: 'ago/2020',
    hours: 30,
  },
  {
    file: 'cisco-introduction-to-cybersecurity-2020',
    title: 'Introduction to Cybersecurity',
    summary:
      'Introdução à segurança cibernética: principais ameaças e ataques, proteção de dados pessoais e corporativos e carreiras na área.',
    issuer: 'Cisco Networking Academy',
    date: 'ago/2020',
    hours: 15,
  },
  {
    file: 'cisco-ndg-linux-unhatched-2025',
    title: 'NDG Linux Unhatched',
    summary:
      'Primeiros passos no Linux pela linha de comando: navegação no sistema de arquivos, manipulação de arquivos, permissões e processos.',
    issuer: 'Cisco Networking Academy / ESCOM',
    date: 'abr/2025',
    hours: 8,
  },
]

// Converte para o mesmo formato dos projetos, usado pelo ProjectCard
export const certificateCards = [...certificates]
  .sort((a, b) => b.hours - a.hours)
  .map(({ file, title, summary, issuer, date, hours }) => ({
    image: `assets/images/certificados/${file}.jpg`,
    link: `assets/docs/certificados/${file}.pdf`,
    title,
    technologies: [date],
    description: `${summary} Emitido por: ${issuer}, ${hours}h.`,
    categories: ['certificacoes'],
  }))
