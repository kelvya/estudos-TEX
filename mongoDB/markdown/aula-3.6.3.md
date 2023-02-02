# 3.6.3 – Criando usuários e bases de dados

- Para acessar o terminal no windows ou no Linux:
  - ```mongosh```
- Para listar os bancos:
  - ```show dbs``` ou ```show databases```
- Para chamar um banco de dados:
  - ```use Nome_do_banco```
- Criar o usuário (Ex. Zezinho):
  - ```
  db.createUser(
    {
        user:"Zezinho",
        pwd:"123456",
        roles:[{role:"readWrite",db:"TesteDB"}]
    }
  )
  ```

- Listar usuários criados:
- ```db.getUsers()``` ou ```show users```

- Excluir o usuário:
  - ```
  db.dropUser(
    "Zezinho", {
        w: "majority",
        wtimeout: 4000
    }
    )
    ```
