"use strict";
function zoologico(regiao, ...animais) {
    return `Nosso zoo está localizado na região de ${regiao}. 
    Venha conhecer ${animais.join(',')}!`;
}
console.log(zoologico('Guaraíta', 'Leões, Girafas, Elefantes'));
console.log(zoologico("Ipiranga"));
let restaurante = (nome, ...gastronomia) => {
    return `${nome} - Você merece saborear nossa comida ${gastronomia.join(',')}!`;
};
console.log(restaurante("Ristorante", "Italiana, Alemã, Holandesa"));
