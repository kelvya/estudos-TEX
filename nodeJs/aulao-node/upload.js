const http = require('http')
const formidable = require('formidable')
const fs = require('fs')

http.createServer((req, res) =>{
    if(req.url == '/upload'){
        const form = new formidable.IncomingForm()
        form.parse(req, (err, fields, files) =>{
            const oldPath = files.upload.filepath
            const newPath = `${__dirname}/imagens/${files.upload.originalFilename}`

            fs.rename(oldPath, newPath, (err)=>{
                if(err) throw err
                res.end("<h1>Arquivo transferido com sucesso</h1>")
            })
        })
    }else{
        res.writeHead(200, {'Content-type':"text/html"})
        res.write('<form action="upload" method="post" enctype="multipart/form-data">')
        res.write('<input type="file" name="upload"><br/>')
        res.write('<button>Enviar Arquivo</button>')
        res.write('<form>')
        return res.end()
    }
}).listen(3000)


//npm install multer
//npm install mongodb
//npm install formidable