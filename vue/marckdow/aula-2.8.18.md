# 2.8.18 – Conceito sobre Estilos CSS em Componentes

Existem dois tipos de categoria de estilo no Vue: estilo global e estilo de escopo.

Existe também uma hierarquia quando usamos o escopo global, quando um componente está contido em outro componente e o elemento pai sempre vai controlar o estilo. 

Para que os estilos definidos em um componente tenha preferência usamos o ```scoped```

## Estilo global:
```
<style>
a{
    color: red;
}
</style>
```

## Estilo de escopo:
```
<style scoped>
a{
    color: red;
}
</style>
```

## Código usado em aula:

[NavBar.vue](https://github.com/kelvya/projeto_spa/blob/master/src/components/NavBar.vue)

[MenuImage.vue](https://github.com/kelvya/projeto_spa/blob/master/src/components/NavBar.vue)

[App.vue](https://github.com/kelvya/projeto_spa/blob/master/src/App.vue)