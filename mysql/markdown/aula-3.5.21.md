# 3.5.21 – Restrições do tipo ForeignKey

## Restrição foreign key

- usada para evitar ações que destruam os links entre as tabelas
- campo (ou coleçã de campos) em uma tabela, que se refere ao PRIMARY KEY em outra tabela
- tabela com a chave estrangeira: tabela filho
- tabela com a chave primária: tabela referenciada ou tabela pai
  - FOREIGN KEY (chave estrangeira) REFERENCES persons (Chave primária)
  - CONSTRAINT FK_nome_da_chave FOREIGN KEY (chave estrangeira)
  - REFERENCES nome_da_tabela (chave primária)