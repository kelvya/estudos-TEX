const express = require('express')
const router = express.Router()

router.use((req, res, next)=>{
    console.log(`Time: ${Date.now()}`)
    next()
})

router.get('/', (req, res) =>{
    // res.send('<h1>Home Page</h1>')
    res.sendFile(`${__dirname}/docs/index.html`)
})

router.get('/sobre', (req, res) =>{
    res.send('<h1>Sobre</h1>')
})

router.get('/contato', (req, res) =>{
    res.send('<h1>Contato</h1>')
})

module.exports = router