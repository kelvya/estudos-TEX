# 3.5.22 – Criando índices

- Estruturas de dados que otimiza a velocidade de recuperação dos dados
  - gravações adicionais
  - armazenamento
- Otimizador de consulta
  - usa índices para localizar dados rapidamente
  - descartando a verificação de cada linha em uma tabela ao fazer uma consulta
- Criar uma tabela com uma chave primária gera automaticamente um índice especial PRIMARY
  - índice clusterizado
  - é armazenado junto com os dados na mesma tabela
  - impõe a ordem das linhas na tabela
- Outros índices além do PRIMARY: índices secundários ou índices não clusterizados
  - fácil de escrever
  - consulta rápida
  - ATENÇÃO:
    - caso a tabela possua milhões de linhas: indicado o uso de um índice
    - sem um índice: a recuperação de dados causará latência (lentidão) para retornar o resultado

## CREATE INDEX

- Índices geralmente são definidos para uma tabela nomomento da criação
- Índices podem ser definidos para uma ou mais colunas:
 ```
 CREATE TABLE t(
    c1 INT PRIMARY KEY,
    c2 INT NOT NULL,
    c3 INT NOT NULL,
    c4 VARCHAR(10),
    INDEX (c2, c3)
 );
 ```
- Adicionar um novo índice para uma tabela existente:
 ```
 CREATE INDEX nome_do_indice ON nome_da_tabela (colunas);
 ```

 ```CREATE INDEX novo_indice ON Livro(titulo);```
