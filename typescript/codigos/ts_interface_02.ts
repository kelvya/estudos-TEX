interface Listagem{
    [pedidos:number]:number
}
interface Departamentos{
    [setores:string]:string
}

let historicoPedidos:Listagem = [123, 325, 84]
console.log(`Pedido de n° ${historicoPedidos[1]}`) ///235
let categoriaLoja:Departamentos = {}
categoriaLoja["Cozinha"] = "Cozinha";
categoriaLoja["Caixa"] = "Caixa";

console.log(`Você está no setor: ${categoriaLoja["Cozinha"]}`)

interface Lojas {
  regiao: string
  readonly filial: number
//   funcionarios?: number; //OPCIONAL
  funcionarios: number
}
// let lojaMatriz: Lojas = {
//   regiao: "Norte",
//   filial: 0,
// };

let lojaMatriz: Lojas = {
  regiao: "Norte",
  filial: 0,
  funcionarios: 13
};

lojaMatriz.funcionarios = 15
// lojaMatriz.filial = 2 // READONLY - PROPRIEDADE SOMENTE DE LEITURA
console.log(lojaMatriz)


