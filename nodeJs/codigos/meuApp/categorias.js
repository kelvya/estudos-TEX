async function connecta() {
  const mysql = require("mysql2/promise");
  const conn = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "**********",
    database: "produto_categoria",
  });
  console.log("Mysql conectado");
  global.connection = conn;
  return connection;
}

async function selectCategorias() {
  const connect = await connecta();
  const [rows] = await connect.query('SELECT * FROM selectCategorias;');
  console.log(rows);
  return JSON.stringify(rows);
}

async function selectCategoriasView(id) {
  const connect = await connecta();
  const [rows] = await connect.query(`SELECT * FROM selectCategorias WHERE id_categoria_tipo = ${id};`);
  console.log(rows);
  return JSON.stringify(rows);
}

module.exports = { selectCategorias, selectCategoriasView };

selectCategorias();
