# 2.8.34 – VueX – Conceitos

VueX é um recurso que pode ser instalado, adicionando ao framework Vue.js

- É um padrão de gerenciamento de estado
- Serve como uma biblioteca para aplicações Vue.js
- Serve como um store centralizado para todos os componentes em uma aplicação
- Dentro desse store contém regras que garantem que o estado só possa ser mudado de forma previsível

## instalação do Vuex:
```
vue add vuex
```
## Objetivo do Vuex:
- Gerenciar o estado de todos os componentes presentes em sua aplicação Vue
- O estado são os dados nos quais seus componentes dependem

## Exemplos de estado:
- Tarefas em uma lista
- Postagens em um blog
Esses dados são chamados de estado

## Problemas que o Vuex resolve:
- Descendências longas onde existem muitos componentes filhos
- Quando precisam reagir a mesma mudança de dados
- Passar os dados do filho para o pai até chegarmos ao ancestral mais próximo
- Depois desse ancestral para o filho específico

## Considerações:
- Todo componente tem um estado
- Aplicações maiores representam aumento significativo nos componentes
- Sem Vuex cada um dos componentes gerenciará seu próprio estado usando APIs Vue.js
- Vue mantém uma arquitetura de componentes em forma de árvore
- Permite a comunicação pai filho usando props e emit
- Vuex abstrai o estado de um módulo inteiro
- Mantém um armazenamento centralizado
- Segue o padrão de gerencimento de estado
- Se comunica cm seus componentes de acordo
- Útil quando os componentes de uma aplicação precisam ter uma fonte de dados abstrata
- Elimina o uso de props e emitters
- Economiza tempo e gera performance
  
## Exemplo:
- Vuex é popular na autenticação de aplicativos complexos que usam Vue.js
    - disponiblidade do token
    - controles de acesso
    - bloqueios de rota
    - mutations, getters e setters ajudam nessa tarefa

- Vuex faz o isolamento da lógica de autenticação x lógica do aplicativo
- Cria um fluxo de autenticação rastreável
- Dados acessíveis
  
## Cenário de uso:
- Tamanho do aplicativo 
- Complexidade dos dados
  
Importante:

Vuex é verboso

Tem que seguir um padrão para garantir que as mudanças em seu estado aconteçam

## API de composição:
- Permite uma melhor reutilização de lógica
- organização de código em aplicativos Vue
- Possui padrão modular
- Permite compor de forma flexível a lógica de um componente
- Pode-se usar a API de composição como uma loja
- Compor fiunção que mais tarde servirá como sua loja comartilhada
- Uma solução para um aplicativo menor em comparação com que o Vuex pode trazer



## Código usado em aula:

[OptionAPI.vue](https://github.com/kelvya/projeto_rotas/blob/master/src/components/OptionAPI.vue)

[App.vue](https://github.com/kelvya/projeto_rotas/blob/master/src/App.vue)