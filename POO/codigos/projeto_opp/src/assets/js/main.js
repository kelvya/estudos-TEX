// Main JS
console.log('Js go!')
import { Produto } from './Produto.js'

let produto = new Produto()

console.log(produto.lerProduto()['id'])
console.log(produto.lerProduto()['nome'])
produto.salvar()
console.log(produto.lerProduto()['id'])
console.log(produto.lerProduto()['nome'])