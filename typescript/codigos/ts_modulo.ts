export let cliente = 'Peter Pan';

export class Reservas {
  readonly codigo: number;
  acomodacao: string;

  constructor(codigo: number, acomodacao: string) {
    this.codigo = codigo;
    this.acomodacao = acomodacao;
  }
}

const reservas: Reservas = new Reservas(4, "Luxo");
