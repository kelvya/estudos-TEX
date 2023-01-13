"use strict";
function cronograma() {
    console.log('Agenda mensal');
}
function cronograma_geral(tipo) {
    console.log(`Agenda ${tipo}`);
}
cronograma();
cronograma_geral('trimestral');
// cronograma_geral(12); ERRO de tipo
function agenda_diaria(dia, titulo) {
    return `Dia ${dia}, ${titulo}`;
}
let compromissoDia = agenda_diaria(12, 'Aniversário do Fulano');
console.log(compromissoDia);
let lembrete = function () {
    console.log('Dentista as 8h');
};
let notificacao = function (nome, qtd) {
    return `Olá ${nome}, você tem ${qtd} notificação`;
};
console.log(notificacao('Kelvya', 1));
lembrete();
// let listaDeCompras = ()=> console.log('Arroz, Feijão, Macarrão');
// let checklist = (tarefa:string) => console.log(`Fazer ${tarefa}`);
// listaDeCompras();
// checklist('compras')
let listaDeCompras = () => console.log("Arroz, Feijão, Macarrão");
let checklist = (tarefa, diaDaSemana = 'Domingo') => console.log(`Fazer ${tarefa}, ${diaDaSemana}`);
listaDeCompras();
checklist('compras', 'Sábado');
let mensagem = function (nome, qtd) {
    let msg = qtd === undefined ?
        `Olá  ${nome}` :
        `Olá ${nome}, você tem ${qtd} notificação`;
    return msg;
};
console.log(mensagem('Kelvya'));
