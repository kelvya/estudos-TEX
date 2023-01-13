"use strict";
let nome = 'Kelvya Thais';
let flag = true;
const nivel = 10;
// nome = 10;
// flag = 1
// nivel = [];
// frutas[1] =  true;
let infoFuncionario = [36, 'Kelvya', true];
console.log(infoFuncionario);
// console.log(infoFuncionario[0] = '25'); ERRO
// let materias:[[number, string], [number, string]] = [[1, 'Geografia'], [2, 'Matemática'], [3, 'História']];
let disciplinas = [[1, 'Geografia'], [2, 'Matemática'], [3, 'História']];
let frutas = ['Maça', 'Laranja', 'Banana'];
let paises = ['Brasil', 'Argentina', 'Inglaterra'];
let novosPaises = ['Brasil', 'Argentina', 'Inglaterra', 50];
console.log(novosPaises[novosPaises.length - 1]);
let cardapio = [1, 'Final de semana', ...frutas];
console.log(cardapio);
function criaCardapio(tipo, id) {
    return [...id, ...tipo];
}
let cardapioDeHoje = criaCardapio(['Café da manhã', 'Almoço'], [1, 2]);
console.log(cardapioDeHoje);
