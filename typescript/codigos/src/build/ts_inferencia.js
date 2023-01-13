"use strict";
let a = 'Lorem Ipsum';
let n = 34;
let array = [1, 45, 'Bom dia!'];
array.push(32);
array.push('Boa tarde!');
// array.push(true); ERRO
console.log(typeof a);
console.log(typeof n);
console.log(typeof array);
function somar(a1, a2) {
    return a1 + a2;
}
somar(4, 9);
// soma('2', 4);
let cod = '34567';
let codPessoa = cod;
console.log(codPessoa);
let total = 540;
let compra = total;
console.log(`Sua compra é: ${compra},00`);
let pet = {};
pet.nome = "Rabicó";
pet.idade = 7;
console.log(`Meu pet se chama: ${pet.nome}, ele tem ${pet.idade}`);
