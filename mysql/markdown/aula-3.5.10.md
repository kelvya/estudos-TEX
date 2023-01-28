# 3.5.10 – Conceitos da linguagem SQL

## SQL (Structured Query Language)

- DDL (linguagem de definição de dados)
  - linguagem de computador aplicada na estrutura de dados
  - descreve os registros, campos e conjuntos associados a um modelo de dados
  - refere-se a qualquer linguagem formal que descreve estruturas de dados como esquemas
  - os parâmetros ddl são armazenados em um conjunto de arquivos chamado dicionário de dados

- Dicionário de dados:
  - contém metadados
  - informações sobre a estrutura de armazenamento
  - o SGBD consulta os metadados a cada vez que executa uma operação sobre o banco de dados
  - Exemplo:
    - Em um programa executando uma tarefa para recuperar um campo como nome ou email
    - o SGBD verifica a existência desses campos 
    - analisa se eles estão definidos no esquema de banco de dados
    - um interpretador ddl sempre processa comandos previamente alimentados
    - a alimentação é feita por DBAs(Administradores de Banco de Dados)
    - DBAs elaboram a definição dos esquemas

- DML (linguagem de manipulação de dados)
  - possue recursos que acessam e manipulam dados contidos em um banco de dados
  - avalia declarações funcionais e consultivas
  - segue o modelo de dados existente
  - SQL é uma linguagem de consulta que usa linguagem popular
  - SQL foi criado para facilitar a interação do usuário com o sistema de banco de dados
  - As cláusulas SQL envolvem executar tarefas nas tabelas  de banco de dados
   
   ```inserir``` ```recuperar``` ```excluir``` e ```deletar```

- Principais comandos DML:
  - ```SELECT``` Recupera informações armazenadas no banco de dados
  - ```INSERT``` Adiciona novas informações no banco de dados
  - ```UPDATE``` Altera informações armazenadas no banco de dados
  - ```DELETE``` Exclui informações do banco de dados
  - Exemplos:
  - Retornar todas as linhas existentes na tabela funcionário exibindo o nome e o cargo: ```SELECT nome, cargo FROM funcionario;```
  - Inserir um novo usuário na tabela usuário: 
  ```
  INSERT INTO usuario (nome, email)
      VALUES ('Antonio Souza', 'souza@email.com'
  ```
  - Atualizar o campo 'cidade' na linha do cliente de ID igual a 1:
  ```
  UPDATE Cliente
      SET cidade = 'Brasília'
      WHERE idCliente = 1;
  ```
  - Excluir o usuário 'Antonio Souza' da tabela Cliente
  ``
  DELETE FROM Cliente WHERE Cliente = 1;
  ```

- O banco de dados relacional (baseado na linguagem SQL) surgiu na década de 70
- As empresas foram implementando esse conceito, alcançando uma grande popularidade
- Hoje está presente na maior parte dos sistemas
- Tem base no modelo relacional
- Tem uma forma intuitiva e direta de representar os dados em tabelas
- Exibe linhas e colunas em uma tabela, cada coluna representa um campo específico de dados e informações
- A estruturação de esquemas é uma projeção da estrutura de relacinamento entre as linhas e colunas

## Cláusulas e Instruções:

- CREATE (SQL)
- cria um objeto
- Sistemas gerenciadores de banco de dados suportam a criação de:
  - tabelas
  - índices
  - usuários
  - banco de dados
```
CREATE TABLE Livro (
  id INTEGER PRIMARY KEY,
  titulo CHAR(50) NULL,
  resumo CHAR(75) NOT NULL,
  paginas FLOAT NULL,
);
```
- DROP
- remove um objeto, tabela, usuários e banco de dados:
```
DROP TABLE empregados;
```

- ALTER
- altera as propriedades de um objeto
- utilizado para adicionar ou remover uma coluna para uma tabela existente
```
ALTER TABLE Livro ADD categoria VARCHAR(50);
ALTER TABLE Livro DROP COLUMN editora;
```

- TRUNCATE
- esvazia imediatamente todo o conteúdo de uma tabela ou objeto que contenha dados
- mais rápido que um comando DELETE, pois não armazena os dados
- os dados são removidos no log de transações
```
TUNCATE TABLE Clientes;
```

- ORDER BY
- classifica o conjunto de resultados em ordem crescente (ASC) ou decrescente (DESC)
- o padrão da ordem é crescente
```
SELECT coluna1, coluna2 FROM tabela ORDER BY coluna1 ASC|DESC;
```

- LIKE
- usado em uma cláusula WHERE para buscar um padrão específico em uma coluna
  - o sinal de porcentagem ```%``` representa zero, um ou vários caracteres
  - o sinal de sublinhado ```_``` representa um único caractere
 
Qualquer valor iniciando com A:

```
SELECT soluna1, coluna2 FROM tabela WHERE coluna1 LIKE 'A%';
```
Qualquer valor terminando com A:

```
SELECT soluna1, coluna2 FROM tabela WHERE coluna1 LIKE '%A';
```
Qualquer valor que tenha A em qualquer posição:

```
SELECT soluna1, coluna2 FROM tabela WHERE coluna1 LIKE '%A%';
```
Qualquer valor que tenha A em na 3° posição:

```
SELECT soluna1, coluna2 FROM tabela WHERE coluna1 LIKE '___A%';
```
Qualquer valor que comece com a letra A e termine com a letra O:

```
SELECT soluna1, coluna2 FROM tabela WHERE coluna1 LIKE 'A%O';
```
