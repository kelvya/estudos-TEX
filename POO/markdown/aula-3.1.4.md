# 3.1.4 – Polimorfismo

Polimorfismo é o mecanismo que promove a capicidade de fazer utilização dentro da herança a partir da reescrita dos métodos já existentes na classe pai.

Ex:

```
class Pai{
    nome: string;
    constructor(nome:string){
        this.nome = nome;
    }
    imprimirNome(){
        console.log(`Pai: ${nome}. Impressão do nome a partir da classe Pai`)
    }
}
```

```
class Filho extends Pai{
    constructor(nome: string){
        super(nome);
    }
    imprimirNome(){
        console.log(`Filho: ${nome}. Impressão do nome a partir da classe Filho`)
    }
}
```
## Importante:
- Classe é um modelo
- Abstração é a capacidade de modelar conceitos que gerem o modelo
- Um modelo deve ser o entendimento do mundo real
- Não existe maneira mágica de decompor um problema
- Todo objeto sabe a que class pertence
- Objetos são programas, partes dos sistema
- Objetos tem responsabilidades específicas
- Objetos se comunicam entre si por intermédio de eventos
  
## Objetos
- São a representação do mundo real
  
## Classe
- Modelo que define atributos e métodos comuns aos objetos do mesmo tipo
  
## Encapsulamento
- Mecanismo utilizado para disponibilizar métodos que operam e protegem o acesso direto indevido aos atributos de uma instância fora da classe onde estes foram declarados.
  
## Herança
- Mecanismo que permite criar novas classes a partir de classes já existentes na classe a ser extendida.
  
## Polimorfismo
- Mecanismo que usa da herança nas classes promovendo uma reescrita (overriding) de métodos das super classes nas suas subclasses.

