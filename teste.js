const x = y = z = 50;
console.log(x, y, z);

const myVar = 12;
const myvar = 13;

let a = 10;
a &= 3;// 10 & 3
console.log(a)

const ola = 'Ola mundo!'
console.log(ola.toUpperCase(), ola.toLowerCase(), ola.indexOf('u'), ola.substring(1));

console.log('____________________________________________________')

// const readline = require('readline');



// const teclado = readline.createInterface({

// input: process.stdin,

// output: process.stdout

// });



// teclado.question('Digite o seu nome: ', (resposta) => {

// console.log("Olá " + resposta);

// teclado.close();

// });

console.log('________________________________________________')

const readline = require('readline');



const teclado = readline.createInterface({

input: process.stdin,

output: process.stdout

});



teclado.question('Digite o primeiro valor: ', (valor1) => {

teclado.question('Digite o segundo valor: ', (valor2) => {

var soma = parseInt(valor1) + parseInt(valor2);

console.log("A soma é " + soma);

teclado.close();

});

});
