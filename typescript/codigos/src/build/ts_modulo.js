export let cliente = 'Peter Pan';
export class Reservas {
    constructor(codigo, acomodacao) {
        this.codigo = codigo;
        this.acomodacao = acomodacao;
    }
}
const reservas = new Reservas(4, "Luxo");
