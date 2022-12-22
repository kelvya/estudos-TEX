// PRODUTO.JS
// export const msg = 'Teste, JS go!'

export class Produto{
    id
    itens = ['Talharini a Bolonhesa', 'Salmão Grelhado']
    constructor(id){
        !id ? this.id = 0 : this.id = id
    }
    salvar(){
        this.lerProduto()
        this.id++
    }
    lerProduto(){
        let produto = {}
        produto.id = this.id
        produto.nome = this.itens[this.id]
        return produto
    }
}