# 3.2.1 – Conceitos de API Rest

API (Aplication Programming Interface)

Como os computadores e aplicativos podem se comunicar.

As APIs são intermediadoras entre os aplicativos e o usuário final e o servidor web

## Como a API funciona:

O aplicativo do cliente inicia uma chamada para recuperar informações (uma solicitação/request). Essa solicitação é processada por intermédio de uma URI (Uniform Resource Identifier) - URI é o identificador do recurso.

Depois de receber uma solicitação válida a API faz uma solicitação para o programa externo ou servidor WEB e o servidor envia uma resposta e a API transfere os dados para o aplicativo que fez a solicitação.



## Definição de REST

- REST ou REpresentational State Transfer (Transfrência de Estado Representacional), é um estilo arquitetural que fornece padrões entre sistemas de computador na web, facilitando a comunicação entre sistemas.

- Os sistemas compatíveis com REST, geralmente chamados de sistemas RESTfull, são caracterizados pela falta de estado e por separar as responsabilidades do cliente e do servidor;

- Possibilita a criação de web services, cujas principais diferenças em relação ao modelo tradicional (SOAP) estão na:
  - Utilização semântica dos métodos HTTP (GET, POST PUT e DELETE);
  - Leveza dos pacotes de dados transmitidos na rede;
  - Simplicidade, fazendo desnecessária a criação de camadas intermediárias (Ex.: Envelope SOAP) para encapsular os dados

- Separação entre Cliente e Servidor:
  - A implementação do cliente e do servidor podem ser feitas independentemente, sem que cada um tenha conhecimento do outro;
  - Isso significa que o código no lado do cliente pode ser alterado a qualquer momento sem afetar a operação do servidor, e o código no lado do servidor pode ser alterado sem afetar a  operação do cliente;
  - Desde que cada lado saiba qual formato de mensagens enviar para o outro, eles podem ser mantidos modulares e separados;

- Usando uma interface REST, diferentes clientes atingem os mesmos pontos de extremidade REST, executam as mesmas ações e recebem as mesmas respostas;
- Sem ESTADO:
  - Os sistemas que seguem o paradigma REST são sem estado, o que significa que o servidor não precisa saber nada sobre o estado do cliente e vice-versa;
  - Dessa maneira, tanto o servidor quanto o cliente podem entender qualquer mensagem recebida, mesmo sem ver as mensagens anteriores;
  - Essa restrição é imposta pelo uso de recursos, em vez de comandos;
  - Recursos são os substantivos da web - eles descrevem qualquer objeto, documento ou coisa que você pode precisar armazenar ou enviar para outros serviços;
  - Essas restrições ajudam os aplicativos RESTful a obter confiabilidade, desempenho rápido e escalabilidade, como componentes que podem ser gerenciados, atualizados e reutilizados, sem afetar o sistema como um todo mesmo durante a operação do sistema;

- Na arquitetura REST, os clientes enviam solicitações para recuperar ou modificar recursos, e os servidores enviam respostas para essas solicitações;

- Realizando Requisições:

REST requer que um cliente faça uma solicitação ao servidor para recuperar ou modificar dados no servidor. Uma solicitação geralmente consiste em:
  - Um verbo HTTP (GET, POST PUT e DELETE), que define o tipo de operação a ser executada;
  - Um cabeçalho (metadados), que permite ao cliente passar informações sobre o pedido;
  - Um caminho para um recurso (url);
  - Um corpo de mensagem opcional contendo dados;

- Verbos HTTP:

Existem 4 verbos HTTP básicos que usamos em pedidos para interagir com recursos em um sistema REST:
  - GET - (RETORNA DADOS) recupera um recurso específico (por id) ou uma coleção de recursos;
  - POST - (GRAVA DADOS) cria um novo recurso;
  - PUT - (ALTERA DADOS) atualiza um recurso específico por id;
  - DELETE - (REMOVE DADOS) remove um recurso específico por id;
- Cabeçalhos:
  - No cabeçalho da solicitação, o cliente envia o tipo de conteúdo que pode receber do servidor. Isso é chamado de campo "accept" e garante que o servidor não envie dados que não podem ser compreendidos ou processados pelo cliente;
  - Por exemplo, um arquivo de texto contendo HTML seria especificado com o tipo "text/html";
  - Um arquivo de texto genérico seria denotado como "text/plain".
  EX.:
  ```
  GET /articles/23
  Accept: text/html, aplication/xhtml
  ```
- Caminhos (urls):
- As solicitações devem conter um caminho para um recurso no qual a operação deve ser executada. Nas APIs RESTful, os caminhos devem ser projetado para ajudar o cliente a saber o que está acontecendo;
- Convencionalmente, a primeira parte do caminho deve ser a forma plural do recurso. Isso mantém os caminhos aninhados simples de ler e fáceis de entender;
- Exemplo: fashionboutique.com/customers/223/orders/12
  
- Códigos de Resposta:

| Código de Status |  Significado
| ------------ | ------------- |
| 200 (OK) | Resposta padrâo para solicitações HTTP bem-sucedidas. |
| 201 (CREATED) | Resposta padrão para uma solicitação HTTP que resultou em um item sendo criado com sucesso |
| 204 (NO CONTENT) | Resposta padrão para solicitação bem sucedida, em que nada está sendo retornado no corpo da resposta |
| 400 (BAD REQUEST) | A solicitação não pode ser processada devido a sintaxe de solicitação incorreta, tamanho excessivo ou outro erro do cliente |
| 403 (FORBIDDEN) | O cliente não tem permissão para acessar este recurso |
| 404 (NOT FOUND) | O recurso não pode ser encontrado neste momento. É possível que tenha sido excluído ou ainda não exista |
| 500 (INTERNAL SERVER ERROR) | Resposta genérica para uma falha inesperada, se não houver mais informações específicas disponíveis |

- Para cada verbo HTTP, existem códigos de respostas esperados que um servidor deve retornar após o sucesso:

| VERBO HTTP | CÓDIGO DE STATUS ESPERADO |
| --- | --- |
| GET | 200 (OK) |
| POST | 201 (CREATED) |
| PUT | 200 (OK) |
| DELETE | 204 (NO CONTENT) |


