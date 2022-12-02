# 2.8.15 – Conceito sobre o Ciclo de Vida dos Hooks

Hooks são ganchos dentro da especificação do Vue.
A cada instância de um componente Vue, tem uma série de etapas de inicialização.

O Vue precisa configurar a observação dos dados, depois compilar o nodelo e depois montar a instância dentro do DOM e depois disso ele vai monitorar a atualização desses dados, executando diversas funções chamadas Hooks que ficam monitorando esses estágios. Uma grande oportunidade para o programador criar inteligência específicas para estágios específicos.

O ciclo de vida está acondiconado à renderização de um compoente.

Temos a composição de um componente, mas antes mesmo dele ser criado quando a aplicação vai ser montada pelo navegador iniciam-se as opções dessa API Vue, mas apenas depois da instância criada é que existe a renderização, antes não.

Se ainda não foi compilado entra no compilador do template para poder renderizar, vai fazer uma montagem. Essa m ontagem tem também o Hook que verifica como está  e tudo o que está acontecendo antes da montagem ser feita.

Depois temos o início da rendereização que vai fazer o trabalho gerando os nós do DOM, onde a montagem acontece.

A montagem, por sua vez, tem um ciclo. As informações, depois que são renderizadas podem ser alteradas e nessas alterações também temos o Hook antes de ser atualizado e depois de ser atualizado e aqui também tem a oportunidade de fazer algum tipo de inteligência, de lógica que possa ajudar no processo.

Depois desse ciclo de criação, montagem e atualização, também temos os casos em que o objeto deixa de existir dentro da árvore do DOM. Na versão 2 do Vue era destroid agora na versão 3 é unmounted (desmontado). E antes de desmontar também condeguimos recuperar alguma informação e quando ele é desmonmtado ele deixa de fazer parte da árvore do DOM e dá pra fazer uma estratégia para fazer isso.

Momentos importantes:
Ex. No momento da criação você pode fazer alguma lógica que está conectada com o Server-Side Rendering.
Ex. Quando você faz o mounted pode identificar que é um bom momento de trabalhar com as bibliotecas externas que você está solicitando.

É importante que com o tempo se ganhe maturidade para trabalhar com os Hooks.

![create, mounted and unmounted Vue](/vue/Images/img-top.png)
![create, mounted and unmounted Vue](/vue/Images/img-bottom.png)


## Código usado em aula:
[Repositório Vue](##adicionar link do reposotório github referente a aula)
