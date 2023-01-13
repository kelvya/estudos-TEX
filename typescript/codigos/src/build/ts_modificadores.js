"use strict";
///////////////   EXEMPLO DE PRIVATE
class Produto {
    constructor(nome, codigo, referencia) {
        this.nome = nome;
        this.codigo = codigo;
        this.referencia = referencia;
    }
}
let cadastraProduto = new Produto('Geladeira', 456, 555);
console.log(cadastraProduto.nome);
cadastraProduto.nome = 'Televisão';
// cadastraProduto.codigo = 45654 // ERRO - propriedade com private não pode ser modificada
// console.log(cadastraProduto.codigo) // ERRO propriedade com private não pode ser lida
console.log(cadastraProduto);
/////////////   EXEMPLO DE PROTECTED
class Carrinho extends Produto {
    constructor(nome, codigo, referencia) {
        super(nome, codigo, referencia);
    }
    getReferencia() {
        return `Referência do pedido: ${this.referencia}`;
    }
}
let shop = new Carrinho('Notebook', 564654, 556);
console.log(shop.getReferencia());
