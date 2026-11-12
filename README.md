# Atividade 4 - Algoritmos fundamentais com testes unitarios

Algoritmos implementados em JavaScript (pasta `funcoes/`), cada um com testes em Jest (pasta `tests/`):

- Numero primo
- Somatorio
- Fibonacci
- MDC
- Quicksort
- Contagem de inteiros entre dois valores

## Pre-requisitos

- [Node.js](https://nodejs.org/) instalado

## Como executar os testes

```bash
npm install
npm test
```

## Como executar o programa

```bash
npm start
```

## Estrutura

```
funcoes/   -> codigo dos algoritmos
tests/     -> testes unitarios (Jest)
index.js   -> programa interativo
```

## Boas praticas aplicadas

- Nomes significativos para funcoes e variaveis
- Validacao de entrada (lanca `TypeError` para dados invalidos)
- Tratamento de excecoes no programa principal
