# Prática 7 - Sistema de Vendas

## Descrição

A **Prática 7** consiste em um sistema simples de controle de vendas, onde temos um conjunto de produtos vendidos, com informações sobre a quantidade e o preço de cada item. A partir dessas informações, é possível calcular o valor total das vendas e manipular a lista de vendas através de operações como adição e remoção de itens.

O objetivo principal desta prática é trabalhar com arrays de objetos, manipulação de dados e funções de agregação em **JavaScript**.

## Funcionalidades

O sistema implementado nesta prática oferece as seguintes funcionalidades:

1. **Visualização das Vendas**: Exibe a lista atual de vendas com detalhes sobre cada produto (nome, quantidade e preço).
2. **Adição de Vendas**: Permite a adição de novos itens à lista de vendas, aumentando dinamicamente o array de produtos.
3. **Remoção de Vendas**: Permite a remoção de itens da lista de vendas, diminuindo o número de itens do array.
4. **Cálculo do Total de Vendas**: Calcula o valor total das vendas multiplicando a quantidade de cada produto pelo seu preço, acumulando os valores.

## Tecnologias Utilizadas

- **JavaScript**: A linguagem utilizada para implementar o sistema de vendas.
- **Node.js (opcional)**: Caso o desenvolvedor queira rodar o código em um ambiente de back-end.
- **Arrays de Objetos**: Estrutura de dados utilizada para armazenar as vendas, onde cada item possui um identificador, nome do produto, quantidade e preço.

## Fluxo do Sistema

1. O sistema começa com um conjunto de vendas predefinidas em um array de objetos.
2. Inicialmente, é possível visualizar as vendas atuais no console.
3. O usuário pode adicionar novos produtos ao sistema usando o método `push`, que adiciona um item no final do array.
4. O usuário também pode remover o último item da lista utilizando o método `pop`.
5. O valor total das vendas é calculado através de uma função específica, que percorre o array e soma o valor das vendas de cada produto, multiplicando a quantidade pelo preço.

## Aplicação no Mercado de Trabalho

Este tipo de sistema pode ser utilizado como base para sistemas de controle de vendas em pequenas empresas ou comércios. Embora seja uma implementação simples, ela serve como ponto de partida para a criação de sistemas mais complexos, como:

- **Gestão de Estoque**: Acompanhamento das quantidades de produtos vendidas.
- **Relatórios de Vendas**: Geração de relatórios sobre os produtos mais vendidos e o valor total das vendas.
- **Cadastro de Produtos**: Funcionalidade para adicionar, editar ou remover produtos da lista de vendas.

Esse tipo de prática é fundamental para quem trabalha com **JavaScript**, seja no **front-end** ou no **back-end (Node.js)**, ajudando a desenvolver habilidades essenciais em manipulação de dados e desenvolvimento de sistemas simples.

## Dificuldades Comuns

Ao desenvolver sistemas como este, alguns desafios podem surgir, como:

- **Manutenção de Arrays Dinâmicos**: Trabalhar com listas de dados dinâmicas, especialmente ao adicionar e remover itens, pode ser confuso para iniciantes.
- **Cálculos de Agregação**: O cálculo de valores totais a partir de dados complexos requer atenção para garantir que as operações sejam realizadas corretamente, especialmente ao lidar com métodos como `reduce`.

## Conclusão

A prática oferece uma boa introdução ao desenvolvimento de sistemas simples de vendas, utilizando JavaScript para manipulação de dados e cálculos básicos. Embora o código seja básico, ele serve como uma excelente base para expandir funcionalidades, como sistemas de gestão de estoque ou relatórios financeiros, aplicações que são comuns em empresas de pequeno porte.
