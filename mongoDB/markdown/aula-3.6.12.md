# 3.6.12 – Criando projeções

## Projeção

- Seleciona apenas os dados necessários
- É um segundo parâmetro que existe opcionalmente no método find()
- Pode recuperar uma lista de campos específica
- Com valor 1 ou 0
- 1 para mostrar o campo
- 0 para ocultar o campo

db.[collection].find({}, {KEY:1})

## limit()

- Limita a exibição de registros
- Aceita um arquivo de tipo numérico

db.[collection].find().limit(NUMBER)

## sort()

- Utilizado para classificar documentos
- Aceita um documento contendo uma lista de campos
- Junto com a sua ordem de classificação
- 1 para ordem crescente enquanto
- -1 para ordem decrescente

