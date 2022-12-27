// ListaProdutos.js

import { Produto } from "./Produto.js";

export class ListaProduto extends Produto{
    listagem = []
    form
    constructor(form){
        super()
        this.form = form
    }
    criarListagem(inputNumber, inputValor, box, alerta){
        alerta.classList.add('d-none')
        this.listagem.push(this.salvar(inputNumber, inputValor))

        this.validacao ?
        this.ListarItens(box) : 
        alerta.classList.remove('d-none')
        alerta.querySelector('p').innerText = 'Preencha todos os campos!'
    }
    ListarItens(box){    
        // console.log(this.listagem)
        let divItem
        this.listagem.forEach((n, i)=>{
            // console.log(n,i)
        divItem = document.createElement('div')
        divItem.setAttribute('class', 'boxListagem_item d-flex w-100')
                for(const item in this.listagem[i]){
                    // console.log(this.listagem[i][item])
                    let div = document.createElement('div')
                    div.setAttribute('class', 'w-25 border px-3 py-2')
                    div.innerText = item == 'valor' ? 
                    `R$ ${this.listagem[i][item]},00` : this.listagem[i][item]
                    divItem.appendChild(div)
                }
        })
        // Ícones de edição e de lixeira
        let divEdit = document.createElement('div')
        divEdit.setAttribute('class', 'w-25 border px-3 py-2')
        divEdit.innerHTML = `</i><i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash-can mx-3">`
        divItem.appendChild(divEdit)
        box.appendChild(divItem)
        this.resetListagem()
    }
    resetListagem(){
        let inputs = this.form.elements
        for(let i = 0; i< inputs.length;i++){
            inputs[i].value = ''
        }
    }
}