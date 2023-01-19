# 3.5.7 – Conceitos sobre tabelas em MySQL



## Tipos de tabelas/mecanismos de armazenamento SQL

- recursos essenciais que podem ser usados para maximizar o desempenho do banco de dados
- lida com operações de criação, leitura e atualização para armazenar e gerenciar informações
- tipos de tabelas/motores de armazenamentos suportados no MySQL:
  - ISAM (descontinuado)
  - MYISAM
  - MERGE
  - InnoDB
  - MEMORY (HEAP)
  - ARCHIVE
  - BDB4
  - CSV
  - FEDERATED

```mysql> show engines;```:

- valor da coluna suport: indica se um mecanismo pode ou não ser usado no servidor atual
- YES, NO ou DEFAULT: disponível, não disponível e disponível como o tipo padrão
- objetivo: otimizar o desempenho do banco de dados

## Tabela ISAM

- método de acesso sequencial indexado
- foi descontinuado e removido do MySQL versão 5.x
- MyISAM agora substitui as funcionalidades desta tabela
- o tamanho de uma tabela ISAM é de 4GB, o que requer hardware caro

## Tabela MyISAM

- extensão do mecanismo de armazenamento ISAM
- tipos otimizados para compactação e velocidade
- podem ser facilmente transportáveis entre sistema para sistema
- antes da versão 5.0, era o tipo de tabela disponível padrão
- atualmente o InnoDB é o tipo de tabela padrão
- o tamanho de tabela MyISAM depende do sistema operacional
- pode ser de até 256TB
- pode ser compactado em tabelas somente leitura que economizam espaço em memória
- pode armazenar 64 chaves por tabela
- constém 1024 bytes de comprimento máximo de chave
- tabelas MYSIAM funcionam muito rápido, mas não são seguras para transações

## Tabela InnoDB

- suporta totalmente o mecanismo de armazenamento seguro para transações
- compatível com ACID
- primeiro tipo de tabela a suportar chaves estrangeiras
- fornecem desempenho ideal
- tamanho pode ser de até 64TB
- são portáteis entre sistemas para sistemas semelhantes ao MYISAM
- podem ser verificadas e reparadas pelo MySQL sempre que necessário

## Tabela MERGE

- também conhecida como MRG_MyISAM
- combina várias tabelas MyISAM com uma estrutura semelhante:
  - (coluna idêntica e informações de índice com a mesma ordem) em uma única tabela
- utiliza índices das tabelas componentes porque não possuem índices próprios
- ao juntar várias tabelas, pode ser usado para acelerar o desempenho do banco de dados
- pode executar apenas as operações INSERT, SELECT, DELETE e UPDATE nas tabelas MERGE
- se usarmos a consulta DROP TABLE neste mecanismo de armazenamento:
  - apenas remove a especificação MERGE e as tabelas subjacentes não podem ser afetados

## Tabela de memória

- cria tabelas, que serão armazenadas em memória
- cionhecida como HEAP, antes do MySQL versão 4.1
- mais rápida do que MyISAM porque usa índices de hash que recuperam resultados mais rapidamente
- dados armazenados na memória podem travar devido a problemas de energia ou falha de hardware
- uso:
  - áreas de trabalho temporárias
  - caches somente leitura para dados extraídos de outras tabelas
  - serão perdidas sempre que o servidor MySQL parar ou reiniciar
  - vida útil dos dados depende do tempo de atividade do servidor de banco de dados

## Tabela CSV

- armazena dados em valores separados por vírgula em um arquivo
- fornece uma maneira de migrar dados para vários pacotes de software diferentes
- não é tão bom quanto um mecanismo de banco de dados geral
- permite-nos trocar dados de forma mais eficas e fácil
- varre toda a tabela durante a operação de leitura

## Tabela federada

- suporta MySQL a partir da versão 5.03
- permite acessar dados de um servidor MySQL remoto sem usar a tecnologia de cluster/replicação
- localizado no armazenamento local não armazena nenhum dado
- ao consultar dados de uma tabela federada armazena na memória local:
  - automaticamente extrai dados das tabelas federadas remotas
  - uma forma de um servidor, não de um cliente, de aceder a uma base de dados remota
  - maneira eficaz de combinar dados de mais de um host
  - copiar dados de bancos de dados remotos em tabelas locais
  - não usa o método de importação e exportação de dados

## Tabela de arquivo

- permite armazenar um grande volume de dados em um formato compacto
- economiza espaço em disco e não pode ser modificado
- perfeito para armazenar dados de log que não estão mais em uso ativo
- Ex: fatura antiga ou dados de vendas
- compacta os dados durante e inserção
- pode descompactá-los usando a biblioteca Z-lib
- suportam apenas as consultas INSERT e SELECT
- não suporta a maioria dos tipos de dados, como o tipo de dados de índice
- armazena as informações em um formato compactado
- para ler a tabela primeiro precisamos descompactar as informações
- processo leva tempo para realizar pesquisas e recuperações complexas

## Tabela DBD

- BDB significa o mecanismo Berkeley DB
- desenvolvido pelo software SleepCat
- semelhante ao InnoDB na transação segura
- tem base no mecanismo de armazenamento de hash
- torna a recuperação das informações muito rápida
- suporta bloqueio de nível de página
- o arquivo de dados não é portátil


