# 3.1.9 – Protótipos em Javascript vs Classes

## Prototype x Classe

- Protótipos são mecanismos de herança entre objetos
  
- Cadeia de protótipos
  
- Cada objeto em javaScript tem uma propriedade interna chamada prototype (protótipo)
  
- O protótipo em sí é um objeto

## Comparação de protótipos com OPP
- OPP trata de modelagem como uma coleção de objetos
  
- Um objeto oferece uma interface pública para outro que queira acessá-lo
  
- Outras partes do sistema não precisam se preocupar com o que está acontecendo no objeto

- Em JavaScript os construtores fornecem algo semelhante a definição de classe
  
- Quando um método é definido na prototype de um construtor, todos os objetos criados com base nesse construtor vão obter esse método por intermédio de seu protótipo
  
- O overding de métodos ocorre simplesmente reescrevendo o método específico


- OPP classes e objetos são duas construções separadas
  
- JS criamos objetos sem qualquer definição de classe com funções ou literais de objeto

- OPP quando uma subclasse é instanciada cria-se um único objeto que contém a combinação das propriedades e métodos da superclasse
  
- JS no nível de hierarquia da prototipagem, cada nova hierarquia é composta de um objeto separado vinculado pelas propriedades de seu protótipo interno

- JS possui um comportamento de cadeia de protótipos que se comporta mais como delegação do que herança

-JS construtores e protótipos podem ser usados para implementar padrões OPP, mas convém o uso de classes


## Arquivo usado em aula:

[index_05_JSPOO.html](/POO/codigos/index_05_JSPOO.html)