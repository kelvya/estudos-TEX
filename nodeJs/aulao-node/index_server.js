const http = require('http')

const hostname = '127.0.0.1'
const porta = 3001

const servidor = http.createServer ((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html;charset=utf-8')
    res.end('<h1>Olá Node JS !!!</h1>')
})

servidor.listen(porta, hostname, ()=>{
    console.log(`Servidor rodando em http://${hostname}:${porta}`)
})

const fs = require("fs")

fs.readFile('dados.json', 'utf-8', (err, data)=>{
    if(err)throw err;
    console.log(data)
})

//Agendador de tarefas
// const agenda = require('node-schedule');
// const tarefa = agenda.scheduleJob('00 20 * * *', ()=>{
//     console.log('Tarefa agendada para as 19h58')
// })

const agenda = require('node-schedule');
const tarefa = agenda.scheduleJob('*/1 * * * *', ()=>{
    console.log('Tarefa agendada para executar a cada minuto')
})