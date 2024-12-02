# 🛠️ CRUD API com Express.js

Bem-vindo ao repositório da **CRUD API** desenvolvida com Express.js! Este projeto demonstra como criar uma API RESTful simples que utiliza os métodos HTTP (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) para manipular um banco de dados improvisado em memória.

## 🚀 Funcionalidades

Esta API permite:
- **Listar todos os itens** cadastrados.
- **Adicionar um novo item**.
- **Atualizar um item existente** (total ou parcialmente).
- **Excluir um item** pelo ID.

---

## 📜 Endpoints

### 1️⃣ **Listar todos os itens**
**GET** `/tasks`  
Retorna todos os itens armazenados.

#### Exemplo de Resposta:
```json
[
    {"id": 1, "name": "Item 1"},
    {"id": 2, "name": "Item 2"}
]
```

### 2️⃣ **Adicionar um novo item**
**POST** `/tasks`
Adiciona um item ao banco de dados.

**Corpo da Requisição:**
```json
{
    "name": "Novo Item"
}
```
**Exemplo de Resposta:**
```json
{
    "id": 3,
    "name": "Novo Item"
}
```
### 3️⃣ **Atualizar um item completamente**
**PUT** `/tasks/:id`
Substitui o item pelo ID fornecido.

**Corpo da Requisição:**
```json
{
    "name": "Item Atualizado"
}
```
**Exemplo de Resposta:**
```json
{
    "id": 1,
    "name": "Item Atualizado"
}
```
### 4️⃣ **Atualizar um item parcialmente**
**PATCH** `/tasks/:id`
Atualiza somente os campos fornecidos.

**Corpo da Requisição:**
```json
{
    "name": "Item Parcialmente Atualizado"
}
```
**Exemplo de Resposta:**
```json
{
    "id": 2,
    "name": "Item Parcialmente Atualizado"
}
```
### 5️⃣ **Excluir um item**
**DELETE** `/tasks/:id`
Remove o item do banco de dados pelo ID.

**Exemplo de Resposta:**
Sem conteúdo (204 No Content).

## ⚙️ **Instalação e Uso**
### 1️⃣ **Clone o repositório:**
```json
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```
### 2️⃣ **Instale as dependências:**
```json
npm install
```
### 3️⃣ **Execute o servidor:**
```json
node app.js
```
### 4️⃣ **Acesse a API:**
O servidor estará disponível em: http://localhost:3000

## 🧪 **Testando a API**
**Recomendações para testes:**

Use o **Postman** ou **Insomnia** para enviar requisições **HTTP**.
Ou utilize o comando curl no terminal.
**Exemplo com curl:**

```json
curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"name":"Novo Item"}'
```
## 🌟 **Destaques Técnicos**
**Framework:** Express.js  
**Banco de Dados:** Em memória (simulado com arrays).  
**Verbos HTTP Utilizados:**  
GET  
POST  
PUT  
PATCH  
DELETE  
## 💡 **Aprendizados**
**Este projeto foi projetado para demonstrar:**

Como estruturar uma API RESTful usando Express.js.  
Manipulação de dados com arrays e objetos.  
Utilização dos métodos HTTP de forma prática.  
### 🔗 **Links Relacionados**
Documentação Express.js  
Conceitos Básicos de APIs RESTful  
## 📌 **Contribua**
Contribuições são bem-vindas! Siga os passos abaixo:

Faça um fork do projeto.  
Crie uma branch para sua feature ou correção: git checkout -b minha-feature.  
Commit suas mudanças: git commit -m 'Minha nova feature'.  
Envie para o repositório original: git push origin minha-feature.  
Crie um Pull Request.  
### 📋 **Licença**
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.


