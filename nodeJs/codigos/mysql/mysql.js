const mysql = require('mysql')

var conn = mysql.createConnection({
    host:'localhost:3306',
    user: 'root',
    password: 'Lua@0981'
})

conn.connect((erro) =>{
    if(erro) throw erro
    console.log('MySQL conectado!')
    conn.query('CREATE DATABASE testeNode', (err, res) =>{
        if(erro) throw erro
        console.log('Nova Databade criada')
    })
})