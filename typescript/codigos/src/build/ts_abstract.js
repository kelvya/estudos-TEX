"use strict";
class Rede {
    // constructor(nome:string){
    //     this.nome = nome
    // }
    imprimeLoja() {
        return this.nome;
    }
}
// let rede:Rede = new Rede ('Itapuranga') // ERRO - abstract não pode ser instanciada
class Franquia extends Rede {
    constructor(nome, codigo) {
        super();
        this.nome = nome; ///foi necessário incluir por causa da propriedade abstract nome(da abstract class Rede)
        this.codigoFranquia = codigo;
    }
    buscaLoja(nome, codigo) {
        return new Franquia(nome, codigo);
    }
}
let franqueado = new Franquia('Itapuranga', 2);
let loja5 = franqueado.buscaLoja('Noroeste', 5);
console.log(franqueado);
console.log(franqueado.imprimeLoja());
console.log(loja5);
console.log(loja5.imprimeLoja());
