# 📚 README - Projetos Práticos (Fictícios e Reais)

Bem-vindo ao repositório de **Projetos Práticos**! Este repositório contém uma coleção de projetos que cobrem tanto conceitos fundamentais quanto tecnologias e práticas mais avançadas, divididos em práticas fictícias e reais. Cada projeto foi projetado para fornecer aprendizado prático em diferentes áreas do desenvolvimento de software, incluindo a criação de APIs, validação de dados, documentação interativa e uso de frameworks como **Node.js** e **Express.js**.

Os projetos estão organizados de forma a permitir que você compreenda os conceitos, as tecnologias utilizadas e os resultados esperados, além de seguir exemplos de boas práticas no desenvolvimento de sistemas.

---

## 📜 **Conteúdo dos Projetos**

### 🛠️ **CRUD API com Express.js (Prática 1)**

Este projeto apresenta a construção de uma **API RESTful simples** utilizando **Express.js**, abordando operações básicas de CRUD (Criar, Ler, Atualizar e Deletar) com um banco de dados em memória.

#### Funcionalidades:
- **GET /tasks**: Retorna todos os itens armazenados.
- **POST /tasks**: Cria um novo item.
- **PUT /tasks/:id**: Atualiza completamente um item.
- **PATCH /tasks/:id**: Atualiza parcialmente um item.
- **DELETE /tasks/:id**: Remove um item.

#### Tecnologias:
- **Express.js**: Framework para criar APIs.
- **Métodos HTTP**: Utilização de GET, POST, PUT, PATCH e DELETE para interagir com os dados.

#### Aprendizados:
- Estruturar uma API RESTful com **Express.js**.
- Manipulação de dados em memória usando arrays.

---

### 🚀 **API de Gerenciamento de Tarefas - Prática 2**

Este projeto é uma versão aprimorada da **Prática 1**, com a adição de **Joi** para validação de dados e **Swagger** para documentação interativa.

#### Funcionalidades:
- **GET /tasks**: Retorna todas as tarefas.
- **POST /tasks**: Cria uma nova tarefa.
- **PUT /tasks/{id}**: Atualiza uma tarefa.
- **PATCH /tasks/{id}**: Atualiza parcialmente uma tarefa.
- **DELETE /tasks/{id}**: Remove uma tarefa.
- **/api-docs**: Interface de documentação interativa.

#### Tecnologias:
- **Node.js**, **Express**.
- **Joi** para validação de dados.
- **Swagger** para documentação interativa da API.

#### Aprendizados:
- Implementação de validação com **Joi**.
- Geração de documentação interativa com **Swagger**.

---

# 🌦️ API de Consulta de Clima - Prática 3

Este projeto tem como objetivo criar uma API simples que consulta informações meteorológicas em tempo real para uma cidade, utilizando a **OpenWeatherMap API**. O projeto é uma aplicação prática de como integrar APIs externas e realizar requisições HTTP utilizando **Axios**, uma biblioteca popular para esse fim no ecossistema JavaScript.

## 🚀 **Sobre o Projeto**

A API obtém informações como temperatura, descrição do clima e umidade de uma cidade específica, retornando esses dados em formato de texto simples. Isso pode ser útil em diversos cenários do cotidiano, como:

- **Aplicações de clima em tempo real**: Pode ser integrado a apps de clima, permitindo que os usuários consultem as condições meteorológicas diretamente.
- **Desenvolvimento de dashboards meteorológicos**: Ideal para empresas ou projetos que monitoram condições climáticas, como fazendas, estúdios de filmagem ou planejamento de eventos ao ar livre.
- **Automatização e monitoramento de sistemas**: Ferramentas para monitorar condições climáticas para sistemas de controle ambiental ou dispositivos IoT (Internet das Coisas).

## 🛠️ **Tecnologias e Ferramentas Utilizadas**

- **Node.js**: Ambiente de execução de JavaScript do lado servidor. Permite que você execute código JavaScript fora do navegador.
- **Axios**: Biblioteca para fazer requisições HTTP de forma simples e eficiente, muito usada em projetos Node.js e front-end.
- **OpenWeatherMap API**: Serviço que fornece dados sobre o clima em tempo real para qualquer cidade do mundo. A consulta é feita via chamadas HTTP com uma chave de API.

## 🌍 **Aplicações no Mundo Real**

- **Planejamento de Eventos**: Antes de eventos ao ar livre, é essencial conhecer as condições meteorológicas para ajustar a logística e garantir a segurança dos participantes.
- **Desenvolvimento de Assistentes Pessoais Inteligentes**: Ao integrar dados de clima, assistentes como Alexa ou Google Assistant podem fornecer previsões de tempo em tempo real.
- **Integração com IoT**: Sensores de temperatura e umidade podem se integrar com APIs de clima para ajustar automaticamente sistemas de climatização ou irrigação.

Com o **OpenWeatherMap API**, você pode integrar facilmente essas funcionalidades em aplicativos web ou móveis, tornando sua aplicação mais interativa e informativa. Este projeto é uma excelente introdução ao uso de APIs públicas para obter dados externos e utilizá-los de maneira prática e eficiente.

---
# 💼 API de Folha de Pagamento - Prática 4

Este projeto implementa uma API de folha de pagamento, com o objetivo de gerenciar dados de funcionários, como nome, cargo e salário. A API foi desenvolvida com **Node.js** e o framework **Express**, permitindo a realização de operações CRUD (Criar, Ler, Atualizar, Deletar) em um banco de dados fictício de funcionários.

## 🚀 **Sobre o Projeto**

A API permite manipular informações relacionadas aos funcionários de uma empresa, como cadastro, atualização e remoção de registros. Essa funcionalidade é importante em qualquer sistema de gestão de recursos humanos (RH), pois permite que os dados dos colaboradores sejam facilmente atualizados e gerenciados.

### **Aplicações no Mundo Real**
- **Sistemas de Recursos Humanos**: A API pode ser utilizada em softwares de gestão de RH para facilitar a administração de dados dos funcionários.
- **Integração com Folha de Pagamento**: Ela pode ser integrada a sistemas de cálculo de folha de pagamento, facilitando a atualização de salários e cargos automaticamente.
- **Relatórios e Análises**: A API pode ser usada para gerar relatórios de desempenho, categorizando funcionários por cargo ou salário.

## 🛠️ **Tecnologias e Ferramentas Utilizadas**

- **Node.js**: Ambiente de execução JavaScript do lado servidor, utilizado para construir a API.
- **Express**: Framework que facilita a criação de APIs e aplicativos web, proporcionando rotas e manipulação de requisições HTTP.
- **Axios**: Biblioteca para fazer requisições HTTP, utilizada no cliente para consumir a API e obter dados dos funcionários.

## 🌟 **Funcionalidades**

A API oferece os seguintes endpoints para a gestão dos dados dos funcionários:

- **GET /funcionarios**: Retorna todos os funcionários cadastrados no sistema.
- **POST /funcionarios**: Permite adicionar um novo funcionário, enviando os dados no corpo da requisição.
- **PUT /funcionarios/{id}**: Atualiza as informações de um funcionário específico, identificando-o pelo seu ID.
- **DELETE /funcionarios/{id}**: Remove um funcionário do sistema, com base no seu ID.

## 🖥️ **Como Aplicar na Vida Real**

Este tipo de API pode ser amplamente utilizado em empresas que precisam gerenciar informações de seus funcionários. Além disso, ela pode ser expandida para integrar-se a outros sistemas de gestão, como folhas de pagamento, controle de ponto e benefícios.

Por exemplo, em uma **empresa de médio porte**, o sistema de folha de pagamento poderia utilizar esta API para manter registros de colaboradores, facilitando a atualização dos dados sempre que necessário. Para empresas de **consultoria em RH**, a API pode ser adaptada para gerenciar diversos clientes e os dados de seus respectivos funcionários, tornando o processo mais eficiente.

## 📚 **Exemplo de Saída**

Após rodar o cliente para consultar os dados dos funcionários, a saída será similar a:

```bash
Funcionários cadastrados:
- João Silva (Desenvolvedor): R$6000
- João Pedro Henrique (Desenvolvedor Jr): R$2500
- Maria Oliveira (Analista): R$5000
- Pedro Santos (Gerente): R$9000
```

---

# 📋 API de Tarefas - Prática 5

Este projeto é uma **API de gerenciamento de tarefas** utilizando **Node.js**, **Express**, **Sequelize** e **PostgreSQL** para armazenar e gerenciar tarefas de forma eficiente.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework para criar APIs e aplicações web.
- **Sequelize**: ORM para interagir com bancos de dados SQL de forma simplificada.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar as tarefas.

---

## 🌟 Funcionalidades

- **POST /tarefas**: Cria uma nova tarefa no banco de dados.
- **GET /tarefas**: Retorna todas as tarefas cadastradas.
- **DELETE /tarefas/{id}**: Exclui uma tarefa pelo seu ID.

---

## 💡 Explicação do Código

### `config/database.js` *(Configuração do Banco de Dados)*

Este arquivo configura a conexão com o banco de dados PostgreSQL utilizando **Sequelize**. As credenciais de acesso são definidas diretamente no arquivo. A conexão é estabelecida ao inicializar o servidor.

### `models/Task.js` *(Modelo de Dados)*

O modelo **Task** define a estrutura da tabela de tarefas no banco de dados, com os seguintes campos:

- **id**: Identificador único da tarefa (auto-incremento).
- **titulo**: Título da tarefa (campo obrigatório).
- **descricao**: Descrição detalhada da tarefa (campo opcional).
- **status**: Status da tarefa, indicando se foi concluída ou não (booleano).
- **criado_em**: Data e hora de criação da tarefa (gerado automaticamente).

### `routes/task.js` *(Rotas da API)*

**As rotas da API são configuradas aqui:**

- **POST /tarefas**: Cria uma nova tarefa no banco de dados com dados enviados no corpo da requisição.
- **GET /tarefas**: Retorna todas as tarefas cadastradas.
- **DELETE /tarefas/{id}**: Exclui uma tarefa pelo ID fornecido na URL.

### `server.js` *(Servidor da API)*

Este arquivo inicializa o servidor Express, configura as rotas e a conexão com o banco de dados. O Sequelize autentica a conexão e sincroniza a tabela de tarefas.

---

## 📚 Exemplo de Saída

### **Criando uma nova tarefa (via POST)**

**Corpo da requisição:**
```json
{
  "titulo": "Comprar leite",
  "descricao": "Ir ao mercado para comprar leite"
}
```
**Resposta:**

```json
{
  "id": 1,
  "titulo": "Comprar leite",
  "descricao": "Ir ao mercado para comprar leite",
  "status": false,
  "criado_em": "2024-11-30T00:00:00.000Z"
}
```
**Listando todas as tarefas (via GET)**  
**Resposta:**

```json
[
  {
    "id": 1,
    "titulo": "Comprar leite",
    "descricao": "Ir ao mercado para comprar leite",
    "status": false,
    "criado_em": "2024-11-30T00:00:00.000Z"
  },
  {
    "id": 2,
    "titulo": "Limpar a casa",
    "descricao": "Fazer uma faxina geral na casa",
    "status": false,
    "criado_em": "2024-11-30T00:00:00.000Z"
  }
]
```
**Excluindo uma tarefa (via DELETE)**
**Requisição DELETE para /tarefas/1 (ID 1):**

**Resposta:**
```json
{
  "message": "Tarefa com ID 1 excluída com sucesso."
}
```
**Se o ID não for encontrado, a resposta será:**

```json
{
  "error": "Tarefa com ID 1 não encontrada."
}
```
---



## 📚 **Objetivos e Estrutura dos Projetos**

A coleção de **Projetos Práticos** foi criada para fornecer experiência prática no desenvolvimento de aplicações e APIs, começando com conceitos mais simples e avançando para integrações mais complexas, como validação de dados e documentação. Os projetos são focados principalmente em **Node.js**, **Express**, **Joi**, **Swagger**, mas também podem incluir outras tecnologias e ferramentas conforme necessário.

Cada projeto inclui uma descrição geral, tecnologias utilizadas, exemplos de endpoints e testes, e recomendações de como rodar a aplicação localmente.

## 💡 **Próximos Passos**

Fique atento às atualizações, pois mais projetos serão adicionados a este repositório, incluindo aqueles com foco em banco de dados, autenticação de usuários, e práticas de desenvolvimento mais avançadas, como integração contínua e testes automatizados.

---

### 📋 **Contribua**

Contribuições são sempre bem-vindas! Para contribuir, siga os seguintes passos:

1. Faça um fork do projeto.
2. Crie uma branch para sua funcionalidade ou correção.
3. Realize suas alterações e faça commit.
4. Envie para o repositório original com um pull request.
5. Adicione qualquer documentação necessária, caso tenha feito alterações significativas.

---

### 🛡️ **Licença**

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.