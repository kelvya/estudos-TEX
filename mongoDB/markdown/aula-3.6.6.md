# 3.6.6 – Características e vantagens do MongoDB – parte 2

## Vantagens do MongoDB sobre os RDBMS

- Schema less:
  - um banco de dados de documentos usa a coleção que contém diferentes documentos
  - números de campos, conteúdo e tamanho do documento podem ser diferentes
  - a estrutura de um único objeto é clara
  - sem junções complexas
  - capacidade de consulta profunda

- Linguagem de consulta baseada em documentos:
  - quase tão poderosa quanto o SQL
  - usa memória interna para armazenar o conjunto de trabalho
  - permite acesso mais rápido aos dados
  - armazenamento orientado a documentos
  - dados são armazenados na forma de documentos no estilo JSON

## Modelo de dados

- Modelo de dados incorporado e modelo de dados normalizado
  - Modelo de dados INCORPORDO:
    - 'embutir todos os dados relacionados em um único documento'
    - conhecido como modelo de dados desnormalizados
    - Exemplo:
      ```
       • Informações obtidas em 3 documentos diferentes:
        dados_pessoais, contato e endereço podem ser incorporado em um único documento

        {
            _id: ,
            Funcionário_ID: "10025AE336"
            Dados_pessoais: {
                Nome: "Zezinho",
                Sobrenome: "Freeze",
                Data_De_Nascimento: "1970-11-24"
            },
            Contato: {
                email: "zezinho@email.com",
                celular: "1199999999"
            },
            Endereço: {
                cidade: "Xixá",
                estado: "Goiás",
                cep: 00000-000
            }
        }
        ```
  - Modelo de dados NORMALIZADO:
    - consultas de subdocumentos no documento original, usando referências
    - Exemplo:
      ```
      Reescrevendo o documento anterior para o modelo normalizado:

      • Documento Funcionário:
      {
        _id: <ObjectId101>,
        Funcionario_ID: "10025AE336"
      }

      • Documento Dados Pessoais:
      {
        _id: <ObjectId102>,
        Funcionario_DocID: "ObjectId101",
        Nome: "Zezinho",
        Sobrenome: "Freeze",
        Data_De_Nascimento: "1970-11-24"
      }

      •Documento Contato:
      {
        _id: <ObjectId103>,
        Funcionario_DocID: "ObjectId101",
        email: "zezinho@email.com",
        celular: "1199999999"
      }

      •Documento Contato:
      {
        _id: <ObjectId104>,
        Funcionario_DocID: "ObjectId101",
        cidade: "Xixá",
        estado: "Goiás",
        cep: 00000-000
      }
      ```

## Projetando o esquema no MongoDB

- Avaliar os requisitos
- Combinar objetos (trabalhando com documentos incorporados sempre que possível)
- Observar sempre e verificar se não exite a necessidade de junções
- Não tem problema em duplicar dados: o espaço em disco é barato em comparação com o tempo de computação
- junções devem ocorrer durante a gravação, não na leitura(A leitura não pode ser complexa).
- Otimizar o esquema para os casos de uso mais frequente.

## Cenário

Postagem de comentários tem os seguintesrequisitos para cada post:

- título, descrição e url
- uma ou mais tags
- nome do autor 
- número de curtidas
- comentários fornecidos pelos usuários:
  - nome, mensagem, data-hora e curtidas
- zeros ou mais comentários

Nos esquemas dos RDBMS teriam no mínimo 3 tabelas: COMENTARIOS, POSTS, LISTAGEM_TAGS.

Já no esquema do MongoDB:
```
{
    _id: POST_ID
    title: TITULO_POST,
    description: DESCRICAO_POST,
    by: AUTOR,
    url: URL_POST,
    tags: [TAG1, TAG2, TAG3],
    likes: TOTAL_LIKES,
    comments: [
        {
            user: 'USER',
            message: 'TEXT',
            dataCreated: DATE_TIME,
            like: 'LIKES'
        },
        {
            user: 'USER',
            message: 'TEXT',
            dataCreated: DATE_TIME,
            like: 'LIKES'
        },
        {
            user: 'USER',
            message: 'TEXT',
            dataCreated: DATE_TIME,
            like: 'LIKES'
        }
    ]
}
         

