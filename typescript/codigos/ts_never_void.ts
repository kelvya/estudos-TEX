function saudacao():void{
    console.log('Olá, tudo bem?');
}

let saudarPessoa:void = saudacao()

console.log(saudacao);
console.log(saudarPessoa);

let vazio:void = undefined;
// vazio = 1; //ERRO

// function checkNumber(input:(string | number)):boolean{
//     if(typeof(input) === 'string'){
//         return true;
//     }
//     if (typeof input === "number") {
//       return mensagemErro(`Este campo não aceita números`);
//     }
// }
// function mensagemErro(mensagem: string): never {
//   throw new Error(mensagem);
// }

// checkNumber('Kelvya Thais');
// // checkNumber(23456);