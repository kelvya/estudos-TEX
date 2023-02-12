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
  const [rows] = await connect.query("SELECT * FROM produto_categoria;");
  console.log(rows);
  return JSON.stringify(rows);
}

module.exports = { selectCategorias };

selectCategorias();
