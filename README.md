# Números Romanos :heavy_check_mark:

Esta é uma aplicação backend que converter números normais em algarismos romanos. Este desafio esta foi proposta em [Coding Dojo](http://codingdojo.org/kata/RomanNumerals/).

## Features

- typeScript
- Test

## Linguagens e libs utilizadas :books:

- nodeJS
- javascript

A aplicação foi desenvolvida usando javascript. Ela é executada em um servidor node.

## Como rodar a aplicação: :arrow_forward:

Executar os comandos npm install, node server. Após start do servidor a aplicação fica disponível em http://localhost:9080/roman-numbers/

## O que a aplicação é capaz de fazer :checkered_flag:

#### Converte um número normal em numeral romano 
- http://localhost:9080/roman-numbers/api/converts//{number}/ [POST] 
- Caso o valor informado não for maior que 3000 apresenta um validação

#### Lista as conversões realizadas 
- http://localhost:9080/roman-numbers/api/databases [GET]