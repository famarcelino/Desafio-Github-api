# Desafio Github - DevSuperior
Formação Desenvolvedor Moderno
Módulo: Front End
Capítulo: Hooks useSate, useEffect, requisições

## Introdução
Esse é mais um projeto que serviu para avaliar o aprendizado do uso de Hooks do ReactJS e também de chamadas API usando o cliente [Axios](https://axios-http.com/docs/intro).

O projeto é baseado no figma https://www.figma.com/file/igQqM14f9sP17jyo54Y8vL/DesafioGithubAPI no qual é solicitado:

1. Criar duas páginas com rotas, com navegação entre elas.
2. Quando buscar um usuário que existe, os dados do usuário devem aparecer (como mostrado no layout do figma acima).
3. Quando buscar um usuário que não existe, deve aparecer uma mensagem conforme layout.

### Dificuldades que encontrei e como tentei resolver:
1. O maior desafio foi exibir/ocultar o resultado da consulta à API do Github quando um usuário é encontrado e exibir/ocultar a mensagem de quando o usuário não é encontrado.
2. Notei que a última letra do "input" não é inserida no useState da variável que usei para armazenar a conta do usuário. Fiz algumas pesquisas e consegui encontrar a resposta no qual deveria usar o useEffect.
