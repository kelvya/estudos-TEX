const rotas = require('./rotas')
const express = require('express')
const app = express()
const porta = 3000
const path = require('path')

app.listen(porta, () =>{
    console.log('Server em atividade')
    console.log(__dirname)
    console.log(path.join(__dirname, 'css'))
})

// app.use(express.static('docs'))
app.use('/arquivos', express.static('docs'))
app.use('/imagens', express.static('pratos'))
app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/rotas', rotas)