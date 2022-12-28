// ListaProdutos.js

import { Produto } from "./Produto.js";
import { AdmProduto } from "./AdmProduto.js";

export class ListaProduto extends Produto{
    listagem = []
    form
    admProduto = new AdmProduto()
    constructor(form){
        super()
        this.form = form
    }
    criarListagem(inputNumber, inputValor, box, alerta){
        // alerta.classList.add('d-none')
        this.listagem.push(this.salvar(inputNumber, inputValor))

        this.validacao ?
        this.ListarItens(this.listagem, box) : 
        alerta.classList.remove('d-none')
        alerta.querySelector('p').innerText = 'Preencha todos os campos!'
    }
    ListarItens(lista, box){    
        // console.log(this.listagem)
        let divItem
        lista.forEach((n, i)=>{
            // console.log(n,i)
        divItem = document.createElement('div')
        divItem.setAttribute('class', 'boxListagem_item d-flex w-100')
        divItem.id = `box-${i}`
                for(const item in lista[i]){
                    // console.log(lista[i][item])
                    let div = document.createElement('div')
                    div.setAttribute('class', 'w-25 border px-3 py-2')
                    div.innerText = item == 'valor' ? 
                    `R$ ${lista[i][item]},00` : lista[i][item]
                    divItem.appendChild(div)
                    box.appendChild(divItem)
                }
                // Ícones de edição e de lixeira
                let divEdit = document.createElement('div')
                divEdit.setAttribute('class', 'w-25 border px-3 py-2')

                let btnIconEdit, btnIconRemove
                btnIconEdit = document.createElement('i')
                btnIconRemove = document.createElement('i')
                btnIconEdit.setAttribute('class', 'cursor fa-solid fa-pen-to-square')
                //Remover produto///
                btnIconRemove.setAttribute('class', 'cursor fa-solid fa-trash-can mx-3')
                btnIconRemove.onclick=(e)=>{this.admProduto.removerProduto(e.target)}
                
                divEdit.append(btnIconEdit, btnIconRemove)
                divItem.appendChild(divEdit)
        })
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