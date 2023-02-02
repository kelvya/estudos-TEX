# 3.6.2 – Iniciar serviços do MongoDB


## Iniciar e habilitar o serviço MongoDB:

- verificar qual o seu sistema de inicialização:
  - ```ps --no-headers -o comm 1```

O padrão do serviço MongoDB é desabilitado na instalação

- para verificar o status:
  - ```sudo systemctl status mongod```
- para iniciar:
  - ```sudo systemctl start```
- parar o serviço
  - ```sudo systemctl stop```
- habilitar o MongoDB para iniciar na inicialização:
  - ```sudo systemctl enable mongod``` 

- CLI (acessar o shell do MongoDB):
  - ```mongosh```
  - Para visualizar os bancos:  
  ```show databases```
  - Para criar um banco:
  ```use nome_do_banco```
  - comando de diagnóstico:
    - ```mongosh --eval 'db.runCommand({ connectionStatus: 1 })'``` 


