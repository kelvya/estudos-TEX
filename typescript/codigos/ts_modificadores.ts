
///////////////   EXEMPLO DE PRIVATE

class Produto{
    nome:string
    private codigo:number
    protected referencia:number

    constructor(nome:string, codigo:number, referencia: number){
        this.nome =nome
        this.codigo = codigo
        this.referencia = referencia
    }
}

let cadastraProduto = new Produto('Geladeira', 456, 555)
console.log(cadastraProduto.nome)
cadastraProduto.nome = 'Televisão'
// cadastraProduto.codigo = 45654 // ERRO - propriedade com private não pode ser modificada
// console.log(cadastraProduto.codigo) // ERRO propriedade com private não pode ser lida
console.log(cadastraProduto)

/////////////   EXEMPLO DE PROTECTED
class Carrinho extends Produto {
  constructor(nome: string, codigo: number, referencia: number) {
    super(nome, codigo, referencia);
  }
  getReferencia():string {
    return `Referência do pedido: ${this.referencia}`;
  }
}

let shop:Carrinho = new Carrinho('Notebook', 564654, 556)
console.log(shop.getReferencia())