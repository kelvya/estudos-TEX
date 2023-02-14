const http = require('http')
http.createServer(
    function(req, res){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('Seja bem vindo ao Node.js!!')
    }
).listen(8080)
console.log('Server rodando!')