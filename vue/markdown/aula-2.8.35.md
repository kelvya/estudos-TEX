# 2.8.35 – Criando uma aplicação com VueX

- Criar o app Vue:
```
vue create .
```
- Criar uma aplicação simples em Vue:
```
produtos:{
    pratosQuentes:[
        {'nome': 'Lazanha', 'preco': '180'},
        {'nome': 'Salmão', 'preco': '230'},
        {'nome': 'Espeto de vegetais', 'preco': '90'},
        {'nome': 'Feijoada ligth', 'preco': '140'},
        {'nome': 'Penne ao Sugo', 'preco': '180'}
    ],
    sobremesas:[
        {'nome': 'Quindin', 'preco': '35'},
        {'nome': 'Bomba de Chocolate', 'preco': '18'},
        {'nome': 'Petit Gateau', 'preco': '28'},
        {'nome': 'Torta Holandesa', 'preco': '34'},
        {'nome': 'Pudim de leite', 'preco': '23'},
    ]
}
```

```
<style scoped>
    h3 {
        text-align: left;
        padding: 0 1rem;
    }

    .box {
        text-align: left;
        padding: 1rem;
        margin: 1.3rem;
        box-shadow: 2px 2px 40px rgb(225, 229, 229);
        width: 50%;
        border-radius: 0 0 0.8rem 0.8rem;
        background-color: rgba(145, 208, 223, 0.656);
    }

    .box div {
        margin: 0.4rem 0; 
    }

    .box_produto div::before{
        content: "+ "
    }
</style>
```

## Código usado em aula:

[ItemSobremesa.vue](https://github.com/kelvya/projeto_rotas/blob/master/src/components/ItemSobremesa.vue)

[SobremesasView.vue](https://github.com/kelvya/projeto_rotas/blob/master/src/views/SobremesasView.vue)

[App.vue](https://github.com/kelvya/projeto_rotas/blob/master/src/App.vue)

[router/index.js](https://github.com/kelvya/projeto_rotas/blob/master/src/router/index.js)

[store/index.js](https://github.com/kelvya/projeto_rotas/blob/master/src/store/index.js)