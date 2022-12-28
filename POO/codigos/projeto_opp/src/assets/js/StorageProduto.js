// STORAGE PRODUTO

import {ListaProduto} from "./ListaProduto.js"

export class StorageProduto extends ListaProduto{
    storage = []
    form
    constructor(form){
        super()
        this.form = form
    }
    setStorage(inputNome, inputValor, box, div){
        if(localStorage.getItem('cadastro')){
            this.storage = JSON.parse(localStorage.getItem('cadastro'))
            this.storage.push(this.salvar(inputNome, inputValor))
            localStorage.setItem('cadastro', JSON.stringify(this.storage))
        }else{
            this.storage.push(this.salvar(inputNome, inputValor))
            
        }
        localStorage.setItem('cadastro', JSON.stringify(this.storage))
        
        console.log(this.storage)
        // Limpar a lista anterior
        const divBox = document.getElementsByClassName(div)
        while(divBox.length >0){
            divBox[0].remove()
        }
        this.ListarItens(this.storage, box)
    }
    getStorage(box){
        if(localStorage.getItem('cadastro')){
            this.ListarItens(JSON.parse(localStorage.getItem('cadastro')), box)
            let cadastro = JSON.parse(localStorage.getItem('cadastro'))
            
            for(const cad in cadastro){
                this.boxListagem[cad].querySelector('.fa-trash-can').setAttribute('data-id', cadastro[cad]['id'] )
                
            }
        }
    }
}