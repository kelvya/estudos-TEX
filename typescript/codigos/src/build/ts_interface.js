"use strict";
let pedido_01 = {
    codigo: 1,
    cliente: "Kelvya Thais",
};
console.log(pedido_01);
function imprimePedido(codigo, cliente) {
    console.log(`Pedido n°: ${codigo} - cliente: ${cliente}: em rota de entrega`);
}
function baixaPedido(codigo, cliente) {
    console.log(`Pedido n°: ${codigo} - cliente: ${cliente}: entregue!`);
}
let rastreiaPedido = imprimePedido;
rastreiaPedido(1, 'Lucas Silva');
rastreiaPedido = baixaPedido;
rastreiaPedido(2, 'Fulana de Tal');
