
(async() =>{
const axios = require('axios')
const express = require('express')
const app = express()
const url = require('url')
app.use(express.json())

const categorias = require('./categorias.js')
const getCategorias = await categorias.selectCategorias()

app.get('/', (req, res) =>{
    res.sendFile(`${__dirname}/docs/index.html`)
    // res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    // res.end('Iniciando meu primeiro app em Node.js com Express')
})

app.get('/sobre', (req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    res.end('Sobre nosso app')
})

app.get('/contato', (req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    res.end('Entre em contato conosco!')
})

app.get('/categorias', async(req, res) =>{
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'})
    res.end(getCategorias)
})

app.get('/categorias/:id', async(req, res) =>{
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'})
    res.end(await categorias.selectCategoriasView(req.params.id))
})

app.post('/categorias/insert', async(req, res) =>{
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'})
    res.end('', await categorias.insereTeste(req.body))
})

app.get('/atualiza', async(req, res) =>{
    let qs = url.parse(req.url, true).query
    await categorias.atualizaTeste(qs.valor, qs.id, qs.col)
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    res.end('<h2>Registro atualizado com sucesso</h2>')
})

app.post('/categorias/delete', async(req, res) =>{
    res.writeHead(200, {'Content-Type': 'application/html;charset=utf-8'})
    res.end('<h2>Registro excluido com sucesso!</h2>', await categorias.deleteTeste(req.body))
})

app.listen(3000, () =>{
    console.log('Server em atividade!')
    console.log(__dirname)
})

function insere(){
axios.post('http://localhost:3000/categorias/insert', {
    nome: 'Lucas Antonio',
    email: 'la@email.com',
    idade: 45
})
}


function atualiza(){
// axios.get('http://localhost:3000/atualiza?item=jjm@email.com&id=4&col=email')
axios.get('http://localhost:3000/atualiza?valor=AL@email.com&id=2&col=email')
}

// axios.post('http://localhost:3000/categorias/delete', {
//     id: 10
// })


function deleteTeste(idTeste){
axios.post('http://localhost:3000/categorias/delete', {
    id: idTeste
})
}

// insere()
// atualiza()
deleteTeste(4)

})()