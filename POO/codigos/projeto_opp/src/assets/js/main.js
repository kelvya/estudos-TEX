console.log('Js go!')
// import { Produto } from './produto_v1'
// import { Produto } from './produto_v2'
// import { Produto } from './Produto.js'
// import { ListaProduto } from './ListaProduto.js'
import { StorageProduto } from './StorageProduto.js'
// let produto = new Produto()
// let listaProduto = new ListaProduto(document.querySelector('form'))
let storageProduto = new StorageProduto(document.querySelector('form'))


// console.log(JSON.parse(localStorage.getItem('cadastro')))

// AULA 3.1.11 – Imprimindo resultados – parte 1

//Produto_v3.js
document.querySelector('.alerta i').addEventListener('click', ()=>{
    document.querySelector('.alerta').classList.add('d-none')
})

storageProduto.getStorage(document.querySelector('.boxListagem__info'))

document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()

        
            storageProduto.setStorage(
                document.querySelector('#produto').value,
                document.querySelector('#valor_produto').value,
                document.querySelector('.boxListagem__info'),
                'boxListagem_item'
            )
        


        // listaProduto.criarListagem(
        //     document.querySelector('#produto').value,
        //     document.querySelector('#valor_produto').value,
        //     document.querySelector('.boxListagem__info'),
        //     document.querySelector('.alerta')
        // )
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