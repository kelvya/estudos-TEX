# 3.6.5 – Características e vantagens do MongoDB – parte 1

- É escrito em C++
- Banco de dados multiplataforma orientado a documentos
- Fornece alto desempenho
- Alta disponibilidade
- Fácil de escalar
- TRabalha com o conceito de coleção e documentos:
  - banco de dados é um container físio para coleções
  - cada banco de dados tem seu próprio conjento de arquivos no sistema de arquivos
  - servidos MongoDB normalmente suporta vários bancos de dados

## Coleção

- Uma coleção é um grupo de arquivos do MongoDB
- O MongoDB armazena documentos em coleções, que são semelhantes às tabelas em bancos de dados relacionais.
- Uma coleção pertence a apenas um específico banco de dados
- Não existe o conceito de esquema 
- Os documentos dentro de uma coleção podem ter campos diferentes
- Todos os documentos dentro de uma coleção são de finalidade semelhante ou relacionada.
- Restrições para se criar uma coleção no MongoDB:
  - Os nomes das coleções devem começar com um sublinhado ou um caractere de letra.
  - Não podem conter: $, uma string vazia (por exemplo "", ), o caractere nulo, começar com o system.prefixo. (Reservado para uso interno).

## Documento

- Conjunto de pares chave-valor
- Esquema dinâmico
  - documentos na mesma coleção nãoprecisam ter o mesmo conjunto de campos
  - documentos na mesma coleção nãoprecisam ter a mesma estrutura
  - campos comuns em documentos de uma coleção podem conter diferentes tipos de dados

Comparando RDBMS com MongoDB:

- MongoDB é um Sistema gerenciador de banco de dados NoSQL, diferente dos SGBDs relacionais com SQL como é a caso do MySQL:

|Diferenças entre RDBMS(relacionais) e DBMS NoSQL|
|-|

| MySQL         | MongoDB|
|:----:         | :-----:|
|Tabela         | Coleção|
|Linha          | Documento|
|Coluna         | Campo|
|INNER JOIN     | Documentos incorporados|
|Chave primária | Chave primária (chave padrão ```_id``` fornecida pelo próprio MongoDB)|

## Exemplo de estrutura de documento

- ```_id```: número hexadecimal de 12 bytes:
  - garante a exclusividade de cada documento
  - você pode fornecer ```_id``` ao inserir o documento
  - caso não fornecer, o MongoDB fornecerá um id exclusivo para cada documento
  - Ex. ```_id: ObjectID(7df78ad8902c)```
    - os 4 primeiros bytes ```7df7```: registro de data e hora atual
    - próximos 3 bytes ```8ad```: identificação da máquina
    - próximos 2 bytes ```89```: identificação do processo do servidor MongoDB
    - 3 bytes restantes ```02c```: VALOR incremental simples




