# Portfólio — Mateus Gonçalves

Portfólio pessoal desenvolvido em React, apresentando quem sou, minhas
principais stacks, projetos e formas de contato.

## Tecnologias e bibliotecas

**Core**
- [React 19](https://react.dev/)
- [Vite 7](https://vite.dev/) — build tool e dev server
- [React Router DOM 7](https://reactrouter.com/) — roteamento (`createBrowserRouter`)
- [React Router Hash Link](https://github.com/rafgraph/react-router-hash-link) — navegação suave para âncoras (`#about`, `#projects`, `#contact`)

**UI / estilo**
- [Bootstrap 5](https://getbootstrap.com/) + [React Bootstrap](https://react-bootstrap.netlify.app/) — grid, componentes (Navbar) e utilitários
- [Bootstrap Icons](https://icons.getbootstrap.com/) — ícones (redes sociais, contato)
- [Devicon](https://devicon.dev/) — ícones das tecnologias exibidas na seção de stacks
- CSS puro por componente (sem framework de CSS-in-JS)

**Interação / animação**
- [React Fast Marquee](https://github.com/justin-chu/react-fast-marquee) — carrossel contínuo das stacks
- [ScrollReveal](https://scrollrevealjs.org/) — animações de entrada ao rolar a página

**Qualidade**
- [ESLint 9](https://eslint.org/) (`eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`)

## Estrutura do projeto

```
src/
├── componentes/     # Navbar, Hero (maindiv), About, Stacks, Projects, Contact, Footer, ícones
├── pages/           # Home, página de IA (em construção), 404, erro
├── router.jsx        # Definição das rotas
├── utils/scroll/      # Inicialização do ScrollReveal
└── assets/            # Imagens e ícones
```

## Como rodar localmente

```bash
npm install
npm run dev       # servidor de desenvolvimento (Vite)
npm run build     # build de produção
npm run preview   # preview do build
npm run lint      # checagem de lint
```

## Autor

**Mateus Gonçalves** — Desenvolvedor de Software
[LinkedIn](https://www.linkedin.com/in/carlos-gonçalves-b38701211/) · [GitHub](https://github.com/CarlosMateusDeveloper) · [Instagram](https://www.instagram.com/mateus.goncalves.code/)
