# Prática 8 - Projeto de Gerenciamento de Vendas 

Este projeto é um exemplo de aplicação simples de gerenciamento de vendas, onde é possível cadastrar vendas, visualizar todas as vendas realizadas e consultar os produtos mais vendidos. A aplicação foi desenvolvida com o uso de **Node.js**, **Express**, **PostgreSQL** e **JavaScript no frontend**. Abaixo, vamos explorar como a aplicação funciona, os desafios enfrentados, as tecnologias utilizadas e os conhecimentos adquiridos.

---

## 🛠️ **Tecnologias Utilizadas**

- **Node.js**: Plataforma para desenvolvimento do backend.
- **Express.js**: Framework para facilitar a criação de rotas e middleware no backend.
- **PostgreSQL**: Banco de dados relacional para armazenar as informações de vendas.
- **JavaScript (Frontend)**: Manipulação de DOM e requisições HTTP utilizando `axios` para enviar dados ao backend.
- **HTML/CSS**: Estrutura e estilização do frontend.
- **Axios**: Biblioteca JavaScript para fazer requisições HTTP de forma simples no frontend.

---

## 💡 **Como Funciona a Aplicação**

1. **Cadastro de Vendas (POST)**
   - O usuário pode inserir uma nova venda através de um formulário no frontend.
   - Os dados da venda (ID do produto, quantidade e preço total) são enviados via **POST** para o backend, onde são inseridos na tabela `vendas` no banco de dados.
   - O backend retorna a venda inserida com sucesso ou um erro, caso algum campo esteja faltando ou ocorra algum problema no banco de dados.

2. **Visualizar Todas as Vendas (GET)**
   - A aplicação permite consultar todas as vendas registradas no banco de dados.
   - A consulta é feita com um **GET** que retorna todas as vendas, ordenadas pela data de criação.

3. **Produtos Mais Vendidos (GET)**
   - Através de uma consulta agregada no banco de dados, a aplicação retorna os 5 produtos mais vendidos, com base na quantidade total vendida.

---

## 🏗️ **Desafios e Dificuldades Encontradas**

### 1. **Conexão com o Banco de Dados**
   - No início, tive dificuldades para configurar a conexão com o banco de dados PostgreSQL, principalmente com a configuração correta do `Pool` de conexões.
   - A solução foi revisar a configuração do `pg` (PostgreSQL client) e garantir que as credenciais de conexão estavam corretas.

### 2. **Validação de Dados no Backend**
   - A validação de dados no backend foi um desafio, pois eu precisava garantir que o frontend estivesse enviando os dados corretamente e que os campos obrigatórios fossem verificados.
   - Implementei a validação de campos obrigatórios para evitar que dados incompletos fossem processados.

### 3. **Comunicação entre Frontend e Backend**
   - A comunicação entre o frontend e o backend usando **axios** foi um pouco desafiadora no início, mas ao praticar com requisições **POST** e **GET**, foi possível entender melhor como as respostas do servidor são manipuladas e exibidas no frontend.

---

## 🌱 **Conhecimentos Adquiridos**

- **Integração Frontend-Backend**: Aprendi a integrar o frontend em **JavaScript** com o backend em **Node.js**, utilizando **axios** para fazer requisições HTTP. Essa prática me ajudou a entender como um sistema cliente-servidor se comunica.
  
- **CRUD em PostgreSQL**: Trabalhei com a construção de queries SQL no **PostgreSQL** para realizar as operações básicas de **Create**, **Read**, e **Read (Agregado)**, o que me deu uma boa compreensão de como manipular dados em um banco de dados relacional.
  
- **Estruturação de Rotas em Express**: Aprendi a criar rotas **RESTful** no **Express.js**, implementando métodos **GET** e **POST** para interagir com os dados no backend.
  
- **Validação e Tratamento de Erros**: Aprendi a implementar a validação de dados no backend e a tratar erros, retornando mensagens claras para o frontend, melhorando a experiência do usuário.

---

## 🔧 **Funcionalidades**

### **Cadastro de Venda**
Ao submeter o formulário de venda no frontend, as informações são enviadas ao backend, que processa e insere os dados no banco de dados PostgreSQL. Em caso de erro, uma mensagem de erro é exibida.

**Funcionalidade no Backend**:
- **POST** para cadastrar vendas na tabela `vendas`.
- Validação de dados para garantir que todos os campos obrigatórios estejam presentes.

### **Exibição de Vendas**
Todas as vendas registradas podem ser visualizadas em uma lista no frontend. As vendas são recuperadas do banco de dados por meio de uma consulta **GET** no backend.

**Funcionalidade no Backend**:
- **GET** para retornar todas as vendas do banco de dados.
- Ordenação das vendas pela data de criação.

### **Produtos Mais Vendidos**
Esta funcionalidade permite visualizar os 5 produtos mais vendidos. A consulta é feita no banco de dados através de uma agregação.

**Funcionalidade no Backend**:
- **GET** para consultar os 5 produtos mais vendidos, agrupando as vendas por `product_id`.

---

## 🔄 **Fluxo de Dados**

### 1. **Frontend**
   - O usuário preenche o formulário de venda no **HTML**.
   - O **JavaScript** captura os dados e envia para o backend utilizando **axios**.
   - O **CSS** aplica um estilo simples e intuitivo para a página, destacando as mensagens de sucesso ou erro.

### 2. **Backend**
   - O **Express** manipula as requisições do frontend.
   - O **Node.js** processa as requisições, interage com o banco de dados PostgreSQL e retorna as respostas ao frontend.

### 3. **Banco de Dados**
   - O **PostgreSQL** armazena os dados das vendas e executa consultas para retornar as informações requisitadas, como a lista de vendas e os produtos mais vendidos.

---

## ⚙️ **Melhorias Futuras**

- **Autenticação e Autorização**: Implementar um sistema de autenticação para garantir que apenas usuários autorizados possam acessar ou cadastrar vendas.
- **Interface do Usuário (UI)**: Melhorar a interface do usuário para torná-la mais interativa e fácil de usar, com gráficos para visualização das vendas.
- **Testes Automatizados**: Criar testes para garantir a integridade do sistema, utilizando ferramentas como **Jest** ou **Mocha**.

---

## 🚀 **Conclusão**

Esse projeto me proporcionou uma experiência prática valiosa, que envolveu tanto a parte de backend com **Node.js** e **PostgreSQL** quanto o desenvolvimento frontend com **JavaScript** e **HTML/CSS**. Com os desafios enfrentados e os conhecimentos adquiridos, sinto-me mais preparado para enfrentar projetos maiores e mais complexos no futuro.
