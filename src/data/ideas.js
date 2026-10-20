// Itens da aba "Ideias não implementadas": ideias de produto ainda não desenvolvidas.
// As etiquetas são as tecnologias que eu usaria para construir cada uma.
// Campos de texto aceitam { pt, en, es }; se faltar um idioma, aparece o português.
const ideas = [
  {
    title: {
      pt: 'Cassino Social Abordando Vicios em Dopamina',
      en: 'Social Casino Tackling Dopamine Addiction',
      es: 'Casino Social que Aborda la Adicción a la Dopamina',
    },
    description: {
      pt: 'Jogos no estilo cassino, com fichas virtuais que não valem dinheiro e não podem ser compradas. As fichas se recuperam com o tempo, como uma barra de energia, e o jogador sobe em rankings e conquistas. Enfrentando vicios em apostas de forma gratuita.',
      en: 'Casino-style games with virtual chips that have no cash value and cannot be bought. Chips refill over time, like an energy bar, and players climb rankings and earn achievements. A free way to tackle gambling addiction.',
      es: 'Juegos estilo casino con fichas virtuales que no valen dinero y no se pueden comprar. Las fichas se recuperan con el tiempo, como una barra de energía, y el jugador sube en rankings y logros. Una forma gratuita de enfrentar la adicción a las apuestas.',
    },
    technologies: ['React', 'Node.js', 'WebSocket'],
  },
  {
    title: {
      pt: 'Gestão de Condomínio com Reconhecimento Facial',
      en: 'Facial Recognition Building Management',
      es: 'Gestión de Condominios con Reconocimiento Facial',
    },
    description: {
      pt: 'Controle de acesso por reconhecimento facial. O proprietário realiza toda gestao do apartamento pelo aplicativo. Ideal para gestao de AIRBNB. Inclui registro de entradas, contato portaria e dispositivo celular e liberação de visitantes.',
      en: 'Facial recognition access control. The owner manages the whole apartment from the app, which makes it ideal for Airbnb hosts. Includes an entry log, contact with the front desk from the phone and visitor access approval.',
      es: 'Control de acceso por reconocimiento facial. El propietario gestiona todo el apartamento desde la aplicación, ideal para la gestión de Airbnb. Incluye registro de entradas, contacto con la portería desde el celular y autorización de visitantes.',
    },
    technologies: ['Python', 'OpenCV', 'Spring Boot', 'MySQL'],
  },
  {
    title: {
      pt: 'Central de Mídia com Controle pelo Celular',
      en: 'Media Center Controlled by Phone',
      es: 'Centro Multimedia Controlado desde el Celular',
    },
    description: {
      pt: 'Transforma qualquer computador em uma central de mídia no estilo Android TV. O celular vira o controle remoto: navega pelos apps, controla a reprodução e escolhe qual conteúdo ou tela será exibido na TV.',
      en: 'Turns any computer into an Android TV-style media center. The phone becomes the remote: it browses apps, controls playback and chooses which content or screen is shown on the TV.',
      es: 'Convierte cualquier computadora en un centro multimedia estilo Android TV. El celular se vuelve el control remoto: navega por las apps, controla la reproducción y elige qué contenido o pantalla se muestra en la TV.',
    },
    technologies: ['Flutter', 'Python', 'WebSocket'],
  },
  {
    title: {
      pt: 'Sinalização Digital para TVs e Monitores',
      en: 'Digital Signage for TVs and Monitors',
      es: 'Señalización Digital para TVs y Monitores',
    },
    description: {
      pt: 'Painel web para montar playlists de fotos e vídeos e exibi-las em uma ou várias TVs e monitores, com agendamento por horário. Ideal para recepções, lojas, eventos e murais institucionais.',
      en: 'Web dashboard to build photo and video playlists and show them on one or many TVs and monitors, with time-based scheduling. Ideal for lobbies, stores, events and institutional displays.',
      es: 'Panel web para armar listas de fotos y videos y mostrarlas en uno o varios televisores y monitores, con programación por horario. Ideal para recepciones, tiendas, eventos y murales institucionales.',
    },
    technologies: ['Laravel', 'React', 'MySQL'],
  },
  {
    title: {
      pt: 'Rentabilidade para Motoristas de Aplicativo',
      en: 'Profitability for Ride-Hailing Drivers',
      es: 'Rentabilidad para Conductores de Aplicaciones',
    },
    description: {
      pt: 'App para o motorista registrar corridas, combustível, manutenção e horas rodadas e ver o lucro real por quilômetro e por hora. Compara plataformas, dias e horários para mostrar quando vale mais a pena rodar.',
      en: 'App for drivers to log rides, fuel, maintenance and hours driven and see their real profit per kilometer and per hour. It compares platforms, days and times to show when driving pays off the most.',
      es: 'App para que el conductor registre viajes, combustible, mantenimiento y horas trabajadas y vea la ganancia real por kilómetro y por hora. Compara plataformas, días y horarios para mostrar cuándo conviene más conducir.',
    },
    technologies: ['Flutter', 'Firebase', 'Power BI'],
  },
  {
    title: {
      pt: 'Gestão de Carregadores para Carros Elétricos',
      en: 'EV Charger Management',
      es: 'Gestión de Cargadores para Autos Eléctricos',
    },
    description: {
      pt: 'Gerencia tomadas e estações de recarga em condomínios e estacionamentos: reserva de horários, medição do consumo de cada recarga e cobrança proporcional ao uso de cada morador ou cliente.',
      en: 'Manages outlets and charging stations in residential buildings and parking lots: time slot booking, per-session energy metering and billing proportional to each resident or customer’s usage.',
      es: 'Gestiona tomas y estaciones de carga en condominios y estacionamientos: reserva de horarios, medición del consumo de cada carga y cobro proporcional al uso de cada residente o cliente.',
    },
    technologies: ['IoT', 'Spring Boot', 'Flutter'],
  },
  {
    title: {
      pt: 'Calendário de Gestão Financeira',
      en: 'Financial Planning Calendar',
      es: 'Calendario de Gestión Financiera',
    },
    description: {
      pt: 'Calendário que mostra, dia a dia, as contas a pagar e a receber, com contas recorrentes, lembretes de vencimento e o saldo previsto para cada data, para planejar o mês sem surpresas.',
      en: 'A calendar that shows bills to pay and payments to receive day by day, with recurring bills, due-date reminders and the projected balance for each date, so you can plan the month with no surprises.',
      es: 'Calendario que muestra, día a día, las cuentas por pagar y por cobrar, con cuentas recurrentes, recordatorios de vencimiento y el saldo previsto para cada fecha, para planificar el mes sin sorpresas.',
    },
    technologies: ['Laravel', 'React', 'PostgreSQL'],
  },
]

// Converte para o mesmo formato dos projetos, usado pelo ProjectCard
export const ideaCards = ideas.map(({ title, description, technologies }) => ({
  title,
  description,
  technologies,
  categories: ['naoImplementadas'],
}))
