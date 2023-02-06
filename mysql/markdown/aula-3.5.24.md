# 3.5.24 – Criando Views

- Exibir a construção da tabela
  ```
  SHOW CREATE TABLE nome_da_tabela
  ```
- Tabela virtual baseada no conjunto de resultados de uma instrução SQL
- Contém linhas e colunas, assim como uma tabela real
- Campos em uma visão (VIEW) são campos de uma ou mais tabelas reais no banco de dados
- Permite adicionar instruções e funções SQL
- Permite apresentar os dados como se fosse provenientes de uma única tabela

Exemplo:
```
SELECT
    nome,
    UF,
    data_pedido
FROM
    Usuarios
INNER JOIN
    Pedidos USING (data_pedido);
```

- Podemos salvar a consulta no servidor de banco de dados
- Podemos atribuir um nome a consulta
- Uma View é uma consulta nomeada e armazenada no catálogo do banco de dados
- Para fazer referência a View como uma tabela em instruções SQL:

```
SELECT * FROM comprasUsuarios;
```

- Não armazena fisicamente os dados
- Ao emitir a SELECT com a VIEW:
  - a consulta subjacente, especificada na View retorna o conjunto de resultados
  - uma View é também chamada de tabela virtual

Exemplo:
```
CREATE VIEW dias_da_semana (dia) AS
    SELECT 'Segunda'
    UNION
    SELECT 'Terça'
    UNION
    SELECT 'Quarta'
    UNION
    SELECT 'Quinta'
    UNION
    SELECT 'Sexta'
    UNION
    SELECT 'Sabado'
    UNION
    SELECT 'Domingo';
```

```SELECT *FROM dias_da_semana```

```
CREATE VIEW livros_ate_100_reais AS
    SELECT titulo, resenha FROM livro WHERE preco <=100;
```

```
SELECT * FROM livros_ate_100_reais;
```

- Vantagens das Views:
  - simplifica consultas complexas
  - torna a lógica de negócios consistente
  - evita que você precise escrever repetidamente a mesma fórmula em todas as consultas
  - Permiter armazenar um cálculo e ocultar a sua complexidade
  - adiciona camadas extras de segurança
  - Exemplos:
    - uma tabela pode expor muitos dados
    - incluindo dados confidenciais e sensíveis, como informações pessoais e bancárias
    - você pode limitar quais dados os usuários podem acessar, expondo apenas os dados necessários
    - pode-se escrever diferentes views para diferentes níveis de usuários
  - Atenção:
    - uma view e uma tabela não podem ter o mesmo nome
    - descartar a tabela primeiro antes de criar uma exibição, caso o nome seja o mesmo da tabela excluída

```
SHOW FULL TABLES IN nome_da_base_de_dados WHERE TABLE_TYPE LIKE 'VIEW';
```

