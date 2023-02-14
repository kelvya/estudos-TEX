# 3.8.4 – Renderizando arquivos HTML

## Exibindo HTML:

- Node.js suporta o envio de arquivos como modelos para exibição em HTML
- Imprime o resultado no navegador WEB
- O método sendFile contido no módulo http faz o envio do documento ```.html```
- O ```HTTP.ServerResponde.sendFile()```:
  - transfere o arquivo no caminho fornecido
  - define o campo de cabeçalho HTTP de resposta Content-Type com base na extenção do nome do arquivo
- O ```__dirname```:
  - retorna o caminho da pasta onde reside o arquivo JavScript atual
  - usado para obter o nome do diretório do arquivo atualmente em execução

## Códigos usados em aula:

[meuApp](camminho)