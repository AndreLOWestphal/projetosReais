# Gerenciador de Reuniões

## Visão Geral

O **Gerenciador de Reuniões** é uma aplicação web desenvolvida para facilitar o processo de agendamento e gestão de reuniões dentro de empresas e equipes. A aplicação permite que os usuários registrem reuniões, atualizem informações importantes como horário e participantes, e excluam reuniões com facilidade. Essa ferramenta visa otimizar o fluxo de trabalho, eliminando a necessidade de ferramentas externas para agendamento e proporcionando uma interface intuitiva e responsiva.

### Objetivo do Projeto

O objetivo deste projeto é criar uma plataforma que permita aos usuários gerenciar as reuniões de forma eficaz e dinâmica, proporcionando uma experiência prática e intuitiva. A interface foi projetada para ser simples, mas robusta, permitindo a rápida inserção e visualização de dados, com um backend que garante a persistência e a integridade das informações.

## Tecnologias Utilizadas

A escolha das tecnologias foi focada em garantir escalabilidade, desempenho e uma excelente experiência para o usuário final. As principais tecnologias utilizadas foram:

- **React.js**: Utilizado como biblioteca principal para o desenvolvimento da interface de usuário. O React permite a criação de interfaces dinâmicas e reativas, com componentes reutilizáveis, facilitando a manutenção e escalabilidade da aplicação.

- **Axios**: Biblioteca que facilita a realização de requisições HTTP. Foi usada para integrar a aplicação frontend com o backend, permitindo que os dados sejam enviados e recebidos de maneira eficiente e assíncrona.

- **JavaScript (ES6+)**: A base de toda a lógica de frontend, utilizando os recursos modernos do JavaScript, como async/await para requisições assíncronas, manipulação de arrays e strings, e o hook `useState` do React para gerenciar o estado da aplicação.

- **Backend (Express.js)**: Embora não detalhado neste repositório, o backend da aplicação é uma API RESTful construída com **Node.js** e **Express.js**. Ele é responsável por receber as requisições, processá-las e realizar operações de CRUD em um banco de dados relacional ou NoSQL, como MongoDB.

- **API REST**: Utilizada para a comunicação entre o frontend e o backend, permitindo que as informações sobre as reuniões sejam enviadas, recebidas e manipuladas por meio de endpoints HTTP (GET, POST, PUT, DELETE).

## Funcionalidades

A aplicação possui diversas funcionalidades que permitem ao usuário gerenciar eficientemente as reuniões:

1. **Adicionar Reuniões**: O usuário pode adicionar novas reuniões fornecendo informações como título, horário de início e término, e participantes. O sistema trata a entrada de dados, especialmente no campo de participantes, garantindo que o formato enviado para o backend seja adequado.

2. **Atualizar Reuniões**: Permite que as reuniões existentes sejam atualizadas. O usuário pode modificar o título, horário ou participantes de uma reunião específica, utilizando o ID da reunião. As alterações são enviadas ao backend de forma eficiente.

3. **Listar Reuniões**: Exibe uma lista de todas as reuniões cadastradas no sistema, permitindo ao usuário visualizar rapidamente as informações mais relevantes, como título, horário de início e participantes.

4. **Excluir Reuniões**: Permite ao usuário excluir reuniões do sistema através de um identificador único (ID). A funcionalidade garante que apenas reuniões específicas sejam removidas, mantendo a integridade dos dados.

5. **Validação de Dados**: Durante o processo de adição e atualização de reuniões, a aplicação realiza validações básicas, como verificar se todos os campos foram preenchidos corretamente antes de enviar os dados ao backend.

6. **Formatação de Dados**: Antes de enviar os dados para o backend, a aplicação formata a lista de participantes, convertendo-a para um formato adequado (com chaves `{}`), o que garante a integridade dos dados no armazenamento.

## Aplicação Real no Mercado de Trabalho

Este tipo de aplicação tem uma aplicação direta em diversos setores corporativos e empresariais, onde a organização de reuniões é uma tarefa constante. Entre as possíveis áreas de uso, destacam-se:

- **Empresas e Corporações**: Ferramentas de gestão de reuniões são essenciais para equipes que precisam se coordenar frequentemente. A automação deste processo melhora a eficiência e diminui erros de comunicação.

- **Gestão de Equipes Remotas**: Com o aumento do trabalho remoto, a capacidade de gerenciar reuniões de forma online se tornou ainda mais crucial. Este sistema pode ser utilizado para gerenciar reuniões virtuais e presenciais de forma centralizada.

- **Setores de Atendimento ao Cliente**: Empresas que lidam com clientes frequentemente precisam organizar reuniões para discutir orçamentos, entregas ou outros assuntos. A plataforma pode ser adaptada para essa realidade, oferecendo uma interface para agendar e gerenciar essas interações.

- **Consultorias e Agências**: O gerenciamento de reuniões com clientes e equipes é uma atividade central nesses setores. A aplicação oferece uma maneira eficiente de centralizar todas as informações de compromissos e encontros.

## Desafios Durante o Desenvolvimento

### 1. **Formato de Entrada dos Participantes**

Um dos maiores desafios foi garantir que os dados dos participantes fossem corretamente formatados antes de serem enviados para o backend. O usuário deveria inserir os participantes em um formato simples, como "João, Pedro, Ana", e o sistema precisava transformar essa entrada em um formato estruturado e adequado para o armazenamento. Para isso, foi necessário utilizar técnicas avançadas de manipulação de strings, como o uso de `split()`, `map()` e `join()`.

### 2. **Conversão de Data e Hora**

Outro desafio importante foi a conversão dos dados de data e hora, uma vez que o usuário insere as informações no formato `datetime-local`. Para garantir que os dados fossem enviados ao backend de forma correta, foi necessário substituir o caractere 'T' por um espaço e adicionar os segundos ao timestamp, garantindo que o formato fosse compatível com o que o backend espera.

### 3. **Gerenciamento de Estado no React**

O gerenciamento de estado em uma aplicação React pode se tornar complexo, especialmente quando múltiplos campos precisam ser manipulados simultaneamente. Foi necessário ter uma compreensão clara de como o `useState` funciona, mantendo os dados consistentes e sincronizados com a interface de usuário.

### 4. **Comunicação Eficiente com o Backend**

A integração entre o frontend e o backend utilizando Axios apresentou alguns desafios, principalmente no que diz respeito ao tratamento de erros e à garantia de que as requisições fossem feitas de maneira assíncrona. A aplicação utilizou promessas e `async/await` para garantir que o fluxo da aplicação fosse mantido sem bloqueios.

### 5. **Desempenho e Escalabilidade**

Embora a aplicação seja simples, é importante garantir que ela seja escalável para suportar um grande número de usuários e reuniões. Durante o desenvolvimento, houve a necessidade de otimizar algumas operações para garantir que o desempenho da aplicação fosse mantido mesmo com a quantidade de dados aumentando.

## Conclusão

Este projeto representa uma solução prática e eficiente para o gerenciamento de reuniões em ambientes corporativos. Com uma interface fácil de usar e uma integração simples com o backend, ele oferece uma solução robusta para quem precisa gerenciar reuniões de forma eficaz.

As tecnologias escolhidas são amplamente utilizadas no mercado, o que não só garante a qualidade do projeto, mas também prepara os desenvolvedores para as demandas do mercado de trabalho. A aplicação é um exemplo de como um sistema simples pode ser eficaz ao integrar uma interface amigável, manipulação eficiente de dados e uma comunicação clara com o backend.

Com o uso de **React.js**, **Axios** e **JavaScript**, o projeto aborda conceitos modernos de desenvolvimento web, como APIs RESTful, gestão de estado e manipulação de dados. O sucesso deste projeto demonstra a viabilidade de criar soluções eficientes para o gerenciamento de tarefas cotidianas no ambiente corporativo, sendo uma ótima base para futuras melhorias e integrações.
