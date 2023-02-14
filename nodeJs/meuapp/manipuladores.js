const express = require('express')
const app = express()
const porta = 3000

app.get('/', (req, res) =>{
    res.send('<h1> Meu exemplo Node.js</h1>')
})

app.listen(porta, () =>{
    console.log(`Servidor em atividade na porta ${porta}`)
})

const f1 = function (req, res, next){
    console.log(`1° manipulador executado!`)
    res.send(`Pagina exemplo ok`)
    next()
}

// const f2 = function (req, res, next){
//     console.log(`2° manipulador executado!`)
//     res.send(`Pagina exemplo ok`)
//     next()
// }

// app.get('/exemplo/f1', [f1, f2])


const f2 = function (req, res, next){
    console.log(`2° manipulador executado!`)
    next()
}

app.get('/exemplo/f1', [f1, f2], (req, res, next) =>{
    console.log(`3° manipulador executado!`)
    res.send('Pagina exemplo OK')
})
