# 2.8.17 – Trabalhando com Atributos Dinâmicos

## Diretivas v-show e v-if:
v-show:

Joga apenas um display none, dependendo do tamanho do elemento DOM que quer esconder talvez seja melhor pra desempenho de renderização

v-if, v-else-if, v-else:

Escolher a melhor lógica.

Ex.
```
<template>
	<div id="app">
		<h1 v-if="state ==='loading'>Loading<h1/>
		<h1 v-else-if="state ==='error'>Error<h1/>
		<h1 v-else>Dado final<h1/>
	<div/>
<template/>
```

## Código usado em aula:

[NavBar.vue](https://github.com/kelvya/projeto_spa/blob/master/src/components/NavBar.vue)

[MenuImage.vue](https://github.com/kelvya/projeto_spa/blob/master/src/components/NavBar.vue)

[App.vue](https://github.com/kelvya/projeto_spa/blob/master/src/App.vue)