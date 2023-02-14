# 3.8.1 – Primeiros conceitos de NodeJS

- Software de código aberto
- Tem base no interpretador V8 da Google
- Acesso ao uso de linhas de comando específicas em node
- Utiliza JavaScript como linguagem de programação
- Oportunidade de programar frontend e backend em uma única linguagem de programação
- Node.JS suporta JavaScript ES6-7-8-9 moderno
- Node.JS vem com suport ao sistema de módulos do CommomJS
  - prpjeto que especifica um ecossistema para JavaScript no backend


## JavaScript V8

- V8: nome do mecanismo JavaScript que alimenta o Google Chrome
- Interpretador do código JavaScript
- Interpreta e executa no Chrome
- 2009: V8 é selecionado como mecanismo para base do Node.JS
- Node.JS executa tarefas de códigos escritos em JavaScript do lado do servidor

## Compilação

- JavaScript é uma linguagem interpretada
- Mecanismos JavaScrit modernos interpretam e compilam o JavaScript
- JavaScript é compilado internamente pelo V8
- Salto do JavaScript: lançamento do Google Maps em 2004
- JavaScript deixa de ser uma linguagem que executa dezenas de linhas de código
- JavaScript passa a rodar aplicativos com milhares a centenas de milhares de linhas de código

## Terminal REPL

- Acrônimo de Read Eval Print Loop
- Se assemelha ao terminal de comando do Windows ou Shell do Linux
- Neste terminal o programador pode usar todos os recursos programáticos em JavaScript TypeScript
- Read:
  - ler o imput do utilizador e fazer a análise de informação
- Eval:
  - avaliar a estrutura do código
- Print:
  - imprimir o resultado
- Loop´:
  - criar um loop do comando até que o utilizador pressione ```Control + c``` duas vezes para finalizar
- comando ```node``` para iniciar
- comando ```.help``` para acessar a colação de comandos
- todo comando inicia com ponto
- comando ```.exit``` para sair do REPL
- O REPL possui um log de erros
- Exibe uma notificação quando existem falhas na execução de um script
- Certos comandos ou palavras chave podem funcionar apenas quando compilados
- A compilação acontece por in termédio de um arquivo JavaScript
- Pode-se escrever linhas de código JavaScript direto no terminal do node
- O REPL permite uma continuidade de escrita do código JavaScript de acordo com a sintaxe pressionando enter:
  - inicia uma nova linha com três pontos
  - indica que existe continuidade no código

## Módulo HTTP

- O módulo HTTP é que vai iniciar um servidor Web em Node.JS
- É preciso usar o módulo interno HTTP
- Permite a transferência de informação por intermédio de um Hyper Text Transfer Protocol
  ```
  const http = require('http')
  ```
- O módulo HTTP usa o método createServer()
- Cria um servidor web usando uma porta para tratar o Back do cliente
  ```
  http.createServer().listen(8080)
  ```
- Alternativamente crie um arquivo JavaScript e depois compile em node
- O servidor Web é acessado pela url local http://localhost:8080
  
## Códigos usados em aula:

[meuApp](camminho)
