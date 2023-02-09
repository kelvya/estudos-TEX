# 3.7.1 – UseState e UseEffect

Hooks Básicos (UseState, UseEffect)

## UseState

const [state, setState] = useState(initialState)

- Retorna um valor com estado e uma função para atualizá-lo
- Estado retornado (state) = valor passado como primeiro argumento (initialState)
- setState é usada para atualizar o estado
  - aceita um novo valor de estado
  - enfileira a nova renderização do componente

```setState(mewState)```

- Novas renderizações subsequentes:
  - primeiro valor retornado por useState sempre será o estado mais recente
  - sempre após a aplicação das atualizações
- Atualizações funcionais:
  - se novo estado é calculado usando o estado anterior, pode-se passar uma função para setState
  - a função no caso, receberá o valor anterior e retornará um valor atualizado

```
function Contador({contagemInicial}){
    const [contagem, setContagem] = useState(contagemInicial);
    return (
        <>
            Contagem: {contagem}
            <button onClick={() =>setContagem(contagemInicial)}>Reset</button>
            <button onClick={() =>setContagem(contagemAnterior => contagemAnterior -1)}> - </button>
            <button onClick={() =>setContagem(contagemAnterior => contagemAnterior + 1)}> + </button>
        </>
    )
}
```

- os botões "+" e "-":
  - aplica a forma funcional, visto que o valor atualizado tem como base o valor anterior
- botão reset:
  - aplica a forma normal sempre retornando a contagem ao valor inicial
- Importante:
  - caso a função de atualização retorne exatamente o mesmo valor que o estado atual, a nova renderização subsequênte será ignorada completamente

## initialState

- estado usado durante a renderização inicial
- nas renderizações subsequêntes, ele é desconsiderado
- caso necessário, pode-se fornecer uma função a ser executada apenas na renderização inicial

```
const [state, setState] = useState(() =>{
    const initialState = F_iniciar(props);
    return initialState;
})
```

- Ao atualizar um gancho de estado para um mesmo valor do estado atual o React:
  - sairá sem renderizar os filhos
  - sairá sem disparar efeitos
  - não se aprofunda na árvore desnecessariamente

## Atualizações de estado em lote

- O React pode agrupar várias atualizações de estado em uma única renderização
- Estratégia para melhorar o desempenho
- Além da melhora no desempenho, não afeta o aplicativo
- Antes do React 18, apenas atualizações contidas em manipuladores de eventos eram feitas em lote
- React 18: o lote é atualizado para todas as atualizações por padrão
- Atualizações de vários eventos diferentes são processados separadamente para evitar erros lógicos

## useEffect

```useEffect(F_nomeDaFuncao)```

- Na fase de renderização, dentro do corpo principal de um componente não são permitidos side-effects
- Efeitos colaterais:
  - mautations
  - assinaturas (subscription)
  - cronômetros (timers)
  - registros (logging)

- Ação leva a erros confusos e inconsistências na interface do usuário
- Alternativa é a utilização de userEffect
- Função passada em useEffect é executada após a renderização ser confirmada na tela
- Efeitos agem como uma saída de emergência do mundo funcional do React para o mundo imperativo

## Um pouco sobre paradigmas

- Programação declarativa:
  - não enfatiza a ordem de execução, nem o fluxo de controle
  - o foco do desenvolvedor está em:
    - não criar instruções de computação explícitas
    - identificar condições que devam acionar processos de execução
    - permitir que o compilador tome decisões

- Programação Imperativa:
  - torna o código fácil de entender, mas cria extensa quantidade de código para gerenciar
  - o foco do desenvolvedor está em:
    - criar um fluxo de controle, para implementar a funcionalidade
    - descrevre explicitamente cada etapa do processo
    - comandar o copmpilador para executar essas etapas

- Por padrão, efeitos são executados após cada renderização concluída
- caso necessário, pode-se adicioná-los somente quando determinados valores forem alterados

## Limpando um efeito

- Efeitos criam recursos que precisam ser limpos antes que o componente saia da tela
- Uma assinatura ou id de timer, por exemplo
- A função passada em useEffect pode retornar uma função de limpeza
- Exemplo:
  ```
  useEffect(() => {
    const assinatura = props.source.subscribe();
    return () => {
      // Limpeza da assinatura
      assinatura.unsubscribe()
    }
  })
  ```
- Função de limpeza é executada antes que o componente seja removido da interface do usuário
- Estratégia para evitar vazamento de memória
- Se um componente é renderizado várias vezes, o efeito anterior é limpo antes de executar o próximo
- No exemplo uma nova assinatura é criadaq a cada atualização

## Um pouco sobre subscribe

Observável (Observable)

- Fluxo que armazena dados
- Os dados do observável podem ser passados por diferentes threads
- Pode fornecer dados a diferentes componentes

Observador (Observer)

- Consome os dados fornecidos por um Observável
- setState é aplicado para consumir dados de um observável

Inscrição  ou Assinatura (Subscription)

- Recurso que permite a um Observador consumir dados de um Observável
- O Observador é 'assinado' no Observável
- O método sibscribe() é aplicado para inscrever um Observador em um Observável

## Disparando efeitos

- O padrão para efeitos é disparar o efeito após cada rederização concluída
- Um efeito é sempre recriado se uma de suas dependências for alterada
- Pode-se controlar a criação de uma nova assinatura a cada nova atualização mediante  origem ser alterada
- Um segundo argumento para userEffect aplicado ao array de valores do qual o efeito depende

```
useEffect(
  () +> {
    const assinatura = props.source.subscribe()
    return () => {
      assinatura.unsubscribe();
    }
  },
  [props.source],
);
```
