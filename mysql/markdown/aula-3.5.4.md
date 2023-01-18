# 3.5.4 – Tipos de Relacionamento

- identificar entidades
- definir como se dá o relacionamento entre elas
  
## Relacionamento 1..1 (um para um)

- duas entidades envolvidas criam referências
- apontam exclusivamente para uma unidade da outra
- EXEMPLO:
  - Em um banco de dados de um registro civil:
    - uma pessoa cadastrada pode possuir apenas uma certidão de nascimento na base
    - ao mesmo tempo um certidão de nasciento só está associada a uma única pessoa

## Relacionamento 1..n ou 1..* (um para muitos)

- uma entidade envolvida pode criar referências que apontam a várias unidades da outra
- desde que, do outro lado de cada uma das várias unidades referenciadas o apontamento seja exclusivo a uma única da outra entidade
- EXEMPLO:
  - Em um sistema de cadastramento de pets:
    - um tutor pode ter vários pets
    - cada pet só pode estar ligado a um tutor
    - temos duas entidades envolvidas: tutor e pet
    - a diferença está na quantidade de unidades envolvidas de cada lado
- ou ainda, cada entidade, de ambos os lados, podem criar referências para múltiplas unidades da outra
- EXEMPLO:
  - Em um sistema de cinema:
    - um filme pode ser apresentado em diversas salas
    - uma sala pode apresentar vários filmes
    - um objeto do tipo Sala pode referenciar múltiplos objetos do tipo Filme e vice-versa
- ATENÇÃO: 
  - relacionamentos são refernciados com verbos
  - representam a ação que uma exerce sobre a outra
  - EXEMPLO:
    - um expectador assiste a vários filmes
    - um filme é assistido por vários espectadores


![Modelagem entidade-relacionamento](/mysql/markdown/images/modelagem-entidade-relacionamento.png)

## Atributos

- características que descrevem uma entidade
- durante a análise de requisitos devem ser identificados os atributos
- atributos devem ser relevantes dentro do contexto do sistema
- manter o modelo mais simples e objetivo possível
- considerar informações úteis
- EXEMPLO:
  - uma pessoa pode ter um ou mais pets
    - em um contexto de um sistema de currículos esses dados raramente serão úteis

- os atributos podem ser classificados como:
  - descritivos
  - nominativos
  - referenciais
  - simples
  - compostos

### Atributos descritivos

- descrevem características particulares de uma entidade, como peso ou altura

### Atributo nominativos

- descrvem e identificam um objeto: nome, idade e cpf

### Atributos referenciais

- representam a associação de uma entidade com outra em um relacionamento
- um cadastro de pet relaciona o tutor com a entidade pet

### Atributos simples

- um único atributo que descreve uma característica particular da entidade, como nome e idade

### Atributos composto

- conjuto de atributos que compõem uma característica
- um livro é composto por título, resumo, peso, páginas, autor, etc.

## Chaves de associação

- chave primaria:
  - certos atributos identificam a entidade dentro do domínio
  - não podem se repetir
  - cpf ou código de um produto

- chave estrangeira:
  - representa a chave primária da outra entidade
  - Produto usa como chave primária o id do Produto
  - Venda possui um campo idProduto que se relaciona com o campo idProduto da entidade Produto




