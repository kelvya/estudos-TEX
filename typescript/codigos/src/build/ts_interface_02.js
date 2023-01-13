"use strict";
let historicoPedidos = [123, 325, 84];
console.log(`Pedido de n° ${historicoPedidos[1]}`); ///235
let categoriaLoja = {};
categoriaLoja["Cozinha"] = "Cozinha";
categoriaLoja["Caixa"] = "Caixa";
console.log(`Você está no setor: ${categoriaLoja["Cozinha"]}`);
// let lojaMatriz: Lojas = {
//   regiao: "Norte",
//   filial: 0,
// };
let lojaMatriz = {
    regiao: "Norte",
    filial: 0,
    funcionarios: 13
};
lojaMatriz.funcionarios = 15;
// lojaMatriz.filial = 2 // READONLY - PROPRIEDADE SOMENTE DE LEITURA
console.log(lojaMatriz);
