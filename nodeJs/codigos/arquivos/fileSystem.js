const fs = require('fs')
let nomeArquivo = 'arquivoNode.md'

// fs.writeFile(nomeArquivo, '# Arquivo criado com Node.Js!', (erro) =>{
//     if(erro) throw erro
//     console.log(`Arquivo ${nomeArquivo} Criado`)
// })

fs.appendFile(nomeArquivo, '- Módulo File System em Node.js', (erro) => {
  if (erro) throw erro;
  console.log(`Arquivo ${nomeArquivo} Alterado`);
});