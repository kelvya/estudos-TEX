const http = require("http");
http.createServer(
    function(req, res){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('Bem vindo ao Node.JS!')
    }
).listen(8080);
console.log("Servidor rodando!");
