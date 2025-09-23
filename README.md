<<<<<<< HEAD
![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-starter

This repo contains example nodes to help you get started building your own custom integrations for [n8n](https://n8n.io). It includes the node linter and other dependencies.

To make your custom node available to the community, you must create it as an npm package, and [submit it to the npm registry](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry).

If you would like your node to be available on n8n cloud you can also [submit your node for verification](https://docs.n8n.io/integrations/creating-nodes/deploy/submit-community-nodes/).

## Prerequisites

You need the following installed on your development machine:

* [git](https://git-scm.com/downloads)
* Node.js and npm. Minimum version Node 20. You can find instructions on how to install both using nvm (Node Version Manager) for Linux, Mac, and WSL [here](https://github.com/nvm-sh/nvm). For Windows users, refer to Microsoft's guide to [Install NodeJS on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
* Install n8n with:
  ```
  npm install n8n -g
  ```
* Recommended: follow n8n's guide to [set up your development environment](https://docs.n8n.io/integrations/creating-nodes/build/node-development-environment/).

## Using this starter

These are the basic steps for working with the starter. For detailed guidance on creating and publishing nodes, refer to the [documentation](https://docs.n8n.io/integrations/creating-nodes/).

1. [Generate a new repository](https://github.com/n8n-io/n8n-nodes-starter/generate) from this template repository.
2. Clone your new repo:
   ```
   git clone https://github.com/<your organization>/<your-repo-name>.git
   ```
3. Run `npm i` to install dependencies.
4. Open the project in your editor.
5. Browse the examples in `/nodes` and `/credentials`. Modify the examples, or replace them with your own nodes.
6. Update the `package.json` to match your details.
7. Run `npm run lint` to check for errors or `npm run lintfix` to automatically fix errors when possible.
8. Test your node locally. Refer to [Run your node locally](https://docs.n8n.io/integrations/creating-nodes/test/run-node-locally/) for guidance.
9. Replace this README with documentation for your node. Use the [README_TEMPLATE](README_TEMPLATE.md) to get started.
10. Update the LICENSE file to use your details.
11. [Publish](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry) your package to npm.

## More information

Refer to our [documentation on creating nodes](https://docs.n8n.io/integrations/creating-nodes/) for detailed information on building your own nodes.

## License

[MIT](https://github.com/n8n-io/n8n-nodes-starter/blob/master/LICENSE.md)
=======
# 🎲 n8n Custom Node: Random Number Generator (Desafio Onfly)

[![Node.js](https://img.shields.io/badge/Node.js-v22-brightgreen)](https://nodejs.org/) [![Docker](https://img.shields.io/badge/Docker-Desktop-blue)](https://www.docker.com/products/docker-desktop/) [![License](https://img.shields.io/badge/License-MIT-lightgrey)](LICENSE)

Este projeto implementa um **nó personalizado** para a plataforma de automação de workflows **n8n**, desenvolvido como parte do processo seletivo da **Onfly**.

O nó **Random** integra-se à API pública do [Random.org](https://www.random.org/) para gerar números inteiros verdadeiramente aleatórios a partir de um intervalo definido pelo usuário, estendendo as capacidades nativas do n8n.

---

## ⚙️ Funcionalidades

-   **Operação:** *True Random Number Generator*
-   **Inputs Configuráveis:** Permite definir um valor `Mínimo` e `Máximo` (ambos inclusivos).
-   **Integração Externa:** Usa o endpoint `GET /integers/` da API do [Random.org](https://www.random.org/clients/http/).
-   **Ícone Personalizado:** Ícone SVG para fácil identificação na interface do n8n.

---

## 🚀 Guia de Instalação e Execução

### Pré-requisitos

-   [Node.js](https://nodejs.org/) v22 LTS ou superior
-   [Docker Desktop](https://www.docker.com/products/docker-desktop) com Docker Compose v2+

### 1. Instalação

Primeiro, clone o repositório e instale as dependências de desenvolvimento necessárias para compilar o nó.

```bash
# Clone este repositório
git clone [https://github.com/ZegarraV/Desafio-Onfly.git](https://github.com/ZegarraV/Desafio-Onfly.git)
cd Desafio-Onfly

# Instale as dependências de desenvolvimento
npm install
```

### 2. Execução do Ambiente

Com as dependências instaladas, compile o conector e inicie o ambiente Docker.

```bash
# 1. Compile o conector TypeScript para JavaScript
npm run build

# 2. Inicie os containers do n8n e PostgreSQL em segundo plano
docker-compose up -d
```
A interface do n8n estará disponível em **[http://localhost:5678](http://localhost:5678)**.

*(Opcional) Para visualizar os logs em tempo real, execute: `docker-compose logs -f`*

### 3. Parando o Ambiente

Para parar todos os serviços e liberar as portas, utilize o comando:
```bash
docker-compose down
```
Para parar os serviços e **remover os dados persistentes** do banco de dados (útil para um recomeço limpo), execute:
```bash
docker-compose down -v
```

---
## 🔧 Configuração e Testes

### Configuração do Ambiente
**Toda a configuração do ambiente é gerenciada pelo arquivo `docker-compose.yml`**. Não é necessário criar arquivos `.env` ou configurar variáveis manualmente.
-   **Banco de Dados:** O serviço PostgreSQL é criado e configurado automaticamente com credenciais padrão para uso do n8n.
-   **Variáveis do n8n:** As variáveis para conexão com o banco e para o carregamento de nós customizados (`N8N_CUSTOM_EXTENSIONS`) já estão definidas no `docker-compose.yml`.

### Execução dos Testes
Os testes para este projeto são **manuais e funcionais**, realizados diretamente na interface do n8n:
1.  Acesse **[http://localhost:5678](http://localhost:5678)**.
2.  Crie um novo workflow.
3.  Adicione o nó **"Random"**.
4.  Preencha os campos "Min" e "Max".
5.  Clique em **"Execute Node"**.
6.  Verifique a aba **"Output"** para confirmar que um `randomNumber` foi gerado dentro do intervalo especificado.

*Nota: Não há testes automatizados (npm test) configurados, pois o foco do desafio é a integração e o funcionamento do nó no ambiente n8n.*

---

## 📂 Estrutura do Projeto
```
.
├── dist/   
├── nodes/
│   └── n8n-nodes-random/
│       ├── src/
│       │   ├── Random.node.ts    # Código-fonte principal
│       │   └── Random.node.svg   # Ícone do nó (Estrutura ajustada)
│       ├── package.json          # "Identidade" do nó
│       └── tsconfig.json         # Configuração TypeScript do nó
├── docker-compose.yml          # Orquestração Docker do n8n e Postgres
├── package.json                # Dependências de desenvolvimento do projeto
├── tsconfig.json               # Configuração raiz TypeScript
└── README.md
```

## ℹ️ Informações Adicionais

-   **Base do Projeto:** Desenvolvido a partir do repositório `n8n-nodes-starter`, seguindo as melhores práticas da documentação oficial do n8n.
-   **Depuração:** O desenvolvimento incluiu um processo de depuração para ajustar a compilação do TypeScript, a configuração de volumes no Docker em ambiente Windows e a renderização de ícones SVG.

## 🔗 Referências

Links úteis consultados durante o desenvolvimento deste projeto:

-   [Documentação n8n: Criando Nós Customizados](https://docs.n8n.io/nodes/creating-nodes/)
-   [Guia n8n: Desenvolvendo Nós no Estilo Programático](https://docs.n8n.io/integrations/creating-nodes/build/programmatic-style-node/)
-   [Guia n8n: Testando um Nó Localmente](https://docs.n8n.io/integrations/creating-nodes/test/run-node-locally/)
-   [Documentação n8n: Instalação via Docker](https://docs.n8n.io/hosting/installation/docker/)
-   [Documentação da API do Random.org](https://www.random.org/clients/http/)

---
**Desenvolvedor:** Vinicius Zegarra Palhares
>>>>>>> 947a8af380b440bd420eb7f660c96d3b2ddd5a10
