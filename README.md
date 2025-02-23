<h1 align="center">
  <img
    src=".github/logo.svg"
    title="DevStage"
    alt="DevStage"
  />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pabloxt14/nlw-connect-react">

  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/pabloxt14/nlw-connect-react" />

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/pabloxt14/nlw-connect-react">
  
  <a href="https://github.com/pabloxt14/nlw-connect-react/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/pabloxt14/nlw-connect-react">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">

   <a href="https://github.com/pabloxt14/nlw-connect-react/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/pabloxt14/nlw-connect-react?style=social">
  </a>
</p>

<p>
  <img src=".github/cover.png" alt="Capa do projeto" />
</p>

<h4 align="center"> 
	🚀 Aplicação finalizada 🚀
</h4>

<p align="center">
 <a href="#-about">About</a> | 
 <a href="#-layout">Layout</a> | 
 <a href="#-setup">Setup</a> | 
 <a href="#-technologies">Technologies</a> | 
 <a href="#-license">License</a>
</p>


## 💻 About

Esta aplicação de nome **DevStage**, consiste basicamente de um site de evento (neste caso uma evento de programação) no qual os participantes podem se inscrever e acompanhar as indicações de outros participantes, além de acompanhar sua posição em um ranking de indicações.

Os principais conhecimentos aplicados nesta aplicação foram:
- Uso do framework Next.js;
- Configuração e uso da nova versão do Tailwind CSS;
- Integração automatizada com a API back-end através da biblioteca Orval;

Todavia, essa aplicação foi desenvolvida durante o NLW Connect da [Rocketseat](https://www.rocketseat.com.br/) utilizando principalmente tecnologias como `Next.js`, `Tailwind CSS` e `TypeScript`.


<!-- ## 🔗 Deploy

O deploy da aplicação pode ser acessada através da seguinte URL base: https://pabloxt14-nlw-expert-notes.vercel.app/ -->


## 🎨 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/community/file/1471119935944492720/nlw-connect-devstage). É necessário ter conta no [Figma](https://www.figma.com/) para acessá-lo.

A seguir, veja uma demonstração das principais telas da aplicação:

### LP (Desktop)

<p align="center">
  <img
    src=".github/screens/lp-desktop.png"
    alt="LP Desktop"
    title="LP Desktop"
  />
</p>

### LP (Mobile)

<p align="center">
  <img
    src=".github/screens/lp-mobile.png"
    alt="LP Mobile"
    title="LP Mobile"
  />
</p>

### Event (Desktop)

<p align="center">
  <img
    src=".github/screens/event-desktop.png"
    alt="Event Desktop"
    title="Event Desktop"
  />
</p>

### Event (Mobile)

<p align="center">
  <img
    src=".github/screens/event-mobile.png"
    alt="Event Mobile"
    title="Event Mobile"
  />
</p>


## ⚙ Setup

### 📝 Requisites

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) 
* Para reproduzir o acesso a API back-end com os dados necessários para o front-end, clone o seguinte [repositório](https://github.com/pabloxt14/nlw-journey-node) que contem a API do nosso back-end feita em Node.js e execute na sua máquina.

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Cloning and Running

Passo a passo para clonar e executar a aplicação na sua máquina:

```bash
# Clone este repositório
$ git clone git@github.com:pabloxt14/nlw-connect-react.git

# Acesse a pasta do projeto no terminal
$ cd nlw-connect-react

# Instale as dependências
$ npm install

# Baixar e Executar a API back-end
$ git clone https://github.com/rocketseat-education/nlw-connect-node.git
$ cd nlw-connect-node
$ npm install

# Execute o docker e docker-compose na sua máquina (se não tiver instale-os) 
$ docker compose up -d

# Rodando as migrations
$ npm run db:migrate

# Executando a API
$ npm run dev

# Execute a aplicação em modo de desenvolvimento
$ cd nlw-connect-react
$ npm run dev
```


## 🛠 Technologies

As seguintes principais ferramentas foram usadas na construção do projeto:

- **[React](https://react.dev/)**
- **[Next](https://nextjs.org/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[Lucide](https://lucide.dev/)**
- **[React Hook Form](https://react-hook-form.com/)**
- **[Zod](https://zod.dev/)**
- **[Sonner](https://sonner.emilkowal.ski/)**
- **[Orval](https://orval.dev/)**

> Para mais detalhes das dependências gerais da aplicação veja o arquivo [package.json](./mobile/package.json)


## 📝 License

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações

<p align="center">
  Feito com 💜 por Pablo Alan 👋🏽 <a href="https://www.linkedin.com/in/pabloalan/" target="_blank">Entre em contato!</a>  
</p>