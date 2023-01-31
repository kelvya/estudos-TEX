# 3.5.1 – Conceito sobre Banco de Dados Relacional

SQL (Structured Query language - Linguagem de Pesquisa Estruturada)

- Vantagens:
  - aprendizado
  - portabilidade
  - longevidade
  - comunicação
  - liberdade de escolha

- Desvantagens:
  - falta de criatividade
  - falta de estruturação

- Comandos (padrão ANSI):
  - DDL
  - DML
  - DCL

## Banco de Dados

- base de dados
- coleção de arquivos
- coleção de informações (dados) relacionadas entre sí

## Registros gravados em um Banco de Dados

- contém informações sobre pessoas
- os dados podem ser tratados e organizados de diversas maneiras
- desde que associados de forma lógica
- consulta eficiênte de informações de pesquisa
  - modelo banco de dados relacional
  - modelo banco de dados NoSql

## Relacionais

- mantidos e manipulados por sitemas Gerenciadores de Banco de Dados (SGBD)
- Desde a década de 80, a tecnologia de gerenciamento de Banco de Dados domina o mercado
- base para praticamente todos os bancos de dados relacionais
- surgiu como um sucessor dos modelos hierárquicos de rede
- restrições de integridade
- garantem a consistência de dados em um banco de dados
- conhecidas como chaves primárias PRIMARY KEY e chaves estrangeiras FOREIGN KEY

## Normalização

- série de passos com determinadas regras sobre a tabela de banco de dados
- separação de dados referentes a elementos distintos em tabelas distintas
- tabelas associadas através da utilização das chaves
- permite um armazenamento consistente
- reduz redundâncias
- diminui as chances dos dados se tornarem inconsistentes
- linguagem de manipulação e consulta de dados
- SQL
- criada pela IBM
- facilidade de uso
- padronizada pelo American national Standard Institute (ANSI)
- padrão oficial de linguagem em abiente relacional

## SGBD (SISTEMA GERENCIADOR DE BANCO DE DADOS)

- consjunto de programas:
  - armazenar modificar e extrair;
  - validação e segurança;
  - otimização de consultas, garantia de integridade de dados;
  - multiplos usuários acessam e manipulam um mesmo banco de dados simultaneamente;
  - tem suporte a sisteas de grande porte;
  - recuperação de falha: voltar ao ponto anterior em que ocorreu a falha;

## Transação

- operação lógica e única sobre os dados
- satisfaz as propriedades ACID
- exemplo:
  - registro de compra debtado de um cartão de crédito:
    - envolce multiplas mudanças: pagamento a vista ou parcelado
    - representa uma transação única

## ACID

- Atomicidade
- Consistência
- Durabilidade
- Isolamento
- representa as propriedades que definem as principais garantias do paradigma de transação
  - atomicidade
  - consistência
  - isolamento