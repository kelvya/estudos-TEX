# 3.1.3 – Herança

Capacidade de criar classes a partir de uma existente.

Usa a palavra ```extends``` para estender as características das classes, da super classe para a sub classe

Ex:

```
class Animais{
    private genero: string
    public get genero(){
        return this.genero
    }
}
```
class Aquatico extends Animais{
    private concha: boolean
    private vadadeira: boolean
    private habitat: string

    super(genero)

    public get habitat(){
        return this.habitat;
    }
}
```
```
class Terrestre extends Animais{
    private alimento: stringt
    private garras: boolean

    super(genero)

    public get alimento(){
        return this.alimento;
    }
}
```
```
