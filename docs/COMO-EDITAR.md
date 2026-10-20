# Como editar o conteúdo do site

Todo o conteúdo que muda com frequência fica em arquivos de dados dentro de `src/data/`.
Você edita esses arquivos, confere no navegador e publica. Não precisa mexer nos componentes.

## Antes de começar

Rode o site no seu computador para ver as mudanças na hora:

```bash
npm run dev
```

Abra http://localhost:5173/aboutmi/. Cada vez que você salva um arquivo, a página atualiza sozinha.

## Onde fica cada coisa

| O que aparece no site | Arquivo |
|---|---|
| Aba **Projetos Concluídos** e **Projetos em Desenvolvimento** | `src/data/projects.js` |
| Aba **Ideias não implementadas** | `src/data/ideas.js` |
| Aba **Próximos Estudos** | `src/data/studies.js` |
| Aba **Certificações** | `src/data/certificates.js` |
| Nomes das abas | `src/data/projects.js` (lista `categories`) |
| Barras de **Habilidades** | `src/data/skills.js` |
| Nome, título, e-mail, telefone, redes sociais, currículo | `src/data/site.js` |
| Texto da seção **Sobre** | `src/components/About.jsx` |
| Texto da seção **Contato** | `src/components/Contact.jsx` |

## Regras gerais (valem para todos os arquivos)

- Cada item é um bloco entre `{` e `},`. **Não esqueça a vírgula** depois do `}`.
- Textos ficam entre aspas simples: `'assim'`. Se o texto tiver um apóstrofo (`'`), use crase no lugar: `` `D'Ávila` ``.
- A **ordem dos blocos** no arquivo é a ordem em que os cards aparecem (exceto nos certificados, que se ordenam sozinhos pela carga horária).
- Para **excluir** um item, apague o bloco inteiro, do `{` até o `},`.
- Para **modificar**, troque só o texto entre as aspas.
- Se a página ficar em branco depois de salvar, olhe o terminal do `npm run dev`: ele mostra a linha com erro (quase sempre uma vírgula ou aspa faltando).

---

## Projetos — `src/data/projects.js`

```js
{
  image: 'assets/images/meu-projeto.png',          // opcional
  link: 'https://github.com/Jadersonn/MeuProjeto',
  title: 'Meu Projeto',
  demo: 'https://meu-projeto.com',                 // opcional
  technologies: ['Laravel', 'PHP', 'MySQL'],
  description: 'O que o projeto faz, em uma ou duas frases.',
  categories: ['concluidos'],
},
```

- **`categories`** define a aba: `'concluidos'` ou `'desenvolvimento'`. Quando o projeto terminar, troque `'desenvolvimento'` por `'concluidos'`.
- **`image`**: salve a imagem em `public/assets/images/` e escreva o caminho **sem** o `public/`.
- **`demo`**: se preenchido, aparece um link "Demo" no fim da descrição. Apague a linha se não houver.
- **Adicionar**: copie um bloco existente, cole logo abaixo dele e troque os valores. Os blocos novos vão **antes** da linha `...ideaCards,`.

## Ideias não implementadas — `src/data/ideas.js`

```js
{
  title: 'Nome da Ideia',
  description: 'Qual problema resolve, para quem e como funciona.',
  technologies: ['Flutter', 'Spring Boot'],
},
```

- **`technologies`**: as tecnologias que você usaria para construir.
- **Quando começar a desenvolver uma ideia**: apague o bloco daqui e crie um projeto em `projects.js` com `categories: ['desenvolvimento']`.

## Próximos Estudos — `src/data/studies.js`

```js
{
  title: 'Nome do Estudo',
  status: 'Em andamento',
  description: 'O que vou estudar e por que isso importa para a minha carreira.',
  technologies: ['Tecnologia 1', 'Tecnologia 2'],
},
```

- **`status`** vira a primeira etiqueta do card. Use `'Em andamento'`, `'Recomendado'` ou outro texto curto, como `'Concluído'`.
- Deixe os itens **em andamento no topo** do arquivo.
- **Quando concluir um estudo e receber o certificado**: apague o bloco daqui e adicione o certificado (seção abaixo).

## Certificações — `src/data/certificates.js`

Cada certificado precisa de **dois arquivos com o mesmo nome**:

1. O PDF em `public/assets/docs/certificados/nome-do-arquivo.pdf`
2. A miniatura em `public/assets/images/certificados/nome-do-arquivo.jpg`

Use nomes **sem espaços e sem acentos**, no formato `emissor-assunto-ano` (ex.: `cisco-python-essentials-1-2025`).

Para gerar a miniatura a partir do PDF (no Mac), rode na pasta do projeto:

```bash
sips -s format jpeg -s formatOptions 75 -Z 700 "public/assets/docs/certificados/nome-do-arquivo.pdf" --out "public/assets/images/certificados/nome-do-arquivo.jpg"
```

Depois adicione o bloco:

```js
{
  file: 'nome-do-arquivo',        // sem .pdf / .jpg
  title: 'Nome do Curso',
  summary: 'Descrição breve do que o curso aborda.',
  issuer: 'Nome do Emissor',
  date: 'mês/ano',                // ex.: 'abr/2025'
  hours: 40,                      // só o número, sem "h" e sem aspas
},
```

- A descrição final é montada sozinha: `summary` + **"Emitido por: (issuer), (hours)h."**
- Os cards se **ordenam sozinhos pela carga horária** (maior primeiro), então a posição do bloco no arquivo não importa.
- **Excluir**: apague o bloco e também os dois arquivos (PDF e JPG).

## Habilidades — `src/data/skills.js`

```js
{ name: 'DOCKER', percent: 60 },
```

- Coloque dentro do grupo certo (`Banco de Dados`, `Linguagens`, `FRAMEWORKS`...). `percent` vai de 0 a 100.
- Para destacar uma barra em vermelho, acrescente `color: RED`, como no Laravel.
- Para criar um grupo novo, copie um bloco `{ title: '...', skills: [ ... ] },` inteiro.

## Abas (categorias) — `src/data/projects.js`

```js
{ slug: 'certificacoes', label: 'Certificações' },
```

- **`label`** é o texto do botão; pode mudar à vontade.
- **`slug`** é o código que liga os itens à aba. Se mudar um `slug`, troque também em todos os itens que o usam.
- A aba que abre primeiro é definida em `src/components/Projects.jsx`, na linha `useState('concluidos')`.

---

## Publicar as mudanças

Quando tudo estiver certo no navegador:

```bash
git add -A
git commit -m "Descreva o que mudou"
git push origin main
```

Em cerca de um minuto o GitHub Actions publica o site em https://jadersonn.github.io/aboutmi/.
Acompanhe em **GitHub → aba Actions**. Se o site parecer desatualizado, recarregue com **Cmd+Shift+R**.
