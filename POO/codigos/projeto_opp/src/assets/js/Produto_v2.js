
// AULA  3.1.11 – Imprimindo resultados – parte 1

export class Produto{
    id
    nome
    valor
    constructor(id){
        !id ? this.id = 0 : this.id = id
    }
    salvar(inputNome, inputValor){
        this.nome = inputNome
        this.valor = inputValor
        this.lerProduto()
        this.id++
        return this.lerProduto()
    }
    lerProduto(){
        let produto = {}
        produto.id = this.id
        produto.nome = this.nome
        produto.valor = this.valor
        return produto
    }
}
