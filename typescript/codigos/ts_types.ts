let nome:string = 'Kelvya Thais';
let flag:boolean = true;
const nivel:number = 10;

// nome = 10;
// flag = 1
// nivel = [];
// frutas[1] =  true;

let infoFuncionario:[number, string, boolean] = [36, 'Kelvya',true];
console.log(infoFuncionario);
// console.log(infoFuncionario[0] = '25'); ERRO

// let materias:[[number, string], [number, string]] = [[1, 'Geografia'], [2, 'Matemática'], [3, 'História']];
let disciplinas:[number, string][] = [[1, 'Geografia'], [2, 'Matemática'], [3, 'História']];

let frutas:string[] = ['Maça', 'Laranja', 'Banana'];
let paises:Array<string> = ['Brasil', 'Argentina', 'Inglaterra'];
let novosPaises:Array<string | number> = ['Brasil', 'Argentina', 'Inglaterra', 50];
console.log(novosPaises[novosPaises.length - 1]);

let cardapio:[number, string, ...string[]] = [1, 'Final de semana', ...frutas];
console.log(cardapio);

function criaCardapio(tipo:string[], id:number[]){
    return[...id, ...tipo];
}
let cardapioDeHoje = criaCardapio(['Café da manhã', 'Almoço'], [1, 2]);

console.log(cardapioDeHoje);

