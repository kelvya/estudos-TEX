// const mysql = require('mysql2')

// const conn = mysql.createConnection({
//     host:'localhost',
//     user: 'root',
//     password: 'Lua@0981',
//     database: 'db_hotel'
// })

// //Consulta...
// conn.query('SELECT *FROM hospedes', (err, rows)=>{
//     if(err)  throw err
//     console.log(rows)
// })

// //Finalizar a conexão
// conn.end()




const mysql = require('mysql2')
const express = require('express')
const app = express()

app.get('/api/info', ()=>{
    let data = {msg: "Acesso feito com sucesso"}
    data.status(200).json(data)
})

const porta = process.env.PORT || 3001
app.listen(porta, ()=>{
    console.log('Servidor rodando na porta 3001')
})


const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Lua@0981',
    database: 'db_hotel'
})

//Consulta...
conn.query('SELECT *FROM hospedes', (err, rows)=>{
    if(err)  throw err
    console.log(rows)
})

//Finalizar a conexão
conn.end()