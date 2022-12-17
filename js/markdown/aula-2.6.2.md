# 2.6.2 – Imprimindo resultados no Documento HTML

- Atributos usados na tag script:

```defer``` (adiar/deferir)

```async``` (assíncrono)

- Acessando os elementos:

```
document.getElementById
```
acessa o elemento de acordo com seu id

```
document.getElementsByClassName
```
acessa uma coleção de elementos, já que a classe pode ser aplicada a diversos elementos. Para acessar um elemento específico é necessário parametrizar um índice numérico.
Ex:
```'minhaClasse[0]'```

```
document.querySelector
```
acessa o elemento usando seletores, como css.
Só acessa o primeiro elemento encontrado

```
document.querySelectorAll
```
acessa toda a lista de elementos usando seletores, como css.
Precisa necessariamente da indexação do índice. Ex: ```h2[0]```

## Código usado em aula:

[exJS_02.html](/js/codigo/exJS_02.html)

[exJS_02.js](/js/codigo/js/exJS_02.js)