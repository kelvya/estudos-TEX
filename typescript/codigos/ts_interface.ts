////////////////   DEFINIR UM TIPO
interface Pedido {
  codigo: number;
  cliente: string;
}
let pedido_01: Pedido = {
  codigo: 1,
  cliente: "Kelvya Thais",
};
console.log(pedido_01);

////////////////   DEFINIR UM TIPO DE FUNÇÃO
interface ProcessaPedido {
  (codigo: number, cliente: string):void
}
function imprimePedido(codigo:number, cliente:string):void{
  console.log(`Pedido n°: ${codigo} - cliente: ${cliente}: em rota de entrega`)
}
function baixaPedido(codigo: number, cliente: string): void {
  console.log(`Pedido n°: ${codigo} - cliente: ${cliente}: entregue!`);
}
let rastreiaPedido:ProcessaPedido = imprimePedido
rastreiaPedido(1, 'Lucas Silva')
rastreiaPedido = baixaPedido
rastreiaPedido(2, 'Fulana de Tal')