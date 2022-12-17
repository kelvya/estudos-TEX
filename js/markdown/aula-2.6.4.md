# 2.6.4 – Conceitos de tipagem e casting

## TypeCasting
TypeCasting é a conversão de dados.

Ex:
```
5 + 2.0 // JavaScript converte o float(2.0) em inteiro:  5 + 2
```
```
0x11 //Hexadecimal será convertido para decial: 17
```
```
null == undefined // converte o null para undefined. Com o extritamente igual (===) não acontece isso
```

## Variáveis
null - Falta de identificação, não existe um objeto ao qual ela pertença - É sempre falso

undefined - Falta de um valor de atribuição

NaN - Impossibilidade de fazer cálculo

- var
 
  -- Seu bloco é o contexto atual em execução
  -- Globalmente ou no escopo inteiro de uma função

- let
  -- limitada ao escopo do bloco, expressão ou instrução em que é utilizada
  -- não pode ser redeclarada

- const
  -- Escopo de bloco semelhante a let
  -- Não permite que seu conteúdo seja substituído em variáveis simples
  -- Em arrays e objetos os índices e chaves podem ser alterados

## Declaração de variáveis
Quando uma variável é declarada ela é içada (movida para o topo do código)

São processadas antes de qualquer outro código

Equivale a declarar no início

## Variáveis não declaradas
Só existem a partir do momento que recebem um valor

Tem sempre escopo global após sua atribuição

São configuráveis, podem ser excluídas com delete

É recomendável declarar as variáveis na parte superior do código


## FALSY e TRUTHY

- FALSY

São valores que se traduzem em verdadeiro ou falso, no contexto booleano

```
if(false){
    //retorno será falso
}

if(null){
    //retorno será falso
}

if(undefined){
    //retorna falso
}

if(0){
    //retorna falso
}

if(NaN){
    //retorna falso
}

if(""){
    //retorna falso
}
```

- TRUTHY
```
if(true){
    //retorna falso
}

if([]){
    //retorna falso
}

if({}){
    //retorna falso
}

if('myvar'){
    //retorna falso
}

if(56){
    //retorna falso
}

if(new Image()){
    //retorna falso
}
```
