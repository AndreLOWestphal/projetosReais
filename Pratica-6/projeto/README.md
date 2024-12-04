# Prática 6 - Gerenciador de Postagens com API Integrada

## Visão Geral

O **Gerenciador de Postagens com API Integrada** é uma aplicação backend desenvolvida para manipular postagens através de um servidor Express.js, utilizando o banco de dados PostgreSQL com o ORM Sequelize. A principal funcionalidade dessa aplicação é integrar dados provenientes de uma API externa (JsonPlaceholder), importar esses dados para o banco de dados local, e fornecer operações CRUD para gerenciar esses dados. Além disso, a aplicação permite excluir postagens individualmente ou em massa, oferecendo uma maneira robusta e eficiente de lidar com postagens em sistemas de produção.

### Objetivo do Projeto

O projeto visa facilitar o gerenciamento de postagens em uma plataforma backend, permitindo a importação de dados externos, visualização, e exclusão de dados, com foco em flexibilidade e simplicidade na gestão de grandes volumes de informações. Este tipo de aplicação pode ser amplamente utilizado em plataformas que lidam com conteúdo gerado por usuários, como redes sociais, blogs ou sistemas de gerenciamento de conteúdo (CMS).

---

## Funcionalidades

O sistema oferece as seguintes funcionalidades principais:

### 1. **Importação de Dados da API Externa** 
> 💡 **Dica**: A aplicação integra-se com a API do JsonPlaceholder para importar dados de postagens. Isso é feito através de uma requisição HTTP para a API externa, onde os dados recebidos são então salvos em um banco de dados PostgreSQL.

**Como funciona?**
- A requisição é feita com o `axios`, e os dados recebidos são mapeados e armazenados no banco de dados utilizando o Sequelize.

### 2. **Exibição de Postagens** 
> 💡 **Dica**: A aplicação permite visualizar todas as postagens armazenadas no banco de dados através de uma simples requisição `GET`. 
> **Por que isso é importante?**: Essa funcionalidade é essencial para obter uma lista completa de registros de maneira rápida e eficiente.

### 3. **Exclusão de Postagens Individualmente** 
> ⚠️ **Atenção**: A rota `DELETE /posts/:id` permite excluir postagens individualmente, identificando-as pelo `id`. Caso a postagem não seja encontrada, uma mensagem de erro será retornada.

**Como funciona?**
- O cliente envia uma requisição para excluir uma postagem específica, e o sistema realiza a exclusão no banco de dados.

### 4. **Exclusão em Massa** 
> 💡 **Dica**: A rota `DELETE /posts/muitas` permite a exclusão de várias postagens de uma só vez. Ela recebe um array de IDs no corpo da requisição, valida os dados, e realiza a exclusão das postagens correspondentes.

**Por que isso é importante?**
- Facilita a limpeza de dados em massa, garantindo que a aplicação seja eficiente mesmo com grandes volumes de postagens.

---

## Tecnologias Utilizadas

A escolha das tecnologias foi estratégica para garantir alta performance, facilidade de manutenção e escalabilidade:

- **Node.js & Express.js**: Frameworks utilizados para o desenvolvimento do servidor backend. Express facilita o roteamento e a configuração do servidor.
  
- **Sequelize ORM**: ORM (Object Relational Mapping) utilizado para interagir com o banco de dados PostgreSQL. Permite abstrair as operações SQL complexas e facilita a manutenção.

- **PostgreSQL**: Banco de dados relacional utilizado para armazenar as postagens. Ideal para armazenar dados estruturados e escaláveis.

- **Axios**: Biblioteca de requisições HTTP utilizada para fazer chamadas à API externa JsonPlaceholder, permitindo que dados sejam importados de maneira eficiente.

---

## Estrutura do Projeto

O projeto é dividido em três principais camadas:

### 1. **Configuração do Banco de Dados (Sequelize)**
> 💡 **Dica**: A configuração inicial do Sequelize garante a comunicação com o banco de dados PostgreSQL. 
> **Por que isso é importante?**: O Sequelize facilita a interação com o banco de dados, fornecendo um modelo de dados em JavaScript que se alinha diretamente com o banco relacional.

- **Tabela de Postagens (Post)**: A tabela `Post` contém os campos `id`, `userId`, `title`, e `body`, que são correspondentes aos dados recebidos da API externa.

### 2. **Rotas e Controladores (Express.js)**
> ⚠️ **Atenção**: Certifique-se de que todas as rotas estão devidamente configuradas e que os métodos HTTP corretos são utilizados.

#### **Rota GET**: 
- A rota `GET /posts` permite consultar todas as postagens. A consulta é realizada no banco de dados e os resultados são retornados em formato JSON.

#### **Rota POST (Importação)**:
- A rota `POST /posts/importar` realiza a importação dos dados da API externa JsonPlaceholder, salvando-os no banco de dados. O processo é feito de forma assíncrona e utiliza `Promise.all` para garantir que todas as postagens sejam salvas de uma vez.

#### **Rota DELETE (Exclusão de Postagem)**:
- A rota `DELETE /posts/:id` exclui postagens individualmente. Caso a postagem não seja encontrada, um erro é retornado.

#### **Rota DELETE (Exclusão em Massa)**:
- A rota `DELETE /posts/muitas` permite excluir várias postagens ao mesmo tempo. O corpo da requisição deve conter um array de IDs das postagens que precisam ser excluídas.

### 3. **Inicialização e Execução**
> 💡 **Dica**: O servidor Express.js é iniciado após a autenticação bem-sucedida com o banco de dados PostgreSQL. A conexão é estabelecida e o servidor é configurado para ouvir na porta 3000.

**Como funciona?**
- A conexão com o banco de dados é verificada antes que o servidor inicie. O Sequelize é sincronizado para garantir que as tabelas sejam criadas conforme os modelos definidos no código.

---

## Aplicação Real no Mercado de Trabalho

Este tipo de aplicação tem uma ampla gama de utilidades no mercado de trabalho, especialmente em sistemas de gerenciamento de conteúdo (CMS), redes sociais, e-commerce e plataformas de blogs.

> 💡 **Dica**: A aplicação pode ser adaptada para diferentes cenários, como plataformas de gerenciamento de conteúdo, e-commerces e redes sociais.

### Exemplos de Utilização:
- **Plataformas de Gerenciamento de Conteúdo (CMS)**: Facilita o gerenciamento de postagens e conteúdo gerado por usuários.
- **Redes Sociais**: Pode ser utilizada para gerenciar postagens de usuários.
- **E-commerce**: Ideal para gerenciar conteúdo relacionado a blogs ou promoções.

---

## Desafios Durante o Desenvolvimento

### 1. **Integração com API Externa**
> ⚠️ **Atenção**: A integração com APIs externas pode ser desafiadora, especialmente quando a API externa muda seus dados ou estrutura.

**Como resolvemos?**
- Usamos o `axios` para realizar a requisição e processar os dados de forma assíncrona. Além disso, garantimos que os dados sejam mapeados para o formato do banco de dados.

### 2. **Manipulação de Dados**
> 💡 **Dica**: A formatação e validação dos dados recebidos da API externa exigiram cuidados especiais para garantir a integridade dos dados no banco.

**Como resolvemos?**
- Utilizamos o Sequelize para mapear os dados recebidos e validá-los antes de inseri-los no banco de dados.

### 3. **Validação e Exclusão em Massa**
> ⚠️ **Atenção**: Ao permitir exclusão em massa, é importante validar os dados antes de realizar qualquer operação no banco de dados.

**Como resolvemos?**
- Validamos se os IDs fornecidos são válidos antes de realizar a operação de exclusão.

---

## Conclusão

O **Gerenciador de Postagens com API Integrada** é uma solução prática e eficiente para o gerenciamento de postagens em um ambiente backend. Ele demonstra como integrar dados externos, utilizar um ORM para gerenciar um banco de dados e fornecer APIs para operações CRUD, todas com uma estrutura flexível e escalável. As tecnologias utilizadas, como Node.js, Express.js, Sequelize e PostgreSQL, são amplamente adotadas no mercado, oferecendo ao projeto uma base sólida para ser expandido e adaptado a diferentes necessidades do mercado de trabalho.

---

> ⚠️ **Atenção**: Este projeto pode ser expandido para incluir autenticação de usuários, filtros de busca mais avançados e integração com outras APIs externas, tornando-o ainda mais robusto para ambientes de produção.
