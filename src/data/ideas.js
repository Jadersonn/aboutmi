// Itens da aba "Ideias não implementadas": ideias de produto ainda não desenvolvidas.
// As etiquetas são as tecnologias que eu usaria para construir cada uma.
const ideas = [
  {
    title: 'Cassino Social Abordando Vicios em Dopamina',
    description:
      'Jogos no estilo cassino, com fichas virtuais que não valem dinheiro e não podem ser compradas. As fichas se recuperam com o tempo, como uma barra de energia, e o jogador sobe em rankings e conquistas. Enfrentando vicios em apostas de forma gratuita.',
    technologies: ['React', 'Node.js', 'WebSocket'],
  },
  {
    title: 'Gestão de Condomínio com Reconhecimento Facial',
    description:
      'Controle de acesso por reconhecimento facial. O proprietário realiza toda gestao do apartamento pelo aplicativo. Ideal para gestao de AIRBNB. Inclui registro de entradas, contato portaria e dispositivo celular e liberação de visitantes.',
    technologies: ['Python', 'OpenCV', 'Spring Boot', 'MySQL'],
  },
  {
    title: 'Central de Mídia com Controle pelo Celular',
    description:
      'Transforma qualquer computador em uma central de mídia no estilo Android TV. O celular vira o controle remoto: navega pelos apps, controla a reprodução e escolhe qual conteúdo ou tela será exibido na TV.',
    technologies: ['Flutter', 'Python', 'WebSocket'],
  },
  {
    title: 'Sinalização Digital para TVs e Monitores',
    description:
      'Painel web para montar playlists de fotos e vídeos e exibi-las em uma ou várias TVs e monitores, com agendamento por horário. Ideal para recepções, lojas, eventos e murais institucionais.',
    technologies: ['Laravel', 'React', 'MySQL'],
  },
  {
    title: 'Rentabilidade para Motoristas de Aplicativo',
    description:
      'App para o motorista registrar corridas, combustível, manutenção e horas rodadas e ver o lucro real por quilômetro e por hora. Compara plataformas, dias e horários para mostrar quando vale mais a pena rodar.',
    technologies: ['Flutter', 'Firebase', 'Power BI'],
  },
  {
    title: 'Gestão de Carregadores para Carros Elétricos',
    description:
      'Gerencia tomadas e estações de recarga em condomínios e estacionamentos: reserva de horários, medição do consumo de cada recarga e cobrança proporcional ao uso de cada morador ou cliente.',
    technologies: ['IoT', 'Spring Boot', 'Flutter'],
  },
  {
    title: 'Calendário de Gestão Financeira',
    description:
      'Calendário que mostra, dia a dia, as contas a pagar e a receber, com contas recorrentes, lembretes de vencimento e o saldo previsto para cada data, para planejar o mês sem surpresas.',
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
