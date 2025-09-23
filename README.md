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
