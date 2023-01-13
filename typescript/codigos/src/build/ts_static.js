"use strict";
class Assinatura {
    constructor(cupom) {
        this.cupom = cupom;
    }
    static assinaturaPremium(flag) {
        return flag ? this.periodo = this.periodo * 2 : null;
    }
    assinaturaMaster(flag) {
        flag ? Assinatura.periodo = Assinatura.periodo + 4 : null;
    }
}
Assinatura.periodo = 6;
const perfil = Assinatura;
console.log(`Período de assinatura: ${perfil.periodo} meses`);
perfil.assinaturaPremium(true);
console.log(`Período de assinatura: ${perfil.periodo} meses`);
const cupomValido = new Assinatura(true);
console.log(`Cupom valido: ${cupomValido.cupom}`);
cupomValido.assinaturaMaster(true);
console.log(`Período de assinatura: ${perfil.periodo} meses`);
