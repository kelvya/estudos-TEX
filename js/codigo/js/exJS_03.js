console.log('Testando arquivo JS 3')

const btnConfirma = document.querySelector('#btnConfirma')
const nomeVisitante = document.querySelector('#nomeVisitante')
const mensagem = document.querySelector('#mensagem')

console.log(nomeVisitante)
console.log(btnConfirma)

btnConfirma.onclick=function (){
    //console.log(nomeVisitante.value)
    mensagem.style.display = "block"
    mensagem.textContent = `Olá ${nomeVisitante.value}, seja bem vindo(a)👋😊`
}

