import { pickIn, translateAll } from '../i18n/LanguageContext.jsx'

// Certificados exibidos na aba "Certificações", ordenados pela carga horária (maior primeiro).
// O PDF fica em public/assets/docs/certificados/<arquivo>.pdf
// e a miniatura em public/assets/images/certificados/<arquivo>.jpg
// Campos de texto aceitam { pt, en, es }; se faltar um idioma, aparece o português.

const ARMY = { pt: '5º CTA – Exército Brasileiro', en: '5th CTA – Brazilian Army', es: '5º CTA – Ejército Brasileño' }

const certificates = [
  {
    file: '5cta-redes-servidores-linux-2022',
    title: {
      pt: 'Estágio de Redes e Servidores Linux',
      en: 'Linux Networks and Servers Course',
      es: 'Curso de Redes y Servidores Linux',
    },
    summary: {
      pt: 'Administração de redes TCP/IP e servidores Linux: firewall com iptables, DNS, DHCP, Apache, Squid, SSH e SFTP.',
      en: 'TCP/IP network and Linux server administration: iptables firewall, DNS, DHCP, Apache, Squid, SSH and SFTP.',
      es: 'Administración de redes TCP/IP y servidores Linux: firewall con iptables, DNS, DHCP, Apache, Squid, SSH y SFTP.',
    },
    issuer: ARMY,
    date: '2022-10',
    hours: 80,
  },
  {
    file: '5cta-joomla-2024',
    title: { pt: 'Estágio de Joomla', en: 'Joomla Course', es: 'Curso de Joomla' },
    summary: {
      pt: 'Criação e gestão de portais com o CMS Joomla no padrão e-Gov: templates, extensões, menus, usuários, backup e boas práticas de segurança.',
      en: 'Building and managing portals with the Joomla CMS following the e-Gov standard: templates, extensions, menus, users, backups and security best practices.',
      es: 'Creación y gestión de portales con el CMS Joomla en el estándar e-Gov: plantillas, extensiones, menús, usuarios, copias de seguridad y buenas prácticas de seguridad.',
    },
    issuer: ARMY,
    date: '2024-04',
    hours: 60,
  },
  {
    file: '5cta-seguranca-redes-sistemas-2022',
    title: {
      pt: 'Estágio de Segurança em Redes e Sistemas',
      en: 'Network and Systems Security Course',
      es: 'Curso de Seguridad en Redes y Sistemas',
    },
    summary: {
      pt: 'Segurança da informação na prática: análise de tráfego com tcpdump e Wireshark, OWASP Top 10, varredura com Nmap, criptografia com OpenSSL e IPS/IDS.',
      en: 'Hands-on information security: traffic analysis with tcpdump and Wireshark, OWASP Top 10, Nmap scanning, cryptography with OpenSSL and IPS/IDS.',
      es: 'Seguridad de la información en la práctica: análisis de tráfico con tcpdump y Wireshark, OWASP Top 10, escaneo con Nmap, criptografía con OpenSSL e IPS/IDS.',
    },
    issuer: ARMY,
    date: '2022-11',
    hours: 60,
  },
  {
    file: 'cisco-python-essentials-1-2025',
    title: {
      pt: 'Fundamentos do Python 1 (Python Essentials 1)',
      en: 'Python Essentials 1',
      es: 'Fundamentos de Python 1 (Python Essentials 1)',
    },
    summary: {
      pt: 'Fundamentos de programação em Python: variáveis, operadores, controle de fluxo, laços, funções, coleções de dados e tratamento de exceções.',
      en: 'Python programming fundamentals: variables, operators, control flow, loops, functions, data collections and exception handling.',
      es: 'Fundamentos de programación en Python: variables, operadores, control de flujo, bucles, funciones, colecciones de datos y manejo de excepciones.',
    },
    issuer: 'Cisco Networking Academy / ESCOM',
    date: '2025-04',
    hours: 30,
  },
  {
    file: 'cisco-cybersecurity-essentials-2020',
    title: 'Cybersecurity Essentials',
    summary: {
      pt: 'Princípios de segurança cibernética: ameaças e ataques, criptografia, controle de acesso, integridade de dados e alta disponibilidade.',
      en: 'Cybersecurity principles: threats and attacks, cryptography, access control, data integrity and high availability.',
      es: 'Principios de ciberseguridad: amenazas y ataques, criptografía, control de acceso, integridad de datos y alta disponibilidad.',
    },
    issuer: 'Cisco Networking Academy',
    date: '2020-08',
    hours: 30,
  },
  {
    file: 'cisco-introduction-to-cybersecurity-2020',
    title: 'Introduction to Cybersecurity',
    summary: {
      pt: 'Introdução à segurança cibernética: principais ameaças e ataques, proteção de dados pessoais e corporativos e carreiras na área.',
      en: 'Introduction to cybersecurity: main threats and attacks, protecting personal and corporate data, and careers in the field.',
      es: 'Introducción a la ciberseguridad: principales amenazas y ataques, protección de datos personales y corporativos y carreras en el área.',
    },
    issuer: 'Cisco Networking Academy',
    date: '2020-08',
    hours: 15,
  },
  {
    file: 'cisco-ndg-linux-unhatched-2025',
    title: 'NDG Linux Unhatched',
    summary: {
      pt: 'Primeiros passos no Linux pela linha de comando: navegação no sistema de arquivos, manipulação de arquivos, permissões e processos.',
      en: 'First steps with the Linux command line: navigating the file system, working with files, permissions and processes.',
      es: 'Primeros pasos en Linux desde la línea de comandos: navegación por el sistema de archivos, manejo de archivos, permisos y procesos.',
    },
    issuer: 'Cisco Networking Academy / ESCOM',
    date: '2025-04',
    hours: 8,
  },
]

// Converte para o mesmo formato dos projetos, usado pelo ProjectCard
export const certificateCards = [...certificates]
  .sort((a, b) => b.hours - a.hours)
  .map(({ file, title, summary, issuer, date, hours }) => {
    const [year, month] = date.split('-').map(Number)
    return {
      image: `assets/images/certificados/${file}.jpg`,
      link: `assets/docs/certificados/${file}.pdf`,
      title,
      // Ex.: "out/2022", "Oct/2022"
      technologies: [translateAll((code, dict) => `${dict.months[month - 1]}/${year}`)],
      // Ex.: "Resumo... Emitido por: Cisco Networking Academy, 30h."
      description: translateAll(
        (code, dict) =>
          `${pickIn(summary, code)} ${dict.certificates.issuedBy}: ${pickIn(issuer, code)}, ${hours}h.`,
      ),
      categories: ['certificacoes'],
    }
  })
