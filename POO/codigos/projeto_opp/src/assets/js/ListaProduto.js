// ListaProdutos.js

import { Produto } from "./Produto.js";

export class ListaProduto extends Produto{
    listagem = []
    constructor(){
        super()
    }
    criarListagem(inputNumber, inputValor){
        this.listagem.push(this.salvar(inputNumber, inputValor))
        console.log(this.listagem)
        this.listagem.forEach((n, i)=>{
            console.log(n,i)
                for(const item in this.listagem[i]){
                    console.log(this.listagem[i][item])
                }
        })
    }
}