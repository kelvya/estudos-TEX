
// AULA  3.1.11 – Imprimindo resultados – parte 1

export class Produto{
    id
    nome
    valor
    validacao
    local
    constructor(id){
        !id ? this.id = 0 : this.id = id
    }
    salvar(inputNome, inputValor){
        this.nome = inputNome
        this.valor = inputValor
        this.lerProduto()

        this.validacao = this.validarCampos(inputNome, inputValor)
        if(localStorage.getItem('cadastro')){
            this.local = JSON.parse(localStorage.getItem('cadastro'))
            this.id = this.local[this.local.length -1]['id'] + 1
        }else{
            this.validacao ? this.id++ : null
        }
        return this.lerProduto()
    }
    lerProduto(){
        let produto = {}
        produto.id = this.id
        produto.nome = this.nome
        produto.valor = this.valor
        return produto
    }
    validarCampos(inputNome, inputValor){
        return(
            inputNome.length < 1 || inputValor.length < 1 ? false : true
        )
    }
}
