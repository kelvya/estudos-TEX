"use strict";
let cadastroProdutos = {
    nome: 'Fritadeira elétrica',
    codigo: 546541,
    fornecedor: 'JN Importados'
};
console.log(cadastroProdutos);
///////////////////////////  IMPLEMENTADA NA CLASSE
class Estoque {
    constructor(nome, codigo, fornecedor) {
        this.nome = nome;
        this.codigo = codigo;
        this.fornecedor = fornecedor;
    }
    getCodigo() {
        return `Código do pedido: nº ${this.codigo}`;
    }
}
let item = new Estoque('Quebra cabeça', 296854, 'Estrela Brinquedos');
console.log(item);
console.log(item.getCodigo());
