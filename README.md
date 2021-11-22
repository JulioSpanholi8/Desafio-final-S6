## Introdução
Este projeto realiza a automação de testes utilizando Cypress voltado para UI.

#### Dependências do template
`cypress`
`faker`
`faker-br`
`js-brasil`
`mochawesome`

Autor: Júlio César Spanholi


## 1. Execução
#### 1.1 Instalações
Para ser realizada a execução, é necessário a instalação das seguintes dependências:
- `npm install cypress --save-dev`
- `npm install -dev faker`
- `npm install -dev faker-br`
- `npm install -dev js-brasil`
- `npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator`

#### 1.2 Execução
1. Abrir um terminal no diretório `Desafio-final-S6`;
2. `npm run cy:open` para que execute os testes do cypress utilizando interface gráfica;
3. `npm run cy:run` para que execute os testes do cypress; 
4. `npm run report:merge` para que execute os testes e gere um arquivo .json;
5. `npm run report:generate` para transformar o arquivo .json em .html.
