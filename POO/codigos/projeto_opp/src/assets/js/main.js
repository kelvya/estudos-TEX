console.log('Js go!')
// import { Produto } from './produto_v1'
// import { Produto } from './produto_v2'
import { Produto } from './Produto.js'
import { ListaProduto } from './ListaProduto.js'
let produto = new Produto()
let listaProduto = new ListaProduto()




// AULA 3.1.11 – Imprimindo resultados – parte 1

//Produto_v3.js

document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()


        listaProduto.criarListagem(
            document.querySelector('#produto').value,
            document.querySelector('#valor_produto').value
        )
})





// AULA  3.1.11 – Imprimindo resultados – parte 1

// Produto_v2.js

// document.querySelector('form').addEventListener('submit', (e)=>{
//     e.preventDefault()

//     console.log(
//         produto.salvar(
//             document.querySelector('#produto').value,
//             document.querySelector('#valor_produto').value
//         )
//     )
// })





// AULA  3.1.10 – Utilizando classes e módulos

//Produto_v1.js

// console.log(produto.lerProduto()['id'])
// console.log(produto.lerProduto()['nome'])
// produto.salvar()
// console.log(produto.lerProduto()['id'])
// console.log(produto.lerProduto()['nome'])