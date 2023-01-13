class Assinatura{
    static periodo:number = 6
    cupom:boolean
    constructor(cupom:boolean){
        this.cupom = cupom
    }
    static assinaturaPremium(flag:boolean){
        return flag ? this.periodo = this.periodo * 2 : null
    }
    assinaturaMaster(flag:boolean){
        flag ? Assinatura.periodo = Assinatura.periodo + 4 : null
    }
}

const perfil = Assinatura
console.log(`Período de assinatura: ${perfil.periodo} meses`);
perfil.assinaturaPremium(true)
console.log(`Período de assinatura: ${perfil.periodo} meses`);

const cupomValido:Assinatura = new Assinatura(true)
console.log(`Cupom valido: ${cupomValido.cupom}`)
cupomValido.assinaturaMaster(true)
console.log(`Período de assinatura: ${perfil.periodo} meses`);
