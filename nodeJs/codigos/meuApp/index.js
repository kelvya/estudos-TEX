(async () =>{
const express = require('express')
const app = express()

const categorias = require('./categorias.js')
const getCategorias = await categorias.selectCategorias()
// Exemplo usado na aula 3.8.2 – Framework Express
// app.get('/', (req, res) => {
//     res.end('Iniciando meu primeiro app em Node.js com Express :)')
// })


app.get("/", (req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    // res.end("Iniciando meu primeiro app em Node.js com Express :)");
    res.sendFile(`${__dirname}/docs/index.html`)
});

app.get("/sobre", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  res.end("Sobre nosso App");
});

app.get("/contato", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  res.end("Entre em contato conosco");
});

app.get("/categorias", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
  res.end(getCategorias);
});

app.get("/categorias:id", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
  res.end(await categorias.selectCategoriasView(req.params.id));
});

app.listen(3000, ()=>{
    console.log('Server em atividade!')
})

})()