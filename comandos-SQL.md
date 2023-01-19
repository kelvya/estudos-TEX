## Anotações de alguns comandos SQL:

- Criar um banco de dados:
  
  Exemplo:

```
CREATE {DATABASE | SCHEMA} [IF NOT EXISTS] nome_do_banco
    [create_especification] ...

create_especification:
    [DEFAULT] CHARACTER SET [=] charset_name
    [DEFAULT] COLLATE [=] collation_name
    DEFAULT ENCRYPTION [=] {'Y' | 'N'}
```

- Apagar um banco de dados:

```
DROP {DATABASE | SCHEMA} [IF EXISTS] nome_do_banco
```

- Criar uma tabela. Ex:
  
```
CREATE TABLE tbCliente
(CPF VARCHAR (11)
NOME VARCHAR (100)
ENDERECO1 VARCHAR (150)
ENDERECO2 VARCHAR (150)
BAIRRO VARCHAR (50)
CIDADE VARCHAR (50)
ESTADO VARCHAR (50)
CEP VARCHAR (8)
IDADE SMALLINT,
SEXO VARCHAR (1),
LIMITE_CREDITO FLOAT,
VOLUE_COMPRA FLOAT,
PRIMEIRA_COMPRA BIT (1
))
```
