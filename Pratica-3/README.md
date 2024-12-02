# 🌦️ API de Consulta de Clima - Prática 3

Este projeto é uma API simples para consultar dados de clima, utilizando o **OpenWeatherMap API**. A consulta retorna informações como temperatura, descrição do clima e umidade, e é feita usando **Axios** para realizar requisições HTTP.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **OpenWeatherMap API**: API para obter dados meteorológicos.

---

## 🌟 Funcionalidades

- **Consultar o clima de uma cidade**: Informa a temperatura, descrição do clima e umidade de uma cidade em tempo real.

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
    npm install axios
    ```
3. **Altere a chave da API no código:** Substitua a chave da API (API_KEY) pela sua própria chave que pode ser gerada no OpenWeatherMap.

4. **Execute o código:**

    ```bash
    node clima.js
    ```
## 📚 Exemplo de Saída
A saída do código será semelhante a:

```makefile
Clima em Ceilândia, BR:
Temperatura: 25°C
Descrição: Céu limpo
Umidade: 70%
```
## 🛡️ Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.

## 💡 Próximos Passos
* Adicionar mais funcionalidades, como previsão do tempo para os próximos dias.
* Melhorar a interface do usuário (caso decida construir uma interface gráfica).