const express = require('express')
const multer = require('multer')
const path = require('path')
const app = express()

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null, 'uploads')
    },
    filename: (req,file, cb)=>{
        cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`)
    }

})

const upload = multer({storage:storage})
app.use('/uploads', express.static(`${__dirname}/uploads`))

app.get('/', (req, res) =>{
    res.send(`
    <form action="/" method="post" enctype="multipart/form-data">
    <input type="file" name="imagem"><br/><br/>
    <button>Envuar Arquivo</buttom>
    </form>
    `)
})
app.post('/', upload.single("imagem"), (req, res, next) =>{
    const imagem = req.file
    if(!imagem){
        const err = new Error("Algo deu errado")
        err.httpStatusCode = 400
        return next(err)
    }
    res.send(`
    <h2>Imagem transferida com sucesso</h2>
    <img src="/${imagem.path}" width="50%" />
    `)
})

const port = 3000
app.listen(port, () =>{
    console.log('Servidor em atividade')
})