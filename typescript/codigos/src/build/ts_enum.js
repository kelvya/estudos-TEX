"use strict";
// enum Gastronomia{
//     Brasileira,
//     Francesa,
//     Japonesa,
//     Alemã,
//     Italiana
// }
// console.log(Gastronomia); //enum completo
// console.log(Gastronomia.Francesa);//1
// console.log(Gastronomia[1])//Francesa
// enum Gastronomia {
//   Brasileira = 'BR',
//   Francesa = 'FR',
//   Japonesa = 'JP',
//   Alemã = 'AL',
//   Italiana = 'IT',
// }
// console.log(Gastronomia); //enum completo
// console.log(Gastronomia.Francesa);//1
// console.log(Gastronomia[1]); //ERRO - funciona só quando enum é number
// enum Status{
//     Ativo = 'ON',
//     Bloqueado = 0,
//     Pendente
// }
// console.log(`Status com template Literals ${Status}`);
// console.log('Status', Status);
// console.log(`Status do cliente ${Status.Ativo}`);
// console.log(`Status do cliente ${Status.Bloqueado}`);
// console.log(`Status do cliente ${Status.Pendente}`);
var Pontuacao;
(function (Pontuacao) {
    Pontuacao[Pontuacao["Nivel1"] = 1] = "Nivel1";
    Pontuacao[Pontuacao["Nivel2"] = 2] = "Nivel2";
    Pontuacao[Pontuacao["Nivel3"] = 4] = "Nivel3";
})(Pontuacao || (Pontuacao = {}));
console.log(Pontuacao.Nivel1);
console.log(Pontuacao.Nivel2);
console.log(Pontuacao.Nivel3);
console.log(Pontuacao);
let pontos = Pontuacao.Nivel1;
console.log(`Nivel de pontuação: ${pontos}`);
pontos |= Pontuacao.Nivel2;
console.log(`Você subiu de nível! Pontuação: ${pontos}`);
pontos |= Pontuacao.Nivel3;
console.log(`Você subiu mais um nível! Pontuação: ${pontos}`);
pontos &= ~Pontuacao.Nivel3;
console.log(`Você voltou um nível! Pontuação: ${pontos}`);
