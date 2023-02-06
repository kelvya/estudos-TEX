# 3.6.13 – Criando índices

- Suporta a resolução eficiente de consultas
- Sem os índices o MongoDB:
  - teria que verificar todos os documentos de uma coleção para selecionar os documentos que correspondem à instrução de consulta
  - Verificação altamente ineficiente, exigindo que o MongoDB processe um grande volume de dados
- Os índices são estruturas de dados especiais
- Conseguem armazenar uma pequena parte do conjunto de dados em um formlário fácil de percorrer
- ele vai armazenar o valor de um campo específico ou conjunto de campos
- Sempre ordenado pelo valor do campo conforme especificado no índice.

## createIndex()

db.[collection].createIndex({KEY:1})

- chave: nome do campo no qual se cria o índice
- 1 para a ordem crescente
- -1 para ordem decrescente
- createIndex() pode criar um índice em vários campos

db.[collection].createIndex({KEY:1, KEY:-1})

- método aceita lista de opções (opcionais)
  - background: boolean
    - índice em segundo plano
    - usado para que a criação de um índice não bloqueie outras atividades do banco de dados
    - true para construir em segundo plano
    - valor padrão é falso
  - unique: boolean
    - índice exclusivo
    - usado para que a coleção não aceite a inserção de documentos em que a chave ou as chaves de índice correspondem a um valor existente no índice
    - true para índice exclusivo
    - valor padrão é falso
  - name: string
    - nome do índice
    - se não especificado, o MongoDB gera um nome de índice
    - concatena os nomes dos campos indexados e a ordem de classificação
  - sparses: boolean
    - true: índice referencia apenas documentos com o campo especificado
    - índices usam menos espaço
    - se comportam de maneira diferente em algumas situações
    - especialmente classificações
    - valor padrão é falso
  - expireAfterSeconds: integer
    - valor, em segundos para controlar por quanto tempo
    - o MongoDB retém documentos nesta coleção
  - weights: document
    - númerto que varia de 1 a 99.999
    - informa a significância do campo em relação aos outros campos indexados em termos de pontuação
  - default_language: string
    - indice de texto que determina a lista de palavras de parada
    - regras para o lematizador tokenizador
    - valor padrão é inglês
  - language_override: string
    - índice de texto 
    - nome do campo no documento que contém o idioma para substituir o idioma padrão
    - valor padrão é idioma

## dropIndex()

-Para descartar um índice específico

db.[collection].dropIndex({KEY:1})

- KEY: nome do arquivo no qual você deseja remover um índice existente
- alternativamente especifique o nome do índice diretamente

dropIndex("nome_do_indice")

db.[collection].dropIndex({'nome_do_indice':1})

## dropIndexes()

- Exclui vários índices (especificados) em uma coleção

db.[collection].dropIndexes()

db.[collection].dropIndexes({"title":1, "description":-1})

