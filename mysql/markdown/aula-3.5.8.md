# 3.5.8 – Criando uma base de dados no MySQL WorkBench

## Tipos de dados MySQL:

- Tipo de dados que especifica um tipo particular de dados:
  - inteiro
  - pontos flutuantes
  - booleano

- identifica valores possíveis para esse tipo
- identifica operações que podem ser executadas nesse tipo
- identifica a forma como valores desse tipo são armazenados
- cada tabela de banco de dados pode conter muitas colunas
- cada coluna contém tipos de dados específicos

## características

- tipo de valors (fixos ou ariável): espaço de armazenamento (comprimento fixo ou variável)
- valores podem ser indexados ou não
- comparar valores de um determinado tipo de dados
- suportar um grande número de tipo de dados padrão SQL
- usar muitos tipos de dados diferentes que podem ser divididos em categorias:
  - numérico
  - data e hora
  - tipos de string
  - tipos espaciais
  - tipos de dados JSON

### Tipos de dados numérico:

- Todos os tipos de dados numéricos SQL essenciais
- pode incluir os tipos de dados numéricos exatos: inteiro, decimal, numérico
- pode incluir os tipos de dados numéricos aproximados: float, real, double precision
- suporta o tipo de dado de BIT para armazenar valorse de bits
- são tipos de dados numéricos exatos
- usados para armazenar valores inteiros
-EXEMPLOS:

   - TINYINT:
     - Armazenamento: 1byte
     - valor inteiro de 8bits
   - SMALLINT:
     - Armazenamento de 2 bytes
     - armazena pequenos números inteiros que variam de -32.767 a 32.767
     - o número negativo máximo, -32.768, é um valor reservado e não pode ser usado
     - valor é armazenado como um inteiro binário com sinal
     ```
     bigint : (-9.223.372.036.854.775.808) a (9.223.372.036.854.775.807) - 8 bytes
     int : (-2.147.483.648) a (2.147.483.647) - 4 bytes
     smallint : (-32.768) a (32.767) - 2 bytes
     tinyint : (0 a 255) - 1 byte
     ```
    - BOOLEAN:
      - MySQL fornece BOOLEAN ou BOLL como sinônimo de TINYINT (1)
      - zero é considerado falso e o valor diferente de zero é sonsiderado verdadeiro
      - literais booleanos, usam as constantes TRUE e FALSE que avaliam 1 e 0, respectivamente
    - FLOAT (m, d)
      - número de ponto flutuante que não pode ser usigned
      - comprimento de exibição (m)
      - número de decimais (d)
      - não é obrigatório e o padrão será 10,2 onde 2 é o número de decimais e 10 é o número de dígitos
      - precisão decimal pode chegar a 24 casas para o tipo float
      - requer 2 bytes para armazenaento
    - DOUBLE (m, d)
      - número de ponto flutuante de precisão dupla
      - comprimento de exibição (m)
      - número de decimais (d)
      - não obrigatório e o padrão será 16,4 onde 4 é o número de decimais
      - precisão decimal pode chegar a 53 casas para um duplo
      - real é sinônimo de duplo
      - requer 8 bytes para armazenamento
    - DECIMAL:
      - número de ponto flutuate descompactado
      - cada decimal corresponde a 1 byte
      - necessário definir o comprimento de exibição (m)
      - necessário definir o número de casas decimais (d)
    - BIT:
      - armazena valores de bit na coluna da tabela
      - (m) determina o número de bits por valor que tem um intervalo de 1 a 64
    - BOLL:
      - apenas para a condição verdadeira e falsa
      - considera o valor numérico 1 como verdadeiro e 0 como falso
    - BOOLEAN:
      - semelhante ao BOLL

### Tipos de dados de data e hora:

- Usado para representar valores temporais:
  - data
  - hora
  - data e hora
  - carimbo de data/hora (Time Stamp)
  - ano
- tipo temporal contém valores, incluindo zero.
- para valores inválidos, o MySQL não pode representá-lo, e então é usado o valor zero:

```
DATE        '0000-00-00' 3 bytes
TIME        '00:00:00' 3 bytes
DATETIME    '0000-00-00 00:00:00' 5 bytes + | de '1000-01-01 0:00:00' a '9999-12-31 23:59:59'
TIMESTAMP   '0000-00-00 00:00:00' 4 bytes + | de '1970-01-01 00:00:01' UTC a '2038-01-19 03:14:07'
YEAR        '0000' 1 byte
```

### Tipos de dados de string:

- usado para armazenar texto simples e dados binários
  - arquivos, binários, etc.
- MySQL pode realizar busca e comparação de valores de string
- usar a correspondência de padrões:
  - operador LIKE
  - Expressões regulares
- CHAR(length)
  - tamanho máximo de 255 caracteres (preenche com branco caracteres não ocupados)
  - tamanho é o número de caracteres a serem armazenados
- VARCHAR(length)
  - tamanho máximo de 255 caracteres
  - cadeia de comprimento variável
- TINYTEXT(length)
  - tamanho máximo de 255 caracteres
  - tamanho é o número de caracteres a serem armazenados
- LONGTEXT(length)
  - tamanho máximo de 4 GB ou 4.294.967.295 caracteres
  - úmero de caracteres a serem armazenados
- BINÁRIO(length)
  - tamanho máximo de 255 caracteres
  - tamanho é o número de caracteres binários para armazenar
- BLOB
  - tipo de dados que pode conter uma quantidade variáel de dados
  - Binary Large Object compatíveis com MySQL
  - pode armazenar imagens, arquivos PDF, multimídia e outros tipos de dados binários:
  ```
  TINYBLOB de 0 a 255 bytes
  BLOB de 0 65.535 bytes
  MEDIUMBLOHB de  a 16.777.215 bytes 
  LONGBLOB de 0 a 4.294.967.295 bytes
  ```
### Tipos de dados espaciais:

- usado para armazenar vários valores geométricos
- corresponde as classes OpenGIS

- POINT:
  - ponto ou agregado de pontos que pode conter valores espaciais de qualquer tipo
  - ponto: na geometria representa uma coordenada gráfica
  - armazena os valores das coordenadas X, Y - POINT(15, 20)
  - define um ponto de localização - GeoT('POINT(15, 20)')
- POLYGON:
  - superfície plana que representa a geometria multifacetada
  - definido por zero ou mais limites internos e apenas um limite externo
- LINESTRING:
  - curva que tem umou mais valores de pontos
  - quando apenas dois pontos, sempre representará Linha

### Tipo de dados JSON

- permite armazenaer e acessar o documento JSON de forma rápida e eficiente
- fornece validação automática de documentos JSON
- documentos inválidos em colunas JSON, isso produz um erro
- formato de armazenamento ideal
- 
