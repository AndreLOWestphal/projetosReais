# 📋 API de Tarefas - Prática 5

Este projeto é uma API de gerenciamento de tarefas que utiliza **Node.js**, **Express**, e **Sequelize** para interagir com um banco de dados PostgreSQL. A API permite a criação, visualização e exclusão de tarefas.

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

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter o seguinte instalado:

- **Node.js** (v14 ou superior)
- **NPM** (v6 ou superior)
- **PostgreSQL** (ou qualquer outro banco de dados compatível)

---

## 🚀 Como Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/sua-repositorio.git
   cd sua-repositorio
   ```

2. **Instale as dependências:**

    ```bash
    npm install express sequelize pg pg-hstore
    ```
3. **Configure o banco de dados:**

* Crie um banco de dados PostgreSQL chamado tarefas_db.
* Configure as credenciais de acesso no arquivo config/database.js (caso necessário).

4. **Execute a API:**

    ```bash
    node server.js
    ```
A API ficará disponível em http://localhost:3000.

## 💡 Explicação do Código
### `config/database.js` *(Configuração do Banco de Dados)*
Este arquivo configura a conexão com o banco de dados PostgreSQL utilizando o **Sequelize**. As credenciais de acesso são definidas diretamente no arquivo. A conexão é estabelecida ao inicializar o servidor.

### `models/Task.js` *(Modelo de Dados)*
O modelo **Task** define a estrutura da tabela de tarefas no banco de dados. Ele contém os seguintes campos:

* **id:** Identificador único da tarefa (auto-incremento).
* **titulo:** Título da tarefa (campo obrigatório).
* **descricao:** Descrição detalhada da tarefa (campo opcional).
* **status:** Status da tarefa, indicando se foi concluída ou não (valor booleano).
* **criado_em:** Data e hora de criação da tarefa (valor gerado automaticamente).  
O Sequelize cria automaticamente a tabela tarefas no banco de dados, com os nomes dos campos seguindo o estilo `snake_case`.

### `routes/task.js` *(Rotas da API)*
Aqui estão as rotas da API:

* **POST /tarefas:** Cria uma nova tarefa no banco de dados. Os dados da tarefa (título e descrição) são recebidos no corpo da requisição.
* **GET /tarefas:** Retorna todas as tarefas cadastradas no banco de dados.
* **DELETE /tarefas/{id}:** Exclui uma tarefa pelo ID fornecido na URL.

### `server.js` *(Servidor da API)*
Este arquivo inicializa o servidor Express e a conexão com o banco de dados. As rotas são configuradas e o servidor é iniciado na porta 3000. O Sequelize é usado para autenticar a conexão com o banco de dados e sincronizar a tabela de tarefas.

## 📚 Exemplo de Saída

### **Criando uma nova tarefa (via POST):**
Se você enviar uma requisição POST para o endpoint `/tarefas` com um corpo contendo um título e descrição:

**Exemplo de corpo da requisição:**

```json
{
  "titulo": "Comprar leite",
  "descricao": "Ir ao mercado para comprar leite"
}
```
**A resposta será:**

```json
{
  "id": 1,
  "titulo": "Comprar leite",
  "descricao": "Ir ao mercado para comprar leite",
  "status": false,
  "criado_em": "2024-11-30T00:00:00.000Z"
}
```
## **Listando todas as tarefas (via GET):**
Se você enviar uma requisição GET para o endpoint /tarefas, a resposta será a lista de todas as tarefas cadastradas.

**Exemplo de resposta:**

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
## Excluindo uma tarefa (via DELETE):
Se você enviar uma requisição DELETE para o endpoint /tarefas/1 (onde 1 é o ID da tarefa), a resposta será:

```json
{
  "message": "Tarefa com ID 1 excluída com sucesso."
}
```
Se o ID não for encontrado, a resposta será:

```json
{
  "error": "Tarefa com ID 1 não encontrada."
}
```
## 🛡️ Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.

## 💡 Próximos Passos
* Implementar atualização de tarefas (PUT).
* Adicionar autenticação de usuário.
* Adicionar validação de entrada para as tarefas.
* Criar interface gráfica para gerenciamento de tarefas.