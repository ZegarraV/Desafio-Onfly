# 🎲 n8n Custom Node: Random Number Generator (Desafio Onfly)

[![Node.js](https://img.shields.io/badge/Node.js-v22-brightgreen)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/Docker-Desktop-blue)](https://www.docker.com/products/docker-desktop/)
[![License](https://img.shields.io/badge/License-MIT-lightgrey)](LICENSE)

Este projeto implementa um **nó personalizado** para a plataforma de automação de workflows **n8n**, desenvolvido como parte do processo seletivo da **Onfly**.  

O nó **Random** integra-se à API pública do [Random.org](https://www.random.org/) para gerar números inteiros verdadeiramente aleatórios a partir de um intervalo definido pelo usuário, estendendo as capacidades nativas do n8n.

---

## ⚙️ Funcionalidades

- **Operação:** True Random Number Generator  
- **Inputs Configuráveis:** Permite definir um valor mínimo e máximo (ambos inclusivos)  
- **Integração Externa:** Usa o endpoint `GET /integers/` da API do Random.org  
- **Ícone Personalizado:** SVG para identificação fácil na interface do n8n  

---

## 🚀 Guia de Instalação e Execução

### Pré-requisitos

- Node.js v22 LTS ou superior  
- Docker Desktop  
- Docker Compose >= 2.0  

---

### 1. Instalar as Dependências

```bash
# Clone o repositório (substitua pela sua URL)
git clone https://github.com/[SEU_USUARIO_GITHUB]/[NOME_DO_REPOSITORIO].git
cd [NOME_DO_REPOSITORIO]

# Instale as dependências
npm install

# Compile o conector TypeScript para JavaScript
npm run build

# Inicie os containers do n8n e PostgreSQL em segundo plano
docker-compose up -d

# (Opcional) Verifique logs em tempo real
docker-compose logs -f

A interface do n8n estará disponível em: http://localhost:5678

Para parar todos os serviços:

docker-compose down


Para remover volumes persistentes:

docker-compose down -v

3. Configurar o Ambiente

Toda a configuração é gerenciada pelo arquivo docker-compose.yml

Banco de dados: PostgreSQL configurado automaticamente com usuário, senha e banco padrão

Variáveis do n8n: Já definidas no docker-compose.yml, incluindo suporte a carregamento de conectores customizados (N8N_CUSTOM_EXTENSIONS)

4. Executar os Testes

Testes manuais e funcionais na interface do n8n:

Acesse http://localhost:5678

Crie um novo workflow

Adicione o nó Random

Preencha os campos Min e Max

Clique em Execute Node

Verifique a aba Output para confirmar que o número aleatório foi gerado

Não há testes automatizados (npm test) configurados, pois o foco é a integração e funcionamento do nó no n8n.

📂 Estrutura do Projeto
.
├── nodes/
│   └── n8n-nodes-random/
│       ├── dist/                # Código JS compilado (lido pelo n8n)
│       ├── src/
│       │   ├── Random.node.ts   # Código-fonte principal
│       │   └── icons/
│       │       └── Random.node.svg # Ícone do nó
│       ├── package.json         # Identidade do nó
│       └── tsconfig.json        # Configuração TypeScript
├── docker-compose.yml           # Orquestração Docker do n8n e Postgres
├── package.json                 # Dependências de desenvolvimento
├── tsconfig.json                # Configuração raiz TypeScript
└── README.md

ℹ️ Informações Adicionais

Base do Projeto: Desenvolvido a partir do n8n-nodes-starter

Depuração: Ajustes para compilação TypeScript, volumes Docker e ícones SVG

Desenvolvedor: Vinicius Zegarra Palhares

🔗 Referências

https://docs.n8n.io/nodes/creating-nodes/

https://www.random.org/clients/http/
