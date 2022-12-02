# 2.8.26 – Trabalhando com Slots – parte 1

## Conceito:
```
<template>
    <slot></slot>
</template>
```
O Slot é uma API de distribuição de conteúdo, modelada a partir de um elemento chamado slot que representa um tag HTML.

Essa API tem como objetivo fazer a distribuição de saída deste conteúdo para a renderização na interface.

Esses componentes que utilizam os slots são refernciados sempre com tags de abertura e de fechamento.

Quando um componente renderiza, se existe um slot, este é substituído pelo conteúdo do template.

Slots podem ser substituídos por outros componentes


## Código usado em aula:

[RedesSociais.vue](https://github.com/kelvya/projeto_spa/blob/master/src/components/RedesSociais.vue)

[SetoresContato.vue](https://github.com/kelvya/projeto_spa/blob/master/src/components/SetoresContato.vue)

[App.vue](https://github.com/kelvya/projeto_spa/blob/master/src/App.vue)

