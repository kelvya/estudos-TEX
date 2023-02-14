# 3.8.17 – Tratando arquivos estáticos com Express

- Arquivos estáticos: imagens, arquivos css e arquivos javascript
- use express.static
- Função de middleware integrada no Express

```express.static(root, [options])```

- Root especifica o diretório raiz a partir do qual os recursos estáticos serão exibidos
- Exemplo:
  - exibindo arquivos em um diretório chamado public
  ```
  app.use(express.static('public'))
  ```

  ```
  http://localhost:3000/css/style.css
  ```

- Os arquivos relativos ao diretório estático são acessados
- O nome do diretório estático não faz parte da url
- Use vários diretórios de recursos estaticos chamando express.static várias vezes:
  ```app.use(express.static('public'))```

  ```app.use(express.static('public'))```

- Os arquivos são acessados na ordem em que se define os diretórios estáticos com express.static
- Para melhor performance pode-se usar um cache de proxy reverso nos ativos estáticos
- Pode-se criar um prefixo de caminho virtual
- O caminho não existe de fato no sistema de arquivos
- Especificar um caminho de montagem para o diretório estático

```app.use('/arquivos', express.static('public'))```

```http://localhost:3000/arquivos/css/style.css```

- IMPORTANTE:
  - o caminho que é fornecido para o express.static é relativo ao diretório de onde se inicia o processo
  - ao executar o aplicativo express de outro diretório é mais seguro usar o caminho absoluto

```
const path = require('path')
app.use('/arquivos', express.static(path.join(__dirname, 'public')))
```





## Códigos usados em aula:

[meuApp](/nodeJs/codigos/meuApp/)