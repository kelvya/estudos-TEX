
async function connecta(){
    const mysql = require('mysql2/promise')
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'kelvya',
        password: 'umdoistres***321.DB',
        database: 'restaurante_delivery'
    })
    console.log('MySQL conectado!')
    global.connection = conn
    return connection
}

async function selectCategorias(){
    const connect = await connecta()
    const [rows] = await connect.query('SELECT * FROM selectcategorias')
    console.log(rows)
    return JSON.stringify(rows)
}
// selectCategorias()

async function selectCategoriasView(id){
    const connect = await connecta()
    const [rows] = await connect.query(`SELECT * FROM selectcategorias WHERE id_categoria_tipo=${id}`)
    console.log(rows)
    return JSON.stringify(rows)
}

async function insereTeste(dados){
    const connect = await connecta()
    const values = [dados.nome, dados.email, dados.idade]
    const [rows] = await connect.query('INSERT INTO teste (nome, email, idade) VALUES (?, ?, ?)', values)
    console.log('Insert OK!')
}
// insereTeste({nome: 'Kelvya Thais', email: 'kelvya@email.com', idade: 36})

async function atualizaTeste(valor, id, col){
    const connect = await connecta()
    const values = [valor,id,col]
    console.log('UPDATE OK!')
    return await connect.query(`UPDATE teste SET ${col}=? WHERE idteste =?`, values)
}
// atualizaTeste("mjackson@email.com", 4, "email")

async function deleteTeste(dados){
    const connect = await connecta()
    const values = [dados.id]
    const [rows] = await connect.query('DELETE FROM teste WHERE idteste=?', values)
    console.log('Delete OK!')
}
// deleteTeste({id:11})

module.exports = { selectCategorias, selectCategoriasView, insereTeste, atualizaTeste, deleteTeste }



//comando para teste
// curl -H "Content-Type: application/json" -X GET http://localhost:3000/categorias