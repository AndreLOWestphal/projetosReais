# Prática 10 - Projeto de Gerenciamento de Reuniões

## Introdução

Este projeto tem como objetivo a criação de um sistema para gerenciar reuniões, permitindo aos usuários adicionar, atualizar, listar e deletar reuniões de maneira intuitiva e simples. O sistema foi desenvolvido utilizando **React** para o front-end, com comunicação via API para um backend que simula a persistência das reuniões.

## Tecnologias Utilizadas

🛠️ **Front-End**:
- **React**: Framework JavaScript para criar interfaces de usuário interativas.
- **Axios**: Biblioteca para realizar requisições HTTP para o backend.
- **useState e useEffect (React)**: Hooks do React para gerenciar o estado e realizar operações assíncronas.

💻 **Backend (Simulado)**:
- **API REST**: Utilizada para simular as operações de manipulação de reuniões (adicionar, listar, atualizar e deletar).
- **JSON**: Para armazenamento dos dados temporários das reuniões no backend.

## Como o Sistema Funciona

O sistema permite que os usuários interajam com uma interface que oferece quatro opções principais:

- **Adicionar Reunião**: O usuário pode cadastrar uma nova reunião, informando o título, hora de início, hora de término e participantes.
- **Atualizar Reunião**: O usuário pode editar uma reunião existente, alterando os dados como título, hora de início, hora de término e participantes.
- **Listar Reuniões**: Exibe todas as reuniões registradas, com informações sobre o título, horário e participantes.
- **Deletar Reunião**: O usuário pode excluir uma reunião específica, utilizando o ID da reunião.

### Fluxo de Funcionamento:

1. **Adicionar Reunião**:
   O usuário preenche os campos de título, hora de início, hora de fim e participantes. Após o envio do formulário, os dados são convertidos e enviados para o backend, que simula o armazenamento da reunião.

2. **Atualizar Reunião**:
   Para atualizar uma reunião, o usuário fornece o ID da reunião que deseja modificar. Após localizar a reunião, ele pode atualizar as informações.

3. **Listar Reuniões**:
   O sistema exibe todas as reuniões cadastradas, incluindo seus detalhes, como título, horário e participantes.

4. **Deletar Reunião**:
   O usuário insere o ID da reunião que deseja excluir. O sistema faz uma requisição ao backend para realizar a exclusão.

## Desafios e Dificuldades Encontradas

🚧 **Integração com Backend**:
Uma das principais dificuldades foi integrar o front-end com um backend simulado de maneira eficiente. A comunicação entre o React e o backend foi realizada utilizando a biblioteca **Axios**, que necessitou de atenção para garantir que os dados estivessem no formato correto antes de serem enviados ou recebidos.

⚙️ **Validação de Formulários**:
Garantir que os dados inseridos nos formulários fossem válidos e no formato correto foi um desafio, especialmente ao lidar com datas e horários, além de converter os participantes em um formato específico.

🔄 **Gerenciamento de Estado**:
O gerenciamento do estado do React foi um dos pontos de aprendizado, já que precisávamos garantir que as informações do formulário fossem atualizadas de maneira eficiente, sem causar inconsistências entre as interações do usuário e o backend.

## Conhecimentos Adquiridos

📘 **Gerenciamento de Estado no React**:
Aprendi a usar os **Hooks do React** (como `useState` e `useEffect`) para gerenciar o estado da aplicação e executar ações assíncronas, como chamadas a APIs.

🌍 **Integração Front-End e Back-End**:
A integração entre o front-end e o backend, através da biblioteca **Axios**, foi essencial para realizar as operações de adicionar, atualizar, listar e deletar reuniões.

💡 **Validação e Formatação de Dados**:
Aprendi como validar e formatar os dados antes de enviá-los ao backend, como no caso da formatação das datas e participantes, que exigiram um cuidado especial para garantir a consistência dos dados.

## Ferramentas, Frameworks e Bibliotecas Utilizadas

- **React**: Framework principal para a criação da interface de usuário.
- **Axios**: Biblioteca para realizar requisições HTTP assíncronas para o backend.
- **useState**: Hook do React utilizado para gerenciar o estado dos dados.
- **useEffect**: Hook utilizado para executar operações assíncronas, como buscar reuniões do backend.
- **JSON**: Formato de dados utilizado para simular o armazenamento das reuniões no backend.

## Aplicação no Mundo Real

Esse tipo de sistema pode ser utilizado em empresas e organizações para gerenciar reuniões de equipes, agendar compromissos ou até mesmo para sistemas de gestão de eventos. Além disso, ele pode ser expandido com funcionalidades como notificações de lembretes para os participantes ou integração com calendários externos.

### Exemplos de Aplicação:

- **Empresas**: Controle de reuniões entre departamentos.
- **Escolas e Universidades**: Agendamento de reuniões com alunos ou professores.
- **Eventos e Conferências**: Gerenciamento de palestras e sessões em eventos.

## Conclusão

Este projeto foi uma excelente oportunidade para aprofundar meus conhecimentos em **React** e aprender mais sobre como integrar front-end com back-end. Além disso, foi uma ótima maneira de praticar a manipulação de dados e entender como criar sistemas simples de gerenciamento com uma interface amigável.

Este foi um grande passo para consolidar o que aprendi sobre desenvolvimento web e me preparar para desafios ainda maiores no desenvolvimento de aplicações reais!
