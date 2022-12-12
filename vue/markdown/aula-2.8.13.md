# 2.8.13 – Criando um Novo Componente

## A sintaxe usada

No arquivo App.vue foi apagado todo o conteúdo que vem por padrão e adicionados

Uma tag template com:
```
<template>
    <MeuComp/>
<template/>
```

Também um export default para exportar o que o main.js está importando:
```
<script>
    import MeuComp from './components/MeuComp'
    export default{
        name: 'App',
        components:{
            MeuComp
        }
    }
<script/>
```

Criado um novo componente, o arquivo ```MeuComp.vue``` com uma tag template:

```
<template>
    <h1>Bora Codar com Vue3 Js!<h1/>
<template/>
```
No arquivo ```MeuComp.vue``` também foi exportado o name:
```
<script>
    export default{
        name: 'MeuComp'
    }
<script/>
```


## código usado em aula:

[MeuComp.vue](https://github.com/kelvya/projeto_spa/blob/master/src/components/MeuComp.vue)

[App.vue](https://github.com/kelvya/projeto_spa/blob/master/src/App.vue)