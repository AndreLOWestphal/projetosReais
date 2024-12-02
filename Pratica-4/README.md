# 💼 API de Folha de Pagamento - Prática 4

Este projeto é uma API de folha de pagamento para gerenciar dados de funcionários, como nome, cargo e salário. Ela foi construída utilizando **Node.js** e o framework **Express**. A API permite realizar operações CRUD (Criar, Ler, Atualizar, Deletar) = (Create, Read, UpDate, Delete) em um banco de dados fictício de funcionários.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework para criar APIs e aplicações web.
- **Axios**: Biblioteca para realizar requisições HTTP (para consumir a API).

---

## 🌟 Funcionalidades

- **GET /funcionarios**: Retorna todos os funcionários cadastrados.
- **POST /funcionarios**: Adiciona um novo funcionário.
- **PUT /funcionarios/{id}**: Atualiza as informações de um funcionário pelo ID.
- **DELETE /funcionarios/{id}**: Remove um funcionário pelo ID.

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
    npm install express axios
    ```
3. **Execute a API:**
    ```bash
    node folhaApi.js
    ```
    A API ficará disponível em http://localhost:3000.

4. **Execute o Cliente:** Para consultar os funcionários cadastrados na API, execute:
    ```bash
    node folhaCliente.js
    ```
## 💻 Funcionamento do Código
### `folhaApi.js` **(Servidor)**  
O servidor é configurado com **Express** para criar rotas e manipular os dados dos funcionários. Ele possui os seguintes endpoints:

* **GET /funcionarios:** Retorna a lista de funcionários cadastrados.
* **POST /funcionarios:** Adiciona um novo funcionário, recebendo os dados através do corpo da requisição.
* **PUT /funcionarios/{id}:** Atualiza os dados de um funcionário específico, identificado pelo seu id.
* **DELETE /funcionarios/{id}:** Remove um funcionário da lista.  
### `folhaCliente.js` **(Cliente)**

O cliente é responsável por consumir os dados da API utilizando a biblioteca Axios. Ele faz uma requisição GET para o endpoint /funcionarios e exibe os dados dos funcionários no console.

## 📚 Exemplo de Saída
Ao rodar o **cliente** (comando node folhaCliente.js), a saída será parecida com:

```bash
Funcionários cadastrados:
- João Silva (Desenvolvedor): R$6000
- João Pedro Henrique (Desenvolvedor Jr): R$2500
- Maria Oliveira (Analista): R$5000
- Pedro Santos (Gerente): R$9000
```
## 🛡️ Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.

## 💡 Próximos Passos
* Adicionar autenticação de usuário.
* Armazenar os dados em um banco de dados real (ex.: PostgreSQL, MongoDB).
* Criar uma interface gráfica para visualizar e editar os dados dos funcionários.