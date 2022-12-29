# 3.1.21 – Finalizando o Cadastramento de Produtos

## Produto.js
- Métodos:
  - salvar: Armazerna os valores da submissão do form no array produto
  - lerProduto: Recebe os dados da submissão do form
  - validarCampos: Verifica se os campos do form estão preenchidos

## ListaProduto.js
- import Produto
- import AdmProduto
- extends produto

- Métodos:
  - criaListagem: imprime a lista de produtos, se produtos.validação == true
  - ListarItens: monta a lista de produtos parametrizando o array e o container html
  - resetListagem: limpa os campos do form após a submissão

## StorageProduto.js
- import ListaProduto
- extends ListaProduto

- Métodos:
  - setStorage: armazena o array de produtos em localStorage e imprime em tela
  - getStorage: faz a leitura do array de produtos e imprime em tela

## AdmProduto.js
- Métodos:
  - removerproduto: remove um produto cadastrado (tanto em tela como no array em localStorage)
  - editarproduto: atualiza um produto cadastrado (tanto em tela como no array em localStorage)
  
## Main.js
- import StorageProduto
- inicializa o click do fechar/alerta
- inicializa getStorage
- executa setStorage na submissão do form

## Arquivo usado em aula:

[listaProdutos.html](/POO/codigos/projeto_opp/listaProdutos.html)

[Main_lista.js](/POO/codigos/projeto_opp/src/assets/js/Main_lista.js)



