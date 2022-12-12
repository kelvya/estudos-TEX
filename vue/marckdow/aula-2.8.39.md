# 2.8.39 – VueX – Modules

actions, mutations e getters dentro dos módulos:
- são registrados sob o namespace global
- permitem que vários módulos reajam ao mesmo tipo de action/mutation

Módulos mais indenpendentes ou reutilizáveis usam namespaces

Quando o módulo é registrado, todos os getters, actions e mutations herdam o namespace

O caminho base do namespace é o qual o módulo está registrado

Desta forma submódulos podem ser mesclados na loja

```
{
    key: {
        state,
        namespaced?,
        mutations?,
        actions?,
        getters?,
        modules?
    },
    ...
}
```

O state de um módulo será anexado ao estado raiz da loja usando a chave do módulo

Mutations e getters de um módulo recebem apenas o state local do módulo

As actions do módulo context.state também apontam para o estado local
