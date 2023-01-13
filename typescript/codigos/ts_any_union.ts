let dadosCliente:any = 0;
dadosCliente = true;
dadosCliente = 'Hans Solo';
dadosCliente = {};
let estatisticaCliente:any = ['Controle de tráfego', 22-10-1980, false];

let statusPedido: (string | number | boolean)
statusPedido = 'Em rota de entrega';
statusPedido = 123456;
statusPedido = false;

function exibeStatusPedido(statusPedido: (string | number)){
    if(typeof(statusPedido) === 'string'){
        console.log(`O seu pedido está em: ${statusPedido}`)
    }else{
        console.log(`O número do seu pedido é: ${statusPedido}`)
    }
}
exibeStatusPedido(`Rota de entrega`);
exibeStatusPedido(245678);