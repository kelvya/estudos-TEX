///////////////////////////////////   IMPORTAÇÃO ÚNICA
// import { cliente } from "./ts_modulo";  // Apenas um elemento de importação
// console.log(`Nosso novo client é: ${cliente}`);

//////////////////////////////////    IMPORTANDO UM MÓDULO PARA UMA VARIÁVEL
// import * as ped from "./ts_modulo";  // Vários elementos de importação, precisa da variável para chamar o elemento
// console.log(`Nosso novo client é: ${ped.cliente}`);

/////////////////////////////////     RENOMEANDO UM OU MAIS MÓDULOS
import { Reservas as R, cliente as C } from "./ts_modulo"



console.log(`Nosso novo client é: ${C}`)
let reservaInicial = new R(3, 'Presidencial')
console.log(reservaInicial)