# 2.8.7 – Revisão da Parte de Fundamentos
Para que o Vue possa executar a renderização, ele usa um método chamado:
```
const {createApp} = Vue
```

Para executar variáveis que precisam ser renderizadas na aplicação front end é preciso gerar um:
```
data(){
    return
}
```

E para tudo isso dar certo é necessário o mount, associando tudo o que foi codificado e executando dentro de um componente de um elemento html:
```
.mount('#app')
```
Para usar a variável no template html, colocamos o nome da variável entre chaves duplas:
```
{{xxx}}
```














