# Portfólio de André Almeida

Este projeto é um portfólio pessoal desenvolvido em React para apresentar minha trajetória, habilidades e projetos como Desenvolvedor Full-Stack.

## 🚀 Visão Geral

O objetivo é fornecer uma vitrine profissional com design responsivo, navegação clara e formulário de contato.

## 🛠 Tecnologias Utilizadas

- Vite (ambiente de build)
- React (v18+)
- React Router Dom (v6+)
- Bootstrap 5 + Bootstrap Icons
- React Hook Form
- HTML, CSS, JavaScript
- Hospedagem: GitHub Pages ou Vercel

## ⚙️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/andreLuAlmeida/portfolio-andre-almeida.git
cd portfolio-andre-almeida
npm install
npm run dev
npm run build

Deploy no GitHub Pages

Para hospedar o seu portfólio no GitHub Pages, siga os passos abaixo:
// vite.config.js
export default {
  base: '/portfolio-andre-almeida/',  // Substitua 'portfolio-andre-almeida' pelo nome do seu repositório
}

Fazendo o Build
Para criar os arquivos de produção, execute o seguinte comando:

npm run build

Publicando no GitHub Pages
Instale o gh-pages:

npm install --save gh-pages

No arquivo package.json, adicione o seguinte script:

"scripts": {
  "deploy": "gh-pages -d dist"
}

Para publicar o projeto, execute:

npm run deploy

Seu portfólio estará disponível em:

https://seuusuario.github.io/portfolio-andre-almeida/