abstract class Rede{
    abstract nome:string

    // constructor(nome:string){
    //     this.nome = nome
    // }

    imprimeLoja():string{
        return this.nome
    }
    abstract buscaLoja(nome:string, codigo:number):Rede
}

// let rede:Rede = new Rede ('Itapuranga') // ERRO - abstract não pode ser instanciada
class Franquia extends Rede{
    nome:string //foi necessário incluir por causa da propriedade abstract nome(da abstract class Rede)
    codigoFranquia:number

    constructor(nome:string, codigo:number){
      super();
      this.nome = nome; ///foi necessário incluir por causa da propriedade abstract nome(da abstract class Rede)
      this.codigoFranquia = codigo;
    }
    buscaLoja(nome: string, codigo: number): Rede {
        return new Franquia(nome, codigo)
    }
}

let franqueado:Franquia = new Franquia ('Itapuranga', 2)
let loja5 = franqueado.buscaLoja('Noroeste', 5)
console.log(franqueado)
console.log(franqueado.imprimeLoja())
console.log(loja5)
console.log(loja5.imprimeLoja())