function zoologico(regiao:string, ...animais:string[]){
    return `Nosso zoo está localizado na região de ${regiao}. 
    Venha conhecer ${animais.join(',')}!`
}

console.log(zoologico('Guaraíta', 'Leões, Girafas, Elefantes'));
console.log(zoologico("Ipiranga"));

let restaurante = (nome:string, ...gastronomia:string[])=>{
    return `${nome} - Você merece saborear nossa comida ${gastronomia.join(',')}!`
}
console.log(restaurante("Ristorante", "Italiana, Alemã, Holandesa"));