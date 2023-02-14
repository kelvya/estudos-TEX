# 3.8.14 – Roteamento e EndPoints

## Roteamento

- Definição de terminais do aplicativo (URIs)
- Também chamados endpoints e como eles respondem às solicitações do cliente

```
const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Olá Node.js')
})
```

### Métodos de roteamento

- Derivado a partir de um dos métodos HTTP
- Anexado a uma instância da classe express

```
//GET
app.get('/', function (req, res) {
    res.send('Requisição GET para a HomePage')
})
```

```
//POST
app.post('/', function (req, res) {
    res.send('Requisição POST para a HomePage')
})
```

## Suporte aos métodos HTTP

- Métodos de roteamento que correspondem  aos métodos HTTP:
  - get, post, put, delete
  - options, head
  - patch, search, connect

- ```app.all()```:
  - método de roteamento especial
  - não é derivado de nenhum método HTTP
  - usado para carregar funções em um caminho para todos os métodos de solicitação
  - o manipulador irá ser executado para solicitações caso esteja usando GET, POST, PUT, DELETE ou qualquer outro método de solicitação HTTP suportado

```
app.all('/area-do-colaborador', function (req, res, next) {
    console.log('Acesso restrito...')
    next() //passa o controle para o próximo manipulador
})
```

## Caminhos de rota

- Definem os endpoints em combinação com os métodos de solicitação e onde tais solicitações podem ser feitas
- Caminhos podem ser:
  - sequências de caracteres
  - padrões de sequência
  - expressões regulares

## Manipuladores de rota

- Permitem fornecer várias funções de retorno de chamada que se comportam como manipuladores de uma solicitação
- Com exceção de que estes retornos de chamada podem chamar next('route') para efetuar um bypass nos retornos de chamada das rotas restantes
- Este mecanismo pode ser utilizado para impor pré-condições em uma rota
- Em seguida passar o controle para rotas subsequentes desde que não existam razões para continuar com a rota atual
- Podem estar na forma de:
  - uma função
  - uma matriz de funções
  - combinações de ambas


## Códigos usados em aula:

[meuApp](/nodeJs/codigos/meuApp/)