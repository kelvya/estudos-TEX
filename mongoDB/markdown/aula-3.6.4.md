# 3.6.4 – Protegendo o banco de dados MongoDB

- No MongoDB, a auteticação NÃO está habilitada por padrão
- qualquer usuário com acesso ao servidor de banco de dados poderá (sem nenhuma permissão concedida) - vulnerabilidade grave/violação grave dos seus dados:
  - visualizar dados
  - adicionar dados
  - excluir dados

## Criar um usuário administrativo:

```use Nome_do_bando```

```
db.createUser(
    {
        user: "Zezinho",
        pwd: "123456",
        roles: [ { role: "userAdmin", db: "TesteDB" }, "readWrite"]
    }
)
```

## Habilitar a autenticação

- Abrir o mongodb.config:
  - ```sudo nano etc/mongod.conf```
- Ao abrir o arquivo, localize a securite usando as setas do teclado.
- Ao encontrar security, retire o simbolo hashtag(#) para descomentar o trecho de código, mas mantenha a identação. Como vai ficar:
  - ```
  security:
    authorization: enabled
    ```
- ```Control + o``` para gravar
- ```Enter```
- ```Control + x```
- Reinicie o serviço do Mongo:
  - ```sudo systemctl restart mongod```
  - ```sudo systemctl status mongod```

- Para autenticar um usuário:
- ```mongosh --port 27017 -u "Zezinho" -p '123456' authenticationDatabase 'Nome_do_banco'```