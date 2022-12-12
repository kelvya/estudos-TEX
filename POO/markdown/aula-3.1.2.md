# 3.1.2 – Encapsulamento

As classes (que são abstrações) devem ter atributos e métodos

## Exemplo JavaScript:
```
class Usuario{
    nome: string;

Constructor(nome:string){
    this.nome = nome;
}

perfil(){
    console.log(`Olá: ${this.nome}`);
}
}

let usuario = new usuario('Super Man')

usuario.perfil()// Olá Super Man
```

## Encapsulamento:

- getters(leitura)
- setters(escrita)