"use strict";
class Reserva {
    constructor(codigo, acomodacao) {
        this.codigo = codigo;
        this.acomodacao = acomodacao;
    }
}
const reserva = new Reserva(4, "Luxo");
// reserva.codigo = 5 // ERRO readonly - apenas leitura, não pode ser modificado
console.log(reserva);
console.log(reserva.codigo);
const comanda = {
    itens: ["Café com leite", "Pão de queijo", "Salada de frutas"],
    quarto: 12,
};
// comanda.quarto = 13 // ERRO - readonly não pode ser modificado é apenas leitura
const fichaDeConsumo = {
    itens: ["Café com leite", "Pão de queijo", "Salada de frutas"],
    quarto: 12,
};
// fichaDeConsumo.itens = ['Café com leite', 'Salada de frutas']  // ERRO readonly não permite 
fichaDeConsumo.itens[0] = 'Café expresso'; ////  ATENÇÃO COM MODIFICAÇÃO DE VALORES
console.log(fichaDeConsumo);
