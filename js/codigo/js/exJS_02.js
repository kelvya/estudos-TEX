console.log('Testando arquivo JS')

let titulo01 = document.getElementById('titulo01')
let titulo01_a = document.getElementsByClassName('titulo')
let titulo01_b = document.querySelector('h2')
let titulo01_c = document.querySelectorAll('h2')


console.log(titulo01)
console.log(titulo01_a)
console.log(titulo01_a[0])
console.log(titulo01_b)
console.log(titulo01_b.innerHTML)
console.log(titulo01_a.innerHTML)
console.log(titulo01_a[0].innerHTML)
console.log(titulo01_c[0].innerHTML)
console.log(titulo01_c[1].innerHTML)

//Para modificar o conteúdo de um elemento:

titulo01_c[0].innerHTML = 'Aula de Lógica! Imprimindo em Tela :)'

//Para modificar o estilo:
titulo01_c[0].style = "color:brown"

