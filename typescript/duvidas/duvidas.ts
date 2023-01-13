//STRING LITERALS

const jogadores = {
  j1: "Pedro",
  j2: "Ana",
  j3: "Afonso",
  j4: "Eldora",
};

jogadores.j2 = "Denise";

console.log(`jogadores: ${jogadores}`);

console.log(`_______________________________________________________`);

enum Status1 {
  Ativo = "ON",
  Bloqueado = 0,
  Pendente,
}

console.log(`Status1 com template Literals ${Status1}`);
console.log("Status1", Status1);
console.log(`Status1 do cliente ${Status1.Ativo}`);
console.log(`Status1 do cliente ${Status1.Bloqueado}`);
console.log(`Status1 do cliente ${Status1.Pendente}`);

console.log(`_______________________________________________________`);

// AULA 3.4.13 - Interface - parte 2

// interface Listagem {
//   [pedidos: number]: number;
// }
// interface Departamentos {
//   [setores: string]: string;
// }

// let historicoPedidos: Listagem = [123, 325, 84];
// console.log(`Pedido de n° ${historicoPedidos[1]}`); ///235
// let categoriaLoja: Departamentos = {};
// categoriaLoja["Cozinha"] = "Cozinha";
// categoriaLoja["Caixa"] = "Caixa"

// console.log(`Você está no setor: ${categoriaLoja['Cozinha']}`)

// interface Lojas{
//   regiao:string
//   filial:number
//   funcionarios?:number
// }
// let lojaMatriz:Lojas = {
//   regiao: 'Norte',
//   filial: 0
// }
// console.log(lojaMatriz)