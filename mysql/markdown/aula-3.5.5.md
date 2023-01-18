# 3.5.5 – Criando um Diagrama de Classes

Importante ferramenta do desenvolvimento de sistemas

Quando feita corretamente a modelagem propicia:

- o correto desenvolvimento da base de dados
- reduz a taxa de falhas durante a análise

- 1..1:
![1..1](/mysql/markdown/images/1..1.png)

- 1..n:
![1..n](/mysql/markdown/images/1..n.png)

- n..n:
![n..n](/mysql/markdown/images/1..n.png)


- Diagrama Entidade Relacionamento: Representação gráfica do modelo
- modelar um domínio, criar sua representação gráfica
- facilita a compreensão sobre o esquema
- oferece uma linguagem visual
- Notação original: definida por Peter Chen, criador do modelo Entidade Relacionamento
  - retângulos para representar entidades
  - elipses para os atributos
  - losangos para os relacionamentos ligados as entidades por Linhas
  - cordinalidade (1..1, 1..n ou n..n)
  - notações modernas: os atributos aparecem listados na própria entidade
  - EXEMPLO:
  - ![exemplo de nodação moderna](/mysql/markdown/images/diagramas-modernos.png)

  - VEÍCULO E RESERVA:
  - 1..n:
    - um veículo pode estar associado a várias reservas
    - uma reserva pode se associar apenas a um veículo
  - PESSOA E LOCAÇÃO
  - 1..n:
  - uma pessoa está associada a várias locações
  - uma locação pode se associar a apenas uma pessoa

## Modelando um sistema de exibição de filmes com foco específico em salas de cinema:

1- Identificar as entidades envolvidas no contexto:

- entidades físicas: Espectador, Sala, FIlme
- entidades lógicas: Sessão
- entidades fortes: Espectador, Filme, Sala
- entidades fracas: Sessão

2- Verificar os relacionamentos:

- espectador assiste a várias sessões
- várias sessões contém vários filmes
- vários filmes pertencem a uma sessão

ABSTRAÇÂO:

- entidade sessão representa filmes contidos em um período de tempo
- uma sessão contém vários filmes e um filme pode estar contido em várias sessões
- entidade sessão é composta de chaves das 3 entidades princpais
- possui dados complementares como início e fim ou dia da semana
- entidade sessão possui o relacionamento n..n, subdividido em dois relacionamentos 1..n
  - uma sessão contém vários filmes
  - um filme só pode estar contido em uma única sessão restrito pela chave primária da sessão
  - um filme pode ser exibido em várias salas ou sessões
  - cada sessão ou sala refere-se a um único filme
  - 






