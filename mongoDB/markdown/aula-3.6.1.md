# 3.6.1 – Conceitos sobre banco de dados noSql

- É um SGBD NoSQL
- É orientado a documentos
- É de código aberto
- É multiplataforma
- Casos de uso:
  - criação de aplicativos rápidas e escaláveis
  - criação de aplicativos lidando com grandes números de dados
- MongoDB usa o formato JSON para armazenar dados e documentos
  - os dados são formatados em pares (chave, valor)
  - os nomes e valores dos campos são separados por dois pontos e encapsulados entre chaves
- Para o curso foi instalado o MongoDB Communiy Edition

## Instalação pelo Windows:

[MongoDB Community Server Download](https://www.mongodb.com/try/download/community)

[MongoDB Shell Download](https://www.mongodb.com/try/download/shell)

- No prompt de Comando:
  ```mongosh```

  - Para visualizar os bancos:  
  ```show databases```

  - Para criar um banco:
  ```use nome_do_banco```

## Instalação pelo Linux (Ubuntu):

[DOCs - Instale o MongoDB Community Edition no Ubuntu](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)

A) Chave pública:

- Opção 1 para importar a chave pública do MongoDB no sistema:
  
  ```wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -```

- Opção 2 para importar a chave pública do MongoDB no sistema (caso a opção 1 não dê certo):
  
  ```curl -fsSL https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -```

deve apresentar: ```Saída: OK```

B) Criar o arquivo de lista:

- adicionar o repositório APT do mongo no diretório /etc/apt/sources.list.d
  - ```echo "deb [ arch=amd64, arm64 ] https://repo.mogodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongobd-org-6.0.list```

- recarregar o índice de pacote local:
  - ```sudo apt update```

- instalar o meta-pacote mongodb-org que fornace o MongoDb:
  - ```sudo apt-get install -y mongodb-org```

- Verificar a versão do MongoDb instalada:
  - ```mongo --version```

