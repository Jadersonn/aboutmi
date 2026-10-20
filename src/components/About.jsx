import { site } from '../data/site.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function About() {
  const { t } = useLanguage()

  return (
    <div className="section-wrapper">
      <section className="section about" id="about">
        <div id="about-text">
          <div className="section-heading">{t('headings.about')}</div>

          <p className="paragraph-text justify-text">
            Sou <strong>Jaderson da Silva Pillar Martins</strong>, desenvolvedor de software com forte atuação em{' '}
            <strong>engenharia de software</strong>, <strong>infraestrutura digital</strong> e{' '}
            <strong>otimização de processos</strong>. Atuei no <strong>Exército Brasileiro</strong> na manutenção de
            páginas web, redes, servidores e bancos de dados.
          </p>

          <p className="paragraph-text justify-text">
            Com mais de <strong>4 anos de experiência</strong>, participei de <strong>+12 entregas técnicas</strong>,
            atuei em <strong>2 equipes</strong> e ajudei a escalar <strong>2 projetos digitais</strong>, sempre com
            foco em performance, estabilidade e entrega de valor, na área "tech militar" e encontrei na tecnologia uma
            forma de unir lógica, solução de problemas, disciplina e criatividade.
          </p>

          <p className="paragraph-text justify-text">
            Meu trabalho conecta <strong>engenharia de software</strong> com <strong>eficiência operacional</strong>.
            Desenvolvo soluções que:
          </p>

          <ul className="paragraph-text">
            <li>🔧 Modernizam sistemas legados, reduzindo até <strong>71%</strong> no tempo de resposta;</li>
            <li>📊 Integram pipelines e dashboards em tempo real, com <strong>SLA de 98,9%</strong>;</li>
            <li>🚀 Escalam APIs e microserviços, eliminando até <strong>87%</strong> de chamadas desnecessárias;</li>
            <li>⚙️ Automatizam processos, triplicando a eficiência operacional;</li>
            <li>🛡️ Garantem alta disponibilidade para grandes volumes de requisições simultâneas.</li>
          </ul>

          <p className="paragraph-text justify-text">
            Como? Através de <strong>lógica aplicada</strong>, <strong>análise precisa</strong> e{' '}
            <strong>execução full stack</strong> — sempre buscando gerar impacto real.
          </p>

          <p className="paragraph-text justify-text">
            <strong>Tecnologias que domino:</strong> Java, Python, Laravel, React, PostgreSQL, MySQL, Docker, Spring,
            Spring Boot, Hibernate, HTML, CSS, JavaScript, Joomla, Flutter e Kotlin.
          </p>

          <p className="paragraph-text justify-text">
            Além do desenvolvimento, atuo com <strong>arquitetura de sistemas</strong>,{' '}
            <strong>infraestrutura de servidores</strong>, <strong>redes</strong> e{' '}
            <strong>desenvolvimento web institucional</strong>.
          </p>

          <p className="paragraph-text justify-text">
            <strong>Meus Idiomas:</strong> Português (nativo), Inglês (intermediário — boa escrita, desenvolvendo
            fluência) e Espanhol (intermediário — boa escrita e pronúncia).
          </p>

          <p className="paragraph-text justify-text">
            🚀 Este espaço é onde compartilho <strong>projetos</strong>, <strong>aprendizados</strong> e{' '}
            <strong>reflexões sobre tecnologia</strong>. Confira meus projetos no{' '}
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            . Meus contatos estão disponíveis no <a href="#extra">rodapé da página</a>.
          </p>

          <p className="paragraph-text justify-text">
            Aberto a <strong>novas oportunidades</strong>, <strong>desafios</strong> e{' '}
            <strong>colaborações</strong>. Se busca um profissional comprometido, apaixonado por tecnologia e focado em
            resultados, <strong>vamos conversar!</strong> Estou pronto para criar soluções incríveis.
          </p>
        </div>
      </section>
    </div>
  )
}
