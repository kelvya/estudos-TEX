# 3.5.11 – Criando uma base de dados via cliente mySQL

- Criar um SCHEMA:

```CREATE SCHEMA `livraria` DEFAULT CHARACTER utf8mb4 COLLATE ut8mb4_0900_ai_ci;```

- Para Criar uma tabela no banco livraria:

```USE livraria;```

```
CREATE TABLE livro(
    id_livro INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    titulo CHAR(50) NOT NULL,
    resumo LONGTEXT NULL,
    paginas INT NOT NULL
);
```

- Para inserir valores na tabela:
```
INSERT INTO livro VALUES (NULL, `Dory`, `O Leão Dourado`, 145);
```


