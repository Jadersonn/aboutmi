# aboutme

Portfólio de Jaderson Pillar, publicado em https://jadersonn.github.io/aboutmi/.

Feito com React + Vite.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Estrutura

- `src/components/` — seções da página (Nav, Sobre, Habilidades, Projetos, Contato, Rodapé)
- `src/data/` — conteúdo editável: dados pessoais (`site.js`), habilidades (`skills.js`) e projetos (`projects.js`)
- `public/assets/` — imagens e currículos servidos como estão

## Deploy

O workflow `.github/workflows/deploy.yml` faz o build e publica no GitHub Pages a cada push na `main`.
Em **Settings → Pages**, a origem precisa estar como **GitHub Actions**.
