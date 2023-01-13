let a = 'Lorem Ipsum';
let n = 34;
let array = [1, 45, 'Bom dia!']
array.push(32);
array.push('Boa tarde!');
// array.push(true); ERRO


console.log(typeof a);
console.log(typeof n);
console.log(typeof array);


function somar(a1:number, a2:number){
    return a1 + a2;
}
somar(4, 9);
// soma('2', 4);

let cod:any = '34567';
let codPessoa:number = cod;
console.log(codPessoa);

let total:any = 540;
let compra = total as number;
console.log(`Sua compra é: ${compra},00`)

// let meuPet = {}
// meuPet.nome = 'Rabicó' ERRO

interface meuPet{
    nome: string;
    idade: number;
}
let pet = <meuPet>{}
pet.nome = "Rabicó";
pet.idade = 7;
console.log(`Meu pet se chama: ${pet.nome}, ele tem ${pet.idade}`);