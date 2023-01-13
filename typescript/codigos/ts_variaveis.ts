var produto: string = 'Geladeira';
// console.log(agenda);// ERRO tentar acessar antes de declarar
// console.log(eletronico); //Aqui oK, no JavaScript retorna undefined
var eletronico = 'Televisor';
let agenda = 'Reunião Devs';
let compromisso
var reuniao
const vagas = 40;

const jogadores = {
    j1: 'Pedro',
    j2: 'Ana',
    j3: 'Afonso',
    j4: 'Eldora'
}

// const jogadores = {
//     j1: 'Pedro',
//     j2: 'Ana',
//     j3: 'Afonso',
//     j4: 'Eldora'
// } ERRO de redeclaração

jogadores.j2 = 'Denise';

console.log(jogadores)

function exibirproduto(){
    produto = 'Notebook';
    var eletrodomestico = 'Fritadeira elétrica';
}

console.log(`produto: ${produto}`);
// console.log(eletrodomestico);

let n1: number = 10;

function testandoLet(){
     let n2: number = 11;

     if(n2 > n1){
        let n3: number = 12;
        n3++;//13
        console.log(`n3: ${n3}`);
     }
     while(n2 > n1){
        let n4: number = 13;
        n1++;
        console.log(`n4: ${n4}`);
     }
}
testandoLet()

console.log(`n1: ${n1}`);
// console.log(n3);//ERRO
// console.log(n4);//ERRO

function soma(n1:number, n2:number){
    // let n1 = 4; Erro de duplicação do identificador
    return n1 + n2;
}

// console.log(`soma: ${soma(2, '4')}`);
