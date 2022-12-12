# 2.8.3 – Usando ES6 Module Build
É muito importante usar módulos, que são programas separados e vão dar mais performance.

Com o módulo, não precisa do atributo ```defer``` porque ele já tem o adiamento automático e ele é executado apenas uma vez mesmo que seja chamado em tags script diferentes.

## códigos da aula:

- [vueJs_ex_1.html](/vue/codigos/vuejs_ex_1_continuacao.html)

-Usando a compilação do módulo ES:

[Ver na Docs](https://vuejs.org/guide/quick-start.html#using-vue-from-cdn)

copiar código:
```
<div id="app">{{ message }}</div>

<script type="module">
  import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
```