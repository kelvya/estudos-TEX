// STORAGE PRODUTO

import {ListaProduto} from "./ListaProduto.js"

export class StorageProduto extends ListaProduto{
    storage = []
    form
    constructor(form){
        super()
        this.form = form
    }
    setStorage(inputNome, inputValor, box){
        this.storage.push(this.salvar(inputNome, inputValor))
        localStorage.setItem('cadastro', JSON.stringify(this.storage))
        // this.ListarItens(this.storage, box)
        return this.storage
    }
    getStorage(box){
        this.ListarItens(JSON.parse(localStorage.getItem('cadastro')), box)
    }
}