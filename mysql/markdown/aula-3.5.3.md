# 3.5.3 – Modelo Entidade Relacionamento

MER: conceito que descreve os objetos representados como entidades

- entidades são objetos envolvidos em uma regra lógica
- uma regra lógica é também conhecida como domínio
- domínios possuem características também conhecidas como atributos
- domínios possuem relacionamentos: definições de como esses atributos se relacionam entre sí
- descreve a estrutura do banco de dados da aplicação
- as diversas entidades, tais como chaves e tabelas intermediárias
- esse modelo de relacionamento inclui tudo que faça sentido no contexto de base de dados relacionais
- comum criar modelos que expressam parte do sistema chamadas de módulo
  - EXEMPLO: dividir a modelagem em partes menores
    - SISTEMA EMPRESARIAL:
      - financeiro
      - vendas
      - expedição
      - RH

## Entidades

- objetivos ou partes envolvidas dentro de um domínio
- classificadas como físicas ou lógicas
- possuem representação no mundo real
- entidades físicas (ocupam lugar no espaço)
  - tangíveis, ou seja, existentes e visíveis no mundo real
  - EX: pessoa, empresa, celular, cartão de crédito, roupa
- entidades lógicas (não possuem lugar no espaço)
  - derivam da interação entre ou com as entidades físicas
  - passam a fazer sentido dentro de um certo domínio (uma regra lógica)
  - não existem fisicamente no mundo real
  - venda de um produto, classificação de um objeto (seu código ou modelo)
  - o nível de função de um usuário do sistema
- ATENÇÃO:
  - entidades são nomeadas com substantivos
  - nomes de entidades devem ter forma clara
  - expecificar o que representam dentro do contexto do domínio
  - classificadas seguindo o motivo da sua existência no mundo real
  - EXEMPLO:
    - Cliente, Produto, Compra, Carrinho, Turma, Usuário

## Entidades fortes

- existem independente de outras entidades
- por sí mesmas já possuem total sentido de existir
- EXEMPLO: 
  - Cliente ou Produto independem de quaisquer outras para existir

## Entidades fracas

- depedem de outras entidades para existir
- sozinhas não fazem sentido
- EXEMPLO:
- Venda depende da entidade Produto e da entidade Cliente
- uma venda sem itens ou sem compradores  não tem sentido

## Entidades associativas

- quando existe a necessidade de associar um entidade a um relacionamento
- modelagem Entidade-Relacionamento
- relacionamento entre as entidades Produto e Venda
- se propaga para diversos clientes que compram unidades diferentes do mesmo produto
- geram diversas vendas
- EXEMPLO:
  - uma empresa decide aplicar uma ação de marketing
  - sortear clientes que compraram determinados produtos
  - imediatamente temos o relacionamento entre a entidade Produto e Venda
  - PROBLEMA: uma entidade não pode ser a um relacionamento existente
  - SOLUÇÃO: 
    - criar uma entidade associativa a um relacionamento existente
    - a entidade Sorteio deve ter os identificadores das entidades Venda e Produto