console.log('Testando arquivo JS')

let nivel = 1
let statusContrato = ""
let n = 0

switch (nivel){
    case 1:
        statusContrato = "Estagiário"
        break
    case 2:
        statusContrato = "Efetivado"
        break
    default:
        n = 12
        statusContrato = "Em contratação"
        break
}

console.log(statusContrato)
console.log(n)

let i = 0
let y = 0

while (i<5){
    i++

    //if(i===3)continue
    if(i===3)break

    y+=i
    console.log(`${y}\n\ `)
}