# boing. — Portfólio de Dionathan Boing

Portfólio pessoal de **Dionathan Boing**, Desenvolvedor Full Stack focado em **Node.js, TypeScript, Angular, JavaScript, Java**, integrações com ERPs de mercado e desenvolvimento assistido por IA.

---

## Funcionalidades

- **Internacionalização (PT-BR / EN-US)**: Alternância dinâmica de idioma com detecção automática da preferência do navegador e persistência em `localStorage`.
- **Seções Completas**:
  - **Hero**: Apresentação principal com efeitos visuais e download direto do currículo em PDF (`/curriculo.pdf`).
  - **Sobre Mim**: Resumo profissional, formação acadêmica e indicadores de foco técnico.
  - **Tecnologias (Stacks)**: Competências organizadas em *Front-end*, *Back-end*, *Dados & ERPs* e *Infra, DevOps & IA*.
  - **Carreira (Experiência)**: Linha do tempo profissional detalhada.
  - **Projetos**: Carrossel interativo com página de detalhes dedicada para cada projeto (`/project/:id`).
- **SEO & Dados Estruturados**: Meta tags completas (Open Graph, Twitter Cards) e schema JSON-LD (`Person`) para mecanismos de busca e IAs.
- **Cabeçalhos de Segurança**: Configuração de `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` e `Permissions-Policy`.

---

## Tecnologias Utilizadas

- **Front-end**: [React 19](https://react.dev/), [Vite 8](https://vite.dev/), [React Router 7](https://reactrouter.com/)
- **Animações & UI**: [Framer Motion](https://www.framer.com/motion/), [Embla Carousel](https://www.embla-carousel.com/), [Lucide React](https://lucide.dev/), CSS moderno com variáveis
- **Ambiente & Deploy**:
  - **Node.js 22 LTS** (`.nvmrc`)
  - **Docker & Docker Compose** (Build multi-stage com `node:22-alpine` e `nginx:stable-alpine`)
  - **GitHub Actions** (Deploy automatizado para GitHub Pages em `.github/workflows/deploy.yml`)

---

## Como Executar Localmente

### Pré-requisitos
- **Node.js** `>= 22.0.0`
- **npm**

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/DionathanDevs/portfolio-dev.git
cd portfolio-dev

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Gera o build otimizado de produção na pasta `dist/` |
| `npm run preview` | Visualiza localmente o build de produção |
| `npm run lint` | Executa a verificação do ESLint no código |

---

## Deploy com Docker / Docker Compose (VM)

O projeto conta com um `Dockerfile` multi-stage e `docker-compose.yml` prontos para rodar em qualquer máquina virtual (VM) ou servidor Linux utilizando **Nginx** com compressão Gzip, cache de assets e suporte a rotas SPA.

```bash
# Subir em background na porta 80 (padrão)
docker compose up -d --build

# Ou especificar uma porta customizada (ex: 8080)
PORT=8080 docker compose up -d --build
```

Para parar o container:

```bash
docker compose down
```

> Caso utilize um proxy reverso externo com SSL (Let's Encrypt / Certbot) diretamente no host, consulte também o exemplo em [`nginx.conf.example`](./nginx.conf.example).

---

## Estrutura do Projeto

```text
portfolio-dev/
├── .github/workflows/
│   └── deploy.yml          # Pipeline CI/CD para GitHub Pages (Node 22)
├── public/
│   ├── curriculo.pdf       # Currículo para download
│   ├── _headers            # Headers de segurança (Netlify/Cloudflare)
│   └── robots.txt
├── src/
│   ├── assets/             # Imagens e ícones do portfólio
│   ├── components/
│   │   ├── Footer/         # Rodapé e links sociais
│   │   ├── Header/         # Navegação e seletor de idioma (PT/EN)
│   │   ├── Layout/         # Layout principal
│   │   └── Sections/       # Hero, About, Stacks, Experience, ProjectsCarousel
│   ├── context/
│   │   └── LanguageContext.jsx # Textos, traduções (PT/EN), experiências e projetos
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProjectDetails.jsx
│   ├── App.jsx
│   └── main.jsx
├── Dockerfile              # Build multi-stage (Node 22 Alpine -> Nginx Alpine)
├── docker-compose.yml      # Orquestração do container para VM
├── nginx.conf              # Configuração do Nginx interno do container
├── nginx.conf.example      # Exemplo de configuração Nginx com SSL para host/VM
├── package.json
└── vite.config.js
```

---

## Contato

- **LinkedIn**: [linkedin.com/in/dionathan-boing](https://www.linkedin.com/in/dionathan-boing/)
- **GitHub**: [github.com/DionathanDevs](https://github.com/DionathanDevs)
- **E-mail**: [dionathandev@gmail.com](mailto:dionathandev@gmail.com)
