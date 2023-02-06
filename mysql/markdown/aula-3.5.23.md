# 3.5.23 – Restrições do tipo Check

Restrição de verifcação

- Usada para limitar o intervalo de valores que podem ser colocado em uma coluna
- Permite apenas determinados valores para uma determinada coluna
- Limita os valores em determinadas colunas com base nos valores de outras colunas
- Exemplo: verificação de idade <=16
  ```
  CREATE TABLE Usuario (
    id_usuario INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    sobrenome VARHAR(255),
    idade INT,
    CHECK (idade>=16)
  );
  ```
- Duas ou mais colunas:
  ```CONSTRAINT CHK_person CHECK (idade >=18 AND cidade='Sandnes')```