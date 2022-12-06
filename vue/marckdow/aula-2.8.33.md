# 2.8.33 – Methods vs Computed

As expressões que são usadas no template sempre são direcionadas para operações simples e colocar muita lógica nesses templates pode torná-los extensos e difíceis de manter.

Exemplo:

```
export default{
    data(){
        return{
            user: {
                nome: 'Tom Mazzeo',
                pedidos: [
                    'Lazanha 4 queijos', 
                    'Feijoada',
                    'Sopa de Legumes'
                ]
            }
        }
    }
}
```

Para exibir mensagens diferentes dependendo se usuário já tem um histórico de pedidos de um ou mais produtos:
```
<p>Pedidos Anteriores:</p>
<span>{{ user.pedidos.length > 0 ? user.pedidos.length : '0' }}</span>
```

O template pode ficar um pouco confuso dependendo da quantidade de dados que tem que tratar

Perceba que ele realiza um cálculo dependendo de user.pedidos

Evite ser repetitivo se precisar incluir esse cálculo no template mais de uma vez.

## Os benefícios de usar o Computed:

Ele tem a capacidade de executar uma lógica complexa que inclui dados reativos (assim que algo modifica ele automaticamente responde)

Ele é sempre recomendado quando temos essa propriedade computada (quando tenho o resultado que derivado de outras situações)

Refatorando:
```
export default{
    data(){
        return{
            user: {
                nome: 'Tom Mazzeo',
                pedidos: [
                    'Lazanha 4 queijos',
                    'Feijoada',
                    'Sopa de Legumes'
                ]
            }
        }
    },
    computed: {
        msgPedidos(){
            return this.user.pedidos.length > 0 ? this.user.pedidos.length : 0 
        }
    }
}

//TEMPLATE:
<p>Pedidos Anteriores:</p>
<span>{{ msgPedidos }}</span>
```

- ```msgPedidos```: propriedade computada declarada
- altere o valor de ```pedidosArray``` e ```msgPedidos``` mudará de acordo
- ```msgPedido```s depende de ```this.user.pedidos```
- o Vue atualizará as ligações que dependem de ```this.msgPedidos``` quando ```this.user.pedidos``` for alterado
  
Podemos obter o mesmo resultado invocando um método:
```
MODELO
<p>{{ msgPedido() }}</p>

methods:{
    msgPedido(){
        return this.user.pedidos.length > 0 ? 
    }
}
```

- O resultado final das duas abordagens parece o mesmo.
- A diferença:
    - Propriedades computadas são armazenadas em cache
    - Propriedades computadas tem base em suas dependências reativas
    - Propriedades computadas só será revalidada quando uma de suas dependências reativas for alterada
    - Propriedades computadas são, por padrão,  somente getter.

- Se ```user.pedidos``` não se altera:
    - O acesso múltiplo a ```msgPedidos``` retorna imediatamente o resultado calculado anteriormente sem precisar executar a função getter novamente

- Uma invocação de método executará a função sempre que ocorrer uma nova renderização.

Exemplo:

- Se você tem um cache que precisa fazer um loop através de matrizes grandes e precisa fazer muitos cálculos.
- Podemos ter outras propriedades computadas que dependem da propriedade do loop.
- Sem cache executamos muito mais vezes do que o necessário.
- Use uma chamada de método quando não precisa de cache.
  
```
export default{
    data(){
        returm{
            first name: 'John',
            lastName: 'Doe'
        }
    },
    computed: {
        fullName: {
            //getter
            get(){
                return this.firstName + '' + this.lastName
            },
            //setter
            set(newValue){
                // Nota: estamos usando a sintaxe de atribuição via desestruturação aqui (destructuring assignment - é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas)
                [this.firstName, this.lastName] = newValue.split(' ')
            }
        }
    }
}
```

## Melhores práticas:

Getters devem ser livres de efeitos colaterais:
- Funções getter computadas devem realizar apenas computação pura
- Não faça solicitações assíncronas
- Não modifique o DOM dentro de um getter computado
- Declarativamente, um computed, é a descrição de um valor com base em outros valores.
- O único objetivo deve ser calcular e retornar esse valor
- O valor retornado de uma propriedade compuada é o estado derivado.
- Um instantâneo temporário
- Toda vez que o estado de origem muda, um novo instantâneo é criado.
    - Não faz sentido criar um instantâneo
    - Um valor de retorno calculado deve ser tratado como somente leitura
    - Um valor de retorno nunca sofre mutação
    - É o resultado de uma mudança no estado de origem do qual depende
    - Que por consequência acionará novos cálculos

## Código usado em aula:

[OptionAPI.vue](https://github.com/kelvya/projeto_rotas/blob/master/src/components/OptionAPI.vue)

[App.vue](https://github.com/kelvya/projeto_rotas/blob/master/src/App.vue)
