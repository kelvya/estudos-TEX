# 3.6.7 – Gravando dados em documentos

Tipos de dados do MongoDB:

- String: tipo mais comum
  - deve ser UTF-8 válido

- Integer: valor numérico
  - número inteiro pode ser de 32 ou 64 bits
  - depende do servidor

- Boolean: valor booleano (verdadeiro ou falso)

- Double: valores de ponto flutuante
  
- Min/Max keys: compara com os elementos BSON mais baixos e mais altos
  
- Arrays: arrays ou listas ou múltiplos valores em uma chave
  
- Timestamp: útil para registrar quando um documento foi modificado ou adicionado
  
- Object: documentos incorporados
  
- Null: valor nulo
  
- Symbol: forma idêntica a uma string
  - geralmente reservado para idiomas qu usam um tipo de símbolo específico
  
- Data: Data ou hora no formato de hora do UNIX
  - especifique sua prória data e hora criando um objeto date
  - passando dia, mês e ano
  
- Object ID: ID do documento
  
- Bynary Data: dados binários
  
- Code: código JavaScript no documento
  
- Regular expression: Expressões regulares

[Mais informações sobre tipos de dados](https://www.mongodb.com/docs/manual/reference/bson-types/)

## Inserir dados:

Uma coleção compreende um ou mais docmentos

database(DB) > collection > document > pares chave:valor

```db[nomeDaColecao].insertOne({})```

```db[nomeDaColecao].insertMany({})```

