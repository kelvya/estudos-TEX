const mysql = require('mysql')
var conn = mysql.createConnection({
    // usuário deletado do SGBD
    host: 'localhost',
    user: 'kelvya',
    password: 'umdoistres***321.DB'
})

conn.connect((erro) =>{
    if(erro) throw erro
    console.log('MySQL conectado!!')
    conn.query('CREATE DATABASE testeNode', (erro, result)=>{
        if(erro) throw erro
        console.log('Nova Database criada!')
    })
})