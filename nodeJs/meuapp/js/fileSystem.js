const fs = require('fs')
let nomeArquivo = 'arquivoNode.md'
// fs.writeFile(nomeArquivo, '# Arquivo criado com Node.js', (erro)=>{
//     if(erro) throw erro
//     console.log(`Arquivo ${nomeArquivo} Criado`)
// })

fs.appendFile(nomeArquivo, '- Módulo FileSystem em Node', (erro)=>{
    if(erro) throw erro
    console.log(`Arquivo ${nomeArquivo} Atualizado`)
})