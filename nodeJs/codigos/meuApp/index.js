const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.end('Iniciando meu primeiro app em Node.js com Express :)')
})

app.listen(3000, ()=>{
    console.log('Server em atividade!')
})