"use strict";
let dadosCliente = 0;
dadosCliente = true;
dadosCliente = 'Hans Solo';
dadosCliente = {};
let estatisticaCliente = ['Controle de tráfego', 22 - 10 - 1980, false];
let statusPedido;
statusPedido = 'Em rota de entrega';
statusPedido = 123456;
statusPedido = false;
function exibeStatusPedido(statusPedido) {
    if (typeof (statusPedido) === 'string') {
        console.log(`O seu pedido está em: ${statusPedido}`);
    }
    else {
        console.log(`O número do seu pedido é: ${statusPedido}`);
    }
}
exibeStatusPedido(`Rota de entrega`);
exibeStatusPedido(245678);
