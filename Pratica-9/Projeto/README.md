# 📋 **Prática 9 - Projeto de Gerenciamento de Tarefas**

Neste projeto, desenvolvi um **gerenciador de tarefas** utilizando **TypeScript** para criar um serviço que permite realizar operações CRUD (Criar, Ler, Atualizar e Excluir) em tarefas. Vamos explorar como a aplicação funciona, as ferramentas e tecnologias utilizadas, além dos desafios que enfrentei ao longo do processo.

---

## 🔧 **Ferramentas e Tecnologias Utilizadas**

### 1. **TypeScript**
   - Utilizei **TypeScript** para garantir a tipagem estática e a verificação de erros durante o desenvolvimento, o que ajudou a criar uma base de código mais robusta e escalável.

### 2. **Node.js**
   - A aplicação foi desenvolvida para ser executada em um ambiente **Node.js**, aproveitando sua performance e facilidades para lidar com código assíncrono e operações no backend.

### 3. **Classes e Interfaces**
   - **Interface Tarefa**: A interface define a estrutura das tarefas, com campos como `id`, `titulo`, `descricao` (opcional), e `concluida`.
   - **Classe ServicoDeTarefa**: Criei a classe que contém os métodos para manipular as tarefas, como criar, listar, atualizar e excluir.

---

## 🛠️ **Como Funciona o Sistema de Gerenciamento de Tarefas**

O sistema gerencia uma lista de tarefas, permitindo ao usuário realizar várias operações. Aqui está o fluxo de funcionamento:

1. **Criar Tarefa**: 
   - O sistema permite criar novas tarefas, atribuindo um **ID único** para cada uma delas.
   - A tarefa é definida por um título, uma descrição (opcional) e um estado de conclusão.

2. **Listar Tarefas**:
   - O serviço pode listar todas as tarefas armazenadas. Isso é útil para visualizar o progresso das tarefas ou revisar as pendências.

3. **Buscar Tarefa por ID**:
   - As tarefas podem ser buscadas individualmente usando o **ID**. Isso facilita a consulta de tarefas específicas.

4. **Atualizar Tarefa**:
   - As tarefas podem ser **atualizadas** com novos dados, como marcar uma tarefa como concluída. O sistema permite atualizar apenas os campos desejados, sem alterar toda a tarefa.

5. **Excluir Tarefa**:
   - O sistema oferece a funcionalidade de **excluir tarefas**. Ao excluir, a tarefa é removida da lista, garantindo que a base de dados seja sempre atualizada.

---

## 🚀 **Aplicação no Mundo Real**

Esse tipo de sistema pode ser amplamente utilizado em diversos cenários, tais como:

- **Gestão de Tarefas Pessoais**: Um aplicativo simples para usuários gerenciarem suas tarefas do dia a dia, como estudos, trabalho ou até mesmo tarefas domésticas.
- **Gestão de Equipes**: Em ambientes corporativos, o sistema poderia ser utilizado para gerenciar tarefas dentro de equipes, com a possibilidade de marcar tarefas como concluídas e atribuir prioridades.
- **Planejamento de Projetos**: Em uma metodologia ágil, como Scrum, o gerenciamento de tarefas é fundamental para organizar o trabalho e garantir que todos os membros da equipe saibam suas responsabilidades.

---

## ⚠️ **Desafios e Dificuldades Encontradas**

### 1. **Gerenciamento de Estado**
   - Gerenciar o estado das tarefas de forma eficiente foi um dos maiores desafios. A principal dificuldade foi garantir que a operação de atualização fosse realizada corretamente, sem perder dados.

### 2. **Validação de Dados**
   - Durante a implementação, enfrentei desafios ao validar os dados de entrada, como verificar se o campo obrigatório estava presente (por exemplo, o título da tarefa) antes de permitir a criação ou atualização de tarefas.

### 3. **Manipulação de ID Dinâmico**
   - A geração do **ID único** para cada tarefa foi outro desafio. Inicialmente, pensei em usar um contador simples, mas depois decidi implementar uma lógica mais robusta para garantir que os IDs fossem únicos e sempre aumentassem conforme novas tarefas fossem criadas.

---

## 🎓 **Conhecimentos Adquiridos**

- **Programação Orientada a Objetos (OOP)**: Ao trabalhar com classes e interfaces em TypeScript, aprendi a estruturar a aplicação de maneira organizada e a reutilizar código de forma eficiente.
  
- **Gerenciamento de Estado e Operações CRUD**: A experiência me ajudou a entender como as operações de CRUD funcionam no backend e como manipular os dados de forma eficaz, além de aprender a lidar com listas e objetos em memória.

- **Validação de Dados**: Durante o desenvolvimento, aprendi como garantir que os dados enviados fossem válidos e completos antes de qualquer operação, o que é crucial para evitar erros no sistema.

---

## ⚙️ **Estrutura do Projeto**

O projeto é dividido em duas partes principais:

1. **Interface Tarefa**: Define os tipos e estrutura dos dados (id, título, descrição, e estado da tarefa).
2. **Classe ServicoDeTarefa**: Contém métodos responsáveis pela manipulação das tarefas, como:
   - **criarTarefa**: Cria uma nova tarefa e gera um ID único.
   - **listarTarefas**: Retorna todas as tarefas criadas.
   - **buscarTarefaPorId**: Retorna uma tarefa específica, dado seu ID.
   - **atualizarTarefa**: Atualiza uma tarefa existente com novos dados.
   - **excluirTarefa**: Exclui uma tarefa pela ID.

---

## 📌 **Conclusão**

Este projeto de gerenciamento de tarefas me proporcionou uma experiência valiosa na aplicação de conceitos de **programação orientada a objetos**, **manipulação de dados em memória** e **validação de entradas**. Através dele, pude entender melhor como sistemas simples podem ser aplicados de maneira prática para resolver problemas cotidianos, como o gerenciamento de tarefas pessoais ou de equipes. Além disso, as dificuldades enfrentadas me ajudaram a aprimorar minhas habilidades de **resolução de problemas** e a **estruturar sistemas de maneira escalável**.

Esse tipo de sistema pode ser expandido para se adaptar a diferentes contextos, tornando-se uma ferramenta útil em diversos cenários, tanto pessoais quanto profissionais.
