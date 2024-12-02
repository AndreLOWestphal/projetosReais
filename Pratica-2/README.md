# 🚀 API de Gerenciamento de Tarefas - Prática 2

Este projeto é uma API simples para gerenciar tarefas, construída com **Node.js** e usando bibliotecas como **Express**, **Joi** e **Swagger**. A API inclui operações CRUD completas e documentação interativa com o Swagger UI.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework para criar aplicações web e APIs.
- **Joi**: Validação de dados.
- **Swagger**: Documentação interativa para APIs.

---

## 🌟 Funcionalidades

- **GET /tasks**: Retorna todas as tarefas.
- **POST /tasks**: Cria uma nova tarefa.
- **PUT /tasks/{id}**: Atualiza completamente uma tarefa pelo ID.
- **PATCH /tasks/{id}**: Atualiza parcialmente uma tarefa pelo ID.
- **DELETE /tasks/{id}**: Remove uma tarefa pelo ID.
- **/api-docs**: Interface de documentação interativa para explorar a API.

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter o seguinte instalado:

- **Node.js** (v14 ou superior)
- **NPM** (v6 ou superior)

---

## 🚀 Como Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/sua-repositorio.git
   cd sua-repositorio
   ```
2. **Instale as dependências:**

    ```bash
    npm install
    ```
3. **Inicie o servidor:**

    ```bash
    node server.js
    ```
4. **Acesse a API em:**

* http://localhost:3000/tasks  
* Documentação interativa: http://localhost:3000/api-docs  
## 📚 Exemplos de Uso
### **Exemplo de Resposta - GET /tasks**
```json
[
  {
    "id": 1,
    "title": "Fazer compras",
    "completed": false
  },
  {
    "id": 2,
    "title": "Estudar para o teste",
    "completed": false
  }
]
```
### **Exemplo de Requisição - POST /tasks**
**Body**
```json
{
  "title": "Aprender Node.js",
  "completed": true
}
```
**Resposta**
```json
{
  "id": 3,
  "title": "Aprender Node.js",
  "completed": true
}
```
## ⚙️ Configuração do Swagger

A API conta com uma documentação interativa gerada pelo Swagger. Acesse através de:  
http://localhost:3000/api-docs

## 🧪 Validações com Joi
Os dados enviados para a API são validados com Joi. Exemplos:

* O campo title é obrigatório e deve ter no mínimo 3 caracteres.
* O campo completed é opcional, mas se fornecido, deve ser um valor booleano.
## 🛡️ Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.

## 💡 Próximos Passos
* Adicionar autenticação com JWT.  
* Implementar banco de dados relacional (ex.: PostgreSQL).  
* Melhorar a cobertura de testes automatizados.  

