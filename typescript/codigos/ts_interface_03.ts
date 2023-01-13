////////////////////////    INTERFACE EXTENDS
interface IProduto{
    nome:string
    codigo:number
    getCodigo?:() => string
}
interface IFornecedor extends IProduto{
    fornecedor:string
}
let cadastroProdutos:IFornecedor = {
    nome: 'Fritadeira elétrica',
    codigo: 546541,
    fornecedor: 'JN Importados'
}
console.log(cadastroProdutos)

///////////////////////////  IMPLEMENTADA NA CLASSE
class Estoque implements IFornecedor{
    nome: string
    codigo:number
    fornecedor: string

    constructor (nome:string, codigo:number, fornecedor:string){
        this.nome = nome
        this.codigo = codigo
        this.fornecedor = fornecedor
    }

    getCodigo():string{
        return `Código do pedido: nº ${this.codigo}`
    }
}

let item:Estoque = new Estoque('Quebra cabeça', 296854, 'Estrela Brinquedos')

console.log(item)
console.log(item.getCodigo())