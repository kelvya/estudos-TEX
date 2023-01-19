# 3.5.6 – Instalando o MySQL e o MySql WorkBench

MySQL Server

- software que oferece um servidor de banco de dados SQL muito rápido 
- multithread, multiusuário e robusto
- destina-se a sistemas de produção de carga pesada e de missão crítica
- para incorporação em software implantado em massa
- MySQL é uma marca registrada da Oracle Corporation
- Licenciado duplamente:
  - usuários podem optar por usar como um produto Open Source sob os termos da GNU
  - usuários podem adquirir uma licença comercial padrão da Oracle

## Instalação no Linux:

Para instalar:

```sudo apt-get install mysql-server```

Para conferir a versão:

```mysql --version```

Verificar se está ativo:

```systemctl is-active mysql```

Alterar a senha do root:

```ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'senhaaqui';```

Quando o root está sem senha:

```sudo mysql```

Para entrar com a senha do usuário:

```mysql -u root -p```

Para sair do mysql:

```quit```

## Instalação no Windows:



Para acessar o MySQL no terminal do windows:

- acessar o prompt de comando
- usar o comando ```c ..``` até chegar a raiz
- acessar os arquivos de programa com ```cd Program Files```
- acessar o MySQL com ```cd MySQL```
- acessar o servidor com ```cd MySQL Server 8.0```
- depois ```cd bin```
- e finalmente: ```mysql -h localhost -u root -p```
- agora digitar a senha do seu root do MySQL

se der certo aparecerá no prompt que vc está no MySQL assim:
```mysql>```


### MySQL Workbench

Para instalar:

```snap install mysql-workbench-communit```

- É uma ferramenta de design de banco de dados visual
- integra desenvolvimento SQL
- Administração, design de banco de dados, criação e manutenção
- tudo em um único ambiente de desenvolvimento integrado ao MySQL
- sucessor do DBDesigner 4 do fabFORCE.net
- substitui o pacote de software anterior MySQL GUI Tools Bunble
- Em 5/04/2018:
  - MySQL Wokbench Team anuncia o lançamento público da versão 8.0.11
  - Junto com MySQL Communit Server 8.0.11
- novas versões adicionam suporte para novos recursos de linguagem no MySQL 8.0
- expressões e funções de tabela comum
- suporte para índices invisíveis e persistência de variáveis globais do sistema



